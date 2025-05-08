(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function VP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var iy={exports:{}},Xc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb;function MP(){if(Nb)return Xc;Nb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var d in a)d!=="key"&&(o[d]=a[d])}else o=a;return a=o.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:o}}return Xc.Fragment=e,Xc.jsx=t,Xc.jsxs=t,Xc}var Ob;function LP(){return Ob||(Ob=1,iy.exports=MP()),iy.exports}var F=LP(),sy={exports:{}},Zc={},ay={exports:{}},oy={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb;function UP(){return kb||(kb=1,function(n){function e(he,be){var Te=he.length;he.push(be);e:for(;0<Te;){var Oe=Te-1>>>1,O=he[Oe];if(0<a(O,be))he[Oe]=be,he[Te]=O,Te=Oe;else break e}}function t(he){return he.length===0?null:he[0]}function r(he){if(he.length===0)return null;var be=he[0],Te=he.pop();if(Te!==be){he[0]=Te;e:for(var Oe=0,O=he.length,ie=O>>>1;Oe<ie;){var ge=2*(Oe+1)-1,pe=he[ge],fe=ge+1,De=he[fe];if(0>a(pe,Te))fe<O&&0>a(De,pe)?(he[Oe]=De,he[fe]=Te,Oe=fe):(he[Oe]=pe,he[ge]=Te,Oe=ge);else if(fe<O&&0>a(De,Te))he[Oe]=De,he[fe]=Te,Oe=fe;else break e}}return be}function a(he,be){var Te=he.sortIndex-be.sortIndex;return Te!==0?Te:he.id-be.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],m=[],y=1,v=null,w=3,S=!1,x=!1,k=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function K(he){for(var be=t(m);be!==null;){if(be.callback===null)r(m);else if(be.startTime<=he)r(m),be.sortIndex=be.expirationTime,e(p,be);else break;be=t(m)}}function oe(he){if(k=!1,K(he),!x)if(t(p)!==null)x=!0,Nt();else{var be=t(m);be!==null&&It(oe,be.startTime-he)}}var ae=!1,le=-1,D=5,R=-1;function A(){return!(n.unstable_now()-R<D)}function P(){if(ae){var he=n.unstable_now();R=he;var be=!0;try{e:{x=!1,k&&(k=!1,H(le),le=-1),S=!0;var Te=w;try{t:{for(K(he),v=t(p);v!==null&&!(v.expirationTime>he&&A());){var Oe=v.callback;if(typeof Oe=="function"){v.callback=null,w=v.priorityLevel;var O=Oe(v.expirationTime<=he);if(he=n.unstable_now(),typeof O=="function"){v.callback=O,K(he),be=!0;break t}v===t(p)&&r(p),K(he)}else r(p);v=t(p)}if(v!==null)be=!0;else{var ie=t(m);ie!==null&&It(oe,ie.startTime-he),be=!1}}break e}finally{v=null,w=Te,S=!1}be=void 0}}finally{be?M():ae=!1}}}var M;if(typeof X=="function")M=function(){X(P)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,N=z.port2;z.port1.onmessage=P,M=function(){N.postMessage(null)}}else M=function(){L(P,0)};function Nt(){ae||(ae=!0,M())}function It(he,be){le=L(function(){he(n.unstable_now())},be)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(he){he.callback=null},n.unstable_continueExecution=function(){x||S||(x=!0,Nt())},n.unstable_forceFrameRate=function(he){0>he||125<he?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<he?Math.floor(1e3/he):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(he){switch(w){case 1:case 2:case 3:var be=3;break;default:be=w}var Te=w;w=be;try{return he()}finally{w=Te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(he,be){switch(he){case 1:case 2:case 3:case 4:case 5:break;default:he=3}var Te=w;w=he;try{return be()}finally{w=Te}},n.unstable_scheduleCallback=function(he,be,Te){var Oe=n.unstable_now();switch(typeof Te=="object"&&Te!==null?(Te=Te.delay,Te=typeof Te=="number"&&0<Te?Oe+Te:Oe):Te=Oe,he){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Te+O,he={id:y++,callback:be,priorityLevel:he,startTime:Te,expirationTime:O,sortIndex:-1},Te>Oe?(he.sortIndex=Te,e(m,he),t(p)===null&&he===t(m)&&(k?(H(le),le=-1):k=!0,It(oe,Te-Oe))):(he.sortIndex=O,e(p,he),x||S||(x=!0,Nt())),he},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(he){var be=w;return function(){var Te=w;w=be;try{return he.apply(this,arguments)}finally{w=Te}}}}(oy)),oy}var Vb;function BP(){return Vb||(Vb=1,ay.exports=UP()),ay.exports}var ly={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function zP(){if(Mb)return Ne;Mb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,k={};function L(O,ie,ge){this.props=O,this.context=ie,this.refs=k,this.updater=ge||S}L.prototype.isReactComponent={},L.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},L.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function H(){}H.prototype=L.prototype;function X(O,ie,ge){this.props=O,this.context=ie,this.refs=k,this.updater=ge||S}var K=X.prototype=new H;K.constructor=X,x(K,L.prototype),K.isPureReactComponent=!0;var oe=Array.isArray,ae={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function D(O,ie,ge,pe,fe,De){return ge=De.ref,{$$typeof:n,type:O,key:ie,ref:ge!==void 0?ge:null,props:De}}function R(O,ie){return D(O.type,ie,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function P(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ie[ge]})}var M=/\/+/g;function z(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?P(""+O.key):ie.toString(36)}function N(){}function Nt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function It(O,ie,ge,pe,fe){var De=typeof O;(De==="undefined"||De==="boolean")&&(O=null);var Ce=!1;if(O===null)Ce=!0;else switch(De){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(O.$$typeof){case n:case e:Ce=!0;break;case y:return Ce=O._init,It(Ce(O._payload),ie,ge,pe,fe)}}if(Ce)return fe=fe(O),Ce=pe===""?"."+z(O,0):pe,oe(fe)?(ge="",Ce!=null&&(ge=Ce.replace(M,"$&/")+"/"),It(fe,ie,ge,"",function(Ze){return Ze})):fe!=null&&(A(fe)&&(fe=R(fe,ge+(fe.key==null||O&&O.key===fe.key?"":(""+fe.key).replace(M,"$&/")+"/")+Ce)),ie.push(fe)),1;Ce=0;var ut=pe===""?".":pe+":";if(oe(O))for(var Me=0;Me<O.length;Me++)pe=O[Me],De=ut+z(pe,Me),Ce+=It(pe,ie,ge,De,fe);else if(Me=w(O),typeof Me=="function")for(O=Me.call(O),Me=0;!(pe=O.next()).done;)pe=pe.value,De=ut+z(pe,Me++),Ce+=It(pe,ie,ge,De,fe);else if(De==="object"){if(typeof O.then=="function")return It(Nt(O),ie,ge,pe,fe);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function he(O,ie,ge){if(O==null)return O;var pe=[],fe=0;return It(O,pe,"","",function(De){return ie.call(ge,De,fe++)}),pe}function be(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var Te=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Oe(){}return Ne.Children={map:he,forEach:function(O,ie,ge){he(O,function(){ie.apply(this,arguments)},ge)},count:function(O){var ie=0;return he(O,function(){ie++}),ie},toArray:function(O){return he(O,function(ie){return ie})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ne.Component=L,Ne.Fragment=t,Ne.Profiler=a,Ne.PureComponent=X,Ne.StrictMode=r,Ne.Suspense=p,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Ne.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ne.cache=function(O){return function(){return O.apply(null,arguments)}},Ne.cloneElement=function(O,ie,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var pe=x({},O.props),fe=O.key,De=void 0;if(ie!=null)for(Ce in ie.ref!==void 0&&(De=void 0),ie.key!==void 0&&(fe=""+ie.key),ie)!le.call(ie,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&ie.ref===void 0||(pe[Ce]=ie[Ce]);var Ce=arguments.length-2;if(Ce===1)pe.children=ge;else if(1<Ce){for(var ut=Array(Ce),Me=0;Me<Ce;Me++)ut[Me]=arguments[Me+2];pe.children=ut}return D(O.type,fe,void 0,void 0,De,pe)},Ne.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:o,_context:O},O},Ne.createElement=function(O,ie,ge){var pe,fe={},De=null;if(ie!=null)for(pe in ie.key!==void 0&&(De=""+ie.key),ie)le.call(ie,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(fe[pe]=ie[pe]);var Ce=arguments.length-2;if(Ce===1)fe.children=ge;else if(1<Ce){for(var ut=Array(Ce),Me=0;Me<Ce;Me++)ut[Me]=arguments[Me+2];fe.children=ut}if(O&&O.defaultProps)for(pe in Ce=O.defaultProps,Ce)fe[pe]===void 0&&(fe[pe]=Ce[pe]);return D(O,De,void 0,void 0,null,fe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(O){return{$$typeof:d,render:O}},Ne.isValidElement=A,Ne.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:be}},Ne.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},Ne.startTransition=function(O){var ie=ae.T,ge={};ae.T=ge;try{var pe=O(),fe=ae.S;fe!==null&&fe(ge,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(Oe,Te)}catch(De){Te(De)}finally{ae.T=ie}},Ne.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Ne.use=function(O){return ae.H.use(O)},Ne.useActionState=function(O,ie,ge){return ae.H.useActionState(O,ie,ge)},Ne.useCallback=function(O,ie){return ae.H.useCallback(O,ie)},Ne.useContext=function(O){return ae.H.useContext(O)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(O,ie){return ae.H.useDeferredValue(O,ie)},Ne.useEffect=function(O,ie){return ae.H.useEffect(O,ie)},Ne.useId=function(){return ae.H.useId()},Ne.useImperativeHandle=function(O,ie,ge){return ae.H.useImperativeHandle(O,ie,ge)},Ne.useInsertionEffect=function(O,ie){return ae.H.useInsertionEffect(O,ie)},Ne.useLayoutEffect=function(O,ie){return ae.H.useLayoutEffect(O,ie)},Ne.useMemo=function(O,ie){return ae.H.useMemo(O,ie)},Ne.useOptimistic=function(O,ie){return ae.H.useOptimistic(O,ie)},Ne.useReducer=function(O,ie,ge){return ae.H.useReducer(O,ie,ge)},Ne.useRef=function(O){return ae.H.useRef(O)},Ne.useState=function(O){return ae.H.useState(O)},Ne.useSyncExternalStore=function(O,ie,ge){return ae.H.useSyncExternalStore(O,ie,ge)},Ne.useTransition=function(){return ae.H.useTransition()},Ne.version="19.0.0",Ne}var Lb;function Pv(){return Lb||(Lb=1,ly.exports=zP()),ly.exports}var uy={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ub;function FP(){if(Ub)return wn;Ub=1;var n=Pv();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(p,m,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:p,containerInfo:m,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return o(p,m,null,y)},wn.flushSync=function(p){var m=u.T,y=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=y,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,v=d(y,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):y==="script"&&r.d.X(p,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,v=d(y,m.crossOrigin);r.d.L(p,y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,y){return u.H.useFormState(p,m,y)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var Bb;function jP(){if(Bb)return uy.exports;Bb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),uy.exports=FP(),uy.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zb;function qP(){if(zb)return Zc;zb=1;var n=BP(),e=Pv(),t=jP();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=ae&&i[ae]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case p:return"Fragment";case d:return"Portal";case y:return"Profiler";case m:return"StrictMode";case k:return"Suspense";case L:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case S:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case x:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case X:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=Object.assign,M,z;function N(i){if(M===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||"",z=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+i+z}var Nt=!1;function It(i,s){if(!i||Nt)return"";Nt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(Z){var $=Z}Reflect.construct(i,[],ne)}else{try{ne.call()}catch(Z){$=Z}i.call(ne.prototype)}}else{try{throw Error()}catch(Z){$=Z}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(Z){if(Z&&$&&typeof Z.stack=="string")return[Z.stack,$.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var C=T.split(`
`),U=b.split(`
`);for(f=c=0;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;for(;f<U.length&&!U[f].includes("DetermineComponentFrameRoot");)f++;if(c===C.length||f===U.length)for(c=C.length-1,f=U.length-1;1<=c&&0<=f&&C[c]!==U[f];)f--;for(;1<=c&&0<=f;c--,f--)if(C[c]!==U[f]){if(c!==1||f!==1)do if(c--,f--,0>f||C[c]!==U[f]){var J=`
`+C[c].replace(" at new "," at ");return i.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",i.displayName)),J}while(1<=c&&0<=f);break}}}finally{Nt=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?N(l):""}function he(i){switch(i.tag){case 26:case 27:case 5:return N(i.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return i=It(i.type,!1),i;case 11:return i=It(i.type.render,!1),i;case 1:return i=It(i.type,!0),i;default:return""}}function be(i){try{var s="";do s+=he(i),i=i.return;while(i);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Te(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Oe(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function O(i){if(Te(i)!==i)throw Error(r(188))}function ie(i){var s=i.alternate;if(!s){if(s=Te(i),s===null)throw Error(r(188));return s!==i?null:i}for(var l=i,c=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){l=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return O(f),i;if(g===c)return O(f),s;g=g.sibling}throw Error(r(188))}if(l.return!==c.return)l=f,c=g;else{for(var T=!1,b=f.child;b;){if(b===l){T=!0,l=f,c=g;break}if(b===c){T=!0,c=f,l=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===l){T=!0,l=g,c=f;break}if(b===c){T=!0,c=g,l=f;break}b=b.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:s}function ge(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=ge(i),s!==null)return s;i=i.sibling}return null}var pe=Array.isArray,fe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De={pending:!1,data:null,method:null,action:null},Ce=[],ut=-1;function Me(i){return{current:i}}function Ze(i){0>ut||(i.current=Ce[ut],Ce[ut]=null,ut--)}function Ke(i,s){ut++,Ce[ut]=i.current,i.current=s}var Ut=Me(null),Jt=Me(null),rr=Me(null),as=Me(null);function os(i,s){switch(Ke(rr,s),Ke(Jt,i),Ke(Ut,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?ob(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=ob(i),s=lb(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Ze(Ut),Ke(Ut,s)}function _i(){Ze(Ut),Ze(Jt),Ze(rr)}function $u(i){i.memoizedState!==null&&Ke(as,i);var s=Ut.current,l=lb(s,i.type);s!==l&&(Ke(Jt,i),Ke(Ut,l))}function Go(i){Jt.current===i&&(Ze(Ut),Ze(Jt)),as.current===i&&(Ze(as),$c._currentValue=De)}var $o=Object.prototype.hasOwnProperty,Ra=n.unstable_scheduleCallback,Ko=n.unstable_cancelCallback,ag=n.unstable_shouldYield,Ku=n.unstable_requestPaint,Ln=n.unstable_now,xd=n.unstable_getCurrentPriorityLevel,Gt=n.unstable_ImmediatePriority,en=n.unstable_UserBlockingPriority,yi=n.unstable_NormalPriority,Pd=n.unstable_LowPriority,Qu=n.unstable_IdlePriority,og=n.log,Ca=n.unstable_setDisableYieldValue,ls=null,En=null;function Wu(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ls,i,void 0,(i.current.flags&128)===128)}catch{}}function Vr(i){if(typeof og=="function"&&Ca(i),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(ls,i)}catch{}}var Rn=Math.clz32?Math.clz32:Od,Yu=Math.log,Nd=Math.LN2;function Od(i){return i>>>=0,i===0?32:31-(Yu(i)/Nd|0)|0}var Mr=128,us=4194304;function Ir(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ir(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,f=i.suspendedLanes,g=i.pingedLanes,T=i.warmLanes;i=i.finishedLanes!==0;var b=l&134217727;return b!==0?(l=b&~f,l!==0?c=Ir(l):(g&=b,g!==0?c=Ir(g):i||(T=b&~T,T!==0&&(c=Ir(T))))):(b=l&~f,b!==0?c=Ir(b):g!==0?c=Ir(g):i||(T=l&~T,T!==0&&(c=Ir(T)))),c===0?0:s!==0&&s!==c&&(s&f)===0&&(f=c&-c,T=s&-s,f>=T||f===32&&(T&4194176)!==0)?s:c}function cs(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function Qo(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xu(){var i=Mr;return Mr<<=1,(Mr&4194176)===0&&(Mr=128),i}function hs(){var i=us;return us<<=1,(us&62914560)===0&&(us=4194304),i}function Wo(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Ot(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function kd(i,s,l,c,f,g){var T=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var b=i.entanglements,C=i.expirationTimes,U=i.hiddenUpdates;for(l=T&~l;0<l;){var J=31-Rn(l),ne=1<<J;b[J]=0,C[J]=-1;var $=U[J];if($!==null)for(U[J]=null,J=0;J<$.length;J++){var Z=$[J];Z!==null&&(Z.lane&=-536870913)}l&=~ne}c!==0&&ds(i,c,0),g!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function ds(i,s,l){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-Rn(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|l&4194218}function fs(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-Rn(l),f=1<<c;f&s|i[c]&s&&(i[c]|=s),l&=~f}}function Vd(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Md(){var i=fe.p;return i!==0?i:(i=window.event,i===void 0?32:Sb(i.type))}function ps(i,s){var l=fe.p;try{return fe.p=i,s()}finally{fe.p=l}}var Lr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Lr,$t="__reactProps$"+Lr,vi="__reactContainer$"+Lr,Da="__reactEvents$"+Lr,Yo="__reactListeners$"+Lr,Ur="__reactHandles$"+Lr,Zu="__reactResources$"+Lr,ms="__reactMarker$"+Lr;function xa(i){delete i[tn],delete i[$t],delete i[Da],delete i[Yo],delete i[Ur]}function Ar(i){var s=i[tn];if(s)return s;for(var l=i.parentNode;l;){if(s=l[vi]||l[tn]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=hb(i);i!==null;){if(l=i[tn])return l;i=hb(i)}return s}i=l,l=i.parentNode}return null}function Ei(i){if(i=i[tn]||i[vi]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function gs(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function _s(i){var s=i[Zu];return s||(s=i[Zu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function _t(i){i[ms]=!0}var Ju=new Set,Xo={};function Gn(i,s){Un(i,s),Un(i+"Capture",s)}function Un(i,s){for(Xo[i]=s,i=0;i<s.length;i++)Ju.add(s[i])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ec={},tc={};function Ld(i){return $o.call(tc,i)?!0:$o.call(ec,i)?!1:lg.test(i)?tc[i]=!0:(ec[i]=!0,!1)}function ys(i,s,l){if(Ld(s))if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+l)}}function vs(i,s,l){if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+l)}}function sr(i,s,l,c){if(c===null)i.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(s,l,""+c)}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ud(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ug(i){var s=Ud(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Pa(i){i._valueTracker||(i._valueTracker=ug(i))}function nc(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Ud(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Zo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Ti=/[\n"\\]/g;function At(i){return i.replace(Ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Es(i,s,l,c,f,g,T,b){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+Cn(s)):i.value!==""+Cn(s)&&(i.value=""+Cn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?Jo(i,T,Cn(s)):l!=null?Jo(i,T,Cn(l)):c!=null&&i.removeAttribute("value"),f==null&&g!=null&&(i.defaultChecked=!!g),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+Cn(b):i.removeAttribute("name")}function Na(i,s,l,c,f,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+Cn(l):"",s=s!=null?""+Cn(s):l,b||s===i.value||(i.value=s),i.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function Jo(i,s,l){s==="number"&&Zo(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function Qe(i,s,l,c){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&c&&(i[l].defaultSelected=!0)}else{for(l=""+Cn(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function Oa(i,s,l){if(s!=null&&(s=""+Cn(s),s!==i.value&&(i.value=s),l==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=l!=null?""+Cn(l):""}function Ts(i,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(r(92));if(pe(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=Cn(s),i.defaultValue=l,c=i.textContent,c===l&&c!==""&&c!==null&&(i.value=c)}function ar(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var cg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rc(i,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,l):typeof l!="number"||l===0||cg.has(s)?s==="float"?i.cssFloat=l:i[s]=(""+l).trim():i[s]=l+"px"}function Bd(i,s,l){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&l[f]!==c&&rc(i,f,c)}else for(var g in s)s.hasOwnProperty(g)&&rc(i,g,s[g])}function ic(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Br(i){return dg.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var or=null;function el(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var wi=null,bi=null;function Ii(i){var s=Ei(i);if(s&&(i=s.stateNode)){var l=i[$t]||null;e:switch(i=s.stateNode,s.type){case"input":if(Es(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var f=c[$t]||null;if(!f)throw Error(r(90));Es(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===i.form&&nc(c)}break e;case"textarea":Oa(i,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&Qe(i,!!l.multiple,s,!1)}}}var sc=!1;function zd(i,s,l){if(sc)return i(s,l);sc=!0;try{var c=i(s);return c}finally{if(sc=!1,(wi!==null||bi!==null)&&(Nf(),wi&&(s=wi,i=bi,bi=wi=null,Ii(s),i)))for(s=0;s<i.length;s++)Ii(i[s])}}function ka(i,s){var l=i.stateNode;if(l===null)return null;var c=l[$t]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,s,typeof l));return l}var lr=!1;if($n)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){lr=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{lr=!1}var zr=null,ws=null,Ai=null;function ac(){if(Ai)return Ai;var i,s=ws,l=s.length,c,f="value"in zr?zr.value:zr.textContent,g=f.length;for(i=0;i<l&&s[i]===f[i];i++);var T=l-i;for(c=1;c<=T&&s[l-c]===f[g-c];c++);return Ai=f.slice(i,1<c?1-c:void 0)}function Fr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function jr(){return!0}function oc(){return!1}function nn(i){function s(l,c,f,g,T){this._reactName=l,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(l=i[b],this[b]=l?l(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?jr:oc,this.isPropagationStopped=oc,this}return P(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),s}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=nn(Je),Ma=P({},Je,{view:0,detail:0}),Fd=nn(Ma),nl,rl,qr,La=P({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==qr&&(qr&&i.type==="mousemove"?(nl=i.screenX-qr.screenX,rl=i.screenY-qr.screenY):rl=nl=0,qr=i),nl)},movementY:function(i){return"movementY"in i?i.movementY:rl}}),ur=nn(La),jd=P({},La,{dataTransfer:0}),fg=nn(jd),Ua=P({},Ma,{relatedTarget:0}),il=nn(Ua),lc=P({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),sl=nn(lc),qd=P({},Je,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),al=nn(qd),pg=P({},Je,{data:0}),uc=nn(pg),Ba={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Gd[i])?!!s[i]:!1}function za(){return cc}var $d=P({},Ma,{key:function(i){if(i.key){var s=Ba[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Fr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Hd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(i){return i.type==="keypress"?Fr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),ol=nn($d),Kd=P({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=nn(Kd),Si=P({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),Qd=nn(Si),Wd=P({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yd=nn(Wd),Xd=P({},La,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),ll=nn(Xd),Dn=P({},Je,{newState:0,oldState:0}),Zd=nn(Dn),Jd=[9,13,27,32],Hr=$n&&"CompositionEvent"in window,h=null;$n&&"documentMode"in document&&(h=document.documentMode);var _=$n&&"TextEvent"in window&&!h,E=$n&&(!Hr||h&&8<h&&11>=h),I=" ",j=!1;function W(i,s){switch(i){case"keyup":return Jd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qe=!1;function Kt(i,s){switch(i){case"compositionend":return ue(s);case"keypress":return s.which!==32?null:(j=!0,I);case"textInput":return i=s.data,i===I&&j?null:i;default:return null}}function He(i,s){if(qe)return i==="compositionend"||!Hr&&W(i,s)?(i=ac(),Ai=ws=zr=null,qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!rn[i.type]:s==="textarea"}function Ri(i,s,l,c){wi?bi?bi.push(c):bi=[c]:wi=c,s=Lf(s,"onChange"),0<s.length&&(l=new tl("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var dn=null,Gr=null;function dc(i){nb(i,0)}function ef(i){var s=gs(i);if(nc(s))return i}function PT(i,s){if(i==="change")return s}var NT=!1;if($n){var mg;if($n){var gg="oninput"in document;if(!gg){var OT=document.createElement("div");OT.setAttribute("oninput","return;"),gg=typeof OT.oninput=="function"}mg=gg}else mg=!1;NT=mg&&(!document.documentMode||9<document.documentMode)}function kT(){dn&&(dn.detachEvent("onpropertychange",VT),Gr=dn=null)}function VT(i){if(i.propertyName==="value"&&ef(Gr)){var s=[];Ri(s,Gr,i,el(i)),zd(dc,s)}}function hx(i,s,l){i==="focusin"?(kT(),dn=s,Gr=l,dn.attachEvent("onpropertychange",VT)):i==="focusout"&&kT()}function dx(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ef(Gr)}function fx(i,s){if(i==="click")return ef(s)}function px(i,s){if(i==="input"||i==="change")return ef(s)}function mx(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:mx;function fc(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var f=l[c];if(!$o.call(s,f)||!Kn(i[f],s[f]))return!1}return!0}function MT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function LT(i,s){var l=MT(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=MT(l)}}function UT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?UT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function BT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Zo(i.document);s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Zo(i.document)}return s}function _g(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function gx(i,s){var l=BT(s);s=i.focusedElem;var c=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&UT(s.ownerDocument.documentElement,s)){if(c!==null&&_g(s)){if(i=c.start,l=c.end,l===void 0&&(l=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(l,s.value.length);else if(l=(i=s.ownerDocument||document)&&i.defaultView||window,l.getSelection){l=l.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!l.extend&&g>c&&(f=c,c=g,g=f),f=LT(s,g);var T=LT(s,c);f&&T&&(l.rangeCount!==1||l.anchorNode!==f.node||l.anchorOffset!==f.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),l.removeAllRanges(),g>c?(l.addRange(i),l.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),l.addRange(i)))}}for(i=[],l=s;l=l.parentNode;)l.nodeType===1&&i.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)l=i[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var _x=$n&&"documentMode"in document&&11>=document.documentMode,ul=null,yg=null,pc=null,vg=!1;function zT(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;vg||ul==null||ul!==Zo(c)||(c=ul,"selectionStart"in c&&_g(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),pc&&fc(pc,c)||(pc=c,c=Lf(yg,"onSelect"),0<c.length&&(s=new tl("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=ul)))}function Fa(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var cl={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionrun:Fa("Transition","TransitionRun"),transitionstart:Fa("Transition","TransitionStart"),transitioncancel:Fa("Transition","TransitionCancel"),transitionend:Fa("Transition","TransitionEnd")},Eg={},FT={};$n&&(FT=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function ja(i){if(Eg[i])return Eg[i];if(!cl[i])return i;var s=cl[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in FT)return Eg[i]=s[l];return i}var jT=ja("animationend"),qT=ja("animationiteration"),HT=ja("animationstart"),yx=ja("transitionrun"),vx=ja("transitionstart"),Ex=ja("transitioncancel"),GT=ja("transitionend"),$T=new Map,KT="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sr(i,s){$T.set(i,s),Gn(s,[i])}var cr=[],hl=0,Tg=0;function tf(){for(var i=hl,s=Tg=hl=0;s<i;){var l=cr[s];cr[s++]=null;var c=cr[s];cr[s++]=null;var f=cr[s];cr[s++]=null;var g=cr[s];if(cr[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&QT(l,f,g)}}function nf(i,s,l,c){cr[hl++]=i,cr[hl++]=s,cr[hl++]=l,cr[hl++]=c,Tg|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function wg(i,s,l,c){return nf(i,s,l,c),rf(i)}function bs(i,s){return nf(i,null,null,s),rf(i)}function QT(i,s,l){i.lanes|=l;var c=i.alternate;c!==null&&(c.lanes|=l);for(var f=!1,g=i.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(f=!0)),i=g,g=g.return;f&&s!==null&&i.tag===3&&(g=i.stateNode,f=31-Rn(l),g=g.hiddenUpdates,i=g[f],i===null?g[f]=[s]:i.push(s),s.lane=l|536870912)}function rf(i){if(50<Bc)throw Bc=0,C_=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var dl={},WT=new WeakMap;function hr(i,s){if(typeof i=="object"&&i!==null){var l=WT.get(i);return l!==void 0?l:(s={value:i,source:s,stack:be(s)},WT.set(i,s),s)}return{value:i,source:s,stack:be(s)}}var fl=[],pl=0,sf=null,af=0,dr=[],fr=0,qa=null,Ci=1,Di="";function Ha(i,s){fl[pl++]=af,fl[pl++]=sf,sf=i,af=s}function YT(i,s,l){dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=qa,qa=i;var c=Ci;i=Di;var f=32-Rn(c)-1;c&=~(1<<f),l+=1;var g=32-Rn(s)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ci=1<<32-Rn(s)+f|l<<f|c,Di=g+i}else Ci=1<<g|l<<f|c,Di=i}function bg(i){i.return!==null&&(Ha(i,1),YT(i,1,0))}function Ig(i){for(;i===sf;)sf=fl[--pl],fl[pl]=null,af=fl[--pl],fl[pl]=null;for(;i===qa;)qa=dr[--fr],dr[fr]=null,Di=dr[--fr],dr[fr]=null,Ci=dr[--fr],dr[fr]=null}var xn=null,fn=null,We=!1,Rr=null,$r=!1,Ag=Error(r(519));function Ga(i){var s=Error(r(418,""));throw _c(hr(s,i)),Ag}function XT(i){var s=i.stateNode,l=i.type,c=i.memoizedProps;switch(s[tn]=i,s[$t]=c,l){case"dialog":je("cancel",s),je("close",s);break;case"iframe":case"object":case"embed":je("load",s);break;case"video":case"audio":for(l=0;l<Fc.length;l++)je(Fc[l],s);break;case"source":je("error",s);break;case"img":case"image":case"link":je("error",s),je("load",s);break;case"details":je("toggle",s);break;case"input":je("invalid",s),Na(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Pa(s);break;case"select":je("invalid",s);break;case"textarea":je("invalid",s),Ts(s,c.value,c.defaultValue,c.children),Pa(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||ab(s.textContent,l)?(c.popover!=null&&(je("beforetoggle",s),je("toggle",s)),c.onScroll!=null&&je("scroll",s),c.onScrollEnd!=null&&je("scrollend",s),c.onClick!=null&&(s.onclick=Uf),s=!0):s=!1,s||Ga(i)}function ZT(i){for(xn=i.return;xn;)switch(xn.tag){case 3:case 27:$r=!0;return;case 5:case 13:$r=!1;return;default:xn=xn.return}}function mc(i){if(i!==xn)return!1;if(!We)return ZT(i),We=!0,!1;var s=!1,l;if((l=i.tag!==3&&i.tag!==27)&&((l=i.tag===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||G_(i.type,i.memoizedProps)),l=!l),l&&(s=!0),s&&fn&&Ga(i),ZT(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(s===0){fn=Dr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;i=i.nextSibling}fn=null}}else fn=xn?Dr(i.stateNode.nextSibling):null;return!0}function gc(){fn=xn=null,We=!1}function _c(i){Rr===null?Rr=[i]:Rr.push(i)}var yc=Error(r(460)),JT=Error(r(474)),Sg={then:function(){}};function ew(i){return i=i.status,i==="fulfilled"||i==="rejected"}function of(){}function tw(i,s,l){switch(l=i[l],l===void 0?i.push(s):l!==s&&(s.then(of,of),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===yc?Error(r(483)):i;default:if(typeof s.status=="string")s.then(of,of);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===yc?Error(r(483)):i}throw vc=s,yc}}var vc=null;function nw(){if(vc===null)throw Error(r(459));var i=vc;return vc=null,i}var ml=null,Ec=0;function lf(i){var s=Ec;return Ec+=1,ml===null&&(ml=[]),tw(ml,i,s)}function Tc(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function uf(i,s){throw s.$$typeof===o?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function rw(i){var s=i._init;return s(i._payload)}function iw(i){function s(B,V){if(i){var G=B.deletions;G===null?(B.deletions=[V],B.flags|=16):G.push(V)}}function l(B,V){if(!i)return null;for(;V!==null;)s(B,V),V=V.sibling;return null}function c(B){for(var V=new Map;B!==null;)B.key!==null?V.set(B.key,B):V.set(B.index,B),B=B.sibling;return V}function f(B,V){return B=Vs(B,V),B.index=0,B.sibling=null,B}function g(B,V,G){return B.index=G,i?(G=B.alternate,G!==null?(G=G.index,G<V?(B.flags|=33554434,V):G):(B.flags|=33554434,V)):(B.flags|=1048576,V)}function T(B){return i&&B.alternate===null&&(B.flags|=33554434),B}function b(B,V,G,ee){return V===null||V.tag!==6?(V=E_(G,B.mode,ee),V.return=B,V):(V=f(V,G),V.return=B,V)}function C(B,V,G,ee){var _e=G.type;return _e===p?J(B,V,G.props.children,ee,G.key):V!==null&&(V.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===X&&rw(_e)===V.type)?(V=f(V,G.props),Tc(V,G),V.return=B,V):(V=Rf(G.type,G.key,G.props,null,B.mode,ee),Tc(V,G),V.return=B,V)}function U(B,V,G,ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==G.containerInfo||V.stateNode.implementation!==G.implementation?(V=T_(G,B.mode,ee),V.return=B,V):(V=f(V,G.children||[]),V.return=B,V)}function J(B,V,G,ee,_e){return V===null||V.tag!==7?(V=to(G,B.mode,ee,_e),V.return=B,V):(V=f(V,G),V.return=B,V)}function ne(B,V,G){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=E_(""+V,B.mode,G),V.return=B,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case u:return G=Rf(V.type,V.key,V.props,null,B.mode,G),Tc(G,V),G.return=B,G;case d:return V=T_(V,B.mode,G),V.return=B,V;case X:var ee=V._init;return V=ee(V._payload),ne(B,V,G)}if(pe(V)||le(V))return V=to(V,B.mode,G,null),V.return=B,V;if(typeof V.then=="function")return ne(B,lf(V),G);if(V.$$typeof===S)return ne(B,If(B,V),G);uf(B,V)}return null}function $(B,V,G,ee){var _e=V!==null?V.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return _e!==null?null:b(B,V,""+G,ee);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case u:return G.key===_e?C(B,V,G,ee):null;case d:return G.key===_e?U(B,V,G,ee):null;case X:return _e=G._init,G=_e(G._payload),$(B,V,G,ee)}if(pe(G)||le(G))return _e!==null?null:J(B,V,G,ee,null);if(typeof G.then=="function")return $(B,V,lf(G),ee);if(G.$$typeof===S)return $(B,V,If(B,G),ee);uf(B,G)}return null}function Z(B,V,G,ee,_e){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return B=B.get(G)||null,b(V,B,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return B=B.get(ee.key===null?G:ee.key)||null,C(V,B,ee,_e);case d:return B=B.get(ee.key===null?G:ee.key)||null,U(V,B,ee,_e);case X:var Le=ee._init;return ee=Le(ee._payload),Z(B,V,G,ee,_e)}if(pe(ee)||le(ee))return B=B.get(G)||null,J(V,B,ee,_e,null);if(typeof ee.then=="function")return Z(B,V,G,lf(ee),_e);if(ee.$$typeof===S)return Z(B,V,G,If(V,ee),_e);uf(V,ee)}return null}function ve(B,V,G,ee){for(var _e=null,Le=null,we=V,Ae=V=0,on=null;we!==null&&Ae<G.length;Ae++){we.index>Ae?(on=we,we=null):on=we.sibling;var Ye=$(B,we,G[Ae],ee);if(Ye===null){we===null&&(we=on);break}i&&we&&Ye.alternate===null&&s(B,we),V=g(Ye,V,Ae),Le===null?_e=Ye:Le.sibling=Ye,Le=Ye,we=on}if(Ae===G.length)return l(B,we),We&&Ha(B,Ae),_e;if(we===null){for(;Ae<G.length;Ae++)we=ne(B,G[Ae],ee),we!==null&&(V=g(we,V,Ae),Le===null?_e=we:Le.sibling=we,Le=we);return We&&Ha(B,Ae),_e}for(we=c(we);Ae<G.length;Ae++)on=Z(we,B,Ae,G[Ae],ee),on!==null&&(i&&on.alternate!==null&&we.delete(on.key===null?Ae:on.key),V=g(on,V,Ae),Le===null?_e=on:Le.sibling=on,Le=on);return i&&we.forEach(function(js){return s(B,js)}),We&&Ha(B,Ae),_e}function xe(B,V,G,ee){if(G==null)throw Error(r(151));for(var _e=null,Le=null,we=V,Ae=V=0,on=null,Ye=G.next();we!==null&&!Ye.done;Ae++,Ye=G.next()){we.index>Ae?(on=we,we=null):on=we.sibling;var js=$(B,we,Ye.value,ee);if(js===null){we===null&&(we=on);break}i&&we&&js.alternate===null&&s(B,we),V=g(js,V,Ae),Le===null?_e=js:Le.sibling=js,Le=js,we=on}if(Ye.done)return l(B,we),We&&Ha(B,Ae),_e;if(we===null){for(;!Ye.done;Ae++,Ye=G.next())Ye=ne(B,Ye.value,ee),Ye!==null&&(V=g(Ye,V,Ae),Le===null?_e=Ye:Le.sibling=Ye,Le=Ye);return We&&Ha(B,Ae),_e}for(we=c(we);!Ye.done;Ae++,Ye=G.next())Ye=Z(we,B,Ae,Ye.value,ee),Ye!==null&&(i&&Ye.alternate!==null&&we.delete(Ye.key===null?Ae:Ye.key),V=g(Ye,V,Ae),Le===null?_e=Ye:Le.sibling=Ye,Le=Ye);return i&&we.forEach(function(kP){return s(B,kP)}),We&&Ha(B,Ae),_e}function Ct(B,V,G,ee){if(typeof G=="object"&&G!==null&&G.type===p&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case u:e:{for(var _e=G.key;V!==null;){if(V.key===_e){if(_e=G.type,_e===p){if(V.tag===7){l(B,V.sibling),ee=f(V,G.props.children),ee.return=B,B=ee;break e}}else if(V.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===X&&rw(_e)===V.type){l(B,V.sibling),ee=f(V,G.props),Tc(ee,G),ee.return=B,B=ee;break e}l(B,V);break}else s(B,V);V=V.sibling}G.type===p?(ee=to(G.props.children,B.mode,ee,G.key),ee.return=B,B=ee):(ee=Rf(G.type,G.key,G.props,null,B.mode,ee),Tc(ee,G),ee.return=B,B=ee)}return T(B);case d:e:{for(_e=G.key;V!==null;){if(V.key===_e)if(V.tag===4&&V.stateNode.containerInfo===G.containerInfo&&V.stateNode.implementation===G.implementation){l(B,V.sibling),ee=f(V,G.children||[]),ee.return=B,B=ee;break e}else{l(B,V);break}else s(B,V);V=V.sibling}ee=T_(G,B.mode,ee),ee.return=B,B=ee}return T(B);case X:return _e=G._init,G=_e(G._payload),Ct(B,V,G,ee)}if(pe(G))return ve(B,V,G,ee);if(le(G)){if(_e=le(G),typeof _e!="function")throw Error(r(150));return G=_e.call(G),xe(B,V,G,ee)}if(typeof G.then=="function")return Ct(B,V,lf(G),ee);if(G.$$typeof===S)return Ct(B,V,If(B,G),ee);uf(B,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,V!==null&&V.tag===6?(l(B,V.sibling),ee=f(V,G),ee.return=B,B=ee):(l(B,V),ee=E_(G,B.mode,ee),ee.return=B,B=ee),T(B)):l(B,V)}return function(B,V,G,ee){try{Ec=0;var _e=Ct(B,V,G,ee);return ml=null,_e}catch(we){if(we===yc)throw we;var Le=_r(29,we,null,B.mode);return Le.lanes=ee,Le.return=B,Le}finally{}}}var $a=iw(!0),sw=iw(!1),gl=Me(null),cf=Me(0);function aw(i,s){i=zi,Ke(cf,i),Ke(gl,s),zi=i|s.baseLanes}function Rg(){Ke(cf,zi),Ke(gl,gl.current)}function Cg(){zi=cf.current,Ze(gl),Ze(cf)}var pr=Me(null),Kr=null;function Is(i){var s=i.alternate;Ke(Wt,Wt.current&1),Ke(pr,i),Kr===null&&(s===null||gl.current!==null||s.memoizedState!==null)&&(Kr=i)}function ow(i){if(i.tag===22){if(Ke(Wt,Wt.current),Ke(pr,i),Kr===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Kr=i)}}else As()}function As(){Ke(Wt,Wt.current),Ke(pr,pr.current)}function xi(i){Ze(pr),Kr===i&&(Kr=null),Ze(Wt)}var Wt=Me(0);function hf(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Tx=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(l,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(l){return l()})}},wx=n.unstable_scheduleCallback,bx=n.unstable_NormalPriority,Yt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dg(){return{controller:new Tx,data:new Map,refCount:0}}function wc(i){i.refCount--,i.refCount===0&&wx(bx,function(){i.controller.abort()})}var bc=null,xg=0,_l=0,yl=null;function Ix(i,s){if(bc===null){var l=bc=[];xg=0,_l=M_(),yl={status:"pending",value:void 0,then:function(c){l.push(c)}}}return xg++,s.then(lw,lw),s}function lw(){if(--xg===0&&bc!==null){yl!==null&&(yl.status="fulfilled");var i=bc;bc=null,_l=0,yl=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function Ax(i,s){var l=[],c={status:"pending",value:null,reason:null,then:function(f){l.push(f)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<l.length;f++)(0,l[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<l.length;f++)(0,l[f])(void 0)}),c}var uw=A.S;A.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&Ix(i,s),uw!==null&&uw(i,s)};var Ka=Me(null);function Pg(){var i=Ka.current;return i!==null?i:at.pooledCache}function df(i,s){s===null?Ke(Ka,Ka.current):Ke(Ka,s.pool)}function cw(){var i=Pg();return i===null?null:{parent:Yt._currentValue,pool:i}}var Ss=0,Ve=null,rt=null,Bt=null,ff=!1,vl=!1,Qa=!1,pf=0,Ic=0,El=null,Sx=0;function kt(){throw Error(r(321))}function Ng(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function Og(i,s,l,c,f,g){return Ss=g,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=i===null||i.memoizedState===null?Wa:Rs,Qa=!1,g=l(c,f),Qa=!1,vl&&(g=dw(s,l,c,f)),hw(i),g}function hw(i){A.H=Qr;var s=rt!==null&&rt.next!==null;if(Ss=0,Bt=rt=Ve=null,ff=!1,Ic=0,El=null,s)throw Error(r(300));i===null||sn||(i=i.dependencies,i!==null&&bf(i)&&(sn=!0))}function dw(i,s,l,c){Ve=i;var f=0;do{if(vl&&(El=null),Ic=0,vl=!1,25<=f)throw Error(r(301));if(f+=1,Bt=rt=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Ya,g=s(l,c)}while(vl);return g}function Rx(){var i=A.H,s=i.useState()[0];return s=typeof s.then=="function"?Ac(s):s,i=i.useState()[0],(rt!==null?rt.memoizedState:null)!==i&&(Ve.flags|=1024),s}function kg(){var i=pf!==0;return pf=0,i}function Vg(i,s,l){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~l}function Mg(i){if(ff){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}ff=!1}Ss=0,Bt=rt=Ve=null,vl=!1,Ic=pf=0,El=null}function Bn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i,Bt}function zt(){if(rt===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=rt.next;var s=Bt===null?Ve.memoizedState:Bt.next;if(s!==null)Bt=s,rt=i;else{if(i===null)throw Ve.alternate===null?Error(r(467)):Error(r(310));rt=i,i={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i}return Bt}var mf;mf=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ac(i){var s=Ic;return Ic+=1,El===null&&(El=[]),i=tw(El,i,s),s=Ve,(Bt===null?s.memoizedState:Bt.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?Wa:Rs),i}function gf(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Ac(i);if(i.$$typeof===S)return Tn(i)}throw Error(r(438,String(i)))}function Lg(i){var s=null,l=Ve.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=mf(),Ve.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(i),c=0;c<i;c++)l[c]=oe;return s.index++,l}function Pi(i,s){return typeof s=="function"?s(i):s}function _f(i){var s=zt();return Ug(s,rt,i)}function Ug(i,s,l){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var f=i.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}s.baseQueue=f=g,c.pending=null}if(g=i.baseState,f===null)i.memoizedState=g;else{s=f.next;var b=T=null,C=null,U=s,J=!1;do{var ne=U.lane&-536870913;if(ne!==U.lane?(Ge&ne)===ne:(Ss&ne)===ne){var $=U.revertLane;if($===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),ne===_l&&(J=!0);else if((Ss&$)===$){U=U.next,$===_l&&(J=!0);continue}else ne={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},C===null?(b=C=ne,T=g):C=C.next=ne,Ve.lanes|=$,Ms|=$;ne=U.action,Qa&&l(g,ne),g=U.hasEagerState?U.eagerState:l(g,ne)}else $={lane:ne,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},C===null?(b=C=$,T=g):C=C.next=$,Ve.lanes|=ne,Ms|=ne;U=U.next}while(U!==null&&U!==s);if(C===null?T=g:C.next=b,!Kn(g,i.memoizedState)&&(sn=!0,J&&(l=yl,l!==null)))throw l;i.memoizedState=g,i.baseState=T,i.baseQueue=C,c.lastRenderedState=g}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Bg(i){var s=zt(),l=s.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var c=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var T=f=f.next;do g=i(g,T.action),T=T.next;while(T!==f);Kn(g,s.memoizedState)||(sn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function fw(i,s,l){var c=Ve,f=zt(),g=We;if(g){if(l===void 0)throw Error(r(407));l=l()}else l=s();var T=!Kn((rt||f).memoizedState,l);if(T&&(f.memoizedState=l,sn=!0),f=f.queue,jg(gw.bind(null,c,f,i),[i]),f.getSnapshot!==s||T||Bt!==null&&Bt.memoizedState.tag&1){if(c.flags|=2048,Tl(9,mw.bind(null,c,f,l,s),{destroy:void 0},null),at===null)throw Error(r(349));g||(Ss&60)!==0||pw(c,s,l)}return l}function pw(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Ve.updateQueue,s===null?(s=mf(),Ve.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function mw(i,s,l,c){s.value=l,s.getSnapshot=c,_w(s)&&yw(i)}function gw(i,s,l){return l(function(){_w(s)&&yw(i)})}function _w(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function yw(i){var s=bs(i,2);s!==null&&Pn(s,i,2)}function zg(i){var s=Bn();if(typeof i=="function"){var l=i;if(i=l(),Qa){Vr(!0);try{l()}finally{Vr(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:i},s}function vw(i,s,l,c){return i.baseState=l,Ug(i,rt,typeof c=="function"?c:Pi)}function Cx(i,s,l,c,f){if(Ef(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,Ew(s,g)):(g.next=l.next,s.pending=l.next=g)}}function Ew(i,s){var l=s.action,c=s.payload,f=i.state;if(s.isTransition){var g=A.T,T={};A.T=T;try{var b=l(f,c),C=A.S;C!==null&&C(T,b),Tw(i,s,b)}catch(U){Fg(i,s,U)}finally{A.T=g}}else try{g=l(f,c),Tw(i,s,g)}catch(U){Fg(i,s,U)}}function Tw(i,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){ww(i,s,c)},function(c){return Fg(i,s,c)}):ww(i,s,l)}function ww(i,s,l){s.status="fulfilled",s.value=l,bw(s),i.state=l,s=i.pending,s!==null&&(l=s.next,l===s?i.pending=null:(l=l.next,s.next=l,Ew(i,l)))}function Fg(i,s,l){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,bw(s),s=s.next;while(s!==c)}i.action=null}function bw(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function Iw(i,s){return s}function Aw(i,s){if(We){var l=at.formState;if(l!==null){e:{var c=Ve;if(We){if(fn){t:{for(var f=fn,g=$r;f.nodeType!==8;){if(!g){f=null;break t}if(f=Dr(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){fn=Dr(f.nextSibling),c=f.data==="F!";break e}}Ga(c)}c=!1}c&&(s=l[0])}}return l=Bn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Iw,lastRenderedState:s},l.queue=c,l=qw.bind(null,Ve,c),c.dispatch=l,c=zg(!1),g=Kg.bind(null,Ve,!1,c.queue),c=Bn(),f={state:s,dispatch:null,action:i,pending:null},c.queue=f,l=Cx.bind(null,Ve,f,g,l),f.dispatch=l,c.memoizedState=i,[s,l,!1]}function Sw(i){var s=zt();return Rw(s,rt,i)}function Rw(i,s,l){s=Ug(i,s,Iw)[0],i=_f(Pi)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?Ac(s):s;var c=zt(),f=c.queue,g=f.dispatch;return l!==c.memoizedState&&(Ve.flags|=2048,Tl(9,Dx.bind(null,f,l),{destroy:void 0},null)),[s,g,i]}function Dx(i,s){i.action=s}function Cw(i){var s=zt(),l=rt;if(l!==null)return Rw(s,l,i);zt(),s=s.memoizedState,l=zt();var c=l.queue.dispatch;return l.memoizedState=i,[s,c,!1]}function Tl(i,s,l,c){return i={tag:i,create:s,inst:l,deps:c,next:null},s=Ve.updateQueue,s===null&&(s=mf(),Ve.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i),i}function Dw(){return zt().memoizedState}function yf(i,s,l,c){var f=Bn();Ve.flags|=i,f.memoizedState=Tl(1|s,l,{destroy:void 0},c===void 0?null:c)}function vf(i,s,l,c){var f=zt();c=c===void 0?null:c;var g=f.memoizedState.inst;rt!==null&&c!==null&&Ng(c,rt.memoizedState.deps)?f.memoizedState=Tl(s,l,g,c):(Ve.flags|=i,f.memoizedState=Tl(1|s,l,g,c))}function xw(i,s){yf(8390656,8,i,s)}function jg(i,s){vf(2048,8,i,s)}function Pw(i,s){return vf(4,2,i,s)}function Nw(i,s){return vf(4,4,i,s)}function Ow(i,s){if(typeof s=="function"){i=i();var l=s(i);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function kw(i,s,l){l=l!=null?l.concat([i]):null,vf(4,4,Ow.bind(null,s,i),l)}function qg(){}function Vw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Ng(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function Mw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Ng(s,c[1]))return c[0];if(c=i(),Qa){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c}function Hg(i,s,l){return l===void 0||(Ss&1073741824)!==0?i.memoizedState=s:(i.memoizedState=l,i=U0(),Ve.lanes|=i,Ms|=i,l)}function Lw(i,s,l,c){return Kn(l,s)?l:gl.current!==null?(i=Hg(i,l,c),Kn(i,s)||(sn=!0),i):(Ss&42)===0?(sn=!0,i.memoizedState=l):(i=U0(),Ve.lanes|=i,Ms|=i,s)}function Uw(i,s,l,c,f){var g=fe.p;fe.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,Kg(i,!1,s,l);try{var C=f(),U=A.S;if(U!==null&&U(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var J=Ax(C,c);Sc(i,s,J,Xn(i))}else Sc(i,s,c,Xn(i))}catch(ne){Sc(i,s,{then:function(){},status:"rejected",reason:ne},Xn())}finally{fe.p=g,A.T=T}}function xx(){}function Gg(i,s,l,c){if(i.tag!==5)throw Error(r(476));var f=Bw(i).queue;Uw(i,f,s,De,l===null?xx:function(){return zw(i),l(c)})}function Bw(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:De,baseState:De,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:De},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:l},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function zw(i){var s=Bw(i).next.queue;Sc(i,s,{},Xn())}function $g(){return Tn($c)}function Fw(){return zt().memoizedState}function jw(){return zt().memoizedState}function Px(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var l=Xn();i=xs(l);var c=Ps(s,i,l);c!==null&&(Pn(c,s,l),Dc(c,s,l)),s={cache:Dg()},i.payload=s;return}s=s.return}}function Nx(i,s,l){var c=Xn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Ef(i)?Hw(s,l):(l=wg(i,s,l,c),l!==null&&(Pn(l,i,c),Gw(l,s,c)))}function qw(i,s,l){var c=Xn();Sc(i,s,l,c)}function Sc(i,s,l,c){var f={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ef(i))Hw(s,f);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,b=g(T,l);if(f.hasEagerState=!0,f.eagerState=b,Kn(b,T))return nf(i,s,f,0),at===null&&tf(),!1}catch{}finally{}if(l=wg(i,s,f,c),l!==null)return Pn(l,i,c),Gw(l,s,c),!0}return!1}function Kg(i,s,l,c){if(c={lane:2,revertLane:M_(),action:c,hasEagerState:!1,eagerState:null,next:null},Ef(i)){if(s)throw Error(r(479))}else s=wg(i,l,c,2),s!==null&&Pn(s,i,2)}function Ef(i){var s=i.alternate;return i===Ve||s!==null&&s===Ve}function Hw(i,s){vl=ff=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Gw(i,s,l){if((l&4194176)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}var Qr={readContext:Tn,use:gf,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt};Qr.useCacheRefresh=kt,Qr.useMemoCache=kt,Qr.useHostTransitionStatus=kt,Qr.useFormState=kt,Qr.useActionState=kt,Qr.useOptimistic=kt;var Wa={readContext:Tn,use:gf,useCallback:function(i,s){return Bn().memoizedState=[i,s===void 0?null:s],i},useContext:Tn,useEffect:xw,useImperativeHandle:function(i,s,l){l=l!=null?l.concat([i]):null,yf(4194308,4,Ow.bind(null,s,i),l)},useLayoutEffect:function(i,s){return yf(4194308,4,i,s)},useInsertionEffect:function(i,s){yf(4,2,i,s)},useMemo:function(i,s){var l=Bn();s=s===void 0?null:s;var c=i();if(Qa){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c},useReducer:function(i,s,l){var c=Bn();if(l!==void 0){var f=l(s);if(Qa){Vr(!0);try{l(s)}finally{Vr(!1)}}}else f=s;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=Nx.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var s=Bn();return i={current:i},s.memoizedState=i},useState:function(i){i=zg(i);var s=i.queue,l=qw.bind(null,Ve,s);return s.dispatch=l,[i.memoizedState,l]},useDebugValue:qg,useDeferredValue:function(i,s){var l=Bn();return Hg(l,i,s)},useTransition:function(){var i=zg(!1);return i=Uw.bind(null,Ve,i.queue,!0,!1),Bn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,l){var c=Ve,f=Bn();if(We){if(l===void 0)throw Error(r(407));l=l()}else{if(l=s(),at===null)throw Error(r(349));(Ge&60)!==0||pw(c,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,xw(gw.bind(null,c,g,i),[i]),c.flags|=2048,Tl(9,mw.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var i=Bn(),s=at.identifierPrefix;if(We){var l=Di,c=Ci;l=(c&~(1<<32-Rn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=pf++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=Sx++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return Bn().memoizedState=Px.bind(null,Ve)}};Wa.useMemoCache=Lg,Wa.useHostTransitionStatus=$g,Wa.useFormState=Aw,Wa.useActionState=Aw,Wa.useOptimistic=function(i){var s=Bn();s.memoizedState=s.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=Kg.bind(null,Ve,!0,l),l.dispatch=s,[i,s]};var Rs={readContext:Tn,use:gf,useCallback:Vw,useContext:Tn,useEffect:jg,useImperativeHandle:kw,useInsertionEffect:Pw,useLayoutEffect:Nw,useMemo:Mw,useReducer:_f,useRef:Dw,useState:function(){return _f(Pi)},useDebugValue:qg,useDeferredValue:function(i,s){var l=zt();return Lw(l,rt.memoizedState,i,s)},useTransition:function(){var i=_f(Pi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:Ac(i),s]},useSyncExternalStore:fw,useId:Fw};Rs.useCacheRefresh=jw,Rs.useMemoCache=Lg,Rs.useHostTransitionStatus=$g,Rs.useFormState=Sw,Rs.useActionState=Sw,Rs.useOptimistic=function(i,s){var l=zt();return vw(l,rt,i,s)};var Ya={readContext:Tn,use:gf,useCallback:Vw,useContext:Tn,useEffect:jg,useImperativeHandle:kw,useInsertionEffect:Pw,useLayoutEffect:Nw,useMemo:Mw,useReducer:Bg,useRef:Dw,useState:function(){return Bg(Pi)},useDebugValue:qg,useDeferredValue:function(i,s){var l=zt();return rt===null?Hg(l,i,s):Lw(l,rt.memoizedState,i,s)},useTransition:function(){var i=Bg(Pi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:Ac(i),s]},useSyncExternalStore:fw,useId:Fw};Ya.useCacheRefresh=jw,Ya.useMemoCache=Lg,Ya.useHostTransitionStatus=$g,Ya.useFormState=Cw,Ya.useActionState=Cw,Ya.useOptimistic=function(i,s){var l=zt();return rt!==null?vw(l,rt,i,s):(l.baseState=i,[i,l.queue.dispatch])};function Qg(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:P({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Wg={isMounted:function(i){return(i=i._reactInternals)?Te(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=xs(c);f.payload=s,l!=null&&(f.callback=l),s=Ps(i,f,c),s!==null&&(Pn(s,i,c),Dc(s,i,c))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=xs(c);f.tag=1,f.payload=s,l!=null&&(f.callback=l),s=Ps(i,f,c),s!==null&&(Pn(s,i,c),Dc(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Xn(),c=xs(l);c.tag=2,s!=null&&(c.callback=s),s=Ps(i,c,l),s!==null&&(Pn(s,i,l),Dc(s,i,l))}};function $w(i,s,l,c,f,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!fc(l,c)||!fc(f,g):!0}function Kw(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&Wg.enqueueReplaceState(s,s.state,null)}function Xa(i,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(i=i.defaultProps){l===s&&(l=P({},l));for(var f in i)l[f]===void 0&&(l[f]=i[f])}return l}var Tf=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function Qw(i){Tf(i)}function Ww(i){console.error(i)}function Yw(i){Tf(i)}function wf(i,s){try{var l=i.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function Xw(i,s,l){try{var c=i.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Yg(i,s,l){return l=xs(l),l.tag=3,l.payload={element:null},l.callback=function(){wf(i,s)},l}function Zw(i){return i=xs(i),i.tag=3,i}function Jw(i,s,l,c){var f=l.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;i.payload=function(){return f(g)},i.callback=function(){Xw(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){Xw(s,l,c),typeof f!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function Ox(i,s,l,c,f){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&Cc(s,l,f,!0),l=pr.current,l!==null){switch(l.tag){case 13:return Kr===null?P_():l.alternate===null&&Rt===0&&(Rt=3),l.flags&=-257,l.flags|=65536,l.lanes=f,c===Sg?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),O_(i,c,f)),!1;case 22:return l.flags|=65536,c===Sg?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),O_(i,c,f)),!1}throw Error(r(435,l.tag))}return O_(i,c,f),P_(),!1}if(We)return s=pr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==Ag&&(i=Error(r(422),{cause:c}),_c(hr(i,l)))):(c!==Ag&&(s=Error(r(423),{cause:c}),_c(hr(s,l))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=hr(c,l),f=Yg(i.stateNode,c,f),h_(i,f),Rt!==4&&(Rt=2)),!1;var g=Error(r(520),{cause:c});if(g=hr(g,l),Lc===null?Lc=[g]:Lc.push(g),Rt!==4&&(Rt=2),s===null)return!0;c=hr(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,i=f&-f,l.lanes|=i,i=Yg(l.stateNode,c,i),h_(l,i),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ls===null||!Ls.has(g))))return l.flags|=65536,f&=-f,l.lanes|=f,f=Zw(f),Jw(f,i,l,c),h_(l,f),!1}l=l.return}while(l!==null);return!1}var e0=Error(r(461)),sn=!1;function pn(i,s,l,c){s.child=i===null?sw(s,null,l,c):$a(s,i.child,l,c)}function t0(i,s,l,c,f){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Ja(s),c=Og(i,s,l,T,g,f),b=kg(),i!==null&&!sn?(Vg(i,s,f),Ni(i,s,f)):(We&&b&&bg(s),s.flags|=1,pn(i,s,c,f),s.child)}function n0(i,s,l,c,f){if(i===null){var g=l.type;return typeof g=="function"&&!v_(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,r0(i,s,g,c,f)):(i=Rf(l.type,null,c,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!s_(i,f)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:fc,l(T,c)&&i.ref===s.ref)return Ni(i,s,f)}return s.flags|=1,i=Vs(g,c),i.ref=s.ref,i.return=s,s.child=i}function r0(i,s,l,c,f){if(i!==null){var g=i.memoizedProps;if(fc(g,c)&&i.ref===s.ref)if(sn=!1,s.pendingProps=c=g,s_(i,f))(i.flags&131072)!==0&&(sn=!0);else return s.lanes=i.lanes,Ni(i,s,f)}return Xg(i,s,l,c,f)}function i0(i,s,l){var c=s.pendingProps,f=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=i!==null?i.memoizedState:null;if(Rc(i,s),c.mode==="hidden"||g){if((s.flags&128)!==0){if(c=T!==null?T.baseLanes|l:l,i!==null){for(f=s.child=i.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return s0(i,s,c,l)}if((l&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&df(s,T!==null?T.cachePool:null),T!==null?aw(s,T):Rg(),ow(s);else return s.lanes=s.childLanes=536870912,s0(i,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(df(s,T.cachePool),aw(s,T),As(),s.memoizedState=null):(i!==null&&df(s,null),Rg(),As());return pn(i,s,f,l),s.child}function s0(i,s,l,c){var f=Pg();return f=f===null?null:{parent:Yt._currentValue,pool:f},s.memoizedState={baseLanes:l,cachePool:f},i!==null&&df(s,null),Rg(),ow(s),i!==null&&Cc(i,s,c,!0),null}function Rc(i,s){var l=s.ref;if(l===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(i===null||i.ref!==l)&&(s.flags|=2097664)}}function Xg(i,s,l,c,f){return Ja(s),l=Og(i,s,l,c,void 0,f),c=kg(),i!==null&&!sn?(Vg(i,s,f),Ni(i,s,f)):(We&&c&&bg(s),s.flags|=1,pn(i,s,l,f),s.child)}function a0(i,s,l,c,f,g){return Ja(s),s.updateQueue=null,l=dw(s,c,l,f),hw(i),c=kg(),i!==null&&!sn?(Vg(i,s,g),Ni(i,s,g)):(We&&c&&bg(s),s.flags|=1,pn(i,s,l,g),s.child)}function o0(i,s,l,c,f){if(Ja(s),s.stateNode===null){var g=dl,T=l.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Wg,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},u_(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):dl,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(Qg(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Wg.enqueueReplaceState(g,g.state,null),Pc(s,c,g,f),xc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var b=s.memoizedProps,C=Xa(l,b);g.props=C;var U=g.context,J=l.contextType;T=dl,typeof J=="object"&&J!==null&&(T=Tn(J));var ne=l.getDerivedStateFromProps;J=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,J||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||U!==T)&&Kw(s,g,c,T),Ds=!1;var $=s.memoizedState;g.state=$,Pc(s,c,g,f),xc(),U=s.memoizedState,b||$!==U||Ds?(typeof ne=="function"&&(Qg(s,l,ne,c),U=s.memoizedState),(C=Ds||$w(s,l,C,c,$,U,T))?(J||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=U),g.props=c,g.state=U,g.context=T,c=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,c_(i,s),T=s.memoizedProps,J=Xa(l,T),g.props=J,ne=s.pendingProps,$=g.context,U=l.contextType,C=dl,typeof U=="object"&&U!==null&&(C=Tn(U)),b=l.getDerivedStateFromProps,(U=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ne||$!==C)&&Kw(s,g,c,C),Ds=!1,$=s.memoizedState,g.state=$,Pc(s,c,g,f),xc();var Z=s.memoizedState;T!==ne||$!==Z||Ds||i!==null&&i.dependencies!==null&&bf(i.dependencies)?(typeof b=="function"&&(Qg(s,l,b,c),Z=s.memoizedState),(J=Ds||$w(s,l,J,c,$,Z,C)||i!==null&&i.dependencies!==null&&bf(i.dependencies))?(U||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,Z,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,Z,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Z),g.props=c,g.state=Z,g.context=C,c=J):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&$===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,Rc(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=$a(s,i.child,null,f),s.child=$a(s,null,l,f)):pn(i,s,l,f),s.memoizedState=g.state,i=s.child):i=Ni(i,s,f),i}function l0(i,s,l,c){return gc(),s.flags|=256,pn(i,s,l,c),s.child}var Zg={dehydrated:null,treeContext:null,retryLane:0};function Jg(i){return{baseLanes:i,cachePool:cw()}}function e_(i,s,l){return i=i!==null?i.childLanes&~l:0,s&&(i|=yr),i}function u0(i,s,l){var c=s.pendingProps,f=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Wt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(We){if(f?Is(s):As(),We){var b=fn,C;if(C=b){e:{for(C=b,b=$r;C.nodeType!==8;){if(!b){b=null;break e}if(C=Dr(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(s.memoizedState={dehydrated:b,treeContext:qa!==null?{id:Ci,overflow:Di}:null,retryLane:536870912},C=_r(18,null,null,0),C.stateNode=b,C.return=s,s.child=C,xn=s,fn=null,C=!0):C=!1}C||Ga(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?s.lanes=16:s.lanes=536870912,null;xi(s)}return b=c.children,c=c.fallback,f?(As(),f=s.mode,b=n_({mode:"hidden",children:b},f),c=to(c,f,l,null),b.return=s,c.return=s,b.sibling=c,s.child=b,f=s.child,f.memoizedState=Jg(l),f.childLanes=e_(i,T,l),s.memoizedState=Zg,c):(Is(s),t_(s,b))}if(C=i.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(g)s.flags&256?(Is(s),s.flags&=-257,s=r_(i,s,l)):s.memoizedState!==null?(As(),s.child=i.child,s.flags|=128,s=null):(As(),f=c.fallback,b=s.mode,c=n_({mode:"visible",children:c.children},b),f=to(f,b,l,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,$a(s,i.child,null,l),c=s.child,c.memoizedState=Jg(l),c.childLanes=e_(i,T,l),s.memoizedState=Zg,s=f);else if(Is(s),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var U=T.dgst;T=U,c=Error(r(419)),c.stack="",c.digest=T,_c({value:c,source:null,stack:null}),s=r_(i,s,l)}else if(sn||Cc(i,s,l,!1),T=(l&i.childLanes)!==0,sn||T){if(T=at,T!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|l))!==0?0:c,c!==0&&c!==C.retryLane)throw C.retryLane=c,bs(i,c),Pn(T,i,c),e0}b.data==="$?"||P_(),s=r_(i,s,l)}else b.data==="$?"?(s.flags|=128,s.child=i.child,s=Qx.bind(null,i),b._reactRetry=s,s=null):(i=C.treeContext,fn=Dr(b.nextSibling),xn=s,We=!0,Rr=null,$r=!1,i!==null&&(dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=qa,Ci=i.id,Di=i.overflow,qa=s),s=t_(s,c.children),s.flags|=4096);return s}return f?(As(),f=c.fallback,b=s.mode,C=i.child,U=C.sibling,c=Vs(C,{mode:"hidden",children:c.children}),c.subtreeFlags=C.subtreeFlags&31457280,U!==null?f=Vs(U,f):(f=to(f,b,l,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,b=i.child.memoizedState,b===null?b=Jg(l):(C=b.cachePool,C!==null?(U=Yt._currentValue,C=C.parent!==U?{parent:U,pool:U}:C):C=cw(),b={baseLanes:b.baseLanes|l,cachePool:C}),f.memoizedState=b,f.childLanes=e_(i,T,l),s.memoizedState=Zg,c):(Is(s),l=i.child,i=l.sibling,l=Vs(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=l,s.memoizedState=null,l)}function t_(i,s){return s=n_({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function n_(i,s){return V0(i,s,0,null)}function r_(i,s,l){return $a(s,i.child,null,l),i=t_(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function c0(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),o_(i.return,s,l)}function i_(i,s,l,c,f){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=f)}function h0(i,s,l){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(pn(i,s,c.children,l),c=Wt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&c0(i,l,s);else if(i.tag===19)c0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(Ke(Wt,c),f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&hf(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),i_(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&hf(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}i_(s,!0,l,null,g);break;case"together":i_(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ni(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ms|=s.lanes,(l&s.childLanes)===0)if(i!==null){if(Cc(i,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,l=Vs(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vs(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function s_(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&bf(i)))}function kx(i,s,l){switch(s.tag){case 3:os(s,s.stateNode.containerInfo),Cs(s,Yt,i.memoizedState.cache),gc();break;case 27:case 5:$u(s);break;case 4:os(s,s.stateNode.containerInfo);break;case 10:Cs(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Is(s),s.flags|=128,null):(l&s.child.childLanes)!==0?u0(i,s,l):(Is(s),i=Ni(i,s,l),i!==null?i.sibling:null);Is(s);break;case 19:var f=(i.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(Cc(i,s,l,!1),c=(l&s.childLanes)!==0),f){if(c)return h0(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(Wt,Wt.current),c)break;return null;case 22:case 23:return s.lanes=0,i0(i,s,l);case 24:Cs(s,Yt,i.memoizedState.cache)}return Ni(i,s,l)}function d0(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps)sn=!0;else{if(!s_(i,l)&&(s.flags&128)===0)return sn=!1,kx(i,s,l);sn=(i.flags&131072)!==0}else sn=!1,We&&(s.flags&1048576)!==0&&YT(s,af,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")v_(c)?(i=Xa(c,i),s.tag=1,s=o0(null,s,c,i,l)):(s.tag=0,s=Xg(null,s,c,i,l));else{if(c!=null){if(f=c.$$typeof,f===x){s.tag=11,s=t0(null,s,c,i,l);break e}else if(f===H){s.tag=14,s=n0(null,s,c,i,l);break e}}throw s=R(c)||c,Error(r(306,s,""))}}return s;case 0:return Xg(i,s,s.type,s.pendingProps,l);case 1:return c=s.type,f=Xa(c,s.pendingProps),o0(i,s,c,f,l);case 3:e:{if(os(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var g=s.pendingProps;f=s.memoizedState,c=f.element,c_(i,s),Pc(s,g,null,l);var T=s.memoizedState;if(g=T.cache,Cs(s,Yt,g),g!==f.cache&&l_(s,[Yt],l,!0),xc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=l0(i,s,g,l);break e}else if(g!==c){c=hr(Error(r(424)),s),_c(c),s=l0(i,s,g,l);break e}else for(fn=Dr(s.stateNode.containerInfo.firstChild),xn=s,We=!0,Rr=null,$r=!0,l=sw(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(gc(),g===c){s=Ni(i,s,l);break e}pn(i,s,g,l)}s=s.child}return s;case 26:return Rc(i,s),i===null?(l=mb(s.type,null,s.pendingProps,null))?s.memoizedState=l:We||(l=s.type,i=s.pendingProps,c=Bf(rr.current).createElement(l),c[tn]=s,c[$t]=i,mn(c,l,i),_t(c),s.stateNode=c):s.memoizedState=mb(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return $u(s),i===null&&We&&(c=s.stateNode=db(s.type,s.pendingProps,rr.current),xn=s,$r=!0,fn=Dr(c.firstChild)),c=s.pendingProps.children,i!==null||We?pn(i,s,c,l):s.child=$a(s,null,c,l),Rc(i,s),s.child;case 5:return i===null&&We&&((f=c=fn)&&(c=cP(c,s.type,s.pendingProps,$r),c!==null?(s.stateNode=c,xn=s,fn=Dr(c.firstChild),$r=!1,f=!0):f=!1),f||Ga(s)),$u(s),f=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,G_(f,g)?c=null:T!==null&&G_(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=Og(i,s,Rx,null,null,l),$c._currentValue=f),Rc(i,s),pn(i,s,c,l),s.child;case 6:return i===null&&We&&((i=l=fn)&&(l=hP(l,s.pendingProps,$r),l!==null?(s.stateNode=l,xn=s,fn=null,i=!0):i=!1),i||Ga(s)),null;case 13:return u0(i,s,l);case 4:return os(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=$a(s,null,c,l):pn(i,s,c,l),s.child;case 11:return t0(i,s,s.type,s.pendingProps,l);case 7:return pn(i,s,s.pendingProps,l),s.child;case 8:return pn(i,s,s.pendingProps.children,l),s.child;case 12:return pn(i,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,Cs(s,s.type,c.value),pn(i,s,c.children,l),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,Ja(s),f=Tn(f),c=c(f),s.flags|=1,pn(i,s,c,l),s.child;case 14:return n0(i,s,s.type,s.pendingProps,l);case 15:return r0(i,s,s.type,s.pendingProps,l);case 19:return h0(i,s,l);case 22:return i0(i,s,l);case 24:return Ja(s),c=Tn(Yt),i===null?(f=Pg(),f===null&&(f=at,g=Dg(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=l),f=g),s.memoizedState={parent:c,cache:f},u_(s),Cs(s,Yt,f)):((i.lanes&l)!==0&&(c_(i,s),Pc(s,null,null,l),xc()),f=i.memoizedState,g=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Cs(s,Yt,c)):(c=g.cache,Cs(s,Yt,c),c!==f.cache&&l_(s,[Yt],l,!0))),pn(i,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var a_=Me(null),Za=null,Oi=null;function Cs(i,s,l){Ke(a_,s._currentValue),s._currentValue=l}function ki(i){i._currentValue=a_.current,Ze(a_)}function o_(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function l_(i,s,l,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=f;for(var C=0;C<s.length;C++)if(b.context===s[C]){g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),o_(g.return,l,i),c||(T=null);break e}g=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(r(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),o_(T,l,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Cc(i,s,l,c){i=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var b=f.type;Kn(f.pendingProps.value,T.value)||(i!==null?i.push(b):i=[b])}}else if(f===as.current){if(T=f.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push($c):i=[$c])}f=f.return}i!==null&&l_(s,i,l,c),s.flags|=262144}function bf(i){for(i=i.firstContext;i!==null;){if(!Kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ja(i){Za=i,Oi=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Tn(i){return f0(Za,i)}function If(i,s){return Za===null&&Ja(i),f0(i,s)}function f0(i,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},Oi===null){if(i===null)throw Error(r(308));Oi=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Oi=Oi.next=s;return l}var Ds=!1;function u_(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function c_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function xs(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Ps(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(vt&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=rf(i),QT(i,null,l),s}return nf(i,c,s,l),rf(i)}function Dc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}function h_(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}var d_=!1;function xc(){if(d_){var i=yl;if(i!==null)throw i}}function Pc(i,s,l,c){d_=!1;var f=i.updateQueue;Ds=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var C=b,U=C.next;C.next=null,T===null?g=U:T.next=U,T=C;var J=i.alternate;J!==null&&(J=J.updateQueue,b=J.lastBaseUpdate,b!==T&&(b===null?J.firstBaseUpdate=U:b.next=U,J.lastBaseUpdate=C))}if(g!==null){var ne=f.baseState;T=0,J=U=C=null,b=g;do{var $=b.lane&-536870913,Z=$!==b.lane;if(Z?(Ge&$)===$:(c&$)===$){$!==0&&$===_l&&(d_=!0),J!==null&&(J=J.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ve=i,xe=b;$=s;var Ct=l;switch(xe.tag){case 1:if(ve=xe.payload,typeof ve=="function"){ne=ve.call(Ct,ne,$);break e}ne=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=xe.payload,$=typeof ve=="function"?ve.call(Ct,ne,$):ve,$==null)break e;ne=P({},ne,$);break e;case 2:Ds=!0}}$=b.callback,$!==null&&(i.flags|=64,Z&&(i.flags|=8192),Z=f.callbacks,Z===null?f.callbacks=[$]:Z.push($))}else Z={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},J===null?(U=J=Z,C=ne):J=J.next=Z,T|=$;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;Z=b,b=Z.next,Z.next=null,f.lastBaseUpdate=Z,f.shared.pending=null}}while(!0);J===null&&(C=ne),f.baseState=C,f.firstBaseUpdate=U,f.lastBaseUpdate=J,g===null&&(f.shared.lanes=0),Ms|=T,i.lanes=T,i.memoizedState=ne}}function p0(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function m0(i,s){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)p0(l[i],s)}function Nc(i,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&i)===i){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==f)}}catch(b){st(s,s.return,b)}}function Ns(i,s,l){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&i)===i){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=s;var C=l;try{b()}catch(U){st(f,C,U)}}}c=c.next}while(c!==g)}}catch(U){st(s,s.return,U)}}function g0(i){var s=i.updateQueue;if(s!==null){var l=i.stateNode;try{m0(s,l)}catch(c){st(i,i.return,c)}}}function _0(i,s,l){l.props=Xa(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(c){st(i,s,c)}}function eo(i,s){try{var l=i.ref;if(l!==null){var c=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof l=="function"?i.refCleanup=l(f):l.current=f}}catch(g){st(i,s,g)}}function Qn(i,s){var l=i.ref,c=i.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(f){st(i,s,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(f){st(i,s,f)}else l.current=null}function y0(i){var s=i.type,l=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(f){st(i,i.return,f)}}function v0(i,s,l){try{var c=i.stateNode;sP(c,i.type,l,s),c[$t]=s}catch(f){st(i,i.return,f)}}function E0(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function f_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||E0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function p_(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Uf));else if(c!==4&&c!==27&&(i=i.child,i!==null))for(p_(i,s,l),i=i.sibling;i!==null;)p_(i,s,l),i=i.sibling}function Af(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&c!==27&&(i=i.child,i!==null))for(Af(i,s,l),i=i.sibling;i!==null;)Af(i,s,l),i=i.sibling}var Vi=!1,St=!1,m_=!1,T0=typeof WeakSet=="function"?WeakSet:Set,an=null,w0=!1;function Vx(i,s){if(i=i.containerInfo,q_=Gf,i=BT(i),_g(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,b=-1,C=-1,U=0,J=0,ne=i,$=null;t:for(;;){for(var Z;ne!==l||f!==0&&ne.nodeType!==3||(b=T+f),ne!==g||c!==0&&ne.nodeType!==3||(C=T+c),ne.nodeType===3&&(T+=ne.nodeValue.length),(Z=ne.firstChild)!==null;)$=ne,ne=Z;for(;;){if(ne===i)break t;if($===l&&++U===f&&(b=T),$===g&&++J===c&&(C=T),(Z=ne.nextSibling)!==null)break;ne=$,$=ne.parentNode}ne=Z}l=b===-1||C===-1?null:{start:b,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(H_={focusedElem:i,selectionRange:l},Gf=!1,an=s;an!==null;)if(s=an,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,an=i;else for(;an!==null;){switch(s=an,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,l=s,f=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var ve=Xa(l.type,f,l.elementType===l.type);i=c.getSnapshotBeforeUpdate(ve,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(xe){st(l,l.return,xe)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,l=i.nodeType,l===9)Q_(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Q_(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,an=i;break}an=s.return}return ve=w0,w0=!1,ve}function b0(i,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:Li(i,l),c&4&&Nc(5,l);break;case 1:if(Li(i,l),c&4)if(i=l.stateNode,s===null)try{i.componentDidMount()}catch(b){st(l,l.return,b)}else{var f=Xa(l.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(f,s,i.__reactInternalSnapshotBeforeUpdate)}catch(b){st(l,l.return,b)}}c&64&&g0(l),c&512&&eo(l,l.return);break;case 3:if(Li(i,l),c&64&&(c=l.updateQueue,c!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{m0(c,i)}catch(b){st(l,l.return,b)}}break;case 26:Li(i,l),c&512&&eo(l,l.return);break;case 27:case 5:Li(i,l),s===null&&c&4&&y0(l),c&512&&eo(l,l.return);break;case 12:Li(i,l);break;case 13:Li(i,l),c&4&&S0(i,l);break;case 22:if(f=l.memoizedState!==null||Vi,!f){s=s!==null&&s.memoizedState!==null||St;var g=Vi,T=St;Vi=f,(St=s)&&!T?Os(i,l,(l.subtreeFlags&8772)!==0):Li(i,l),Vi=g,St=T}c&512&&(l.memoizedProps.mode==="manual"?eo(l,l.return):Qn(l,l.return));break;default:Li(i,l)}}function I0(i){var s=i.alternate;s!==null&&(i.alternate=null,I0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&xa(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ft=null,Wn=!1;function Mi(i,s,l){for(l=l.child;l!==null;)A0(i,s,l),l=l.sibling}function A0(i,s,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ls,l)}catch{}switch(l.tag){case 26:St||Qn(l,s),Mi(i,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:St||Qn(l,s);var c=Ft,f=Wn;for(Ft=l.stateNode,Mi(i,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);xa(l),Ft=c,Wn=f;break;case 5:St||Qn(l,s);case 6:f=Ft;var g=Wn;if(Ft=null,Mi(i,s,l),Ft=f,Wn=g,Ft!==null)if(Wn)try{i=Ft,c=l.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)}catch(T){st(l,s,T)}else try{Ft.removeChild(l.stateNode)}catch(T){st(l,s,T)}break;case 18:Ft!==null&&(Wn?(s=Ft,l=l.stateNode,s.nodeType===8?K_(s.parentNode,l):s.nodeType===1&&K_(s,l),Yc(s)):K_(Ft,l.stateNode));break;case 4:c=Ft,f=Wn,Ft=l.stateNode.containerInfo,Wn=!0,Mi(i,s,l),Ft=c,Wn=f;break;case 0:case 11:case 14:case 15:St||Ns(2,l,s),St||Ns(4,l,s),Mi(i,s,l);break;case 1:St||(Qn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&_0(l,s,c)),Mi(i,s,l);break;case 21:Mi(i,s,l);break;case 22:St||Qn(l,s),St=(c=St)||l.memoizedState!==null,Mi(i,s,l),St=c;break;default:Mi(i,s,l)}}function S0(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Yc(i)}catch(l){st(s,s.return,l)}}function Mx(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new T0),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new T0),s;default:throw Error(r(435,i.tag))}}function g_(i,s){var l=Mx(i);s.forEach(function(c){var f=Wx.bind(null,i,c);l.has(c)||(l.add(c),c.then(f,f))})}function mr(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var f=l[c],g=i,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:Ft=b.stateNode,Wn=!1;break e;case 3:Ft=b.stateNode.containerInfo,Wn=!0;break e;case 4:Ft=b.stateNode.containerInfo,Wn=!0;break e}b=b.return}if(Ft===null)throw Error(r(160));A0(g,T,f),Ft=null,Wn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)R0(s,i),s=s.sibling}var Cr=null;function R0(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:mr(s,i),gr(i),c&4&&(Ns(3,i,i.return),Nc(3,i),Ns(5,i,i.return));break;case 1:mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&64&&Vi&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var f=Cr;if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=i.memoizedState,l===null)if(c===null)if(i.stateNode===null){e:{c=i.type,l=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[ms]||g[tn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),mn(g,c,l),g[tn]=i,_t(g),c=g;break e;case"link":var T=yb("link","href",f).get(c+(l.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;case"meta":if(T=yb("meta","content",f).get(c+(l.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[tn]=i,_t(g),c=g}i.stateNode=c}else vb(f,i.type,i.stateNode);else i.stateNode=_b(f,c,i.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?vb(f,i.type,i.stateNode):_b(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&v0(i,i.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&i.alternate===null){f=i.stateNode,g=i.memoizedProps;try{for(var C=f.firstChild;C;){var U=C.nextSibling,J=C.nodeName;C[ms]||J==="HEAD"||J==="BODY"||J==="SCRIPT"||J==="STYLE"||J==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=U}for(var ne=i.type,$=f.attributes;$.length;)f.removeAttributeNode($[0]);mn(f,ne,g),f[tn]=i,f[$t]=g}catch(ve){st(i,i.return,ve)}}case 5:if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),i.flags&32){f=i.stateNode;try{ar(f,"")}catch(ve){st(i,i.return,ve)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,v0(i,f,l!==null?l.memoizedProps:f)),c&1024&&(m_=!0);break;case 6:if(mr(s,i),gr(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,l=i.stateNode;try{l.nodeValue=c}catch(ve){st(i,i.return,ve)}}break;case 3:if(jf=null,f=Cr,Cr=zf(s.containerInfo),mr(s,i),Cr=f,gr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Yc(s.containerInfo)}catch(ve){st(i,i.return,ve)}m_&&(m_=!1,C0(i));break;case 4:c=Cr,Cr=zf(i.stateNode.containerInfo),mr(s,i),gr(i),Cr=c;break;case 12:mr(s,i),gr(i);break;case 13:mr(s,i),gr(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(A_=Ln()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,g_(i,c)));break;case 22:if(c&512&&(St||l===null||Qn(l,l.return)),C=i.memoizedState!==null,U=l!==null&&l.memoizedState!==null,J=Vi,ne=St,Vi=J||C,St=ne||U,mr(s,i),St=ne,Vi=J,gr(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=Vi||St,l===null||U||s||wl(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(l=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){U=l=s;try{if(f=U.stateNode,C)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=U.stateNode,b=U.memoizedProps.style;var Z=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(ve){st(U,U.return,ve)}}}else if(s.tag===6){if(l===null){U=s;try{U.stateNode.nodeValue=C?"":U.memoizedProps}catch(ve){st(U,U.return,ve)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,g_(i,l))));break;case 19:mr(s,i),gr(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,g_(i,c)));break;case 21:break;default:mr(s,i),gr(i)}}function gr(i){var s=i.flags;if(s&2){try{if(i.tag!==27){e:{for(var l=i.return;l!==null;){if(E0(l)){var c=l;break e}l=l.return}throw Error(r(160))}switch(c.tag){case 27:var f=c.stateNode,g=f_(i);Af(i,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(ar(T,""),c.flags&=-33);var b=f_(i);Af(i,b,T);break;case 3:case 4:var C=c.stateNode.containerInfo,U=f_(i);p_(i,U,C);break;default:throw Error(r(161))}}}catch(J){st(i,i.return,J)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function C0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;C0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function Li(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)b0(i,s.alternate,s),s=s.sibling}function wl(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:Ns(4,s,s.return),wl(s);break;case 1:Qn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&_0(s,s.return,l),wl(s);break;case 26:case 27:case 5:Qn(s,s.return),wl(s);break;case 22:Qn(s,s.return),s.memoizedState===null&&wl(s);break;default:wl(s)}i=i.sibling}}function Os(i,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Os(f,g,l),Nc(4,g);break;case 1:if(Os(f,g,l),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(U){st(c,c.return,U)}if(c=g,f=c.updateQueue,f!==null){var b=c.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)p0(C[f],b)}catch(U){st(c,c.return,U)}}l&&T&64&&g0(g),eo(g,g.return);break;case 26:case 27:case 5:Os(f,g,l),l&&c===null&&T&4&&y0(g),eo(g,g.return);break;case 12:Os(f,g,l);break;case 13:Os(f,g,l),l&&T&4&&S0(f,g);break;case 22:g.memoizedState===null&&Os(f,g,l),eo(g,g.return);break;default:Os(f,g,l)}s=s.sibling}}function __(i,s){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&wc(l))}function y_(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&wc(i))}function ks(i,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)D0(i,s,l,c),s=s.sibling}function D0(i,s,l,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ks(i,s,l,c),f&2048&&Nc(9,s);break;case 3:ks(i,s,l,c),f&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&wc(i)));break;case 12:if(f&2048){ks(i,s,l,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(s,s.return,C)}}else ks(i,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?ks(i,s,l,c):Oc(i,s):g._visibility&4?ks(i,s,l,c):(g._visibility|=4,bl(i,s,l,c,(s.subtreeFlags&10256)!==0)),f&2048&&__(s.alternate,s);break;case 24:ks(i,s,l,c),f&2048&&y_(s.alternate,s);break;default:ks(i,s,l,c)}}function bl(i,s,l,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,b=l,C=c,U=T.flags;switch(T.tag){case 0:case 11:case 15:bl(g,T,b,C,f),Nc(8,T);break;case 23:break;case 22:var J=T.stateNode;T.memoizedState!==null?J._visibility&4?bl(g,T,b,C,f):Oc(g,T):(J._visibility|=4,bl(g,T,b,C,f)),f&&U&2048&&__(T.alternate,T);break;case 24:bl(g,T,b,C,f),f&&U&2048&&y_(T.alternate,T);break;default:bl(g,T,b,C,f)}s=s.sibling}}function Oc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=i,c=s,f=c.flags;switch(c.tag){case 22:Oc(l,c),f&2048&&__(c.alternate,c);break;case 24:Oc(l,c),f&2048&&y_(c.alternate,c);break;default:Oc(l,c)}s=s.sibling}}var kc=8192;function Il(i){if(i.subtreeFlags&kc)for(i=i.child;i!==null;)x0(i),i=i.sibling}function x0(i){switch(i.tag){case 26:Il(i),i.flags&kc&&i.memoizedState!==null&&IP(Cr,i.memoizedState,i.memoizedProps);break;case 5:Il(i);break;case 3:case 4:var s=Cr;Cr=zf(i.stateNode.containerInfo),Il(i),Cr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=kc,kc=16777216,Il(i),kc=s):Il(i));break;default:Il(i)}}function P0(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Vc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,O0(c,i)}P0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)N0(i),i=i.sibling}function N0(i){switch(i.tag){case 0:case 11:case 15:Vc(i),i.flags&2048&&Ns(9,i,i.return);break;case 3:Vc(i);break;case 12:Vc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,Sf(i)):Vc(i);break;default:Vc(i)}}function Sf(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,O0(c,i)}P0(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:Ns(8,s,s.return),Sf(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,Sf(s));break;default:Sf(s)}i=i.sibling}}function O0(i,s){for(;an!==null;){var l=an;switch(l.tag){case 0:case 11:case 15:Ns(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:wc(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,an=c;else e:for(l=i;an!==null;){c=an;var f=c.sibling,g=c.return;if(I0(c),c===l){an=null;break e}if(f!==null){f.return=g,an=f;break e}an=g}}}function Lx(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _r(i,s,l,c){return new Lx(i,s,l,c)}function v_(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Vs(i,s){var l=i.alternate;return l===null?(l=_r(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&31457280,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function k0(i,s){i.flags&=31457282;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,s=l.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function Rf(i,s,l,c,f,g){var T=0;if(c=i,typeof i=="function")v_(i)&&(T=1);else if(typeof i=="string")T=wP(i,l,Ut.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case p:return to(l.children,f,g,s);case m:T=8,f|=24;break;case y:return i=_r(12,l,s,f|2),i.elementType=y,i.lanes=g,i;case k:return i=_r(13,l,s,f),i.elementType=k,i.lanes=g,i;case L:return i=_r(19,l,s,f),i.elementType=L,i.lanes=g,i;case K:return V0(l,f,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case v:case S:T=10;break e;case w:T=9;break e;case x:T=11;break e;case H:T=14;break e;case X:T=16,c=null;break e}T=29,l=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=_r(T,l,s,f),s.elementType=i,s.type=c,s.lanes=g,s}function to(i,s,l,c){return i=_r(7,i,c,s),i.lanes=l,i}function V0(i,s,l,c){i=_r(22,i,c,s),i.elementType=K,i.lanes=l;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)===0){var T=bs(g,2);T!==null&&(f._pendingVisibility|=2,Pn(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)!==0){var T=bs(g,2);T!==null&&(f._pendingVisibility&=-3,Pn(T,g,2))}}};return i.stateNode=f,i}function E_(i,s,l){return i=_r(6,i,null,s),i.lanes=l,i}function T_(i,s,l){return s=_r(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Ui(i){i.flags|=4}function M0(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!Eb(s)){if(s=pr.current,s!==null&&((Ge&4194176)===Ge?Kr!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||s!==Kr))throw vc=Sg,JT;i.flags|=8192}}function Cf(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?hs():536870912,i.lanes|=s,Sl|=s)}function Mc(i,s){if(!We)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function yt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function Ux(i,s,l){var c=s.pendingProps;switch(Ig(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(s),null;case 1:return yt(s),null;case 3:return l=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),ki(Yt),_i(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(mc(s)?Ui(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Rr!==null&&(D_(Rr),Rr=null))),yt(s),null;case 26:return l=s.memoizedState,i===null?(Ui(s),l!==null?(yt(s),M0(s,l)):(yt(s),s.flags&=-16777217)):l?l!==i.memoizedState?(Ui(s),yt(s),M0(s,l)):(yt(s),s.flags&=-16777217):(i.memoizedProps!==c&&Ui(s),yt(s),s.flags&=-16777217),null;case 27:Go(s),l=rr.current;var f=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}i=Ut.current,mc(s)?XT(s):(i=db(f,c,l),s.stateNode=i,Ui(s))}return yt(s),null;case 5:if(Go(s),l=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}if(i=Ut.current,mc(s))XT(s);else{switch(f=Bf(rr.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(l,{is:c.is}):f.createElement(l)}}i[tn]=s,i[$t]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=i;e:switch(mn(i,l,c),l){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ui(s)}}return yt(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=rr.current,mc(s)){if(i=s.stateNode,l=s.memoizedProps,c=null,f=xn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[tn]=s,i=!!(i.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||ab(i.nodeValue,l)),i||Ga(s)}else i=Bf(i).createTextNode(c),i[tn]=s,s.stateNode=i}return yt(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=mc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[tn]=s}else gc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;yt(s),f=!1}else Rr!==null&&(D_(Rr),Rr=null),f=!0;if(!f)return s.flags&256?(xi(s),s):(xi(s),null)}if(xi(s),(s.flags&128)!==0)return s.lanes=l,s;if(l=c!==null,i=i!==null&&i.memoizedState!==null,l){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return l!==i&&l&&(s.child.flags|=8192),Cf(s,s.updateQueue),yt(s),null;case 4:return _i(),i===null&&z_(s.stateNode.containerInfo),yt(s),null;case 10:return ki(s.type),yt(s),null;case 19:if(Ze(Wt),f=s.memoizedState,f===null)return yt(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)Mc(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=hf(i),g!==null){for(s.flags|=128,Mc(f,!1),i=g.updateQueue,s.updateQueue=i,Cf(s,i),s.subtreeFlags=0,i=l,l=s.child;l!==null;)k0(l,i),l=l.sibling;return Ke(Wt,Wt.current&1|2),s.child}i=i.sibling}f.tail!==null&&Ln()>Df&&(s.flags|=128,c=!0,Mc(f,!1),s.lanes=4194304)}else{if(!c)if(i=hf(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,Cf(s,i),Mc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!We)return yt(s),null}else 2*Ln()-f.renderingStartTime>Df&&l!==536870912&&(s.flags|=128,c=!0,Mc(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(i=f.last,i!==null?i.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Ln(),s.sibling=null,i=Wt.current,Ke(Wt,c?i&1|2:i&1),s):(yt(s),null);case 22:case 23:return xi(s),Cg(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(l&536870912)!==0&&(s.flags&128)===0&&(yt(s),s.subtreeFlags&6&&(s.flags|=8192)):yt(s),l=s.updateQueue,l!==null&&Cf(s,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),i!==null&&Ze(Ka),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ki(Yt),yt(s),null;case 25:return null}throw Error(r(156,s.tag))}function Bx(i,s){switch(Ig(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ki(Yt),_i(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return Go(s),null;case 13:if(xi(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));gc()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ze(Wt),null;case 4:return _i(),null;case 10:return ki(s.type),null;case 22:case 23:return xi(s),Cg(),i!==null&&Ze(Ka),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return ki(Yt),null;case 25:return null;default:return null}}function L0(i,s){switch(Ig(s),s.tag){case 3:ki(Yt),_i();break;case 26:case 27:case 5:Go(s);break;case 4:_i();break;case 13:xi(s);break;case 19:Ze(Wt);break;case 10:ki(s.type);break;case 22:case 23:xi(s),Cg(),i!==null&&Ze(Ka);break;case 24:ki(Yt)}}var zx={getCacheForType:function(i){var s=Tn(Yt),l=s.data.get(i);return l===void 0&&(l=i(),s.data.set(i,l)),l}},Fx=typeof WeakMap=="function"?WeakMap:Map,vt=0,at=null,Ue=null,Ge=0,ot=0,Yn=null,Bi=!1,Al=!1,w_=!1,zi=0,Rt=0,Ms=0,no=0,b_=0,yr=0,Sl=0,Lc=null,Wr=null,I_=!1,A_=0,Df=1/0,xf=null,Ls=null,Pf=!1,ro=null,Uc=0,S_=0,R_=null,Bc=0,C_=null;function Xn(){if((vt&2)!==0&&Ge!==0)return Ge&-Ge;if(A.T!==null){var i=_l;return i!==0?i:M_()}return Md()}function U0(){yr===0&&(yr=(Ge&536870912)===0||We?Xu():536870912);var i=pr.current;return i!==null&&(i.flags|=32),yr}function Pn(i,s,l){(i===at&&ot===2||i.cancelPendingCommit!==null)&&(Rl(i,0),Fi(i,Ge,yr,!1)),Ot(i,l),((vt&2)===0||i!==at)&&(i===at&&((vt&2)===0&&(no|=l),Rt===4&&Fi(i,Ge,yr,!1)),Yr(i))}function B0(i,s,l){if((vt&6)!==0)throw Error(r(327));var c=!l&&(s&60)===0&&(s&i.expiredLanes)===0||cs(i,s),f=c?Hx(i,s):N_(i,s,!0),g=c;do{if(f===0){Al&&!c&&Fi(i,s,0,!1);break}else if(f===6)Fi(i,s,0,!Bi);else{if(l=i.current.alternate,g&&!jx(l)){f=N_(i,s,!1),g=!1;continue}if(f===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=i;f=Lc;var C=b.current.memoizedState.isDehydrated;if(C&&(Rl(b,T).flags|=256),T=N_(b,T,!1),T!==2){if(w_&&!C){b.errorRecoveryDisabledLanes|=g,no|=g,f=4;break e}g=Wr,Wr=f,g!==null&&D_(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){Rl(i,0),Fi(i,s,0,!0);break}e:{switch(c=i,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){Fi(c,s,yr,!Bi);break e}break;case 2:Wr=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=A_+300-Ln(),10<g)){if(Fi(c,s,yr,!Bi),ir(c,0)!==0)break e;c.timeoutHandle=ub(z0.bind(null,c,l,Wr,xf,I_,s,yr,no,Sl,Bi,2,-0,0),g);break e}z0(c,l,Wr,xf,I_,s,yr,no,Sl,Bi,0,-0,0)}}break}while(!0);Yr(i)}function D_(i){Wr===null?Wr=i:Wr.push.apply(Wr,i)}function z0(i,s,l,c,f,g,T,b,C,U,J,ne,$){var Z=s.subtreeFlags;if((Z&8192||(Z&16785408)===16785408)&&(Gc={stylesheets:null,count:0,unsuspend:bP},x0(s),s=AP(),s!==null)){i.cancelPendingCommit=s(K0.bind(null,i,l,c,f,T,b,C,1,ne,$)),Fi(i,g,T,!U);return}K0(i,l,c,f,T,b,C,J,ne,$)}function jx(i){for(var s=i;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var f=l[c],g=f.getSnapshot;f=f.value;try{if(!Kn(g(),f))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fi(i,s,l,c){s&=~b_,s&=~no,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var f=s;0<f;){var g=31-Rn(f),T=1<<g;c[g]=-1,f&=~T}l!==0&&ds(i,l,s)}function Nf(){return(vt&6)===0?(zc(0),!1):!0}function x_(){if(Ue!==null){if(ot===0)var i=Ue.return;else i=Ue,Oi=Za=null,Mg(i),ml=null,Ec=0,i=Ue;for(;i!==null;)L0(i.alternate,i),i=i.return;Ue=null}}function Rl(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,oP(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),x_(),at=i,Ue=l=Vs(i.current,null),Ge=s,ot=0,Yn=null,Bi=!1,Al=cs(i,s),w_=!1,Sl=yr=b_=no=Ms=Rt=0,Wr=Lc=null,I_=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var f=31-Rn(c),g=1<<f;s|=i[f],c&=~g}return zi=s,tf(),l}function F0(i,s){Ve=null,A.H=Qr,s===yc?(s=nw(),ot=3):s===JT?(s=nw(),ot=4):ot=s===e0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Yn=s,Ue===null&&(Rt=1,wf(i,hr(s,i.current)))}function j0(){var i=A.H;return A.H=Qr,i===null?Qr:i}function q0(){var i=A.A;return A.A=zx,i}function P_(){Rt=4,Bi||(Ge&4194176)!==Ge&&pr.current!==null||(Al=!0),(Ms&134217727)===0&&(no&134217727)===0||at===null||Fi(at,Ge,yr,!1)}function N_(i,s,l){var c=vt;vt|=2;var f=j0(),g=q0();(at!==i||Ge!==s)&&(xf=null,Rl(i,s)),s=!1;var T=Rt;e:do try{if(ot!==0&&Ue!==null){var b=Ue,C=Yn;switch(ot){case 8:x_(),T=6;break e;case 3:case 2:case 6:pr.current===null&&(s=!0);var U=ot;if(ot=0,Yn=null,Cl(i,b,C,U),l&&Al){T=0;break e}break;default:U=ot,ot=0,Yn=null,Cl(i,b,C,U)}}qx(),T=Rt;break}catch(J){F0(i,J)}while(!0);return s&&i.shellSuspendCounter++,Oi=Za=null,vt=c,A.H=f,A.A=g,Ue===null&&(at=null,Ge=0,tf()),T}function qx(){for(;Ue!==null;)H0(Ue)}function Hx(i,s){var l=vt;vt|=2;var c=j0(),f=q0();at!==i||Ge!==s?(xf=null,Df=Ln()+500,Rl(i,s)):Al=cs(i,s);e:do try{if(ot!==0&&Ue!==null){s=Ue;var g=Yn;t:switch(ot){case 1:ot=0,Yn=null,Cl(i,s,g,1);break;case 2:if(ew(g)){ot=0,Yn=null,G0(s);break}s=function(){ot===2&&at===i&&(ot=7),Yr(i)},g.then(s,s);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:ew(g)?(ot=0,Yn=null,G0(s)):(ot=0,Yn=null,Cl(i,s,g,7));break;case 5:var T=null;switch(Ue.tag){case 26:T=Ue.memoizedState;case 5:case 27:var b=Ue;if(!T||Eb(T)){ot=0,Yn=null;var C=b.sibling;if(C!==null)Ue=C;else{var U=b.return;U!==null?(Ue=U,Of(U)):Ue=null}break t}}ot=0,Yn=null,Cl(i,s,g,5);break;case 6:ot=0,Yn=null,Cl(i,s,g,6);break;case 8:x_(),Rt=6;break e;default:throw Error(r(462))}}Gx();break}catch(J){F0(i,J)}while(!0);return Oi=Za=null,A.H=c,A.A=f,vt=l,Ue!==null?0:(at=null,Ge=0,tf(),Rt)}function Gx(){for(;Ue!==null&&!ag();)H0(Ue)}function H0(i){var s=d0(i.alternate,i,zi);i.memoizedProps=i.pendingProps,s===null?Of(i):Ue=s}function G0(i){var s=i,l=s.alternate;switch(s.tag){case 15:case 0:s=a0(l,s,s.pendingProps,s.type,void 0,Ge);break;case 11:s=a0(l,s,s.pendingProps,s.type.render,s.ref,Ge);break;case 5:Mg(s);default:L0(l,s),s=Ue=k0(s,zi),s=d0(l,s,zi)}i.memoizedProps=i.pendingProps,s===null?Of(i):Ue=s}function Cl(i,s,l,c){Oi=Za=null,Mg(s),ml=null,Ec=0;var f=s.return;try{if(Ox(i,f,s,l,Ge)){Rt=1,wf(i,hr(l,i.current)),Ue=null;return}}catch(g){if(f!==null)throw Ue=f,g;Rt=1,wf(i,hr(l,i.current)),Ue=null;return}s.flags&32768?(We||c===1?i=!0:Al||(Ge&536870912)!==0?i=!1:(Bi=i=!0,(c===2||c===3||c===6)&&(c=pr.current,c!==null&&c.tag===13&&(c.flags|=16384))),$0(s,i)):Of(s)}function Of(i){var s=i;do{if((s.flags&32768)!==0){$0(s,Bi);return}i=s.return;var l=Ux(s.alternate,s,zi);if(l!==null){Ue=l;return}if(s=s.sibling,s!==null){Ue=s;return}Ue=s=i}while(s!==null);Rt===0&&(Rt=5)}function $0(i,s){do{var l=Bx(i.alternate,i);if(l!==null){l.flags&=32767,Ue=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(i=i.sibling,i!==null)){Ue=i;return}Ue=i=l}while(i!==null);Rt=6,Ue=null}function K0(i,s,l,c,f,g,T,b,C,U){var J=A.T,ne=fe.p;try{fe.p=2,A.T=null,$x(i,s,l,c,ne,f,g,T,b,C,U)}finally{A.T=J,fe.p=ne}}function $x(i,s,l,c,f,g,T,b){do Dl();while(ro!==null);if((vt&6)!==0)throw Error(r(327));var C=i.finishedWork;if(c=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var U=C.lanes|C.childLanes;if(U|=Tg,kd(i,c,U,g,T,b),i===at&&(Ue=at=null,Ge=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Pf||(Pf=!0,S_=U,R_=l,Yx(yi,function(){return Dl(),null})),l=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||l?(l=A.T,A.T=null,g=fe.p,fe.p=2,T=vt,vt|=4,Vx(i,C),R0(C,i),gx(H_,i.containerInfo),Gf=!!q_,H_=q_=null,i.current=C,b0(i,C.alternate,C),Ku(),vt=T,fe.p=g,A.T=l):i.current=C,Pf?(Pf=!1,ro=i,Uc=c):Q0(i,U),U=i.pendingLanes,U===0&&(Ls=null),Wu(C.stateNode),Yr(i),s!==null)for(f=i.onRecoverableError,C=0;C<s.length;C++)U=s[C],f(U.value,{componentStack:U.stack});return(Uc&3)!==0&&Dl(),U=i.pendingLanes,(c&4194218)!==0&&(U&42)!==0?i===C_?Bc++:(Bc=0,C_=i):Bc=0,zc(0),null}function Q0(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,wc(s)))}function Dl(){if(ro!==null){var i=ro,s=S_;S_=0;var l=Vd(Uc),c=A.T,f=fe.p;try{if(fe.p=32>l?32:l,A.T=null,ro===null)var g=!1;else{l=R_,R_=null;var T=ro,b=Uc;if(ro=null,Uc=0,(vt&6)!==0)throw Error(r(331));var C=vt;if(vt|=4,N0(T.current),D0(T,T.current,b,l),vt=C,zc(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ls,T)}catch{}g=!0}return g}finally{fe.p=f,A.T=c,Q0(i,s)}}return!1}function W0(i,s,l){s=hr(l,s),s=Yg(i.stateNode,s,2),i=Ps(i,s,2),i!==null&&(Ot(i,2),Yr(i))}function st(i,s,l){if(i.tag===3)W0(i,i,l);else for(;s!==null;){if(s.tag===3){W0(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ls===null||!Ls.has(c))){i=hr(l,i),l=Zw(2),c=Ps(s,l,2),c!==null&&(Jw(l,c,s,i),Ot(c,2),Yr(c));break}}s=s.return}}function O_(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new Fx;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(l)||(w_=!0,f.add(l),i=Kx.bind(null,i,s,l),s.then(i,i))}function Kx(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,at===i&&(Ge&l)===l&&(Rt===4||Rt===3&&(Ge&62914560)===Ge&&300>Ln()-A_?(vt&2)===0&&Rl(i,0):b_|=l,Sl===Ge&&(Sl=0)),Yr(i)}function Y0(i,s){s===0&&(s=hs()),i=bs(i,s),i!==null&&(Ot(i,s),Yr(i))}function Qx(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Y0(i,l)}function Wx(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),Y0(i,l)}function Yx(i,s){return Ra(i,s)}var kf=null,xl=null,k_=!1,Vf=!1,V_=!1,io=0;function Yr(i){i!==xl&&i.next===null&&(xl===null?kf=xl=i:xl=xl.next=i),Vf=!0,k_||(k_=!0,Zx(Xx))}function zc(i,s){if(!V_&&Vf){V_=!0;do for(var l=!1,c=kf;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Rn(42|i)+1)-1,g&=f&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,J0(c,g))}else g=Ge,g=ir(c,c===at?g:0),(g&3)===0||cs(c,g)||(l=!0,J0(c,g));c=c.next}while(l);V_=!1}}function Xx(){Vf=k_=!1;var i=0;io!==0&&(aP()&&(i=io),io=0);for(var s=Ln(),l=null,c=kf;c!==null;){var f=c.next,g=X0(c,s);g===0?(c.next=null,l===null?kf=f:l.next=f,f===null&&(xl=l)):(l=c,(i!==0||(g&3)!==0)&&(Vf=!0)),c=f}zc(i)}function X0(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Rn(g),b=1<<T,C=f[T];C===-1?((b&l)===0||(b&c)!==0)&&(f[T]=Qo(b,s)):C<=s&&(i.expiredLanes|=b),g&=~b}if(s=at,l=Ge,l=ir(i,i===s?l:0),c=i.callbackNode,l===0||i===s&&ot===2||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Ko(c),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||cs(i,l)){if(s=l&-l,s===i.callbackPriority)return s;switch(c!==null&&Ko(c),Vd(l)){case 2:case 8:l=en;break;case 32:l=yi;break;case 268435456:l=Qu;break;default:l=yi}return c=Z0.bind(null,i),l=Ra(l,c),i.callbackPriority=s,i.callbackNode=l,s}return c!==null&&c!==null&&Ko(c),i.callbackPriority=2,i.callbackNode=null,2}function Z0(i,s){var l=i.callbackNode;if(Dl()&&i.callbackNode!==l)return null;var c=Ge;return c=ir(i,i===at?c:0),c===0?null:(B0(i,c,s),X0(i,Ln()),i.callbackNode!=null&&i.callbackNode===l?Z0.bind(null,i):null)}function J0(i,s){if(Dl())return null;B0(i,s,!0)}function Zx(i){lP(function(){(vt&6)!==0?Ra(Gt,i):i()})}function M_(){return io===0&&(io=Xu()),io}function eb(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Br(""+i)}function tb(i,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,i.id&&l.setAttribute("form",i.id),s.parentNode.insertBefore(l,s),i=new FormData(i),l.parentNode.removeChild(l),i}function Jx(i,s,l,c,f){if(s==="submit"&&l&&l.stateNode===f){var g=eb((f[$t]||null).action),T=c.submitter;T&&(s=(s=T[$t]||null)?eb(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var b=new tl("action","action",null,c,f);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(io!==0){var C=T?tb(f,T):new FormData(f);Gg(l,{pending:!0,data:C,method:f.method,action:g},null,C)}}else typeof g=="function"&&(b.preventDefault(),C=T?tb(f,T):new FormData(f),Gg(l,{pending:!0,data:C,method:f.method,action:g},g,C))},currentTarget:f}]})}}for(var L_=0;L_<KT.length;L_++){var U_=KT[L_],eP=U_.toLowerCase(),tP=U_[0].toUpperCase()+U_.slice(1);Sr(eP,"on"+tP)}Sr(jT,"onAnimationEnd"),Sr(qT,"onAnimationIteration"),Sr(HT,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(yx,"onTransitionRun"),Sr(vx,"onTransitionStart"),Sr(Ex,"onTransitionCancel"),Sr(GT,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fc));function nb(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],C=b.instance,U=b.currentTarget;if(b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=U;try{g(f)}catch(J){Tf(J)}f.currentTarget=null,g=C}else for(T=0;T<c.length;T++){if(b=c[T],C=b.instance,U=b.currentTarget,b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=U;try{g(f)}catch(J){Tf(J)}f.currentTarget=null,g=C}}}}function je(i,s){var l=s[Da];l===void 0&&(l=s[Da]=new Set);var c=i+"__bubble";l.has(c)||(rb(s,i,2,!1),l.add(c))}function B_(i,s,l){var c=0;s&&(c|=4),rb(l,i,c,s)}var Mf="_reactListening"+Math.random().toString(36).slice(2);function z_(i){if(!i[Mf]){i[Mf]=!0,Ju.forEach(function(l){l!=="selectionchange"&&(nP.has(l)||B_(l,!1,i),B_(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Mf]||(s[Mf]=!0,B_("selectionchange",!1,s))}}function rb(i,s,l,c){switch(Sb(s)){case 2:var f=CP;break;case 8:f=DP;break;default:f=J_}l=f.bind(null,s,l,i),f=void 0,!lr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function F_(i,s,l,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var C=T.tag;if((C===3||C===4)&&(C=T.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;T=T.return}for(;b!==null;){if(T=Ar(b),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){c=g=T;continue e}b=b.parentNode}}c=c.return}zd(function(){var U=g,J=el(l),ne=[];e:{var $=$T.get(i);if($!==void 0){var Z=tl,ve=i;switch(i){case"keypress":if(Fr(l)===0)break e;case"keydown":case"keyup":Z=ol;break;case"focusin":ve="focus",Z=il;break;case"focusout":ve="blur",Z=il;break;case"beforeblur":case"afterblur":Z=il;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ur;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Qd;break;case jT:case qT:case HT:Z=sl;break;case GT:Z=Yd;break;case"scroll":case"scrollend":Z=Fd;break;case"wheel":Z=ll;break;case"copy":case"cut":case"paste":Z=al;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=hc;break;case"toggle":case"beforetoggle":Z=Zd}var xe=(s&4)!==0,Ct=!xe&&(i==="scroll"||i==="scrollend"),B=xe?$!==null?$+"Capture":null:$;xe=[];for(var V=U,G;V!==null;){var ee=V;if(G=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||G===null||B===null||(ee=ka(V,B),ee!=null&&xe.push(jc(V,ee,G))),Ct)break;V=V.return}0<xe.length&&($=new Z($,ve,null,l,J),ne.push({event:$,listeners:xe}))}}if((s&7)===0){e:{if($=i==="mouseover"||i==="pointerover",Z=i==="mouseout"||i==="pointerout",$&&l!==or&&(ve=l.relatedTarget||l.fromElement)&&(Ar(ve)||ve[vi]))break e;if((Z||$)&&($=J.window===J?J:($=J.ownerDocument)?$.defaultView||$.parentWindow:window,Z?(ve=l.relatedTarget||l.toElement,Z=U,ve=ve?Ar(ve):null,ve!==null&&(Ct=Te(ve),xe=ve.tag,ve!==Ct||xe!==5&&xe!==27&&xe!==6)&&(ve=null)):(Z=null,ve=U),Z!==ve)){if(xe=ur,ee="onMouseLeave",B="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(xe=hc,ee="onPointerLeave",B="onPointerEnter",V="pointer"),Ct=Z==null?$:gs(Z),G=ve==null?$:gs(ve),$=new xe(ee,V+"leave",Z,l,J),$.target=Ct,$.relatedTarget=G,ee=null,Ar(J)===U&&(xe=new xe(B,V+"enter",ve,l,J),xe.target=G,xe.relatedTarget=Ct,ee=xe),Ct=ee,Z&&ve)t:{for(xe=Z,B=ve,V=0,G=xe;G;G=Pl(G))V++;for(G=0,ee=B;ee;ee=Pl(ee))G++;for(;0<V-G;)xe=Pl(xe),V--;for(;0<G-V;)B=Pl(B),G--;for(;V--;){if(xe===B||B!==null&&xe===B.alternate)break t;xe=Pl(xe),B=Pl(B)}xe=null}else xe=null;Z!==null&&ib(ne,$,Z,xe,!1),ve!==null&&Ct!==null&&ib(ne,Ct,ve,xe,!0)}}e:{if($=U?gs(U):window,Z=$.nodeName&&$.nodeName.toLowerCase(),Z==="select"||Z==="input"&&$.type==="file")var _e=PT;else if(Qt($))if(NT)_e=px;else{_e=dx;var Le=hx}else Z=$.nodeName,!Z||Z.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?U&&ic(U.elementType)&&(_e=PT):_e=fx;if(_e&&(_e=_e(i,U))){Ri(ne,_e,l,J);break e}Le&&Le(i,$,U),i==="focusout"&&U&&$.type==="number"&&U.memoizedProps.value!=null&&Jo($,"number",$.value)}switch(Le=U?gs(U):window,i){case"focusin":(Qt(Le)||Le.contentEditable==="true")&&(ul=Le,yg=U,pc=null);break;case"focusout":pc=yg=ul=null;break;case"mousedown":vg=!0;break;case"contextmenu":case"mouseup":case"dragend":vg=!1,zT(ne,l,J);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":zT(ne,l,J)}var we;if(Hr)e:{switch(i){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else qe?W(i,l)&&(Ae="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ae="onCompositionStart");Ae&&(E&&l.locale!=="ko"&&(qe||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&qe&&(we=ac()):(zr=J,ws="value"in zr?zr.value:zr.textContent,qe=!0)),Le=Lf(U,Ae),0<Le.length&&(Ae=new uc(Ae,i,null,l,J),ne.push({event:Ae,listeners:Le}),we?Ae.data=we:(we=ue(l),we!==null&&(Ae.data=we)))),(we=_?Kt(i,l):He(i,l))&&(Ae=Lf(U,"onBeforeInput"),0<Ae.length&&(Le=new uc("onBeforeInput","beforeinput",null,l,J),ne.push({event:Le,listeners:Ae}),Le.data=we)),Jx(ne,i,U,l,J)}nb(ne,s)})}function jc(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Lf(i,s){for(var l=s+"Capture",c=[];i!==null;){var f=i,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=ka(i,l),f!=null&&c.unshift(jc(i,f,g)),f=ka(i,s),f!=null&&c.push(jc(i,f,g))),i=i.return}return c}function Pl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function ib(i,s,l,c,f){for(var g=s._reactName,T=[];l!==null&&l!==c;){var b=l,C=b.alternate,U=b.stateNode;if(b=b.tag,C!==null&&C===c)break;b!==5&&b!==26&&b!==27||U===null||(C=U,f?(U=ka(l,g),U!=null&&T.unshift(jc(l,U,C))):f||(U=ka(l,g),U!=null&&T.push(jc(l,U,C)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var rP=/\r\n?/g,iP=/\u0000|\uFFFD/g;function sb(i){return(typeof i=="string"?i:""+i).replace(rP,`
`).replace(iP,"")}function ab(i,s){return s=sb(s),sb(i)===s}function Uf(){}function it(i,s,l,c,f,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||ar(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&ar(i,""+c);break;case"className":vs(i,"class",c);break;case"tabIndex":vs(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(i,l,c);break;case"style":Bd(i,c,g);break;case"data":if(s!=="object"){vs(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){i.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&it(i,s,"name",f.name,f,null),it(i,s,"formEncType",f.formEncType,f,null),it(i,s,"formMethod",f.formMethod,f,null),it(i,s,"formTarget",f.formTarget,f,null)):(it(i,s,"encType",f.encType,f,null),it(i,s,"method",f.method,f,null),it(i,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"onClick":c!=null&&(i.onclick=Uf);break;case"onScroll":c!=null&&je("scroll",i);break;case"onScrollEnd":c!=null&&je("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}l=Br(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""+c):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":c===!0?i.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,c):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(l,c):i.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(l):i.setAttribute(l,c);break;case"popover":je("beforetoggle",i),je("toggle",i),ys(i,"popover",c);break;case"xlinkActuate":sr(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":sr(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":sr(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":sr(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":sr(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":sr(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":sr(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":sr(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":sr(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":ys(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=hg.get(l)||l,ys(i,l,c))}}function j_(i,s,l,c,f,g){switch(l){case"style":Bd(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"children":typeof c=="string"?ar(i,c):(typeof c=="number"||typeof c=="bigint")&&ar(i,""+c);break;case"onScroll":c!=null&&je("scroll",i);break;case"onScrollEnd":c!=null&&je("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Uf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(f=l.endsWith("Capture"),s=l.slice(2,f?l.length-7:void 0),g=i[$t]||null,g=g!=null?g[l]:null,typeof g=="function"&&i.removeEventListener(s,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(s,c,f);break e}l in i?i[l]=c:c===!0?i.setAttribute(l,""):ys(i,l,c)}}}function mn(i,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",i),je("load",i);var c=!1,f=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,g,T,l,null)}}f&&it(i,s,"srcSet",l.srcSet,l,null),c&&it(i,s,"src",l.src,l,null);return;case"input":je("invalid",i);var b=g=T=f=null,C=null,U=null;for(c in l)if(l.hasOwnProperty(c)){var J=l[c];if(J!=null)switch(c){case"name":f=J;break;case"type":T=J;break;case"checked":C=J;break;case"defaultChecked":U=J;break;case"value":g=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,s));break;default:it(i,s,c,J,l,null)}}Na(i,g,b,C,U,T,f,!1),Pa(i);return;case"select":je("invalid",i),c=T=g=null;for(f in l)if(l.hasOwnProperty(f)&&(b=l[f],b!=null))switch(f){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:it(i,s,f,b,l,null)}s=g,l=T,i.multiple=!!c,s!=null?Qe(i,!!c,s,!1):l!=null&&Qe(i,!!c,l,!0);return;case"textarea":je("invalid",i),g=f=c=null;for(T in l)if(l.hasOwnProperty(T)&&(b=l[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:it(i,s,T,b,l,null)}Ts(i,c,f,g),Pa(i);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(c=l[C],c!=null))switch(C){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:it(i,s,C,c,l,null)}return;case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":je("load",i);break;case"video":case"audio":for(c=0;c<Fc.length;c++)je(Fc[c],i);break;case"image":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"embed":case"source":case"link":je("error",i),je("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in l)if(l.hasOwnProperty(U)&&(c=l[U],c!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,U,c,l,null)}return;default:if(ic(s)){for(J in l)l.hasOwnProperty(J)&&(c=l[J],c!==void 0&&j_(i,s,J,c,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(c=l[b],c!=null&&it(i,s,b,c,l,null))}function sP(i,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,b=null,C=null,U=null,J=null;for(Z in l){var ne=l[Z];if(l.hasOwnProperty(Z)&&ne!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":C=ne;default:c.hasOwnProperty(Z)||it(i,s,Z,null,c,ne)}}for(var $ in c){var Z=c[$];if(ne=l[$],c.hasOwnProperty($)&&(Z!=null||ne!=null))switch($){case"type":g=Z;break;case"name":f=Z;break;case"checked":U=Z;break;case"defaultChecked":J=Z;break;case"value":T=Z;break;case"defaultValue":b=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,s));break;default:Z!==ne&&it(i,s,$,Z,c,ne)}}Es(i,T,b,C,U,J,g,f);return;case"select":Z=T=b=$=null;for(g in l)if(C=l[g],l.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":Z=C;default:c.hasOwnProperty(g)||it(i,s,g,null,c,C)}for(f in c)if(g=c[f],C=l[f],c.hasOwnProperty(f)&&(g!=null||C!=null))switch(f){case"value":$=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==C&&it(i,s,f,g,c,C)}s=b,l=T,c=Z,$!=null?Qe(i,!!l,$,!1):!!c!=!!l&&(s!=null?Qe(i,!!l,s,!0):Qe(i,!!l,l?[]:"",!1));return;case"textarea":Z=$=null;for(b in l)if(f=l[b],l.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:it(i,s,b,null,c,f)}for(T in c)if(f=c[T],g=l[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":$=f;break;case"defaultValue":Z=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&it(i,s,T,f,c,g)}Oa(i,$,Z);return;case"option":for(var ve in l)if($=l[ve],l.hasOwnProperty(ve)&&$!=null&&!c.hasOwnProperty(ve))switch(ve){case"selected":i.selected=!1;break;default:it(i,s,ve,null,c,$)}for(C in c)if($=c[C],Z=l[C],c.hasOwnProperty(C)&&$!==Z&&($!=null||Z!=null))switch(C){case"selected":i.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:it(i,s,C,$,c,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in l)$=l[xe],l.hasOwnProperty(xe)&&$!=null&&!c.hasOwnProperty(xe)&&it(i,s,xe,null,c,$);for(U in c)if($=c[U],Z=l[U],c.hasOwnProperty(U)&&$!==Z&&($!=null||Z!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,s));break;default:it(i,s,U,$,c,Z)}return;default:if(ic(s)){for(var Ct in l)$=l[Ct],l.hasOwnProperty(Ct)&&$!==void 0&&!c.hasOwnProperty(Ct)&&j_(i,s,Ct,void 0,c,$);for(J in c)$=c[J],Z=l[J],!c.hasOwnProperty(J)||$===Z||$===void 0&&Z===void 0||j_(i,s,J,$,c,Z);return}}for(var B in l)$=l[B],l.hasOwnProperty(B)&&$!=null&&!c.hasOwnProperty(B)&&it(i,s,B,null,c,$);for(ne in c)$=c[ne],Z=l[ne],!c.hasOwnProperty(ne)||$===Z||$==null&&Z==null||it(i,s,ne,$,c,Z)}var q_=null,H_=null;function Bf(i){return i.nodeType===9?i:i.ownerDocument}function ob(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lb(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function G_(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var $_=null;function aP(){var i=window.event;return i&&i.type==="popstate"?i===$_?!1:($_=i,!0):($_=null,!1)}var ub=typeof setTimeout=="function"?setTimeout:void 0,oP=typeof clearTimeout=="function"?clearTimeout:void 0,cb=typeof Promise=="function"?Promise:void 0,lP=typeof queueMicrotask=="function"?queueMicrotask:typeof cb<"u"?function(i){return cb.resolve(null).then(i).catch(uP)}:ub;function uP(i){setTimeout(function(){throw i})}function K_(i,s){var l=s,c=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(c===0){i.removeChild(f),Yc(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=f}while(l);Yc(s)}function Q_(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Q_(l),xa(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function cP(i,s,l,c){for(;i.nodeType===1;){var f=l;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[ms])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Dr(i.nextSibling),i===null)break}return null}function hP(i,s,l){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=Dr(i.nextSibling),i===null))return null;return i}function Dr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function hb(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}function db(i,s,l){switch(s=Bf(l),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var vr=new Map,fb=new Set;function zf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var ji=fe.d;fe.d={f:dP,r:fP,D:pP,C:mP,L:gP,m:_P,X:vP,S:yP,M:EP};function dP(){var i=ji.f(),s=Nf();return i||s}function fP(i){var s=Ei(i);s!==null&&s.tag===5&&s.type==="form"?zw(s):ji.r(i)}var Nl=typeof document>"u"?null:document;function pb(i,s,l){var c=Nl;if(c&&typeof s=="string"&&s){var f=At(s);f='link[rel="'+i+'"][href="'+f+'"]',typeof l=="string"&&(f+='[crossorigin="'+l+'"]'),fb.has(f)||(fb.add(f),i={rel:i,crossOrigin:l,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),mn(s,"link",i),_t(s),c.head.appendChild(s)))}}function pP(i){ji.D(i),pb("dns-prefetch",i,null)}function mP(i,s){ji.C(i,s),pb("preconnect",i,s)}function gP(i,s,l){ji.L(i,s,l);var c=Nl;if(c&&i&&s){var f='link[rel="preload"][as="'+At(s)+'"]';s==="image"&&l&&l.imageSrcSet?(f+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(f+='[imagesizes="'+At(l.imageSizes)+'"]')):f+='[href="'+At(i)+'"]';var g=f;switch(s){case"style":g=Ol(i);break;case"script":g=kl(i)}vr.has(g)||(i=P({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:i,as:s},l),vr.set(g,i),c.querySelector(f)!==null||s==="style"&&c.querySelector(qc(g))||s==="script"&&c.querySelector(Hc(g))||(s=c.createElement("link"),mn(s,"link",i),_t(s),c.head.appendChild(s)))}}function _P(i,s){ji.m(i,s);var l=Nl;if(l&&i){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+At(c)+'"][href="'+At(i)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=kl(i)}if(!vr.has(g)&&(i=P({rel:"modulepreload",href:i},s),vr.set(g,i),l.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Hc(g)))return}c=l.createElement("link"),mn(c,"link",i),_t(c),l.head.appendChild(c)}}}function yP(i,s,l){ji.S(i,s,l);var c=Nl;if(c&&i){var f=_s(c).hoistableStyles,g=Ol(i);s=s||"default";var T=f.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(qc(g)))b.loading=5;else{i=P({rel:"stylesheet",href:i,"data-precedence":s},l),(l=vr.get(g))&&W_(i,l);var C=T=c.createElement("link");_t(C),mn(C,"link",i),C._p=new Promise(function(U,J){C.onload=U,C.onerror=J}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ff(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(g,T)}}}function vP(i,s){ji.X(i,s);var l=Nl;if(l&&i){var c=_s(l).hoistableScripts,f=kl(i),g=c.get(f);g||(g=l.querySelector(Hc(f)),g||(i=P({src:i,async:!0},s),(s=vr.get(f))&&Y_(i,s),g=l.createElement("script"),_t(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function EP(i,s){ji.M(i,s);var l=Nl;if(l&&i){var c=_s(l).hoistableScripts,f=kl(i),g=c.get(f);g||(g=l.querySelector(Hc(f)),g||(i=P({src:i,async:!0,type:"module"},s),(s=vr.get(f))&&Y_(i,s),g=l.createElement("script"),_t(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function mb(i,s,l,c){var f=(f=rr.current)?zf(f):null;if(!f)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=Ol(l.href),l=_s(f).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=Ol(l.href);var g=_s(f).hoistableStyles,T=g.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=f.querySelector(qc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),vr.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},vr.set(i,l),g||TP(f,i,l,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=kl(l),l=_s(f).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function Ol(i){return'href="'+At(i)+'"'}function qc(i){return'link[rel="stylesheet"]['+i+"]"}function gb(i){return P({},i,{"data-precedence":i.precedence,precedence:null})}function TP(i,s,l,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),mn(s,"link",l),_t(s),i.head.appendChild(s))}function kl(i){return'[src="'+At(i)+'"]'}function Hc(i){return"script[async]"+i}function _b(i,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+At(l.href)+'"]');if(c)return s.instance=c,_t(c),c;var f=P({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),_t(c),mn(c,"style",f),Ff(c,l.precedence,i),s.instance=c;case"stylesheet":f=Ol(l.href);var g=i.querySelector(qc(f));if(g)return s.state.loading|=4,s.instance=g,_t(g),g;c=gb(l),(f=vr.get(f))&&W_(c,f),g=(i.ownerDocument||i).createElement("link"),_t(g);var T=g;return T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",c),s.state.loading|=4,Ff(g,l.precedence,i),s.instance=g;case"script":return g=kl(l.src),(f=i.querySelector(Hc(g)))?(s.instance=f,_t(f),f):(c=l,(f=vr.get(g))&&(c=P({},l),Y_(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),_t(f),mn(f,"link",c),i.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Ff(c,l.precedence,i));return s.instance}function Ff(i,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)g=b;else if(g!==f)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(i,s.firstChild))}function W_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function Y_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var jf=null;function yb(i,s,l){if(jf===null){var c=new Map,f=jf=new Map;f.set(l,c)}else f=jf,c=f.get(l),c||(c=new Map,f.set(l,c));if(c.has(i))return c;for(c.set(i,null),l=l.getElementsByTagName(i),f=0;f<l.length;f++){var g=l[f];if(!(g[ms]||g[tn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function vb(i,s,l){i=i.ownerDocument||i,i.head.insertBefore(l,s==="title"?i.querySelector("head > title"):null)}function wP(i,s,l){if(l===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Eb(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Gc=null;function bP(){}function IP(i,s,l){if(Gc===null)throw Error(r(475));var c=Gc;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ol(l.href),g=i.querySelector(qc(f));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=qf.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,_t(g);return}g=i.ownerDocument||i,l=gb(l),(f=vr.get(f))&&W_(l,f),g=g.createElement("link"),_t(g);var T=g;T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=qf.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function AP(){if(Gc===null)throw Error(r(475));var i=Gc;return i.stylesheets&&i.count===0&&X_(i,i.stylesheets),0<i.count?function(s){var l=setTimeout(function(){if(i.stylesheets&&X_(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(l)}}:null}function qf(){if(this.count--,this.count===0){if(this.stylesheets)X_(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Hf=null;function X_(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Hf=new Map,s.forEach(SP,i),Hf=null,qf.call(i))}function SP(i,s){if(!(s.state.loading&4)){var l=Hf.get(i);if(l)var c=l.get(null);else{l=new Map,Hf.set(i,l);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,f),l.set(T,f),this.count++,c=qf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),s.state.loading|=4}}var $c={$$typeof:S,Provider:null,Consumer:null,_currentValue:De,_currentValue2:De,_threadCount:0};function RP(i,s,l,c,f,g,T,b){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.hiddenUpdates=Wo(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Tb(i,s,l,c,f,g,T,b,C,U,J,ne){return i=new RP(i,s,l,T,b,C,U,ne),s=1,g===!0&&(s|=24),g=_r(3,null,null,s),i.current=g,g.stateNode=i,s=Dg(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},u_(g),i}function wb(i){return i?(i=dl,i):dl}function bb(i,s,l,c,f,g){f=wb(f),c.context===null?c.context=f:c.pendingContext=f,c=xs(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=Ps(i,c,s),l!==null&&(Pn(l,i,s),Dc(l,i,s))}function Ib(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Z_(i,s){Ib(i,s),(i=i.alternate)&&Ib(i,s)}function Ab(i){if(i.tag===13){var s=bs(i,67108864);s!==null&&Pn(s,i,67108864),Z_(i,67108864)}}var Gf=!0;function CP(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=2,J_(i,s,l,c)}finally{fe.p=g,A.T=f}}function DP(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=8,J_(i,s,l,c)}finally{fe.p=g,A.T=f}}function J_(i,s,l,c){if(Gf){var f=ey(c);if(f===null)F_(i,s,c,$f,l),Rb(i,c);else if(PP(f,i,s,l,c))c.stopPropagation();else if(Rb(i,c),s&4&&-1<xP.indexOf(i)){for(;f!==null;){var g=Ei(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ir(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var C=1<<31-Rn(T);b.entanglements[1]|=C,T&=~C}Yr(g),(vt&6)===0&&(Df=Ln()+500,zc(0))}}break;case 13:b=bs(g,2),b!==null&&Pn(b,g,2),Nf(),Z_(g,2)}if(g=ey(c),g===null&&F_(i,s,c,$f,l),g===f)break;f=g}f!==null&&c.stopPropagation()}else F_(i,s,c,null,l)}}function ey(i){return i=el(i),ty(i)}var $f=null;function ty(i){if($f=null,i=Ar(i),i!==null){var s=Te(i);if(s===null)i=null;else{var l=s.tag;if(l===13){if(i=Oe(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return $f=i,null}function Sb(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xd()){case Gt:return 2;case en:return 8;case yi:case Pd:return 32;case Qu:return 268435456;default:return 32}default:return 32}}var ny=!1,Us=null,Bs=null,zs=null,Kc=new Map,Qc=new Map,Fs=[],xP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rb(i,s){switch(i){case"focusin":case"focusout":Us=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":Kc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qc.delete(s.pointerId)}}function Wc(i,s,l,c,f,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ei(s),s!==null&&Ab(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function PP(i,s,l,c,f){switch(s){case"focusin":return Us=Wc(Us,i,s,l,c,f),!0;case"dragenter":return Bs=Wc(Bs,i,s,l,c,f),!0;case"mouseover":return zs=Wc(zs,i,s,l,c,f),!0;case"pointerover":var g=f.pointerId;return Kc.set(g,Wc(Kc.get(g)||null,i,s,l,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Qc.set(g,Wc(Qc.get(g)||null,i,s,l,c,f)),!0}return!1}function Cb(i){var s=Ar(i.target);if(s!==null){var l=Te(s);if(l!==null){if(s=l.tag,s===13){if(s=Oe(l),s!==null){i.blockedOn=s,ps(i.priority,function(){if(l.tag===13){var c=Xn(),f=bs(l,c);f!==null&&Pn(f,l,c),Z_(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Kf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=ey(i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);or=c,l.target.dispatchEvent(c),or=null}else return s=Ei(l),s!==null&&Ab(s),i.blockedOn=l,!1;s.shift()}return!0}function Db(i,s,l){Kf(i)&&l.delete(s)}function NP(){ny=!1,Us!==null&&Kf(Us)&&(Us=null),Bs!==null&&Kf(Bs)&&(Bs=null),zs!==null&&Kf(zs)&&(zs=null),Kc.forEach(Db),Qc.forEach(Db)}function Qf(i,s){i.blockedOn===s&&(i.blockedOn=null,ny||(ny=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,NP)))}var Wf=null;function xb(i){Wf!==i&&(Wf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Wf===i&&(Wf=null);for(var s=0;s<i.length;s+=3){var l=i[s],c=i[s+1],f=i[s+2];if(typeof c!="function"){if(ty(c||l)===null)continue;break}var g=Ei(l);g!==null&&(i.splice(s,3),s-=3,Gg(g,{pending:!0,data:f,method:l.method,action:c},c,f))}}))}function Yc(i){function s(C){return Qf(C,i)}Us!==null&&Qf(Us,i),Bs!==null&&Qf(Bs,i),zs!==null&&Qf(zs,i),Kc.forEach(s),Qc.forEach(s);for(var l=0;l<Fs.length;l++){var c=Fs[l];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Fs.length&&(l=Fs[0],l.blockedOn===null);)Cb(l),l.blockedOn===null&&Fs.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var f=l[c],g=l[c+1],T=f[$t]||null;if(typeof g=="function")T||xb(l);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[$t]||null)b=T.formAction;else if(ty(f)!==null)continue}else b=T.action;typeof b=="function"?l[c+1]=b:(l.splice(c,3),c-=3),xb(l)}}}function ry(i){this._internalRoot=i}Yf.prototype.render=ry.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var l=s.current,c=Xn();bb(l,c,i,s,null,null)},Yf.prototype.unmount=ry.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Dl(),bb(i.current,2,null,i,null,null),Nf(),s[vi]=null}};function Yf(i){this._internalRoot=i}Yf.prototype.unstable_scheduleHydration=function(i){if(i){var s=Md();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Fs.length&&s!==0&&s<Fs[l].priority;l++);Fs.splice(l,0,i),l===0&&Cb(i)}};var Pb=e.version;if(Pb!=="19.0.0")throw Error(r(527,Pb,"19.0.0"));fe.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=ie(s),i=i!==null?ge(i):null,i=i===null?null:i.stateNode,i};var OP={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ar,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xf.isDisabled&&Xf.supportsFiber)try{ls=Xf.inject(OP),En=Xf}catch{}}return Zc.createRoot=function(i,s){if(!a(i))throw Error(r(299));var l=!1,c="",f=Qw,g=Ww,T=Yw,b=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=Tb(i,1,!1,null,null,l,c,f,g,T,b,null),i[vi]=s.current,z_(i.nodeType===8?i.parentNode:i),new ry(s)},Zc.hydrateRoot=function(i,s,l){if(!a(i))throw Error(r(299));var c=!1,f="",g=Qw,T=Ww,b=Yw,C=null,U=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(C=l.unstable_transitionCallbacks),l.formState!==void 0&&(U=l.formState)),s=Tb(i,1,!0,s,l??null,c,f,g,T,b,C,U),s.context=wb(null),l=s.current,c=Xn(),f=xs(c),f.callback=null,Ps(l,f,c),s.current.lanes=c,Ot(s,c),Yr(s),i[vi]=s.current,z_(i),new Yf(s)},Zc.version="19.0.0",Zc}var Fb;function HP(){if(Fb)return sy.exports;Fb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sy.exports=qP(),sy.exports}var GP=HP(),Fn=function(){return Fn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Fn.apply(this,arguments)};function Nv(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function Np(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var Y=Pv();const Ph=VP(Y);var ct="-ms-",yh="-moz-",et="-webkit-",_S="comm",dm="rule",Ov="decl",$P="@import",yS="@keyframes",KP="@layer",vS=Math.abs,kv=String.fromCharCode,Vy=Object.assign;function QP(n,e){return un(n,0)^45?(((e<<2^un(n,0))<<2^un(n,1))<<2^un(n,2))<<2^un(n,3):0}function ES(n){return n.trim()}function qi(n,e){return(n=e.exec(n))?n[0]:n}function ke(n,e,t){return n.replace(e,t)}function cp(n,e,t){return n.indexOf(e,t)}function un(n,e){return n.charCodeAt(e)|0}function nu(n,e,t){return n.slice(e,t)}function Zr(n){return n.length}function TS(n){return n.length}function ch(n,e){return e.push(n),n}function WP(n,e){return n.map(e).join("")}function jb(n,e){return n.filter(function(t){return!qi(t,e)})}var fm=1,ru=1,wS=0,wr=0,Ht=0,xu="";function pm(n,e,t,r,a,o,u,d){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:fm,column:ru,length:u,return:"",siblings:d}}function Ys(n,e){return Vy(pm("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Vl(n){for(;n.root;)n=Ys(n.root,{children:[n]});ch(n,n.siblings)}function YP(){return Ht}function XP(){return Ht=wr>0?un(xu,--wr):0,ru--,Ht===10&&(ru=1,fm--),Ht}function Nr(){return Ht=wr<wS?un(xu,wr++):0,ru++,Ht===10&&(ru=1,fm++),Ht}function To(){return un(xu,wr)}function hp(){return wr}function mm(n,e){return nu(xu,n,e)}function My(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ZP(n){return fm=ru=1,wS=Zr(xu=n),wr=0,[]}function JP(n){return xu="",n}function cy(n){return ES(mm(wr-1,Ly(n===91?n+2:n===40?n+1:n)))}function eN(n){for(;(Ht=To())&&Ht<33;)Nr();return My(n)>2||My(Ht)>3?"":" "}function tN(n,e){for(;--e&&Nr()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return mm(n,hp()+(e<6&&To()==32&&Nr()==32))}function Ly(n){for(;Nr();)switch(Ht){case n:return wr;case 34:case 39:n!==34&&n!==39&&Ly(Ht);break;case 40:n===41&&Ly(n);break;case 92:Nr();break}return wr}function nN(n,e){for(;Nr()&&n+Ht!==57;)if(n+Ht===84&&To()===47)break;return"/*"+mm(e,wr-1)+"*"+kv(n===47?n:Nr())}function rN(n){for(;!My(To());)Nr();return mm(n,wr)}function iN(n){return JP(dp("",null,null,null,[""],n=ZP(n),0,[0],n))}function dp(n,e,t,r,a,o,u,d,p){for(var m=0,y=0,v=u,w=0,S=0,x=0,k=1,L=1,H=1,X=0,K="",oe=a,ae=o,le=r,D=K;L;)switch(x=X,X=Nr()){case 40:if(x!=108&&un(D,v-1)==58){cp(D+=ke(cy(X),"&","&\f"),"&\f",vS(m?d[m-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:D+=cy(X);break;case 9:case 10:case 13:case 32:D+=eN(x);break;case 92:D+=tN(hp()-1,7);continue;case 47:switch(To()){case 42:case 47:ch(sN(nN(Nr(),hp()),e,t,p),p);break;default:D+="/"}break;case 123*k:d[m++]=Zr(D)*H;case 125*k:case 59:case 0:switch(X){case 0:case 125:L=0;case 59+y:H==-1&&(D=ke(D,/\f/g,"")),S>0&&Zr(D)-v&&ch(S>32?Hb(D+";",r,t,v-1,p):Hb(ke(D," ","")+";",r,t,v-2,p),p);break;case 59:D+=";";default:if(ch(le=qb(D,e,t,m,y,a,d,K,oe=[],ae=[],v,o),o),X===123)if(y===0)dp(D,e,le,le,oe,o,v,d,ae);else switch(w===99&&un(D,3)===110?100:w){case 100:case 108:case 109:case 115:dp(n,le,le,r&&ch(qb(n,le,le,0,0,a,d,K,a,oe=[],v,ae),ae),a,ae,v,d,r?oe:ae);break;default:dp(D,le,le,le,[""],ae,0,d,ae)}}m=y=S=0,k=H=1,K=D="",v=u;break;case 58:v=1+Zr(D),S=x;default:if(k<1){if(X==123)--k;else if(X==125&&k++==0&&XP()==125)continue}switch(D+=kv(X),X*k){case 38:H=y>0?1:(D+="\f",-1);break;case 44:d[m++]=(Zr(D)-1)*H,H=1;break;case 64:To()===45&&(D+=cy(Nr())),w=To(),y=v=Zr(K=D+=rN(hp())),X++;break;case 45:x===45&&Zr(D)==2&&(k=0)}}return o}function qb(n,e,t,r,a,o,u,d,p,m,y,v){for(var w=a-1,S=a===0?o:[""],x=TS(S),k=0,L=0,H=0;k<r;++k)for(var X=0,K=nu(n,w+1,w=vS(L=u[k])),oe=n;X<x;++X)(oe=ES(L>0?S[X]+" "+K:ke(K,/&\f/g,S[X])))&&(p[H++]=oe);return pm(n,e,t,a===0?dm:d,p,m,y,v)}function sN(n,e,t,r){return pm(n,e,t,_S,kv(YP()),nu(n,2,-2),0,r)}function Hb(n,e,t,r,a){return pm(n,e,t,Ov,nu(n,0,r),nu(n,r+1,-1),r,a)}function bS(n,e,t){switch(QP(n,e)){case 5103:return et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+n+n;case 4789:return yh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return et+n+yh+n+ct+n+n;case 5936:switch(un(n,e+11)){case 114:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return et+n+ct+n+n;case 6165:return et+n+ct+"flex-"+n+n;case 5187:return et+n+ke(n,/(\w+).+(:[^]+)/,et+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return et+n+ct+"flex-item-"+ke(n,/flex-|-self/g,"")+(qi(n,/flex-|baseline/)?"":ct+"grid-row-"+ke(n,/flex-|-self/g,""))+n;case 4675:return et+n+ct+"flex-line-pack"+ke(n,/align-content|flex-|-self/g,"")+n;case 5548:return et+n+ct+ke(n,"shrink","negative")+n;case 5292:return et+n+ct+ke(n,"basis","preferred-size")+n;case 6060:return et+"box-"+ke(n,"-grow","")+et+n+ct+ke(n,"grow","positive")+n;case 4554:return et+ke(n,/([^-])(transform)/g,"$1"+et+"$2")+n;case 6187:return ke(ke(ke(n,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),n,"")+n;case 5495:case 3959:return ke(n,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return ke(ke(n,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+n+n;case 4200:if(!qi(n,/flex-|baseline/))return ct+"grid-column-align"+nu(n,e)+n;break;case 2592:case 3360:return ct+ke(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,qi(r.props,/grid-\w+-end/)})?~cp(n+(t=t[e].value),"span",0)?n:ct+ke(n,"-start","")+n+ct+"grid-row-span:"+(~cp(t,"span",0)?qi(t,/\d+/):+qi(t,/\d+/)-+qi(n,/\d+/))+";":ct+ke(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return qi(r.props,/grid-\w+-start/)})?n:ct+ke(ke(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ke(n,/(.+)-inline(.+)/,et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zr(n)-1-e>6)switch(un(n,e+1)){case 109:if(un(n,e+4)!==45)break;case 102:return ke(n,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+yh+(un(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~cp(n,"stretch",0)?bS(ke(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return ke(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,u,d,p,m){return ct+a+":"+o+m+(u?ct+a+"-span:"+(d?p:+p-+o)+m:"")+n});case 4949:if(un(n,e+6)===121)return ke(n,":",":"+et)+n;break;case 6444:switch(un(n,un(n,14)===45?18:11)){case 120:return ke(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(un(n,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+ct+"$2box$3")+n;case 100:return ke(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(n,"scroll-","scroll-snap-")+n}return n}function Op(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function aN(n,e,t,r){switch(n.type){case KP:if(n.children.length)break;case $P:case Ov:return n.return=n.return||n.value;case _S:return"";case yS:return n.return=n.value+"{"+Op(n.children,r)+"}";case dm:if(!Zr(n.value=n.props.join(",")))return""}return Zr(t=Op(n.children,r))?n.return=n.value+"{"+t+"}":""}function oN(n){var e=TS(n);return function(t,r,a,o){for(var u="",d=0;d<e;d++)u+=n[d](t,r,a,o)||"";return u}}function lN(n){return function(e){e.root||(e=e.return)&&n(e)}}function uN(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Ov:n.return=bS(n.value,n.length,t);return;case yS:return Op([Ys(n,{value:ke(n.value,"@","@"+et)})],r);case dm:if(n.length)return WP(t=n.props,function(a){switch(qi(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vl(Ys(n,{props:[ke(a,/:(read-\w+)/,":"+yh+"$1")]})),Vl(Ys(n,{props:[a]})),Vy(n,{props:jb(t,r)});break;case"::placeholder":Vl(Ys(n,{props:[ke(a,/:(plac\w+)/,":"+et+"input-$1")]})),Vl(Ys(n,{props:[ke(a,/:(plac\w+)/,":"+yh+"$1")]})),Vl(Ys(n,{props:[ke(a,/:(plac\w+)/,ct+"input-$1")]})),Vl(Ys(n,{props:[a]})),Vy(n,{props:jb(t,r)});break}return""})}}var cN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zn={},iu=typeof process<"u"&&Zn!==void 0&&(Zn.REACT_APP_SC_ATTR||Zn.SC_ATTR)||"data-styled",IS="active",AS="data-styled-version",gm="6.1.17",Vv=`/*!sc*/
`,kp=typeof window<"u"&&"HTMLElement"in window,hN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==""?Zn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.SC_DISABLE_SPEEDY!==void 0&&Zn.SC_DISABLE_SPEEDY!==""&&Zn.SC_DISABLE_SPEEDY!=="false"&&Zn.SC_DISABLE_SPEEDY),_m=Object.freeze([]),su=Object.freeze({});function dN(n,e,t){return t===void 0&&(t=su),n.theme!==t.theme&&n.theme||e||t.theme}var SS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pN=/(^-|-$)/g;function Gb(n){return n.replace(fN,"-").replace(pN,"")}var mN=/(a)(d)/gi,Zf=52,$b=function(n){return String.fromCharCode(n+(n>25?39:97))};function Uy(n){var e,t="";for(e=Math.abs(n);e>Zf;e=e/Zf|0)t=$b(e%Zf)+t;return($b(e%Zf)+t).replace(mN,"$1-$2")}var hy,RS=5381,Ql=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},CS=function(n){return Ql(RS,n)};function gN(n){return Uy(CS(n)>>>0)}function _N(n){return n.displayName||n.name||"Component"}function dy(n){return typeof n=="string"&&!0}var DS=typeof Symbol=="function"&&Symbol.for,xS=DS?Symbol.for("react.memo"):60115,yN=DS?Symbol.for("react.forward_ref"):60112,vN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},EN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},PS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TN=((hy={})[yN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hy[xS]=PS,hy);function Kb(n){return("type"in(e=n)&&e.type.$$typeof)===xS?PS:"$$typeof"in n?TN[n.$$typeof]:vN;var e}var wN=Object.defineProperty,bN=Object.getOwnPropertyNames,Qb=Object.getOwnPropertySymbols,IN=Object.getOwnPropertyDescriptor,AN=Object.getPrototypeOf,Wb=Object.prototype;function NS(n,e,t){if(typeof e!="string"){if(Wb){var r=AN(e);r&&r!==Wb&&NS(n,r,t)}var a=bN(e);Qb&&(a=a.concat(Qb(e)));for(var o=Kb(n),u=Kb(e),d=0;d<a.length;++d){var p=a[d];if(!(p in EN||t&&t[p]||u&&p in u||o&&p in o)){var m=IN(e,p);try{wN(n,p,m)}catch{}}}}return n}function au(n){return typeof n=="function"}function Mv(n){return typeof n=="object"&&"styledComponentId"in n}function go(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Yb(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function Nh(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function By(n,e,t){if(t===void 0&&(t=!1),!t&&!Nh(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=By(n[r],e[r]);else if(Nh(e))for(var r in e)n[r]=By(n[r],e[r]);return n}function Lv(n,e){Object.defineProperty(n,"toString",{value:e})}function id(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var SN=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw id(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var u=a;u<o;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),p=(u=0,t.length);u<p;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,u=a;u<o;u++)t+="".concat(this.tag.getRule(u)).concat(Vv);return t},n}(),fp=new Map,Vp=new Map,pp=1,Jf=function(n){if(fp.has(n))return fp.get(n);for(;Vp.has(pp);)pp++;var e=pp++;return fp.set(n,e),Vp.set(e,n),e},RN=function(n,e){pp=e+1,fp.set(n,e),Vp.set(e,n)},CN="style[".concat(iu,"][").concat(AS,'="').concat(gm,'"]'),DN=new RegExp("^".concat(iu,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xN=function(n,e,t){for(var r,a=t.split(","),o=0,u=a.length;o<u;o++)(r=a[o])&&n.registerName(e,r)},PN=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Vv),a=[],o=0,u=r.length;o<u;o++){var d=r[o].trim();if(d){var p=d.match(DN);if(p){var m=0|parseInt(p[1],10),y=p[2];m!==0&&(RN(y,m),xN(n,y,p[3]),n.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},Xb=function(n){for(var e=document.querySelectorAll(CN),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(iu)!==IS&&(PN(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function NN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var OS=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(iu,"]")));return p[p.length-1]}(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(iu,IS),r.setAttribute(AS,gm);var u=NN();return u&&r.setAttribute("nonce",u),t.insertBefore(r,o),r},ON=function(){function n(e){this.element=OS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var u=r[a];if(u.ownerNode===t)return u}throw id(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),kN=function(){function n(e){this.element=OS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),VN=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Zb=kp,MN={isServer:!kp,useCSSOMInjection:!hN},kS=function(){function n(e,t,r){e===void 0&&(e=su),t===void 0&&(t={});var a=this;this.options=Fn(Fn({},MN),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&kp&&Zb&&(Zb=!1,Xb(this)),Lv(this,function(){return function(o){for(var u=o.getTag(),d=u.length,p="",m=function(v){var w=function(H){return Vp.get(H)}(v);if(w===void 0)return"continue";var S=o.names.get(w),x=u.getGroup(v);if(S===void 0||!S.size||x.length===0)return"continue";var k="".concat(iu,".g").concat(v,'[id="').concat(w,'"]'),L="";S!==void 0&&S.forEach(function(H){H.length>0&&(L+="".concat(H,","))}),p+="".concat(x).concat(k,'{content:"').concat(L,'"}').concat(Vv)},y=0;y<d;y++)m(y);return p}(a)})}return n.registerId=function(e){return Jf(e)},n.prototype.rehydrate=function(){!this.server&&kp&&Xb(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Fn(Fn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new VN(a):r?new ON(a):new kN(a)}(this.options),new SN(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Jf(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Jf(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Jf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),LN=/&/g,UN=/^\s*\/\/.*$/gm;function VS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=VS(t.children,e)),t})}function BN(n){var e,t,r,a=su,o=a.options,u=o===void 0?su:o,d=a.plugins,p=d===void 0?_m:d,m=function(w,S,x){return x.startsWith(t)&&x.endsWith(t)&&x.replaceAll(t,"").length>0?".".concat(e):w},y=p.slice();y.push(function(w){w.type===dm&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(LN,t).replace(r,m))}),u.prefix&&y.push(uN),y.push(aN);var v=function(w,S,x,k){S===void 0&&(S=""),x===void 0&&(x=""),k===void 0&&(k="&"),e=k,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var L=w.replace(UN,""),H=iN(x||S?"".concat(x," ").concat(S," { ").concat(L," }"):L);u.namespace&&(H=VS(H,u.namespace));var X=[];return Op(H,oN(y.concat(lN(function(K){return X.push(K)})))),X};return v.hash=p.length?p.reduce(function(w,S){return S.name||id(15),Ql(w,S.name)},RS).toString():"",v}var zN=new kS,zy=BN(),MS=Ph.createContext({shouldForwardProp:void 0,styleSheet:zN,stylis:zy});MS.Consumer;Ph.createContext(void 0);function Jb(){return Y.useContext(MS)}var FN=function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=zy);var u=r.name+o.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,o(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Lv(this,function(){throw id(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=zy),this.name+e.hash},n}(),jN=function(n){return n>="A"&&n<="Z"};function eI(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;jN(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var LS=function(n){return n==null||n===!1||n===""},US=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!LS(o)&&(Array.isArray(o)&&o.isCss||au(o)?r.push("".concat(eI(a),":"),o,";"):Nh(o)?r.push.apply(r,Np(Np(["".concat(a," {")],US(o),!1),["}"],!1)):r.push("".concat(eI(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in cN||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function wo(n,e,t,r){if(LS(n))return[];if(Mv(n))return[".".concat(n.styledComponentId)];if(au(n)){if(!au(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return wo(a,e,t,r)}var o;return n instanceof FN?t?(n.inject(t,r),[n.getName(r)]):[n]:Nh(n)?US(n):Array.isArray(n)?Array.prototype.concat.apply(_m,n.map(function(u){return wo(u,e,t,r)})):[n.toString()]}function qN(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(au(t)&&!Mv(t))return!1}return!0}var HN=CS(gm),GN=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qN(e),this.componentId=t,this.baseHash=Ql(HN,t),this.baseStyle=r,kS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=go(a,this.staticRulesId);else{var o=Yb(wo(this.rules,e,t,r)),u=Uy(Ql(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=r(o,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=go(a,u),this.staticRulesId=u}else{for(var p=Ql(this.baseHash,r.hash),m="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")m+=v;else if(v){var w=Yb(wo(v,e,t,r));p=Ql(p,w+y),m+=w}}if(m){var S=Uy(p>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(m,".".concat(S),void 0,this.componentId)),a=go(a,S)}}return a},n}(),BS=Ph.createContext(void 0);BS.Consumer;var fy={};function $N(n,e,t){var r=Mv(n),a=n,o=!dy(n),u=e.attrs,d=u===void 0?_m:u,p=e.componentId,m=p===void 0?function(oe,ae){var le=typeof oe!="string"?"sc":Gb(oe);fy[le]=(fy[le]||0)+1;var D="".concat(le,"-").concat(gN(gm+le+fy[le]));return ae?"".concat(ae,"-").concat(D):D}(e.displayName,e.parentComponentId):p,y=e.displayName,v=y===void 0?function(oe){return dy(oe)?"styled.".concat(oe):"Styled(".concat(_N(oe),")")}(n):y,w=e.displayName&&e.componentId?"".concat(Gb(e.displayName),"-").concat(e.componentId):e.componentId||m,S=r&&a.attrs?a.attrs.concat(d).filter(Boolean):d,x=e.shouldForwardProp;if(r&&a.shouldForwardProp){var k=a.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;x=function(oe,ae){return k(oe,ae)&&L(oe,ae)}}else x=k}var H=new GN(t,w,r?a.componentStyle:void 0);function X(oe,ae){return function(le,D,R){var A=le.attrs,P=le.componentStyle,M=le.defaultProps,z=le.foldedComponentIds,N=le.styledComponentId,Nt=le.target,It=Ph.useContext(BS),he=Jb(),be=le.shouldForwardProp||he.shouldForwardProp,Te=dN(D,It,M)||su,Oe=function(De,Ce,ut){for(var Me,Ze=Fn(Fn({},Ce),{className:void 0,theme:ut}),Ke=0;Ke<De.length;Ke+=1){var Ut=au(Me=De[Ke])?Me(Ze):Me;for(var Jt in Ut)Ze[Jt]=Jt==="className"?go(Ze[Jt],Ut[Jt]):Jt==="style"?Fn(Fn({},Ze[Jt]),Ut[Jt]):Ut[Jt]}return Ce.className&&(Ze.className=go(Ze.className,Ce.className)),Ze}(A,D,Te),O=Oe.as||Nt,ie={};for(var ge in Oe)Oe[ge]===void 0||ge[0]==="$"||ge==="as"||ge==="theme"&&Oe.theme===Te||(ge==="forwardedAs"?ie.as=Oe.forwardedAs:be&&!be(ge,O)||(ie[ge]=Oe[ge]));var pe=function(De,Ce){var ut=Jb(),Me=De.generateAndInjectStyles(Ce,ut.styleSheet,ut.stylis);return Me}(P,Oe),fe=go(z,N);return pe&&(fe+=" "+pe),Oe.className&&(fe+=" "+Oe.className),ie[dy(O)&&!SS.has(O)?"class":"className"]=fe,R&&(ie.ref=R),Y.createElement(O,ie)}(K,oe,ae)}X.displayName=v;var K=Ph.forwardRef(X);return K.attrs=S,K.componentStyle=H,K.displayName=v,K.shouldForwardProp=x,K.foldedComponentIds=r?go(a.foldedComponentIds,a.styledComponentId):"",K.styledComponentId=w,K.target=r?a.target:n,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=r?function(ae){for(var le=[],D=1;D<arguments.length;D++)le[D-1]=arguments[D];for(var R=0,A=le;R<A.length;R++)By(ae,A[R],!0);return ae}({},a.defaultProps,oe):oe}}),Lv(K,function(){return".".concat(K.styledComponentId)}),o&&NS(K,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function tI(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var nI=function(n){return Object.assign(n,{isCss:!0})};function KN(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(au(n)||Nh(n))return nI(wo(tI(_m,Np([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?wo(r):nI(wo(tI(r,e)))}function Fy(n,e,t){if(t===void 0&&(t=su),!e)throw id(1,e);var r=function(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return n(e,t,KN.apply(void 0,Np([a],o,!1)))};return r.attrs=function(a){return Fy(n,e,Fn(Fn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return Fy(n,e,Fn(Fn({},t),a))},r}var zS=function(n){return Fy($N,n)},Re=zS;SS.forEach(function(n){Re[n]=zS(n)});var Jc={},rI;function QN(){if(rI)return Jc;rI=1,Object.defineProperty(Jc,"__esModule",{value:!0}),Jc.parse=u,Jc.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const x=new o,k=w.length;if(k<2)return x;const L=(S==null?void 0:S.decode)||y;let H=0;do{const X=w.indexOf("=",H);if(X===-1)break;const K=w.indexOf(";",H),oe=K===-1?k:K;if(X>oe){H=w.lastIndexOf(";",X-1)+1;continue}const ae=d(w,H,X),le=p(w,X,ae),D=w.slice(ae,le);if(x[D]===void 0){let R=d(w,X+1,oe),A=p(w,oe,R);const P=L(w.slice(R,A));x[D]=P}H=oe+1}while(H<k);return x}function d(w,S,x){do{const k=w.charCodeAt(S);if(k!==32&&k!==9)return S}while(++S<x);return x}function p(w,S,x){for(;S>x;){const k=w.charCodeAt(--S);if(k!==32&&k!==9)return S+1}return x}function m(w,S,x){const k=(x==null?void 0:x.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const L=k(S);if(!e.test(L))throw new TypeError(`argument val is invalid: ${S}`);let H=w+"="+L;if(!x)return H;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);H+="; Max-Age="+x.maxAge}if(x.domain){if(!t.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);H+="; Domain="+x.domain}if(x.path){if(!r.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);H+="; Path="+x.path}if(x.expires){if(!v(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);H+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(H+="; HttpOnly"),x.secure&&(H+="; Secure"),x.partitioned&&(H+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return H}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return Jc}QN();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var iI="popstate";function WN(n={}){function e(r,a){let{pathname:o,search:u,hash:d}=r.location;return jy("",{pathname:o,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Oh(a)}return XN(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YN(){return Math.random().toString(36).substring(2,10)}function sI(n,e){return{usr:n.state,key:n.key,idx:e}}function jy(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Pu(e):e,state:t,key:e&&e.key||r||YN()}}function Oh({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Pu(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function XN(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,d="POP",p=null,m=y();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function y(){return(u.state||{idx:null}).idx}function v(){d="POP";let L=y(),H=L==null?null:L-m;m=L,p&&p({action:d,location:k.location,delta:H})}function w(L,H){d="PUSH";let X=jy(k.location,L,H);m=y()+1;let K=sI(X,m),oe=k.createHref(X);try{u.pushState(K,"",oe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;a.location.assign(oe)}o&&p&&p({action:d,location:k.location,delta:1})}function S(L,H){d="REPLACE";let X=jy(k.location,L,H);m=y();let K=sI(X,m),oe=k.createHref(X);u.replaceState(K,"",oe),o&&p&&p({action:d,location:k.location,delta:0})}function x(L){let H=a.location.origin!=="null"?a.location.origin:a.location.href,X=typeof L=="string"?L:Oh(L);return X=X.replace(/ $/,"%20"),Et(H,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,H)}let k={get action(){return d},get location(){return n(a,u)},listen(L){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(iI,v),p=L,()=>{a.removeEventListener(iI,v),p=null}},createHref(L){return e(a,L)},createURL:x,encodeLocation(L){let H=x(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:w,replace:S,go(L){return u.go(L)}};return k}function FS(n,e,t="/"){return ZN(n,e,t,!1)}function ZN(n,e,t,r){let a=typeof e=="string"?Pu(e):e,o=Qi(a.pathname||"/",t);if(o==null)return null;let u=jS(n);JN(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=cO(o);d=lO(u[p],m,r)}return d}function jS(n,e=[],t=[],r=""){let a=(o,u,d)=>{let p={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};p.relativePath.startsWith("/")&&(Et(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=$i([r,p.relativePath]),y=t.concat(p);o.children&&o.children.length>0&&(Et(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),jS(o.children,e,y,m)),!(o.path==null&&!o.index)&&e.push({path:m,score:aO(m,o.index),routesMeta:y})};return n.forEach((o,u)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))a(o,u);else for(let p of qS(o.path))a(o,u,p)}),e}function qS(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=qS(r.join("/")),d=[];return d.push(...u.map(p=>p===""?o:[o,p].join("/"))),a&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function JN(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:oO(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var eO=/^:[\w-]+$/,tO=3,nO=2,rO=1,iO=10,sO=-2,aI=n=>n==="*";function aO(n,e){let t=n.split("/"),r=t.length;return t.some(aI)&&(r+=sO),e&&(r+=nO),t.filter(a=>!aI(a)).reduce((a,o)=>a+(eO.test(o)?tO:o===""?rO:iO),r)}function oO(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function lO(n,e,t=!1){let{routesMeta:r}=n,a={},o="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,y=o==="/"?e:e.slice(o.length)||"/",v=Mp({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),w=p.route;if(!v&&m&&t&&!r[r.length-1].route.index&&(v=Mp({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:$i([o,v.pathname]),pathnameBase:pO($i([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=$i([o,v.pathnameBase]))}return u}function Mp(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=uO(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((m,{paramName:y,isOptional:v},w)=>{if(y==="*"){let x=d[w]||"";u=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const S=d[w];return v&&!S?m[y]=void 0:m[y]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:o,pathnameBase:u,pattern:n}}function uO(n,e=!1,t=!0){ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function cO(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Qi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function hO(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Pu(n):n;return{pathname:t?t.startsWith("/")?t:dO(t,e):e,search:mO(r),hash:gO(a)}}function dO(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function py(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fO(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function HS(n){let e=fO(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function GS(n,e,t,r=!1){let a;typeof n=="string"?a=Pu(n):(a={...n},Et(!a.pathname||!a.pathname.includes("?"),py("?","pathname","search",a)),Et(!a.pathname||!a.pathname.includes("#"),py("#","pathname","hash",a)),Et(!a.search||!a.search.includes("#"),py("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}d=v>=0?e[v]:"/"}let p=hO(a,d),m=u&&u!=="/"&&u.endsWith("/"),y=(o||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var $i=n=>n.join("/").replace(/\/\/+/g,"/"),pO=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),mO=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,gO=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function _O(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var $S=["POST","PUT","PATCH","DELETE"];new Set($S);var yO=["GET",...$S];new Set(yO);var Nu=Y.createContext(null);Nu.displayName="DataRouter";var ym=Y.createContext(null);ym.displayName="DataRouterState";var KS=Y.createContext({isTransitioning:!1});KS.displayName="ViewTransition";var vO=Y.createContext(new Map);vO.displayName="Fetchers";var EO=Y.createContext(null);EO.displayName="Await";var mi=Y.createContext(null);mi.displayName="Navigation";var sd=Y.createContext(null);sd.displayName="Location";var gi=Y.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var Uv=Y.createContext(null);Uv.displayName="RouteError";function TO(n,{relative:e}={}){Et(ad(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=Y.useContext(mi),{hash:a,pathname:o,search:u}=od(n,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:$i([t,o])),r.createHref({pathname:d,search:u,hash:a})}function ad(){return Y.useContext(sd)!=null}function Uo(){return Et(ad(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(sd).location}var QS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function WS(n){Y.useContext(mi).static||Y.useLayoutEffect(n)}function vm(){let{isDataRoute:n}=Y.useContext(gi);return n?VO():wO()}function wO(){Et(ad(),"useNavigate() may be used only in the context of a <Router> component.");let n=Y.useContext(Nu),{basename:e,navigator:t}=Y.useContext(mi),{matches:r}=Y.useContext(gi),{pathname:a}=Uo(),o=JSON.stringify(HS(r)),u=Y.useRef(!1);return WS(()=>{u.current=!0}),Y.useCallback((p,m={})=>{if(ui(u.current,QS),!u.current)return;if(typeof p=="number"){t.go(p);return}let y=GS(p,JSON.parse(o),a,m.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:$i([e,y.pathname])),(m.replace?t.replace:t.push)(y,m.state,m)},[e,t,o,a,n])}Y.createContext(null);function bO(){let{matches:n}=Y.useContext(gi),e=n[n.length-1];return e?e.params:{}}function od(n,{relative:e}={}){let{matches:t}=Y.useContext(gi),{pathname:r}=Uo(),a=JSON.stringify(HS(t));return Y.useMemo(()=>GS(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function IO(n,e){return YS(n,e)}function YS(n,e,t,r){var X;Et(ad(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=Y.useContext(mi),{matches:u}=Y.useContext(gi),d=u[u.length-1],p=d?d.params:{},m=d?d.pathname:"/",y=d?d.pathnameBase:"/",v=d&&d.route;{let K=v&&v.path||"";XS(m,!v||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let w=Uo(),S;if(e){let K=typeof e=="string"?Pu(e):e;Et(y==="/"||((X=K.pathname)==null?void 0:X.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${K.pathname}" was given in the \`location\` prop.`),S=K}else S=w;let x=S.pathname||"/",k=x;if(y!=="/"){let K=y.replace(/^\//,"").split("/");k="/"+x.replace(/^\//,"").split("/").slice(K.length).join("/")}let L=!o&&t&&t.matches&&t.matches.length>0?t.matches:FS(n,{pathname:k});ui(v||L!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ui(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=DO(L&&L.map(K=>Object.assign({},K,{params:Object.assign({},p,K.params),pathname:$i([y,a.encodeLocation?a.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?y:$i([y,a.encodeLocation?a.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),u,t,r);return e&&H?Y.createElement(sd.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function AO(){let n=kO(),e=_O(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:o},"ErrorBoundary")," or"," ",Y.createElement("code",{style:o},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:a},t):null,u)}var SO=Y.createElement(AO,null),RO=class extends Y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?Y.createElement(gi.Provider,{value:this.props.routeContext},Y.createElement(Uv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function CO({routeContext:n,match:e,children:t}){let r=Y.useContext(Nu);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(gi.Provider,{value:n},t)}function DO(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let p=a.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);Et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:y,errors:v}=t,w=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||w){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,y)=>{let v,w=!1,S=null,x=null;t&&(v=o&&m.route.id?o[m.route.id]:void 0,S=m.route.errorElement||SO,u&&(d<0&&y===0?(XS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):d===y&&(w=!0,x=m.route.hydrateFallbackElement||null)));let k=e.concat(a.slice(0,y+1)),L=()=>{let H;return v?H=S:w?H=x:m.route.Component?H=Y.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=p,Y.createElement(CO,{match:m,routeContext:{outlet:p,matches:k,isDataRoute:t!=null},children:H})};return t&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?Y.createElement(RO,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:L(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):L()},null)}function Bv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xO(n){let e=Y.useContext(Nu);return Et(e,Bv(n)),e}function PO(n){let e=Y.useContext(ym);return Et(e,Bv(n)),e}function NO(n){let e=Y.useContext(gi);return Et(e,Bv(n)),e}function zv(n){let e=NO(n),t=e.matches[e.matches.length-1];return Et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function OO(){return zv("useRouteId")}function kO(){var r;let n=Y.useContext(Uv),e=PO("useRouteError"),t=zv("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function VO(){let{router:n}=xO("useNavigate"),e=zv("useNavigate"),t=Y.useRef(!1);return WS(()=>{t.current=!0}),Y.useCallback(async(a,o={})=>{ui(t.current,QS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var oI={};function XS(n,e,t){!e&&!oI[n]&&(oI[n]=!0,ui(!1,t))}Y.memo(MO);function MO({routes:n,future:e,state:t}){return YS(n,void 0,t,e)}function mp(n){Et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function LO({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1}){Et(!ad(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=Y.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=Pu(t));let{pathname:p="/",search:m="",hash:y="",state:v=null,key:w="default"}=t,S=Y.useMemo(()=>{let x=Qi(p,u);return x==null?null:{location:{pathname:x,search:m,hash:y,state:v,key:w},navigationType:r}},[u,p,m,y,v,w,r]);return ui(S!=null,`<Router basename="${u}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:Y.createElement(mi.Provider,{value:d},Y.createElement(sd.Provider,{children:e,value:S}))}function UO({children:n,location:e}){return IO(qy(n),e)}function qy(n,e=[]){let t=[];return Y.Children.forEach(n,(r,a)=>{if(!Y.isValidElement(r))return;let o=[...e,a];if(r.type===Y.Fragment){t.push.apply(t,qy(r.props.children,o));return}Et(r.type===mp,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=qy(r.props.children,o)),t.push(u)}),t}var gp="get",_p="application/x-www-form-urlencoded";function Em(n){return n!=null&&typeof n.tagName=="string"}function BO(n){return Em(n)&&n.tagName.toLowerCase()==="button"}function zO(n){return Em(n)&&n.tagName.toLowerCase()==="form"}function FO(n){return Em(n)&&n.tagName.toLowerCase()==="input"}function jO(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function qO(n,e){return n.button===0&&(!e||e==="_self")&&!jO(n)}var ep=null;function HO(){if(ep===null)try{new FormData(document.createElement("form"),0),ep=!1}catch{ep=!0}return ep}var GO=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function my(n){return n!=null&&!GO.has(n)?(ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_p}"`),null):n}function $O(n,e){let t,r,a,o,u;if(zO(n)){let d=n.getAttribute("action");r=d?Qi(d,e):null,t=n.getAttribute("method")||gp,a=my(n.getAttribute("enctype"))||_p,o=new FormData(n)}else if(BO(n)||FO(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(r=p?Qi(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||gp,a=my(n.getAttribute("formenctype"))||my(d.getAttribute("enctype"))||_p,o=new FormData(d,n),!HO()){let{name:m,type:y,value:v}=n;if(y==="image"){let w=m?`${m}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else m&&o.append(m,v)}}else{if(Em(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=gp,r=null,a=_p,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}function Fv(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function KO(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function QO(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function WO(n,e,t){let r=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await KO(o,t);return u.links?u.links():[]}return[]}));return JO(r.flat(1).filter(QO).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function lI(n,e,t,r,a,o){let u=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,d=(p,m)=>{var y;return t[m].pathname!==p.pathname||((y=t[m].route.path)==null?void 0:y.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return o==="assets"?e.filter((p,m)=>u(p,m)||d(p,m)):o==="data"?e.filter((p,m)=>{var v;let y=r.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function YO(n,e,{includeHydrateFallback:t}={}){return XO(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function XO(n){return[...new Set(n)]}function ZO(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function JO(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let o=JSON.stringify(ZO(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}function ek(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Qi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function ZS(){let n=Y.useContext(Nu);return Fv(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function tk(){let n=Y.useContext(ym);return Fv(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var jv=Y.createContext(void 0);jv.displayName="FrameworkContext";function JS(){let n=Y.useContext(jv);return Fv(n,"You must render this element inside a <HydratedRouter> element"),n}function nk(n,e){let t=Y.useContext(jv),[r,a]=Y.useState(!1),[o,u]=Y.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:v}=e,w=Y.useRef(null);Y.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let k=H=>{H.forEach(X=>{u(X.isIntersecting)})},L=new IntersectionObserver(k,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[n]),Y.useEffect(()=>{if(r){let k=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(k)}}},[r]);let S=()=>{a(!0)},x=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:eh(d,S),onBlur:eh(p,x),onMouseEnter:eh(m,S),onMouseLeave:eh(y,x),onTouchStart:eh(v,S)}]:[!1,w,{}]}function eh(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function rk({page:n,...e}){let{router:t}=ZS(),r=Y.useMemo(()=>FS(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?Y.createElement(sk,{page:n,matches:r,...e}):null}function ik(n){let{manifest:e,routeModules:t}=JS(),[r,a]=Y.useState([]);return Y.useEffect(()=>{let o=!1;return WO(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),r}function sk({page:n,matches:e,...t}){let r=Uo(),{manifest:a,routeModules:o}=JS(),{basename:u}=ZS(),{loaderData:d,matches:p}=tk(),m=Y.useMemo(()=>lI(n,e,p,a,r,"data"),[n,e,p,a,r]),y=Y.useMemo(()=>lI(n,e,p,a,r,"assets"),[n,e,p,a,r]),v=Y.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let x=new Set,k=!1;if(e.forEach(H=>{var K;let X=a.routes[H.route.id];!X||!X.hasLoader||(!m.some(oe=>oe.route.id===H.route.id)&&H.route.id in d&&((K=o[H.route.id])!=null&&K.shouldRevalidate)||X.hasClientLoader?k=!0:x.add(H.route.id))}),x.size===0)return[];let L=ek(n,u);return k&&x.size>0&&L.searchParams.set("_routes",e.filter(H=>x.has(H.route.id)).map(H=>H.route.id).join(",")),[L.pathname+L.search]},[u,d,r,a,m,e,n,o]),w=Y.useMemo(()=>YO(y,a),[y,a]),S=ik(y);return Y.createElement(Y.Fragment,null,v.map(x=>Y.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),w.map(x=>Y.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),S.map(({key:x,link:k})=>Y.createElement("link",{key:x,...k})))}function ak(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var eR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eR&&(window.__reactRouterVersion="7.5.0")}catch{}function ok({basename:n,children:e,window:t}){let r=Y.useRef();r.current==null&&(r.current=WN({window:t,v5Compat:!0}));let a=r.current,[o,u]=Y.useState({action:a.action,location:a.location}),d=Y.useCallback(p=>{Y.startTransition(()=>u(p))},[u]);return Y.useLayoutEffect(()=>a.listen(d),[a,d]),Y.createElement(LO,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var tR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nR=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,state:d,target:p,to:m,preventScrollReset:y,viewTransition:v,...w},S){let{basename:x}=Y.useContext(mi),k=typeof m=="string"&&tR.test(m),L,H=!1;if(typeof m=="string"&&k&&(L=m,eR))try{let A=new URL(window.location.href),P=m.startsWith("//")?new URL(A.protocol+m):new URL(m),M=Qi(P.pathname,x);P.origin===A.origin&&M!=null?m=M+P.search+P.hash:H=!0}catch{ui(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=TO(m,{relative:a}),[K,oe,ae]=nk(r,w),le=hk(m,{replace:u,state:d,target:p,preventScrollReset:y,relative:a,viewTransition:v});function D(A){e&&e(A),A.defaultPrevented||le(A)}let R=Y.createElement("a",{...w,...ae,href:L||X,onClick:H||o?e:D,ref:ak(S,oe),target:p,"data-discover":!k&&t==="render"?"true":void 0});return K&&!k?Y.createElement(Y.Fragment,null,R,Y.createElement(rk,{page:X})):R});nR.displayName="Link";var lk=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:d,children:p,...m},y){let v=od(u,{relative:m.relative}),w=Uo(),S=Y.useContext(ym),{navigator:x,basename:k}=Y.useContext(mi),L=S!=null&&gk(v)&&d===!0,H=x.encodeLocation?x.encodeLocation(v).pathname:v.pathname,X=w.pathname,K=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(X=X.toLowerCase(),K=K?K.toLowerCase():null,H=H.toLowerCase()),K&&k&&(K=Qi(K,k)||K);const oe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ae=X===H||!a&&X.startsWith(H)&&X.charAt(oe)==="/",le=K!=null&&(K===H||!a&&K.startsWith(H)&&K.charAt(H.length)==="/"),D={isActive:ae,isPending:le,isTransitioning:L},R=ae?e:void 0,A;typeof r=="function"?A=r(D):A=[r,ae?"active":null,le?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let P=typeof o=="function"?o(D):o;return Y.createElement(nR,{...m,"aria-current":R,className:A,ref:y,style:P,to:u,viewTransition:d},typeof p=="function"?p(D):p)});lk.displayName="NavLink";var uk=Y.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=gp,action:d,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:v,...w},S)=>{let x=pk(),k=mk(d,{relative:m}),L=u.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&tR.test(d),X=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let oe=K.nativeEvent.submitter,ae=(oe==null?void 0:oe.getAttribute("formmethod"))||u;x(oe||K.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:a,state:o,relative:m,preventScrollReset:y,viewTransition:v})};return Y.createElement("form",{ref:S,method:L,action:k,onSubmit:r?p:X,...w,"data-discover":!H&&n==="render"?"true":void 0})});uk.displayName="Form";function ck(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rR(n){let e=Y.useContext(Nu);return Et(e,ck(n)),e}function hk(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:u}={}){let d=vm(),p=Uo(),m=od(n,{relative:o});return Y.useCallback(y=>{if(qO(y,e)){y.preventDefault();let v=t!==void 0?t:Oh(p)===Oh(m);d(n,{replace:v,state:r,preventScrollReset:a,relative:o,viewTransition:u})}},[p,d,m,t,r,e,n,a,o,u])}var dk=0,fk=()=>`__${String(++dk)}__`;function pk(){let{router:n}=rR("useSubmit"),{basename:e}=Y.useContext(mi),t=OO();return Y.useCallback(async(r,a={})=>{let{action:o,method:u,encType:d,formData:p,body:m}=$O(r,e);if(a.navigate===!1){let y=a.fetcherKey||fk();await n.fetch(y,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function mk(n,{relative:e}={}){let{basename:t}=Y.useContext(mi),r=Y.useContext(gi);Et(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...od(n||".",{relative:e})},u=Uo();if(n==null){o.search=u.search;let d=new URLSearchParams(o.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let y=d.toString();o.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:$i([t,o.pathname])),Oh(o)}function gk(n,e={}){let t=Y.useContext(KS);Et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=rR("useViewTransitionState"),a=od(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Qi(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Qi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Mp(a.pathname,u)!=null||Mp(a.pathname,o)!=null}new TextEncoder;const _k=Re.button`
    font-size: 24px;
    height: 40px;
    width: 40px;
    background: none;
    border: 0px;
    color: #222222;
`;function tp(n){const{iconLink:e,onClick:t}=n;return F.jsx(_k,{onClick:t,children:F.jsx("i",{className:e})})}const yk=Re.button`
    background-color: #ffffff;
    font-size: 14px;
    font-weight: 300;
    padding: 0px 16px;
    height: 40px;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    border: none;
    & > i{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
        color: #666666;
    font-size: 20px;
    }
`;function Lp(n){const{iconLink:e,onClick:t}=n;return F.jsxs(yk,{onClick:t,children:[F.jsx("i",{className:e})," 00"]})}const vk=()=>{};var uI={};/**
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
 */const iR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Ek=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(o&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},sR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,y=o>>2,v=(o&3)<<4|d>>4;let w=(d&15)<<2|m>>6,S=m&63;p||(S=64,u||(w=64)),r.push(t[y],t[v],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(iR(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ek(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||d==null||m==null||v==null)throw new Tk;const w=o<<2|d>>4;if(r.push(w),m!==64){const S=d<<4&240|m>>2;if(r.push(S),v!==64){const x=m<<6&192|v;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wk=function(n){const e=iR(n);return sR.encodeByteArray(e,!0)},Up=function(n){return wk(n).replace(/\./g,"")},qv=function(n){try{return sR.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Bp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!bk(t)||(n[t]=Bp(n[t],e[t]));return n}function bk(n){return n!=="__proto__"}/**
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
 */function aR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ik=()=>aR().__FIREBASE_DEFAULTS__,Ak=()=>{if(typeof process>"u"||typeof uI>"u")return;const n=uI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sk=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qv(n[1]);return e&&JSON.parse(e)},Hv=()=>{try{return vk()||Ik()||Ak()||Sk()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oR=()=>{var n;return(n=Hv())===null||n===void 0?void 0:n.config},Rk=n=>{var e;return(e=Hv())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ck{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Dk(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Up(JSON.stringify(t)),Up(JSON.stringify(u)),""].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Gv(){var n;const e=(n=Hv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pk(){return typeof window<"u"||lR()}function lR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Nk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $v(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cR(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hR(){return!Gv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kh(){try{return typeof indexedDB=="object"}catch{return!1}}function Ok(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const kk="FirebaseError";class kn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=kk,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bo.prototype.create)}}class Bo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?Vk(o,r):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new kn(a,d,r)}}function Vk(n,e){return n.replace(Mk,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const Mk=/\{\$([^}]+)}/g;/**
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
 */function cI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Lk(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function aa(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const o=n[a],u=e[a];if(hI(o)&&hI(u)){if(!aa(o,u))return!1}else if(o!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function hI(n){return n!==null&&typeof n=="object"}/**
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
 */function Ou(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function hh(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function dR(n,e){const t=new Uk(n,e);return t.subscribe.bind(t)}class Uk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Bk(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=gy),a.error===void 0&&(a.error=gy),a.complete===void 0&&(a.complete=gy);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function gy(){}/**
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
 */function Ie(n){return n&&n._delegate?n._delegate:n}class ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ao="[DEFAULT]";/**
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
 */class zk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ck;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jk(e))try{this.getOrInitializeService({instanceIdentifier:ao})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=ao){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ao){return this.instances.has(e)}getOptions(e=ao){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ao){return this.component?this.component.multipleInstances?e:ao:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fk(n){return n===ao?void 0:n}function jk(n){return n.instantiationMode==="EAGER"}/**
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
 */class fR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Kv=[];var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const pR={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},qk=Be.INFO,Hk={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},Gk=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=Hk[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tm{constructor(e){this.name=e,this._logLevel=qk,this._logHandler=Gk,this._userLogHandler=null,Kv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}function $k(n){Kv.forEach(e=>{e.setLogLevel(n)})}function Kk(n,e){for(const t of Kv){let r=null;e&&e.level&&(r=pR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,o,...u)=>{const d=u.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");o>=(r??a.logLevel)&&n({level:Be[o].toLowerCase(),message:d,args:u,type:a.name})}}}const Qk=(n,e)=>e.some(t=>n instanceof t);let dI,fI;function Wk(){return dI||(dI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yk(){return fI||(fI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mR=new WeakMap,Hy=new WeakMap,gR=new WeakMap,_y=new WeakMap,Qv=new WeakMap;function Xk(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(ta(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&mR.set(t,n)}).catch(()=>{}),Qv.set(e,n),e}function Zk(n){if(Hy.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Hy.set(n,e)}let Gy={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hy.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ta(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Jk(n){Gy=n(Gy)}function eV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(yy(this),e,...t);return gR.set(r,e.sort?e.sort():[e]),ta(r)}:Yk().includes(n)?function(...e){return n.apply(yy(this),e),ta(mR.get(this))}:function(...e){return ta(n.apply(yy(this),e))}}function tV(n){return typeof n=="function"?eV(n):(n instanceof IDBTransaction&&Zk(n),Qk(n,Wk())?new Proxy(n,Gy):n)}function ta(n){if(n instanceof IDBRequest)return Xk(n);if(_y.has(n))return _y.get(n);const e=tV(n);return e!==n&&(_y.set(n,e),Qv.set(e,n)),e}const yy=n=>Qv.get(n);function nV(n,e,{blocked:t,upgrade:r,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),d=ta(u);return r&&u.addEventListener("upgradeneeded",p=>{r(ta(u.result),p.oldVersion,p.newVersion,ta(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{o&&p.addEventListener("close",()=>o()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const rV=["get","getKey","getAll","getAllKeys","count"],iV=["put","add","delete","clear"],vy=new Map;function pI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vy.get(e))return vy.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=iV.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||rV.includes(t)))return;const o=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return vy.set(e,o),o}Jk(n=>({...n,get:(e,t,r)=>pI(e,t)||n.get(e,t,r),has:(e,t)=>!!pI(e,t)||n.has(e,t)}));/**
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
 */class sV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aV(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function aV(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zp="@firebase/app",$y="0.11.4";/**
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
 */const Wi=new Tm("@firebase/app"),oV="@firebase/app-compat",lV="@firebase/analytics-compat",uV="@firebase/analytics",cV="@firebase/app-check-compat",hV="@firebase/app-check",dV="@firebase/auth",fV="@firebase/auth-compat",pV="@firebase/database",mV="@firebase/data-connect",gV="@firebase/database-compat",_V="@firebase/functions",yV="@firebase/functions-compat",vV="@firebase/installations",EV="@firebase/installations-compat",TV="@firebase/messaging",wV="@firebase/messaging-compat",bV="@firebase/performance",IV="@firebase/performance-compat",AV="@firebase/remote-config",SV="@firebase/remote-config-compat",RV="@firebase/storage",CV="@firebase/storage-compat",DV="@firebase/firestore",xV="@firebase/vertexai",PV="@firebase/firestore-compat",NV="firebase",OV="11.6.0";/**
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
 */const oa="[DEFAULT]",kV={[zp]:"fire-core",[oV]:"fire-core-compat",[uV]:"fire-analytics",[lV]:"fire-analytics-compat",[hV]:"fire-app-check",[cV]:"fire-app-check-compat",[dV]:"fire-auth",[fV]:"fire-auth-compat",[pV]:"fire-rtdb",[mV]:"fire-data-connect",[gV]:"fire-rtdb-compat",[_V]:"fire-fn",[yV]:"fire-fn-compat",[vV]:"fire-iid",[EV]:"fire-iid-compat",[TV]:"fire-fcm",[wV]:"fire-fcm-compat",[bV]:"fire-perf",[IV]:"fire-perf-compat",[AV]:"fire-rc",[SV]:"fire-rc-compat",[RV]:"fire-gcs",[CV]:"fire-gcs-compat",[DV]:"fire-fst",[PV]:"fire-fst-compat",[xV]:"fire-vertex","fire-js":"fire-js",[NV]:"fire-js-all"};/**
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
 */const la=new Map,ou=new Map,lu=new Map;function Vh(n,e){try{n.container.addComponent(e)}catch(t){Wi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _R(n,e){n.container.addOrOverwriteComponent(e)}function ua(n){const e=n.name;if(lu.has(e))return Wi.debug(`There were multiple attempts to register component ${e}.`),!1;lu.set(e,n);for(const t of la.values())Vh(t,n);for(const t of ou.values())Vh(t,n);return!0}function yR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function VV(n,e,t=oa){yR(n,e).clearInstance(t)}function vR(n){return n.options!==void 0}function ft(n){return n==null?!1:n.settings!==void 0}function MV(){lu.clear()}/**
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
 */const LV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Bo("app","Firebase",LV);/**
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
 */let ER=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}};/**
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
 */function mI(n,e){const t=qv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,o=new Date().getTime();a-o<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class UV extends ER{constructor(e,t,r,a){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._serverConfig.authIdToken&&mI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&mI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Or(zp,$y,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Yv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tr.create("server-app-deleted")}}/**
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
 */const Ea=OV;function Wv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=oR()),!t)throw Tr.create("no-options");const o=la.get(a);if(o){if(aa(t,o.options)&&aa(r,o.config))return o;throw Tr.create("duplicate-app",{appName:a})}const u=new fR(a);for(const p of lu.values())u.addComponent(p);const d=new ER(t,r,u);return la.set(a,d),d}function BV(n,e){if(Pk()&&!lR())throw Tr.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;vR(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=m=>[...m].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Tr.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),u=ou.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new fR(o);for(const m of lu.values())d.addComponent(m);const p=new UV(t,e,o,d);return ou.set(o,p),p}function zV(n=oa){const e=la.get(n);if(!e&&n===oa&&oR())return Wv();if(!e)throw Tr.create("no-app",{appName:n});return e}function FV(){return Array.from(la.values())}async function Yv(n){let e=!1;const t=n.name;la.has(t)?(e=!0,la.delete(t)):ou.has(t)&&n.decRefCount()<=0&&(ou.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Or(n,e,t){var r;let a=(r=kV[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wi.warn(d.join(" "));return}ua(new ci(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function TR(n,e){if(n!==null&&typeof n!="function")throw Tr.create("invalid-log-argument");Kk(n,e)}function wR(n){$k(n)}/**
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
 */const jV="firebase-heartbeat-database",qV=1,Mh="firebase-heartbeat-store";let Ey=null;function bR(){return Ey||(Ey=nV(jV,qV,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Mh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tr.create("idb-open",{originalErrorMessage:n.message})})),Ey}async function HV(n){try{const t=(await bR()).transaction(Mh),r=await t.objectStore(Mh).get(IR(n));return await t.done,r}catch(e){if(e instanceof kn)Wi.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wi.warn(t.message)}}}async function gI(n,e){try{const r=(await bR()).transaction(Mh,"readwrite");await r.objectStore(Mh).put(e,IR(n)),await r.done}catch(t){if(t instanceof kn)Wi.warn(t.message);else{const r=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wi.warn(r.message)}}}function IR(n){return`${n.name}!${n.options.appId}`}/**
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
 */const GV=1024,$V=30;class KV{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new WV(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=_I();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>$V){const u=YV(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_I(),{heartbeatsToSend:r,unsentEntries:a}=QV(this._heartbeatsCache.heartbeats),o=Up(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Wi.warn(t),""}}}function _I(){return new Date().toISOString().substring(0,10)}function QV(n,e=GV){const t=[];let r=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),yI(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),yI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class WV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?Ok().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HV(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return gI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return gI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function yI(n){return Up(JSON.stringify({version:2,heartbeats:n})).length}function YV(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function XV(n){ua(new ci("platform-logger",e=>new sV(e),"PRIVATE")),ua(new ci("heartbeat",e=>new KV(e),"PRIVATE")),Or(zp,$y,n),Or(zp,$y,"esm2017"),Or("fire-js","")}XV("");const ZV=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kn,SDK_VERSION:Ea,_DEFAULT_ENTRY_NAME:oa,_addComponent:Vh,_addOrOverwriteComponent:_R,_apps:la,_clearComponents:MV,_components:lu,_getProvider:yR,_isFirebaseApp:vR,_isFirebaseServerApp:ft,_registerComponent:ua,_removeServiceInstance:VV,_serverApps:ou,deleteApp:Yv,getApp:zV,getApps:FV,initializeApp:Wv,initializeServerApp:BV,onLog:TR,registerVersion:Or,setLogLevel:wR},Symbol.toStringTag,{value:"Module"}));/**
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
 */class JV{constructor(e,t){this._delegate=e,this.firebase=t,Vh(e,new ci("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Yv(this._delegate)))}_getService(e,t=oa){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=oa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Vh(this._delegate,e)}_addOrOverwriteComponent(e){_R(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const eM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},vI=new Bo("app-compat","Firebase",eM);/**
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
 */function tM(n){const e={},t={__esModule:!0,initializeApp:o,app:a,registerVersion:Or,setLogLevel:wR,onLog:TR,apps:null,SDK_VERSION:Ea,INTERNAL:{registerComponent:d,removeApp:r,useAsService:p,modularAPIs:ZV}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(m){delete e[m]}function a(m){if(m=m||oa,!cI(e,m))throw vI.create("no-app",{appName:m});return e[m]}a.App=n;function o(m,y={}){const v=Wv(m,y);if(cI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(m=>e[m])}function d(m){const y=m.name,v=y.replace("-compat","");if(ua(m)&&m.type==="PUBLIC"){const w=(S=a())=>{if(typeof S[v]!="function")throw vI.create("invalid-app-argument",{appName:y});return S[v]()};m.serviceProps!==void 0&&Bp(w,m.serviceProps),t[v]=w,n.prototype[v]=function(...S){return this._getService.bind(this,y).apply(this,m.multipleInstances?S:[])}}return m.type==="PUBLIC"?t[v]:null}function p(m,y){return y==="serverAuth"?null:y}return t}/**
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
 */function AR(){const n=tM(JV);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:AR,extendNamespace:e,createSubscribe:dR,ErrorFactory:Bo,deepExtend:Bp});function e(t){Bp(n,t)}return n}const nM=AR();/**
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
 */const EI=new Tm("@firebase/app-compat"),rM="@firebase/app-compat",iM="0.2.53";/**
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
 */function sM(n){Or(rM,iM,n)}/**
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
 */try{const n=aR();if(n.firebase!==void 0){EI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&EI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ku=nM;sM();var aM="firebase",oM="11.6.0";/**
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
 */ku.registerVersion(aM,oM,"app-compat");const th={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Ml={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function lM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function SR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uM=lM,cM=SR,RR=new Bo("auth","Firebase",SR());/**
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
 */const Fp=new Tm("@firebase/auth");function hM(n,...e){Fp.logLevel<=Be.WARN&&Fp.warn(`Auth (${Ea}): ${n}`,...e)}function yp(n,...e){Fp.logLevel<=Be.ERROR&&Fp.error(`Auth (${Ea}): ${n}`,...e)}/**
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
 */function vn(n,...e){throw Zv(n,...e)}function Xt(n,...e){return Zv(n,...e)}function Xv(n,e,t){const r=Object.assign(Object.assign({},cM()),{[e]:t});return new Bo("auth","Firebase",r).create(e,{appName:n.name})}function hn(n){return Xv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vu(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(n,"argument-error"),Xv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zv(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return RR.create(n,...e)}function se(n,e,...t){if(!n)throw Zv(e,...t)}function ii(n){const e="INTERNAL ASSERTION FAILED: "+n;throw yp(e),new Error(e)}function kr(n,e){n||ii(e)}/**
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
 */function Lh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Jv(){return TI()==="http:"||TI()==="https:"}function TI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function dM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jv()||uR()||"connection"in navigator)?navigator.onLine:!0}function fM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ld{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=xk()||$v()}get(){return dM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eE(n,e){kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class CR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gM=new ld(3e4,6e4);function xt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pt(n,e,t,r,a={}){return DR(n,a,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const d=Ou(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},o);return Nk()||(m.referrerPolicy="no-referrer"),CR.fetch()(await xR(n,n.config.apiHost,t,d),m)})}async function DR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pM),e);try{const a=new yM(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw dh(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const d=o.ok?u.errorMessage:u.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw dh(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw dh(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw dh(n,"user-disabled",u);const y=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Xv(n,y,m);vn(n,y)}}catch(a){if(a instanceof kn)throw a;vn(n,"network-request-failed",{message:String(a)})}}async function es(n,e,t,r,a={}){const o=await Pt(n,e,t,r,a);return"mfaPendingCredential"in o&&vn(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function xR(n,e,t,r){const a=`${e}${t}?${r}`,o=n,u=o.config.emulator?eE(n.config,a):`${n.config.apiScheme}://${a}`;return mM.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function _M(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),gM.get())})}}function dh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xt(n,e,r);return a.customData._tokenResponse=t,a}/**
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
 */function wI(n){return n!==void 0&&n.getResponse!==void 0}function bI(n){return n!==void 0&&n.enterprise!==void 0}class PR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _M(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function vM(n){return(await Pt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function NR(n,e){return Pt(n,"GET","/v2/recaptchaConfig",xt(n,e))}/**
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
 */async function EM(n,e){return Pt(n,"POST","/v1/accounts:delete",e)}async function TM(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function jp(n,e){return Pt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function vh(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wM(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),a=wm(r);se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:vh(Ty(a.auth_time)),issuedAtTime:vh(Ty(a.iat)),expirationTime:vh(Ty(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ty(n){return Number(n)*1e3}function wm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return yp("JWT malformed, contained fewer than 3 sections"),null;try{const a=qv(t);return a?JSON.parse(a):(yp("Failed to decode base64 JWT payload"),null)}catch(a){return yp("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function II(n){const e=wm(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kn&&bM(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function bM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class IM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ky{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vh(this.lastLoginAt),this.creationTime=vh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await Yi(n,jp(t,{idToken:r}));se(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?OR(o.providerUserInfo):[],d=SM(n.providerData,u),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(d!=null&&d.length),y=p?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Ky(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function AM(n){const e=Ie(n);await Uh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SM(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function OR(n){return n.map(e=>{var{providerId:t}=e,r=Nv(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RM(n,e){const t=await DR(n,{},async()=>{const r=Ou({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=await xR(n,a,"/v1/token",`key=${o}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",CR.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function CM(n,e){return Pt(n,"POST","/v2/accounts:revokeToken",xt(n,e))}/**
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
 */class Yl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):II(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=II(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:o}=await RM(e,t);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:o}=t,u=new Yl;return r&&(se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(se(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(se(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yl,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
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
 */function qs(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,o=Nv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ky(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wM(this,e)}reload(){return AM(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Uh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Yi(this,EM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,o,u,d,p,m,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,x=(u=t.photoURL)!==null&&u!==void 0?u:void 0,k=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(m=t.createdAt)!==null&&m!==void 0?m:void 0,X=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:K,emailVerified:oe,isAnonymous:ae,providerData:le,stsTokenManager:D}=t;se(K&&D,e,"internal-error");const R=Yl.fromJSON(this.name,D);se(typeof K=="string",e,"internal-error"),qs(v,e.name),qs(w,e.name),se(typeof oe=="boolean",e,"internal-error"),se(typeof ae=="boolean",e,"internal-error"),qs(S,e.name),qs(x,e.name),qs(k,e.name),qs(L,e.name),qs(H,e.name),qs(X,e.name);const A=new Pr({uid:K,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:ae,photoURL:x,phoneNumber:S,tenantId:k,stsTokenManager:R,createdAt:H,lastLoginAt:X});return le&&Array.isArray(le)&&(A.providerData=le.map(P=>Object.assign({},P))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,r=!1){const a=new Yl;a.updateFromServerResponse(t);const o=new Pr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Uh(o),o}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];se(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?OR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),d=new Yl;d.updateFromIdToken(r);const p=new Pr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Ky(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(p,m),p}}/**
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
 */const AI=new Map;function tr(n){kr(n instanceof Function,"Expected a class definition");let e=AI.get(n);return e?(kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,AI.set(n,e),e)}/**
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
 */class kR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kR.type="NONE";const uu=kR;/**
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
 */function bo(n,e,t){return`firebase:${n}:${e}:${t}`}class Xl{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=bo(this.userKey,a.apiKey,o),this.fullPersistenceKey=bo("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await jp(this.auth,{idToken:e}).catch(()=>{});return t?Pr._fromGetAccountInfoResponse(this.auth,t,e):null}return Pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Xl(tr(uu),e,r);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=a[0]||tr(uu);const u=bo(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let v;if(typeof y=="string"){const w=await jp(e,{idToken:y}).catch(()=>{});if(!w)break;v=await Pr._fromGetAccountInfoResponse(e,w,y)}else v=Pr._fromJSON(e,y);m!==o&&(d=v),o=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!p.length?new Xl(o,e,r):(o=p[0],d&&await o._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(u)}catch{}})),new Xl(o,e,r))}}/**
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
 */function SI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BR(e))return"Blackberry";if(zR(e))return"Webos";if(MR(e))return"Safari";if((e.includes("chrome/")||LR(e))&&!e.includes("edge/"))return"Chrome";if(ud(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VR(n=wt()){return/firefox\//i.test(n)}function MR(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LR(n=wt()){return/crios\//i.test(n)}function UR(n=wt()){return/iemobile/i.test(n)}function ud(n=wt()){return/android/i.test(n)}function BR(n=wt()){return/blackberry/i.test(n)}function zR(n=wt()){return/webos/i.test(n)}function cd(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function DM(n=wt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function xM(n=wt()){var e;return cd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PM(){return cR()&&document.documentMode===10}function FR(n=wt()){return cd(n)||ud(n)||zR(n)||BR(n)||/windows phone/i.test(n)||UR(n)}/**
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
 */function jR(n,e=[]){let t;switch(n){case"Browser":t=SI(wt());break;case"Worker":t=`${SI(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ea}/${r}`}/**
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
 */class NM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,d)=>{try{const p=e(o);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function OM(n,e={}){return Pt(n,"GET","/v2/passwordPolicy",xt(n,e))}/**
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
 */const kM=6;class VM{constructor(e){var t,r,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:kM,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,o,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsUppercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class MM{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new RI(this),this.idTokenSubscription=new RI(this),this.beforeStateQueue=new NM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Xl.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await jp(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(a=p.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(hn(this));const t=e?Ie(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OM(this),t=new VM(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await CM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await Xl.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(d,this,"internal-error"),d.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return Ie(n)}class RI{constructor(e){this.auth=e,this.observer=null,this.addObserver=dR(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LM(n){hd=n}function tE(n){return hd.loadJS(n)}function UM(){return hd.recaptchaV2Script}function BM(){return hd.recaptchaEnterpriseScript}function zM(){return hd.gapiScript}function qR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const FM=500,jM=6e4,np=1e12;class qM{constructor(e){this.auth=e,this.counter=np,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new $M(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||np;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||np;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||np;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class HM{constructor(){this.enterprise=new GM}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class GM{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $M{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;se(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=KM(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},jM)},FM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function KM(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const QM="recaptcha-enterprise",Eh="NO_RECAPTCHA";class HR{constructor(e){this.type=QM,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,d)=>{NR(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new PR(p);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,u(m.siteKey)}}).catch(p=>{d(p)})})}function a(o,u,d){const p=window.grecaptcha;bI(p)?p.enterprise.ready(()=>{p.enterprise.execute(o,{action:e}).then(m=>{u(m)}).catch(()=>{u(Eh)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HM().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{r(this.auth).then(d=>{if(!t&&bI(window.grecaptcha))a(d,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=BM();p.length!==0&&(p+=d),tE(p).then(()=>{a(d,o,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function nh(n,e,t,r=!1,a=!1){const o=new HR(n);let u;if(a)u=Eh;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function na(n,e,t,r,a){var o,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await nh(n,e,t,t==="getOobCode");return r(n,d)}else return r(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await nh(n,e,t,t==="getOobCode");return r(n,p)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await nh(n,e,t);return r(n,d).catch(async p=>{var m;if(((m=n._getRecaptchaConfig())===null||m===void 0?void 0:m.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await nh(n,e,t,!1,!0);return r(n,y)}return Promise.reject(p)})}else{const d=await nh(n,e,t,!1,!0);return r(n,d)}else return Promise.reject(a+" provider is not supported.")}async function WM(n){const e=bt(n),t=await NR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new PR(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new HR(e).verify()}function YM(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XM(n,e,t){const r=bt(n);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),o=GR(e),{host:u,port:d}=ZM(e),p=d===null?"":`:${d}`,m={url:`${o}//${u}${p}/`},y=Object.freeze({host:u,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(aa(m,r.config.emulator)&&aa(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,a||JM()}function GR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ZM(n){const e=GR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:CI(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:CI(u)}}}function CI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function JM(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Mu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,t){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
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
 */async function $R(n,e){return Pt(n,"POST","/v1/accounts:resetPassword",xt(n,e))}async function e2(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function t2(n,e){return Pt(n,"POST","/v1/accounts:signUp",e)}async function n2(n,e){return Pt(n,"POST","/v1/accounts:update",xt(n,e))}/**
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
 */async function r2(n,e){return es(n,"POST","/v1/accounts:signInWithPassword",xt(n,e))}async function bm(n,e){return Pt(n,"POST","/v1/accounts:sendOobCode",xt(n,e))}async function i2(n,e){return bm(n,e)}async function s2(n,e){return bm(n,e)}async function a2(n,e){return bm(n,e)}async function o2(n,e){return bm(n,e)}/**
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
 */async function l2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",xt(n,e))}async function u2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",xt(n,e))}/**
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
 */class Bh extends Mu{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Bh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Bh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return na(e,t,"signInWithPassword",r2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return l2(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return na(e,r,"signUpPassword",t2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return u2(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ki(n,e){return es(n,"POST","/v1/accounts:signInWithIdp",xt(n,e))}/**
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
 */const c2="http://localhost";class hi extends Mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,o=Nv(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new hi(r,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}buildRequest(){const e={requestUri:c2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ou(t)}return e}}/**
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
 */async function DI(n,e){return Pt(n,"POST","/v1/accounts:sendVerificationCode",xt(n,e))}async function h2(n,e){return es(n,"POST","/v1/accounts:signInWithPhoneNumber",xt(n,e))}async function d2(n,e){const t=await es(n,"POST","/v1/accounts:signInWithPhoneNumber",xt(n,e));if(t.temporaryProof)throw dh(n,"account-exists-with-different-credential",t);return t}const f2={USER_NOT_FOUND:"user-not-found"};async function p2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return es(n,"POST","/v1/accounts:signInWithPhoneNumber",xt(n,t),f2)}/**
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
 */class Io extends Mu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Io({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Io({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return h2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return d2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return p2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o}=e;return!r&&!t&&!a&&!o?null:new Io({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o})}}/**
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
 */function m2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g2(n){const e=Wl(hh(n)).link,t=e?Wl(hh(e)).deep_link_id:null,r=Wl(hh(n)).deep_link_id;return(r?Wl(hh(r)).link:null)||r||t||e||n}class Im{constructor(e){var t,r,a,o,u,d;const p=Wl(hh(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(r=p.oobCode)!==null&&r!==void 0?r:null,v=m2((a=p.mode)!==null&&a!==void 0?a:null);se(m&&y&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=y,this.continueUrl=(o=p.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=p.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=g2(e);try{return new Im(t)}catch{return null}}}/**
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
 */class Ta{constructor(){this.providerId=Ta.PROVIDER_ID}static credential(e,t){return Bh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Im.parseLink(t);return se(r,"argument-error"),Bh._fromEmailAndCode(e,r.code,r.tenantId)}}Ta.PROVIDER_ID="password";Ta.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ta.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lu extends ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Zl extends Lu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return se("providerId"in t&&"signInMethod"in t,"argument-error"),hi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return se(e.idToken||e.accessToken,"argument-error"),hi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Zl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Zl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:u,providerId:d}=e;if(!r&&!a&&!t&&!o||!d)return null;try{return new Zl(d)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:o})}catch{return null}}}/**
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
 */class ei extends Lu{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
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
 */class ti extends Lu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
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
 */class ni extends Lu{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
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
 */const _2="http://localhost";class cu extends Mu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:o}=t;return!r||!a||!o||r!==a?null:new cu(r,o)}static _create(e,t){return new cu(e,t)}buildRequest(){return{requestUri:_2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const y2="saml.";class qp extends ts{constructor(e){se(e.startsWith(y2),"argument-error"),super(e)}static credentialFromResult(e){return qp.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return qp.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=cu.fromJSON(e);return se(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return cu._create(r,t)}catch{return null}}}/**
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
 */class ri extends Lu{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
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
 */async function KR(n,e){return es(n,"POST","/v1/accounts:signUp",xt(n,e))}/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const o=await Pr._fromIdTokenResponse(e,r,a),u=xI(r);return new br({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=xI(r);return new br({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function xI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function v2(n){var e;if(ft(n.app))return Promise.reject(hn(n));const t=bt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await KR(t,{returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
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
 */class Hp extends kn{constructor(e,t,r,a){var o;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Hp.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Hp(e,t,r,a)}}function QR(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Hp._fromErrorAndOperation(n,o,e,r):o})}/**
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
 */function WR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function E2(n,e){const t=Ie(n);await Am(!0,t,e);const{providerUserInfo:r}=await TM(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=WR(r||[]);return t.providerData=t.providerData.filter(o=>a.has(o.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function nE(n,e,t=!1){const r=await Yi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}async function Am(n,e,t){await Uh(e);const r=WR(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";se(r.has(t)===n,e.auth,a)}/**
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
 */async function YR(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(hn(r));const a="reauthenticate";try{const o=await Yi(n,QR(r,a,e,n),t);se(o.idToken,r,"internal-error");const u=wm(o.idToken);se(u,r,"internal-error");const{sub:d}=u;return se(n.uid===d,r,"user-mismatch"),br._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),o}}/**
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
 */async function XR(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r="signIn",a=await QR(n,r,e),o=await br._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(o.user),o}async function Sm(n,e){return XR(bt(n),e)}async function ZR(n,e){const t=Ie(n);return await Am(!1,t,e.providerId),nE(t,e)}async function JR(n,e){return YR(Ie(n),e)}/**
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
 */async function T2(n,e){return es(n,"POST","/v1/accounts:signInWithCustomToken",xt(n,e))}/**
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
 */async function w2(n,e){if(ft(n.app))return Promise.reject(hn(n));const t=bt(n),r=await T2(t,{token:e,returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
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
 */class dd{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?rE._fromServerResponse(e,t):"totpInfo"in t?iE._fromServerResponse(e,t):vn(e,"internal-error")}}class rE extends dd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new rE(t)}}class iE extends dd{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new iE(t)}}/**
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
 */function Rm(n,e,t){var r;se(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),se(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),se(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(se(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(se(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function sE(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function b2(n,e,t){const r=bt(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Rm(r,a,t),await na(r,a,"getOobCode",s2,"EMAIL_PASSWORD_PROVIDER")}async function I2(n,e,t){await $R(Ie(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sE(n),r})}async function A2(n,e){await n2(Ie(n),{oobCode:e})}async function eC(n,e){const t=Ie(n),r=await $R(t,{oobCode:e}),a=r.requestType;switch(se(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":se(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":se(r.mfaInfo,t,"internal-error");default:se(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=dd._fromServerResponse(bt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:a}}async function S2(n,e){const{data:t}=await eC(Ie(n),e);return t.email}async function R2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),u=await na(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KR,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&sE(n),p}),d=await br._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function C2(n,e,t){return ft(n.app)?Promise.reject(hn(n)):Sm(Ie(n),Ta.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sE(n),r})}/**
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
 */async function D2(n,e,t){const r=bt(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,d){se(d.handleCodeInApp,r,"argument-error"),d&&Rm(r,u,d)}o(a,t),await na(r,a,"getOobCode",a2,"EMAIL_PASSWORD_PROVIDER")}function x2(n,e){const t=Im.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function P2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=Ie(n),a=Ta.credentialWithLink(e,t||Lh());return se(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Sm(r,a)}/**
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
 */async function N2(n,e){return Pt(n,"POST","/v1/accounts:createAuthUri",xt(n,e))}/**
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
 */async function O2(n,e){const t=Jv()?Lh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await N2(Ie(n),r);return a||[]}async function k2(n,e){const t=Ie(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Rm(t.auth,a,e);const{email:o}=await i2(t.auth,a);o!==n.email&&await n.reload()}async function V2(n,e,t){const r=Ie(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Rm(r.auth,o,t);const{email:u}=await o2(r.auth,o);u!==n.email&&await n.reload()}/**
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
 */async function M2(n,e){return Pt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function L2(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ie(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Yi(r,M2(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function U2(n,e){const t=Ie(n);return ft(t.auth.app)?Promise.reject(hn(t.auth)):tC(t,e,null)}function B2(n,e){return tC(Ie(n),null,e)}async function tC(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await Yi(n,e2(r,o));await n._updateTokensIfNecessary(u,!0)}/**
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
 */function z2(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=wm(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new Jl(o,d)}}if(!r)return null;switch(r){case"facebook.com":return new F2(o,a);case"github.com":return new j2(o,a);case"google.com":return new q2(o,a);case"twitter.com":return new H2(o,a,n.screenName||null);case"custom":case"anonymous":return new Jl(o,null);default:return new Jl(o,r,a)}}class Jl{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class nC extends Jl{constructor(e,t,r,a){super(e,t,r),this.username=a}}class F2 extends Jl{constructor(e,t){super(e,"facebook.com",t)}}class j2 extends nC{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class q2 extends Jl{constructor(e,t){super(e,"google.com",t)}}class H2 extends nC{constructor(e,t,r){super(e,"twitter.com",t,r)}}function G2(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:z2(t)}/**
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
 */class _o{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new _o("enroll",e,t)}static _fromMfaPendingCredential(e){return new _o("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return _o._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return _o._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class aE{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=bt(e),a=t.customData._serverResponse,o=(a.mfaInfo||[]).map(d=>dd._fromServerResponse(r,d));se(a.mfaPendingCredential,r,"internal-error");const u=_o._fromMfaPendingCredential(a.mfaPendingCredential);return new aE(u,o,async d=>{const p=await d._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const m=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const y=await br._fromIdTokenResponse(r,t.operationType,m);return await r._updateCurrentUser(y.user),y;case"reauthenticate":return se(t.user,r,"internal-error"),br._forOperation(t.user,t.operationType,m);default:vn(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function $2(n,e){var t;const r=Ie(n),a=e;return se(e.customData.operationType,r,"argument-error"),se((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),aE._fromError(r,a)}/**
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
 */function PI(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:start",xt(n,e))}function K2(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:finalize",xt(n,e))}function Q2(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",xt(n,e))}class oE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>dd._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new oE(e)}async getSession(){return _o._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),o=await Yi(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await Yi(this.user,Q2(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const wy=new WeakMap;function W2(n){const e=Ie(n);return wy.has(e)||wy.set(e,oE._fromUser(e)),wy.get(e)}const Gp="__sak";/**
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
 */class rC{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gp,"1"),this.storage.removeItem(Gp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Y2=1e3,X2=10;class iC extends rC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);PM()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,X2):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Y2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}iC.type="LOCAL";const lE=iC;/**
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
 */class sC extends rC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sC.type="SESSION";const So=sC;/**
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
 */function Z2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Cm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Cm(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,o)),p=await Z2(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cm.receivers=[];/**
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
 */function fd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class J2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((d,p)=>{const m=fd("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(w.data.response);break;default:clearTimeout(y),clearTimeout(o),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function qt(){return window}function eL(n){qt().location.href=n}/**
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
 */function uE(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function tL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rL(){return uE()?self:null}/**
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
 */const aC="firebaseLocalStorageDb",iL=1,$p="firebaseLocalStorage",oC="fbase_key";class pd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dm(n,e){return n.transaction([$p],e?"readwrite":"readonly").objectStore($p)}function sL(){const n=indexedDB.deleteDatabase(aC);return new pd(n).toPromise()}function Qy(){const n=indexedDB.open(aC,iL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore($p,{keyPath:oC})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains($p)?e(r):(r.close(),await sL(),e(await Qy()))})})}async function NI(n,e,t){const r=Dm(n,!0).put({[oC]:e,value:t});return new pd(r).toPromise()}async function aL(n,e){const t=Dm(n,!1).get(e),r=await new pd(t).toPromise();return r===void 0?null:r.value}function OI(n,e){const t=Dm(n,!0).delete(e);return new pd(t).toPromise()}const oL=800,lL=3;class lC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qy(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>lL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cm._getInstance(rL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tL(),!this.activeServiceWorker)return;this.sender=new J2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qy();return await NI(e,Gp,"1"),await OI(e,Gp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>NI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>aL(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>OI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Dm(a,!1).getAll();return new pd(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lC.type="LOCAL";const zh=lC;/**
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
 */function kI(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:start",xt(n,e))}function uL(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:finalize",xt(n,e))}/**
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
 */const by=qR("rcb"),cL=new ld(3e4,6e4);class hL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=qt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return se(dL(t),e,"argument-error"),this.shouldResolveImmediately(t)&&wI(qt().grecaptcha)?Promise.resolve(qt().grecaptcha):new Promise((r,a)=>{const o=qt().setTimeout(()=>{a(Xt(e,"network-request-failed"))},cL.get());qt()[by]=()=>{qt().clearTimeout(o),delete qt()[by];const d=qt().grecaptcha;if(!d||!wI(d)){a(Xt(e,"internal-error"));return}const p=d.render;d.render=(m,y)=>{const v=p(m,y);return this.counter++,v},this.hostLanguage=t,r(d)};const u=`${UM()}?${Ou({onload:by,render:"explicit",hl:t})}`;tE(u).catch(()=>{clearTimeout(o),a(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=qt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function dL(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class fL{async load(e){return new qM(e)}clearedOneInstance(){}}/**
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
 */const Th="recaptcha",pL={theme:"light",type:"image"};let mL=class{constructor(e,t,r=Object.assign({},pL)){this.parameters=r,this.type=Th,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;se(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new fL:new hL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),a(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){se(!this.parameters.sitekey,this.auth,"argument-error"),se(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=qt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){se(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){se(Jv()&&!uE(),this.auth,"internal-error"),await gL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await vM(this.auth);se(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return se(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function gL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class cE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Io._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function _L(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=await xm(r,e,Ie(t));return new cE(a,o=>Sm(r,o))}async function yL(n,e,t){const r=Ie(n);await Am(!1,r,"phone");const a=await xm(r.auth,e,Ie(t));return new cE(a,o=>ZR(r,o))}async function vL(n,e,t){const r=Ie(n);if(ft(r.auth.app))return Promise.reject(hn(r.auth));const a=await xm(r.auth,e,Ie(t));return new cE(a,o=>JR(r,o))}async function xm(n,e,t){var r;if(!n._getRecaptchaConfig())try{await WM(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a){se(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await na(n,u,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===Eh){se((t==null?void 0:t.type)===Th,y,"argument-error");const w=await Iy(y,v,t);return PI(y,w)}return PI(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{se(o.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;se(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await na(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===Eh){se((t==null?void 0:t.type)===Th,v,"argument-error");const S=await Iy(v,w,t);return kI(v,S)}return kI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await na(n,o,"sendVerificationCode",async(m,y)=>{if(y.captchaResponse===Eh){se((t==null?void 0:t.type)===Th,m,"argument-error");const v=await Iy(m,y,t);return DI(m,v)}return DI(m,y)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{t==null||t._reset()}}async function EL(n,e){const t=Ie(n);if(ft(t.auth.app))return Promise.reject(hn(t.auth));await nE(t,e)}async function Iy(n,e,t){se(t.type===Th,n,"argument-error");const r=await t.verify();se(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const o=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:r,captchaResponse:u,clientType:d,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const o=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:o,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
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
 */let Ro=class vp{constructor(e){this.providerId=vp.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return xm(this.auth,e,Ie(t))}static credential(e,t){return Io._fromVerification(e,t)}static credentialFromResult(e){const t=e;return vp.credentialFromTaggedObject(t)}static credentialFromError(e){return vp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Io._fromTokenResponse(t,r):null}};Ro.PROVIDER_ID="phone";Ro.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function zo(n,e){return e?tr(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class hE extends Mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ki(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TL(n){return XR(n.auth,new hE(n),n.bypassAuthState)}function wL(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),YR(t,new hE(n),n.bypassAuthState)}async function bL(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),nE(t,new hE(n),n.bypassAuthState)}/**
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
 */class uC{constructor(e,t,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:o,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TL;case"linkViaPopup":case"linkViaRedirect":return bL;case"reauthViaPopup":case"reauthViaRedirect":return wL;default:vn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IL=new ld(2e3,1e4);async function AL(n,e,t){if(ft(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=bt(n);Vu(n,e,ts);const a=zo(r,t);return new Hi(r,"signInViaPopup",e,a).executeNotNull()}async function SL(n,e,t){const r=Ie(n);if(ft(r.auth.app))return Promise.reject(Xt(r.auth,"operation-not-supported-in-this-environment"));Vu(r.auth,e,ts);const a=zo(r.auth,t);return new Hi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function RL(n,e,t){const r=Ie(n);Vu(r.auth,e,ts);const a=zo(r.auth,t);return new Hi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class Hi extends uC{constructor(e,t,r,a,o){super(e,t,a,o),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IL.get())};e()}}Hi.currentPopupAction=null;/**
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
 */const CL="pendingRedirect",wh=new Map;class DL extends uC{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=wh.get(this.auth._key());if(!e){try{const r=await xL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}wh.set(this.auth._key(),e)}return this.bypassAuthState||wh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xL(n,e){const t=hC(e),r=cC(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function dE(n,e){return cC(n)._set(hC(e),"true")}function PL(){wh.clear()}function fE(n,e){wh.set(n._key(),e)}function cC(n){return tr(n._redirectPersistence)}function hC(n){return bo(CL,n.config.apiKey,n.name)}/**
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
 */function NL(n,e,t){return OL(n,e,t)}async function OL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n);Vu(n,e,ts),await r._initializationPromise;const a=zo(r,t);return await dE(a,r),a._openRedirect(r,e,"signInViaRedirect")}function kL(n,e,t){return VL(n,e,t)}async function VL(n,e,t){const r=Ie(n);if(Vu(r.auth,e,ts),ft(r.auth.app))return Promise.reject(hn(r.auth));await r.auth._initializationPromise;const a=zo(r.auth,t);await dE(a,r.auth);const o=await dC(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",o)}function ML(n,e,t){return LL(n,e,t)}async function LL(n,e,t){const r=Ie(n);Vu(r.auth,e,ts),await r.auth._initializationPromise;const a=zo(r.auth,t);await Am(!1,r,e.providerId),await dE(a,r.auth);const o=await dC(r);return a._openRedirect(r.auth,e,"linkViaRedirect",o)}async function UL(n,e){return await bt(n)._initializationPromise,Pm(n,e,!1)}async function Pm(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=zo(r,e),u=await new DL(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function dC(n){const e=fd(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const BL=10*60*1e3;class fC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zL(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!pC(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BL&&this.cachedEventUids.clear(),this.cachedEventUids.has(VI(e))}saveEventToCache(e){this.cachedEventUids.add(VI(e)),this.lastProcessedEventTime=Date.now()}}function VI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pC({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zL(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pC(n);default:return!1}}/**
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
 */async function mC(n,e={}){return Pt(n,"GET","/v1/projects",e)}/**
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
 */const FL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jL=/^https?/;async function qL(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mC(n);for(const t of e)try{if(HL(t))return}catch{}vn(n,"unauthorized-domain")}function HL(n){const e=Lh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!jL.test(t))return!1;if(FL.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
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
 */const GL=new ld(3e4,6e4);function MI(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $L(n){return new Promise((e,t)=>{var r,a,o;function u(){MI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{MI(),t(Xt(n,"network-request-failed"))},timeout:GL.get()})}if(!((a=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=qt().gapi)===null||o===void 0)&&o.load)u();else{const d=qR("iframefcb");return qt()[d]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},tE(`${zM()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Ep=null,e})}let Ep=null;function KL(n){return Ep=Ep||$L(n),Ep}/**
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
 */const QL=new ld(5e3,15e3),WL="__/auth/iframe",YL="emulator/auth/iframe",XL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JL(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?eE(e,YL):`https://${n.config.authDomain}/${WL}`,r={apiKey:e.apiKey,appName:n.name,v:Ea},a=ZL.get(n.config.apiHost);a&&(r.eid=a);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Ou(r).slice(1)}`}async function eU(n){const e=await KL(n),t=qt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:JL(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XL,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),d=qt().setTimeout(()=>{o(u)},QL.get());function p(){qt().clearTimeout(d),a(r)}r.ping(p).then(p,()=>{o(u)})}))}/**
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
 */const tU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nU=500,rU=600,iU="_blank",sU="http://localhost";class LI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aU(n,e,t,r=nU,a=rU){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},tU),{width:r.toString(),height:a.toString(),top:o,left:u}),m=wt().toLowerCase();t&&(d=LR(m)?iU:t),VR(m)&&(e=e||sU,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[S,x])=>`${w}${S}=${x},`,"");if(xM(m)&&d!=="_self")return oU(e||"",d),new LI(null);const v=window.open(e||"",d,y);se(v,n,"popup-blocked");try{v.focus()}catch{}return new LI(v)}function oU(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const lU="__/auth/handler",uU="emulator/auth/handler",cU=encodeURIComponent("fac");async function Wy(n,e,t,r,a,o){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ea,eventId:a};if(e instanceof ts){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Lk(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(o||{}))u[y]=v}if(e instanceof Lu){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),m=p?`#${cU}=${encodeURIComponent(p)}`:"";return`${hU(n)}?${Ou(d).slice(1)}${m}`}function hU({config:n}){return n.emulator?eE(n,uU):`https://${n.authDomain}/${lU}`}/**
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
 */const Ay="webStorageSupport";class dU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=So,this._completeRedirectFn=Pm,this._overrideRedirectResult=fE}async _openPopup(e,t,r,a){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await Wy(e,t,r,Lh(),a);return aU(e,u,fd())}async _openRedirect(e,t,r,a){await this._originValidation(e);const o=await Wy(e,t,r,Lh(),a);return eL(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await eU(e),r=new fC(e);return t.register("authEvent",a=>(se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ay,{type:Ay},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[Ay];u!==void 0&&t(!!u),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qL(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return FR()||MR()||cd()}}const fU=dU;class pU{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ii("unexpected MultiFactorSessionType")}}}class pE extends pU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new pE(e)}_finalizeEnroll(e,t,r){return K2(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return uL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class gC{constructor(){}static assertion(e){return pE._fromCredential(e)}}gC.FACTOR_ID="phone";var UI="@firebase/auth",BI="1.10.0";/**
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
 */class mU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gU(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _U(n){ua(new ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jR(n)},m=new MM(r,a,o,p);return YM(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ua(new ci("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new mU(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(UI,BI,gU(n)),Or(UI,BI,"esm2017")}/**
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
 */const yU=5*60;Rk("authIdTokenMaxAge");function vU(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}LM({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const o=Xt("internal-error");o.customData=a,t(o)},r.type="text/javascript",r.charset="UTF-8",vU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_U("Browser");/**
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
 */function Co(){return window}/**
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
 */const EU=2e3;async function TU(n,e,t){var r;const{BuildInfo:a}=Co();kr(e.sessionId,"AuthEvent did not contain a session ID");const o=await SU(e.sessionId),u={};return cd()?u.ibi=a.packageName:ud()?u.apn=a.packageName:vn(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=o,Wy(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function wU(n){const{BuildInfo:e}=Co(),t={};cd()?t.iosBundleId=e.packageName:ud()?t.androidPackageName=e.packageName:vn(n,"operation-not-supported-in-this-environment"),await mC(n,t)}function bU(n){const{cordova:e}=Co();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,DM()?"_blank":"_system","location=yes"),t(a)})})}async function IU(n,e,t){const{cordova:r}=Co();let a=()=>{};try{await new Promise((o,u)=>{let d=null;function p(){var v;o();const w=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function m(){d||(d=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},EU))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),ud()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",y,!1),d&&window.clearTimeout(d)}})}finally{a()}}function AU(n){var e,t,r,a,o,u,d,p,m,y;const v=Co();se(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),se(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),se(typeof((o=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((p=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((y=(m=v==null?void 0:v.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function SU(n){const e=RU(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function RU(n){if(kr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const CU=20;class DU extends fC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function xU(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:OU(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function PU(n,e){return Yy()._set(Xy(n),e)}async function zI(n){const e=await Yy()._get(Xy(n));return e&&await Yy()._remove(Xy(n)),e}function NU(n,e){var t,r;const a=VU(e);if(a.includes("/__/auth/callback")){const o=Tp(a),u=o.firebaseError?kU(decodeURIComponent(o.firebaseError)):null,d=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=d?Xt(d):null;return p?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function OU(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<CU;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Yy(){return tr(lE)}function Xy(n){return bo("authEvent",n.config.apiKey,n.name)}function kU(n){try{return JSON.parse(n)}catch{return null}}function VU(n){const e=Tp(n),t=e.link?decodeURIComponent(e.link):void 0,r=Tp(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Tp(a).link||a||r||t||n}function Tp(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Wl(t.join("?"))}/**
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
 */const MU=500;class LU{constructor(){this._redirectPersistence=So,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Pm,this._overrideRedirectResult=fE}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new DU(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){vn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){AU(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),PL(),await this._originValidation(e);const u=xU(e,r,a);await PU(e,u);const d=await TU(e,u,t),p=await bU(d);return IU(e,o,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wU(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:o}=Co(),u=setTimeout(async()=>{await zI(e),t.onEvent(FI())},MU),d=async y=>{clearTimeout(u);const v=await zI(e);let w=null;v&&(y!=null&&y.url)&&(w=NU(v,y.url)),t.onEvent(w||FI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,d);const p=a,m=`${o.packageName.toLowerCase()}://`;Co().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(m)&&d({url:y}),typeof p=="function")try{p(y)}catch(v){console.error(v)}}}}const UU=LU;function FI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
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
 */function BU(n,e){bt(n)._logFramework(e)}var zU="@firebase/auth-compat",FU="0.5.20";/**
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
 */const jU=1e3;function bh(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function qU(){return bh()==="http:"||bh()==="https:"}function _C(n=wt()){return!!((bh()==="file:"||bh()==="ionic:"||bh()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function HU(){return $v()||Gv()}function GU(){return cR()&&(document==null?void 0:document.documentMode)===11}function $U(n=wt()){return/Edge\/\d+/.test(n)}function KU(n=wt()){return GU()||$U(n)}function yC(){try{const n=self.localStorage,e=fd();if(n)return n.setItem(e,"1"),n.removeItem(e),KU()?kh():!0}catch{return mE()&&kh()}return!1}function mE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Sy(){return(qU()||uR()||_C())&&!HU()&&yC()&&!mE()}function vC(){return _C()&&typeof document<"u"}async function QU(){return vC()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},jU);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function WU(){return typeof window<"u"?window:null}/**
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
 */const er={LOCAL:"local",NONE:"none",SESSION:"session"},rh=se,EC="persistence";function YU(n,e){if(rh(Object.values(er).includes(e),n,"invalid-persistence-type"),$v()){rh(e!==er.SESSION,n,"unsupported-persistence-type");return}if(Gv()){rh(e===er.NONE,n,"unsupported-persistence-type");return}if(mE()){rh(e===er.NONE||e===er.LOCAL&&kh(),n,"unsupported-persistence-type");return}rh(e===er.NONE||yC(),n,"unsupported-persistence-type")}async function Zy(n){await n._initializationPromise;const e=TC(),t=bo(EC,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function XU(n,e){const t=TC();if(!t)return[];const r=bo(EC,n,e);switch(t.getItem(r)){case er.NONE:return[uu];case er.LOCAL:return[zh,So];case er.SESSION:return[So];default:return[]}}function TC(){var n;try{return((n=WU())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const ZU=se;class Zs{constructor(){this.browserResolver=tr(fU),this.cordovaResolver=tr(UU),this.underlyingResolver=null,this._redirectPersistence=So,this._completeRedirectFn=Pm,this._overrideRedirectResult=fE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return vC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ZU(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await QU();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function wC(n){return n.unwrap()}function JU(n){return n.wrapped()}/**
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
 */function e4(n){return bC(n)}function t4(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new n4(n,$2(n,e))}else if(r){const a=bC(e),o=e;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function bC(n){const{_tokenResponse:e}=n instanceof kn?n.customData:n;if(!e)return null;if(!(n instanceof kn)&&"temporaryProof"in e&&"phoneNumber"in e)return Ro.credentialFromResult(n);const t=e.providerId;if(!t||t===th.PASSWORD)return null;let r;switch(t){case th.GOOGLE:r=ti;break;case th.FACEBOOK:r=ei;break;case th.GITHUB:r=ni;break;case th.TWITTER:r=ri;break;default:const{oauthIdToken:a,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:d,nonce:p}=e;return!o&&!u&&!a&&!d?null:d?t.startsWith("saml.")?cu._create(t,d):hi._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:o}):new Zl(t).credential({idToken:a,accessToken:o,rawNonce:p})}return n instanceof kn?r.credentialFromError(n):r.credentialFromResult(n)}function zn(n,e){return e.catch(t=>{throw t instanceof kn&&t4(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:e4(t),additionalUserInfo:G2(t),user:Nm.getOrCreate(a)}})}async function Jy(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>zn(n,t.confirm(r))}}class n4{constructor(e,t){this.resolver=t,this.auth=JU(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zn(wC(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Nm=class fh{constructor(e){this._delegate=e,this.multiFactor=W2(e)}static getOrCreate(e){return fh.USER_MAP.has(e)||fh.USER_MAP.set(e,new fh(e)),fh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zn(this.auth,ZR(this._delegate,e))}async linkWithPhoneNumber(e,t){return Jy(this.auth,yL(this._delegate,e,t))}async linkWithPopup(e){return zn(this.auth,RL(this._delegate,e,Zs))}async linkWithRedirect(e){return await Zy(bt(this.auth)),ML(this._delegate,e,Zs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zn(this.auth,JR(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Jy(this.auth,vL(this._delegate,e,t))}reauthenticateWithPopup(e){return zn(this.auth,SL(this._delegate,e,Zs))}async reauthenticateWithRedirect(e){return await Zy(bt(this.auth)),kL(this._delegate,e,Zs)}sendEmailVerification(e){return k2(this._delegate,e)}async unlink(e){return await E2(this._delegate,e),this}updateEmail(e){return U2(this._delegate,e)}updatePassword(e){return B2(this._delegate,e)}updatePhoneNumber(e){return EL(this._delegate,e)}updateProfile(e){return L2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return V2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Nm.USER_MAP=new WeakMap;/**
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
 */const ih=se;class ev{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ih(r,"invalid-api-key",{appName:e.name}),ih(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Zs:void 0;this._delegate=t.initialize({options:{persistence:r4(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(uM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Nm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){XM(this._delegate,e,t)}applyActionCode(e){return A2(this._delegate,e)}checkActionCode(e){return eC(this._delegate,e)}confirmPasswordReset(e,t){return I2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return zn(this._delegate,R2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return O2(this._delegate,e)}isSignInWithEmailLink(e){return x2(this._delegate,e)}async getRedirectResult(){ih(Sy(),this._delegate,"operation-not-supported-in-this-environment");const e=await UL(this._delegate,Zs);return e?zn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){BU(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:o,complete:u}=jI(e,t,r);return this._delegate.onAuthStateChanged(a,o,u)}onIdTokenChanged(e,t,r){const{next:a,error:o,complete:u}=jI(e,t,r);return this._delegate.onIdTokenChanged(a,o,u)}sendSignInLinkToEmail(e,t){return D2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return b2(this._delegate,e,t||void 0)}async setPersistence(e){YU(this._delegate,e);let t;switch(e){case er.SESSION:t=So;break;case er.LOCAL:t=await tr(zh)._isAvailable()?zh:lE;break;case er.NONE:t=uu;break;default:return vn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zn(this._delegate,v2(this._delegate))}signInWithCredential(e){return zn(this._delegate,Sm(this._delegate,e))}signInWithCustomToken(e){return zn(this._delegate,w2(this._delegate,e))}signInWithEmailAndPassword(e,t){return zn(this._delegate,C2(this._delegate,e,t))}signInWithEmailLink(e,t){return zn(this._delegate,P2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Jy(this._delegate,_L(this._delegate,e,t))}async signInWithPopup(e){return ih(Sy(),this._delegate,"operation-not-supported-in-this-environment"),zn(this._delegate,AL(this._delegate,e,Zs))}async signInWithRedirect(e){return ih(Sy(),this._delegate,"operation-not-supported-in-this-environment"),await Zy(this._delegate),NL(this._delegate,e,Zs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return S2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ev.Persistence=er;function jI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&Nm.getOrCreate(u)),error:e,complete:t}}function r4(n,e){const t=XU(n,e);if(typeof self<"u"&&!t.includes(zh)&&t.push(zh),typeof window<"u")for(const r of[lE,So])t.includes(r)||t.push(r);return t.includes(uu)||t.push(uu),t}/**
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
 */class gE{static credential(e,t){return Ro.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Ro(wC(ku.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}gE.PHONE_SIGN_IN_METHOD=Ro.PHONE_SIGN_IN_METHOD;gE.PROVIDER_ID=Ro.PROVIDER_ID;/**
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
 */const i4=se;class s4{constructor(e,t,r=ku.app()){var a;i4((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new mL(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const a4="auth-compat";function o4(n){n.INTERNAL.registerComponent(new ci(a4,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ev(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ml.EMAIL_SIGNIN,PASSWORD_RESET:Ml.PASSWORD_RESET,RECOVER_EMAIL:Ml.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ml.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ml.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ml.VERIFY_EMAIL}},EmailAuthProvider:Ta,FacebookAuthProvider:ei,GithubAuthProvider:ni,GoogleAuthProvider:ti,OAuthProvider:Zl,SAMLAuthProvider:qp,PhoneAuthProvider:gE,PhoneMultiFactorGenerator:gC,RecaptchaVerifier:s4,TwitterAuthProvider:ri,Auth:ev,AuthCredential:Mu,Error:kn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(zU,FU)}o4(ku);var qI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra,IC;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function A(){}A.prototype=R.prototype,D.D=R.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(P,M,z){for(var N=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)N[Nt-2]=arguments[Nt];return R.prototype[M].apply(P,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,A){A||(A=0);var P=Array(16);if(typeof R=="string")for(var M=0;16>M;++M)P[M]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(M=0;16>M;++M)P[M]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=D.g[0],A=D.g[1],M=D.g[2];var z=D.g[3],N=R+(z^A&(M^z))+P[0]+3614090360&4294967295;R=A+(N<<7&4294967295|N>>>25),N=z+(M^R&(A^M))+P[1]+3905402710&4294967295,z=R+(N<<12&4294967295|N>>>20),N=M+(A^z&(R^A))+P[2]+606105819&4294967295,M=z+(N<<17&4294967295|N>>>15),N=A+(R^M&(z^R))+P[3]+3250441966&4294967295,A=M+(N<<22&4294967295|N>>>10),N=R+(z^A&(M^z))+P[4]+4118548399&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(M^R&(A^M))+P[5]+1200080426&4294967295,z=R+(N<<12&4294967295|N>>>20),N=M+(A^z&(R^A))+P[6]+2821735955&4294967295,M=z+(N<<17&4294967295|N>>>15),N=A+(R^M&(z^R))+P[7]+4249261313&4294967295,A=M+(N<<22&4294967295|N>>>10),N=R+(z^A&(M^z))+P[8]+1770035416&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(M^R&(A^M))+P[9]+2336552879&4294967295,z=R+(N<<12&4294967295|N>>>20),N=M+(A^z&(R^A))+P[10]+4294925233&4294967295,M=z+(N<<17&4294967295|N>>>15),N=A+(R^M&(z^R))+P[11]+2304563134&4294967295,A=M+(N<<22&4294967295|N>>>10),N=R+(z^A&(M^z))+P[12]+1804603682&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(M^R&(A^M))+P[13]+4254626195&4294967295,z=R+(N<<12&4294967295|N>>>20),N=M+(A^z&(R^A))+P[14]+2792965006&4294967295,M=z+(N<<17&4294967295|N>>>15),N=A+(R^M&(z^R))+P[15]+1236535329&4294967295,A=M+(N<<22&4294967295|N>>>10),N=R+(M^z&(A^M))+P[1]+4129170786&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^M&(R^A))+P[6]+3225465664&4294967295,z=R+(N<<9&4294967295|N>>>23),N=M+(R^A&(z^R))+P[11]+643717713&4294967295,M=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(M^z))+P[0]+3921069994&4294967295,A=M+(N<<20&4294967295|N>>>12),N=R+(M^z&(A^M))+P[5]+3593408605&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^M&(R^A))+P[10]+38016083&4294967295,z=R+(N<<9&4294967295|N>>>23),N=M+(R^A&(z^R))+P[15]+3634488961&4294967295,M=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(M^z))+P[4]+3889429448&4294967295,A=M+(N<<20&4294967295|N>>>12),N=R+(M^z&(A^M))+P[9]+568446438&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^M&(R^A))+P[14]+3275163606&4294967295,z=R+(N<<9&4294967295|N>>>23),N=M+(R^A&(z^R))+P[3]+4107603335&4294967295,M=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(M^z))+P[8]+1163531501&4294967295,A=M+(N<<20&4294967295|N>>>12),N=R+(M^z&(A^M))+P[13]+2850285829&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^M&(R^A))+P[2]+4243563512&4294967295,z=R+(N<<9&4294967295|N>>>23),N=M+(R^A&(z^R))+P[7]+1735328473&4294967295,M=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(M^z))+P[12]+2368359562&4294967295,A=M+(N<<20&4294967295|N>>>12),N=R+(A^M^z)+P[5]+4294588738&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^M)+P[8]+2272392833&4294967295,z=R+(N<<11&4294967295|N>>>21),N=M+(z^R^A)+P[11]+1839030562&4294967295,M=z+(N<<16&4294967295|N>>>16),N=A+(M^z^R)+P[14]+4259657740&4294967295,A=M+(N<<23&4294967295|N>>>9),N=R+(A^M^z)+P[1]+2763975236&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^M)+P[4]+1272893353&4294967295,z=R+(N<<11&4294967295|N>>>21),N=M+(z^R^A)+P[7]+4139469664&4294967295,M=z+(N<<16&4294967295|N>>>16),N=A+(M^z^R)+P[10]+3200236656&4294967295,A=M+(N<<23&4294967295|N>>>9),N=R+(A^M^z)+P[13]+681279174&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^M)+P[0]+3936430074&4294967295,z=R+(N<<11&4294967295|N>>>21),N=M+(z^R^A)+P[3]+3572445317&4294967295,M=z+(N<<16&4294967295|N>>>16),N=A+(M^z^R)+P[6]+76029189&4294967295,A=M+(N<<23&4294967295|N>>>9),N=R+(A^M^z)+P[9]+3654602809&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^M)+P[12]+3873151461&4294967295,z=R+(N<<11&4294967295|N>>>21),N=M+(z^R^A)+P[15]+530742520&4294967295,M=z+(N<<16&4294967295|N>>>16),N=A+(M^z^R)+P[2]+3299628645&4294967295,A=M+(N<<23&4294967295|N>>>9),N=R+(M^(A|~z))+P[0]+4096336452&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~M))+P[7]+1126891415&4294967295,z=R+(N<<10&4294967295|N>>>22),N=M+(R^(z|~A))+P[14]+2878612391&4294967295,M=z+(N<<15&4294967295|N>>>17),N=A+(z^(M|~R))+P[5]+4237533241&4294967295,A=M+(N<<21&4294967295|N>>>11),N=R+(M^(A|~z))+P[12]+1700485571&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~M))+P[3]+2399980690&4294967295,z=R+(N<<10&4294967295|N>>>22),N=M+(R^(z|~A))+P[10]+4293915773&4294967295,M=z+(N<<15&4294967295|N>>>17),N=A+(z^(M|~R))+P[1]+2240044497&4294967295,A=M+(N<<21&4294967295|N>>>11),N=R+(M^(A|~z))+P[8]+1873313359&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~M))+P[15]+4264355552&4294967295,z=R+(N<<10&4294967295|N>>>22),N=M+(R^(z|~A))+P[6]+2734768916&4294967295,M=z+(N<<15&4294967295|N>>>17),N=A+(z^(M|~R))+P[13]+1309151649&4294967295,A=M+(N<<21&4294967295|N>>>11),N=R+(M^(A|~z))+P[4]+4149444226&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~M))+P[11]+3174756917&4294967295,z=R+(N<<10&4294967295|N>>>22),N=M+(R^(z|~A))+P[2]+718787259&4294967295,M=z+(N<<15&4294967295|N>>>17),N=A+(z^(M|~R))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(M+(N<<21&4294967295|N>>>11))&4294967295,D.g[2]=D.g[2]+M&4294967295,D.g[3]=D.g[3]+z&4294967295}r.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var A=R-this.blockSize,P=this.B,M=this.h,z=0;z<R;){if(M==0)for(;z<=A;)a(this,D,z),z+=this.blockSize;if(typeof D=="string"){for(;z<R;)if(P[M++]=D.charCodeAt(z++),M==this.blockSize){a(this,P),M=0;break}}else for(;z<R;)if(P[M++]=D[z++],M==this.blockSize){a(this,P),M=0;break}}this.h=M,this.o+=R},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var A=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=A&255,A/=256;for(this.u(D),D=Array(16),R=A=0;4>R;++R)for(var P=0;32>P;P+=8)D[A++]=this.g[R]>>>P&255;return D};function o(D,R){var A=d;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=R(D)}function u(D,R){this.h=R;for(var A=[],P=!0,M=D.length-1;0<=M;M--){var z=D[M]|0;P&&z==R||(A[M]=z,P=!1)}this.g=A}var d={};function p(D){return-128<=D&&128>D?o(D,function(R){return new u([R|0],0>R?-1:0)}):new u([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return v;if(0>D)return L(m(-D));for(var R=[],A=1,P=0;D>=A;P++)R[P]=D/A|0,A*=4294967296;return new u(R,0)}function y(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return L(y(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(R,8)),P=v,M=0;M<D.length;M+=8){var z=Math.min(8,D.length-M),N=parseInt(D.substring(M,M+z),R);8>z?(z=m(Math.pow(R,z)),P=P.j(z).add(m(N))):(P=P.j(A),P=P.add(m(N)))}return P}var v=p(0),w=p(1),S=p(16777216);n=u.prototype,n.m=function(){if(k(this))return-L(this).m();for(var D=0,R=1,A=0;A<this.g.length;A++){var P=this.i(A);D+=(0<=P?P:4294967296+P)*R,R*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(x(this))return"0";if(k(this))return"-"+L(this).toString(D);for(var R=m(Math.pow(D,6)),A=this,P="";;){var M=oe(A,R).g;A=H(A,M.j(R));var z=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=M,x(A))return z+P;for(;6>z.length;)z="0"+z;P=z+P}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function x(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function k(D){return D.h==-1}n.l=function(D){return D=H(this,D),k(D)?-1:x(D)?0:1};function L(D){for(var R=D.g.length,A=[],P=0;P<R;P++)A[P]=~D.g[P];return new u(A,~D.h).add(w)}n.abs=function(){return k(this)?L(this):this},n.add=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0,M=0;M<=R;M++){var z=P+(this.i(M)&65535)+(D.i(M)&65535),N=(z>>>16)+(this.i(M)>>>16)+(D.i(M)>>>16);P=N>>>16,z&=65535,N&=65535,A[M]=N<<16|z}return new u(A,A[A.length-1]&-2147483648?-1:0)};function H(D,R){return D.add(L(R))}n.j=function(D){if(x(this)||x(D))return v;if(k(this))return k(D)?L(this).j(L(D)):L(L(this).j(D));if(k(D))return L(this.j(L(D)));if(0>this.l(S)&&0>D.l(S))return m(this.m()*D.m());for(var R=this.g.length+D.g.length,A=[],P=0;P<2*R;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var M=0;M<D.g.length;M++){var z=this.i(P)>>>16,N=this.i(P)&65535,Nt=D.i(M)>>>16,It=D.i(M)&65535;A[2*P+2*M]+=N*It,X(A,2*P+2*M),A[2*P+2*M+1]+=z*It,X(A,2*P+2*M+1),A[2*P+2*M+1]+=N*Nt,X(A,2*P+2*M+1),A[2*P+2*M+2]+=z*Nt,X(A,2*P+2*M+2)}for(P=0;P<R;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=R;P<2*R;P++)A[P]=0;return new u(A,0)};function X(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function K(D,R){this.g=D,this.h=R}function oe(D,R){if(x(R))throw Error("division by zero");if(x(D))return new K(v,v);if(k(D))return R=oe(L(D),R),new K(L(R.g),L(R.h));if(k(R))return R=oe(D,L(R)),new K(L(R.g),R.h);if(30<D.g.length){if(k(D)||k(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,P=R;0>=P.l(D);)A=ae(A),P=ae(P);var M=le(A,1),z=le(P,1);for(P=le(P,2),A=le(A,2);!x(P);){var N=z.add(P);0>=N.l(D)&&(M=M.add(A),z=N),P=le(P,1),A=le(A,1)}return R=H(D,M.j(R)),new K(M,R)}for(M=v;0<=D.l(R);){for(A=Math.max(1,Math.floor(D.m()/R.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),z=m(A),N=z.j(R);k(N)||0<N.l(D);)A-=P,z=m(A),N=z.j(R);x(z)&&(z=w),M=M.add(z),D=H(D,N)}return new K(M,D)}n.A=function(D){return oe(this,D).h},n.and=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)&D.i(P);return new u(A,this.h&D.h)},n.or=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)|D.i(P);return new u(A,this.h|D.h)},n.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)^D.i(P);return new u(A,this.h^D.h)};function ae(D){for(var R=D.g.length+1,A=[],P=0;P<R;P++)A[P]=D.i(P)<<1|D.i(P-1)>>>31;return new u(A,D.h)}function le(D,R){var A=R>>5;R%=32;for(var P=D.g.length-A,M=[],z=0;z<P;z++)M[z]=0<R?D.i(z+A)>>>R|D.i(z+A+1)<<32-R:D.i(z+A);return new u(M,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,IC=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,ra=u}).apply(typeof qI<"u"?qI:typeof self<"u"?self:typeof window<"u"?window:{});var rp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var AC,ph,SC,wp,tv,RC,CC,DC;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof rp=="object"&&rp];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(h,_){if(_)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var j=h[I];if(!(j in E))break e;E=E[j]}h=h[h.length-1],I=E[h],_=_(I),_!=I&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function o(h,_){h instanceof String&&(h+="");var E=0,I=!1,j={next:function(){if(!I&&E<h.length){var W=E++;return{value:_(W,h[W]),done:!1}}return I=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return o(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function m(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,E){return h.call.apply(h.bind,arguments)}function v(h,_,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,I),h.apply(_,j)}}return function(){return h.apply(_,arguments)}}function w(h,_,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,w.apply(null,arguments)}function S(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function x(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,j,W){for(var ue=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ue[qe-2]=arguments[qe];return _.prototype[j].apply(I,ue)}}function k(h){const _=h.length;if(0<_){const E=Array(_);for(let I=0;I<_;I++)E[I]=h[I];return E}return[]}function L(h,_){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(p(I)){const j=h.length||0,W=I.length||0;h.length=j+W;for(let ue=0;ue<W;ue++)h[j+ue]=I[ue]}else h.push(I)}}class H{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function X(h){return/^[\s\xa0]*$/.test(h)}function K(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var ae=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function le(h,_,E){for(const I in h)_.call(E,h[I],I,h)}function D(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function R(h){const _={};for(const E in h)_[E]=h[E];return _}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,_){let E,I;for(let j=1;j<arguments.length;j++){I=arguments[j];for(E in I)h[E]=I[E];for(let W=0;W<A.length;W++)E=A[W],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function M(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function z(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Oe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Nt{constructor(){this.h=this.g=null}add(_,E){const I=It.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var It=new H(()=>new he,h=>h.reset());class he{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Te=!1,Oe=new Nt,O=()=>{const h=d.Promise.resolve(void 0);be=()=>{h.then(ie)}};var ie=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){z(E)}var _=It;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}Te=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,_),d.removeEventListener("test",E,_)}catch{}return h}();function De(h,_){if(pe.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ae){e:{try{oe(_.nodeName);var j=!0;break e}catch{}j=!1}j||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ce[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}x(De,pe);var Ce={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Ze(h,_,E,I,j){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=j,this.key=++Me,this.da=this.fa=!1}function Ke(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ut(h){this.src=h,this.g={},this.h=0}Ut.prototype.add=function(h,_,E,I,j){var W=h.toString();h=this.g[W],h||(h=this.g[W]=[],this.h++);var ue=rr(h,_,I,j);return-1<ue?(_=h[ue],E||(_.fa=!1)):(_=new Ze(_,this.src,W,!!I,j),_.fa=E,h.push(_)),_};function Jt(h,_){var E=_.type;if(E in h.g){var I=h.g[E],j=Array.prototype.indexOf.call(I,_,void 0),W;(W=0<=j)&&Array.prototype.splice.call(I,j,1),W&&(Ke(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function rr(h,_,E,I){for(var j=0;j<h.length;++j){var W=h[j];if(!W.da&&W.listener==_&&W.capture==!!E&&W.ha==I)return j}return-1}var as="closure_lm_"+(1e6*Math.random()|0),os={};function _i(h,_,E,I,j){if(Array.isArray(_)){for(var W=0;W<_.length;W++)_i(h,_[W],E,I,j);return null}return E=xd(E),h&&h[ut]?h.K(_,E,m(I)?!!I.capture:!1,j):$u(h,_,E,!1,I,j)}function $u(h,_,E,I,j,W){if(!_)throw Error("Invalid event type");var ue=m(j)?!!j.capture:!!j,qe=Ku(h);if(qe||(h[as]=qe=new Ut(h)),E=qe.add(_,E,I,ue,W),E.proxy)return E;if(I=Go(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)fe||(j=ue),j===void 0&&(j=!1),h.addEventListener(_.toString(),I,j);else if(h.attachEvent)h.attachEvent(Ko(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Go(){function h(E){return _.call(h.src,h.listener,E)}const _=ag;return h}function $o(h,_,E,I,j){if(Array.isArray(_))for(var W=0;W<_.length;W++)$o(h,_[W],E,I,j);else I=m(I)?!!I.capture:!!I,E=xd(E),h&&h[ut]?(h=h.i,_=String(_).toString(),_ in h.g&&(W=h.g[_],E=rr(W,E,I,j),-1<E&&(Ke(W[E]),Array.prototype.splice.call(W,E,1),W.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ku(h))&&(_=h.g[_.toString()],h=-1,_&&(h=rr(_,E,I,j)),(E=-1<h?_[h]:null)&&Ra(E))}function Ra(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[ut])Jt(_.i,h);else{var E=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(E,I,h.capture):_.detachEvent?_.detachEvent(Ko(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=Ku(_))?(Jt(E,h),E.h==0&&(E.src=null,_[as]=null)):Ke(h)}}}function Ko(h){return h in os?os[h]:os[h]="on"+h}function ag(h,_){if(h.da)h=!0;else{_=new De(_,this);var E=h.listener,I=h.ha||h.src;h.fa&&Ra(h),h=E.call(I,_)}return h}function Ku(h){return h=h[as],h instanceof Ut?h:null}var Ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function xd(h){return typeof h=="function"?h:(h[Ln]||(h[Ln]=function(_){return h.handleEvent(_)}),h[Ln])}function Gt(){ge.call(this),this.i=new Ut(this),this.M=this,this.F=null}x(Gt,ge),Gt.prototype[ut]=!0,Gt.prototype.removeEventListener=function(h,_,E,I){$o(this,h,_,E,I)};function en(h,_){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new pe(_,h);else if(_ instanceof pe)_.target=_.target||h;else{var j=_;_=new pe(I,h),P(_,j)}if(j=!0,E)for(var W=E.length-1;0<=W;W--){var ue=_.g=E[W];j=yi(ue,I,!0,_)&&j}if(ue=_.g=h,j=yi(ue,I,!0,_)&&j,j=yi(ue,I,!1,_)&&j,E)for(W=0;W<E.length;W++)ue=_.g=E[W],j=yi(ue,I,!1,_)&&j}Gt.prototype.N=function(){if(Gt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],I=0;I<E.length;I++)Ke(E[I]);delete h.g[_],h.h--}}this.F=null},Gt.prototype.K=function(h,_,E,I){return this.i.add(String(h),_,!1,E,I)},Gt.prototype.L=function(h,_,E,I){return this.i.add(String(h),_,!0,E,I)};function yi(h,_,E,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var j=!0,W=0;W<_.length;++W){var ue=_[W];if(ue&&!ue.da&&ue.capture==E){var qe=ue.listener,Kt=ue.ha||ue.src;ue.fa&&Jt(h.i,ue),j=qe.call(Kt,I)!==!1&&j}}return j&&!I.defaultPrevented}function Pd(h,_,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Qu(h){h.g=Pd(()=>{h.g=null,h.i&&(h.i=!1,Qu(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class og extends ge{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Qu(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ca(h){ge.call(this),this.h=h,this.g={}}x(Ca,ge);var ls=[];function En(h){le(h.g,function(_,E){this.g.hasOwnProperty(E)&&Ra(_)},h),h.g={}}Ca.prototype.N=function(){Ca.aa.N.call(this),En(this)},Ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wu=d.JSON.stringify,Vr=d.JSON.parse,Rn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Yu(){}Yu.prototype.h=null;function Nd(h){return h.h||(h.h=h.i())}function Od(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){pe.call(this,"d")}x(us,pe);function Ir(){pe.call(this,"c")}x(Ir,pe);var ir={},cs=null;function Qo(){return cs=cs||new Gt}ir.La="serverreachability";function Xu(h){pe.call(this,ir.La,h)}x(Xu,pe);function hs(h){const _=Qo();en(_,new Xu(_))}ir.STAT_EVENT="statevent";function Wo(h,_){pe.call(this,ir.STAT_EVENT,h),this.stat=_}x(Wo,pe);function Ot(h){const _=Qo();en(_,new Wo(_,h))}ir.Ma="timingevent";function kd(h,_){pe.call(this,ir.Ma,h),this.size=_}x(kd,pe);function ds(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function Vd(h,_,E,I,j,W){h.info(function(){if(h.g)if(W)for(var ue="",qe=W.split("&"),Kt=0;Kt<qe.length;Kt++){var He=qe[Kt].split("=");if(1<He.length){var rn=He[0];He=He[1];var Qt=rn.split("_");ue=2<=Qt.length&&Qt[1]=="type"?ue+(rn+"="+He+"&"):ue+(rn+"=redacted&")}}else ue=null;else ue=W;return"XMLHTTP REQ ("+I+") [attempt "+j+"]: "+_+`
`+E+`
`+ue})}function Md(h,_,E,I,j,W,ue){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+j+"]: "+_+`
`+E+`
`+W+" "+ue})}function ps(h,_,E,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+tn(h,E)+(I?" "+I:"")})}function Lr(h,_){h.info(function(){return"TIMEOUT: "+_})}fs.prototype.info=function(){};function tn(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var j=I[1];if(Array.isArray(j)&&!(1>j.length)){var W=j[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ue=1;ue<j.length;ue++)j[ue]=""}}}}return Wu(E)}catch{return _}}var $t={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Da;function Yo(){}x(Yo,Yu),Yo.prototype.g=function(){return new XMLHttpRequest},Yo.prototype.i=function(){return{}},Da=new Yo;function Ur(h,_,E,I){this.j=h,this.i=_,this.l=E,this.R=I||1,this.U=new Ca(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zu}function Zu(){this.i=null,this.g="",this.h=!1}var ms={},xa={};function Ar(h,_,E){h.L=1,h.v=Oa(At(_)),h.m=E,h.P=!0,Ei(h,null)}function Ei(h,_){h.F=Date.now(),_t(h),h.A=At(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),bi(E.i,"t",I),h.C=0,E=h.j.J,h.h=new Zu,h.g=Yd(h.j,E?_:null,!h.m),0<h.O&&(h.M=new og(w(h.Y,h,h.g),h.O)),_=h.U,E=h.g,I=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(ls[0]=j.toString()),j=ls);for(var W=0;W<j.length;W++){var ue=_i(E,j[W],I||_.handleEvent,!1,_.h||_);if(!ue)break;_.g[ue.key]=ue}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),hs(),Vd(h.i,h.u,h.A,h.l,h.R,h.m)}Ur.prototype.ca=function(h){h=h.target;const _=this.M;_&&ur(h)==3?_.j():this.Y(h)},Ur.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=ur(this.g);var _=this.g.Ba();const Ri=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||jd(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=Ri?hs(3):hs(2)),Xo(this);var E=this.g.Z();this.X=E;t:if(gs(this)){var I=jd(this.g);h="";var j=I.length,W=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),Gn(this);var ue="";break t}this.h.i=new d.TextDecoder}for(_=0;_<j;_++)this.h.h=!0,h+=this.h.i.decode(I[_],{stream:!(W&&_==j-1)});I.length=0,this.h.g+=h,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,Md(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Kt=this.g;if((qe=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(qe)){var He=qe;break t}}He=null}if(E=He)ps(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$n(this,E);else{this.o=!1,this.s=3,Ot(12),Un(this),Gn(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<ue.length;)if(dn=_s(this,ue),dn==xa){Qt==4&&(this.s=4,Ot(14),E=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==ms){this.s=4,Ot(15),ps(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else ps(this.i,this.l,dn,null),$n(this,dn);if(gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ue.length!=0||this.h.h||(this.s=1,Ot(16),E=!1),this.o=this.o&&E,!E)ps(this.i,this.l,ue,"[Invalid Chunked Response]"),Un(this),Gn(this);else if(0<ue.length&&!this.W){this.W=!0;var rn=this.j;rn.g==this&&rn.ba&&!rn.M&&(rn.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),za(rn),rn.M=!0,Ot(11))}}else ps(this.i,this.l,ue,null),$n(this,ue);Qt==4&&Un(this),this.o&&!this.J&&(Qt==4?Kd(this.j,this):(this.o=!1,_t(this)))}else fg(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Un(this),Gn(this)}}}catch{}finally{}};function gs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function _s(h,_){var E=h.C,I=_.indexOf(`
`,E);return I==-1?xa:(E=Number(_.substring(E,I)),isNaN(E)?ms:(I+=1,I+E>_.length?xa:(_=_.slice(I,I+E),h.C=I+E,_)))}Ur.prototype.cancel=function(){this.J=!0,Un(this)};function _t(h){h.S=Date.now()+h.I,Ju(h,h.I)}function Ju(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=ds(w(h.ba,h),_)}function Xo(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ur.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Lr(this.i,this.A),this.L!=2&&(hs(),Ot(17)),Un(this),this.s=2,Gn(this)):Ju(this,this.S-h)};function Gn(h){h.j.G==0||h.J||Kd(h.j,h)}function Un(h){Xo(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,En(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function $n(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||ys(E.h,h))){if(!h.K&&ys(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var j=I;if(j[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)ol(E),sl(E);else break e;cc(E),Ot(18)}}else E.za=j[1],0<E.za-E.T&&37500>j[2]&&E.F&&E.v==0&&!E.C&&(E.C=ds(w(E.Za,E),6e3));if(1>=Ld(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Si(E,11)}else if((h.K||E.g==h)&&ol(E),!X(_))for(j=E.Da.g.parse(_),_=0;_<j.length;_++){let He=j[_];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const rn=He[3];rn!=null&&(E.la=rn,E.j.info("VER="+E.la));const Qt=He[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Ri=He[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(I=1.5*Ri,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const dn=h.g;if(dn){const Gr=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var W=I.h;W.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(vs(W,W.h),W.h=null))}if(I.D){const dc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(I.ya=dc,Qe(I.I,I.D,dc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ue=h;if(I.qa=Wd(I,I.J?I.ia:null,I.W),ue.K){sr(I.h,ue);var qe=ue,Kt=I.L;Kt&&(qe.I=Kt),qe.B&&(Xo(qe),_t(qe)),I.g=ue}else Gd(I);0<E.i.length&&al(E)}else He[0]!="stop"&&He[0]!="close"||Si(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Si(E,7):lc(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}hs(4)}catch{}}var lg=class{constructor(h,_){this.g=h,this.map=_}};function ec(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tc(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ld(h){return h.h?1:h.g?h.g.size:0}function ys(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function vs(h,_){h.g?h.g.add(_):h.h=_}function sr(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}ec.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Cn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return k(h.i)}function Ud(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],E=h.length,I=0;I<E;I++)_.push(h[I]);return _}_=[],E=0;for(I in h)_[E++]=h[I];return _}function ug(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const I in h)_[E++]=I;return _}}}function Pa(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=ug(h),I=Ud(h),j=I.length,W=0;W<j;W++)_.call(void 0,I[W],E&&E[W],h)}var nc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zo(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),j=null;if(0<=I){var W=h[E].substring(0,I);j=h[E].substring(I+1)}else W=h[E];_(W,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Ti(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ti){this.h=h.h,Es(this,h.j),this.o=h.o,this.g=h.g,Na(this,h.s),this.l=h.l;var _=h.i,E=new Br;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),Jo(this,E),this.m=h.m}else h&&(_=String(h).match(nc))?(this.h=!1,Es(this,_[1]||"",!0),this.o=Ts(_[2]||""),this.g=Ts(_[3]||"",!0),Na(this,_[4]),this.l=Ts(_[5]||"",!0),Jo(this,_[6]||"",!0),this.m=Ts(_[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}Ti.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ar(_,rc,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ar(_,rc,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ar(E,E.charAt(0)=="/"?ic:Bd,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ar(E,dg)),h.join("")};function At(h){return new Ti(h)}function Es(h,_,E){h.j=E?Ts(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Na(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Jo(h,_,E){_ instanceof Br?(h.i=_,sc(h.i,h.h)):(E||(_=ar(_,hg)),h.i=new Br(_,h.h))}function Qe(h,_,E){h.i.set(_,E)}function Oa(h){return Qe(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Ts(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ar(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,cg),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function cg(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var rc=/[#\/\?@]/g,Bd=/[#\?:]/g,ic=/[#\?]/g,hg=/[#\?@]/g,dg=/#/g;function Br(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function or(h){h.g||(h.g=new Map,h.h=0,h.i&&Zo(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=Br.prototype,n.add=function(h,_){or(this),this.i=null,h=Ii(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function el(h,_){or(h),_=Ii(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function wi(h,_){return or(h),_=Ii(h,_),h.g.has(_)}n.forEach=function(h,_){or(this),this.g.forEach(function(E,I){E.forEach(function(j){h.call(_,j,I,this)},this)},this)},n.na=function(){or(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let I=0;I<_.length;I++){const j=h[I];for(let W=0;W<j.length;W++)E.push(_[I])}return E},n.V=function(h){or(this);let _=[];if(typeof h=="string")wi(this,h)&&(_=_.concat(this.g.get(Ii(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return or(this),this.i=null,h=Ii(this,h),wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function bi(h,_,E){el(h,_),0<E.length&&(h.i=null,h.g.set(Ii(h,_),k(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var I=_[E];const W=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var j=W;ue[I]!==""&&(j+="="+encodeURIComponent(String(ue[I]))),h.push(j)}}return this.i=h.join("&")};function Ii(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function sc(h,_){_&&!h.j&&(or(h),h.i=null,h.g.forEach(function(E,I){var j=I.toLowerCase();I!=j&&(el(this,I),bi(this,j,E))},h)),h.j=_}function zd(h,_){const E=new fs;if(d.Image){const I=new Image;I.onload=S(lr,E,"TestLoadImage: loaded",!0,_,I),I.onerror=S(lr,E,"TestLoadImage: error",!1,_,I),I.onabort=S(lr,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=S(lr,E,"TestLoadImage: timeout",!1,_,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function ka(h,_){const E=new fs,I=new AbortController,j=setTimeout(()=>{I.abort(),lr(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(W=>{clearTimeout(j),W.ok?lr(E,"TestPingServer: ok",!0,_):lr(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(j),lr(E,"TestPingServer: error",!1,_)})}function lr(h,_,E,I,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),I(E)}catch{}}function Va(){this.g=new Rn}function zr(h,_,E){const I=E||"";try{Pa(h,function(j,W){let ue=j;m(j)&&(ue=Wu(j)),_.push(I+W+"="+encodeURIComponent(ue))})}catch(j){throw _.push(I+"type="+encodeURIComponent("_badmap")),j}}function ws(h){this.l=h.Ub||null,this.j=h.eb||!1}x(ws,Yu),ws.prototype.g=function(){return new Ai(this.l,this.j)},ws.prototype.i=function(h){return function(){return h}}({});function Ai(h,_){Gt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ai,Gt),n=Ai.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,jr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ac(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function ac(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Fr(this):jr(this),this.readyState==3&&ac(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Fr(this))},n.Qa=function(h){this.g&&(this.response=h,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,jr(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function jr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function oc(h){let _="";return le(h,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function nn(h,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=oc(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):Qe(h,_,E))}function Je(h){Gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Je,Gt);var tl=/^https?$/i,Ma=["POST","PUT"];n=Je.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Da.g(),this.v=this.o?Nd(this.o):Nd(Da),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(W){Fd(this,W);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var j in I)E.set(j,I[j]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const W of I.keys())E.set(W,I.get(W));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(W=>W.toLowerCase()=="content-type"),j=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ma,_,void 0))||I||j||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ue]of E)this.g.setRequestHeader(W,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{La(this),this.u=!0,this.g.send(h),this.u=!1}catch(W){Fd(this,W)}};function Fd(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,nl(h),qr(h)}function nl(h){h.A||(h.A=!0,en(h,"complete"),en(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,en(this,"complete"),en(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?rl(this):this.bb())},n.bb=function(){rl(this)};function rl(h){if(h.h&&typeof u<"u"&&(!h.v[1]||ur(h)!=4||h.Z()!=2)){if(h.u&&ur(h)==4)Pd(h.Ea,0,h);else if(en(h,"readystatechange"),ur(h)==4){h.h=!1;try{const ue=h.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=ue===0){var j=String(h.D).match(nc)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),I=!tl.test(j?j.toLowerCase():"")}E=I}if(E)en(h,"complete"),en(h,"success");else{h.m=6;try{var W=2<ur(h)?h.g.statusText:""}catch{W=""}h.l=W+" ["+h.Z()+"]",nl(h)}}finally{qr(h)}}}}function qr(h,_){if(h.g){La(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||en(h,"ready");try{E.onreadystatechange=I}catch{}}}function La(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ur(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Vr(_)}};function jd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function fg(h){const _={};h=(h.g&&2<=ur(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(X(h[I]))continue;var E=M(h[I]);const j=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const W=_[j]||[];_[j]=W,W.push(E)}D(_,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ua(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function il(h){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ua("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ua("baseRetryDelayMs",5e3,h),this.cb=Ua("retryDelaySeedMs",1e4,h),this.Wa=Ua("forwardChannelMaxRetries",2,h),this.wa=Ua("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new ec(h&&h.concurrentRequestLimit),this.Da=new Va,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=il.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,I){Ot(0),this.W=h,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Wd(this,null,this.W),al(this)};function lc(h){if(qd(h),h.G==3){var _=h.U++,E=At(h.I);if(Qe(E,"SID",h.K),Qe(E,"RID",_),Qe(E,"TYPE","terminate"),Ba(h,E),_=new Ur(h,h.j,_),_.L=2,_.v=Oa(At(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=_.v,E=!0),E||(_.g=Yd(_.j,null),_.g.ea(_.v)),_.F=Date.now(),_t(_)}Qd(h)}function sl(h){h.g&&(za(h),h.g.cancel(),h.g=null)}function qd(h){sl(h),h.u&&(d.clearTimeout(h.u),h.u=null),ol(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function al(h){if(!tc(h.h)&&!h.s){h.s=!0;var _=h.Ga;be||O(),Te||(be(),Te=!0),Oe.add(_,h),h.B=0}}function pg(h,_){return Ld(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=ds(w(h.Ga,h,_),hc(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new Ur(this,this.j,h);let W=this.o;if(this.S&&(W?(W=R(W),P(W,this.S)):W=this.S),this.m!==null||this.O||(j.H=W,W=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=Hd(this,j,_),E=At(this.I),Qe(E,"RID",h),Qe(E,"CVER",22),this.D&&Qe(E,"X-HTTP-Session-Id",this.D),Ba(this,E),W&&(this.O?_="headers="+encodeURIComponent(String(oc(W)))+"&"+_:this.m&&nn(E,this.m,W)),vs(this.h,j),this.Ua&&Qe(E,"TYPE","init"),this.P?(Qe(E,"$req",_),Qe(E,"SID","null"),j.T=!0,Ar(j,E,null)):Ar(j,E,_),this.G=2}}else this.G==3&&(h?uc(this,h):this.i.length==0||tc(this.h)||uc(this))};function uc(h,_){var E;_?E=_.l:E=h.U++;const I=At(h.I);Qe(I,"SID",h.K),Qe(I,"RID",E),Qe(I,"AID",h.T),Ba(h,I),h.m&&h.o&&nn(I,h.m,h.o),E=new Ur(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Hd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vs(h.h,E),Ar(E,I,_)}function Ba(h,_){h.H&&le(h.H,function(E,I){Qe(_,I,E)}),h.l&&Pa({},function(E,I){Qe(_,I,E)})}function Hd(h,_,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var j=h.i;let W=-1;for(;;){const ue=["count="+E];W==-1?0<E?(W=j[0].g,ue.push("ofs="+W)):W=0:ue.push("ofs="+W);let qe=!0;for(let Kt=0;Kt<E;Kt++){let He=j[Kt].g;const rn=j[Kt].map;if(He-=W,0>He)W=Math.max(0,j[Kt].g-100),qe=!1;else try{zr(rn,ue,"req"+He+"_")}catch{I&&I(rn)}}if(qe){I=ue.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,I}function Gd(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;be||O(),Te||(be(),Te=!0),Oe.add(_,h),h.v=0}}function cc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=ds(w(h.Fa,h),hc(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,$d(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=ds(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),sl(this),$d(this))};function za(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function $d(h){h.g=new Ur(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=At(h.qa);Qe(_,"RID","rpc"),Qe(_,"SID",h.K),Qe(_,"AID",h.T),Qe(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Qe(_,"TO",h.ja),Qe(_,"TYPE","xmlhttp"),Ba(h,_),h.m&&h.o&&nn(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Oa(At(_)),E.m=null,E.P=!0,Ei(E,h)}n.Za=function(){this.C!=null&&(this.C=null,sl(this),cc(this),Ot(19))};function ol(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Kd(h,_){var E=null;if(h.g==_){ol(h),za(h),h.g=null;var I=2}else if(ys(h.h,_))E=_.D,sr(h.h,_),I=1;else return;if(h.G!=0){if(_.o)if(I==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var j=h.B;I=Qo(),en(I,new kd(I,E)),al(h)}else Gd(h);else if(j=_.s,j==3||j==0&&0<_.X||!(I==1&&pg(h,_)||I==2&&cc(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),j){case 1:Si(h,5);break;case 4:Si(h,10);break;case 3:Si(h,6);break;default:Si(h,2)}}}function hc(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function Si(h,_){if(h.j.info("Error code "+_),_==2){var E=w(h.fb,h),I=h.Xa;const j=!I;I=new Ti(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Es(I,"https"),Oa(I),j?zd(I.toString(),E):ka(I.toString(),E)}else Ot(2);h.G=0,h.l&&h.l.sa(_),Qd(h),qd(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Qd(h){if(h.G=0,h.ka=[],h.l){const _=Cn(h.h);(_.length!=0||h.i.length!=0)&&(L(h.ka,_),L(h.ka,h.i),h.h.i.length=0,k(h.i),h.i.length=0),h.l.ra()}}function Wd(h,_,E){var I=E instanceof Ti?At(E):new Ti(E);if(I.g!="")_&&(I.g=_+"."+I.g),Na(I,I.s);else{var j=d.location;I=j.protocol,_=_?_+"."+j.hostname:j.hostname,j=+j.port;var W=new Ti(null);I&&Es(W,I),_&&(W.g=_),j&&Na(W,j),E&&(W.l=E),I=W}return E=h.D,_=h.ya,E&&_&&Qe(I,E,_),Qe(I,"VER",h.la),Ba(h,I),I}function Yd(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Je(new ws({eb:E})):new Je(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xd(){}n=Xd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ll(){}ll.prototype.g=function(h,_){return new Dn(h,_)};function Dn(h,_){Gt.call(this),this.g=new il(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!X(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!X(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Hr(this)}x(Dn,Gt),Dn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dn.prototype.close=function(){lc(this.g)},Dn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Wu(h),h=E);_.i.push(new lg(_.Ya++,h)),_.G==3&&al(_)},Dn.prototype.N=function(){this.g.l=null,delete this.j,lc(this.g),delete this.g,Dn.aa.N.call(this)};function Zd(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}x(Zd,us);function Jd(){Ir.call(this),this.status=1}x(Jd,Ir);function Hr(h){this.g=h}x(Hr,Xd),Hr.prototype.ua=function(){en(this.g,"a")},Hr.prototype.ta=function(h){en(this.g,new Zd(h))},Hr.prototype.sa=function(h){en(this.g,new Jd)},Hr.prototype.ra=function(){en(this.g,"b")},ll.prototype.createWebChannel=ll.prototype.g,Dn.prototype.send=Dn.prototype.o,Dn.prototype.open=Dn.prototype.m,Dn.prototype.close=Dn.prototype.close,DC=function(){return new ll},CC=function(){return Qo()},RC=ir,tv={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$t.NO_ERROR=0,$t.TIMEOUT=8,$t.HTTP_ERROR=6,wp=$t,vi.COMPLETE="complete",SC=vi,Od.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",Gt.prototype.listen=Gt.prototype.K,ph=Od,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,AC=Je}).apply(typeof rp<"u"?rp:typeof self<"u"?self:typeof window<"u"?window:{});const HI="@firebase/firestore",GI="4.7.10";/**
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
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
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
 */let Uu="11.5.0";/**
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
 */const ca=new Tm("@firebase/firestore");function ql(){return ca.logLevel}function l4(n){ca.setLogLevel(n)}function re(n,...e){if(ca.logLevel<=Be.DEBUG){const t=e.map(_E);ca.debug(`Firestore (${Uu}): ${n}`,...t)}}function Vt(n,...e){if(ca.logLevel<=Be.ERROR){const t=e.map(_E);ca.error(`Firestore (${Uu}): ${n}`,...t)}}function di(n,...e){if(ca.logLevel<=Be.WARN){const t=e.map(_E);ca.warn(`Firestore (${Uu}): ${n}`,...t)}}function _E(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function me(n="Unexpected state"){const e=`FIRESTORE (${Uu}) INTERNAL ASSERTION FAILED: `+n;throw Vt(e),new Error(e)}function ye(n,e){n||me()}function u4(n,e){n||me()}function de(n,e){return n}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class xC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class c4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class h4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class d4{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let o=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new yn,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const p=o;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new yn)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new xC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new cn(e)}}class f4{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class p4{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new f4(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $I{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m4{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ft(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0);const r=o=>{o.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const a=o=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new $I(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string"),this.R=t.token,new $I(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function g4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function yE(){return new TextEncoder}/**
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
 */class PC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=g4(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<t&&(r+=e.charAt(a[o]%62))}return r}}function Se(n,e){return n<e?-1:n>e?1:0}function nv(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Se(r,a);{const o=yE(),u=_4(o.encode(KI(n,t)),o.encode(KI(e,t)));return u!==0?u:Se(r,a)}}t+=r>65535?2:1}return Se(n.length,e.length)}function KI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function _4(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Se(n[t],e[t]);return Se(n.length,e.length)}function hu(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function NC(n){return n+"\0"}/**
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
 */const QI=-62135596800,WI=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*WI);return new gt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<QI)throw new te(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/WI}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-QI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new gt(0,0))}static max(){return new Ee(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const YI="__name__";class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&me(),r===void 0?r=e.length-t:r>e.length-t&&me(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=Xr.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Se(e.length,t.length)}static compareSegments(e,t){const r=Xr.isNumericId(e),a=Xr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Xr.extractNumericId(e).compare(Xr.extractNumericId(t)):nv(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ra.fromString(e.substring(4,e.length-2))}}class ze extends Xr{construct(e,t,r){return new ze(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new ze(t)}static emptyPath(){return new ze([])}}const y4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Xr{construct(e,t,r){return new pt(e,t,r)}static isValidIdentifier(e){return y4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===YI}static keyField(){return new pt([YI])}static fromServerFormat(e){const t=[];let r="",a=0;const o=()=>{if(r.length===0)throw new te(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new te(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new te(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(r+=d,a++):(o(),a++)}if(o(),u)throw new te(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(t)}static emptyPath(){return new pt([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(ze.fromString(e))}static fromName(e){return new ce(ze.fromString(e).popFirst(5))}static empty(){return new ce(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new ze(e.slice()))}}/**
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
 */const du=-1;class Kp{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function rv(n){return n.fields.find(e=>e.kind===2)}function oo(n){return n.fields.filter(e=>e.kind!==2)}Kp.UNKNOWN_ID=-1;class bp{constructor(e,t){this.fieldPath=e,this.kind=t}}class Fh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Fh(0,nr.min())}}function OC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Ee.fromTimestamp(r===1e9?new gt(t+1,0):new gt(t,r));return new nr(a,ce.empty(),e)}function kC(n){return new nr(n.readTime,n.key,du)}class nr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nr(Ee.min(),ce.empty(),du)}static max(){return new nr(Ee.max(),ce.empty(),du)}}function vE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Se(n.largestBatchId,e.largestBatchId))}/**
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
 */const VC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wa(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==VC)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,r)=>{t(e)})}static reject(e){return new q((t,r)=>{r(e)})}static waitFor(e){return new q((t,r)=>{let a=0,o=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++o,u&&o===a&&t()},p=>r(p))}),u=!0,o===a&&t()})}static or(e){let t=q.resolve(!1);for(const r of e)t=t.next(a=>a?q.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,o)=>{r.push(t.call(this,a,o))}),this.waitFor(r)}static mapArray(e,t){return new q((r,a)=>{const o=e.length,u=new Array(o);let d=0;for(let p=0;p<o;p++){const m=p;t(e[m]).next(y=>{u[m]=y,++d,d===o&&r(u)},y=>a(y))}})}static doWhile(e,t){return new q((r,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):r()};o()})}}/**
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
 */const Jn="SimpleDb";class Om{static open(e,t,r,a){try{return new Om(t,e.transaction(a,r))}catch(o){throw new Ih(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new yn,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Ih(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const a=EE(r.target.error);this.m.reject(new Ih(e,a))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(re(Jn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new E4(t)}}class oi{static delete(e){return re(Jn,"Removing database:",e),co(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!kh())return!1;if(oi.v())return!0;const e=wt(),t=oi.C(e),r=0<t&&t<10,a=LC(e),o=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.O=r,oi.C(wt())===12.2&&Vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(re(Jn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=o=>{const u=o.target.result;t(u)},a.onblocked=()=>{r(new Ih(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=o=>{const u=o.target.error;u.name==="VersionError"?r(new te(Q.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new te(Q.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new Ih(e,u))},a.onupgradeneeded=o=>{re(Jn,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;this.O.B(u,a.transaction,o.oldVersion,this.version).next(()=>{re(Jn,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.N(e);const d=Om.open(this.db,e,o?"readonly":"readwrite",r),p=a(d).next(m=>(d.S(),m)).catch(m=>(d.abort(m),q.reject(m))).toPromise();return p.catch(()=>{}),await d.p,p}catch(d){const p=d,m=p.name!=="FirebaseError"&&u<3;if(re(Jn,"Transaction failed with error:",p.message,"Retrying:",m),this.close(),!m)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function LC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class v4{constructor(e){this.q=e,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.U=e}delete(){return co(this.q.delete())}}class Ih extends te{constructor(e,t){super(Q.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ba(n){return n.name==="IndexedDbTransactionError"}class E4{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(re(Jn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(re(Jn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),co(r)}add(e){return re(Jn,"ADD",this.store.name,e,e),co(this.store.add(e))}get(e){return co(this.store.get(e)).next(t=>(t===void 0&&(t=null),re(Jn,"GET",this.store.name,e,t),t))}delete(e){return re(Jn,"DELETE",this.store.name,e),co(this.store.delete(e))}count(){return re(Jn,"COUNT",this.store.name),co(this.store.count())}G(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const o=a.getAll(r.range);return new q((u,d)=>{o.onerror=p=>{d(p.target.error)},o.onsuccess=p=>{u(p.target.result)}})}{const o=this.cursor(r),u=[];return this.j(o,(d,p)=>{u.push(p)}).next(()=>u)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new q((a,o)=>{r.onerror=u=>{o(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}J(e,t){re(Jn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const a=this.cursor(r);return this.j(a,(o,u,d)=>d.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.j(a,t)}X(e){const t=this.cursor({});return new q((r,a)=>{t.onerror=o=>{const u=EE(o.target.error);a(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():r()}):r()}})}j(e,t){const r=[];return new q((a,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const p=new v4(d),m=t(d.primaryKey,d.value,p);if(m instanceof q){const y=m.catch(v=>(p.done(),q.reject(v)));r.push(y)}p.isDone?a():p.K===null?d.continue():d.continue(p.K)}}).next(()=>q.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function co(n){return new q((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=EE(r.target.error);t(a)}})}let XI=!1;function EE(n){const e=oi.C(wt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return XI||(XI=!0,setTimeout(()=>{throw r},0)),r}}return n}const Ah="IndexBackfiller";class T4{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){re(Ah,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();re(Ah,`Documents written: ${t}`)}catch(t){ba(t)?re(Ah,"Ignoring IndexedDB error during index backfill: ",t):await wa(t)}await this.te(6e4)})}}class w4{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let a=t,o=!0;return q.doWhile(()=>o===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return re(Ah,`Processing collection: ${u}`),this.ie(e,u,a).next(d=>{a-=d,r.add(u)});o=!1})).next(()=>t-a)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.se(a,o)).next(d=>(re(Ah,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}se(e,t){let r=e;return t.changes.forEach((a,o)=>{const u=kC(o);vE(u,r)>0&&(r=u)}),new nr(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class jn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}jn.ae=-1;/**
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
 */const ia=-1;function md(n){return n==null}function jh(n){return n===0&&1/n==-1/0}function UC(n){return typeof n=="number"&&Number.isInteger(n)&&!jh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Qp="";function An(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ZI(e)),e=b4(n.get(t),e);return ZI(e)}function b4(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case Qp:t+="";break;default:t+=o}}return t}function ZI(n){return n+Qp+""}function si(n){const e=n.length;if(ye(e>=2),e===2)return ye(n.charAt(0)===Qp&&n.charAt(1)===""),ze.emptyPath();const t=e-2,r=[];let a="";for(let o=0;o<e;){const u=n.indexOf(Qp,o);switch((u<0||u>t)&&me(),n.charAt(u+1)){case"":const d=n.substring(o,u);let p;a.length===0?p=d:(a+=d,p=a,a=""),r.push(p);break;case"":a+=n.substring(o,u),a+="\0";break;case"":a+=n.substring(o,u+1);break;default:me()}o=u+2}return new ze(r)}/**
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
 */const lo="remoteDocuments",gd="owner",Ll="owner",qh="mutationQueues",I4="userId",xr="mutations",JI="batchId",yo="userMutationsIndex",eA=["userId","batchId"];/**
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
 */function Ip(n,e){return[n,An(e)]}function BC(n,e,t){return[n,An(e),t]}const A4={},fu="documentMutations",Wp="remoteDocumentsV14",S4=["prefixPath","collectionGroup","readTime","documentId"],Ap="documentKeyIndex",R4=["prefixPath","collectionGroup","documentId"],zC="collectionGroupIndex",C4=["collectionGroup","readTime","prefixPath","documentId"],Hh="remoteDocumentGlobal",iv="remoteDocumentGlobalKey",pu="targets",FC="queryTargetsIndex",D4=["canonicalId","targetId"],mu="targetDocuments",x4=["targetId","path"],TE="documentTargetsIndex",P4=["path","targetId"],Yp="targetGlobalKey",Ao="targetGlobal",Gh="collectionParents",N4=["collectionId","parent"],gu="clientMetadata",O4="clientId",km="bundles",k4="bundleId",Vm="namedQueries",V4="name",wE="indexConfiguration",M4="indexId",sv="collectionGroupIndex",L4="collectionGroup",Xp="indexState",U4=["indexId","uid"],jC="sequenceNumberIndex",B4=["uid","sequenceNumber"],Zp="indexEntries",z4=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],qC="documentKeyIndex",F4=["indexId","uid","orderedDocumentKey"],Mm="documentOverlays",j4=["userId","collectionPath","documentId"],av="collectionPathOverlayIndex",q4=["userId","collectionPath","largestBatchId"],HC="collectionGroupOverlayIndex",H4=["userId","collectionGroup","largestBatchId"],bE="globals",G4="name",GC=[qh,xr,fu,lo,pu,gd,Ao,mu,gu,Hh,Gh,km,Vm],$4=[...GC,Mm],$C=[qh,xr,fu,Wp,pu,gd,Ao,mu,gu,Hh,Gh,km,Vm,Mm],KC=$C,IE=[...KC,wE,Xp,Zp],K4=IE,Q4=[...IE,bE];/**
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
 */class ov extends MC{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Zt(n,e){const t=de(n);return oi.M(t.ue,e)}/**
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
 */function tA(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ia(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function QC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class lt{constructor(e,t){this.comparator=e,this.root=t||gn.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ip(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ip(this.root,e,this.comparator,!1)}getReverseIterator(){return new ip(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ip(this.root,e,this.comparator,!0)}}class ip{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,t,r,a,o){this.key=e,this.value=t,this.color=r??gn.RED,this.left=a??gn.EMPTY,this.right=o??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,o){return new gn(e??this.key,t??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const o=r(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,r),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,r,a,o){return this}insert(e,t,r){return new gn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nA(this.data.getIterator())}getIteratorFrom(e){return new nA(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class nA{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ul(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class qn{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new qn([])}unionWith(e){let t=new nt(pt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hu(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class WC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function W4(){return typeof atob<"u"}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new WC("Invalid base64 string: "+o):o}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const Y4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xi(n){if(ye(!!n),typeof n=="string"){let e=0;const t=Y4.exec(n);if(ye(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
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
 */const YC="server_timestamp",XC="__type__",ZC="__previous_value__",JC="__local_write_time__";function Lm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[XC])===null||t===void 0?void 0:t.stringValue)===YC}function Um(n){const e=n.mapValue.fields[ZC];return Lm(e)?Um(e):e}function $h(n){const e=Xi(n.mapValue.fields[JC].timestampValue);return new gt(e.seconds,e.nanos)}/**
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
 */class X4{constructor(e,t,r,a,o,u,d,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m}}const lv="(default)";class ha{constructor(e,t){this.projectId=e,this.database=t||lv}static empty(){return new ha("","")}get isDefaultDatabase(){return this.database===lv}isEqual(e){return e instanceof ha&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const AE="__type__",e1="__max__",Js={mapValue:{fields:{__type__:{stringValue:e1}}}},SE="__vector__",_u="value",Sp={nullValue:"NULL_VALUE"};function da(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lm(n)?4:t1(n)?9007199254740991:Bm(n)?10:11:me()}function fi(n,e){if(n===e)return!0;const t=da(n);if(t!==da(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $h(n).isEqual($h(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Xi(a.timestampValue),d=Xi(o.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Zi(a.bytesValue).isEqual(Zi(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return dt(a.geoPointValue.latitude)===dt(o.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return dt(a.integerValue)===dt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=dt(a.doubleValue),d=dt(o.doubleValue);return u===d?jh(u)===jh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return hu(n.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},d=o.mapValue.fields||{};if(tA(u)!==tA(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!fi(u[p],d[p])))return!1;return!0}(n,e);default:return me()}}function Kh(n,e){return(n.values||[]).find(t=>fi(t,e))!==void 0}function fa(n,e){if(n===e)return 0;const t=da(n),r=da(e);if(t!==r)return Se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(n.booleanValue,e.booleanValue);case 2:return function(o,u){const d=dt(o.integerValue||o.doubleValue),p=dt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return rA(n.timestampValue,e.timestampValue);case 4:return rA($h(n),$h(e));case 5:return nv(n.stringValue,e.stringValue);case 6:return function(o,u){const d=Zi(o),p=Zi(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const d=o.split("/"),p=u.split("/");for(let m=0;m<d.length&&m<p.length;m++){const y=Se(d[m],p[m]);if(y!==0)return y}return Se(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const d=Se(dt(o.latitude),dt(u.latitude));return d!==0?d:Se(dt(o.longitude),dt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return iA(n.arrayValue,e.arrayValue);case 10:return function(o,u){var d,p,m,y;const v=o.fields||{},w=u.fields||{},S=(d=v[_u])===null||d===void 0?void 0:d.arrayValue,x=(p=w[_u])===null||p===void 0?void 0:p.arrayValue,k=Se(((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0,((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0);return k!==0?k:iA(S,x)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===Js.mapValue&&u===Js.mapValue)return 0;if(o===Js.mapValue)return 1;if(u===Js.mapValue)return-1;const d=o.fields||{},p=Object.keys(d),m=u.fields||{},y=Object.keys(m);p.sort(),y.sort();for(let v=0;v<p.length&&v<y.length;++v){const w=nv(p[v],y[v]);if(w!==0)return w;const S=fa(d[p[v]],m[y[v]]);if(S!==0)return S}return Se(p.length,y.length)}(n.mapValue,e.mapValue);default:throw me()}}function rA(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Se(n,e);const t=Xi(n),r=Xi(e),a=Se(t.seconds,r.seconds);return a!==0?a:Se(t.nanos,r.nanos)}function iA(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const o=fa(t[a],r[a]);if(o)return o}return Se(t.length,r.length)}function yu(n){return uv(n)}function uv(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const o of t.values||[])a?a=!1:r+=",",r+=uv(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of r)o?o=!1:a+=",",a+=`${u}:${uv(t.fields[u])}`;return a+"}"}(n.mapValue):me()}function Rp(n){switch(da(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Um(n);return e?16+Rp(e):16;case 5:return 2*n.stringValue.length;case 6:return Zi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+Rp(o),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return Ia(r.fields,(o,u)=>{a+=o.length+Rp(u)}),a}(n.mapValue);default:throw me()}}function Do(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function cv(n){return!!n&&"integerValue"in n}function Qh(n){return!!n&&"arrayValue"in n}function sA(n){return!!n&&"nullValue"in n}function aA(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cp(n){return!!n&&"mapValue"in n}function Bm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[AE])===null||t===void 0?void 0:t.stringValue)===SE}function Sh(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ia(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Sh(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sh(n.arrayValue.values[t]);return e}return Object.assign({},n)}function t1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===e1}const n1={mapValue:{fields:{[AE]:{stringValue:SE},[_u]:{arrayValue:{}}}}};function Z4(n){return"nullValue"in n?Sp:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Do(ha.empty(),ce.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Bm(n)?n1:{mapValue:{}}:me()}function J4(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Do(ha.empty(),ce.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?n1:"mapValue"in n?Bm(n)?{mapValue:{}}:Js:me()}function oA(n,e){const t=fa(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function lA(n,e){const t=fa(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Cp(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sh(t)}setAll(e){let t=pt.emptyPath(),r={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=d.popLast()}u?r[d.lastSegment()]=Sh(u):a.push(d.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,a)}delete(e){const t=this.field(e.popLast());Cp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Cp(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){Ia(t,(a,o)=>e[a]=o);for(const a of r)delete e[a]}clone(){return new _n(Sh(this.value))}}function r1(n){const e=[];return Ia(n.fields,(t,r)=>{const a=new pt([t]);if(Cp(r)){const o=r1(r.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new qn(e)}/**
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
 */class ht{constructor(e,t,r,a,o,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=o,this.data=u,this.documentState=d}static newInvalidDocument(e){return new ht(e,0,Ee.min(),Ee.min(),Ee.min(),_n.empty(),0)}static newFoundDocument(e,t,r,a){return new ht(e,1,t,Ee.min(),r,a,0)}static newNoDocument(e,t){return new ht(e,2,t,Ee.min(),Ee.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,Ee.min(),Ee.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pa{constructor(e,t){this.position=e,this.inclusive=t}}function uA(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?r=ce.comparator(ce.fromName(u.referenceValue),t.key):r=fa(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function cA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wh{constructor(e,t="asc"){this.field=e,this.dir=t}}function eB(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class i1{}class Fe extends i1{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new tB(e,t,r):t==="array-contains"?new iB(e,r):t==="in"?new c1(e,r):t==="not-in"?new sB(e,r):t==="array-contains-any"?new aB(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new nB(e,r):new rB(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fa(t,this.value)):t!==null&&da(this.value)===da(t)&&this.matchesComparison(fa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends i1{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tt(e,t)}matches(e){return vu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function vu(n){return n.op==="and"}function hv(n){return n.op==="or"}function RE(n){return s1(n)&&vu(n)}function s1(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function dv(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+yu(n.value);if(RE(n))return n.filters.map(e=>dv(e)).join(",");{const e=n.filters.map(t=>dv(t)).join(",");return`${n.op}(${e})`}}function a1(n,e){return n instanceof Fe?function(r,a){return a instanceof Fe&&r.op===a.op&&r.field.isEqual(a.field)&&fi(r.value,a.value)}(n,e):n instanceof tt?function(r,a){return a instanceof tt&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,u,d)=>o&&a1(u,a.filters[d]),!0):!1}(n,e):void me()}function o1(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function l1(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${yu(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(l1).join(" ,")+"}"}(n):"Filter"}class tB extends Fe{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class nB extends Fe{constructor(e,t){super(e,"in",t),this.keys=u1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rB extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=u1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function u1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ce.fromName(r.referenceValue))}class iB extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qh(t)&&Kh(t.arrayValue,this.value)}}class c1 extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Kh(this.value.arrayValue,t)}}class sB extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Kh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Kh(this.value.arrayValue,t)}}class aB extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Kh(this.value.arrayValue,r))}}/**
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
 */class oB{constructor(e,t=null,r=[],a=[],o=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=u,this.endAt=d,this.le=null}}function fv(n,e=null,t=[],r=[],a=null,o=null,u=null){return new oB(n,e,t,r,a,o,u)}function xo(n){const e=de(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>dv(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),md(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>yu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>yu(r)).join(",")),e.le=t}return e.le}function _d(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!eB(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!a1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cA(n.startAt,e.startAt)&&cA(n.endAt,e.endAt)}function Jp(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function em(n,e){return n.filters.filter(t=>t instanceof Fe&&t.field.isEqual(e))}function hA(n,e,t){let r=Sp,a=!0;for(const o of em(n,e)){let u=Sp,d=!0;switch(o.op){case"<":case"<=":u=Z4(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,d=!1;break;case"!=":case"not-in":u=Sp}oA({value:r,inclusive:a},{value:u,inclusive:d})<0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];oA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function dA(n,e,t){let r=Js,a=!0;for(const o of em(n,e)){let u=Js,d=!0;switch(o.op){case">=":case">":u=J4(o.value),d=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,d=!1;break;case"!=":case"not-in":u=Js}lA({value:r,inclusive:a},{value:u,inclusive:d})>0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];lA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
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
 */class ns{constructor(e,t=null,r=[],a=[],o=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=u,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function h1(n,e,t,r,a,o,u,d){return new ns(n,e,t,r,a,o,u,d)}function Bu(n){return new ns(n)}function fA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function CE(n){return n.collectionGroup!==null}function eu(n){const e=de(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new nt(pt.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new Wh(o,r))}),t.has(pt.keyField().canonicalString())||e.he.push(new Wh(pt.keyField(),r))}return e.he}function Vn(n){const e=de(n);return e.Pe||(e.Pe=lB(e,eu(n))),e.Pe}function lB(n,e){if(n.limitType==="F")return fv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Wh(a.field,o)});const t=n.endAt?new pa(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pa(n.startAt.position,n.startAt.inclusive):null;return fv(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function pv(n,e){const t=n.filters.concat([e]);return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function tm(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yd(n,e){return _d(Vn(n),Vn(e))&&n.limitType===e.limitType}function d1(n){return`${xo(Vn(n))}|lt:${n.limitType}`}function Hl(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>l1(a)).join(", ")}]`),md(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>yu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>yu(a)).join(",")),`Target(${r})`}(Vn(n))}; limitType=${n.limitType})`}function vd(n,e){return e.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ce.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,a){for(const o of eu(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,d,p){const m=uA(u,d,p);return u.inclusive?m<=0:m<0}(r.startAt,eu(r),a)||r.endAt&&!function(u,d,p){const m=uA(u,d,p);return u.inclusive?m>=0:m>0}(r.endAt,eu(r),a))}(n,e)}function f1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function p1(n){return(e,t)=>{let r=!1;for(const a of eu(n)){const o=uB(a,e,t);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function uB(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):function(o,u,d){const p=u.data.field(o),m=d.data.field(o);return p!==null&&m!==null?fa(p,m):me()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
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
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ia(this.inner,(t,r)=>{for(const[a,o]of r)e(a,o)})}isEmpty(){return QC(this.inner)}size(){return this.innerSize}}/**
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
 */const cB=new lt(ce.comparator);function Hn(){return cB}const m1=new lt(ce.comparator);function mh(...n){let e=m1;for(const t of n)e=e.insert(t.key,t);return e}function g1(n){let e=m1;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ai(){return Rh()}function _1(){return Rh()}function Rh(){return new rs(n=>n.toString(),(n,e)=>n.isEqual(e))}const hB=new lt(ce.comparator),dB=new nt(ce.comparator);function Pe(...n){let e=dB;for(const t of n)e=e.add(t);return e}const fB=new nt(Se);function DE(){return fB}/**
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
 */function xE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jh(e)?"-0":e}}function y1(n){return{integerValue:""+n}}function v1(n,e){return UC(e)?y1(e):xE(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class zm{constructor(){this._=void 0}}function pB(n,e,t){return n instanceof Eu?function(a,o){const u={fields:{[XC]:{stringValue:YC},[JC]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&Lm(o)&&(o=Um(o)),o&&(u.fields[ZC]=o),{mapValue:u}}(t,e):n instanceof Po?T1(n,e):n instanceof No?w1(n,e):function(a,o){const u=E1(a,o),d=pA(u)+pA(a.Ie);return cv(u)&&cv(a.Ie)?y1(d):xE(a.serializer,d)}(n,e)}function mB(n,e,t){return n instanceof Po?T1(n,e):n instanceof No?w1(n,e):t}function E1(n,e){return n instanceof Tu?function(r){return cv(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Eu extends zm{}class Po extends zm{constructor(e){super(),this.elements=e}}function T1(n,e){const t=b1(e);for(const r of n.elements)t.some(a=>fi(a,r))||t.push(r);return{arrayValue:{values:t}}}class No extends zm{constructor(e){super(),this.elements=e}}function w1(n,e){let t=b1(e);for(const r of n.elements)t=t.filter(a=>!fi(a,r));return{arrayValue:{values:t}}}class Tu extends zm{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function pA(n){return dt(n.integerValue||n.doubleValue)}function b1(n){return Qh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ed{constructor(e,t){this.field=e,this.transform=t}}function gB(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof Po&&a instanceof Po||r instanceof No&&a instanceof No?hu(r.elements,a.elements,fi):r instanceof Tu&&a instanceof Tu?fi(r.Ie,a.Ie):r instanceof Eu&&a instanceof Eu}(n.transform,e.transform)}class _B{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dp(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fm{}function I1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Fu(n.key,mt.none()):new zu(n.key,n.data,mt.none());{const t=n.data,r=_n.empty();let a=new nt(pt.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),a=a.add(o)}return new is(n.key,r,new qn(a.toArray()),mt.none())}}function yB(n,e,t){n instanceof zu?function(a,o,u){const d=a.value.clone(),p=gA(a.fieldTransforms,o,u.transformResults);d.setAll(p),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof is?function(a,o,u){if(!Dp(a.precondition,o))return void o.convertToUnknownDocument(u.version);const d=gA(a.fieldTransforms,o,u.transformResults),p=o.data;p.setAll(A1(a)),p.setAll(d),o.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Ch(n,e,t,r){return n instanceof zu?function(o,u,d,p){if(!Dp(o.precondition,u))return d;const m=o.value.clone(),y=_A(o.fieldTransforms,p,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof is?function(o,u,d,p){if(!Dp(o.precondition,u))return d;const m=_A(o.fieldTransforms,p,u),y=u.data;return y.setAll(A1(o)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,u,d){return Dp(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function vB(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),o=E1(r.transform,a||null);o!=null&&(t===null&&(t=_n.empty()),t.set(r.field,o))}return t||null}function mA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&hu(r,a,(o,u)=>gB(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class zu extends Fm{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class is extends Fm{constructor(e,t,r,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function A1(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function gA(n,e,t){const r=new Map;ye(n.length===t.length);for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,d=e.data.field(o.field);r.set(o.field,mB(u,d,t[a]))}return r}function _A(n,e,t){const r=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);r.set(a.field,pB(o,u,e))}return r}class Fu extends Fm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PE extends Fm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class NE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&yB(o,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ch(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ch(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=_1();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let d=this.applyToLocalView(u,o.mutatedFields);d=t.has(a.key)?null:d;const p=I1(u,d);p!==null&&r.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&hu(this.mutations,e.mutations,(t,r)=>mA(t,r))&&hu(this.baseMutations,e.baseMutations,(t,r)=>mA(t,r))}}class OE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){ye(e.mutations.length===r.length);let a=function(){return hB}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,r[u].version);return new OE(e,t,r,a)}}/**
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
 */class kE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class EB{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var jt,$e;function S1(n){switch(n){case Q.OK:return me();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return me()}}function R1(n){if(n===void 0)return Vt("GRPC error has no .code"),Q.UNKNOWN;switch(n){case jt.OK:return Q.OK;case jt.CANCELLED:return Q.CANCELLED;case jt.UNKNOWN:return Q.UNKNOWN;case jt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case jt.INTERNAL:return Q.INTERNAL;case jt.UNAVAILABLE:return Q.UNAVAILABLE;case jt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case jt.NOT_FOUND:return Q.NOT_FOUND;case jt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case jt.ABORTED:return Q.ABORTED;case jt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case jt.DATA_LOSS:return Q.DATA_LOSS;default:return me()}}($e=jt||(jt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const TB=new ra([4294967295,4294967295],0);function yA(n){const e=yE().encode(n),t=new IC;return t.update(e),new Uint8Array(t.digest())}function vA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ra([t,r],0),new ra([a,o],0)]}class VE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new gh(`Invalid padding: ${t}`);if(r<0)throw new gh(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gh(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new gh(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ra.fromNumber(this.Ee)}Ae(e,t,r){let a=e.add(t.multiply(ra.fromNumber(r)));return a.compare(TB)===1&&(a=new ra([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=yA(e),[r,a]=vA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);if(!this.Re(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new VE(o,a,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.Ee===0)return;const t=yA(e),[r,a]=vA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class gh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Td{constructor(e,t,r,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,wd.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Td(Ee.min(),a,new lt(Se),Hn(),Pe())}}class wd{constructor(e,t,r,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new wd(r,t,Pe(),Pe(),Pe())}}/**
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
 */class xp{constructor(e,t,r,a){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=a}}class C1{constructor(e,t){this.targetId=e,this.ge=t}}class D1{constructor(e,t,r=Dt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class EA{constructor(){this.pe=0,this.ye=TA(),this.we=Dt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Pe(),t=Pe(),r=Pe();return this.ye.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:me()}}),new wd(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=TA()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ye(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class wB{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Hn(),this.$e=sp(),this.Ue=sp(),this.Ke=new lt(Se)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:me()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,r=e.ge.count,a=this.Xe(t);if(a){const o=a.target;if(Jp(o))if(r===0){const u=new ce(o.path);this.ze(t,u,ht.newNoDocument(u,Ee.min()))}else ye(r===1);else{const u=this.et(t);if(u!==r){const d=this.tt(e),p=d?this.nt(d,e,u):1;if(p!==0){this.Ye(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=t;let u,d;try{u=Zi(r).toUint8Array()}catch(p){if(p instanceof WC)return di("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new VE(u,a,o)}catch(p){return di(p instanceof gh?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let a=0;return r.forEach(o=>{const u=this.ke.it(),d=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,o,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((o,u)=>{const d=this.Xe(u);if(d){if(o.current&&Jp(d.target)){const p=new ce(d.target.path);this._t(p).has(u)||this.ut(u,p)||this.ze(u,p,ht.newNoDocument(p,e))}o.ve&&(t.set(u,o.Fe()),o.Me())}});let r=Pe();this.Ue.forEach((o,u)=>{let d=!0;u.forEachWhile(p=>{const m=this.Xe(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(e));const a=new Td(e,t,this.Ke,this.Qe,r);return this.Qe=Hn(),this.$e=sp(),this.Ue=sp(),this.Ke=new lt(Se),a}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new EA,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new nt(Se),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new nt(Se),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new EA),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function sp(){return new lt(ce.comparator)}function TA(){return new lt(ce.comparator)}const bB={asc:"ASCENDING",desc:"DESCENDING"},IB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AB={and:"AND",or:"OR"};class SB{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mv(n,e){return n.useProto3Json||md(e)?e:{value:e}}function wu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function x1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function RB(n,e){return wu(n,e.toTimestamp())}function Mt(n){return ye(!!n),Ee.fromTimestamp(function(t){const r=Xi(t);return new gt(r.seconds,r.nanos)}(n))}function ME(n,e){return gv(n,e).canonicalString()}function gv(n,e){const t=function(a){return new ze(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function P1(n){const e=ze.fromString(n);return ye(F1(e)),e}function Yh(n,e){return ME(n.databaseId,e.path)}function li(n,e){const t=P1(e);if(t.get(1)!==n.databaseId.projectId)throw new te(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(k1(t))}function N1(n,e){return ME(n.databaseId,e)}function O1(n){const e=P1(n);return e.length===4?ze.emptyPath():k1(e)}function _v(n){return new ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function k1(n){return ye(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wA(n,e,t){return{name:Yh(n,e),fields:t.value.mapValue.fields}}function V1(n,e,t){const r=li(n,e.name),a=Mt(e.updateTime),o=e.createTime?Mt(e.createTime):Ee.min(),u=new _n({mapValue:{fields:e.fields}}),d=ht.newFoundDocument(r,a,o,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function CB(n,e){return"found"in e?function(r,a){ye(!!a.found),a.found.name,a.found.updateTime;const o=li(r,a.found.name),u=Mt(a.found.updateTime),d=a.found.createTime?Mt(a.found.createTime):Ee.min(),p=new _n({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(o,u,d,p)}(n,e):"missing"in e?function(r,a){ye(!!a.missing),ye(!!a.readTime);const o=li(r,a.missing),u=Mt(a.readTime);return ht.newNoDocument(o,u)}(n,e):me()}function DB(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(m,y){return m.useProto3Json?(ye(y===void 0||typeof y=="string"),Dt.fromBase64String(y||"")):(ye(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Dt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const y=m.code===void 0?Q.UNKNOWN:R1(m.code);return new te(y,m.message||"")}(u);t=new D1(r,a,o,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=li(n,r.document.name),o=Mt(r.document.updateTime),u=r.document.createTime?Mt(r.document.createTime):Ee.min(),d=new _n({mapValue:{fields:r.document.fields}}),p=ht.newFoundDocument(a,o,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];t=new xp(m,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=li(n,r.document),o=r.readTime?Mt(r.readTime):Ee.min(),u=ht.newNoDocument(a,o),d=r.removedTargetIds||[];t=new xp([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=li(n,r.document),o=r.removedTargetIds||[];t=new xp([],o,a,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,u=new EB(a,o),d=r.targetId;t=new C1(d,u)}}return t}function Xh(n,e){let t;if(e instanceof zu)t={update:wA(n,e.key,e.value)};else if(e instanceof Fu)t={delete:Yh(n,e.key)};else if(e instanceof is)t={update:wA(n,e.key,e.data),updateMask:VB(e.fieldMask)};else{if(!(e instanceof PE))return me();t={verify:Yh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const d=u.transform;if(d instanceof Eu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Po)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof No)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Tu)return{fieldPath:u.field.canonicalString(),increment:d.Ie};throw me()}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:RB(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:me()}(n,e.precondition)),t}function yv(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?mt.updateTime(Mt(o.updateTime)):o.exists!==void 0?mt.exists(o.exists):mt.none()}(e.currentDocument):mt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let p=null;if("setToServerValue"in d)ye(d.setToServerValue==="REQUEST_TIME"),p=new Eu;else if("appendMissingElements"in d){const y=d.appendMissingElements.values||[];p=new Po(y)}else if("removeAllFromArray"in d){const y=d.removeAllFromArray.values||[];p=new No(y)}else"increment"in d?p=new Tu(u,d.increment):me();const m=pt.fromServerFormat(d.fieldPath);return new Ed(m,p)}(n,a)):[];if(e.update){e.update.name;const a=li(n,e.update.name),o=new _n({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(p){const m=p.fieldPaths||[];return new qn(m.map(y=>pt.fromServerFormat(y)))}(e.updateMask);return new is(a,o,u,t,r)}return new zu(a,o,t,r)}if(e.delete){const a=li(n,e.delete);return new Fu(a,t)}if(e.verify){const a=li(n,e.verify);return new PE(a,t)}return me()}function xB(n,e){return n&&n.length>0?(ye(e!==void 0),n.map(t=>function(a,o){let u=a.updateTime?Mt(a.updateTime):Mt(o);return u.isEqual(Ee.min())&&(u=Mt(o)),new _B(u,a.transformResults||[])}(t,e))):[]}function M1(n,e){return{documents:[N1(n,e.path)]}}function L1(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=N1(n,a);const o=function(m){if(m.length!==0)return z1(tt.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(m){if(m.length!==0)return m.map(y=>function(w){return{field:Gl(w.field),direction:NB(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=mv(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function U1(n){let e=O1(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){ye(r===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(v){const w=B1(v);return w instanceof tt&&RE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(x){return new Wh($l(x.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,md(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(v){const w=!!v.before,S=v.values||[];return new pa(S,w)}(t.startAt));let m=null;return t.endAt&&(m=function(v){const w=!v.before,S=v.values||[];return new pa(S,w)}(t.endAt)),h1(e,a,u,o,d,"F",p,m)}function PB(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function B1(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=$l(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=$l(t.unaryFilter.field);return Fe.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=$l(t.unaryFilter.field);return Fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=$l(t.unaryFilter.field);return Fe.create(u,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(n):n.fieldFilter!==void 0?function(t){return Fe.create($l(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>B1(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return me()}}(t.compositeFilter.op))}(n):me()}function NB(n){return bB[n]}function OB(n){return IB[n]}function kB(n){return AB[n]}function Gl(n){return{fieldPath:n.canonicalString()}}function $l(n){return pt.fromServerFormat(n.fieldPath)}function z1(n){return n instanceof Fe?function(t){if(t.op==="=="){if(aA(t.value))return{unaryFilter:{field:Gl(t.field),op:"IS_NAN"}};if(sA(t.value))return{unaryFilter:{field:Gl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(aA(t.value))return{unaryFilter:{field:Gl(t.field),op:"IS_NOT_NAN"}};if(sA(t.value))return{unaryFilter:{field:Gl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gl(t.field),op:OB(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(a=>z1(a));return r.length===1?r[0]:{compositeFilter:{op:kB(t.op),filters:r}}}(n):me()}function VB(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function F1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Gi{constructor(e,t,r,a,o=Ee.min(),u=Ee.min(),d=Dt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class j1{constructor(e){this.Tt=e}}function MB(n,e){let t;if(e.document)t=V1(n.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ce.fromSegments(e.noDocument.path),a=ko(e.noDocument.readTime);t=ht.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return me();{const r=ce.fromSegments(e.unknownDocument.path),a=ko(e.unknownDocument.version);t=ht.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const o=new gt(a[0],a[1]);return Ee.fromTimestamp(o)}(e.readTime)),t}function bA(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:nm(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,u){return{name:Yh(o,u.key),fields:u.data.value.mapValue.fields,updateTime:wu(o,u.version.toTimestamp()),createTime:wu(o,u.createTime.toTimestamp())}}(n.Tt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Oo(e.version)};else{if(!e.isUnknownDocument())return me();r.unknownDocument={path:t.path.toArray(),version:Oo(e.version)}}return r}function nm(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Oo(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ko(n){const e=new gt(n.seconds,n.nanoseconds);return Ee.fromTimestamp(e)}function ho(n,e){const t=(e.baseMutations||[]).map(o=>yv(n.Tt,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const d=e.mutations[o+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>yv(n.Tt,o)),a=gt.fromMillis(e.localWriteTimeMs);return new NE(e.batchId,a,t,r)}function _h(n){const e=ko(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ko(n.lastLimboFreeSnapshotVersion):Ee.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){return ye(o.documents.length===1),Vn(Bu(O1(o.documents[0])))}(n.query):function(o){return Vn(U1(o))}(n.query),new Gi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Dt.fromBase64String(n.resumeToken))}function q1(n,e){const t=Oo(e.snapshotVersion),r=Oo(e.lastLimboFreeSnapshotVersion);let a;a=Jp(e.target)?M1(n.Tt,e.target):L1(n.Tt,e.target).ht;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:xo(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function LE(n){const e=U1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?tm(e,e.limit,"L"):e}function Ry(n,e){return new kE(e.largestBatchId,yv(n.Tt,e.overlayMutation))}function IA(n,e){const t=e.path.lastSegment();return[n,An(e.path.popLast()),t]}function AA(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Oo(r.readTime),documentKey:An(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class LB{getBundleMetadata(e,t){return SA(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:ko(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return SA(e).put(function(a){return{bundleId:a.id,createTime:Oo(Mt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return RA(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:LE(o.bundledQuery),readTime:ko(o.readTime)}}(r)})}saveNamedQuery(e,t){return RA(e).put(function(a){return{name:a.name,readTime:Oo(Mt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function SA(n){return Zt(n,km)}function RA(n){return Zt(n,Vm)}/**
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
 */class jm{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const r=t.uid||"";return new jm(e,r)}getOverlay(e,t){return sh(e).get(IA(this.userId,t)).next(r=>r?Ry(this.serializer,r):null)}getOverlays(e,t){const r=ai();return q.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((o,u)=>{const d=new kE(t,u);a.push(this.Et(e,d))}),q.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(An(u.getCollectionPath())));const o=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);o.push(sh(e).J(av,d))}),q.waitFor(o)}getOverlaysForCollection(e,t,r){const a=ai(),o=An(t),u=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return sh(e).G(av,u).next(d=>{for(const p of d){const m=Ry(this.serializer,p);a.set(m.getKey(),m)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const o=ai();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return sh(e).Z({index:HC,range:d},(p,m,y)=>{const v=Ry(this.serializer,m);o.size()<a||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):y.done()}).next(()=>o)}Et(e,t){return sh(e).put(function(a,o,u){const[d,p,m]=IA(o,u.mutation.key);return{userId:o,collectionPath:p,documentId:m,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Xh(a.Tt,u.mutation)}}(this.serializer,this.userId,t))}}function sh(n){return Zt(n,Mm)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class UB{dt(e){return Zt(e,bE)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Dt.fromUint8Array(r):Dt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class fo{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(dt(e.integerValue));else if("doubleValue"in e){const r=dt(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),jh(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),typeof r=="string"&&(r=Xi(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(Zi(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?t1(e)?this.ft(t,Number.MAX_SAFE_INTEGER):Bm(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):me()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const r=e.fields||{};this.ft(t,55);for(const a of Object.keys(r))this.wt(a,t),this.Rt(r[a],t)}vt(e,t){var r,a;const o=e.fields||{};this.ft(t,53);const u=_u,d=((a=(r=o[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.ft(t,15),t.gt(dt(d)),this.wt(u,t),this.Rt(o[u],t)}Ft(e,t){const r=e.values||[];this.ft(t,50);for(const a of r)this.Rt(a,t)}Dt(e,t){this.ft(t,37),ce.fromName(e).path.forEach(r=>{this.ft(t,60),this.Mt(r,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}fo.xt=new fo;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=255;function BB(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function CA(n){const e=64-function(r){let a=0;for(let o=0;o<8;++o){const u=BB(255&r[o]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class zB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Nt(r);else if(r<2048)this.Nt(960|r>>>6),this.Nt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r);else{const a=t.codePointAt(0);this.Nt(240|a>>>18),this.Nt(128|63&a>>>12),this.Nt(128|63&a>>>6),this.Nt(128|63&a)}}this.Bt()}$t(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.kt(r);else if(r<2048)this.kt(960|r>>>6),this.kt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r);else{const a=t.codePointAt(0);this.kt(240|a>>>18),this.kt(128|63&a>>>12),this.kt(128|63&a>>>6),this.kt(128|63&a)}}this.qt()}Ut(e){const t=this.Kt(e),r=CA(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}Gt(e){const t=this.Kt(e),r=CA(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}zt(){this.jt(Bl),this.jt(255)}Ht(){this.Jt(Bl),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Bl?(this.jt(Bl),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Bl?(this.Jt(Bl),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class FB{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Ut(e)}Vt(){this.Zt.zt()}}class jB{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class ah{constructor(){this.Zt=new zB,this.Xt=new FB(this.Zt),this.en=new jB(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
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
 */class po{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new po(this.indexId,this.documentKey,this.arrayValue,r)}}function Hs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=DA(n.arrayValue,e.arrayValue),t!==0?t:(t=DA(n.directionalValue,e.directionalValue),t!==0?t:ce.comparator(n.documentKey,e.documentKey)))}function DA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class xA{constructor(e){this.rn=new nt((t,r)=>pt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const r=t;r.isInequality()?this.rn=this.rn.add(r):this._n.push(r)}}get an(){return this.rn.size>1}un(e){if(ye(e.collectionGroup===this.collectionId),this.an)return!1;const t=rv(e);if(t!==void 0&&!this.cn(t))return!1;const r=oo(e);let a=new Set,o=0,u=0;for(;o<r.length&&this.cn(r[o]);++o)a=a.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.rn.size>0){const d=this.rn.getIterator().getNext();if(!a.has(d.field.canonicalString())){const p=r[o];if(!this.ln(d,p)||!this.hn(this.sn[u++],p))return!1}++o}for(;o<r.length;++o){const d=r[o];if(u>=this.sn.length||!this.hn(this.sn[u++],d))return!1}return!0}Pn(){if(this.an)return null;let e=new nt(pt.comparator);const t=[];for(const r of this._n)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new bp(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new bp(r.field,0))}for(const r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new bp(r.field,r.dir==="asc"?0:1)));return new Kp(Kp.UNKNOWN_ID,this.collectionId,t,Fh.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function H1(n){var e,t;if(ye(n instanceof Fe||n instanceof tt),n instanceof Fe){if(n instanceof c1){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>Fe.create(n.field,"==",o)))||[];return tt.create(a,"or")}return n}const r=n.filters.map(a=>H1(a));return tt.create(r,n.op)}function qB(n){if(n.getFilters().length===0)return[];const e=Tv(H1(n));return ye(G1(e)),vv(e)||Ev(e)?[e]:e.getFilters()}function vv(n){return n instanceof Fe}function Ev(n){return n instanceof tt&&RE(n)}function G1(n){return vv(n)||Ev(n)||function(t){if(t instanceof tt&&hv(t)){for(const r of t.getFilters())if(!vv(r)&&!Ev(r))return!1;return!0}return!1}(n)}function Tv(n){if(ye(n instanceof Fe||n instanceof tt),n instanceof Fe)return n;if(n.filters.length===1)return Tv(n.filters[0]);const e=n.filters.map(r=>Tv(r));let t=tt.create(e,n.op);return t=rm(t),G1(t)?t:(ye(t instanceof tt),ye(vu(t)),ye(t.filters.length>1),t.filters.reduce((r,a)=>UE(r,a)))}function UE(n,e){let t;return ye(n instanceof Fe||n instanceof tt),ye(e instanceof Fe||e instanceof tt),t=n instanceof Fe?e instanceof Fe?function(a,o){return tt.create([a,o],"and")}(n,e):PA(n,e):e instanceof Fe?PA(e,n):function(a,o){if(ye(a.filters.length>0&&o.filters.length>0),vu(a)&&vu(o))return o1(a,o.getFilters());const u=hv(a)?a:o,d=hv(a)?o:a,p=u.filters.map(m=>UE(m,d));return tt.create(p,"or")}(n,e),rm(t)}function PA(n,e){if(vu(e))return o1(e,n.getFilters());{const t=e.filters.map(r=>UE(n,r));return tt.create(t,"or")}}function rm(n){if(ye(n instanceof Fe||n instanceof tt),n instanceof Fe)return n;const e=n.getFilters();if(e.length===1)return rm(e[0]);if(s1(n))return n;const t=e.map(a=>rm(a)),r=[];return t.forEach(a=>{a instanceof Fe?r.push(a):a instanceof tt&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:tt.create(r,n.op)}/**
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
 */class HB{constructor(){this.Tn=new BE}addToCollectionParentIndex(e,t){return this.Tn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(nr.min())}updateCollectionGroup(e,t,r){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class BE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new nt(ze.comparator),o=!a.has(r);return this.index[t]=a.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new nt(ze.comparator)).toArray()}}/**
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
 */const NA="IndexedDbIndexManager",ap=new Uint8Array(0);class GB{constructor(e,t){this.databaseId=t,this.In=new BE,this.En=new rs(r=>xo(r),(r,a)=>_d(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const o={collectionId:r,parent:An(a)};return OA(e).put(o)}return q.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[NC(t),""],!1,!0);return OA(e).G(a).next(o=>{for(const u of o){if(u.collectionId!==t)break;r.push(si(u.parent))}return r})}addFieldIndex(e,t){const r=oh(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(p=>[p.fieldPath.canonicalString(),p.kind])}}(t);delete a.indexId;const o=r.add(a);if(t.indexState){const u=Fl(e);return o.next(d=>{u.put(AA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=oh(e),a=Fl(e),o=zl(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=oh(e),r=zl(e),a=Fl(e);return t.J().next(()=>r.J()).next(()=>a.J())}createTargetIndexes(e,t){return q.forEach(this.dn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const o=new xA(r).Pn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=zl(e);let a=!0;const o=new Map;return q.forEach(this.dn(t),u=>this.An(e,u).next(d=>{a&&(a=!!d),o.set(u,d)})).next(()=>{if(a){let u=Pe();const d=[];return q.forEach(o,(p,m)=>{re(NA,`Using index ${function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(p)} to execute ${xo(t)}`);const y=function(K,oe){const ae=rv(oe);if(ae===void 0)return null;for(const le of em(K,ae.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(m,p),v=function(K,oe){const ae=new Map;for(const le of oo(oe))for(const D of em(K,le.fieldPath))switch(D.op){case"==":case"in":ae.set(le.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return ae.set(le.fieldPath.canonicalString(),D.value),Array.from(ae.values())}return null}(m,p),w=function(K,oe){const ae=[];let le=!0;for(const D of oo(oe)){const R=D.kind===0?hA(K,D.fieldPath,K.startAt):dA(K,D.fieldPath,K.startAt);ae.push(R.value),le&&(le=R.inclusive)}return new pa(ae,le)}(m,p),S=function(K,oe){const ae=[];let le=!0;for(const D of oo(oe)){const R=D.kind===0?dA(K,D.fieldPath,K.endAt):hA(K,D.fieldPath,K.endAt);ae.push(R.value),le&&(le=R.inclusive)}return new pa(ae,le)}(m,p),x=this.Rn(p,m,w),k=this.Rn(p,m,S),L=this.Vn(p,m,v),H=this.mn(p.indexId,y,x,w.inclusive,k,S.inclusive,L);return q.forEach(H,X=>r.H(X,t.limit).next(K=>{K.forEach(oe=>{const ae=ce.fromSegments(oe.documentKey);u.has(ae)||(u=u.add(ae),d.push(ae))})}))}).next(()=>d)}return q.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=qB(tt.create(e.filters,"and")).map(r=>fv(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,r,a,o,u,d){const p=(t!=null?t.length:1)*Math.max(r.length,o.length),m=p/(t!=null?t.length:1),y=[];for(let v=0;v<p;++v){const w=t?this.fn(t[v/m]):ap,S=this.gn(e,w,r[v%m],a),x=this.pn(e,w,o[v%m],u),k=d.map(L=>this.gn(e,w,L,!0));y.push(...this.createRange(S,x,k))}return y}gn(e,t,r,a){const o=new po(e,ce.empty(),t,r);return a?o:o.nn()}pn(e,t,r,a){const o=new po(e,ce.empty(),t,r);return a?o.nn():o}An(e,t){const r=new xA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(o=>{let u=null;for(const d of o)r.un(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let r=2;const a=this.dn(t);return q.forEach(a,o=>this.An(e,o).next(u=>{u?r!==0&&u.fields.length<function(p){let m=new nt(pt.comparator),y=!1;for(const v of p.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?y=!0:m=m.add(w.field));for(const v of p.orderBy)v.field.isKeyField()||(m=m.add(v.field));return m.size+(y?1:0)}(o)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}yn(e,t){const r=new ah;for(const a of oo(e)){const o=t.data.field(a.fieldPath);if(o==null)return null;const u=r.tn(a.kind);fo.xt.At(o,u)}return r.Yt()}fn(e){const t=new ah;return fo.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const r=new ah;return fo.xt.At(Do(this.databaseId,t),r.tn(function(o){const u=oo(o);return u.length===0?0:u[u.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(r===null)return[];let a=[];a.push(new ah);let o=0;for(const u of oo(e)){const d=r[o++];for(const p of a)if(this.Sn(t,u.fieldPath)&&Qh(d))a=this.bn(a,u,d);else{const m=p.tn(u.kind);fo.xt.At(d,m)}}return this.Dn(a)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){const a=[...e],o=[];for(const u of r.arrayValue.values||[])for(const d of a){const p=new ah;p.seed(d.Yt()),fo.xt.At(u,p.tn(t.kind)),o.push(p)}return o}Sn(e,t){return!!e.filters.find(r=>r instanceof Fe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=oh(e),a=Fl(e);return(t?r.G(sv,IDBKeyRange.bound(t,t)):r.G()).next(o=>{const u=[];return q.forEach(o,d=>a.get([d.indexId,this.uid]).next(p=>{u.push(function(y,v){const w=v?new Fh(v.sequenceNumber,new nr(ko(v.readTime),new ce(si(v.documentKey)),v.largestBatchId)):Fh.empty(),S=y.fields.map(([x,k])=>new bp(pt.fromServerFormat(x),k));return new Kp(y.indexId,y.collectionGroup,S,w)}(d,p))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const o=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return o!==0?o:Se(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=oh(e),o=Fl(e);return this.vn(e).next(u=>a.G(sv,IDBKeyRange.bound(t,t)).next(d=>q.forEach(d,p=>o.put(AA(p.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return q.forEach(t,(a,o)=>{const u=r.get(a.collectionGroup);return(u?q.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(r.set(a.collectionGroup,d),q.forEach(d,p=>this.Cn(e,a,p).next(m=>{const y=this.Fn(o,p);return m.isEqual(y)?q.resolve():this.Mn(e,o,p,m,y)}))))})}xn(e,t,r,a){return zl(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,a){return zl(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){const a=zl(e);let o=new nt(Hs);return a.Z({index:qC,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(u,d)=>{o=o.add(new po(r.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>o)}Fn(e,t){let r=new nt(Hs);const a=this.yn(t,e);if(a==null)return r;const o=rv(t);if(o!=null){const u=e.data.field(o.fieldPath);if(Qh(u))for(const d of u.arrayValue.values||[])r=r.add(new po(t.indexId,e.key,this.fn(d),a))}else r=r.add(new po(t.indexId,e.key,ap,a));return r}Mn(e,t,r,a,o){re(NA,"Updating index entries for document '%s'",t.key);const u=[];return function(p,m,y,v,w){const S=p.getIterator(),x=m.getIterator();let k=Ul(S),L=Ul(x);for(;k||L;){let H=!1,X=!1;if(k&&L){const K=y(k,L);K<0?X=!0:K>0&&(H=!0)}else k!=null?X=!0:H=!0;H?(v(L),L=Ul(x)):X?(w(k),k=Ul(S)):(k=Ul(S),L=Ul(x))}}(a,o,Hs,d=>{u.push(this.xn(e,t,r,d))},d=>{u.push(this.On(e,t,r,d))}),q.waitFor(u)}vn(e){let t=1;return Fl(e).Z({index:jC,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,o)=>{o.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,d)=>Hs(u,d)).filter((u,d,p)=>!d||Hs(u,p[d-1])!==0);const a=[];a.push(e);for(const u of r){const d=Hs(u,e),p=Hs(u,t);if(d===0)a[0]=e.nn();else if(d>0&&p<0)a.push(u),a.push(u.nn());else if(p>0)break}a.push(t);const o=[];for(let u=0;u<a.length;u+=2){if(this.Nn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,ap,[]],p=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,ap,[]];o.push(IDBKeyRange.bound(d,p))}return o}Nn(e,t){return Hs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(kA)}getMinOffset(e,t){return q.mapArray(this.dn(t),r=>this.An(e,r).next(a=>a||me())).next(kA)}}function OA(n){return Zt(n,Gh)}function zl(n){return Zt(n,Zp)}function oh(n){return Zt(n,wE)}function Fl(n){return Zt(n,Xp)}function kA(n){ye(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;vE(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new nr(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const VA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$1=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function K1(n,e,t){const r=n.store(xr),a=n.store(fu),o=[],u=IDBKeyRange.only(t.batchId);let d=0;const p=r.Z({range:u},(y,v,w)=>(d++,w.delete()));o.push(p.next(()=>{ye(d===1)}));const m=[];for(const y of t.mutations){const v=BC(e,y.key.path,t.batchId);o.push(a.delete(v)),m.push(y.key)}return q.waitFor(o).next(()=>m)}function im(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw me();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In($1,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class qm{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.Bn={}}static It(e,t,r,a){ye(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new qm(o,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).Z({index:yo,range:r},(a,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const o=Kl(e),u=Gs(e);return u.add({}).next(d=>{ye(typeof d=="number");const p=new NE(d,t,r,a),m=function(S,x,k){const L=k.baseMutations.map(X=>Xh(S.Tt,X)),H=k.mutations.map(X=>Xh(S.Tt,X));return{userId:x,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:L,mutations:H}}(this.serializer,this.userId,p),y=[];let v=new nt((w,S)=>Se(w.canonicalString(),S.canonicalString()));for(const w of a){const S=BC(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),y.push(u.put(m)),y.push(o.put(S,A4))}return v.forEach(w=>{y.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.Bn[d]=p.keys()}),q.waitFor(y).next(()=>p)})}lookupMutationBatch(e,t){return Gs(e).get(t).next(r=>r?(ye(r.userId===this.userId),ho(this.serializer,r)):null)}Ln(e,t){return this.Bn[t]?q.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.Bn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return Gs(e).Z({index:yo,range:a},(u,d,p)=>{d.userId===this.userId&&(ye(d.batchId>=r),o=ho(this.serializer,d)),p.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=ia;return Gs(e).Z({index:yo,range:t,reverse:!0},(a,o,u)=>{r=o.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,ia],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).G(yo,t).next(r=>r.map(a=>ho(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ip(this.userId,t.path),a=IDBKeyRange.lowerBound(r),o=[];return Kl(e).Z({range:a},(u,d,p)=>{const[m,y,v]=u,w=si(y);if(m===this.userId&&t.path.isEqual(w))return Gs(e).get(v).next(S=>{if(!S)throw me();ye(S.userId===this.userId),o.push(ho(this.serializer,S))});p.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Se);const a=[];return t.forEach(o=>{const u=Ip(this.userId,o.path),d=IDBKeyRange.lowerBound(u),p=Kl(e).Z({range:d},(m,y,v)=>{const[w,S,x]=m,k=si(S);w===this.userId&&o.path.isEqual(k)?r=r.add(x):v.done()});a.push(p)}),q.waitFor(a).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,o=Ip(this.userId,r),u=IDBKeyRange.lowerBound(o);let d=new nt(Se);return Kl(e).Z({range:u},(p,m,y)=>{const[v,w,S]=p,x=si(w);v===this.userId&&r.isPrefixOf(x)?x.length===a&&(d=d.add(S)):y.done()}).next(()=>this.kn(e,d))}kn(e,t){const r=[],a=[];return t.forEach(o=>{a.push(Gs(e).get(o).next(u=>{if(u===null)throw me();ye(u.userId===this.userId),r.push(ho(this.serializer,u))}))}),q.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return K1(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),q.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return q.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return Kl(e).Z({range:r},(o,u,d)=>{if(o[0]===this.userId){const p=si(o[1]);a.push(p)}else d.done()}).next(()=>{ye(a.length===0)})})}containsKey(e,t){return Q1(e,this.userId,t)}Qn(e){return W1(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:ia,lastStreamToken:""})}}function Q1(n,e,t){const r=Ip(e,t.path),a=r[1],o=IDBKeyRange.lowerBound(r);let u=!1;return Kl(n).Z({range:o,Y:!0},(d,p,m)=>{const[y,v,w]=d;y===e&&v===a&&(u=!0),m.done()}).next(()=>u)}function Gs(n){return Zt(n,xr)}function Kl(n){return Zt(n,fu)}function W1(n){return Zt(n,qh)}/**
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
 */class Vo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Vo(0)}static Kn(){return new Vo(-1)}}/**
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
 */class $B{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const r=new Vo(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>Ee.fromTimestamp(new gt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Gn(e,a)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>jl(e).delete(t.targetId)).next(()=>this.Wn(e)).next(r=>(ye(r.targetCount>0),r.targetCount-=1,this.Gn(e,r)))}removeTargets(e,t,r){let a=0;const o=[];return jl(e).Z((u,d)=>{const p=_h(d);p.sequenceNumber<=t&&r.get(p.targetId)===null&&(a++,o.push(this.removeTargetData(e,p)))}).next(()=>q.waitFor(o)).next(()=>a)}forEachTarget(e,t){return jl(e).Z((r,a)=>{const o=_h(a);t(o)})}Wn(e){return MA(e).get(Yp).next(t=>(ye(t!==null),t))}Gn(e,t){return MA(e).put(Yp,t)}zn(e,t){return jl(e).put(q1(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=xo(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return jl(e).Z({range:a,index:FC},(u,d,p)=>{const m=_h(d);_d(t,m.target)&&(o=m,p.done())}).next(()=>o)}addMatchingKeys(e,t,r){const a=[],o=Xs(e);return t.forEach(u=>{const d=An(u.path);a.push(o.put({targetId:r,path:d})),a.push(this.referenceDelegate.addReference(e,r,u))}),q.waitFor(a)}removeMatchingKeys(e,t,r){const a=Xs(e);return q.forEach(t,o=>{const u=An(o.path);return q.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=Xs(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Xs(e);let o=Pe();return a.Z({range:r,Y:!0},(u,d,p)=>{const m=si(u[1]),y=new ce(m);o=o.add(y)}).next(()=>o)}containsKey(e,t){const r=An(t.path),a=IDBKeyRange.bound([r],[NC(r)],!1,!0);let o=0;return Xs(e).Z({index:TE,Y:!0,range:a},([u,d],p,m)=>{u!==0&&(o++,m.done())}).next(()=>o>0)}lt(e,t){return jl(e).get(t).next(r=>r?_h(r):null)}}function jl(n){return Zt(n,pu)}function MA(n){return Zt(n,Ao)}function Xs(n){return Zt(n,mu)}/**
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
 */const LA="LruGarbageCollector",KB=1048576;function UA([n,e],[t,r]){const a=Se(n,t);return a===0?Se(e,r):a}class QB{constructor(e){this.Hn=e,this.buffer=new nt(UA),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();UA(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Y1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){re(LA,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ba(t)?re(LA,"Ignoring IndexedDB error during garbage collection: ",t):await wa(t)}await this.er(3e5)})}}class WB{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return q.resolve(jn.ae);const r=new QB(t);return this.tr.forEachTarget(e,a=>r.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>r.Zn(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(VA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),VA):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,a,o,u,d,p,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,d=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(m=Date.now(),ql()<=Be.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${o} targets in `+(p-d)+`ms
	Removed ${v} documents in `+(m-p)+`ms
Total Duration: ${m-y}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:v})))}}function X1(n,e){return new WB(n,e)}/**
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
 */class YB{constructor(e,t){this.db=e,this.garbageCollector=X1(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(r,a)=>t(a))}addReference(e,t,r){return op(e,r)}removeReference(e,t,r){return op(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return op(e,t)}ar(e,t){return function(a,o){let u=!1;return W1(a).X(d=>Q1(a,d,o).next(p=>(p&&(u=!0),q.resolve(!p)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let o=0;return this._r(e,(u,d)=>{if(d<=t){const p=this.ar(e,u).next(m=>{if(!m)return o++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Ee.min()),Xs(e).delete(function(v){return[0,An(v.path)]}(u))))});a.push(p)}}).next(()=>q.waitFor(a)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return op(e,t)}_r(e,t){const r=Xs(e);let a,o=jn.ae;return r.Z({index:TE},([u,d],{path:p,sequenceNumber:m})=>{u===0?(o!==jn.ae&&t(new ce(si(a)),o),o=m,a=p):o=jn.ae}).next(()=>{o!==jn.ae&&t(new ce(si(a)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function op(n,e){return Xs(n).put(function(r,a){return{targetId:0,path:An(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
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
 */class Z1{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XB{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return so(e).put(r)}removeEntry(e,t,r){return so(e).delete(function(o,u){const d=o.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],nm(u),d[d.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=ht.newInvalidDocument(t);return so(e).Z({index:Ap,range:IDBKeyRange.only(lh(t))},(a,o)=>{r=this.cr(t,o)}).next(()=>r)}lr(e,t){let r={size:0,document:ht.newInvalidDocument(t)};return so(e).Z({index:Ap,range:IDBKeyRange.only(lh(t))},(a,o)=>{r={document:this.cr(t,o),size:im(o)}}).next(()=>r)}getEntries(e,t){let r=Hn();return this.hr(e,t,(a,o)=>{const u=this.cr(a,o);r=r.insert(a,u)}).next(()=>r)}Pr(e,t){let r=Hn(),a=new lt(ce.comparator);return this.hr(e,t,(o,u)=>{const d=this.cr(o,u);r=r.insert(o,d),a=a.insert(o,im(u))}).next(()=>({documents:r,Tr:a}))}hr(e,t,r){if(t.isEmpty())return q.resolve();let a=new nt(FA);t.forEach(p=>a=a.add(p));const o=IDBKeyRange.bound(lh(a.first()),lh(a.last())),u=a.getIterator();let d=u.getNext();return so(e).Z({index:Ap,range:o},(p,m,y)=>{const v=ce.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;d&&FA(d,v)<0;)r(d,null),d=u.getNext();d&&d.isEqual(v)&&(r(d,m),d=u.hasNext()?u.getNext():null),d?y.W(lh(d)):y.done()}).next(()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,o){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),nm(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],p=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return so(e).G(IDBKeyRange.bound(d,p,!0)).next(m=>{o==null||o.incrementDocumentReadCount(m.length);let y=Hn();for(const v of m){const w=this.cr(ce.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(vd(t,w)||a.has(w.key))&&(y=y.insert(w.key,w))}return y})}getAllFromCollectionGroup(e,t,r,a){let o=Hn();const u=zA(t,r),d=zA(t,nr.max());return so(e).Z({index:zC,range:IDBKeyRange.bound(u,d,!0)},(p,m,y)=>{const v=this.cr(ce.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);o=o.insert(v.key,v),o.size===a&&y.done()}).next(()=>o)}newChangeBuffer(e){return new ZB(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return BA(e).get(iv).next(t=>(ye(!!t),t))}ur(e,t){return BA(e).put(iv,t)}cr(e,t){if(t){const r=MB(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Ee.min())))return r}return ht.newInvalidDocument(e)}}function J1(n){return new XB(n)}class ZB extends Z1{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new rs(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new nt((o,u)=>Se(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const d=this.Er.get(o);if(t.push(this.Ir.removeEntry(e,o,d.readTime)),u.isValidDocument()){const p=bA(this.Ir.serializer,u);a=a.add(o.path.popLast());const m=im(p);r+=m-d.size,t.push(this.Ir.addEntry(e,o,p))}else if(r-=d.size,this.trackRemovals){const p=bA(this.Ir.serializer,u.convertToNoDocument(Ee.min()));t.push(this.Ir.addEntry(e,o,p))}}),a.forEach(o=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.Ir.updateMetadata(e,r)),q.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(r=>(this.Er.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:r,Tr:a})=>(a.forEach((o,u)=>{this.Er.set(o,{size:u,readTime:r.get(o).readTime})}),r))}}function BA(n){return Zt(n,Hh)}function so(n){return Zt(n,Wp)}function lh(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function zA(n,e){const t=e.documentKey.path.toArray();return[n,nm(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function FA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(a=Se(t[o],r[o]),a)return a;return a=Se(t.length,r.length),a||(a=Se(t[t.length-2],r[r.length-2]),a||Se(t[t.length-1],r[r.length-1]))}/**
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
 *//**
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
 */class JB{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class eD{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Ch(r.mutation,a,qn.empty(),gt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Pe()){const a=ai();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(o=>{let u=mh();return o.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=ai();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Pe()))}populateOverlays(e,t,r){const a=[];return r.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,a){let o=Hn();const u=Rh(),d=function(){return Rh()}();return t.forEach((p,m)=>{const y=r.get(m.key);a.has(m.key)&&(y===void 0||y.mutation instanceof is)?o=o.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),Ch(y.mutation,m,y.mutation.getFieldMask(),gt.now())):u.set(m.key,qn.empty())}),this.recalculateAndSaveOverlays(e,o).next(p=>(p.forEach((m,y)=>u.set(m,y)),t.forEach((m,y)=>{var v;return d.set(m,new JB(y,(v=u.get(m))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const r=Rh();let a=new lt((u,d)=>u-d),o=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let y=r.get(p)||qn.empty();y=d.applyToLocalView(m,y),r.set(p,y);const v=(a.get(d.batchId)||Pe()).add(p);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,y=p.value,v=_1();y.forEach(w=>{if(!o.has(w)){const S=I1(t.get(w),r.get(w));S!==null&&v.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,v))}return q.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):CE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-o.size):q.resolve(ai());let d=du,p=o;return u.next(m=>q.forEach(m,(y,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),o.get(y)?q.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{p=p.insert(y,w)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,p,m,Pe())).next(y=>({batchId:d,changes:g1(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(r=>{let a=mh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const o=t.collectionGroup;let u=mh();return this.indexManager.getCollectionParents(e,o).next(d=>q.forEach(d,p=>{const m=function(v,w){return new ns(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,p.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,a).next(y=>{y.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,a))).next(u=>{o.forEach((p,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,ht.newInvalidDocument(y)))});let d=mh();return u.forEach((p,m)=>{const y=o.get(p);y!==void 0&&Ch(y.mutation,m,qn.empty(),gt.now()),vd(t,m)&&(d=d.insert(p,m))}),d})}}/**
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
 */class ez{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return q.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Mt(a.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:LE(a.bundledQuery),readTime:Mt(a.readTime)}}(t)),q.resolve()}}/**
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
 */class tz{constructor(){this.overlays=new lt(ce.comparator),this.Rr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ai();return q.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,o)=>{this.Et(e,t,o)}),q.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Rr.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),q.resolve()}getOverlaysForCollection(e,t,r){const a=ai(),o=t.length+1,u=new ce(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&p.largestBatchId>r&&a.set(p.getKey(),p)}return q.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let o=new lt((m,y)=>m-y);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let y=o.get(m.largestBatchId);y===null&&(y=ai(),o=o.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=ai(),p=o.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,y)=>d.set(m,y)),!(d.size()>=a)););return q.resolve(d)}Et(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(r.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new kE(t,r));let o=this.Rr.get(t);o===void 0&&(o=Pe(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nz{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class zE{constructor(){this.Vr=new nt(ln.mr),this.gr=new nt(ln.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new ln(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new ln(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ce(new ze([])),r=new ln(t,e),a=new ln(t,e+1),o=[];return this.gr.forEachInRange([r,a],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ce(new ze([])),r=new ln(t,e),a=new ln(t,e+1);let o=Pe();return this.gr.forEachInRange([r,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new ln(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ln{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ce.comparator(e.key,t.key)||Se(e.Cr,t.Cr)}static pr(e,t){return Se(e.Cr,t.Cr)||ce.comparator(e.key,t.key)}}/**
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
 */class rz{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(ln.mr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new NE(o,t,r,a);this.mutationQueue.push(u);for(const d of a)this.Mr=this.Mr.add(new ln(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return q.resolve(u)}lookupMutationBatch(e,t){return q.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Nr(r),o=a<0?0:a;return q.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?ia:this.Fr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ln(t,0),a=new ln(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,a],u=>{const d=this.Or(u.Cr);o.push(d)}),q.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Se);return t.forEach(a=>{const o=new ln(a,0),u=new ln(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],d=>{r=r.add(d.Cr)})}),q.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let o=r;ce.isDocumentKey(o)||(o=o.child(""));const u=new ln(new ce(o),0);let d=new nt(Se);return this.Mr.forEachWhile(p=>{const m=p.key.path;return!!r.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Cr)),!0)},u),q.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(r=>{const a=this.Or(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ye(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return q.forEach(t.mutations,a=>{const o=new ln(a.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new ln(t,0),a=this.Mr.firstAfterOrEqual(r);return q.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iz{constructor(e){this.kr=e,this.docs=function(){return new lt(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),o=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return q.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=Hn();return t.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():ht.newInvalidDocument(a))}),q.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let o=Hn();const u=t.path,d=new ce(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:y}}=p.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||vE(kC(y),r)<=0||(a.has(y.key)||vd(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return q.resolve(o)}getAllFromCollectionGroup(e,t,r,a){me()}qr(e,t){return q.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new sz(this)}getSize(e){return q.resolve(this.size)}}class sz extends Z1{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(r)}),q.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class az{constructor(e){this.persistence=e,this.Qr=new rs(t=>xo(t),_d),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.$r=0,this.Ur=new zE,this.targetCount=0,this.Kr=Vo.Un()}forEachTarget(e,t){return this.Qr.forEach((r,a)=>t(a)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),q.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Vo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.zn(t),q.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,r){let a=0;const o=[];return this.Qr.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),q.waitFor(o).next(()=>a)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return q.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),q.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),q.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return q.resolve(r)}containsKey(e,t){return q.resolve(this.Ur.containsKey(t))}}/**
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
 */class FE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new jn(0),this.zr=!1,this.zr=!0,this.jr=new nz,this.referenceDelegate=e(this),this.Hr=new az(this),this.indexManager=new HB,this.remoteDocumentCache=function(a){return new iz(a)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new j1(t),this.Yr=new ez(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tz,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new rz(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const a=new oz(this.Gr.next());return this.referenceDelegate.Zr(),r(a).next(o=>this.referenceDelegate.Xr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}ei(e,t){return q.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class oz extends MC{constructor(e){super(),this.currentSequenceNumber=e}}class Hm{constructor(e){this.persistence=e,this.ti=new zE,this.ni=null}static ri(e){return new Hm(e)}get ii(){if(this.ni)return this.ni;throw me()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),q.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),q.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.ii,r=>{const a=ce.fromPath(r);return this.si(e,a).next(o=>{o||t.removeEntry(a,Ee.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return q.or([()=>q.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class sm{constructor(e,t){this.persistence=e,this.oi=new rs(r=>An(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=X1(this,t)}static ri(e,t){return new sm(e,t)}Zr(){}Xr(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return q.forEach(this.oi,(r,a)=>this.ar(e,r,a).next(o=>o?q.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(d=>{d||(r++,o.removeEntry(u,Ee.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),q.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rp(e.data.value)),t}ar(e,t,r){return q.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return q.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lz{constructor(e){this.serializer=e}B(e,t,r,a){const o=new Om("createOrUpgrade",t);r<1&&a>=1&&(function(p){p.createObjectStore(gd)}(e),function(p){p.createObjectStore(qh,{keyPath:I4}),p.createObjectStore(xr,{keyPath:JI,autoIncrement:!0}).createIndex(yo,eA,{unique:!0}),p.createObjectStore(fu)}(e),jA(e),function(p){p.createObjectStore(lo)}(e));let u=q.resolve();return r<3&&a>=3&&(r!==0&&(function(p){p.deleteObjectStore(mu),p.deleteObjectStore(pu),p.deleteObjectStore(Ao)}(e),jA(e)),u=u.next(()=>function(p){const m=p.store(Ao),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ee.min().toTimestamp(),targetCount:0};return m.put(Yp,y)}(o))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(p,m){return m.store(xr).G().next(v=>{p.deleteObjectStore(xr),p.createObjectStore(xr,{keyPath:JI,autoIncrement:!0}).createIndex(yo,eA,{unique:!0});const w=m.store(xr),S=v.map(x=>w.put(x));return q.waitFor(S)})}(e,o))),u=u.next(()=>{(function(p){p.createObjectStore(gu,{keyPath:O4})})(e)})),r<5&&a>=5&&(u=u.next(()=>this._i(o))),r<6&&a>=6&&(u=u.next(()=>(function(p){p.createObjectStore(Hh)}(e),this.ai(o)))),r<7&&a>=7&&(u=u.next(()=>this.ui(o))),r<8&&a>=8&&(u=u.next(()=>this.ci(e,o))),r<9&&a>=9&&(u=u.next(()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.li(o))),r<11&&a>=11&&(u=u.next(()=>{(function(p){p.createObjectStore(km,{keyPath:k4})})(e),function(p){p.createObjectStore(Vm,{keyPath:V4})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(p){const m=p.createObjectStore(Mm,{keyPath:j4});m.createIndex(av,q4,{unique:!1}),m.createIndex(HC,H4,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(p){const m=p.createObjectStore(Wp,{keyPath:S4});m.createIndex(Ap,R4),m.createIndex(zC,C4)}(e)).next(()=>this.hi(e,o)).next(()=>e.deleteObjectStore(lo))),r<14&&a>=14&&(u=u.next(()=>this.Pi(e,o))),r<15&&a>=15&&(u=u.next(()=>function(p){p.createObjectStore(wE,{keyPath:M4,autoIncrement:!0}).createIndex(sv,L4,{unique:!1}),p.createObjectStore(Xp,{keyPath:U4}).createIndex(jC,B4,{unique:!1}),p.createObjectStore(Zp,{keyPath:z4}).createIndex(qC,F4,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore(Xp).clear()}).next(()=>{t.objectStore(Zp).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(p){p.createObjectStore(bE,{keyPath:G4})})(e)})),u}ai(e){let t=0;return e.store(lo).Z((r,a)=>{t+=im(a)}).next(()=>{const r={byteSize:t};return e.store(Hh).put(iv,r)})}_i(e){const t=e.store(qh),r=e.store(xr);return t.G().next(a=>q.forEach(a,o=>{const u=IDBKeyRange.bound([o.userId,ia],[o.userId,o.lastAcknowledgedBatchId]);return r.G(yo,u).next(d=>q.forEach(d,p=>{ye(p.userId===o.userId);const m=ho(this.serializer,p);return K1(e,o.userId,m).next(()=>{})}))}))}ui(e){const t=e.store(mu),r=e.store(lo);return e.store(Ao).get(Yp).next(a=>{const o=[];return r.Z((u,d)=>{const p=new ze(u),m=function(v){return[0,An(v)]}(p);o.push(t.get(m).next(y=>y?q.resolve():(v=>t.put({targetId:0,path:An(v),sequenceNumber:a.highestListenSequenceNumber}))(p)))}).next(()=>q.waitFor(o))})}ci(e,t){e.createObjectStore(Gh,{keyPath:N4});const r=t.store(Gh),a=new BE,o=u=>{if(a.add(u)){const d=u.lastSegment(),p=u.popLast();return r.put({collectionId:d,parent:An(p)})}};return t.store(lo).Z({Y:!0},(u,d)=>{const p=new ze(u);return o(p.popLast())}).next(()=>t.store(fu).Z({Y:!0},([u,d,p],m)=>{const y=si(d);return o(y.popLast())}))}li(e){const t=e.store(pu);return t.Z((r,a)=>{const o=_h(a),u=q1(this.serializer,o);return t.put(u)})}hi(e,t){const r=t.store(lo),a=[];return r.Z((o,u)=>{const d=t.store(Wp),p=function(v){return v.document?new ce(ze.fromString(v.document.name).popFirst(5)):v.noDocument?ce.fromSegments(v.noDocument.path):v.unknownDocument?ce.fromSegments(v.unknownDocument.path):me()}(u).path.toArray(),m={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(m))}).next(()=>q.waitFor(a))}Pi(e,t){const r=t.store(xr),a=J1(this.serializer),o=new FE(Hm.ri,this.serializer.Tt);return r.G().next(u=>{const d=new Map;return u.forEach(p=>{var m;let y=(m=d.get(p.userId))!==null&&m!==void 0?m:Pe();ho(this.serializer,p).keys().forEach(v=>y=y.add(v)),d.set(p.userId,y)}),q.forEach(d,(p,m)=>{const y=new cn(m),v=jm.It(this.serializer,y),w=o.getIndexManager(y),S=qm.It(y,this.serializer,w,o.referenceDelegate);return new eD(a,S,v,w).recalculateAndSaveOverlaysForDocumentKeys(new ov(t,jn.ae),p).next()})})}}function jA(n){n.createObjectStore(mu,{keyPath:x4}).createIndex(TE,P4,{unique:!0}),n.createObjectStore(pu,{keyPath:"targetId"}).createIndex(FC,D4,{unique:!0}),n.createObjectStore(Ao)}const $s="IndexedDbPersistence",Cy=18e5,Dy=5e3,xy="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",tD="main";class jE{constructor(e,t,r,a,o,u,d,p,m,y,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=o,this.window=u,this.document=d,this.Ii=m,this.Ei=y,this.di=v,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=w=>Promise.resolve(),!jE.D())throw new te(Q.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new YB(this,a),this.gi=t+tD,this.serializer=new j1(p),this.pi=new oi(this.gi,this.di,new lz(this.serializer)),this.jr=new UB,this.Hr=new $B(this.referenceDelegate,this.serializer),this.remoteDocumentCache=J1(this.serializer),this.Yr=new LB,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,y===!1&&Vt($s,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(Q.FAILED_PRECONDITION,xy);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new jn(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>lp(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(ba(e))return re($s,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return re($s,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return uh(e).get(Ll).next(t=>q.resolve(this.Ni(t)))}Bi(e){return lp(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,Cy)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Zt(t,gu);return r.G().next(a=>{const o=this.qi(a,Cy),u=a.filter(d=>o.indexOf(d)===-1);return q.forEach(u,d=>r.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?q.resolve(!0):uh(e).get(Ll).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Dy)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new te(Q.FAILED_PRECONDITION,xy);return!1}}return!(!this.networkEnabled||!this.inForeground)||lp(e).G().next(r=>this.qi(r,Dy).find(a=>{if(this.clientId!==a.clientId){const o=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(o||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&re($s,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[gd,gu],e=>{const t=new ov(e,jn.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(r=>this.ki(r.updateTimeMs,t)&&!this.$i(r.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>lp(e).G().next(t=>this.qi(t,Cy).map(r=>r.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return qm.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new GB(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return jm.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){re($s,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",o=function(p){return p===17?Q4:p===16?K4:p===15?IE:p===14?KC:p===13?$C:p===12?$4:p===11?GC:void me()}(this.di);let u;return this.pi.runTransaction(e,a,o,d=>(u=new ov(d,this.Gr?this.Gr.next():jn.ae),t==="readwrite-primary"?this.Fi(u).next(p=>!!p||this.Mi(u)).next(p=>{if(!p)throw Vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new te(Q.FAILED_PRECONDITION,VC);return r(u)}).next(p=>this.Oi(u).next(()=>p)):this.ji(u).next(()=>r(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}ji(e){return uh(e).get(Ll).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Dy)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(Q.FAILED_PRECONDITION,xy)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return uh(e).put(Ll,t)}static D(){return oi.D()}xi(e){const t=uh(e);return t.get(Ll).next(r=>this.Ni(r)?(re($s,"Releasing primary lease."),t.delete(Ll)):q.resolve())}ki(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const t=/(?:Version|Mobile)\/1[456]/;hR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const r=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return re($s,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Vt($s,"Failed to get zombied client id.",r),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){Vt("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function uh(n){return Zt(n,gd)}function lp(n){return Zt(n,gu)}function qE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class HE{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=a}static Yi(e,t){let r=Pe(),a=Pe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new HE(e,t.fromCache,r,a)}}/**
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
 */class uz{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class nD{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return hR()?8:LC(wt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,a){const o={result:null};return this.rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(e,t,a,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new uz;return this._s(e,t,u).next(d=>{if(o.result=d,this.Xi)return this.us(e,t,u,d.size)})}).next(()=>o.result)}us(e,t,r,a){return r.documentReadCount<this.es?(ql()<=Be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Hl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),q.resolve()):(ql()<=Be.DEBUG&&re("QueryEngine","Query:",Hl(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ts*a?(ql()<=Be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Hl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(t))):q.resolve())}rs(e,t){if(fA(t))return q.resolve(null);let r=Vn(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=tm(t,null,"F"),r=Vn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=Pe(...o);return this.ns.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(p=>{const m=this.cs(t,d);return this.ls(t,m,u,p.readTime)?this.rs(e,tm(t,null,"F")):this.hs(e,m,t,p)}))})))}ss(e,t,r,a){return fA(t)||a.isEqual(Ee.min())?q.resolve(null):this.ns.getDocuments(e,r).next(o=>{const u=this.cs(t,o);return this.ls(t,u,r,a)?q.resolve(null):(ql()<=Be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Hl(t)),this.hs(e,u,t,OC(a,du)).next(d=>d))})}cs(e,t){let r=new nt(p1(e));return t.forEach((a,o)=>{vd(e,o)&&(r=r.add(o))}),r}ls(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}_s(e,t,r){return ql()<=Be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Hl(t)),this.ns.getDocumentsMatchingQuery(e,t,nr.min(),r)}hs(e,t,r,a){return this.ns.getDocumentsMatchingQuery(e,r,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const GE="LocalStore",cz=3e8;class hz{constructor(e,t,r,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new lt(Se),this.Is=new rs(o=>xo(o),_d),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eD(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function rD(n,e,t,r){return new hz(n,e,t,r)}async function iD(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],d=[];let p=Pe();for(const m of a){u.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}for(const m of o){d.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(r,p).next(m=>({Rs:m,removedBatchIds:u,addedBatchIds:d}))})})}function dz(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,m,y){const v=m.batch,w=v.keys();let S=q.resolve();return w.forEach(x=>{S=S.next(()=>y.getEntry(p,x)).next(k=>{const L=m.docVersions.get(x);ye(L!==null),k.version.compareTo(L)<0&&(v.applyToRemoteDocument(k,m),k.isValidDocument()&&(k.setReadTime(m.commitVersion),y.addEntry(k)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(p,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let p=Pe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function sD(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function fz(n,e){const t=de(n),r=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((y,v)=>{const w=a.get(v);if(!w)return;d.push(t.Hr.removeMatchingKeys(o,y.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(o,y.addedDocuments,v)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(Dt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),a=a.insert(v,S),function(k,L,H){return k.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=cz?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(w,S,y)&&d.push(t.Hr.updateTargetData(o,S))});let p=Hn(),m=Pe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),d.push(aD(o,u,e.documentUpdates).next(y=>{p=y.Vs,m=y.fs})),!r.isEqual(Ee.min())){const y=t.Hr.getLastRemoteSnapshotVersion(o).next(v=>t.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));d.push(y)}return q.waitFor(d).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,p,m)).next(()=>p)}).then(o=>(t.Ts=a,o))}function aD(n,e,t){let r=Pe(),a=Pe();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=Hn();return t.forEach((d,p)=>{const m=o.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ee.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):re(GE,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{Vs:u,fs:a}})}function pz(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ia),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bu(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Hr.getTargetData(r,e).next(o=>o?(a=o,q.resolve(a)):t.Hr.allocateTargetId(r).next(u=>(a=new Gi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ts.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Iu(n,e,t){const r=de(n),a=r.Ts.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!ba(u))throw u;re(GE,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ts=r.Ts.remove(e),r.Is.delete(a.target)}function am(n,e,t){const r=de(n);let a=Ee.min(),o=Pe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,m,y){const v=de(p),w=v.Is.get(y);return w!==void 0?q.resolve(v.Ts.get(w)):v.Hr.getTargetData(m,y)}(r,u,Vn(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,d.targetId).next(p=>{o=p})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,e,t?a:Ee.min(),t?o:Pe())).next(d=>(uD(r,f1(e),d),{documents:d,gs:o})))}function oD(n,e){const t=de(n),r=de(t.Hr),a=t.Ts.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",o=>r.lt(o,e).next(u=>u?u.target:null))}function lD(n,e){const t=de(n),r=t.Es.get(e)||Ee.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.ds.getAllFromCollectionGroup(a,e,OC(r,du),Number.MAX_SAFE_INTEGER)).then(a=>(uD(t,e,a),a))}function uD(n,e,t){let r=n.Es.get(e)||Ee.min();t.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(e,r)}async function mz(n,e,t,r){const a=de(n);let o=Pe(),u=Hn();for(const m of t){const y=e.ps(m.metadata.name);m.document&&(o=o.add(y));const v=e.ys(m);v.setReadTime(e.ws(m.metadata.readTime)),u=u.insert(y,v)}const d=a.ds.newChangeBuffer({trackRemovals:!0}),p=await bu(a,function(y){return Vn(Bu(ze.fromString(`__bundle__/docs/${y}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",m=>aD(m,d,u).next(y=>(d.apply(m),y)).next(y=>a.Hr.removeMatchingKeysForTargetId(m,p.targetId).next(()=>a.Hr.addMatchingKeys(m,o,p.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(m,y.Vs,y.fs)).next(()=>y.Vs)))}async function gz(n,e,t=Pe()){const r=await bu(n,Vn(LE(e.bundledQuery))),a=de(n);return a.persistence.runTransaction("Save named query","readwrite",o=>{const u=Mt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.Yr.saveNamedQuery(o,e);const d=r.withResumeToken(Dt.EMPTY_BYTE_STRING,u);return a.Ts=a.Ts.insert(d.targetId,d),a.Hr.updateTargetData(o,d).next(()=>a.Hr.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>a.Hr.addMatchingKeys(o,t,r.targetId)).next(()=>a.Yr.saveNamedQuery(o,e))})}/**
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
 */const cD="firestore_clients";function qA(n,e){return`${cD}_${n}_${e}`}const hD="firestore_mutations";function HA(n,e,t){let r=`${hD}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const dD="firestore_targets";function Py(n,e){return`${dD}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Jr="SharedClientState";class om{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static Ss(e,t,r){const a=JSON.parse(r);let o,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(o=new te(a.error.code,a.error.message))),u?new om(e,t,a.state,o):(Vt(Jr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Dh{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ss(e,t){const r=JSON.parse(t);let a,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(a=new te(r.error.code,r.error.message))),o?new Dh(e,r.state,a):(Vt(Jr,`Failed to parse target state for ID '${e}': ${t}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class lm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ss(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,o=DE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=UC(r.activeTargetIds[u]),o=o.add(r.activeTargetIds[u]);return a?new lm(e,o):(Vt(Jr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class $E{constructor(e,t){this.clientId=e,this.onlineState=t}static Ss(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new $E(t.clientId,t.onlineState):(Vt(Jr,`Failed to parse online state: ${e}`),null)}}class wv{constructor(){this.activeTargetIds=DE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ny{constructor(e,t,r,a,o){this.window=e,this.Ti=t,this.persistenceKey=r,this.Cs=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new lt(Se),this.started=!1,this.Os=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Ns=qA(this.persistenceKey,this.Cs),this.Bs=function(p){return`firestore_sequence_number_${p}`}(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new wv),this.Ls=new RegExp(`^${cD}_${u}_([^_]*)$`),this.ks=new RegExp(`^${hD}_${u}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${dD}_${u}_(\\d+)$`),this.Qs=function(p){return`firestore_online_state_${p}`}(this.persistenceKey),this.$s=function(p){return`firestore_bundle_loaded_v2_${p}`}(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.zi();for(const r of e){if(r===this.Cs)continue;const a=this.getItem(qA(this.persistenceKey,r));if(a){const o=lm.Ss(r,a);o&&(this.xs=this.xs.insert(o.clientId,o))}}this.Us();const t=this.storage.getItem(this.Qs);if(t){const r=this.Ks(t);r&&this.Ws(r)}for(const r of this.Os)this.Ms(r);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,r){this.zs(e,t,r),this.js(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(Py(this.persistenceKey,e));if(a){const o=Dh.Ss(e,a);o&&(r=o.state)}}return t&&this.Hs.Ds(e),this.Us(),r}removeLocalQueryTarget(e){this.Hs.vs(e),this.Us()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Py(this.persistenceKey,e))}updateQueryState(e,t,r){this.Js(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.js(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return re(Jr,"READ",e,t),t}setItem(e,t){re(Jr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){re(Jr,"REMOVE",e),this.storage.removeItem(e)}Ms(e){const t=e;if(t.storageArea===this.storage){if(re(Jr,"EVENT",t.key,t.newValue),t.key===this.Ns)return void Vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ls.test(t.key)){if(t.newValue==null){const r=this.Xs(t.key);return this.eo(r,null)}{const r=this.no(t.key,t.newValue);if(r)return this.eo(r.clientId,r)}}else if(this.ks.test(t.key)){if(t.newValue!==null){const r=this.ro(t.key,t.newValue);if(r)return this.io(r)}}else if(this.qs.test(t.key)){if(t.newValue!==null){const r=this.so(t.key,t.newValue);if(r)return this.oo(r)}}else if(t.key===this.Qs){if(t.newValue!==null){const r=this.Ks(t.newValue);if(r)return this.Ws(r)}}else if(t.key===this.Bs){const r=function(o){let u=jn.ae;if(o!=null)try{const d=JSON.parse(o);ye(typeof d=="number"),u=d}catch(d){Vt(Jr,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);r!==jn.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.$s){const r=this._o(t.newValue);await Promise.all(r.map(a=>this.syncEngine.ao(a)))}}}else this.Os.push(t)})}}get Hs(){return this.xs.get(this.Cs)}Us(){this.setItem(this.Ns,this.Hs.bs())}zs(e,t,r){const a=new om(this.currentUser,e,t,r),o=HA(this.persistenceKey,this.currentUser,e);this.setItem(o,a.bs())}js(e){const t=HA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){const t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,r){const a=Py(this.persistenceKey,e),o=new Dh(e,t,r);this.setItem(a,o.bs())}Zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){const t=this.Ls.exec(e);return t?t[1]:null}no(e,t){const r=this.Xs(e);return lm.Ss(r,t)}ro(e,t){const r=this.ks.exec(e),a=Number(r[1]),o=r[2]!==void 0?r[2]:null;return om.Ss(new cn(o),a,t)}so(e,t){const r=this.qs.exec(e),a=Number(r[1]);return Dh.Ss(a,t)}Ks(e){return $E.Ss(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);re(Jr,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){const r=t?this.xs.insert(e,t):this.xs.remove(e),a=this.Gs(this.xs),o=this.Gs(r),u=[],d=[];return o.forEach(p=>{a.has(p)||u.push(p)}),a.forEach(p=>{o.has(p)||d.push(p)}),this.syncEngine.lo(u,d).then(()=>{this.xs=r})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=DE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class fD{constructor(){this.ho=new wv,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new wv,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _z{To(e){}shutdown(){}}/**
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
 */const GA="ConnectivityMonitor";class $A{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){re(GA,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){re(GA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let up=null;function bv(){return up===null?up=function(){return 268435456+Math.round(2147483648*Math.random())}():up++,"0x"+up.toString(16)}/**
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
 */const Oy="RestConnection",yz={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vz{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${a}`,this.wo=this.databaseId.database===lv?`project_id=${r}`:`project_id=${r}&database_id=${a}`}So(e,t,r,a,o){const u=bv(),d=this.bo(e,t.toUriEncodedString());re(Oy,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,a,o),this.vo(e,d,p,r).then(m=>(re(Oy,`Received RPC '${e}' ${u}: `,m),m),m=>{throw di(Oy,`RPC '${e}' ${u} failed with error: `,m,"url: ",d,"request:",r),m})}Co(e,t,r,a,o,u){return this.So(e,t,r,a,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),r&&r.headers.forEach((a,o)=>e[o]=a)}bo(e,t){const r=yz[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Ez{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const bn="WebChannelConnection";class Tz extends vz{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,a){const o=bv();return new Promise((u,d)=>{const p=new AC;p.setWithCredentials(!0),p.listenOnce(SC.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case wp.NO_ERROR:const y=p.getResponseJson();re(bn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),u(y);break;case wp.TIMEOUT:re(bn,`RPC '${e}' ${o} timed out`),d(new te(Q.DEADLINE_EXCEEDED,"Request time out"));break;case wp.HTTP_ERROR:const v=p.getStatus();if(re(bn,`RPC '${e}' ${o} failed with status:`,v,"response text:",p.getResponseText()),v>0){let w=p.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const x=function(L){const H=L.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(H)>=0?H:Q.UNKNOWN}(S.status);d(new te(x,S.message))}else d(new te(Q.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new te(Q.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{re(bn,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(a);re(bn,`RPC '${e}' ${o} sending request:`,a),p.send(t,"POST",m,r,15)})}Wo(e,t,r){const a=bv(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=DC(),d=CC(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const y=o.join("");re(bn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const v=u.createWebChannel(y,p);let w=!1,S=!1;const x=new Ez({Fo:L=>{S?re(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,L):(w||(re(bn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),re(bn,`RPC '${e}' stream ${a} sending:`,L),v.send(L))},Mo:()=>v.close()}),k=(L,H,X)=>{L.listen(H,K=>{try{X(K)}catch(oe){setTimeout(()=>{throw oe},0)}})};return k(v,ph.EventType.OPEN,()=>{S||(re(bn,`RPC '${e}' stream ${a} transport opened.`),x.Qo())}),k(v,ph.EventType.CLOSE,()=>{S||(S=!0,re(bn,`RPC '${e}' stream ${a} transport closed`),x.Uo())}),k(v,ph.EventType.ERROR,L=>{S||(S=!0,di(bn,`RPC '${e}' stream ${a} transport errored:`,L),x.Uo(new te(Q.UNAVAILABLE,"The operation could not be completed")))}),k(v,ph.EventType.MESSAGE,L=>{var H;if(!S){const X=L.data[0];ye(!!X);const K=X,oe=(K==null?void 0:K.error)||((H=K[0])===null||H===void 0?void 0:H.error);if(oe){re(bn,`RPC '${e}' stream ${a} received error:`,oe);const ae=oe.status;let le=function(A){const P=jt[A];if(P!==void 0)return R1(P)}(ae),D=oe.message;le===void 0&&(le=Q.INTERNAL,D="Unknown error status: "+ae+" with message "+oe.message),S=!0,x.Uo(new te(le,D)),v.close()}else re(bn,`RPC '${e}' stream ${a} received:`,X),x.Ko(X)}}),k(d,RC.STAT_EVENT,L=>{L.stat===tv.PROXY?re(bn,`RPC '${e}' stream ${a} detected buffering proxy`):L.stat===tv.NOPROXY&&re(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{x.$o()},0),x}}/**
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
 *//**
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
 */function pD(){return typeof window<"u"?window:null}function Pp(){return typeof document<"u"?document:null}/**
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
 */function bd(n){return new SB(n,!0)}/**
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
 */class KE{constructor(e,t,r=1e3,a=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=a,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-r);a>0&&re("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const KA="PersistentStream";class mD{constructor(e,t,r,a,o,u,d,p){this.Ti=e,this.n_=r,this.r_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new KE(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.i_===t&&this.V_(r,a)},r=>{e(()=>{const a=new te(Q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(a)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{r(()=>this.m_(a))}),this.stream.onMessage(a=>{r(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return re(KA,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(re(KA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wz extends mD{constructor(e,t,r,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=DB(this.serializer,e),r=function(o){if(!("targetChange"in o))return Ee.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Ee.min():u.readTime?Mt(u.readTime):Ee.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=_v(this.serializer),t.addTarget=function(o,u){let d;const p=u.target;if(d=Jp(p)?{documents:M1(o,p)}:{query:L1(o,p).ht},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=x1(o,u.resumeToken);const m=mv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Ee.min())>0){d.readTime=wu(o,u.snapshotVersion.toTimestamp());const m=mv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=PB(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=_v(this.serializer),t.removeTarget=e,this.I_(t)}}class bz extends mD{constructor(e,t,r,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=xB(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=_v(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Xh(this.serializer,r))};this.I_(t)}}/**
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
 */class Iz{}class Az extends Iz{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new te(Q.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(e,gv(t,r),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(Q.UNKNOWN,o.toString())})}Co(e,t,r,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Co(e,gv(t,r),a,u,d,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(Q.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Sz{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Vt(t),this.N_=!1):re("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Mo="RemoteStore";class Rz{constructor(e,t,r,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{r.enqueueAndForget(async()=>{Aa(this)&&(re(Mo,"Restarting streams for network reachability change."),await async function(p){const m=de(p);m.W_.add(4),await ju(m),m.j_.set("Unknown"),m.W_.delete(4),await Id(m)}(this))})}),this.j_=new Sz(r,a)}}async function Id(n){if(Aa(n))for(const e of n.G_)await e(!0)}async function ju(n){for(const e of n.G_)await e(!1)}function Gm(n,e){const t=de(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),YE(t)?WE(t):Hu(t).c_()&&QE(t,e))}function Au(n,e){const t=de(n),r=Hu(t);t.K_.delete(e),r.c_()&&gD(t,e),t.K_.size===0&&(r.c_()?r.P_():Aa(t)&&t.j_.set("Unknown"))}function QE(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hu(n).y_(e)}function gD(n,e){n.H_.Ne(e),Hu(n).w_(e)}function WE(n){n.H_=new wB({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Hu(n).start(),n.j_.B_()}function YE(n){return Aa(n)&&!Hu(n).u_()&&n.K_.size>0}function Aa(n){return de(n).W_.size===0}function _D(n){n.H_=void 0}async function Cz(n){n.j_.set("Online")}async function Dz(n){n.K_.forEach((e,t)=>{QE(n,e)})}async function xz(n,e){_D(n),YE(n)?(n.j_.q_(e),WE(n)):n.j_.set("Unknown")}async function Pz(n,e,t){if(n.j_.set("Online"),e instanceof D1&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const d of o.targetIds)a.K_.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.K_.delete(d),a.H_.removeTarget(d))}(n,e)}catch(r){re(Mo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await um(n,r)}else if(e instanceof xp?n.H_.We(e):e instanceof C1?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Ee.min()))try{const r=await sD(n.localStore);t.compareTo(r)>=0&&await function(o,u){const d=o.H_.ot(u);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const y=o.K_.get(m);y&&o.K_.set(m,y.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,m)=>{const y=o.K_.get(p);if(!y)return;o.K_.set(p,y.withResumeToken(Dt.EMPTY_BYTE_STRING,y.snapshotVersion)),gD(o,p);const v=new Gi(y.target,p,m,y.sequenceNumber);QE(o,v)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){re(Mo,"Failed to raise snapshot:",r),await um(n,r)}}async function um(n,e,t){if(!ba(e))throw e;n.W_.add(1),await ju(n),n.j_.set("Offline"),t||(t=()=>sD(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{re(Mo,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Id(n)})}function yD(n,e){return e().catch(t=>um(n,t,e))}async function qu(n){const e=de(n),t=ma(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:ia;for(;Nz(e);)try{const a=await pz(e.localStore,r);if(a===null){e.U_.length===0&&t.P_();break}r=a.batchId,Oz(e,a)}catch(a){await um(e,a)}vD(e)&&ED(e)}function Nz(n){return Aa(n)&&n.U_.length<10}function Oz(n,e){n.U_.push(e);const t=ma(n);t.c_()&&t.S_&&t.b_(e.mutations)}function vD(n){return Aa(n)&&!ma(n).u_()&&n.U_.length>0}function ED(n){ma(n).start()}async function kz(n){ma(n).C_()}async function Vz(n){const e=ma(n);for(const t of n.U_)e.b_(t.mutations)}async function Mz(n,e,t){const r=n.U_.shift(),a=OE.from(r,e,t);await yD(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await qu(n)}async function Lz(n,e){e&&ma(n).S_&&await async function(r,a){if(function(u){return S1(u)&&u!==Q.ABORTED}(a.code)){const o=r.U_.shift();ma(r).h_(),await yD(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await qu(r)}}(n,e),vD(n)&&ED(n)}async function QA(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),re(Mo,"RemoteStore received new credentials");const r=Aa(t);t.W_.add(3),await ju(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Id(t)}async function Iv(n,e){const t=de(n);e?(t.W_.delete(2),await Id(t)):e||(t.W_.add(2),await ju(t),t.j_.set("Unknown"))}function Hu(n){return n.J_||(n.J_=function(t,r,a){const o=de(t);return o.M_(),new wz(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:Cz.bind(null,n),No:Dz.bind(null,n),Lo:xz.bind(null,n),p_:Pz.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),YE(n)?WE(n):n.j_.set("Unknown")):(await n.J_.stop(),_D(n))})),n.J_}function ma(n){return n.Y_||(n.Y_=function(t,r,a){const o=de(t);return o.M_(),new bz(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:kz.bind(null,n),Lo:Lz.bind(null,n),D_:Vz.bind(null,n),v_:Mz.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await qu(n)):(await n.Y_.stop(),n.U_.length>0&&(re(Mo,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class XE{constructor(e,t,r,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,o){const u=Date.now()+r,d=new XE(e,t,u,a,o);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),ba(n))return new te(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class tu{static emptySet(e){return new tu(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=mh(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof tu)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new tu;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class WA{constructor(){this.Z_=new lt(ce.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):me():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Su{constructor(e,t,r,a,o,u,d,p,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,a,o){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new Su(e,t,tu.emptySet(t),u,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
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
 */class Uz{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Bz{constructor(){this.queries=YA(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const a=de(t),o=a.queries;a.queries=YA(),o.forEach((u,d)=>{for(const p of d.ta)p.onError(r)})})(this,new te(Q.ABORTED,"Firestore shutting down"))}}function YA(){return new rs(n=>d1(n),yd)}async function ZE(n,e){const t=de(n);let r=3;const a=e.query;let o=t.queries.get(a);o?!o.na()&&e.ra()&&(r=2):(o=new Uz,r=e.ra()?0:1);try{switch(r){case 0:o.ea=await t.onListen(a,!0);break;case 1:o.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=Gu(u,`Initialization of query '${Hl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,o),o.ta.push(e),e.sa(t.onlineState),o.ea&&e.oa(o.ea)&&eT(t)}async function JE(n,e){const t=de(n),r=e.query;let a=3;const o=t.queries.get(r);if(o){const u=o.ta.indexOf(e);u>=0&&(o.ta.splice(u,1),o.ta.length===0?a=e.ra()?0:1:!o.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function zz(n,e){const t=de(n);let r=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const d of u.ta)d.oa(a)&&(r=!0);u.ea=a}}r&&eT(t)}function Fz(n,e,t){const r=de(n),a=r.queries.get(e);if(a)for(const o of a.ta)o.onError(t);r.queries.delete(e)}function eT(n){n.ia.forEach(e=>{e.next()})}var Av,XA;(XA=Av||(Av={}))._a="default",XA.Cache="cache";class tT{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new Su(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Su.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Av.Cache}}/**
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
 */class jz{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
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
 */class ZA{constructor(e){this.serializer=e}ps(e){return li(this.serializer,e)}ys(e){return e.metadata.exists?V1(this.serializer,e.document,!1):ht.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return Mt(e)}}class qz{constructor(e,t,r){this.da=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=TD(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;const r=ze.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){const t=new Map,r=new ZA(this.serializer);for(const a of e)if(a.metadata.queries){const o=r.ps(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||Pe()).add(o);t.set(u,d)}}return t}async complete(){const e=await mz(this.localStore,new ZA(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(const r of this.queries)await gz(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function TD(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class wD{constructor(e){this.key=e}}class bD{constructor(e){this.key=e}}class ID{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Pe(),this.mutatedKeys=Pe(),this.ya=p1(e),this.wa=new tu(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new WA,a=t?t.wa:this.wa;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,v)=>{const w=a.get(y),S=vd(this.query,v)?v:null,x=!!w&&this.mutatedKeys.has(w.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let L=!1;w&&S?w.data.isEqual(S.data)?x!==k&&(r.track({type:3,doc:S}),L=!0):this.va(w,S)||(r.track({type:2,doc:S}),L=!0,(p&&this.ya(S,p)>0||m&&this.ya(S,m)<0)&&(d=!0)):!w&&S?(r.track({type:0,doc:S}),L=!0):w&&!S&&(r.track({type:1,doc:w}),L=!0,(p||m)&&(d=!0)),L&&(S?(u=u.add(S),o=k?o.add(y):o.delete(y)):(u=u.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{wa:u,Da:r,ls:d,mutatedKeys:o}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const o=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((y,v)=>function(S,x){const k=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return k(S)-k(x)}(y.type,v.type)||this.ya(y.doc,v.doc)),this.Ca(r),a=a!=null&&a;const d=t&&!a?this.Fa():[],p=this.pa.size===0&&this.current&&!a?1:0,m=p!==this.ga;return this.ga=p,u.length!==0||m?{snapshot:new Su(this.query,e.wa,o,u,e.mutatedKeys,p===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new WA,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Pe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new bD(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new wD(r))}),t}Oa(e){this.fa=e.gs,this.pa=Pe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Su.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Sa="SyncEngine";class Hz{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Gz{constructor(e){this.key=e,this.Ba=!1}}class $z{constructor(e,t,r,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new rs(d=>d1(d),yd),this.qa=new Map,this.Qa=new Set,this.$a=new lt(ce.comparator),this.Ua=new Map,this.Ka=new zE,this.Wa={},this.Ga=new Map,this.za=Vo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Kz(n,e,t=!0){const r=$m(n);let a;const o=r.ka.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Na()):a=await AD(r,e,t,!0),a}async function Qz(n,e){const t=$m(n);await AD(t,e,!0,!1)}async function AD(n,e,t,r){const a=await bu(n.localStore,Vn(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let d;return r&&(d=await nT(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&Gm(n.remoteStore,a),d}async function nT(n,e,t,r,a){n.Ha=(v,w,S)=>async function(k,L,H,X){let K=L.view.ba(H);K.ls&&(K=await am(k.localStore,L.query,!1).then(({documents:D})=>L.view.ba(D,K)));const oe=X&&X.targetChanges.get(L.targetId),ae=X&&X.targetMismatches.get(L.targetId)!=null,le=L.view.applyChanges(K,k.isPrimaryClient,oe,ae);return Sv(k,L.targetId,le.Ma),le.snapshot}(n,v,w,S);const o=await am(n.localStore,e,!0),u=new ID(e,o.gs),d=u.ba(o.documents),p=wd.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,p);Sv(n,t,m.Ma);const y=new Hz(e,t,u);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),m.snapshot}async function Wz(n,e,t){const r=de(n),a=r.ka.get(e),o=r.qa.get(a.targetId);if(o.length>1)return r.qa.set(a.targetId,o.filter(u=>!yd(u,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Iu(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&Au(r.remoteStore,a.targetId),Ru(r,a.targetId)}).catch(wa)):(Ru(r,a.targetId),await Iu(r.localStore,a.targetId,!0))}async function Yz(n,e){const t=de(n),r=t.ka.get(e),a=t.qa.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Au(t.remoteStore,r.targetId))}async function Xz(n,e,t){const r=aT(n);try{const a=await function(u,d){const p=de(u),m=gt.now(),y=d.reduce((S,x)=>S.add(x.key),Pe());let v,w;return p.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=Hn(),k=Pe();return p.ds.getEntries(S,y).next(L=>{x=L,x.forEach((H,X)=>{X.isValidDocument()||(k=k.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(S,x)).next(L=>{v=L;const H=[];for(const X of d){const K=vB(X,v.get(X.key).overlayedDocument);K!=null&&H.push(new is(X.key,K,r1(K.value.mapValue),mt.exists(!0)))}return p.mutationQueue.addMutationBatch(S,m,H,d)}).next(L=>{w=L;const H=L.applyToLocalDocumentSet(v,k);return p.documentOverlayCache.saveOverlays(S,L.batchId,H)})}).then(()=>({batchId:w.batchId,changes:g1(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,d,p){let m=u.Wa[u.currentUser.toKey()];m||(m=new lt(Se)),m=m.insert(d,p),u.Wa[u.currentUser.toKey()]=m}(r,a.batchId,t),await ss(r,a.changes),await qu(r.remoteStore)}catch(a){const o=Gu(a,"Failed to persist write");t.reject(o)}}async function SD(n,e){const t=de(n);try{const r=await fz(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t.Ua.get(o);u&&(ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?ye(u.Ba):a.removedDocuments.size>0&&(ye(u.Ba),u.Ba=!1))}),await ss(t,r,e)}catch(r){await wa(r)}}function JA(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ka.forEach((o,u)=>{const d=u.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const p=de(u);p.onlineState=d;let m=!1;p.queries.forEach((y,v)=>{for(const w of v.ta)w.sa(d)&&(m=!0)}),m&&eT(p)}(r.eventManager,e),a.length&&r.La.p_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zz(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Ua.get(e),o=a&&a.key;if(o){let u=new lt(ce.comparator);u=u.insert(o,ht.newNoDocument(o,Ee.min()));const d=Pe().add(o),p=new Td(Ee.min(),new Map,new lt(Se),u,d);await SD(r,p),r.$a=r.$a.remove(o),r.Ua.delete(e),sT(r)}else await Iu(r.localStore,e,!1).then(()=>Ru(r,e,t)).catch(wa)}async function Jz(n,e){const t=de(n),r=e.batch.batchId;try{const a=await dz(t.localStore,e);iT(t,r,null),rT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,a)}catch(a){await wa(a)}}async function e6(n,e,t){const r=de(n);try{const a=await function(u,d){const p=de(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return p.mutationQueue.lookupMutationBatch(m,d).next(v=>(ye(v!==null),y=v.keys(),p.mutationQueue.removeMutationBatch(m,v))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>p.localDocuments.getDocuments(m,y))})}(r.localStore,e);iT(r,e,t),rT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,a)}catch(a){await wa(a)}}async function t6(n,e){const t=de(n);Aa(t.remoteStore)||re(Sa,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const d=de(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",p=>d.mutationQueue.getHighestUnacknowledgedBatchId(p))}(t.localStore);if(r===ia)return void e.resolve();const a=t.Ga.get(r)||[];a.push(e),t.Ga.set(r,a)}catch(r){const a=Gu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function rT(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function iT(n,e,t){const r=de(n);let a=r.Wa[r.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),r.Wa[r.currentUser.toKey()]=a}}function Ru(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||RD(n,r)})}function RD(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Au(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),sT(n))}function Sv(n,e,t){for(const r of t)r instanceof wD?(n.Ka.addReference(r.key,e),n6(n,r)):r instanceof bD?(re(Sa,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||RD(n,r.key)):me()}function n6(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(re(Sa,"New document in limbo: "+t),n.Qa.add(r),sT(n))}function sT(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ce(ze.fromString(e)),r=n.za.next();n.Ua.set(r,new Gz(t)),n.$a=n.$a.insert(t,r),Gm(n.remoteStore,new Gi(Vn(Bu(t.path)),r,"TargetPurposeLimboResolution",jn.ae))}}async function ss(n,e,t){const r=de(n),a=[],o=[],u=[];r.ka.isEmpty()||(r.ka.forEach((d,p)=>{u.push(r.Ha(p,e,t).then(m=>{var y;if((m||t)&&r.isPrimaryClient){const v=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(m){a.push(m);const v=HE.Yi(p.targetId,m);o.push(v)}}))}),await Promise.all(u),r.La.p_(a),await async function(p,m){const y=de(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>q.forEach(m,w=>q.forEach(w.Hi,S=>y.persistence.referenceDelegate.addReference(v,w.targetId,S)).next(()=>q.forEach(w.Ji,S=>y.persistence.referenceDelegate.removeReference(v,w.targetId,S)))))}catch(v){if(!ba(v))throw v;re(GE,"Failed to update sequence numbers: "+v)}for(const v of m){const w=v.targetId;if(!v.fromCache){const S=y.Ts.get(w),x=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(x);y.Ts=y.Ts.insert(w,k)}}}(r.localStore,o))}async function r6(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){re(Sa,"User change. New user:",e.toKey());const r=await iD(t.localStore,e);t.currentUser=e,function(o,u){o.Ga.forEach(d=>{d.forEach(p=>{p.reject(new te(Q.CANCELLED,u))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Rs)}}function i6(n,e){const t=de(n),r=t.Ua.get(e);if(r&&r.Ba)return Pe().add(r.key);{let a=Pe();const o=t.qa.get(e);if(!o)return a;for(const u of o){const d=t.ka.get(u);a=a.unionWith(d.view.Sa)}return a}}async function s6(n,e){const t=de(n),r=await am(t.localStore,e.query,!0),a=e.view.Oa(r);return t.isPrimaryClient&&Sv(t,e.targetId,a.Ma),a}async function a6(n,e){const t=de(n);return lD(t.localStore,e).then(r=>ss(t,r))}async function o6(n,e,t,r){const a=de(n),o=await function(d,p){const m=de(d),y=de(m.mutationQueue);return m.persistence.runTransaction("Lookup mutation documents","readonly",v=>y.Ln(v,p).next(w=>w?m.localDocuments.getDocuments(v,w):q.resolve(null)))}(a.localStore,e);o!==null?(t==="pending"?await qu(a.remoteStore):t==="acknowledged"||t==="rejected"?(iT(a,e,r||null),rT(a,e),function(d,p){de(de(d).mutationQueue).qn(p)}(a.localStore,e)):me(),await ss(a,o)):re(Sa,"Cannot apply mutation batch with id: "+e)}async function l6(n,e){const t=de(n);if($m(t),aT(t),e===!0&&t.ja!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await eS(t,r.toArray());t.ja=!0,await Iv(t.remoteStore,!0);for(const o of a)Gm(t.remoteStore,o)}else if(e===!1&&t.ja!==!1){const r=[];let a=Promise.resolve();t.qa.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(Ru(t,u),Iu(t.localStore,u,!0))),Au(t.remoteStore,u)}),await a,await eS(t,r),function(u){const d=de(u);d.Ua.forEach((p,m)=>{Au(d.remoteStore,m)}),d.Ka.Dr(),d.Ua=new Map,d.$a=new lt(ce.comparator)}(t),t.ja=!1,await Iv(t.remoteStore,!1)}}async function eS(n,e,t){const r=de(n),a=[],o=[];for(const u of e){let d;const p=r.qa.get(u);if(p&&p.length!==0){d=await bu(r.localStore,Vn(p[0]));for(const m of p){const y=r.ka.get(m),v=await s6(r,y);v.snapshot&&o.push(v.snapshot)}}else{const m=await oD(r.localStore,u);d=await bu(r.localStore,m),await nT(r,CD(m),u,!1,d.resumeToken)}a.push(d)}return r.La.p_(o),a}function CD(n){return h1(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function u6(n){return function(t){return de(de(t).persistence).zi()}(de(n).localStore)}async function c6(n,e,t,r){const a=de(n);if(a.ja)return void re(Sa,"Ignoring unexpected query state notification.");const o=a.qa.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await lD(a.localStore,f1(o[0])),d=Td.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Dt.EMPTY_BYTE_STRING);await ss(a,u,d);break}case"rejected":await Iu(a.localStore,e,!0),Ru(a,e,r);break;default:me()}}async function h6(n,e,t){const r=$m(n);if(r.ja){for(const a of e){if(r.qa.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){re(Sa,"Adding an already active target "+a);continue}const o=await oD(r.localStore,a),u=await bu(r.localStore,o);await nT(r,CD(o),u.targetId,!1,u.resumeToken),Gm(r.remoteStore,u)}for(const a of t)r.qa.has(a)&&await Iu(r.localStore,a,!1).then(()=>{Au(r.remoteStore,a),Ru(r,a)}).catch(wa)}}function $m(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=SD.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zz.bind(null,e),e.La.p_=zz.bind(null,e.eventManager),e.La.Ja=Fz.bind(null,e.eventManager),e}function aT(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jz.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=e6.bind(null,e),e}function d6(n,e,t){const r=de(n);(async function(o,u,d){try{const p=await u.getMetadata();if(await function(S,x){const k=de(S),L=Mt(x.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",H=>k.Yr.getBundleMetadata(H,x.id)).then(H=>!!H&&H.createTime.compareTo(L)>=0)}(o.localStore,p))return await u.close(),d._completeWith(function(S){return{taskState:"Success",documentsLoaded:S.totalDocuments,bytesLoaded:S.totalBytes,totalDocuments:S.totalDocuments,totalBytes:S.totalBytes}}(p)),Promise.resolve(new Set);d._updateProgress(TD(p));const m=new qz(p,o.localStore,u.serializer);let y=await u.Ya();for(;y;){const w=await m.Aa(y);w&&d._updateProgress(w),y=await u.Ya()}const v=await m.complete();return await ss(o,v.ma,void 0),await function(S,x){const k=de(S);return k.persistence.runTransaction("Save bundle","readwrite",L=>k.Yr.saveBundleMetadata(L,x))}(o.localStore,p),d._completeWith(v.progress),Promise.resolve(v.Va)}catch(p){return di(Sa,`Loading bundle failed with ${p}`),d._failWith(p),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class Zh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return rD(this.persistence,new nD,e.initialUser,this.serializer)}Xa(e){return new FE(Hm.ri,this.serializer)}Za(e){return new fD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zh.provider={build:()=>new Zh};class f6 extends Zh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ye(this.persistence.referenceDelegate instanceof sm);const r=this.persistence.referenceDelegate.garbageCollector;return new Y1(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new FE(r=>sm.ri(r,t),this.serializer)}}class DD extends Zh{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await aT(this.ru.syncEngine),await qu(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return rD(this.persistence,new nD,e.initialUser,this.serializer)}tu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Y1(r,e.asyncQueue,t)}nu(e,t){const r=new w4(t,this.persistence);return new T4(e.asyncQueue,r)}Xa(e){const t=qE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new jE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,pD(),Pp(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new fD}}class p6 extends DD{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ru.syncEngine;this.sharedClientState instanceof Ny&&(this.sharedClientState.syncEngine={uo:o6.bind(null,t),co:c6.bind(null,t),lo:h6.bind(null,t),zi:u6.bind(null,t),ao:a6.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async r=>{await l6(this.ru.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Za(e){const t=pD();if(!Ny.D(t))throw new te(Q.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=qE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ny(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Jh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>JA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=r6.bind(null,this.syncEngine),await Iv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Bz}()}createDatastore(e){const t=bd(e.databaseInfo.databaseId),r=function(o){return new Tz(o)}(e.databaseInfo);return function(o,u,d,p){return new Az(o,u,d,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,o,u,d){return new Rz(r,a,o,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>JA(this.syncEngine,t,0),function(){return $A.D()?new $A:new _z}())}createSyncEngine(e,t){return function(a,o,u,d,p,m,y){const v=new $z(a,o,u,d,p,m);return y&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=de(a);re(Mo,"RemoteStore shutting down."),o.W_.add(5),await ju(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Jh.provider={build:()=>new Jh};function tS(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class Km{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class m6{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new yn,this.buffer=new Uint8Array,this._u=function(){return new TextDecoder("utf-8")}(),this.au().then(r=>{r&&r.Ea()?this.metadata.resolve(r.Ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ia)}`))},r=>this.metadata.reject(r))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){const e=await this.uu();if(e===null)return null;const t=this._u.decode(e),r=Number(t);isNaN(r)&&this.cu(`length string (${t}) is not valid number`);const a=await this.lu(r);return new jz(JSON.parse(a),e.length+r)}hu(){return this.buffer.findIndex(e=>e===123)}async uu(){for(;this.hu()<0&&!await this.Pu(););if(this.buffer.length===0)return null;const e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");const t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pu(){const e=await this.ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class g6{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(Q.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,o){const u=de(a),d={documents:o.map(v=>Yh(u.serializer,v))},p=await u.Co("BatchGetDocuments",u.serializer.databaseId,ze.emptyPath(),d,o.length),m=new Map;p.forEach(v=>{const w=CB(u.serializer,v);m.set(w.key.toString(),w)});const y=[];return o.forEach(v=>{const w=m.get(v.toString());ye(!!w),y.push(w)}),y}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Fu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=ce.fromPath(r);this.mutations.push(new PE(a,this.precondition(a)))}),await async function(r,a){const o=de(r),u={writes:a.map(d=>Xh(o.serializer,d))};await o.So("Commit",o.serializer.databaseId,ze.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw me();t=Ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new te(Q.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ee.min())?mt.exists(!1):mt.updateTime(t):mt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ee.min()))throw new te(Q.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mt.updateTime(t)}return mt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class _6{constructor(e,t,r,a,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=o,this.Tu=r.maxAttempts,this.a_=new KE(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new g6(this.datastore),t=this.du(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.Au(a)}))}).catch(r=>{this.Au(r)})})}du(e){try{const t=this.updateFunction(e);return!md(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!S1(t)}return!1}}/**
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
 */const ga="FirestoreClient";class y6{constructor(e,t,r,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=PC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{re(ga,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(re(ga,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Gu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ky(n,e){n.asyncQueue.verifyOperationInProgress(),re(ga,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await iD(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function nS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await oT(n);re(ga,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>QA(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>QA(e.remoteStore,a)),n._onlineComponents=e}async function oT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(ga,"Using user provided OfflineComponentProvider");try{await ky(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Q.FAILED_PRECONDITION||a.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;di("Error using user provided cache. Falling back to memory cache: "+t),await ky(n,new Zh)}}else re(ga,"Using default OfflineComponentProvider"),await ky(n,new f6(void 0));return n._offlineComponents}async function Qm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(ga,"Using user provided OnlineComponentProvider"),await nS(n,n._uninitializedComponentsProvider._online)):(re(ga,"Using default OnlineComponentProvider"),await nS(n,new Jh))),n._onlineComponents}function xD(n){return oT(n).then(e=>e.persistence)}function lT(n){return oT(n).then(e=>e.localStore)}function PD(n){return Qm(n).then(e=>e.remoteStore)}function uT(n){return Qm(n).then(e=>e.syncEngine)}function v6(n){return Qm(n).then(e=>e.datastore)}async function Cu(n){const e=await Qm(n),t=e.eventManager;return t.onListen=Kz.bind(null,e.syncEngine),t.onUnlisten=Wz.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Qz.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Yz.bind(null,e.syncEngine),t}function E6(n){return n.asyncQueue.enqueue(async()=>{const e=await xD(n),t=await PD(n);return e.setNetworkEnabled(!0),function(a){const o=de(a);return o.W_.delete(0),Id(o)}(t)})}function T6(n){return n.asyncQueue.enqueue(async()=>{const e=await xD(n),t=await PD(n);return e.setNetworkEnabled(!1),async function(a){const o=de(a);o.W_.add(0),await ju(o),o.j_.set("Offline")}(t)})}function w6(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await function(m,y){const v=de(m);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,y))}(a,o);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new te(Q.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const p=Gu(d,`Failed to get document '${o} from cache`);u.reject(p)}}(await lT(n),e,t)),t.promise}function ND(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const y=new Km({next:w=>{y.su(),u.enqueueAndForget(()=>JE(o,v));const S=w.docs.has(d);!S&&w.fromCache?m.reject(new te(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&p&&p.source==="server"?m.reject(new te(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new tT(Bu(d.path),y,{includeMetadataChanges:!0,Ta:!0});return ZE(o,v)}(await Cu(n),n.asyncQueue,e,t,r)),r.promise}function b6(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await am(a,o,!0),p=new ID(o,d.gs),m=p.ba(d.documents),y=p.applyChanges(m,!1);u.resolve(y.snapshot)}catch(d){const p=Gu(d,`Failed to execute query '${o} against cache`);u.reject(p)}}(await lT(n),e,t)),t.promise}function OD(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const y=new Km({next:w=>{y.su(),u.enqueueAndForget(()=>JE(o,v)),w.fromCache&&p.source==="server"?m.reject(new te(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new tT(d,y,{includeMetadataChanges:!0,Ta:!0});return ZE(o,v)}(await Cu(n),n.asyncQueue,e,t,r)),r.promise}function I6(n,e){const t=new Km(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.add(o),o.next()}(await Cu(n),t)),()=>{t.su(),n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.delete(o)}(await Cu(n),t))}}function A6(n,e,t,r){const a=function(u,d){let p;return p=typeof u=="string"?yE().encode(u):u,function(y,v){return new m6(y,v)}(function(y,v){if(y instanceof Uint8Array)return tS(y,v);if(y instanceof ArrayBuffer)return tS(new Uint8Array(y),v);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(p),d)}(t,bd(e));n.asyncQueue.enqueueAndForget(async()=>{d6(await uT(n),a,r)})}function S6(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const o=de(r);return o.persistence.runTransaction("Get named query","readonly",u=>o.Yr.getNamedQuery(u,a))}(await lT(n),e))}/**
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
 */function kD(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const rS=new Map;/**
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
 */function cT(n,e,t){if(!t)throw new te(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function VD(n,e,t,r){if(e===!0&&r===!0)throw new te(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function iS(n){if(!ce.isDocumentKey(n))throw new te(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sS(n){if(ce.isDocumentKey(n))throw new te(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":me()}function Xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wm(n);throw new te(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function MD(n,e){if(e<=0)throw new te(Q.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */const LD="firestore.googleapis.com",aS=!0;class oS{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=LD,this.ssl=aS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:aS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KB)throw new te(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kD((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ad{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new c4;switch(r.type){case"firstParty":return new p4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=rS.get(t);r&&(re("ComponentProvider","Removing Datastore"),rS.delete(t),r.terminate())}(this),Promise.resolve()}}function R6(n,e,t,r={}){var a;const o=(n=Xe(n,Ad))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;o.host!==LD&&o.host!==d&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},o),{host:d,ssl:!1,emulatorOptions:r});if(!aa(p,u)&&(n._setSettings(p),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=cn.MOCK_USER;else{m=Dk(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new te(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new cn(v)}n._authCredentials=new h4(new xC(m,y))}}/**
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
 */let Mn=class UD{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new UD(this.firestore,e,this._query)}},Tt=class BD{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new BD(this.firestore,e,this._key)}},sa=class zD extends Mn{constructor(e,t,r){super(e,t,Bu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ce(e))}withConverter(e){return new zD(this.firestore,e,this._path)}};function FD(n,e,...t){if(n=Ie(n),cT("collection","path",e),n instanceof Ad){const r=ze.fromString(e,...t);return sS(r),new sa(n,null,r)}{if(!(n instanceof Tt||n instanceof sa))throw new te(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return sS(r),new sa(n.firestore,null,r)}}function C6(n,e){if(n=Xe(n,Ad),cT("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(Q.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mn(n,null,function(r){return new ns(ze.emptyPath(),r)}(e))}function cm(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=PC.newId()),cT("doc","path",e),n instanceof Ad){const r=ze.fromString(e,...t);return iS(r),new Tt(n,null,new ce(r))}{if(!(n instanceof Tt||n instanceof sa))throw new te(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return iS(r),new Tt(n.firestore,n instanceof sa?n.converter:null,new ce(r))}}function jD(n,e){return n=Ie(n),e=Ie(e),(n instanceof Tt||n instanceof sa)&&(e instanceof Tt||e instanceof sa)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function qD(n,e){return n=Ie(n),e=Ie(e),n instanceof Mn&&e instanceof Mn&&n.firestore===e.firestore&&yd(n._query,e._query)&&n.converter===e.converter}/**
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
 */const lS="AsyncQueue";class uS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new KE(this,"async_queue_retry"),this.Su=()=>{const r=Pp();r&&re(lS,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Pp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Pp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new yn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ba(e))throw e;re(lS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const a=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=XE.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(a),a}Du(){this.gu&&me()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Rv(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const o of r)if(o in a&&typeof a[o]=="function")return!0;return!1}(n,["next","error","complete"])}class D6{constructor(){this._progressObserver={},this._taskCompletionResolver=new yn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const x6=-1;let Lt=class extends Ad{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new uS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uS(e),this._firestoreClient=void 0,await e}}};function Sn(n){if(n._terminated)throw new te(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||HD(n),n._firestoreClient}function HD(n){var e,t,r;const a=n._freezeSettings(),o=function(d,p,m,y){return new X4(d,p,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,kD(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new y6(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}function P6(n,e){di("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return GD(n,Jh.provider,{build:r=>new DD(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function N6(n){di("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();GD(n,Jh.provider,{build:t=>new p6(t,e.cacheSizeBytes)})}function GD(n,e,t){if((n=Xe(n,Lt))._firestoreClient||n._terminated)throw new te(Q.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new te(Q.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},HD(n)}function O6(n){if(n._initialized&&!n._terminated)throw new te(Q.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!oi.D())return Promise.resolve();const a=r+tD;await oi.delete(a)}(qE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function k6(n){return function(t){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>t6(await uT(t),r)),r.promise}(Sn(n=Xe(n,Lt)))}function V6(n){return E6(Sn(n=Xe(n,Lt)))}function M6(n){return T6(Sn(n=Xe(n,Lt)))}function L6(n,e){const t=Sn(n=Xe(n,Lt)),r=new D6;return A6(t,n._databaseId,e,r),r}function U6(n,e){return S6(Sn(n=Xe(n,Lt)),e).then(t=>t?new Mn(n,null,t.query):null)}/**
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
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(Dt.fromBase64String(e))}catch(t){throw new te(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pi(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let _a=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Fo=class{constructor(e){this._methodName=e}};/**
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
 */class Ym{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class hT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const B6=/^__.*__$/;class z6{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new zu(e,this.data,t,this.fieldTransforms)}}class $D{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function KD(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Xm{constructor(e,t,r,a,o,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Xm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.$u(e),a}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return hm(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(KD(this.Lu)&&B6.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class F6{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bd(e)}ju(e,t,r,a=!1){return new Xm({Lu:e,methodName:t,zu:r,path:pt.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jo(n){const e=n._freezeSettings(),t=bd(n._databaseId);return new F6(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Zm(n,e,t,r,a,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,e,t,a);yT("Data must be an object, but it was:",u,r);const d=YD(r,u);let p,m;if(o.merge)p=new qn(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const y=[];for(const v of o.mergeFields){const w=Cv(e,v,t);if(!u.contains(w))throw new te(Q.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);ZD(y,w)||y.push(w)}p=new qn(y),m=u.fieldTransforms.filter(v=>p.covers(v.field))}else p=null,m=u.fieldTransforms;return new z6(new _n(d),p,m)}class Sd extends Fo{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Sd}}function QD(n,e,t){return new Xm({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class dT extends Fo{_toFieldTransform(e){return new Ed(e.path,new Eu)}isEqual(e){return e instanceof dT}}class fT extends Fo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=QD(this,e,!0),r=this.Hu.map(o=>qo(o,t)),a=new Po(r);return new Ed(e.path,a)}isEqual(e){return e instanceof fT&&aa(this.Hu,e.Hu)}}class pT extends Fo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=QD(this,e,!0),r=this.Hu.map(o=>qo(o,t)),a=new No(r);return new Ed(e.path,a)}isEqual(e){return e instanceof pT&&aa(this.Hu,e.Hu)}}class mT extends Fo{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new Tu(e.serializer,v1(e.serializer,this.Ju));return new Ed(e.path,t)}isEqual(e){return e instanceof mT&&this.Ju===e.Ju}}function gT(n,e,t,r){const a=n.ju(1,e,t);yT("Data must be an object, but it was:",a,r);const o=[],u=_n.empty();Ia(r,(p,m)=>{const y=vT(e,p,t);m=Ie(m);const v=a.Uu(y);if(m instanceof Sd)o.push(y);else{const w=qo(m,v);w!=null&&(o.push(y),u.set(y,w))}});const d=new qn(o);return new $D(u,d,a.fieldTransforms)}function _T(n,e,t,r,a,o){const u=n.ju(1,e,t),d=[Cv(e,r,t)],p=[a];if(o.length%2!=0)throw new te(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)d.push(Cv(e,o[w])),p.push(o[w+1]);const m=[],y=_n.empty();for(let w=d.length-1;w>=0;--w)if(!ZD(m,d[w])){const S=d[w];let x=p[w];x=Ie(x);const k=u.Uu(S);if(x instanceof Sd)m.push(S);else{const L=qo(x,k);L!=null&&(m.push(S),y.set(S,L))}}const v=new qn(m);return new $D(y,v,u.fieldTransforms)}function WD(n,e,t,r=!1){return qo(t,n.ju(r?4:3,e))}function qo(n,e){if(XD(n=Ie(n)))return yT("Unsupported field value:",e,n),YD(n,e);if(n instanceof Fo)return function(r,a){if(!KD(a.Lu))throw a.Wu(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,a){const o=[];let u=0;for(const d of r){let p=qo(d,a.Ku(u));p==null&&(p={nullValue:"NULL_VALUE"}),o.push(p),u++}return{arrayValue:{values:o}}}(n,e)}return function(r,a){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return v1(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=gt.fromDate(r);return{timestampValue:wu(a.serializer,o)}}if(r instanceof gt){const o=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wu(a.serializer,o)}}if(r instanceof Ym)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:x1(a.serializer,r._byteString)};if(r instanceof Tt){const o=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ME(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof hT)return function(u,d){return{mapValue:{fields:{[AE]:{stringValue:SE},[_u]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return xE(d.serializer,m)})}}}}}}(r,a);throw a.Wu(`Unsupported field value: ${Wm(r)}`)}(n,e)}function YD(n,e){const t={};return QC(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ia(n,(r,a)=>{const o=qo(a,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function XD(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Ym||n instanceof pi||n instanceof Tt||n instanceof Fo||n instanceof hT)}function yT(n,e,t){if(!XD(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Wm(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Cv(n,e,t){if((e=Ie(e))instanceof _a)return e._internalPath;if(typeof e=="string")return vT(n,e);throw hm("Field path arguments must be of type string or ",n,!1,void 0,t)}const j6=new RegExp("[~\\*/\\[\\]]");function vT(n,e,t){if(e.search(j6)>=0)throw hm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _a(...e.split("."))._internalPath}catch{throw hm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function hm(n,e,t,r,a){const o=r&&!r.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(o||u)&&(p+=" (found",o&&(p+=` in field ${r}`),u&&(p+=` in document ${a}`),p+=")"),new te(Q.INVALID_ARGUMENT,d+n+p)}function ZD(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ed{constructor(e,t,r,a,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new q6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class q6 extends ed{data(){return super.data()}}function Jm(n,e){return typeof e=="string"?vT(n,e):e instanceof _a?e._internalPath:e._delegate._internalPath}/**
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
 */function JD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ET{}class Rd extends ET{}function Ks(n,e,...t){let r=[];e instanceof ET&&r.push(e),r=r.concat(t),function(o){const u=o.filter(p=>p instanceof TT).length,d=o.filter(p=>p instanceof eg).length;if(u>1||u>0&&d>0)throw new te(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class eg extends Rd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new eg(e,t,r)}_apply(e){const t=this._parse(e);return tx(e._query,t),new Mn(e.firestore,e.converter,pv(e._query,t))}_parse(e){const t=jo(e.firestore);return function(o,u,d,p,m,y,v){let w;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new te(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){hS(v,y);const x=[];for(const k of v)x.push(cS(p,o,k));w={arrayValue:{values:x}}}else w=cS(p,o,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||hS(v,y),w=WD(d,u,v,y==="in"||y==="not-in");return Fe.create(m,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function H6(n,e,t){const r=e,a=Jm("where",n);return eg._create(a,r,t)}class TT extends ET{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new TT(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const d=o.getFlattenedFilters();for(const p of d)tx(u,p),u=pv(u,p)}(e._query,t),new Mn(e.firestore,e.converter,pv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wT extends Rd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wT(e,t)}_apply(e){const t=function(a,o,u){if(a.startAt!==null)throw new te(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wh(o,u)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(a,o){const u=a.explicitOrderBy.concat([o]);return new ns(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function G6(n,e="asc"){const t=e,r=Jm("orderBy",n);return wT._create(r,t)}class tg extends Rd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new tg(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,tm(e._query,this._limit,this._limitType))}}function $6(n){return MD("limit",n),tg._create("limit",n,"F")}function K6(n){return MD("limitToLast",n),tg._create("limitToLast",n,"L")}class ng extends Rd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ng(e,t,r)}_apply(e){const t=ex(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,o,a.endAt)}(e._query,t))}}function Q6(...n){return ng._create("startAt",n,!0)}function W6(...n){return ng._create("startAfter",n,!1)}class rg extends Rd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new rg(e,t,r)}_apply(e){const t=ex(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,o)}(e._query,t))}}function Y6(...n){return rg._create("endBefore",n,!1)}function X6(...n){return rg._create("endAt",n,!0)}function ex(n,e,t,r){if(t[0]=Ie(t[0]),t[0]instanceof ed)return function(o,u,d,p,m){if(!p)throw new te(Q.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const y=[];for(const v of eu(o))if(v.field.isKeyField())y.push(Do(u,p.key));else{const w=p.data.field(v.field);if(Lm(w))throw new te(Q.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=v.field.canonicalString();throw new te(Q.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}y.push(w)}return new pa(y,m)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=jo(n.firestore);return function(u,d,p,m,y,v){const w=u.explicitOrderBy;if(y.length>w.length)throw new te(Q.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let x=0;x<y.length;x++){const k=y[x];if(w[x].field.isKeyField()){if(typeof k!="string")throw new te(Q.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof k}`);if(!CE(u)&&k.indexOf("/")!==-1)throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${k}' contains a slash.`);const L=u.path.child(ze.fromString(k));if(!ce.isDocumentKey(L))throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const H=new ce(L);S.push(Do(d,H))}else{const L=WD(p,m,k);S.push(L)}}return new pa(S,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function cS(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new te(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!CE(e)&&t.indexOf("/")!==-1)throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ze.fromString(t));if(!ce.isDocumentKey(r))throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Do(n,new ce(r))}if(t instanceof Tt)return Do(n,t._key);throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wm(t)}.`)}function hS(n,e){if(!Array.isArray(n)||n.length===0)throw new te(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tx(n,e){const t=function(a,o){for(const u of a)for(const d of u.getFlattenedFilters())if(o.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new te(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bT{convertValue(e,t="none"){switch(da(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ia(e,(a,o)=>{r[a]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,a;const o=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[_u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>dt(u.doubleValue));return new hT(o)}convertGeoPoint(e){return new Ym(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Um(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp($h(e));default:return null}}convertTimestamp(e){const t=Xi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ze.fromString(e);ye(F1(r));const a=new ha(r.get(1),r.get(3)),o=new ce(r.popFirst(5));return a.isEqual(t)||Vt(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function ig(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Z6 extends bT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}/**
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
 */class vo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ji=class extends ed{constructor(e,t,r,a,o,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},xh=class extends Ji{data(e={}){return super.data(e)}},ya=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new vo(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new xh(this._firestore,this._userDataWriter,r.key,r,new vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const p=new xh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new vo(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{const p=new xh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new vo(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:J6(d.type),doc:p,oldIndex:m,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function J6(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}function nx(n,e){return n instanceof Ji&&e instanceof Ji?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ya&&e instanceof ya&&n._firestore===e._firestore&&qD(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function eF(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return ND(Sn(e),n._key).then(t=>IT(e,n,t))}class Ho extends bT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function tF(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Ho(e);return w6(t,n._key).then(a=>new Ji(e,r,n._key,a,new vo(a!==null&&a.hasLocalMutations,!0),n.converter))}function nF(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return ND(Sn(e),n._key,{source:"server"}).then(t=>IT(e,n,t))}function rF(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Ho(e);return JD(n._query),OD(t,n._query).then(a=>new ya(e,r,n,a))}function iF(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Ho(e);return b6(t,n._query).then(a=>new ya(e,r,n,a))}function sF(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Ho(e);return OD(t,n._query,{source:"server"}).then(a=>new ya(e,r,n,a))}function dS(n,e,t){n=Xe(n,Tt);const r=Xe(n.firestore,Lt),a=ig(n.converter,e,t);return Cd(r,[Zm(jo(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,mt.none())])}function fS(n,e,t,...r){n=Xe(n,Tt);const a=Xe(n.firestore,Lt),o=jo(a);let u;return u=typeof(e=Ie(e))=="string"||e instanceof _a?_T(o,"updateDoc",n._key,e,t,r):gT(o,"updateDoc",n._key,e),Cd(a,[u.toMutation(n._key,mt.exists(!0))])}function aF(n){return Cd(Xe(n.firestore,Lt),[new Fu(n._key,mt.none())])}function oF(n,e){const t=Xe(n.firestore,Lt),r=cm(n),a=ig(n.converter,e);return Cd(t,[Zm(jo(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,mt.exists(!1))]).then(()=>r)}function rx(n,...e){var t,r,a;n=Ie(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Rv(e[u])||(o=e[u],u++);const d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Rv(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let p,m,y;if(n instanceof Tt)m=Xe(n.firestore,Lt),y=Bu(n._key.path),p={next:v=>{e[u]&&e[u](IT(m,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Xe(n,Mn);m=Xe(v.firestore,Lt),y=v._query;const w=new Ho(m);p={next:S=>{e[u]&&e[u](new ya(m,w,v,S))},error:e[u+1],complete:e[u+2]},JD(n._query)}return function(w,S,x,k){const L=new Km(k),H=new tT(S,L,x);return w.asyncQueue.enqueueAndForget(async()=>ZE(await Cu(w),H)),()=>{L.su(),w.asyncQueue.enqueueAndForget(async()=>JE(await Cu(w),H))}}(Sn(m),y,d,p)}function lF(n,e){return I6(Sn(n=Xe(n,Lt)),Rv(e)?e:{next:e})}function Cd(n,e){return function(r,a){const o=new yn;return r.asyncQueue.enqueueAndForget(async()=>Xz(await uT(r),a,o)),o.promise}(Sn(n),e)}function IT(n,e,t){const r=t.docs.get(e._key),a=new Ho(n);return new Ji(n,a,e._key,r,new vo(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const uF={maxAttempts:5};/**
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
 */let cF=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=jo(e)}set(e,t,r){this._verifyNotCommitted();const a=ea(e,this._firestore),o=ig(a.converter,t,r),u=Zm(this._dataReader,"WriteBatch.set",a._key,o,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,mt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const o=ea(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof _a?_T(this._dataReader,"WriteBatch.update",o._key,t,r,a):gT(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ea(e,this._firestore);return this._mutations=this._mutations.concat(new Fu(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(Q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ea(n,e){if((n=Ie(n)).firestore!==e)throw new te(Q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class hF{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=jo(e)}get(e){const t=ea(e,this._firestore),r=new Z6(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return me();const o=a[0];if(o.isFoundDocument())return new ed(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new ed(this._firestore,r,t._key,null,t.converter);throw me()})}set(e,t,r){const a=ea(e,this._firestore),o=ig(a.converter,t,r),u=Zm(this._dataReader,"Transaction.set",a._key,o,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const o=ea(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof _a?_T(this._dataReader,"Transaction.update",o._key,t,r,a):gT(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,u),this}delete(e){const t=ea(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let dF=class extends hF{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ea(e,this._firestore),r=new Ho(this._firestore);return super.get(e).then(a=>new Ji(this._firestore,r,t._key,a._document,new vo(!1,!1),t.converter))}};function fF(n,e,t){n=Xe(n,Lt);const r=Object.assign(Object.assign({},uF),t);return function(o){if(o.maxAttempts<1)throw new te(Q.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,u,d){const p=new yn;return o.asyncQueue.enqueueAndForget(async()=>{const m=await v6(o);new _6(o.asyncQueue,m,d,u,p).Iu()}),p.promise}(Sn(n),a=>e(new dF(n,a)),r)}/**
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
 */function pF(){return new Sd("deleteField")}function mF(){return new dT("serverTimestamp")}function gF(...n){return new fT("arrayUnion",n)}function _F(...n){return new pT("arrayRemove",n)}function yF(n){return new mT("increment",n)}(function(e,t=!0){(function(a){Uu=a})(Ea),ua(new ci("firestore",(r,{instanceIdentifier:a,options:o})=>{const u=r.getProvider("app").getImmediate(),d=new Lt(new d4(r.getProvider("auth-internal")),new m4(u,r.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new te(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ha(m.options.projectId,y)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),Or(HI,GI,e),Or(HI,GI,"esm2017")})();const vF="@firebase/firestore-compat",EF="0.3.45";/**
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
 */function AT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new te("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function pS(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function mS(){if(!W4())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class td{constructor(e){this._delegate=e}static fromBase64String(e){return mS(),new td(pi.fromBase64String(e))}static fromUint8Array(e){return pS(),new td(pi.fromUint8Array(e))}toBase64(){return mS(),this._delegate.toBase64()}toUint8Array(){return pS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Dv(n){return TF(n,["next","error","complete"])}function TF(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class wF{enableIndexedDbPersistence(e,t){return P6(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return N6(e._delegate)}clearIndexedDbPersistence(e){return O6(e._delegate)}}class ix{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ha||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&di("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){R6(this._delegate,e,t,r)}enableNetwork(){return V6(this._delegate)}disableNetwork(){return M6(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,VD("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return k6(this._delegate)}onSnapshotsInSync(e){return lF(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Du(this,FD(this._delegate,e))}catch(t){throw On(t,"collection()","Firestore.collection()")}}doc(e){try{return new Er(this,cm(this._delegate,e))}catch(t){throw On(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nn(this,C6(this._delegate,e))}catch(t){throw On(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return fF(this._delegate,t=>e(new sx(this,t)))}batch(){return Sn(this._delegate),new ax(new cF(this._delegate,e=>Cd(this._delegate,e)))}loadBundle(e){return L6(this._delegate,e)}namedQuery(e){return U6(this._delegate,e).then(t=>t?new Nn(this,t):null)}}class sg extends bT{constructor(e){super(),this.firestore=e}convertBytes(e){return new td(new pi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Er.forKey(t,this.firestore,null)}}function bF(n){l4(n)}class sx{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new sg(e)}get(e){const t=Eo(e);return this._delegate.get(t).then(r=>new nd(this._firestore,new Ji(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=Eo(e);return r?(AT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=Eo(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=Eo(e);return this._delegate.delete(t),this}}class ax{constructor(e){this._delegate=e}set(e,t,r){const a=Eo(e);return r?(AT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=Eo(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=Eo(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Lo{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new xh(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new rd(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Lo.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let o=a.get(t);return o||(o=new Lo(e,new sg(e),t),a.set(t,o)),o}}Lo.INSTANCES=new WeakMap;class Er{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new sg(e)}static forPath(e,t,r){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Er(t,new Tt(t._delegate,r,new ce(e)))}static forKey(e,t,r){return new Er(t,new Tt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Du(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Du(this.firestore,FD(this._delegate,e))}catch(t){throw On(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ie(e),e instanceof Tt?jD(this._delegate,e):!1}set(e,t){t=AT("DocumentReference.set",t);try{return t?dS(this._delegate,e,t):dS(this._delegate,e)}catch(r){throw On(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?fS(this._delegate,e):fS(this._delegate,e,t,...r)}catch(a){throw On(a,"updateDoc()","DocumentReference.update()")}}delete(){return aF(this._delegate)}onSnapshot(...e){const t=ox(e),r=lx(e,a=>new nd(this.firestore,new Ji(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return rx(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=tF(this._delegate):(e==null?void 0:e.source)==="server"?t=nF(this._delegate):t=eF(this._delegate),t.then(r=>new nd(this.firestore,new Ji(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Er(this.firestore,e?this._delegate.withConverter(Lo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function On(n,e,t){return n.message=n.message.replace(e,t),n}function ox(n){for(const e of n)if(typeof e=="object"&&!Dv(e))return e;return{}}function lx(n,e){var t,r;let a;return Dv(n[0])?a=n[0]:Dv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:o=>{a.next&&a.next(e(o))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class nd{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Er(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return nx(this._delegate,e._delegate)}}class rd extends nd{data(e){const t=this._delegate.data(e);return this._delegate._converter||u4(t!==void 0),t}}class Nn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new sg(e)}where(e,t,r){try{return new Nn(this.firestore,Ks(this._delegate,H6(e,t,r)))}catch(a){throw On(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nn(this.firestore,Ks(this._delegate,G6(e,t)))}catch(r){throw On(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nn(this.firestore,Ks(this._delegate,$6(e)))}catch(t){throw On(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nn(this.firestore,Ks(this._delegate,K6(e)))}catch(t){throw On(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,Q6(...e)))}catch(t){throw On(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nn(this.firestore,Ks(this._delegate,W6(...e)))}catch(t){throw On(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nn(this.firestore,Ks(this._delegate,Y6(...e)))}catch(t){throw On(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,X6(...e)))}catch(t){throw On(t,"endAt()","Query.endAt()")}}isEqual(e){return qD(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=iF(this._delegate):(e==null?void 0:e.source)==="server"?t=sF(this._delegate):t=rF(this._delegate),t.then(r=>new xv(this.firestore,new ya(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=ox(e),r=lx(e,a=>new xv(this.firestore,new ya(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return rx(this._delegate,t,r)}withConverter(e){return new Nn(this.firestore,e?this._delegate.withConverter(Lo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class IF{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new rd(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class xv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new rd(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new IF(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new rd(this._firestore,r))})}isEqual(e){return nx(this._delegate,e._delegate)}}class Du extends Nn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Er(this.firestore,e):null}doc(e){try{return e===void 0?new Er(this.firestore,cm(this._delegate)):new Er(this.firestore,cm(this._delegate,e))}catch(t){throw On(t,"doc()","CollectionReference.doc()")}}add(e){return oF(this._delegate,e).then(t=>new Er(this.firestore,t))}isEqual(e){return jD(this._delegate,e._delegate)}withConverter(e){return new Du(this.firestore,e?this._delegate.withConverter(Lo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Eo(n){return Xe(n,Tt)}/**
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
 */class ST{constructor(...e){this._delegate=new _a(...e)}static documentId(){return new ST(pt.keyField().canonicalString())}isEqual(e){return e=Ie(e),e instanceof _a?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class mo{static serverTimestamp(){const e=mF();return e._methodName="FieldValue.serverTimestamp",new mo(e)}static delete(){const e=pF();return e._methodName="FieldValue.delete",new mo(e)}static arrayUnion(...e){const t=gF(...e);return t._methodName="FieldValue.arrayUnion",new mo(t)}static arrayRemove(...e){const t=_F(...e);return t._methodName="FieldValue.arrayRemove",new mo(t)}static increment(e){const t=yF(e);return t._methodName="FieldValue.increment",new mo(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const AF={Firestore:ix,GeoPoint:Ym,Timestamp:gt,Blob:td,Transaction:sx,WriteBatch:ax,DocumentReference:Er,DocumentSnapshot:nd,Query:Nn,QueryDocumentSnapshot:rd,QuerySnapshot:xv,CollectionReference:Du,FieldPath:ST,FieldValue:mo,setLogLevel:bF,CACHE_SIZE_UNLIMITED:x6};function SF(n,e){n.INTERNAL.registerComponent(new ci("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},AF)))}/**
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
 */function RF(n){SF(n,(e,t)=>new ix(e,t,new wF)),n.registerVersion(vF,EF)}RF(ku);const CF={apiKey:"AIzaSyDs2qr5Kzod2pdFTCeUzr27ge2gOQlZM4g",authDomain:"react-app-mini-blog-f3621.firebaseapp.com",projectId:"react-app-mini-blog-f3621",storageBucket:"react-app-mini-blog-f3621.firebasestorage.app",messagingSenderId:"349056831117",appId:"1:349056831117:web:a0972c1ed7e02e9c545cc4"},DF=ku.initializeApp(CF),va=DF.firestore();function Dd(n){const e=String(n.userId),[t,r]=Y.useState({id:0,name:"오류"});return Y.useEffect(()=>{console.log("사용자자 로드 시도"),console.log("입력값",e),va.collection("user").doc(e).get().then(a=>{r(a.data()),console.log("로드된 사용자",t)})},[e]),t?F.jsx("span",{children:t.name}):F.jsx("span",{children:"사용자"})}const xF=Re.div`
    margin: 0px;
    padding: 4px 0;
    display: block;

    & > b {
        font-weight: 600;
        color: #555555;
        font-size: 16px;
    }
    &:hover {
    & > b { 
    color: #FFB938;
    }
    }
`;function PF(n){const{user:e,onClick:t}=n;return F.jsx(xF,{onClick:t,children:F.jsx("b",{children:e.name})})}const NF=Re.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ffffff;
  border-radius: 4px;
  margin-top: 2px;
`;function OF(n){const{users:e,itemClicked:t}=n,r=e.map((a,o)=>F.jsx(PF,{user:a,onClick:u=>t(a)},a.id));return F.jsx(NF,{children:r})}const ux=Y.createContext(),kF=({children:n})=>{const[e,t]=Y.useState("1");return F.jsx(ux.Provider,{value:{userId:e,setUserId:t},children:n})},RT=()=>Y.useContext(ux),VF=Re.img`
height: 100%;
`;function CT(n){const e=String(n.userId),[t,r]=Y.useState({id:0,name:"오류"});return Y.useEffect(()=>{va.collection("user").doc(e).get().then(a=>{r(a.data())})},[e]),t?F.jsx(VF,{src:t.img}):F.jsx("div",{})}const MF=Re.div`
  width: 60px;
  height: 100vh;
  position: fixed;
  left: 0;
  background-color: #ffffff;
  border-right: 1px solid #222222;
  z-index: 2;
`,LF=Re.button`
  background: none; 
  border: none;
  width: 60px;
  height: 61px;
  border-bottom: 1px solid #222222;
  display: grid;
  place-items: center;
  text-align: center;
  
  & > div { 
  width: 40px;
  height: 40px;
  background-color: #FFB938;
  border-radius: 50%;
  display: grid;
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  place-items: center;
  }
`,UF=Re.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 100px);
  padding: 20px 0px;

`,gS=Re.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 28px;
`,BF=Re.div`
  background-color: #eeeeee;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  z-index: 2;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`,zF=Re.div`
  font-size: 12px;
  position: fixed;
  display: flex;
  bottom:81px;
  left: 0px;
  min-width: 200px;
  transition: all 0.3s ease;
  color: #444444;
  align-items: flex-end;
  font-size: 12px;
  font-weight: 300;
`,FF=Re.div`
  margin-left: 4px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #f8f8f8;

`,jF=Re.div`
  border-radius: 8px;
  padding: 12px 32px 0 32px;
  margin-left: -26px;

  background-color: #f8f8f8;

  & > p {

font-weight: 500;
  
  & > b {
  font-size: 18px;
  }}
`;function DT(n){const e=vm(),{user:t,onClick:r}=n,{userId:a,setUserId:o}=RT(),[u,d]=Y.useState([]);Y.useEffect(()=>{let v=[];va.collection("user").get().then(function(w){w.forEach(function(S){v.push(S.data())}),d(v)})},[]);const[p,m]=Y.useState(!1),y=()=>{m(!p)};return F.jsxs(MF,{children:[F.jsx(LF,{onClick:v=>e("/"),children:F.jsx("div",{children:"B"})}),F.jsxs(UF,{children:[F.jsxs(gS,{children:[F.jsx(tp,{iconLink:"fa-solid fa-house",onClick:v=>e("/")}),F.jsx(tp,{iconLink:"fa-solid fa-user-group",onClick:y}),F.jsx(tp,{iconLink:"fa-solid fa-bell"})]}),F.jsxs(gS,{children:[p&&F.jsxs(zF,{children:[F.jsx(FF,{}),F.jsxs(jF,{children:["다른 사용자로 로그인",F.jsx(OF,{users:u,itemClicked:v=>{o(`${v.id}`)}}),F.jsxs("p",{children:["현재 로그인 계정",F.jsx("br",{})," ",F.jsx("b",{children:a&&F.jsx(Dd,{userId:a})})]})]})]}),F.jsx(BF,{onClick:y,children:F.jsx(CT,{userId:a})}),F.jsx(tp,{iconLink:"fa-solid fa-gear"})]})]})]})}const qF=Re.button`
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    padding: 0px 16px;
    height: 40px;
    color: #FFB938;
    border: 1px solid #FFB938;
    border-radius: 22px;
    display: block;
`;function cx(n){const{title:e,onClick:t}=n;return F.jsx(qF,{onClick:t,children:e||"Button"})}const HF=Re.div`
  width: calc(100% + 40px);
  height: 60px;
  background-color: #ffffff;
  position: relative;
  left: -20px;
  display: flex;
  place-items: center;
  border-bottom: 1px solid #222222;
  z-index: 1;

  & > Button {
  position: fixed;
  right: 20px;
  }
  
  & > h1 {
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
  }
`;Re.div`
  height: 80px;
`;function xT(n){return F.jsx("div",{children:F.jsxs(HF,{children:[F.jsx("h1",{children:n.pageTitle}),n.buttonTitle&&F.jsx(cx,{title:n.buttonTitle,onClick:n.onClick})]})})}const GF=Re.div`
    margin: 0px;
    padding: 12px;
    display: block;
    border-bottom: 1px solid #aaaaaa;
`,$F=Re.p`
    padding: 0px;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 16px;
    margin-top: 8px;
`,KF=Re.div`
    margin: 0px;
    padding: 0px;
    font-weight: 400;
    font-size: 18px;
`,QF=Re.div`
    display: flex;
    align-items: center;
    gap: 16px;
    color: #666666;
`;function WF(n){const{post:e,onClick:t}=n;return F.jsxs(GF,{onClick:t,children:[F.jsxs(KF,{children:[F.jsx(Dd,{userId:e.writer}),"님의 게시물입니다."]}),F.jsx($F,{children:e.title}),F.jsxs(QF,{children:[F.jsx(Lp,{iconLink:"fa-regular fa-heart"})," ",F.jsx(Lp,{iconLink:"fa-regular fa-comment-dots"}),"작성일자 | ",e.formattedDate]})]})}const YF=Re.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px
`;function XF(n){const{posts:e,itemClicked:t}=n,r=e.map((a,o)=>F.jsx(WF,{post:a,onClick:u=>t(a)},a.id));return F.jsx(YF,{children:r})}const ZF=Re.form`
    height: 40px;
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: flex-end;
    line-height: 240%;
    margin-bottom: 12px;
    margin-top: 40px;
    & > p {
        margin: 0;
        padding: 0;
        border-bottom: 1px #444444 solid;
        width: auto;
        flex-grow: 1;
    }
`,Qs=Re.label`

        & > input {
        position: absolute;
        opacity: 0;
        }
        & > h5 {
        margin: 0;
        padding: 0 8px 0px 8px;
        border: none;
        background-color: #ffffff;
        border-bottom: 2px #444444 solid;
        color: #444444;
        font-size: 20px;
        font-weight: 700;
        }
        & > input:checked + h5 {
        color: #FFB938;
        border-bottom: 2px #FFB938 solid;
        }

`;function JF(n){const e=vm(),[t,r]=Y.useState({none:!0,mon:!1,tues:!1,wednes:!1,thurs:!1,fri:!1,satur:!1,sun:!1}),a=p=>{r({none:!1,mon:!1,tues:!1,wednes:!1,thurs:!1,fri:!1,satur:!1,sun:!1,[p]:!0})},o=Object.keys(t).filter(p=>t[p]),[u,d]=Y.useState([]);return Y.useEffect(()=>{let p=[];va.collection("post").get().then(function(m){m.forEach(function(v){p.push(v.data())});const y=p.filter(v=>o.some(w=>v.daylabel[w]));d(y)})},[o]),F.jsxs("div",{children:[F.jsx(DT,{}),F.jsx(xT,{pageTitle:"Mainpage",buttonTitle:"글쓰기",onClick:p=>{e("/write")}}),F.jsxs(ZF,{children:[F.jsxs(Qs,{children:[F.jsx("input",{type:"radio",checked:t.none,onChange:()=>a("none")}),F.jsx("h5",{children:"요일무관"})]}),F.jsxs(Qs,{children:[F.jsx("input",{type:"radio",checked:t.mon,onChange:()=>a("mon")}),F.jsx("h5",{children:"월"})]}),F.jsxs(Qs,{children:[F.jsx("input",{type:"radio",checked:t.tues,onChange:()=>a("tues")}),F.jsx("h5",{children:"화"})]}),F.jsxs(Qs,{children:[F.jsx("input",{type:"radio",checked:t.wednes,onChange:()=>a("wednes")}),F.jsx("h5",{children:"수"})]}),F.jsxs(Qs,{children:[F.jsx("input",{type:"radio",checked:t.thurs,onChange:()=>a("thurs")}),F.jsx("h5",{children:"목"})]}),F.jsxs(Qs,{children:[F.jsx("input",{type:"radio",checked:t.fri,onChange:()=>a("fri")}),F.jsx("h5",{children:"금"})]}),F.jsxs(Qs,{children:[F.jsx("input",{type:"radio",checked:t.satur,onChange:()=>a("satur")}),F.jsx("h5",{children:"토"})]}),F.jsxs(Qs,{children:[F.jsx("input",{type:"radio",checked:t.sun,onChange:()=>a("sun")}),F.jsx("h5",{children:"일"})]}),F.jsx("p",{children:"검색을 원하는 요일을 선택해주세요!"})]}),F.jsx(XF,{posts:u,itemClicked:p=>{e(`/post/${p.id}`)}})]})}const e5=Re.div`
    box-sizing: border-box;
`,t5=Re.div`
    height: 40px;
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: flex-end;
    line-height: 40px;
    margin-bottom: 12px;
    margin-top: 40px;

    & > h1 {
        margin: 0;
        padding: 0;
        border-bottom: 2px #444444 solid;
        color: #444444;
        font-size: 20px;
        font-weight: 700;

    }
    & > p {
        margin: 0;
        padding: 0;
        border-bottom: 1px #444444 solid;
        width: auto;
        flex-grow: 1;
    }
`,n5=Re.textarea`
    box-sizing: border-box;
    height: ${n=>n.height}px;
    width: 100%;
    resize: none;
    display: block;
    border:none;
    background-color: #f8f8f8;
    border-radius: 4px;
    margin-left: auto; 
    margin-right: auto;
    margin-bottom: 20px;
    padding: 20px;
`;function uo(n){const{height:e,value:t,onChange:r,title:a,description:o,type:u}=n;return F.jsxs(e5,{children:[F.jsxs(t5,{children:[F.jsx("h1",{children:a||"작성하세요."}),F.jsx("p",{children:o})]}),!u&&F.jsx(n5,{height:e||80,value:t,onChange:r})]})}const r5=Re.div`
width: 600px;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
`,i5=Re.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 32px;
`,s5=Re.form`
  display: flex;
  `,Ws=Re.label`
  & > h5 {
  box-sizing: border-box;
  height: 48px;
  line-height: 44px;
  color: #cccccc;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  padding: 0;
  padding: 0px 12px;
  border-radius: 24px;
  min-width: 48px;
  margin-right: 8px;
  border: 2px solid #cccccc;
  }
  & > input {
  position: absolute;
  opacity: 0;
  }
  & > input:checked + h5 {
  color: #ffffff;
  border: 2px solid #FFB938;
  background-color: #FFB938;}
`;function a5(n){const e=vm(),{userId:t}=RT(),[r,a]=Y.useState({none:!0,mon:!1,tues:!1,wednes:!1,thurs:!1,fri:!1,satur:!1}),[o,u]=Y.useState("");Y.useEffect(()=>{const k=new Date,L=k.getFullYear(),H=String(k.getMonth()+1).padStart(2,"0"),X=String(k.getDate()).padStart(2,"0"),oe=["일","월","화","수","목","금","토"][k.getDay()];u(`${L}-${H}-${X}, ${oe}요일`)},[]);const d=k=>{a(k==="none"?{none:!r.none,mon:!1,tues:!1,wednes:!1,thurs:!1,fri:!1,satur:!1,sun:!1}:L=>{const H={...L,[k]:!L[k],none:!1};return Object.keys(H).every(K=>K==="none"||H[K]===!1)&&(H.none=!0),H})},[p,m]=Y.useState(""),[y,v]=Y.useState(""),[w,S]=Y.useState(""),x=()=>{let k=new Date().getTime().toString();va.collection("post").doc(k).set({id:k,writer:t,formattedDate:o,daylabel:r,title:p,subtitle:w,content:y,comments:[]}).then(()=>{alert("글이 등록되었습니다!"),e("/")})};return F.jsxs("div",{children:[F.jsx(DT,{}),F.jsx(xT,{pageTitle:"글을 작성하세요.",buttonTitle:"게시하기",onClick:k=>{x()}}),F.jsxs(r5,{children:[F.jsxs(i5,{children:[F.jsx(uo,{title:"작성자",description:t,type:"."}),F.jsx(uo,{title:"작성일",description:o,type:".",height:"56",value:o})]}),F.jsx(uo,{title:"관련요일",description:"*중복선택가능",type:".",height:"56",value:y}),F.jsxs(s5,{children:[F.jsxs(Ws,{children:[F.jsx("input",{type:"checkbox",checked:r.none,onChange:()=>d("none")}),F.jsx("h5",{children:"요일무관"})]}),F.jsxs(Ws,{children:[F.jsx("input",{type:"checkbox",checked:r.mon,onChange:()=>d("mon")}),F.jsx("h5",{children:"월"})]}),F.jsxs(Ws,{children:[F.jsx("input",{type:"checkbox",checked:r.tues,onChange:()=>d("tues")}),F.jsx("h5",{children:"화"})]}),F.jsxs(Ws,{children:[F.jsx("input",{type:"checkbox",checked:r.wednes,onChange:()=>d("wednes")}),F.jsx("h5",{children:"수"})]}),F.jsxs(Ws,{children:[F.jsx("input",{type:"checkbox",checked:r.thurs,onChange:()=>d("thurs")}),F.jsx("h5",{children:"목"})]}),F.jsxs(Ws,{children:[F.jsx("input",{type:"checkbox",checked:r.fri,onChange:()=>d("fri")}),F.jsx("h5",{children:"금"})]}),F.jsxs(Ws,{children:[F.jsx("input",{type:"checkbox",checked:r.satur,onChange:()=>d("satur")}),F.jsx("h5",{children:"토"})]}),F.jsxs(Ws,{children:[F.jsx("input",{type:"checkbox",checked:r.sun,onChange:()=>d("sun")}),F.jsx("h5",{children:"일"})]})]}),F.jsx(uo,{title:"제목",height:"56",value:p,onChange:k=>m(k.target.value)}),F.jsx(uo,{title:"부제목",height:"56",value:w,onChange:k=>S(k.target.value)}),F.jsx(uo,{title:"내용",height:"121",value:y,onChange:k=>v(k.target.value)})]})]})}const o5=Re.div`
    display: flex;
    background-color: #ffffff;
    padding: 0;

    gap: 16px;
`,l5=Re.div`
    width: 40px;
    height: 40px;
    background-color: #eeeeee;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`,u5=Re.div`
    padding: 0;
    margin: 0;
`,c5=Re.p`
    font-size: 13px;
    padding: 0;
    margin: 0;
    width: 224px;
    text-align : justify;
`,h5=Re.div`
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    margin-bottom: 6px;
    & > h1{
    font-size: 13px;
    font-weight: 600;
    color: #111111;
    padding: 0;
    margin: 0;
    }

    & > h2{
    font-size: 13px;
    font-weight: 300;
    color: #666666;
    padding: 0;
    margin: 0;
    }
`;function d5(n){const{comments:e}=n;return F.jsxs(o5,{children:[F.jsx(l5,{children:F.jsx(CT,{userId:e.writer})}),F.jsxs(u5,{children:[F.jsxs(h5,{children:[F.jsx("h1",{children:F.jsx(Dd,{userId:e.writer})}),F.jsx("h2",{children:e.time})]}),F.jsx(c5,{children:e.comment})]})]})}const f5=Re.div`
  background-color: #ffffff;
  width: 320px;
  height: 100vh;
  border-left: 1px solid #222222;
`,p5=Re.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 24px;
`,m5=Re.div`

  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  width: calc(100% - 20px);
  height: 60px;
  border-bottom: 1px solid #222222;
  & > div {
  display: flex;
  gap: 12px;
  align-items: center;
  }
  & > div > h1{
  font-size: 20px;
  font-weight: 600;
  color: #FFB938;
  }
`,g5=Re.div`
width: 48px;
height: 48px;
overflow: hidden;
border-radius: 24px;
display: flex;
justify-content: center;
align-items: center;
`;function _5(n){const{postId:e}=n,{userId:t}=RT(),[r,a]=Y.useState(""),[o,u]=Y.useState([]),[d,p]=Y.useState("");Y.useEffect(()=>{const w=new Date,S=w.getFullYear(),x=String(w.getMonth()+1).padStart(2,"0"),k=String(w.getDate()).padStart(2,"0");p(`${S}.${x}.${k} 작성`)},[]);const m=()=>{let w=[];va.collection("comments").get().then(function(S){S.forEach(function(k){w.push(k.data())});const x=w.filter(k=>k.post==e);u(x)})};Y.useEffect(()=>{m()},[]);const y=o.map((w,S)=>F.jsx(d5,{comments:w,onClick:x=>itemClicked(post)},w.id)),v=()=>{let w=new Date().getTime().toString();va.collection("comments").doc(e+"CM"+w).set({post:e,time:d,id:w,writer:t,comment:r}).then(()=>{alert("댓글이 등록되었습니다!"),a(""),m()})};return F.jsxs(f5,{children:[F.jsxs(m5,{children:[F.jsxs("div",{children:[F.jsx(g5,{children:F.jsx(CT,{userId:t})}),F.jsxs("h1",{children:[F.jsx(Dd,{userId:t}),"님"]})]}),F.jsx(cx,{title:"댓글작성",onClick:v})]}),F.jsxs(p5,{children:[F.jsx(uo,{height:"20",title:"댓글을 입력하세요.",value:r,onChange:w=>{a(w.target.value)}}),y]})]})}const y5=Re.div`
    width: 680px;
    margin-left:auto;
    margin-right:auto;
    position: relative;
    box-sizing: border-box;
`,v5=Re.div`
    height: 40px;
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: flex-end;
    line-height: 40px;
    margin-bottom: 12px;
    margin-top: 40px;

    & > h1 {
        margin: 0;
        padding: 0;
        border-bottom: 2px #444444 solid;
        color: #444444;
        font-size: 34px;
        font-weight: 700;
        line-height: 160%;
    }
    & > p {
        margin: 0;
        padding: 0;
        border-bottom: 1px #444444 solid;

        width: auto;
        flex-grow: 1;
    }
`,E5=Re.div`
    font-size: 15px;
    font-weight: 400;
    color: #222222;
    line-height: 160%;
    box-sizing: border-box;
    display: block;
    border:none;
    background-color: #f8f8f8;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 32px;
`,T5=Re.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    color: #666666;
`,w5=Re.div`
height: 48px;
border-left: 4px solid #444444;
font-size: 15px;
font-height: 120%;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 16px;
& > h5{
margin: 0;
padding: 0;
}
`;function b5(n){const{post:e}=n;return F.jsxs(y5,{children:[F.jsxs(v5,{children:[F.jsx("h1",{children:e.title||"제목이 없습니다."}),F.jsx("p",{})]}),F.jsx(E5,{children:e.content||"내용이 없습니다."}),F.jsxs(T5,{children:[F.jsxs(w5,{children:[F.jsxs("h5",{children:[F.jsx(Dd,{userId:e.writer}),"님에 의하여"]}),F.jsxs("h5",{children:[e.formattedDate,"에 작성"]})]}),F.jsx(Lp,{iconLink:"fa-regular fa-heart"})," ",F.jsx(Lp,{iconLink:"fa-regular fa-comment-dots"})]})]})}const I5=Re.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0px;
`,A5=Re.div`
  flex: 1;
  padding-right: 20px;
`;function S5(n){const e=bO().id,[t,r]=Y.useState({id:0,comments:[],content:"",day:"",daylabel:[{fri:!1},{mon:!1},{none:!0},{satur:!1},{thurs:!1},{tues:!1},{wednes:!1}],subtitle:"",title:"",writer:"1"});return Y.useEffect(()=>{console.log("데이터 로드 시도"),va.collection("post").doc(e).get().then(a=>{r(a.data()),console.log("로드된 데이터:",t)})},[]),F.jsxs("div",{children:[F.jsx(DT,{}),t?F.jsxs(I5,{children:[F.jsxs(A5,{children:[F.jsx(xT,{pageTitle:t.subtitle||`${t.title||"부제목이 없습니다."}`}),F.jsx(b5,{post:t})]}),F.jsx(_5,{postId:e})]}):F.jsx("p",{children:"Loading..."})]})}const R5=Re.div`
  margin-left: 60px;
  box-sizing: border-box;
  padding: 0px 20px;
  width: calc(100vw - 60px);
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
`;GP.createRoot(document.getElementById("root")).render(F.jsx(kF,{children:F.jsx(ok,{children:F.jsx(R5,{children:F.jsxs(UO,{children:[F.jsx(mp,{index:!0,element:F.jsx(JF,{})}),F.jsx(mp,{path:"write",element:F.jsx(a5,{})}),F.jsx(mp,{path:"post/:id",element:F.jsx(S5,{})})]})})})}));
