(function(ie,W){typeof exports=="object"&&typeof module<"u"?W(exports,require("react"),require("@dashflowx/core")):typeof define=="function"&&define.amd?define(["exports","react","@dashflowx/core"],W):(ie=typeof globalThis<"u"?globalThis:ie||self,W(ie.dashflowx={},ie.React,ie.dashflowx))})(this,function(ie,W,J){"use strict";var $n={exports:{}},ar={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs;function ao(){if(Bs)return ar;Bs=1;var t=W,e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(o,c,u){var f,m={},k=null,R=null;u!==void 0&&(k=""+u),c.key!==void 0&&(k=""+c.key),c.ref!==void 0&&(R=c.ref);for(f in c)n.call(c,f)&&!i.hasOwnProperty(f)&&(m[f]=c[f]);if(o&&o.defaultProps)for(f in c=o.defaultProps,c)m[f]===void 0&&(m[f]=c[f]);return{$$typeof:e,type:o,key:k,ref:R,props:m,_owner:s.current}}return ar.Fragment=r,ar.jsx=a,ar.jsxs=a,ar}var or={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws;function oo(){return Ws||(Ws=1,process.env.NODE_ENV!=="production"&&function(){var t=W,e=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),o=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),R=Symbol.for("react.offscreen"),U=Symbol.iterator,oe="@@iterator";function q(l){if(l===null||typeof l!="object")return null;var v=U&&l[U]||l[oe];return typeof v=="function"?v:null}var H=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function A(l){{for(var v=arguments.length,E=new Array(v>1?v-1:0),D=1;D<v;D++)E[D-1]=arguments[D];he("error",l,E)}}function he(l,v,E){{var D=H.ReactDebugCurrentFrame,Z=D.getStackAddendum();Z!==""&&(v+="%s",E=E.concat([Z]));var ee=E.map(function(B){return String(B)});ee.unshift("Warning: "+v),Function.prototype.apply.call(console[l],console,ee)}}var me=!1,K=!1,X=!1,ce=!1,Be=!1,Ce;Ce=Symbol.for("react.module.reference");function ye(l){return!!(typeof l=="string"||typeof l=="function"||l===n||l===i||Be||l===s||l===u||l===f||ce||l===R||me||K||X||typeof l=="object"&&l!==null&&(l.$$typeof===k||l.$$typeof===m||l.$$typeof===a||l.$$typeof===o||l.$$typeof===c||l.$$typeof===Ce||l.getModuleId!==void 0))}function Xt(l,v,E){var D=l.displayName;if(D)return D;var Z=v.displayName||v.name||"";return Z!==""?E+"("+Z+")":E}function V(l){return l.displayName||"Context"}function L(l){if(l==null)return null;if(typeof l.tag=="number"&&A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case n:return"Fragment";case r:return"Portal";case i:return"Profiler";case s:return"StrictMode";case u:return"Suspense";case f:return"SuspenseList"}if(typeof l=="object")switch(l.$$typeof){case o:var v=l;return V(v)+".Consumer";case a:var E=l;return V(E._context)+".Provider";case c:return Xt(l,l.render,"ForwardRef");case m:var D=l.displayName||null;return D!==null?D:L(l.type)||"Memo";case k:{var Z=l,ee=Z._payload,B=Z._init;try{return L(B(ee))}catch{return null}}}return null}var Q=Object.assign,se=0,Ie,xe,wt,bt,xt,zr,Zr;function Pn(){}Pn.__reactDisabledLog=!0;function Nn(){{if(se===0){Ie=console.log,xe=console.info,wt=console.warn,bt=console.error,xt=console.group,zr=console.groupCollapsed,Zr=console.groupEnd;var l={configurable:!0,enumerable:!0,value:Pn,writable:!0};Object.defineProperties(console,{info:l,log:l,warn:l,error:l,group:l,groupCollapsed:l,groupEnd:l})}se++}}function Ds(){{if(se--,se===0){var l={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Q({},l,{value:Ie}),info:Q({},l,{value:xe}),warn:Q({},l,{value:wt}),error:Q({},l,{value:bt}),group:Q({},l,{value:xt}),groupCollapsed:Q({},l,{value:zr}),groupEnd:Q({},l,{value:Zr})})}se<0&&A("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Dt=H.ReactCurrentDispatcher,Qt;function Et(l,v,E){{if(Qt===void 0)try{throw Error()}catch(Z){var D=Z.stack.trim().match(/\n( *(at )?)/);Qt=D&&D[1]||""}return`
`+Qt+l}}var er=!1,tr;{var Dn=typeof WeakMap=="function"?WeakMap:Map;tr=new Dn}function jn(l,v){if(!l||er)return"";{var E=tr.get(l);if(E!==void 0)return E}var D;er=!0;var Z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ee;ee=Dt.current,Dt.current=null,Nn();try{if(v){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(Te){D=Te}Reflect.construct(l,[],B)}else{try{B.call()}catch(Te){D=Te}l.call(B.prototype)}}else{try{throw Error()}catch(Te){D=Te}l()}}catch(Te){if(Te&&D&&typeof Te.stack=="string"){for(var F=Te.stack.split(`
`),Ee=D.stack.split(`
`),le=F.length-1,ue=Ee.length-1;le>=1&&ue>=0&&F[le]!==Ee[ue];)ue--;for(;le>=1&&ue>=0;le--,ue--)if(F[le]!==Ee[ue]){if(le!==1||ue!==1)do if(le--,ue--,ue<0||F[le]!==Ee[ue]){var Ne=`
`+F[le].replace(" at new "," at ");return l.displayName&&Ne.includes("<anonymous>")&&(Ne=Ne.replace("<anonymous>",l.displayName)),typeof l=="function"&&tr.set(l,Ne),Ne}while(le>=1&&ue>=0);break}}}finally{er=!1,Dt.current=ee,Ds(),Error.prepareStackTrace=Z}var ir=l?l.displayName||l.name:"",Lt=ir?Et(ir):"";return typeof l=="function"&&tr.set(l,Lt),Lt}function Ln(l,v,E){return jn(l,!1)}function Mn(l){var v=l.prototype;return!!(v&&v.isReactComponent)}function qr(l,v,E){if(l==null)return"";if(typeof l=="function")return jn(l,Mn(l));if(typeof l=="string")return Et(l);switch(l){case u:return Et("Suspense");case f:return Et("SuspenseList")}if(typeof l=="object")switch(l.$$typeof){case c:return Ln(l.render);case m:return qr(l.type,v,E);case k:{var D=l,Z=D._payload,ee=D._init;try{return qr(ee(Z),v,E)}catch{}}}return""}var rr=Object.prototype.hasOwnProperty,js={},d=H.ReactDebugCurrentFrame;function p(l){if(l){var v=l._owner,E=qr(l.type,l._source,v?v.type:null);d.setExtraStackFrame(E)}else d.setExtraStackFrame(null)}function g(l,v,E,D,Z){{var ee=Function.call.bind(rr);for(var B in l)if(ee(l,B)){var F=void 0;try{if(typeof l[B]!="function"){var Ee=Error((D||"React class")+": "+E+" type `"+B+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof l[B]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Ee.name="Invariant Violation",Ee}F=l[B](v,B,D,E,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(le){F=le}F&&!(F instanceof Error)&&(p(Z),A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",D||"React class",E,B,typeof F),p(null)),F instanceof Error&&!(F.message in js)&&(js[F.message]=!0,p(Z),A("Failed %s type: %s",E,F.message),p(null))}}}var x=Array.isArray;function w(l){return x(l)}function _(l){{var v=typeof Symbol=="function"&&Symbol.toStringTag,E=v&&l[Symbol.toStringTag]||l.constructor.name||"Object";return E}}function C(l){try{return z(l),!1}catch{return!0}}function z(l){return""+l}function ne(l){if(C(l))return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",_(l)),z(l)}var pe=H.ReactCurrentOwner,It={key:!0,ref:!0,__self:!0,__source:!0},Un,nr,jt;jt={};function Ls(l){if(rr.call(l,"ref")){var v=Object.getOwnPropertyDescriptor(l,"ref").get;if(v&&v.isReactWarning)return!1}return l.ref!==void 0}function Vn(l){if(rr.call(l,"key")){var v=Object.getOwnPropertyDescriptor(l,"key").get;if(v&&v.isReactWarning)return!1}return l.key!==void 0}function Ms(l,v){if(typeof l.ref=="string"&&pe.current&&v&&pe.current.stateNode!==v){var E=L(pe.current.type);jt[E]||(A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',L(pe.current.type),l.ref),jt[E]=!0)}}function Fn(l,v){{var E=function(){Un||(Un=!0,A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",v))};E.isReactWarning=!0,Object.defineProperty(l,"key",{get:E,configurable:!0})}}function wh(l,v){{var E=function(){nr||(nr=!0,A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",v))};E.isReactWarning=!0,Object.defineProperty(l,"ref",{get:E,configurable:!0})}}var bh=function(l,v,E,D,Z,ee,B){var F={$$typeof:e,type:l,key:v,ref:E,props:B,_owner:ee};return F._store={},Object.defineProperty(F._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(F,"_self",{configurable:!1,enumerable:!1,writable:!1,value:D}),Object.defineProperty(F,"_source",{configurable:!1,enumerable:!1,writable:!1,value:Z}),Object.freeze&&(Object.freeze(F.props),Object.freeze(F)),F};function xh(l,v,E,D,Z){{var ee,B={},F=null,Ee=null;E!==void 0&&(ne(E),F=""+E),Vn(v)&&(ne(v.key),F=""+v.key),Ls(v)&&(Ee=v.ref,Ms(v,Z));for(ee in v)rr.call(v,ee)&&!It.hasOwnProperty(ee)&&(B[ee]=v[ee]);if(l&&l.defaultProps){var le=l.defaultProps;for(ee in le)B[ee]===void 0&&(B[ee]=le[ee])}if(F||Ee){var ue=typeof l=="function"?l.displayName||l.name||"Unknown":l;F&&Fn(B,ue),Ee&&wh(B,ue)}return bh(l,F,Ee,Z,D,pe.current,B)}}var Us=H.ReactCurrentOwner,Qa=H.ReactDebugCurrentFrame;function sr(l){if(l){var v=l._owner,E=qr(l.type,l._source,v?v.type:null);Qa.setExtraStackFrame(E)}else Qa.setExtraStackFrame(null)}var Vs;Vs=!1;function Fs(l){return typeof l=="object"&&l!==null&&l.$$typeof===e}function eo(){{if(Us.current){var l=L(Us.current.type);if(l)return`

Check the render method of \``+l+"`."}return""}}function Eh(l){return""}var to={};function Ih(l){{var v=eo();if(!v){var E=typeof l=="string"?l:l.displayName||l.name;E&&(v=`

Check the top-level render call using <`+E+">.")}return v}}function ro(l,v){{if(!l._store||l._store.validated||l.key!=null)return;l._store.validated=!0;var E=Ih(v);if(to[E])return;to[E]=!0;var D="";l&&l._owner&&l._owner!==Us.current&&(D=" It was passed a child from "+L(l._owner.type)+"."),sr(l),A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',E,D),sr(null)}}function no(l,v){{if(typeof l!="object")return;if(w(l))for(var E=0;E<l.length;E++){var D=l[E];Fs(D)&&ro(D,v)}else if(Fs(l))l._store&&(l._store.validated=!0);else if(l){var Z=q(l);if(typeof Z=="function"&&Z!==l.entries)for(var ee=Z.call(l),B;!(B=ee.next()).done;)Fs(B.value)&&ro(B.value,v)}}}function Th(l){{var v=l.type;if(v==null||typeof v=="string")return;var E;if(typeof v=="function")E=v.propTypes;else if(typeof v=="object"&&(v.$$typeof===c||v.$$typeof===m))E=v.propTypes;else return;if(E){var D=L(v);g(E,l.props,"prop",D,l)}else if(v.PropTypes!==void 0&&!Vs){Vs=!0;var Z=L(v);A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Z||"Unknown")}typeof v.getDefaultProps=="function"&&!v.getDefaultProps.isReactClassApproved&&A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function kh(l){{for(var v=Object.keys(l.props),E=0;E<v.length;E++){var D=v[E];if(D!=="children"&&D!=="key"){sr(l),A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",D),sr(null);break}}l.ref!==null&&(sr(l),A("Invalid attribute `ref` supplied to `React.Fragment`."),sr(null))}}var so={};function io(l,v,E,D,Z,ee){{var B=ye(l);if(!B){var F="";(l===void 0||typeof l=="object"&&l!==null&&Object.keys(l).length===0)&&(F+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Ee=Eh();Ee?F+=Ee:F+=eo();var le;l===null?le="null":w(l)?le="array":l!==void 0&&l.$$typeof===e?(le="<"+(L(l.type)||"Unknown")+" />",F=" Did you accidentally export a JSX literal instead of a component?"):le=typeof l,A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",le,F)}var ue=xh(l,v,E,Z,ee);if(ue==null)return ue;if(B){var Ne=v.children;if(Ne!==void 0)if(D)if(w(Ne)){for(var ir=0;ir<Ne.length;ir++)no(Ne[ir],l);Object.freeze&&Object.freeze(Ne)}else A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else no(Ne,l)}if(rr.call(v,"key")){var Lt=L(l),Te=Object.keys(v).filter(function(Ph){return Ph!=="key"}),$s=Te.length>0?"{key: someKey, "+Te.join(": ..., ")+": ...}":"{key: someKey}";if(!so[Lt+$s]){var Rh=Te.length>0?"{"+Te.join(": ..., ")+": ...}":"{}";A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,$s,Lt,Rh,Lt),so[Lt+$s]=!0}}return l===n?kh(ue):Th(ue),ue}}function Sh(l,v,E){return io(l,v,E,!0)}function Ch(l,v,E){return io(l,v,E,!1)}var Ah=Ch,Oh=Sh;or.Fragment=n,or.jsx=Ah,or.jsxs=Oh}()),or}process.env.NODE_ENV==="production"?$n.exports=ao():$n.exports=oo();var h=$n.exports;class Ae extends Error{constructor(e){super(e),this.name="AuthError"}}function Bn(t={}){const e=new Map((t.users??[{email:"ada@example.com",password:"password"}]).map(n=>[n.email.toLowerCase(),n]));function r(n){throw new Ae(n)}return{async login(n,s){const i=e.get(n.toLowerCase());return(!i||i.password!==s)&&r("Invalid email or password"),{uid:`mock-${n}`,email:i.email}},async signUp(n,s){const i=n.toLowerCase();return e.has(i)&&r("Email already registered"),e.set(i,{email:n,password:s}),{uid:`mock-${n}`,email:n}},async logout(){},async forgotPassword(n){e.has(n.toLowerCase())||r("No account for that email")},async resetPassword(n,s){n==="bad"&&r("Invalid reset code");const i=e.values().next().value;i&&(i.password=s)},async changePassword(n){n||r("Password required")},async verifyEmail(n){n==="bad"&&r("Invalid verification code")},async signInWithGoogle(){return{uid:"mock-google",email:"ada@example.com"}}}}const Hs=W.createContext(null);function co(t){return t instanceof Error?t.message:"Auth failed"}function lo({children:t,adapter:e,adapterName:r="mock"}){const n=W.useMemo(()=>e??Bn(),[e]),[s,i]=W.useState(null),[a,o]=W.useState(null),c=W.useMemo(()=>{const u=async f=>{try{const m=await f();return o(null),m}catch(m){throw o(co(m)),m}};return{currentUser:s,lastError:a,adapterName:r,login:(f,m)=>u(async()=>{const k=await n.login(f,m);return i(k),k}),signUp:(f,m,k)=>u(async()=>{const R=await n.signUp(f,m,k);return i(R),R}),logout:()=>u(async()=>{await n.logout(),i(null)}),forgotPassword:(f,m)=>u(()=>n.forgotPassword(f,m)),resetPassword:(f,m)=>u(()=>n.resetPassword(f,m)),changePassword:f=>u(()=>n.changePassword(f)),handleVerifyEmail:f=>u(()=>n.verifyEmail(f)),signInWithGoogle:()=>u(async()=>{const f=await n.signInWithGoogle();return i(f),f}),inviteUser:(f,m,k)=>u(()=>n.signUp(f,m,k))}},[r,s,a,n]);return h.jsx(Hs.Provider,{value:c,children:t})}function it(){const t=W.useContext(Hs);if(!t)throw new Error("useAuth must be used inside DfxAuthProvider");return t}function uo(){const{currentUser:t,lastError:e,adapterName:r}=it();return h.jsxs("div",{className:"space-x-2 p-2 text-sm","data-testid":"auth-status",children:[h.jsx("span",{"data-testid":"auth-adapter",children:r}),h.jsx("span",{"data-testid":"auth-user",children:t?t.email:"signed-out"}),h.jsx("span",{"data-testid":"auth-error",children:e??""})]})}const fo=new Set(["localhost","127.0.0.1","::1"]);function ho(t){let e;try{e=new URL(t)}catch{throw new Ae("Invalid ecom API base URL")}if(!fo.has(e.hostname))throw new Ae("ecom JWT adapter only talks to the local API on localhost:5000. Production RDS/API is not allowed.");return e}async function po(t){try{const e=await t.json();return e.error||e.message||`HTTP ${t.status}`}catch{return`HTTP ${t.status}`}}function mo(t){var n,s;const e=(n=t.user)==null?void 0:n.id,r=(s=t.user)==null?void 0:s.email;if(!e||!r)throw new Ae("ecom login response missing user");return{uid:e,email:r}}function zs(t={}){const e=ho(t.baseUrl??"http://127.0.0.1:5000").origin,r=t.fetchImpl??fetch.bind(globalThis);async function n(a,o){const c=await r(`${e}${a}`,{...o,credentials:"include",headers:{"Content-Type":"application/json",...o.headers||{}}});if(!c.ok)throw new Ae(await po(c));return c.status===204?{}:c.json()}const s=a=>{throw new Ae(`${a} is not on this adapter. Use ecom’s own password/email routes on local /api/v1/auth — not production.`)};async function i(a,o){const c=await n("/api/v1/auth/login",{method:"POST",body:JSON.stringify({email:a,password:o})});return mo(c)}return{login:i,async signUp(a,o){var u,f;const c=await n("/api/v1/auth/register",{method:"POST",body:JSON.stringify({email:a,password:o,name:a.split("@")[0]})});return(u=c.user)!=null&&u.id&&((f=c.user)!=null&&f.email)?{uid:c.user.id,email:c.user.email}:i(a,o)},async logout(){await n("/api/v1/auth/logout",{method:"POST"})},async forgotPassword(){s("Forgot password")},async resetPassword(){s("Reset password")},async changePassword(){s("Change password")},async verifyEmail(){s("Verify email")},signInWithGoogle(){return s("Google sign-in")}}}function go(t={}){if(t.kind==="firebase")throw new Ae("Pass createFirebaseAdapter(config) into DfxAuthProvider after EXT-FIREBASE. Do not load Firebase from the mock/ecom factory.");return t.kind==="ecom-jwt"?zs(t):Bn(t)}var $;(function(t){t.assertEqual=s=>s;function e(s){}t.assertIs=e;function r(s){throw new Error}t.assertNever=r,t.arrayToEnum=s=>{const i={};for(const a of s)i[a]=a;return i},t.getValidEnumValues=s=>{const i=t.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),a={};for(const o of i)a[o]=s[o];return t.objectValues(a)},t.objectValues=s=>t.objectKeys(s).map(function(i){return s[i]}),t.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&i.push(a);return i},t.find=(s,i)=>{for(const a of s)if(i(a))return a},t.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function n(s,i=" | "){return s.map(a=>typeof a=="string"?`'${a}'`:a).join(i)}t.joinValues=n,t.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})($||($={}));var Wn;(function(t){t.mergeShapes=(e,r)=>({...e,...r})})(Wn||(Wn={}));const I=$.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),at=t=>{switch(typeof t){case"undefined":return I.undefined;case"string":return I.string;case"number":return isNaN(t)?I.nan:I.number;case"boolean":return I.boolean;case"function":return I.function;case"bigint":return I.bigint;case"symbol":return I.symbol;case"object":return Array.isArray(t)?I.array:t===null?I.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?I.promise:typeof Map<"u"&&t instanceof Map?I.map:typeof Set<"u"&&t instanceof Set?I.set:typeof Date<"u"&&t instanceof Date?I.date:I.object;default:return I.unknown}},y=$.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),vo=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class ke extends Error{constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const r=e||function(i){return i.message},n={_errors:[]},s=i=>{for(const a of i.issues)if(a.code==="invalid_union")a.unionErrors.map(s);else if(a.code==="invalid_return_type")s(a.returnTypeError);else if(a.code==="invalid_arguments")s(a.argumentsError);else if(a.path.length===0)n._errors.push(r(a));else{let o=n,c=0;for(;c<a.path.length;){const u=a.path[c];c===a.path.length-1?(o[u]=o[u]||{_errors:[]},o[u]._errors.push(r(a))):o[u]=o[u]||{_errors:[]},o=o[u],c++}}};return s(this),n}static assert(e){if(!(e instanceof ke))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,$.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){const r={},n=[];for(const s of this.issues)s.path.length>0?(r[s.path[0]]=r[s.path[0]]||[],r[s.path[0]].push(e(s))):n.push(e(s));return{formErrors:n,fieldErrors:r}}get formErrors(){return this.flatten()}}ke.create=t=>new ke(t);const Mt=(t,e)=>{let r;switch(t.code){case y.invalid_type:t.received===I.undefined?r="Required":r=`Expected ${t.expected}, received ${t.received}`;break;case y.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(t.expected,$.jsonStringifyReplacer)}`;break;case y.unrecognized_keys:r=`Unrecognized key(s) in object: ${$.joinValues(t.keys,", ")}`;break;case y.invalid_union:r="Invalid input";break;case y.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${$.joinValues(t.options)}`;break;case y.invalid_enum_value:r=`Invalid enum value. Expected ${$.joinValues(t.options)}, received '${t.received}'`;break;case y.invalid_arguments:r="Invalid function arguments";break;case y.invalid_return_type:r="Invalid function return type";break;case y.invalid_date:r="Invalid date";break;case y.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(r=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?r=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?r=`Invalid input: must end with "${t.validation.endsWith}"`:$.assertNever(t.validation):t.validation!=="regex"?r=`Invalid ${t.validation}`:r="Invalid";break;case y.too_small:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:r="Invalid input";break;case y.too_big:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?r=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:r="Invalid input";break;case y.custom:r="Invalid input";break;case y.invalid_intersection_types:r="Intersection results could not be merged";break;case y.not_multiple_of:r=`Number must be a multiple of ${t.multipleOf}`;break;case y.not_finite:r="Number must be finite";break;default:r=e.defaultError,$.assertNever(t)}return{message:r}};let Zs=Mt;function yo(t){Zs=t}function Gr(){return Zs}const Kr=t=>{const{data:e,path:r,errorMaps:n,issueData:s}=t,i=[...r,...s.path||[]],a={...s,path:i};if(s.message!==void 0)return{...s,path:i,message:s.message};let o="";const c=n.filter(u=>!!u).slice().reverse();for(const u of c)o=u(a,{data:e,defaultError:o}).message;return{...s,path:i,message:o}},_o=[];function b(t,e){const r=Gr(),n=Kr({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,r,r===Mt?void 0:Mt].filter(s=>!!s)});t.common.issues.push(n)}class ge{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){const n=[];for(const s of r){if(s.status==="aborted")return N;s.status==="dirty"&&e.dirty(),n.push(s.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,r){const n=[];for(const s of r){const i=await s.key,a=await s.value;n.push({key:i,value:a})}return ge.mergeObjectSync(e,n)}static mergeObjectSync(e,r){const n={};for(const s of r){const{key:i,value:a}=s;if(i.status==="aborted"||a.status==="aborted")return N;i.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof a.value<"u"||s.alwaysSet)&&(n[i.value]=a.value)}return{status:e.value,value:n}}}const N=Object.freeze({status:"aborted"}),Ut=t=>({status:"dirty",value:t}),_e=t=>({status:"valid",value:t}),Hn=t=>t.status==="aborted",zn=t=>t.status==="dirty",cr=t=>t.status==="valid",lr=t=>typeof Promise<"u"&&t instanceof Promise;function Jr(t,e,r,n){if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(t)}function qs(t,e,r,n,s){if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(t,r),r}typeof SuppressedError=="function"&&SuppressedError;var S;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(S||(S={}));var ur,dr;class We{constructor(e,r,n,s){this._cachedPath=[],this.parent=e,this.data=r,this._path=n,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Gs=(t,e)=>{if(cr(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new ke(t.common.issues);return this._error=r,this._error}}};function j(t){if(!t)return{};const{errorMap:e,invalid_type_error:r,required_error:n,description:s}=t;if(e&&(r||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(a,o)=>{var c,u;const{message:f}=t;return a.code==="invalid_enum_value"?{message:f??o.defaultError}:typeof o.data>"u"?{message:(c=f??n)!==null&&c!==void 0?c:o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:(u=f??r)!==null&&u!==void 0?u:o.defaultError}},description:s}}class M{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return at(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:at(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new ge,ctx:{common:e.parent.common,data:e.data,parsedType:at(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const r=this._parse(e);if(lr(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){const r=this._parse(e);return Promise.resolve(r)}parse(e,r){const n=this.safeParse(e,r);if(n.success)return n.data;throw n.error}safeParse(e,r){var n;const s={common:{issues:[],async:(n=r==null?void 0:r.async)!==null&&n!==void 0?n:!1,contextualErrorMap:r==null?void 0:r.errorMap},path:(r==null?void 0:r.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:at(e)},i=this._parseSync({data:e,path:s.path,parent:s});return Gs(s,i)}async parseAsync(e,r){const n=await this.safeParseAsync(e,r);if(n.success)return n.data;throw n.error}async safeParseAsync(e,r){const n={common:{issues:[],contextualErrorMap:r==null?void 0:r.errorMap,async:!0},path:(r==null?void 0:r.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:at(e)},s=this._parse({data:e,path:n.path,parent:n}),i=await(lr(s)?s:Promise.resolve(s));return Gs(n,i)}refine(e,r){const n=s=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(s):r;return this._refinement((s,i)=>{const a=e(s),o=()=>i.addIssue({code:y.custom,...n(s)});return typeof Promise<"u"&&a instanceof Promise?a.then(c=>c?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,r){return this._refinement((n,s)=>e(n)?!0:(s.addIssue(typeof r=="function"?r(n,s):r),!1))}_refinement(e){return new Le({schema:this,typeName:P.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ze.create(this,this._def)}nullable(){return ut.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return je.create(this,this._def)}promise(){return Bt.create(this,this._def)}or(e){return mr.create([this,e],this._def)}and(e){return gr.create(this,e,this._def)}transform(e){return new Le({...j(this._def),schema:this,typeName:P.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const r=typeof e=="function"?e:()=>e;return new br({...j(this._def),innerType:this,defaultValue:r,typeName:P.ZodDefault})}brand(){return new Gn({typeName:P.ZodBranded,type:this,...j(this._def)})}catch(e){const r=typeof e=="function"?e:()=>e;return new xr({...j(this._def),innerType:this,catchValue:r,typeName:P.ZodCatch})}describe(e){const r=this.constructor;return new r({...this._def,description:e})}pipe(e){return Er.create(this,e)}readonly(){return Ir.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const wo=/^c[^\s-]{8,}$/i,bo=/^[0-9a-z]+$/,xo=/^[0-9A-HJKMNP-TV-Z]{26}$/,Eo=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Io=/^[a-z0-9_-]{21}$/i,To=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,ko=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,So="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Zn;const Co=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ao=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Oo=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Ks="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Ro=new RegExp(`^${Ks}$`);function Js(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function Po(t){return new RegExp(`^${Js(t)}$`)}function Ys(t){let e=`${Ks}T${Js(t)}`;const r=[];return r.push(t.local?"Z?":"Z"),t.offset&&r.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${r.join("|")})`,new RegExp(`^${e}$`)}function No(t,e){return!!((e==="v4"||!e)&&Co.test(t)||(e==="v6"||!e)&&Ao.test(t))}class De extends M{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==I.string){const i=this._getOrReturnCtx(e);return b(i,{code:y.invalid_type,expected:I.string,received:i.parsedType}),N}const n=new ge;let s;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),b(s,{code:y.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),n.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),b(s,{code:y.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),n.dirty());else if(i.kind==="length"){const a=e.data.length>i.value,o=e.data.length<i.value;(a||o)&&(s=this._getOrReturnCtx(e,s),a?b(s,{code:y.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):o&&b(s,{code:y.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),n.dirty())}else if(i.kind==="email")ko.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"email",code:y.invalid_string,message:i.message}),n.dirty());else if(i.kind==="emoji")Zn||(Zn=new RegExp(So,"u")),Zn.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"emoji",code:y.invalid_string,message:i.message}),n.dirty());else if(i.kind==="uuid")Eo.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"uuid",code:y.invalid_string,message:i.message}),n.dirty());else if(i.kind==="nanoid")Io.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"nanoid",code:y.invalid_string,message:i.message}),n.dirty());else if(i.kind==="cuid")wo.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"cuid",code:y.invalid_string,message:i.message}),n.dirty());else if(i.kind==="cuid2")bo.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"cuid2",code:y.invalid_string,message:i.message}),n.dirty());else if(i.kind==="ulid")xo.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"ulid",code:y.invalid_string,message:i.message}),n.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),b(s,{validation:"url",code:y.invalid_string,message:i.message}),n.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"regex",code:y.invalid_string,message:i.message}),n.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),b(s,{code:y.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),n.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),b(s,{code:y.invalid_string,validation:{startsWith:i.value},message:i.message}),n.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),b(s,{code:y.invalid_string,validation:{endsWith:i.value},message:i.message}),n.dirty()):i.kind==="datetime"?Ys(i).test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{code:y.invalid_string,validation:"datetime",message:i.message}),n.dirty()):i.kind==="date"?Ro.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{code:y.invalid_string,validation:"date",message:i.message}),n.dirty()):i.kind==="time"?Po(i).test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{code:y.invalid_string,validation:"time",message:i.message}),n.dirty()):i.kind==="duration"?To.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"duration",code:y.invalid_string,message:i.message}),n.dirty()):i.kind==="ip"?No(e.data,i.version)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"ip",code:y.invalid_string,message:i.message}),n.dirty()):i.kind==="base64"?Oo.test(e.data)||(s=this._getOrReturnCtx(e,s),b(s,{validation:"base64",code:y.invalid_string,message:i.message}),n.dirty()):$.assertNever(i);return{status:n.value,value:e.data}}_regex(e,r,n){return this.refinement(s=>e.test(s),{validation:r,code:y.invalid_string,...S.errToObj(n)})}_addCheck(e){return new De({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...S.errToObj(e)})}url(e){return this._addCheck({kind:"url",...S.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...S.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...S.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...S.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...S.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...S.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...S.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...S.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...S.errToObj(e)})}datetime(e){var r,n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(r=e==null?void 0:e.offset)!==null&&r!==void 0?r:!1,local:(n=e==null?void 0:e.local)!==null&&n!==void 0?n:!1,...S.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...S.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...S.errToObj(e)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...S.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r==null?void 0:r.position,...S.errToObj(r==null?void 0:r.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...S.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...S.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...S.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...S.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...S.errToObj(r)})}nonempty(e){return this.min(1,S.errToObj(e))}trim(){return new De({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new De({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new De({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}De.create=t=>{var e;return new De({checks:[],typeName:P.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...j(t)})};function Do(t,e){const r=(t.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,s=r>n?r:n,i=parseInt(t.toFixed(s).replace(".","")),a=parseInt(e.toFixed(s).replace(".",""));return i%a/Math.pow(10,s)}class ot extends M{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==I.number){const i=this._getOrReturnCtx(e);return b(i,{code:y.invalid_type,expected:I.number,received:i.parsedType}),N}let n;const s=new ge;for(const i of this._def.checks)i.kind==="int"?$.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),b(n,{code:y.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(n=this._getOrReturnCtx(e,n),b(n,{code:y.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(n=this._getOrReturnCtx(e,n),b(n,{code:y.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?Do(e.data,i.value)!==0&&(n=this._getOrReturnCtx(e,n),b(n,{code:y.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),b(n,{code:y.not_finite,message:i.message}),s.dirty()):$.assertNever(i);return{status:s.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,S.toString(r))}gt(e,r){return this.setLimit("min",e,!1,S.toString(r))}lte(e,r){return this.setLimit("max",e,!0,S.toString(r))}lt(e,r){return this.setLimit("max",e,!1,S.toString(r))}setLimit(e,r,n,s){return new ot({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:n,message:S.toString(s)}]})}_addCheck(e){return new ot({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:S.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:S.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:S.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:S.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:S.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:S.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:S.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:S.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:S.toString(e)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&$.isInteger(e.value))}get isFinite(){let e=null,r=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(r===null||n.value>r)&&(r=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(r)&&Number.isFinite(e)}}ot.create=t=>new ot({checks:[],typeName:P.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...j(t)});class ct extends M{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==I.bigint){const i=this._getOrReturnCtx(e);return b(i,{code:y.invalid_type,expected:I.bigint,received:i.parsedType}),N}let n;const s=new ge;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(n=this._getOrReturnCtx(e,n),b(n,{code:y.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(n=this._getOrReturnCtx(e,n),b(n,{code:y.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),b(n,{code:y.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):$.assertNever(i);return{status:s.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,S.toString(r))}gt(e,r){return this.setLimit("min",e,!1,S.toString(r))}lte(e,r){return this.setLimit("max",e,!0,S.toString(r))}lt(e,r){return this.setLimit("max",e,!1,S.toString(r))}setLimit(e,r,n,s){return new ct({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:n,message:S.toString(s)}]})}_addCheck(e){return new ct({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:S.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:S.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:S.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:S.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:S.toString(r)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}ct.create=t=>{var e;return new ct({checks:[],typeName:P.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...j(t)})};class fr extends M{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==I.boolean){const n=this._getOrReturnCtx(e);return b(n,{code:y.invalid_type,expected:I.boolean,received:n.parsedType}),N}return _e(e.data)}}fr.create=t=>new fr({typeName:P.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...j(t)});class Tt extends M{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==I.date){const i=this._getOrReturnCtx(e);return b(i,{code:y.invalid_type,expected:I.date,received:i.parsedType}),N}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return b(i,{code:y.invalid_date}),N}const n=new ge;let s;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),b(s,{code:y.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),n.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),b(s,{code:y.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),n.dirty()):$.assertNever(i);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Tt({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:S.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:S.toString(r)})}get minDate(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}}Tt.create=t=>new Tt({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:P.ZodDate,...j(t)});class Yr extends M{_parse(e){if(this._getType(e)!==I.symbol){const n=this._getOrReturnCtx(e);return b(n,{code:y.invalid_type,expected:I.symbol,received:n.parsedType}),N}return _e(e.data)}}Yr.create=t=>new Yr({typeName:P.ZodSymbol,...j(t)});class hr extends M{_parse(e){if(this._getType(e)!==I.undefined){const n=this._getOrReturnCtx(e);return b(n,{code:y.invalid_type,expected:I.undefined,received:n.parsedType}),N}return _e(e.data)}}hr.create=t=>new hr({typeName:P.ZodUndefined,...j(t)});class pr extends M{_parse(e){if(this._getType(e)!==I.null){const n=this._getOrReturnCtx(e);return b(n,{code:y.invalid_type,expected:I.null,received:n.parsedType}),N}return _e(e.data)}}pr.create=t=>new pr({typeName:P.ZodNull,...j(t)});class Vt extends M{constructor(){super(...arguments),this._any=!0}_parse(e){return _e(e.data)}}Vt.create=t=>new Vt({typeName:P.ZodAny,...j(t)});class kt extends M{constructor(){super(...arguments),this._unknown=!0}_parse(e){return _e(e.data)}}kt.create=t=>new kt({typeName:P.ZodUnknown,...j(t)});class Ke extends M{_parse(e){const r=this._getOrReturnCtx(e);return b(r,{code:y.invalid_type,expected:I.never,received:r.parsedType}),N}}Ke.create=t=>new Ke({typeName:P.ZodNever,...j(t)});class Xr extends M{_parse(e){if(this._getType(e)!==I.undefined){const n=this._getOrReturnCtx(e);return b(n,{code:y.invalid_type,expected:I.void,received:n.parsedType}),N}return _e(e.data)}}Xr.create=t=>new Xr({typeName:P.ZodVoid,...j(t)});class je extends M{_parse(e){const{ctx:r,status:n}=this._processInputParams(e),s=this._def;if(r.parsedType!==I.array)return b(r,{code:y.invalid_type,expected:I.array,received:r.parsedType}),N;if(s.exactLength!==null){const a=r.data.length>s.exactLength.value,o=r.data.length<s.exactLength.value;(a||o)&&(b(r,{code:a?y.too_big:y.too_small,minimum:o?s.exactLength.value:void 0,maximum:a?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),n.dirty())}if(s.minLength!==null&&r.data.length<s.minLength.value&&(b(r,{code:y.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),n.dirty()),s.maxLength!==null&&r.data.length>s.maxLength.value&&(b(r,{code:y.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),n.dirty()),r.common.async)return Promise.all([...r.data].map((a,o)=>s.type._parseAsync(new We(r,a,r.path,o)))).then(a=>ge.mergeArray(n,a));const i=[...r.data].map((a,o)=>s.type._parseSync(new We(r,a,r.path,o)));return ge.mergeArray(n,i)}get element(){return this._def.type}min(e,r){return new je({...this._def,minLength:{value:e,message:S.toString(r)}})}max(e,r){return new je({...this._def,maxLength:{value:e,message:S.toString(r)}})}length(e,r){return new je({...this._def,exactLength:{value:e,message:S.toString(r)}})}nonempty(e){return this.min(1,e)}}je.create=(t,e)=>new je({type:t,minLength:null,maxLength:null,exactLength:null,typeName:P.ZodArray,...j(e)});function Ft(t){if(t instanceof re){const e={};for(const r in t.shape){const n=t.shape[r];e[r]=ze.create(Ft(n))}return new re({...t._def,shape:()=>e})}else return t instanceof je?new je({...t._def,type:Ft(t.element)}):t instanceof ze?ze.create(Ft(t.unwrap())):t instanceof ut?ut.create(Ft(t.unwrap())):t instanceof He?He.create(t.items.map(e=>Ft(e))):t}class re extends M{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),r=$.objectKeys(e);return this._cached={shape:e,keys:r}}_parse(e){if(this._getType(e)!==I.object){const u=this._getOrReturnCtx(e);return b(u,{code:y.invalid_type,expected:I.object,received:u.parsedType}),N}const{status:n,ctx:s}=this._processInputParams(e),{shape:i,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Ke&&this._def.unknownKeys==="strip"))for(const u in s.data)a.includes(u)||o.push(u);const c=[];for(const u of a){const f=i[u],m=s.data[u];c.push({key:{status:"valid",value:u},value:f._parse(new We(s,m,s.path,u)),alwaysSet:u in s.data})}if(this._def.catchall instanceof Ke){const u=this._def.unknownKeys;if(u==="passthrough")for(const f of o)c.push({key:{status:"valid",value:f},value:{status:"valid",value:s.data[f]}});else if(u==="strict")o.length>0&&(b(s,{code:y.unrecognized_keys,keys:o}),n.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const f of o){const m=s.data[f];c.push({key:{status:"valid",value:f},value:u._parse(new We(s,m,s.path,f)),alwaysSet:f in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const u=[];for(const f of c){const m=await f.key,k=await f.value;u.push({key:m,value:k,alwaysSet:f.alwaysSet})}return u}).then(u=>ge.mergeObjectSync(n,u)):ge.mergeObjectSync(n,c)}get shape(){return this._def.shape()}strict(e){return S.errToObj,new re({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,n)=>{var s,i,a,o;const c=(a=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,r,n).message)!==null&&a!==void 0?a:n.defaultError;return r.code==="unrecognized_keys"?{message:(o=S.errToObj(e).message)!==null&&o!==void 0?o:c}:{message:c}}}:{}})}strip(){return new re({...this._def,unknownKeys:"strip"})}passthrough(){return new re({...this._def,unknownKeys:"passthrough"})}extend(e){return new re({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new re({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:P.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new re({...this._def,catchall:e})}pick(e){const r={};return $.objectKeys(e).forEach(n=>{e[n]&&this.shape[n]&&(r[n]=this.shape[n])}),new re({...this._def,shape:()=>r})}omit(e){const r={};return $.objectKeys(this.shape).forEach(n=>{e[n]||(r[n]=this.shape[n])}),new re({...this._def,shape:()=>r})}deepPartial(){return Ft(this)}partial(e){const r={};return $.objectKeys(this.shape).forEach(n=>{const s=this.shape[n];e&&!e[n]?r[n]=s:r[n]=s.optional()}),new re({...this._def,shape:()=>r})}required(e){const r={};return $.objectKeys(this.shape).forEach(n=>{if(e&&!e[n])r[n]=this.shape[n];else{let i=this.shape[n];for(;i instanceof ze;)i=i._def.innerType;r[n]=i}}),new re({...this._def,shape:()=>r})}keyof(){return Xs($.objectKeys(this.shape))}}re.create=(t,e)=>new re({shape:()=>t,unknownKeys:"strip",catchall:Ke.create(),typeName:P.ZodObject,...j(e)}),re.strictCreate=(t,e)=>new re({shape:()=>t,unknownKeys:"strict",catchall:Ke.create(),typeName:P.ZodObject,...j(e)}),re.lazycreate=(t,e)=>new re({shape:t,unknownKeys:"strip",catchall:Ke.create(),typeName:P.ZodObject,...j(e)});class mr extends M{_parse(e){const{ctx:r}=this._processInputParams(e),n=this._def.options;function s(i){for(const o of i)if(o.result.status==="valid")return o.result;for(const o of i)if(o.result.status==="dirty")return r.common.issues.push(...o.ctx.common.issues),o.result;const a=i.map(o=>new ke(o.ctx.common.issues));return b(r,{code:y.invalid_union,unionErrors:a}),N}if(r.common.async)return Promise.all(n.map(async i=>{const a={...r,common:{...r.common,issues:[]},parent:null};return{result:await i._parseAsync({data:r.data,path:r.path,parent:a}),ctx:a}})).then(s);{let i;const a=[];for(const c of n){const u={...r,common:{...r.common,issues:[]},parent:null},f=c._parseSync({data:r.data,path:r.path,parent:u});if(f.status==="valid")return f;f.status==="dirty"&&!i&&(i={result:f,ctx:u}),u.common.issues.length&&a.push(u.common.issues)}if(i)return r.common.issues.push(...i.ctx.common.issues),i.result;const o=a.map(c=>new ke(c));return b(r,{code:y.invalid_union,unionErrors:o}),N}}get options(){return this._def.options}}mr.create=(t,e)=>new mr({options:t,typeName:P.ZodUnion,...j(e)});const Je=t=>t instanceof yr?Je(t.schema):t instanceof Le?Je(t.innerType()):t instanceof _r?[t.value]:t instanceof lt?t.options:t instanceof wr?$.objectValues(t.enum):t instanceof br?Je(t._def.innerType):t instanceof hr?[void 0]:t instanceof pr?[null]:t instanceof ze?[void 0,...Je(t.unwrap())]:t instanceof ut?[null,...Je(t.unwrap())]:t instanceof Gn||t instanceof Ir?Je(t.unwrap()):t instanceof xr?Je(t._def.innerType):[];class Qr extends M{_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==I.object)return b(r,{code:y.invalid_type,expected:I.object,received:r.parsedType}),N;const n=this.discriminator,s=r.data[n],i=this.optionsMap.get(s);return i?r.common.async?i._parseAsync({data:r.data,path:r.path,parent:r}):i._parseSync({data:r.data,path:r.path,parent:r}):(b(r,{code:y.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),N)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,n){const s=new Map;for(const i of r){const a=Je(i.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(s.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);s.set(o,i)}}return new Qr({typeName:P.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:s,...j(n)})}}function qn(t,e){const r=at(t),n=at(e);if(t===e)return{valid:!0,data:t};if(r===I.object&&n===I.object){const s=$.objectKeys(e),i=$.objectKeys(t).filter(o=>s.indexOf(o)!==-1),a={...t,...e};for(const o of i){const c=qn(t[o],e[o]);if(!c.valid)return{valid:!1};a[o]=c.data}return{valid:!0,data:a}}else if(r===I.array&&n===I.array){if(t.length!==e.length)return{valid:!1};const s=[];for(let i=0;i<t.length;i++){const a=t[i],o=e[i],c=qn(a,o);if(!c.valid)return{valid:!1};s.push(c.data)}return{valid:!0,data:s}}else return r===I.date&&n===I.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class gr extends M{_parse(e){const{status:r,ctx:n}=this._processInputParams(e),s=(i,a)=>{if(Hn(i)||Hn(a))return N;const o=qn(i.value,a.value);return o.valid?((zn(i)||zn(a))&&r.dirty(),{status:r.value,value:o.data}):(b(n,{code:y.invalid_intersection_types}),N)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([i,a])=>s(i,a)):s(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}gr.create=(t,e,r)=>new gr({left:t,right:e,typeName:P.ZodIntersection,...j(r)});class He extends M{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==I.array)return b(n,{code:y.invalid_type,expected:I.array,received:n.parsedType}),N;if(n.data.length<this._def.items.length)return b(n,{code:y.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),N;!this._def.rest&&n.data.length>this._def.items.length&&(b(n,{code:y.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const i=[...n.data].map((a,o)=>{const c=this._def.items[o]||this._def.rest;return c?c._parse(new We(n,a,n.path,o)):null}).filter(a=>!!a);return n.common.async?Promise.all(i).then(a=>ge.mergeArray(r,a)):ge.mergeArray(r,i)}get items(){return this._def.items}rest(e){return new He({...this._def,rest:e})}}He.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new He({items:t,typeName:P.ZodTuple,rest:null,...j(e)})};class vr extends M{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==I.object)return b(n,{code:y.invalid_type,expected:I.object,received:n.parsedType}),N;const s=[],i=this._def.keyType,a=this._def.valueType;for(const o in n.data)s.push({key:i._parse(new We(n,o,n.path,o)),value:a._parse(new We(n,n.data[o],n.path,o)),alwaysSet:o in n.data});return n.common.async?ge.mergeObjectAsync(r,s):ge.mergeObjectSync(r,s)}get element(){return this._def.valueType}static create(e,r,n){return r instanceof M?new vr({keyType:e,valueType:r,typeName:P.ZodRecord,...j(n)}):new vr({keyType:De.create(),valueType:e,typeName:P.ZodRecord,...j(r)})}}class en extends M{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==I.map)return b(n,{code:y.invalid_type,expected:I.map,received:n.parsedType}),N;const s=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([o,c],u)=>({key:s._parse(new We(n,o,n.path,[u,"key"])),value:i._parse(new We(n,c,n.path,[u,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of a){const u=await c.key,f=await c.value;if(u.status==="aborted"||f.status==="aborted")return N;(u.status==="dirty"||f.status==="dirty")&&r.dirty(),o.set(u.value,f.value)}return{status:r.value,value:o}})}else{const o=new Map;for(const c of a){const u=c.key,f=c.value;if(u.status==="aborted"||f.status==="aborted")return N;(u.status==="dirty"||f.status==="dirty")&&r.dirty(),o.set(u.value,f.value)}return{status:r.value,value:o}}}}en.create=(t,e,r)=>new en({valueType:e,keyType:t,typeName:P.ZodMap,...j(r)});class St extends M{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==I.set)return b(n,{code:y.invalid_type,expected:I.set,received:n.parsedType}),N;const s=this._def;s.minSize!==null&&n.data.size<s.minSize.value&&(b(n,{code:y.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),r.dirty()),s.maxSize!==null&&n.data.size>s.maxSize.value&&(b(n,{code:y.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),r.dirty());const i=this._def.valueType;function a(c){const u=new Set;for(const f of c){if(f.status==="aborted")return N;f.status==="dirty"&&r.dirty(),u.add(f.value)}return{status:r.value,value:u}}const o=[...n.data.values()].map((c,u)=>i._parse(new We(n,c,n.path,u)));return n.common.async?Promise.all(o).then(c=>a(c)):a(o)}min(e,r){return new St({...this._def,minSize:{value:e,message:S.toString(r)}})}max(e,r){return new St({...this._def,maxSize:{value:e,message:S.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}}St.create=(t,e)=>new St({valueType:t,minSize:null,maxSize:null,typeName:P.ZodSet,...j(e)});class $t extends M{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==I.function)return b(r,{code:y.invalid_type,expected:I.function,received:r.parsedType}),N;function n(o,c){return Kr({data:o,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Gr(),Mt].filter(u=>!!u),issueData:{code:y.invalid_arguments,argumentsError:c}})}function s(o,c){return Kr({data:o,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Gr(),Mt].filter(u=>!!u),issueData:{code:y.invalid_return_type,returnTypeError:c}})}const i={errorMap:r.common.contextualErrorMap},a=r.data;if(this._def.returns instanceof Bt){const o=this;return _e(async function(...c){const u=new ke([]),f=await o._def.args.parseAsync(c,i).catch(R=>{throw u.addIssue(n(c,R)),u}),m=await Reflect.apply(a,this,f);return await o._def.returns._def.type.parseAsync(m,i).catch(R=>{throw u.addIssue(s(m,R)),u})})}else{const o=this;return _e(function(...c){const u=o._def.args.safeParse(c,i);if(!u.success)throw new ke([n(c,u.error)]);const f=Reflect.apply(a,this,u.data),m=o._def.returns.safeParse(f,i);if(!m.success)throw new ke([s(f,m.error)]);return m.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new $t({...this._def,args:He.create(e).rest(kt.create())})}returns(e){return new $t({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,r,n){return new $t({args:e||He.create([]).rest(kt.create()),returns:r||kt.create(),typeName:P.ZodFunction,...j(n)})}}class yr extends M{get schema(){return this._def.getter()}_parse(e){const{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}yr.create=(t,e)=>new yr({getter:t,typeName:P.ZodLazy,...j(e)});class _r extends M{_parse(e){if(e.data!==this._def.value){const r=this._getOrReturnCtx(e);return b(r,{received:r.data,code:y.invalid_literal,expected:this._def.value}),N}return{status:"valid",value:e.data}}get value(){return this._def.value}}_r.create=(t,e)=>new _r({value:t,typeName:P.ZodLiteral,...j(e)});function Xs(t,e){return new lt({values:t,typeName:P.ZodEnum,...j(e)})}class lt extends M{constructor(){super(...arguments),ur.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const r=this._getOrReturnCtx(e),n=this._def.values;return b(r,{expected:$.joinValues(n),received:r.parsedType,code:y.invalid_type}),N}if(Jr(this,ur)||qs(this,ur,new Set(this._def.values)),!Jr(this,ur).has(e.data)){const r=this._getOrReturnCtx(e),n=this._def.values;return b(r,{received:r.data,code:y.invalid_enum_value,options:n}),N}return _e(e.data)}get options(){return this._def.values}get enum(){const e={};for(const r of this._def.values)e[r]=r;return e}get Values(){const e={};for(const r of this._def.values)e[r]=r;return e}get Enum(){const e={};for(const r of this._def.values)e[r]=r;return e}extract(e,r=this._def){return lt.create(e,{...this._def,...r})}exclude(e,r=this._def){return lt.create(this.options.filter(n=>!e.includes(n)),{...this._def,...r})}}ur=new WeakMap,lt.create=Xs;class wr extends M{constructor(){super(...arguments),dr.set(this,void 0)}_parse(e){const r=$.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==I.string&&n.parsedType!==I.number){const s=$.objectValues(r);return b(n,{expected:$.joinValues(s),received:n.parsedType,code:y.invalid_type}),N}if(Jr(this,dr)||qs(this,dr,new Set($.getValidEnumValues(this._def.values))),!Jr(this,dr).has(e.data)){const s=$.objectValues(r);return b(n,{received:n.data,code:y.invalid_enum_value,options:s}),N}return _e(e.data)}get enum(){return this._def.values}}dr=new WeakMap,wr.create=(t,e)=>new wr({values:t,typeName:P.ZodNativeEnum,...j(e)});class Bt extends M{unwrap(){return this._def.type}_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==I.promise&&r.common.async===!1)return b(r,{code:y.invalid_type,expected:I.promise,received:r.parsedType}),N;const n=r.parsedType===I.promise?r.data:Promise.resolve(r.data);return _e(n.then(s=>this._def.type.parseAsync(s,{path:r.path,errorMap:r.common.contextualErrorMap})))}}Bt.create=(t,e)=>new Bt({type:t,typeName:P.ZodPromise,...j(e)});class Le extends M{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===P.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:r,ctx:n}=this._processInputParams(e),s=this._def.effect||null,i={addIssue:a=>{b(n,a),a.fatal?r.abort():r.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),s.type==="preprocess"){const a=s.transform(n.data,i);if(n.common.async)return Promise.resolve(a).then(async o=>{if(r.value==="aborted")return N;const c=await this._def.schema._parseAsync({data:o,path:n.path,parent:n});return c.status==="aborted"?N:c.status==="dirty"||r.value==="dirty"?Ut(c.value):c});{if(r.value==="aborted")return N;const o=this._def.schema._parseSync({data:a,path:n.path,parent:n});return o.status==="aborted"?N:o.status==="dirty"||r.value==="dirty"?Ut(o.value):o}}if(s.type==="refinement"){const a=o=>{const c=s.refinement(o,i);if(n.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?N:(o.status==="dirty"&&r.dirty(),a(o.value),{status:r.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?N:(o.status==="dirty"&&r.dirty(),a(o.value).then(()=>({status:r.value,value:o.value}))))}if(s.type==="transform")if(n.common.async===!1){const a=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!cr(a))return a;const o=s.transform(a.value,i);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(a=>cr(a)?Promise.resolve(s.transform(a.value,i)).then(o=>({status:r.value,value:o})):a);$.assertNever(s)}}Le.create=(t,e,r)=>new Le({schema:t,typeName:P.ZodEffects,effect:e,...j(r)}),Le.createWithPreprocess=(t,e,r)=>new Le({schema:e,effect:{type:"preprocess",transform:t},typeName:P.ZodEffects,...j(r)});class ze extends M{_parse(e){return this._getType(e)===I.undefined?_e(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ze.create=(t,e)=>new ze({innerType:t,typeName:P.ZodOptional,...j(e)});class ut extends M{_parse(e){return this._getType(e)===I.null?_e(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ut.create=(t,e)=>new ut({innerType:t,typeName:P.ZodNullable,...j(e)});class br extends M{_parse(e){const{ctx:r}=this._processInputParams(e);let n=r.data;return r.parsedType===I.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}br.create=(t,e)=>new br({innerType:t,typeName:P.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...j(e)});class xr extends M{_parse(e){const{ctx:r}=this._processInputParams(e),n={...r,common:{...r.common,issues:[]}},s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return lr(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new ke(n.common.issues)},input:n.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new ke(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}xr.create=(t,e)=>new xr({innerType:t,typeName:P.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...j(e)});class tn extends M{_parse(e){if(this._getType(e)!==I.nan){const n=this._getOrReturnCtx(e);return b(n,{code:y.invalid_type,expected:I.nan,received:n.parsedType}),N}return{status:"valid",value:e.data}}}tn.create=t=>new tn({typeName:P.ZodNaN,...j(t)});const jo=Symbol("zod_brand");class Gn extends M{_parse(e){const{ctx:r}=this._processInputParams(e),n=r.data;return this._def.type._parse({data:n,path:r.path,parent:r})}unwrap(){return this._def.type}}class Er extends M{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return i.status==="aborted"?N:i.status==="dirty"?(r.dirty(),Ut(i.value)):this._def.out._parseAsync({data:i.value,path:n.path,parent:n})})();{const s=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?N:s.status==="dirty"?(r.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:n.path,parent:n})}}static create(e,r){return new Er({in:e,out:r,typeName:P.ZodPipeline})}}class Ir extends M{_parse(e){const r=this._def.innerType._parse(e),n=s=>(cr(s)&&(s.value=Object.freeze(s.value)),s);return lr(r)?r.then(s=>n(s)):n(r)}unwrap(){return this._def.innerType}}Ir.create=(t,e)=>new Ir({innerType:t,typeName:P.ZodReadonly,...j(e)});function Qs(t,e={},r){return t?Vt.create().superRefine((n,s)=>{var i,a;if(!t(n)){const o=typeof e=="function"?e(n):typeof e=="string"?{message:e}:e,c=(a=(i=o.fatal)!==null&&i!==void 0?i:r)!==null&&a!==void 0?a:!0,u=typeof o=="string"?{message:o}:o;s.addIssue({code:"custom",...u,fatal:c})}}):Vt.create()}const Lo={object:re.lazycreate};var P;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(P||(P={}));const Mo=(t,e={message:`Input not instance of ${t.name}`})=>Qs(r=>r instanceof t,e),ei=De.create,ti=ot.create,Uo=tn.create,Vo=ct.create,ri=fr.create,Fo=Tt.create,$o=Yr.create,Bo=hr.create,Wo=pr.create,Ho=Vt.create,zo=kt.create,Zo=Ke.create,qo=Xr.create,Go=je.create,Ko=re.create,Jo=re.strictCreate,Yo=mr.create,Xo=Qr.create,Qo=gr.create,ec=He.create,tc=vr.create,rc=en.create,nc=St.create,sc=$t.create,ic=yr.create,ac=_r.create,oc=lt.create,cc=wr.create,lc=Bt.create,ni=Le.create,uc=ze.create,dc=ut.create,fc=Le.createWithPreprocess,hc=Er.create;var we=Object.freeze({__proto__:null,defaultErrorMap:Mt,setErrorMap:yo,getErrorMap:Gr,makeIssue:Kr,EMPTY_PATH:_o,addIssueToContext:b,ParseStatus:ge,INVALID:N,DIRTY:Ut,OK:_e,isAborted:Hn,isDirty:zn,isValid:cr,isAsync:lr,get util(){return $},get objectUtil(){return Wn},ZodParsedType:I,getParsedType:at,ZodType:M,datetimeRegex:Ys,ZodString:De,ZodNumber:ot,ZodBigInt:ct,ZodBoolean:fr,ZodDate:Tt,ZodSymbol:Yr,ZodUndefined:hr,ZodNull:pr,ZodAny:Vt,ZodUnknown:kt,ZodNever:Ke,ZodVoid:Xr,ZodArray:je,ZodObject:re,ZodUnion:mr,ZodDiscriminatedUnion:Qr,ZodIntersection:gr,ZodTuple:He,ZodRecord:vr,ZodMap:en,ZodSet:St,ZodFunction:$t,ZodLazy:yr,ZodLiteral:_r,ZodEnum:lt,ZodNativeEnum:wr,ZodPromise:Bt,ZodEffects:Le,ZodTransformer:Le,ZodOptional:ze,ZodNullable:ut,ZodDefault:br,ZodCatch:xr,ZodNaN:tn,BRAND:jo,ZodBranded:Gn,ZodPipeline:Er,ZodReadonly:Ir,custom:Qs,Schema:M,ZodSchema:M,late:Lo,get ZodFirstPartyTypeKind(){return P},coerce:{string:t=>De.create({...t,coerce:!0}),number:t=>ot.create({...t,coerce:!0}),boolean:t=>fr.create({...t,coerce:!0}),bigint:t=>ct.create({...t,coerce:!0}),date:t=>Tt.create({...t,coerce:!0})},any:Ho,array:Go,bigint:Vo,boolean:ri,date:Fo,discriminatedUnion:Xo,effect:ni,enum:oc,function:sc,instanceof:Mo,intersection:Qo,lazy:ic,literal:ac,map:rc,nan:Uo,nativeEnum:cc,never:Zo,null:Wo,nullable:dc,number:ti,object:Ko,oboolean:()=>ri().optional(),onumber:()=>ti().optional(),optional:uc,ostring:()=>ei().optional(),pipeline:hc,preprocess:fc,promise:lc,record:tc,set:nc,strictObject:Jo,string:ei,symbol:$o,transformer:ni,tuple:ec,undefined:Bo,union:Yo,unknown:zo,void:qo,NEVER:N,ZodIssueCode:y,quotelessJson:vo,ZodError:ke}),Tr=t=>t.type==="checkbox",Wt=t=>t instanceof Date,be=t=>t==null;const si=t=>typeof t=="object";var de=t=>!be(t)&&!Array.isArray(t)&&si(t)&&!Wt(t),pc=t=>de(t)&&t.target?Tr(t.target)?t.target.checked:t.target.value:t,mc=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,gc=(t,e)=>t.has(mc(e)),vc=t=>{const e=t.constructor&&t.constructor.prototype;return de(e)&&e.hasOwnProperty("isPrototypeOf")},Kn=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Oe(t){let e;const r=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Kn&&(t instanceof Blob||t instanceof FileList))&&(r||de(t)))if(e=r?[]:{},!r&&!vc(t))e=t;else for(const n in t)t.hasOwnProperty(n)&&(e[n]=Oe(t[n]));else return t;return e}var rn=t=>Array.isArray(t)?t.filter(Boolean):[],ae=t=>t===void 0,T=(t,e,r)=>{if(!e||!de(t))return r;const n=rn(e.split(/[,[\].]+?/)).reduce((s,i)=>be(s)?s:s[i],t);return ae(n)||n===t?ae(t[e])?r:t[e]:n},dt=t=>typeof t=="boolean",Jn=t=>/^\w*$/.test(t),ii=t=>rn(t.replace(/["|']|\]/g,"").split(/\.|\[/)),G=(t,e,r)=>{let n=-1;const s=Jn(e)?[e]:ii(e),i=s.length,a=i-1;for(;++n<i;){const o=s[n];let c=r;if(n!==a){const u=t[o];c=de(u)||Array.isArray(u)?u:isNaN(+s[n+1])?{}:[]}if(o==="__proto__")return;t[o]=c,t=t[o]}return t};const ai={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Me={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ye={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};W.createContext(null);var yc=(t,e,r,n=!0)=>{const s={defaultValues:e._defaultValues};for(const i in t)Object.defineProperty(s,i,{get:()=>{const a=i;return e._proxyFormState[a]!==Me.all&&(e._proxyFormState[a]=!n||Me.all),t[a]}});return s},Se=t=>de(t)&&!Object.keys(t).length,_c=(t,e,r,n)=>{r(t);const{name:s,...i}=t;return Se(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(a=>e[a]===Me.all)},nn=t=>Array.isArray(t)?t:[t];function wc(t){const e=W.useRef(t);e.current=t,W.useEffect(()=>{const r=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{r&&r.unsubscribe()}},[t.disabled])}var Ze=t=>typeof t=="string",bc=(t,e,r,n,s)=>Ze(t)?(n&&e.watch.add(t),T(r,t,s)):Array.isArray(t)?t.map(i=>(n&&e.watch.add(i),T(r,i))):(n&&(e.watchAll=!0),r),oi=(t,e,r,n,s)=>e?{...r[t],types:{...r[t]&&r[t].types?r[t].types:{},[n]:s||!0}}:{},ci=t=>({isOnSubmit:!t||t===Me.onSubmit,isOnBlur:t===Me.onBlur,isOnChange:t===Me.onChange,isOnAll:t===Me.all,isOnTouch:t===Me.onTouched}),li=(t,e,r)=>!r&&(e.watchAll||e.watch.has(t)||[...e.watch].some(n=>t.startsWith(n)&&/^\.\w+/.test(t.slice(n.length))));const kr=(t,e,r,n)=>{for(const s of r||Object.keys(t)){const i=T(t,s);if(i){const{_f:a,...o}=i;if(a){if(a.refs&&a.refs[0]&&e(a.refs[0],s)&&!n)break;if(a.ref&&e(a.ref,a.name)&&!n)break;kr(o,e)}else de(o)&&kr(o,e)}}};var xc=(t,e,r)=>{const n=nn(T(t,r));return G(n,"root",e[r]),G(t,r,n),t},Yn=t=>t.type==="file",ft=t=>typeof t=="function",sn=t=>{if(!Kn)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},an=t=>Ze(t),Xn=t=>t.type==="radio",on=t=>t instanceof RegExp;const ui={value:!1,isValid:!1},di={value:!0,isValid:!0};var fi=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!ae(t[0].attributes.value)?ae(t[0].value)||t[0].value===""?di:{value:t[0].value,isValid:!0}:di:ui}return ui};const hi={isValid:!1,value:null};var pi=t=>Array.isArray(t)?t.reduce((e,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:e,hi):hi;function mi(t,e,r="validate"){if(an(t)||Array.isArray(t)&&t.every(an)||dt(t)&&!t)return{type:r,message:an(t)?t:"",ref:e}}var Ht=t=>de(t)&&!on(t)?t:{value:t,message:""},gi=async(t,e,r,n,s)=>{const{ref:i,refs:a,required:o,maxLength:c,minLength:u,min:f,max:m,pattern:k,validate:R,name:U,valueAsNumber:oe,mount:q,disabled:H}=t._f,A=T(e,U);if(!q||H)return{};const he=a?a[0]:i,me=V=>{n&&he.reportValidity&&(he.setCustomValidity(dt(V)?"":V||""),he.reportValidity())},K={},X=Xn(i),ce=Tr(i),Be=X||ce,Ce=(oe||Yn(i))&&ae(i.value)&&ae(A)||sn(i)&&i.value===""||A===""||Array.isArray(A)&&!A.length,ye=oi.bind(null,U,r,K),Xt=(V,L,Q,se=Ye.maxLength,Ie=Ye.minLength)=>{const xe=V?L:Q;K[U]={type:V?se:Ie,message:xe,ref:i,...ye(V?se:Ie,xe)}};if(s?!Array.isArray(A)||!A.length:o&&(!Be&&(Ce||be(A))||dt(A)&&!A||ce&&!fi(a).isValid||X&&!pi(a).isValid)){const{value:V,message:L}=an(o)?{value:!!o,message:o}:Ht(o);if(V&&(K[U]={type:Ye.required,message:L,ref:he,...ye(Ye.required,L)},!r))return me(L),K}if(!Ce&&(!be(f)||!be(m))){let V,L;const Q=Ht(m),se=Ht(f);if(!be(A)&&!isNaN(A)){const Ie=i.valueAsNumber||A&&+A;be(Q.value)||(V=Ie>Q.value),be(se.value)||(L=Ie<se.value)}else{const Ie=i.valueAsDate||new Date(A),xe=xt=>new Date(new Date().toDateString()+" "+xt),wt=i.type=="time",bt=i.type=="week";Ze(Q.value)&&A&&(V=wt?xe(A)>xe(Q.value):bt?A>Q.value:Ie>new Date(Q.value)),Ze(se.value)&&A&&(L=wt?xe(A)<xe(se.value):bt?A<se.value:Ie<new Date(se.value))}if((V||L)&&(Xt(!!V,Q.message,se.message,Ye.max,Ye.min),!r))return me(K[U].message),K}if((c||u)&&!Ce&&(Ze(A)||s&&Array.isArray(A))){const V=Ht(c),L=Ht(u),Q=!be(V.value)&&A.length>+V.value,se=!be(L.value)&&A.length<+L.value;if((Q||se)&&(Xt(Q,V.message,L.message),!r))return me(K[U].message),K}if(k&&!Ce&&Ze(A)){const{value:V,message:L}=Ht(k);if(on(V)&&!A.match(V)&&(K[U]={type:Ye.pattern,message:L,ref:i,...ye(Ye.pattern,L)},!r))return me(L),K}if(R){if(ft(R)){const V=await R(A,e),L=mi(V,he);if(L&&(K[U]={...L,...ye(Ye.validate,L.message)},!r))return me(L.message),K}else if(de(R)){let V={};for(const L in R){if(!Se(V)&&!r)break;const Q=mi(await R[L](A,e),he,L);Q&&(V={...Q,...ye(L,Q.message)},me(Q.message),r&&(K[U]=V))}if(!Se(V)&&(K[U]={ref:he,...V},!r))return K}}return me(!0),K};function Ec(t,e){const r=e.slice(0,-1).length;let n=0;for(;n<r;)t=ae(t)?n++:t[e[n++]];return t}function Ic(t){for(const e in t)if(t.hasOwnProperty(e)&&!ae(t[e]))return!1;return!0}function fe(t,e){const r=Array.isArray(e)?e:Jn(e)?[e]:ii(e),n=r.length===1?t:Ec(t,r),s=r.length-1,i=r[s];return n&&delete n[i],s!==0&&(de(n)&&Se(n)||Array.isArray(n)&&Ic(n))&&fe(t,r.slice(0,-1)),t}var Qn=()=>{let t=[];return{get observers(){return t},next:s=>{for(const i of t)i.next&&i.next(s)},subscribe:s=>(t.push(s),{unsubscribe:()=>{t=t.filter(i=>i!==s)}}),unsubscribe:()=>{t=[]}}},cn=t=>be(t)||!si(t);function Ct(t,e){if(cn(t)||cn(e))return t===e;if(Wt(t)&&Wt(e))return t.getTime()===e.getTime();const r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(const s of r){const i=t[s];if(!n.includes(s))return!1;if(s!=="ref"){const a=e[s];if(Wt(i)&&Wt(a)||de(i)&&de(a)||Array.isArray(i)&&Array.isArray(a)?!Ct(i,a):i!==a)return!1}}return!0}var vi=t=>t.type==="select-multiple",Tc=t=>Xn(t)||Tr(t),es=t=>sn(t)&&t.isConnected,yi=t=>{for(const e in t)if(ft(t[e]))return!0;return!1};function ln(t,e={}){const r=Array.isArray(t);if(de(t)||r)for(const n in t)Array.isArray(t[n])||de(t[n])&&!yi(t[n])?(e[n]=Array.isArray(t[n])?[]:{},ln(t[n],e[n])):be(t[n])||(e[n]=!0);return e}function _i(t,e,r){const n=Array.isArray(t);if(de(t)||n)for(const s in t)Array.isArray(t[s])||de(t[s])&&!yi(t[s])?ae(e)||cn(r[s])?r[s]=Array.isArray(t[s])?ln(t[s],[]):{...ln(t[s])}:_i(t[s],be(e)?{}:e[s],r[s]):r[s]=!Ct(t[s],e[s]);return r}var un=(t,e)=>_i(t,e,ln(e)),wi=(t,{valueAsNumber:e,valueAsDate:r,setValueAs:n})=>ae(t)?t:e?t===""?NaN:t&&+t:r&&Ze(t)?new Date(t):n?n(t):t;function ts(t){const e=t.ref;if(!(t.refs?t.refs.every(r=>r.disabled):e.disabled))return Yn(e)?e.files:Xn(e)?pi(t.refs).value:vi(e)?[...e.selectedOptions].map(({value:r})=>r):Tr(e)?fi(t.refs).value:wi(ae(e.value)?t.ref.value:e.value,t)}var kc=(t,e,r,n)=>{const s={};for(const i of t){const a=T(e,i);a&&G(s,i,a._f)}return{criteriaMode:r,names:[...t],fields:s,shouldUseNativeValidation:n}},Sr=t=>ae(t)?t:on(t)?t.source:de(t)?on(t.value)?t.value.source:t.value:t,Sc=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function bi(t,e,r){const n=T(t,r);if(n||Jn(r))return{error:n,name:r};const s=r.split(".");for(;s.length;){const i=s.join("."),a=T(e,i),o=T(t,i);if(a&&!Array.isArray(a)&&r!==i)return{name:r};if(o&&o.type)return{name:i,error:o};s.pop()}return{name:r}}var Cc=(t,e,r,n,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(e||t):(r?n.isOnBlur:s.isOnBlur)?!t:(r?n.isOnChange:s.isOnChange)?t:!0,Ac=(t,e)=>!rn(T(t,e)).length&&fe(t,e);const Oc={mode:Me.onSubmit,reValidateMode:Me.onChange,shouldFocusError:!0};function Rc(t={}){let e={...Oc,...t},r={submitCount:0,isDirty:!1,isLoading:ft(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},n={},s=de(e.defaultValues)||de(e.values)?Oe(e.defaultValues||e.values)||{}:{},i=e.shouldUnregister?{}:Oe(s),a={action:!1,mount:!1,watch:!1},o={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,u=0;const f={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Qn(),array:Qn(),state:Qn()},k=ci(e.mode),R=ci(e.reValidateMode),U=e.criteriaMode===Me.all,oe=d=>p=>{clearTimeout(u),u=setTimeout(d,p)},q=async d=>{if(f.isValid||d){const p=e.resolver?Se((await Be()).errors):await ye(n,!0);p!==r.isValid&&m.state.next({isValid:p})}},H=(d,p)=>{(f.isValidating||f.validatingFields)&&((d||Array.from(o.mount)).forEach(g=>{g&&(p?G(r.validatingFields,g,p):fe(r.validatingFields,g))}),m.state.next({validatingFields:r.validatingFields,isValidating:!Se(r.validatingFields)}))},A=(d,p=[],g,x,w=!0,_=!0)=>{if(x&&g){if(a.action=!0,_&&Array.isArray(T(n,d))){const C=g(T(n,d),x.argA,x.argB);w&&G(n,d,C)}if(_&&Array.isArray(T(r.errors,d))){const C=g(T(r.errors,d),x.argA,x.argB);w&&G(r.errors,d,C),Ac(r.errors,d)}if(f.touchedFields&&_&&Array.isArray(T(r.touchedFields,d))){const C=g(T(r.touchedFields,d),x.argA,x.argB);w&&G(r.touchedFields,d,C)}f.dirtyFields&&(r.dirtyFields=un(s,i)),m.state.next({name:d,isDirty:V(d,p),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else G(i,d,p)},he=(d,p)=>{G(r.errors,d,p),m.state.next({errors:r.errors})},me=d=>{r.errors=d,m.state.next({errors:r.errors,isValid:!1})},K=(d,p,g,x)=>{const w=T(n,d);if(w){const _=T(i,d,ae(g)?T(s,d):g);ae(_)||x&&x.defaultChecked||p?G(i,d,p?_:ts(w._f)):se(d,_),a.mount&&q()}},X=(d,p,g,x,w)=>{let _=!1,C=!1;const z={name:d},ne=!!(T(n,d)&&T(n,d)._f&&T(n,d)._f.disabled);if(!g||x){f.isDirty&&(C=r.isDirty,r.isDirty=z.isDirty=V(),_=C!==z.isDirty);const pe=ne||Ct(T(s,d),p);C=!!(!ne&&T(r.dirtyFields,d)),pe||ne?fe(r.dirtyFields,d):G(r.dirtyFields,d,!0),z.dirtyFields=r.dirtyFields,_=_||f.dirtyFields&&C!==!pe}if(g){const pe=T(r.touchedFields,d);pe||(G(r.touchedFields,d,g),z.touchedFields=r.touchedFields,_=_||f.touchedFields&&pe!==g)}return _&&w&&m.state.next(z),_?z:{}},ce=(d,p,g,x)=>{const w=T(r.errors,d),_=f.isValid&&dt(p)&&r.isValid!==p;if(t.delayError&&g?(c=oe(()=>he(d,g)),c(t.delayError)):(clearTimeout(u),c=null,g?G(r.errors,d,g):fe(r.errors,d)),(g?!Ct(w,g):w)||!Se(x)||_){const C={...x,..._&&dt(p)?{isValid:p}:{},errors:r.errors,name:d};r={...r,...C},m.state.next(C)}},Be=async d=>{H(d,!0);const p=await e.resolver(i,e.context,kc(d||o.mount,n,e.criteriaMode,e.shouldUseNativeValidation));return H(d),p},Ce=async d=>{const{errors:p}=await Be(d);if(d)for(const g of d){const x=T(p,g);x?G(r.errors,g,x):fe(r.errors,g)}else r.errors=p;return p},ye=async(d,p,g={valid:!0})=>{for(const x in d){const w=d[x];if(w){const{_f:_,...C}=w;if(_){const z=o.array.has(_.name);H([x],!0);const ne=await gi(w,i,U,e.shouldUseNativeValidation&&!p,z);if(H([x]),ne[_.name]&&(g.valid=!1,p))break;!p&&(T(ne,_.name)?z?xc(r.errors,ne,_.name):G(r.errors,_.name,ne[_.name]):fe(r.errors,_.name))}C&&await ye(C,p,g)}}return g.valid},Xt=()=>{for(const d of o.unMount){const p=T(n,d);p&&(p._f.refs?p._f.refs.every(g=>!es(g)):!es(p._f.ref))&&Dt(d)}o.unMount=new Set},V=(d,p)=>(d&&p&&G(i,d,p),!Ct(zr(),s)),L=(d,p,g)=>bc(d,o,{...a.mount?i:ae(p)?s:Ze(d)?{[d]:p}:p},g,p),Q=d=>rn(T(a.mount?i:s,d,t.shouldUnregister?T(s,d,[]):[])),se=(d,p,g={})=>{const x=T(n,d);let w=p;if(x){const _=x._f;_&&(!_.disabled&&G(i,d,wi(p,_)),w=sn(_.ref)&&be(p)?"":p,vi(_.ref)?[..._.ref.options].forEach(C=>C.selected=w.includes(C.value)):_.refs?Tr(_.ref)?_.refs.length>1?_.refs.forEach(C=>(!C.defaultChecked||!C.disabled)&&(C.checked=Array.isArray(w)?!!w.find(z=>z===C.value):w===C.value)):_.refs[0]&&(_.refs[0].checked=!!w):_.refs.forEach(C=>C.checked=C.value===w):Yn(_.ref)?_.ref.value="":(_.ref.value=w,_.ref.type||m.values.next({name:d,values:{...i}})))}(g.shouldDirty||g.shouldTouch)&&X(d,w,g.shouldTouch,g.shouldDirty,!0),g.shouldValidate&&xt(d)},Ie=(d,p,g)=>{for(const x in p){const w=p[x],_=`${d}.${x}`,C=T(n,_);(o.array.has(d)||!cn(w)||C&&!C._f)&&!Wt(w)?Ie(_,w,g):se(_,w,g)}},xe=(d,p,g={})=>{const x=T(n,d),w=o.array.has(d),_=Oe(p);G(i,d,_),w?(m.array.next({name:d,values:{...i}}),(f.isDirty||f.dirtyFields)&&g.shouldDirty&&m.state.next({name:d,dirtyFields:un(s,i),isDirty:V(d,_)})):x&&!x._f&&!be(_)?Ie(d,_,g):se(d,_,g),li(d,o)&&m.state.next({...r}),m.values.next({name:a.mount?d:void 0,values:{...i}})},wt=async d=>{a.mount=!0;const p=d.target;let g=p.name,x=!0;const w=T(n,g),_=()=>p.type?ts(w._f):pc(d),C=z=>{x=Number.isNaN(z)||z===T(i,g,z)};if(w){let z,ne;const pe=_(),It=d.type===ai.BLUR||d.type===ai.FOCUS_OUT,Un=!Sc(w._f)&&!e.resolver&&!T(r.errors,g)&&!w._f.deps||Cc(It,T(r.touchedFields,g),r.isSubmitted,R,k),nr=li(g,o,It);G(i,g,pe),It?(w._f.onBlur&&w._f.onBlur(d),c&&c(0)):w._f.onChange&&w._f.onChange(d);const jt=X(g,pe,It,!1),Ls=!Se(jt)||nr;if(!It&&m.values.next({name:g,type:d.type,values:{...i}}),Un)return f.isValid&&q(),Ls&&m.state.next({name:g,...nr?{}:jt});if(!It&&nr&&m.state.next({...r}),e.resolver){const{errors:Vn}=await Be([g]);if(C(pe),x){const Ms=bi(r.errors,n,g),Fn=bi(Vn,n,Ms.name||g);z=Fn.error,g=Fn.name,ne=Se(Vn)}}else H([g],!0),z=(await gi(w,i,U,e.shouldUseNativeValidation))[g],H([g]),C(pe),x&&(z?ne=!1:f.isValid&&(ne=await ye(n,!0)));x&&(w._f.deps&&xt(w._f.deps),ce(g,ne,z,jt))}},bt=(d,p)=>{if(T(r.errors,p)&&d.focus)return d.focus(),1},xt=async(d,p={})=>{let g,x;const w=nn(d);if(e.resolver){const _=await Ce(ae(d)?d:w);g=Se(_),x=d?!w.some(C=>T(_,C)):g}else d?(x=(await Promise.all(w.map(async _=>{const C=T(n,_);return await ye(C&&C._f?{[_]:C}:C)}))).every(Boolean),!(!x&&!r.isValid)&&q()):x=g=await ye(n);return m.state.next({...!Ze(d)||f.isValid&&g!==r.isValid?{}:{name:d},...e.resolver||!d?{isValid:g}:{},errors:r.errors}),p.shouldFocus&&!x&&kr(n,bt,d?w:o.mount),x},zr=d=>{const p={...a.mount?i:s};return ae(d)?p:Ze(d)?T(p,d):d.map(g=>T(p,g))},Zr=(d,p)=>({invalid:!!T((p||r).errors,d),isDirty:!!T((p||r).dirtyFields,d),error:T((p||r).errors,d),isValidating:!!T(r.validatingFields,d),isTouched:!!T((p||r).touchedFields,d)}),Pn=d=>{d&&nn(d).forEach(p=>fe(r.errors,p)),m.state.next({errors:d?r.errors:{}})},Nn=(d,p,g)=>{const x=(T(n,d,{_f:{}})._f||{}).ref,w=T(r.errors,d)||{},{ref:_,message:C,type:z,...ne}=w;G(r.errors,d,{...ne,...p,ref:x}),m.state.next({name:d,errors:r.errors,isValid:!1}),g&&g.shouldFocus&&x&&x.focus&&x.focus()},Ds=(d,p)=>ft(d)?m.values.subscribe({next:g=>d(L(void 0,p),g)}):L(d,p,!0),Dt=(d,p={})=>{for(const g of d?nn(d):o.mount)o.mount.delete(g),o.array.delete(g),p.keepValue||(fe(n,g),fe(i,g)),!p.keepError&&fe(r.errors,g),!p.keepDirty&&fe(r.dirtyFields,g),!p.keepTouched&&fe(r.touchedFields,g),!p.keepIsValidating&&fe(r.validatingFields,g),!e.shouldUnregister&&!p.keepDefaultValue&&fe(s,g);m.values.next({values:{...i}}),m.state.next({...r,...p.keepDirty?{isDirty:V()}:{}}),!p.keepIsValid&&q()},Qt=({disabled:d,name:p,field:g,fields:x,value:w})=>{if(dt(d)&&a.mount||d){const _=d?void 0:ae(w)?ts(g?g._f:T(x,p)._f):w;G(i,p,_),X(p,_,!1,!1,!0)}},Et=(d,p={})=>{let g=T(n,d);const x=dt(p.disabled);return G(n,d,{...g||{},_f:{...g&&g._f?g._f:{ref:{name:d}},name:d,mount:!0,...p}}),o.mount.add(d),g?Qt({field:g,disabled:p.disabled,name:d,value:p.value}):K(d,!0,p.value),{...x?{disabled:p.disabled}:{},...e.progressive?{required:!!p.required,min:Sr(p.min),max:Sr(p.max),minLength:Sr(p.minLength),maxLength:Sr(p.maxLength),pattern:Sr(p.pattern)}:{},name:d,onChange:wt,onBlur:wt,ref:w=>{if(w){Et(d,p),g=T(n,d);const _=ae(w.value)&&w.querySelectorAll&&w.querySelectorAll("input,select,textarea")[0]||w,C=Tc(_),z=g._f.refs||[];if(C?z.find(ne=>ne===_):_===g._f.ref)return;G(n,d,{_f:{...g._f,...C?{refs:[...z.filter(es),_,...Array.isArray(T(s,d))?[{}]:[]],ref:{type:_.type,name:d}}:{ref:_}}}),K(d,!1,void 0,_)}else g=T(n,d,{}),g._f&&(g._f.mount=!1),(e.shouldUnregister||p.shouldUnregister)&&!(gc(o.array,d)&&a.action)&&o.unMount.add(d)}}},er=()=>e.shouldFocusError&&kr(n,bt,o.mount),tr=d=>{dt(d)&&(m.state.next({disabled:d}),kr(n,(p,g)=>{const x=T(n,g);x&&(p.disabled=x._f.disabled||d,Array.isArray(x._f.refs)&&x._f.refs.forEach(w=>{w.disabled=x._f.disabled||d}))},0,!1))},Dn=(d,p)=>async g=>{let x;g&&(g.preventDefault&&g.preventDefault(),g.persist&&g.persist());let w=Oe(i);if(m.state.next({isSubmitting:!0}),e.resolver){const{errors:_,values:C}=await Be();r.errors=_,w=C}else await ye(n);if(fe(r.errors,"root"),Se(r.errors)){m.state.next({errors:{}});try{await d(w,g)}catch(_){x=_}}else p&&await p({...r.errors},g),er(),setTimeout(er);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Se(r.errors)&&!x,submitCount:r.submitCount+1,errors:r.errors}),x)throw x},jn=(d,p={})=>{T(n,d)&&(ae(p.defaultValue)?xe(d,Oe(T(s,d))):(xe(d,p.defaultValue),G(s,d,Oe(p.defaultValue))),p.keepTouched||fe(r.touchedFields,d),p.keepDirty||(fe(r.dirtyFields,d),r.isDirty=p.defaultValue?V(d,Oe(T(s,d))):V()),p.keepError||(fe(r.errors,d),f.isValid&&q()),m.state.next({...r}))},Ln=(d,p={})=>{const g=d?Oe(d):s,x=Oe(g),w=Se(d),_=w?s:x;if(p.keepDefaultValues||(s=g),!p.keepValues){if(p.keepDirtyValues)for(const C of o.mount)T(r.dirtyFields,C)?G(_,C,T(i,C)):xe(C,T(_,C));else{if(Kn&&ae(d))for(const C of o.mount){const z=T(n,C);if(z&&z._f){const ne=Array.isArray(z._f.refs)?z._f.refs[0]:z._f.ref;if(sn(ne)){const pe=ne.closest("form");if(pe){pe.reset();break}}}}n={}}i=t.shouldUnregister?p.keepDefaultValues?Oe(s):{}:Oe(_),m.array.next({values:{..._}}),m.values.next({values:{..._}})}o={mount:p.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},a.mount=!f.isValid||!!p.keepIsValid||!!p.keepDirtyValues,a.watch=!!t.shouldUnregister,m.state.next({submitCount:p.keepSubmitCount?r.submitCount:0,isDirty:w?!1:p.keepDirty?r.isDirty:!!(p.keepDefaultValues&&!Ct(d,s)),isSubmitted:p.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:w?{}:p.keepDirtyValues?p.keepDefaultValues&&i?un(s,i):r.dirtyFields:p.keepDefaultValues&&d?un(s,d):p.keepDirty?r.dirtyFields:{},touchedFields:p.keepTouched?r.touchedFields:{},errors:p.keepErrors?r.errors:{},isSubmitSuccessful:p.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Mn=(d,p)=>Ln(ft(d)?d(i):d,p);return{control:{register:Et,unregister:Dt,getFieldState:Zr,handleSubmit:Dn,setError:Nn,_executeSchema:Be,_getWatch:L,_getDirty:V,_updateValid:q,_removeUnmounted:Xt,_updateFieldArray:A,_updateDisabledField:Qt,_getFieldArray:Q,_reset:Ln,_resetDefaultValues:()=>ft(e.defaultValues)&&e.defaultValues().then(d=>{Mn(d,e.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:d=>{r={...r,...d}},_disableForm:tr,_subjects:m,_proxyFormState:f,_setErrors:me,get _fields(){return n},get _formValues(){return i},get _state(){return a},set _state(d){a=d},get _defaultValues(){return s},get _names(){return o},set _names(d){o=d},get _formState(){return r},set _formState(d){r=d},get _options(){return e},set _options(d){e={...e,...d}}},trigger:xt,register:Et,handleSubmit:Dn,watch:Ds,setValue:xe,getValues:zr,reset:Mn,resetField:jn,clearErrors:Pn,unregister:Dt,setError:Nn,setFocus:(d,p={})=>{const g=T(n,d),x=g&&g._f;if(x){const w=x.refs?x.refs[0]:x.ref;w.focus&&(w.focus(),p.shouldSelect&&w.select())}},getFieldState:Zr}}function Cr(t={}){const e=W.useRef(),r=W.useRef(),[n,s]=W.useState({isDirty:!1,isValidating:!1,isLoading:ft(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,defaultValues:ft(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...Rc(t),formState:n});const i=e.current.control;return i._options=t,wc({subject:i._subjects.state,next:a=>{_c(a,i._proxyFormState,i._updateFormState)&&s({...i._formState})}}),W.useEffect(()=>i._disableForm(t.disabled),[i,t.disabled]),W.useEffect(()=>{if(i._proxyFormState.isDirty){const a=i._getDirty();a!==n.isDirty&&i._subjects.state.next({isDirty:a})}},[i,n.isDirty]),W.useEffect(()=>{t.values&&!Ct(t.values,r.current)?(i._reset(t.values,i._options.resetOptions),r.current=t.values,s(a=>({...a}))):i._resetDefaultValues()},[t.values,i]),W.useEffect(()=>{t.errors&&i._setErrors(t.errors)},[t.errors,i]),W.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),W.useEffect(()=>{t.shouldUnregister&&i._subjects.values.next({values:i._getWatch()})},[t.shouldUnregister,i]),e.current.formState=yc(n,i),e.current}const xi=(t,e,r)=>{if(t&&"reportValidity"in t){const n=T(r,e);t.setCustomValidity(n&&n.message||""),t.reportValidity()}},Ei=(t,e)=>{for(const r in e.fields){const n=e.fields[r];n&&n.ref&&"reportValidity"in n.ref?xi(n.ref,r,t):n.refs&&n.refs.forEach(s=>xi(s,r,t))}},Pc=(t,e)=>{e.shouldUseNativeValidation&&Ei(t,e);const r={};for(const n in t){const s=T(e.fields,n),i=Object.assign(t[n]||{},{ref:s&&s.ref});if(Nc(e.names||Object.keys(t),n)){const a=Object.assign({},T(r,n));G(a,"root",i),G(r,n,a)}else G(r,n,i)}return r},Nc=(t,e)=>t.some(r=>r.startsWith(e+"."));var Dc=function(t,e){for(var r={};t.length;){var n=t[0],s=n.code,i=n.message,a=n.path.join(".");if(!r[a])if("unionErrors"in n){var o=n.unionErrors[0].errors[0];r[a]={message:o.message,type:o.code}}else r[a]={message:i,type:s};if("unionErrors"in n&&n.unionErrors.forEach(function(f){return f.errors.forEach(function(m){return t.push(m)})}),e){var c=r[a].types,u=c&&c[n.code];r[a]=oi(a,e,r,s,u?[].concat(u,n.message):n.message)}t.shift()}return r},Ar=function(t,e,r){return r===void 0&&(r={}),function(n,s,i){try{return Promise.resolve(function(a,o){try{var c=Promise.resolve(t[r.mode==="sync"?"parse":"parseAsync"](n,e)).then(function(u){return i.shouldUseNativeValidation&&Ei({},i),{errors:{},values:r.raw?n:u}})}catch(u){return o(u)}return c&&c.then?c.then(void 0,o):c}(0,function(a){if(function(o){return Array.isArray(o==null?void 0:o.errors)}(a))return{values:{},errors:Pc(Dc(a.errors,!i.shouldUseNativeValidation&&i.criteriaMode==="all"),i)};throw a}))}catch(a){return Promise.reject(a)}}},Ii={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ti=W.createContext&&W.createContext(Ii),jc=["attr","size","title"];function Lc(t,e){if(t==null)return{};var r=Mc(t,e),n,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)n=i[s],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Mc(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function dn(){return dn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},dn.apply(this,arguments)}function ki(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function fn(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ki(Object(r),!0).forEach(function(n){Uc(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ki(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Uc(t,e,r){return e=Vc(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Vc(t){var e=Fc(t,"string");return typeof e=="symbol"?e:e+""}function Fc(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Si(t){return t&&t.map((e,r)=>W.createElement(e.tag,fn({key:r},e.attr),Si(e.child)))}function $c(t){return e=>W.createElement(Bc,dn({attr:fn({},t.attr)},e),Si(t.child))}function Bc(t){var e=r=>{var{attr:n,size:s,title:i}=t,a=Lc(t,jc),o=s||r.size||"1em",c;return r.className&&(c=r.className),t.className&&(c=(c?c+" ":"")+t.className),W.createElement("svg",dn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:c,style:fn(fn({color:t.color||r.color},r.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&W.createElement("title",null,i),t.children)};return Ti!==void 0?W.createElement(Ti.Consumer,null,r=>e(r)):e(Ii)}function Ci(t){return $c({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(t)}const Wc=({logoUrl:t,handleSubmitOn:e,handleSubmit:r,handleSubmitForm:n,register:s,errors:i,isLoading:a,library:o,type:c,forgetPasswordUrl:u,redirectSignupUrl:f,PreviewDescription:m,previewTitle:k,previewImg:R,showSignUp:U,showSignOn:oe=!0})=>{var q,H;return h.jsxs("div",{className:"flex flex-wrap w-screen h-screen",children:[h.jsx("div",{className:"flex w-full flex-col md:w-[40%]",children:h.jsxs("div",{className:"w-[80%] ml-12 my-auto flex flex-col pt-8 md:px-6 md:pt-0",children:[h.jsx("a",{href:"#",className:"py-4 text-2xl font-semibold text-gray-900 dark:text-white",children:h.jsx("img",{className:"w-auto h-10",src:t,alt:""})}),oe&&h.jsxs(h.Fragment,{children:[h.jsx("p",{className:"text-left text-3xl font-bold",children:"Sign in to your account"}),h.jsxs("button",{className:"-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white",onClick:()=>e("google"),children:[h.jsx(Ci,{className:"mr-2"}),"Log in with Google"]}),h.jsx("div",{className:"relative mt-8 flex h-px place-items-center bg-gray-200",children:h.jsx("div",{className:"absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500",children:"or"})})]}),h.jsxs("form",{className:"flex flex-col pt-3 md:pt-8",onSubmit:r(n),children:[h.jsx("div",{className:"flex flex-col pt-4",children:h.jsx(J.Input2,{type:"email",id:"login-email",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Email",fullwidth:!0,...s("email",{required:!0}),errorMsg:(q=i.email)==null?void 0:q.message})}),h.jsx("div",{className:"mb-12 flex flex-col pt-4",children:h.jsx(J.Input2,{type:"password",id:"login-password",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Password",fullwidth:!0,...s("password",{required:!0}),errorMsg:(H=i.password)==null?void 0:H.message})}),h.jsx(J.Button,{variant:"primary",type:"submit",className:"w-full rounded-lg px-4 py-2 text-center text-base font-semibold shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2",fullwidth:!0,disabled:a,children:"Sign in"})]}),h.jsx("div",{className:"flex items-center justify-between my-6",children:h.jsxs("div",{children:[o==="react"&&h.jsx(J.TypographyComp,{as:c,to:u,className:"text-primary-600 text-sm dark:text-primary-500 font-thin hover:underline",children:"Forget Password?"}),o==="next"&&h.jsx(J.TypographyComp,{as:c,href:u,className:"text-primary-600 text-sm dark:text-primary-500 font-thin hover:underline",children:"Forget Password?"})]})}),U&&h.jsx("div",{className:"py-12 text-center",children:h.jsxs("p",{className:"whitespace-nowrap text-gray-600",children:["Don't have an account?"," ",o==="react"&&h.jsx(J.TypographyComp,{as:c,to:f,className:"underline-offset-4 font-semibold text-primary underline",children:"Sign Up"}),o==="next"&&h.jsx(J.TypographyComp,{as:c,href:f,className:"underline-offset-4 font-semibold text-primary underline",children:"Sign Up"})]})})]})}),h.jsxs("div",{className:"pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]",children:[h.jsxs("div",{className:"absolute bottom-0 z-10 px-8 text-white opacity-100",children:[h.jsx("p",{className:"mb-8 text-3xl font-semibold leading-10",children:m}),h.jsx("p",{className:"mb-7 text-sm opacity-70",children:k})]}),h.jsx("img",{className:"-z-1 absolute top-0 h-full w-full object-cover opacity-90",src:R})]})]})},Hc=we.object({email:we.string().min(1,{message:"Please enter a valid email"}).email({message:"Not a valid email"}),password:we.string().min(1,{message:"Please enter a valid password"}).max(20,{message:"Password must be less than 20 characters"})}),zc=({library:t,type:e,forgetPasswordUrl:r,redirectSignupUrl:n,previewImg:s,previewTitle:i,PreviewDescription:a,handleSignIn:o,isLoading:c,handleSignOn:u,handleSignOnError:f,logoUrl:m,varient:k="basic",showSignUp:R=!0,showSignOn:U=!0})=>{const{login:oe,signInWithGoogle:q}=it(),{register:H,handleSubmit:A,formState:{errors:he}}=Cr({defaultValues:{email:"",password:""},resolver:Ar(Hc)}),me=X=>{oe(X.email,X.password).then(()=>{o({email:X.email,password:X.password}),console.log("Sign In Success")}).catch(ce=>{console.log("Error: "+ce)})},K=X=>{X==="google"&&q().then(ce=>u&&u(ce)).catch(ce=>f&&f(ce))};if(k==="basic")return h.jsx(Wc,{logoUrl:m,handleSubmitOn:K,handleSubmit:A,handleSubmitForm:me,register:H,errors:he,isLoading:c,library:t,type:e,forgetPasswordUrl:r,redirectSignupUrl:n,PreviewDescription:a,previewTitle:i,previewImg:s,showSignUp:R,showSignOn:U})},Zc=({logoUrl:t,handleSubmitOn:e,handleSubmit:r,handleSubmitForm:n,register:s,errors:i,isLoading:a,library:o,type:c,redirectSignInUrl:u,PreviewDescription:f,previewTitle:m,previewImg:k,showSignIn:R,showSignOn:U})=>{var oe,q,H;return h.jsxs("div",{className:"flex flex-wrap w-screen h-screen",children:[h.jsx("div",{className:"flex w-full flex-col md:w-[40%]",children:h.jsxs("div",{className:"w-[80%] ml-12 my-auto flex flex-col pt-8 md:px-6 md:pt-0",children:[h.jsx("a",{href:"#",className:"py-4 text-2xl font-semibold text-gray-900 dark:text-white",children:h.jsx("img",{className:"w-auto h-10",src:t,alt:""})}),U&&h.jsxs(h.Fragment,{children:[h.jsx("p",{className:"text-left text-3xl font-bold",children:"Create a new account"}),h.jsxs("button",{className:"-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white",onClick:()=>e("google"),children:[h.jsx(Ci,{className:"mr-2"}),"Sign Up with Google"]}),h.jsx("div",{className:"relative mt-8 flex h-px place-items-center bg-gray-200",children:h.jsx("div",{className:"absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500",children:"or"})})]}),h.jsxs("form",{className:"flex flex-col pt-3 md:pt-8",onSubmit:r(n),children:[h.jsx("div",{className:"flex flex-col pt-4",children:h.jsx(J.Input2,{type:"username",id:"login-username",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"First and Last Name",fullwidth:!0,...s("username",{required:!0}),errorMsg:(oe=i.username)==null?void 0:oe.message})}),h.jsx("div",{className:"flex flex-col pt-4",children:h.jsx(J.Input2,{type:"email",id:"login-email",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Email",fullwidth:!0,...s("email",{required:!0}),errorMsg:(q=i.email)==null?void 0:q.message})}),h.jsx("div",{className:"mb-12 flex flex-col pt-4",children:h.jsx(J.Input2,{type:"password",id:"login-password",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Password",fullwidth:!0,...s("password",{required:!0}),errorMsg:(H=i.password)==null?void 0:H.message})}),h.jsx(J.Button,{variant:"primary",type:"submit",className:"w-full rounded-lg px-4 py-2 text-center text-base font-semibold shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2",fullwidth:!0,disabled:a,children:"Sign Up"})]}),R&&h.jsx("div",{className:"py-12 text-center",children:h.jsxs("p",{className:"whitespace-nowrap text-gray-600",children:["Already have an account?"," ",o==="react"&&h.jsx(J.TypographyComp,{as:c,to:u,className:"underline-offset-4 font-semibold text-primary underline",children:"Sign In"}),o==="next"&&h.jsx(J.TypographyComp,{as:c,href:u,className:"underline-offset-4 font-semibold text-primary underline",children:"Sign In"})]})})]})}),h.jsxs("div",{className:"pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]",children:[h.jsxs("div",{className:"absolute bottom-0 z-10 px-8 text-white opacity-100",children:[h.jsx("p",{className:"mb-8 text-3xl font-semibold leading-10",children:f}),h.jsx("p",{className:"mb-7 text-sm opacity-70",children:m})]}),h.jsx("img",{className:"-z-1 absolute top-0 h-full w-full object-cover opacity-90",src:k})]})]})},qc=we.object({username:we.string().min(1,{message:"Please enter a valid Username"}).max(20,{message:"Username must be less than 20 characters"}),email:we.string().min(1,{message:"Please enter a valid email"}).email({message:"Not a valid email"}),password:we.string().min(1,{message:"Please enter a valid password"}).max(20,{message:"Password must be less than 20 characters"})}),Gc=({library:t,type:e,redirectSignInUrl:r,previewImg:n,previewTitle:s,PreviewDescription:i,handleSignUp:a,isLoading:o,handleSignOn:c,handleSignOnError:u,logoUrl:f,varient:m="basic",showSignIn:k=!0,continueUrl:R,showSignOn:U})=>{const{signUp:oe,signInWithGoogle:q}=it(),{register:H,handleSubmit:A,formState:{errors:he}}=Cr({defaultValues:{username:"",email:"",password:""},resolver:Ar(qc)}),me=X=>{oe(X.email,X.password,R).then(()=>{a({username:X.username,email:X.email,password:X.password}),console.log("Signup successfully")}).catch(ce=>{console.log(ce,"Error signing up")})},K=X=>{X==="google"&&q().then(ce=>c&&c(ce)).catch(ce=>u&&u(ce))};if(m==="basic")return h.jsx(Zc,{logoUrl:f,handleSubmitOn:K,handleSubmit:A,handleSubmitForm:me,register:H,errors:he,isLoading:o,library:t,type:e,redirectSignInUrl:r,PreviewDescription:i,previewTitle:s,previewImg:n,showSignIn:k,showSignOn:U})},Kc=({handleSubmit:t,handleSubmitForm:e,register:r,errors:n,isLoading:s,library:i,type:a,redirectSignInUrl:o,PreviewDescription:c,previewTitle:u,previewImg:f,showSignIn:m})=>{var k;return h.jsxs("div",{className:"flex flex-wrap w-screen h-screen",children:[h.jsx("div",{className:"flex w-full flex-col md:w-[40%]",children:h.jsx("div",{className:"h-full flex items-center justify-center",children:h.jsxs("div",{className:"mx-auto max-w-md",children:[h.jsx("div",{className:"rounded-xl bg-white",children:h.jsxs("div",{className:"p-4 sm:p-7",children:[h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500",children:h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:h.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})})}),h.jsx("h1",{className:"block text-2xl font-bold text-gray-800",children:"Forgot password?"}),h.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Don't worry we'll send you reset instructions."})]}),h.jsx("div",{className:"mt-6",children:h.jsx("form",{className:"flex flex-col pt-3 md:pt-8",onSubmit:t(e),children:h.jsxs("div",{className:"grid gap-y-4",children:[h.jsx("div",{className:"flex flex-col pt-4",children:h.jsx(J.Input2,{type:"email",id:"login-email",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Email",fullwidth:!0,...r("email",{required:!0}),errorMsg:(k=n.email)==null?void 0:k.message})}),h.jsx(J.Button,{variant:"primary",type:"submit",fullwidth:!0,className:"inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2",disabled:s,children:"Forget password?"})]})})})]})}),m&&h.jsx("div",{className:"py-12 text-center",children:h.jsxs("p",{className:"whitespace-nowrap text-gray-600",children:["Remember your password?"," ",i==="react"&&h.jsx(J.TypographyComp,{as:a,to:o,className:"underline-offset-4 font-semibold text-primary underline",children:"Sign in here"}),i==="next"&&h.jsx(J.TypographyComp,{as:a,href:o,className:"underline-offset-4 font-semibold text-primary underline",children:"Sign in here"})]})})]})})}),h.jsxs("div",{className:"pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]",children:[h.jsxs("div",{className:"absolute bottom-0 z-10 px-8 text-white opacity-100",children:[h.jsx("p",{className:"mb-8 text-3xl font-semibold leading-10",children:c}),h.jsx("p",{className:"mb-7 text-sm opacity-70",children:u})]}),h.jsx("img",{className:"-z-1 absolute top-0 h-full w-full object-cover opacity-90",src:f})]})]})},rs=t=>typeof t=="number"&&!isNaN(t),Or=t=>typeof t=="string",Ai=t=>typeof t=="function",Jc=t=>W.isValidElement(t)||Or(t)||Ai(t)||rs(t),qe=new Map;let ns=[];const Oi=new Set,Ri=()=>qe.size>0;function Yc(t,e){var r;if(e)return!((r=qe.get(e))==null||!r.isToastActive(t));let n=!1;return qe.forEach(s=>{s.isToastActive(t)&&(n=!0)}),n}function Xc(t,e){Jc(t)&&(Ri()||ns.push({content:t,options:e}),qe.forEach(r=>{r.buildToast(t,e)}))}function Pi(t,e){qe.forEach(r=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===r.id&&r.toggle(t,e==null?void 0:e.id):r.toggle(t,e==null?void 0:e.id)})}let Qc=1;const Ni=()=>""+Qc++;function el(t){return t&&(Or(t.toastId)||rs(t.toastId))?t.toastId:Ni()}function Rr(t,e){return Xc(t,e),e.toastId}function hn(t,e){return{...e,type:e&&e.type||t,toastId:el(e)}}function pn(t){return(e,r)=>Rr(e,hn(t,r))}function te(t,e){return Rr(t,hn("default",e))}te.loading=(t,e)=>Rr(t,hn("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),te.promise=function(t,e,r){let n,{pending:s,error:i,success:a}=e;s&&(n=Or(s)?te.loading(s,r):te.loading(s.render,{...r,...s}));const o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(f,m,k)=>{if(m==null)return void te.dismiss(n);const R={type:f,...o,...r,data:k},U=Or(m)?{render:m}:m;return n?te.update(n,{...R,...U}):te(U.render,{...R,...U}),k},u=Ai(t)?t():t;return u.then(f=>c("success",a,f)).catch(f=>c("error",i,f)),u},te.success=pn("success"),te.info=pn("info"),te.error=pn("error"),te.warning=pn("warning"),te.warn=te.warning,te.dark=(t,e)=>Rr(t,hn("default",{theme:"dark",...e})),te.dismiss=function(t){(function(e){var r;if(Ri()){if(e==null||Or(r=e)||rs(r))qe.forEach(n=>{n.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const n=qe.get(e.containerId);n?n.removeToast(e.id):qe.forEach(s=>{s.removeToast(e.id)})}}else ns=ns.filter(n=>e!=null&&n.options.toastId!==e)})(t)},te.clearWaitingQueue=function(t){t===void 0&&(t={}),qe.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},te.isActive=Yc,te.update=function(t,e){e===void 0&&(e={});const r=((n,s)=>{var i;let{containerId:a}=s;return(i=qe.get(a||1))==null?void 0:i.toasts.get(n)})(t,e);if(r){const{props:n,content:s}=r,i={delay:100,...n,...e,toastId:e.toastId||t,updateId:Ni()};i.toastId!==t&&(i.staleId=t);const a=i.render||s;delete i.render,Rr(a,i)}},te.done=t=>{te.update(t,{progress:1})},te.onChange=function(t){return Oi.add(t),()=>{Oi.delete(t)}},te.play=t=>Pi(!0,t),te.pause=t=>Pi(!1,t);const tl=t=>te.info(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),rl=t=>te.error(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),nl=we.object({email:we.string().min(1,{message:"Please enter a valid email"}).email({message:"Not a valid email"})}),sl=({library:t,type:e,redirectSignInUrl:r,previewImg:n,previewTitle:s,PreviewDescription:i,isLoading:a,varient:o="basic",showSignIn:c=!0,continueUrl:u,handleForgetPassword:f})=>{const{forgotPassword:m}=it(),{register:k,handleSubmit:R,formState:{errors:U}}=Cr({defaultValues:{email:""},resolver:Ar(nl)}),oe=q=>{m(q.email,u).then(()=>{console.log("Email sent successfully"),tl("Email sent successfully"),f&&f()}).catch(H=>{console.log(H,"Error sending email"),rl(H.message)})};if(o==="basic")return h.jsx(Kc,{handleSubmit:R,handleSubmitForm:oe,register:k,errors:U,isLoading:a,library:t,type:e,redirectSignInUrl:r,PreviewDescription:i,previewTitle:s,previewImg:n,showSignIn:c})},il=({handleSubmit:t,handleSubmitForm:e,register:r,errors:n,isLoading:s,library:i,type:a,redirectSignInUrl:o,PreviewDescription:c,previewTitle:u,previewImg:f,showSignIn:m})=>{var k,R;return h.jsxs("div",{className:"flex flex-wrap w-screen h-screen",children:[h.jsx("div",{className:"flex w-full flex-col md:w-[40%]",children:h.jsx("div",{className:"h-full flex items-center justify-center z-10",children:h.jsxs("div",{className:"mx-auto max-w-md w-[80%]",children:[h.jsx("div",{className:"rounded-xl bg-white",children:h.jsxs("div",{className:"p-4 sm:p-7",children:[h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500",children:h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:h.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})})}),h.jsx("h1",{className:"block text-2xl font-bold text-gray-800",children:"Reset password?"})]}),h.jsx("div",{className:"mt-6",children:h.jsx("form",{className:"flex flex-col pt-3 md:pt-8",onSubmit:t(e),children:h.jsxs("div",{className:"grid gap-y-4",children:[h.jsxs("div",{className:"flex flex-col pt-4",children:[h.jsx(J.Input2,{type:"newpassword",id:"login-newpassword",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"New Password",fullwidth:!0,...r("newpassword",{required:!0}),errorMsg:(k=n.newpassword)==null?void 0:k.message}),h.jsx(J.Input2,{type:"confirmpassword",id:"login-confirmpassword",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Confirm Password",fullwidth:!0,...r("confirmpassword",{required:!0}),errorMsg:(R=n.confirmpassword)==null?void 0:R.message})]}),h.jsx(J.Button,{variant:"primary",type:"submit",fullwidth:!0,className:"inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2",disabled:s,children:"Reset password"})]})})})]})}),m&&h.jsx("div",{className:"py-12 text-center",children:h.jsxs("p",{className:"whitespace-nowrap text-gray-600",children:["Remember your password?"," ",i==="react"&&h.jsx(J.TypographyComp,{as:a,to:o,className:"underline-offset-4 font-semibold text-primary underline",children:"Sign in here"}),i==="next"&&h.jsx(J.TypographyComp,{as:a,href:o,className:"underline-offset-4 font-semibold text-primary underline",children:"Sign in here"})]})})]})})}),h.jsxs("div",{className:"pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]",children:[h.jsxs("div",{className:"absolute bottom-0 z-10 px-8 text-white opacity-100",children:[h.jsx("p",{className:"mb-8 text-3xl font-semibold leading-10",children:c}),h.jsx("p",{className:"mb-7 text-sm opacity-70",children:u})]}),h.jsx("img",{className:"-z-1 absolute top-0 h-full w-full object-cover opacity-90",src:f})]})]})},al=we.object({newpassword:we.string().min(1,{message:"Please enter a valid password"}).max(20,{message:"Password must be less than 20 characters"}),confirmpassword:we.string().min(1,{message:"Please enter a valid password"}).max(20,{message:"Password must be less than 20 characters"})}),Di=({library:t,type:e,redirectSignInUrl:r,previewImg:n,previewTitle:s,PreviewDescription:i,handleResetPassword:a,isLoading:o,varient:c="basic",showSignIn:u=!0,oobCode:f})=>{const{resetPassword:m}=it(),{register:k,handleSubmit:R,formState:{errors:U}}=Cr({defaultValues:{newpassword:"",confirmpassword:""},resolver:Ar(al)}),oe=q=>{m(f,q.confirmpassword).then(()=>{a({password:q.confirmpassword})}).catch(H=>{console.log(H,"Error resetting password")})};if(c==="basic")return h.jsx(il,{handleSubmit:R,handleSubmitForm:oe,register:k,errors:U,isLoading:o,library:t,type:e,redirectSignInUrl:r,PreviewDescription:i,previewTitle:s,previewImg:n,showSignIn:u})},ol=({handleSubmit:t,handleSubmitForm:e,register:r,errors:n,isLoading:s,library:i,type:a,redirectSignInUrl:o,showSignIn:c})=>{var u,f;return h.jsx("div",{className:"flex flex-wrap w-full h-full",children:h.jsx("div",{className:"flex w-full flex-col",children:h.jsx("div",{className:"h-full flex items-center justify-center z-10",children:h.jsxs("div",{className:"mx-auto",children:[h.jsx("div",{className:"rounded-xl bg-white",children:h.jsxs("div",{className:"p-4 sm:p-7",children:[h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500",children:h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:h.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})})}),h.jsx("h1",{className:"block text-2xl font-bold text-gray-800",children:"Reset password?"})]}),h.jsx("div",{className:"mt-6",children:h.jsx("form",{className:"flex flex-col pt-3 md:pt-8",onSubmit:t(e),children:h.jsxs("div",{className:"grid gap-y-4",children:[h.jsxs("div",{className:"flex flex-col pt-4",children:[h.jsx(J.Input2,{type:"newpassword",id:"login-newpassword",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"New Password",fullwidth:!0,...r("newpassword",{required:!0}),errorMsg:(u=n.newpassword)==null?void 0:u.message}),h.jsx(J.Input2,{type:"confirmpassword",id:"login-confirmpassword",className:"w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",placeholder:"Confirm Password",fullwidth:!0,...r("confirmpassword",{required:!0}),errorMsg:(f=n.confirmpassword)==null?void 0:f.message})]}),h.jsx(J.Button,{variant:"primary",type:"submit",fullwidth:!0,className:"inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2",disabled:s,children:"Reset password"})]})})})]})}),c&&h.jsx("div",{className:"py-12 text-center",children:h.jsxs("p",{className:"whitespace-nowrap text-gray-600",children:["Remember your password?"," ",i==="react"&&h.jsx(J.TypographyComp,{as:a,to:o,className:"underline-offset-4 font-semibold text-primary underline",children:"Sign in here"}),i==="next"&&h.jsx(J.TypographyComp,{as:a,href:o,className:"underline-offset-4 font-semibold text-primary underline",children:"Sign in here"})]})})]})})})})},cl=we.object({newpassword:we.string().min(1,{message:"Please enter a valid password"}).max(20,{message:"Password must be less than 20 characters"}),confirmpassword:we.string().min(1,{message:"Please enter a valid password"}).max(20,{message:"Password must be less than 20 characters"})}),ll=({library:t,type:e,redirectSignInUrl:r,handleChangePassword:n,isLoading:s,varient:i="basic",showSignIn:a=!0})=>{const{changePassword:o}=it(),{register:c,handleSubmit:u,formState:{errors:f}}=Cr({defaultValues:{newpassword:"",confirmpassword:""},resolver:Ar(cl)}),m=k=>{o(k.confirmpassword).then(()=>{n({password:k.confirmpassword}),console.log("Password reset successfully")}).catch(R=>{console.log(R,"Error resetting password")})};if(i==="basic")return h.jsx(ol,{handleSubmit:u,handleSubmitForm:m,register:c,errors:f,isLoading:s,library:t,type:e,redirectSignInUrl:r,showSignIn:a})},ul=()=>h.jsx("div",{children:"DfxRecoverEmail"}),dl=({oobCode:t,handleEmailVerified:e,handleEmailVerificationError:r})=>{const{handleVerifyEmail:n}=it();return W.useEffect(()=>{n(t).then(()=>{e&&e()}).catch(s=>{r&&r(s)})},[]),h.jsx(h.Fragment,{})},fl=({mode:t,library:e,type:r,redirectSignInUrl:n,previewImg:s,previewTitle:i,PreviewDescription:a,handleResetPassword:o,isLoading:c,varient:u="basic",showSignIn:f=!0,oobCode:m,handleEmailVerified:k,handleEmailVerificationError:R})=>{if(t==="resetPassword")return h.jsx(Di,{library:e,type:r,redirectSignInUrl:n,previewImg:s,previewTitle:i,PreviewDescription:a,handleResetPassword:o,oobCode:m,isLoading:c,varient:u,showSignIn:f});if(t==="recoverEmail")return h.jsx(ul,{});if(t==="verifyEmail")return h.jsx(dl,{oobCode:m,handleEmailVerified:k,handleEmailVerificationError:R})};async function hl(...t){const{createFirebaseAdapter:e}=await Promise.resolve().then(()=>_h);return e(...t)}/**
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
 */const ji=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);s<128?e[r++]=s:s<2048?(e[r++]=s>>6|192,e[r++]=s&63|128):(s&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=s>>18|240,e[r++]=s>>12&63|128,e[r++]=s>>6&63|128,e[r++]=s&63|128):(e[r++]=s>>12|224,e[r++]=s>>6&63|128,e[r++]=s&63|128)}return e},pl=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const s=t[r++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[r++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[r++],a=t[r++],o=t[r++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=t[r++],a=t[r++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Li={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,o=a?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,m=(i&3)<<4|o>>4;let k=(o&15)<<2|u>>6,R=u&63;c||(R=64,a||(k=64)),n.push(r[f],r[m],r[k],r[R])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ji(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<t.length;){const i=r[t.charAt(s++)],o=s<t.length?r[t.charAt(s)]:0;++s;const u=s<t.length?r[t.charAt(s)]:64;++s;const m=s<t.length?r[t.charAt(s)]:64;if(++s,i==null||o==null||u==null||m==null)throw new ml;const k=i<<2|o>>4;if(n.push(k),u!==64){const R=o<<4&240|u>>2;if(n.push(R),m!==64){const U=u<<6&192|m;n.push(U)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ml extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gl=function(t){const e=ji(t);return Li.encodeByteArray(e,!0)},Mi=function(t){return gl(t).replace(/\./g,"")},Ui=function(t){try{return Li.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yl=()=>vl().__FIREBASE_DEFAULTS__,_l=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ui(t[1]);return e&&JSON.parse(e)},ss=()=>{try{return yl()||_l()||wl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bl=t=>{var e,r;return(r=(e=ss())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Vi=()=>{var t;return(t=ss())===null||t===void 0?void 0:t.config},Fi=t=>{var e;return(e=ss())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class xl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function El(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Il(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kl(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sl(){try{return typeof indexedDB=="object"}catch{return!1}}function Cl(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(r){e(r)}})}/**
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
 */const Al="FirebaseError";class ht extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=Al,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Ol(i,n):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new ht(s,o,n)}}function Ol(t,e){return t.replace(Rl,(r,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Rl=/\{\$([^}]+)}/g;function Pl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mn(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const s of r){if(!n.includes(s))return!1;const i=t[s],a=e[s];if($i(i)&&$i(a)){if(!mn(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!r.includes(s))return!1;return!0}function $i(t){return t!==null&&typeof t=="object"}/**
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
 */function Nr(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Dr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function jr(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function Nl(t,e){const r=new Dl(t,e);return r.subscribe.bind(r)}class Dl{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let s;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");jl(e,["next","error","complete"])?s=e:s={next:e,error:r,complete:n},s.next===void 0&&(s.next=is),s.error===void 0&&(s.error=is),s.complete===void 0&&(s.complete=is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jl(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function is(){}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class Ll{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new xl;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:r});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ul(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);n===o&&a.resolve(s)}return s}onInit(e,r){var n;const s=this.normalizeInstanceIdentifier(r),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const s of n)try{s(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ml(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ml(t){return t===At?void 0:t}function Ul(t){return t.instantiationMode==="EAGER"}/**
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
 */class Vl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Ll(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Fl={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},$l=Y.INFO,Bl={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Wl=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),s=Bl[e];if(s)console[s](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bi{constructor(e){this.name=e,this._logLevel=$l,this._logHandler=Wl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Hl=(t,e)=>e.some(r=>t instanceof r);let Wi,Hi;function zl(){return Wi||(Wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zl(){return Hi||(Hi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zi=new WeakMap,as=new WeakMap,Zi=new WeakMap,os=new WeakMap,cs=new WeakMap;function ql(t){const e=new Promise((r,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{r(pt(t.result)),s()},a=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(r=>{r instanceof IDBCursor&&zi.set(r,t)}).catch(()=>{}),cs.set(e,t),e}function Gl(t){if(as.has(t))return;const e=new Promise((r,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{r(),s()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});as.set(t,e)}let ls={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return as.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zi.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return pt(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kl(t){ls=t(ls)}function Jl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(us(this),e,...r);return Zi.set(n,e.sort?e.sort():[e]),pt(n)}:Zl().includes(t)?function(...e){return t.apply(us(this),e),pt(zi.get(this))}:function(...e){return pt(t.apply(us(this),e))}}function Yl(t){return typeof t=="function"?Jl(t):(t instanceof IDBTransaction&&Gl(t),Hl(t,zl())?new Proxy(t,ls):t)}function pt(t){if(t instanceof IDBRequest)return ql(t);if(os.has(t))return os.get(t);const e=Yl(t);return e!==t&&(os.set(t,e),cs.set(e,t)),e}const us=t=>cs.get(t);function Xl(t,e,{blocked:r,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),o=pt(a);return n&&a.addEventListener("upgradeneeded",c=>{n(pt(a.result),c.oldVersion,c.newVersion,pt(a.transaction),c)}),r&&a.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const Ql=["get","getKey","getAll","getAllKeys","count"],eu=["put","add","delete","clear"],ds=new Map;function qi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ds.get(e))return ds.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,s=eu.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Ql.includes(r)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(o.shift())),(await Promise.all([u[r](...o),s&&c.done]))[0]};return ds.set(e,i),i}Kl(t=>({...t,get:(e,r,n)=>qi(e,r)||t.get(e,r,n),has:(e,r)=>!!qi(e,r)||t.has(e,r)}));/**
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
 */class tu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(ru(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function ru(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fs="@firebase/app",Gi="0.10.7";/**
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
 */const Ot=new Bi("@firebase/app"),nu="@firebase/app-compat",su="@firebase/analytics-compat",iu="@firebase/analytics",au="@firebase/app-check-compat",ou="@firebase/app-check",cu="@firebase/auth",lu="@firebase/auth-compat",uu="@firebase/database",du="@firebase/database-compat",fu="@firebase/functions",hu="@firebase/functions-compat",pu="@firebase/installations",mu="@firebase/installations-compat",gu="@firebase/messaging",vu="@firebase/messaging-compat",yu="@firebase/performance",_u="@firebase/performance-compat",wu="@firebase/remote-config",bu="@firebase/remote-config-compat",xu="@firebase/storage",Eu="@firebase/storage-compat",Iu="@firebase/firestore",Tu="@firebase/vertexai-preview",ku="@firebase/firestore-compat",Su="firebase",Cu="10.12.4";/**
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
 */const hs="[DEFAULT]",Au={[fs]:"fire-core",[nu]:"fire-core-compat",[iu]:"fire-analytics",[su]:"fire-analytics-compat",[ou]:"fire-app-check",[au]:"fire-app-check-compat",[cu]:"fire-auth",[lu]:"fire-auth-compat",[uu]:"fire-rtdb",[du]:"fire-rtdb-compat",[fu]:"fire-fn",[hu]:"fire-fn-compat",[pu]:"fire-iid",[mu]:"fire-iid-compat",[gu]:"fire-fcm",[vu]:"fire-fcm-compat",[yu]:"fire-perf",[_u]:"fire-perf-compat",[wu]:"fire-rc",[bu]:"fire-rc-compat",[xu]:"fire-gcs",[Eu]:"fire-gcs-compat",[Iu]:"fire-fst",[ku]:"fire-fst-compat",[Tu]:"fire-vertex","fire-js":"fire-js",[Su]:"fire-js-all"};/**
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
 */const gn=new Map,Ou=new Map,ps=new Map;function Ki(t,e){try{t.container.addComponent(e)}catch(r){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Lr(t){const e=t.name;if(ps.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;ps.set(e,t);for(const r of gn.values())Ki(r,t);for(const r of Ou.values())Ki(r,t);return!0}function Ji(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function Ve(t){return t.settings!==void 0}/**
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
 */const Ru={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new Pr("app","Firebase",Ru);/**
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
 */class Pu{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
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
 */const Mr=Cu;function Yi(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:hs,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw mt.create("bad-app-name",{appName:String(s)});if(r||(r=Vi()),!r)throw mt.create("no-options");const i=gn.get(s);if(i){if(mn(r,i.options)&&mn(n,i.config))return i;throw mt.create("duplicate-app",{appName:s})}const a=new Vl(s);for(const c of ps.values())a.addComponent(c);const o=new Pu(r,n,a);return gn.set(s,o),o}function Nu(t=hs){const e=gn.get(t);if(!e&&t===hs&&Vi())return Yi();if(!e)throw mt.create("no-app",{appName:t});return e}function Zt(t,e,r){var n;let s=(n=Au[t])!==null&&n!==void 0?n:t;r&&(s+=`-${r}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(o.join(" "));return}Lr(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Du="firebase-heartbeat-database",ju=1,Ur="firebase-heartbeat-store";let ms=null;function Xi(){return ms||(ms=Xl(Du,ju,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ur)}catch(r){console.warn(r)}}}}).catch(t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})})),ms}async function Lu(t){try{const r=(await Xi()).transaction(Ur),n=await r.objectStore(Ur).get(ea(t));return await r.done,n}catch(e){if(e instanceof ht)Ot.warn(e.message);else{const r=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(r.message)}}}async function Qi(t,e){try{const n=(await Xi()).transaction(Ur,"readwrite");await n.objectStore(Ur).put(e,ea(t)),await n.done}catch(r){if(r instanceof ht)Ot.warn(r.message);else{const n=mt.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Ot.warn(n.message)}}}function ea(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Mu=1024,Uu=30*24*60*60*1e3;class Vu{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new $u(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ta();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=Uu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=ta(),{heartbeatsToSend:n,unsentEntries:s}=Fu(this._heartbeatsCache.heartbeats),i=Mi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ta(){return new Date().toISOString().substring(0,10)}function Fu(t,e=Mu){const r=[];let n=t.slice();for(const s of t){const i=r.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ra(r)>e){i.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),ra(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class $u{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sl()?Cl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Lu(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ra(t){return Mi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bu(t){Lr(new zt("platform-logger",e=>new tu(e),"PRIVATE")),Lr(new zt("heartbeat",e=>new Vu(e),"PRIVATE")),Zt(fs,Gi,t),Zt(fs,Gi,"esm2017"),Zt("fire-js","")}Bu("");function gs(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(r[n[s]]=t[n[s]]);return r}typeof SuppressedError=="function"&&SuppressedError;function na(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wu=na,sa=new Pr("auth","Firebase",na());/**
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
 */const vn=new Bi("@firebase/auth");function Hu(t,...e){vn.logLevel<=Y.WARN&&vn.warn(`Auth (${Mr}): ${t}`,...e)}function yn(t,...e){vn.logLevel<=Y.ERROR&&vn.error(`Auth (${Mr}): ${t}`,...e)}/**
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
 */function Re(t,...e){throw ys(t,...e)}function Fe(t,...e){return ys(t,...e)}function vs(t,e,r){const n=Object.assign(Object.assign({},Wu()),{[e]:r});return new Pr("auth","Firebase",n).create(e,{appName:t.name})}function Xe(t){return vs(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zu(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&Re(t,"argument-error"),vs(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ys(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return sa.create(t,...e)}function O(t,e,...r){if(!t)throw ys(e,...r)}function Qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yn(e),new Error(e)}function et(t,e){t||Qe(e)}/**
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
 */function _s(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zu(){return ia()==="http:"||ia()==="https:"}function ia(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function qu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zu()||Il()||"connection"in navigator)?navigator.onLine:!0}function Gu(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vr{constructor(e,r){this.shortDelay=e,this.longDelay=r,et(r>e,"Short delay should be less than long delay!"),this.isMobile=El()||Tl()}get(){return qu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ws(t,e){et(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class aa{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ku={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ju=new Vr(3e4,6e4);function $e(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pe(t,e,r,n,s={}){return oa(t,s,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const o=Nr(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),aa.fetch()(ca(t,t.config.apiHost,r,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function oa(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Ku),e);try{const s=new Xu(t),i=await Promise.race([r(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw _n(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const o=i.ok?a.errorMessage:a.error.message,[c,u]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _n(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw _n(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw _n(t,"user-disabled",a);const f=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vs(t,f,u);Re(t,f)}}catch(s){if(s instanceof ht)throw s;Re(t,"network-request-failed",{message:String(s)})}}async function Fr(t,e,r,n,s={}){const i=await Pe(t,e,r,n,s);return"mfaPendingCredential"in i&&Re(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ca(t,e,r,n){const s=`${e}${r}?${n}`;return t.config.emulator?ws(t.config,s):`${t.config.apiScheme}://${s}`}function Yu(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Fe(this.auth,"network-request-failed")),Ju.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _n(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const s=Fe(t,e,n);return s.customData._tokenResponse=r,s}function la(t){return t!==void 0&&t.enterprise!==void 0}class Qu{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return Yu(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ed(t,e){return Pe(t,"GET","/v2/recaptchaConfig",$e(t,e))}/**
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
 */async function td(t,e){return Pe(t,"POST","/v1/accounts:delete",e)}async function ua(t,e){return Pe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $r(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rd(t,e=!1){const r=Ue(t),n=await r.getIdToken(e),s=xs(n);O(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:$r(bs(s.auth_time)),issuedAtTime:$r(bs(s.iat)),expirationTime:$r(bs(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bs(t){return Number(t)*1e3}function xs(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return yn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ui(r);return s?JSON.parse(s):(yn("Failed to decode base64 JWT payload"),null)}catch(s){return yn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function da(t){const e=xs(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qt(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof ht&&nd(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function nd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Es{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=$r(this.lastLoginAt),this.creationTime=$r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wn(t){var e;const r=t.auth,n=await t.getIdToken(),s=await qt(t,ua(r,{idToken:n}));O(s==null?void 0:s.users.length,r,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fa(i.providerUserInfo):[],o=ad(t.providerData,a),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),f=c?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Es(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function id(t){const e=Ue(t);await wn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ad(t,e){return[...t.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function fa(t){return t.map(e=>{var{providerId:r}=e,n=gs(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function od(t,e){const r=await oa(t,{},async()=>{const n=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=ca(t,s,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",aa.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function cd(t,e){return Pe(t,"POST","/v2/accounts:revokeToken",$e(t,e))}/**
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
 */class Gt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):da(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){O(e.length!==0,"internal-error");const r=da(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:s,expiresIn:i}=await od(e,r);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:s,expirationTime:i}=r,a=new Gt;return n&&(O(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(O(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gt,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
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
 */function gt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:r,auth:n,stsTokenManager:s}=e,i=gs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Es(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const r=await qt(this,this.stsTokenManager.getToken(this.auth,e));return O(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return rd(this,e)}reload(){return id(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await wn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(Xe(this.auth));const e=await this.getIdToken();return await qt(this,td(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,s,i,a,o,c,u,f;const m=(n=r.displayName)!==null&&n!==void 0?n:void 0,k=(s=r.email)!==null&&s!==void 0?s:void 0,R=(i=r.phoneNumber)!==null&&i!==void 0?i:void 0,U=(a=r.photoURL)!==null&&a!==void 0?a:void 0,oe=(o=r.tenantId)!==null&&o!==void 0?o:void 0,q=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,H=(u=r.createdAt)!==null&&u!==void 0?u:void 0,A=(f=r.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:he,emailVerified:me,isAnonymous:K,providerData:X,stsTokenManager:ce}=r;O(he&&ce,e,"internal-error");const Be=Gt.fromJSON(this.name,ce);O(typeof he=="string",e,"internal-error"),gt(m,e.name),gt(k,e.name),O(typeof me=="boolean",e,"internal-error"),O(typeof K=="boolean",e,"internal-error"),gt(R,e.name),gt(U,e.name),gt(oe,e.name),gt(q,e.name),gt(H,e.name),gt(A,e.name);const Ce=new tt({uid:he,auth:e,email:k,emailVerified:me,displayName:m,isAnonymous:K,photoURL:U,phoneNumber:R,tenantId:oe,stsTokenManager:Be,createdAt:H,lastLoginAt:A});return X&&Array.isArray(X)&&(Ce.providerData=X.map(ye=>Object.assign({},ye))),q&&(Ce._redirectEventId=q),Ce}static async _fromIdTokenResponse(e,r,n=!1){const s=new Gt;s.updateFromServerResponse(r);const i=new tt({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await wn(i),i}static async _fromGetAccountInfoResponse(e,r,n){const s=r.users[0];O(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?fa(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),o=new Gt;o.updateFromIdToken(n);const c=new tt({uid:s.localId,auth:e,stsTokenManager:o,isAnonymous:a}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Es(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const ha=new Map;function rt(t){et(t instanceof Function,"Expected a class definition");let e=ha.get(t);return e?(et(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ha.set(t,e),e)}/**
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
 */class pa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}pa.type="NONE";const ma=pa;/**
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
 */function bn(t,e,r){return`firebase:${t}:${e}:${r}`}class Kt{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=bn(this.userKey,s.apiKey,i),this.fullPersistenceKey=bn("persistence",s.apiKey,i),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new Kt(rt(ma),e,n);const s=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||rt(ma);const a=bn(n,e.config.apiKey,e.name);let o=null;for(const u of r)try{const f=await u._get(a);if(f){const m=tt._fromJSON(e,f);u!==i&&(o=m),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Kt(i,e,n):(i=c[0],o&&await i._set(a,o.toJSON()),await Promise.all(r.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new Kt(i,e,n))}}/**
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
 */function ga(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_a(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(va(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ba(e))return"Blackberry";if(xa(e))return"Webos";if(Is(e))return"Safari";if((e.includes("chrome/")||ya(e))&&!e.includes("edge/"))return"Chrome";if(wa(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function va(t=ve()){return/firefox\//i.test(t)}function Is(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ya(t=ve()){return/crios\//i.test(t)}function _a(t=ve()){return/iemobile/i.test(t)}function wa(t=ve()){return/android/i.test(t)}function ba(t=ve()){return/blackberry/i.test(t)}function xa(t=ve()){return/webos/i.test(t)}function xn(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ld(t=ve()){var e;return xn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ud(){return kl()&&document.documentMode===10}function Ea(t=ve()){return xn(t)||wa(t)||xa(t)||ba(t)||/windows phone/i.test(t)||_a(t)}function dd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ia(t,e=[]){let r;switch(t){case"Browser":r=ga(ve());break;case"Worker":r=`${ga(ve())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Mr}/${n}`}/**
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
 */class fd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=i=>new Promise((a,o)=>{try{const c=e(i);a(c)}catch(c){o(c)}});n.onAbort=r,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function hd(t,e={}){return Pe(t,"GET","/v2/passwordPolicy",$e(t,e))}/**
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
 */const pd=6;class md{constructor(e){var r,n,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=a.minPasswordLength)!==null&&r!==void 0?r:pd,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,s,i,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(r=c.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),s&&(r.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class gd{constructor(e,r,n,s){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ta(this),this.idTokenSubscription=new Ta(this),this.beforeStateQueue=new fd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=rt(r)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await ua(this,{idToken:e}),n=await tt._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ve(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,o=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await wn(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(Xe(this));const r=e?Ue(e):null;return r&&O(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(Xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(Xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hd(this),r=new md(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await cd(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&rt(e)||this._popupRedirectResolver;O(r,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[rt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,s){if(this._deleted)return()=>{};const i=typeof r=="function"?r:r.next.bind(r);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(o,this,"internal-error"),o.then(()=>{a||i(this.currentUser)}),typeof r=="function"){const c=e.addObserver(r,n,s);return()=>{a=!0,c()}}else{const c=e.addObserver(r);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ia(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(r["X-Firebase-AppCheck"]=s),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&Hu(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function nt(t){return Ue(t)}class Ta{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nl(r=>this.observer=r)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let En={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vd(t){En=t}function ka(t){return En.loadJS(t)}function yd(){return En.recaptchaEnterpriseScript}function _d(){return En.gapiScript}function wd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bd="recaptcha-enterprise",xd="NO_RECAPTCHA";class Ed{constructor(e){this.type=bd,this.auth=nt(e)}async verify(e="verify",r=!1){async function n(i){if(!r){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,o)=>{ed(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new Qu(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,a(u.siteKey)}}).catch(c=>{o(c)})})}function s(i,a,o){const c=window.grecaptcha;la(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{a(u)}).catch(()=>{a(xd)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{n(this.auth).then(o=>{if(!r&&la(window.grecaptcha))s(o,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=yd();c.length!==0&&(c+=o),ka(c).then(()=>{s(o,i,a)}).catch(u=>{a(u)})}}).catch(o=>{a(o)})})}}async function Sa(t,e,r,n=!1){const s=new Ed(t);let i;try{i=await s.verify(r)}catch{i=await s.verify(r,!0)}const a=Object.assign({},e);return n?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function In(t,e,r,n){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sa(t,e,r,r==="getOobCode");return n(t,i)}else return n(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Sa(t,e,r,r==="getOobCode");return n(t,a)}else return Promise.reject(i)})}/**
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
 */function Id(t,e){const r=Ji(t,"auth");if(r.isInitialized()){const s=r.getImmediate(),i=r.getOptions();if(mn(i,e??{}))return s;Re(s,"already-initialized")}return r.initialize({options:e})}function Td(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function kd(t,e,r){const n=nt(t);O(n._canInitEmulator,n,"emulator-config-failed"),O(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Ca(e),{host:a,port:o}=Sd(e),c=o===null?"":`:${o}`;n.config.emulator={url:`${i}//${a}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Cd()}function Ca(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sd(t){const e=Ca(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Aa(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:Aa(a)}}}function Aa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Cd(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ts{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,r){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}/**
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
 */async function Ad(t,e){return Pe(t,"POST","/v1/accounts:resetPassword",$e(t,e))}async function Od(t,e){return Pe(t,"POST","/v1/accounts:update",e)}async function Rd(t,e){return Pe(t,"POST","/v1/accounts:signUp",e)}async function Pd(t,e){return Pe(t,"POST","/v1/accounts:update",$e(t,e))}/**
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
 */async function Nd(t,e){return Fr(t,"POST","/v1/accounts:signInWithPassword",$e(t,e))}async function Dd(t,e){return Pe(t,"POST","/v1/accounts:sendOobCode",$e(t,e))}async function jd(t,e){return Dd(t,e)}/**
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
 */async function Ld(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",$e(t,e))}async function Md(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",$e(t,e))}/**
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
 */class Br extends Ts{constructor(e,r,n,s=null){super("password",n),this._email=e,this._password=r,this._tenantId=s}static _fromEmailAndPassword(e,r){return new Br(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new Br(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,r,"signInWithPassword",Nd);case"emailLink":return Ld(e,{email:this._email,oobCode:this._password});default:Re(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const n={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return In(e,n,"signUpPassword",Rd);case"emailLink":return Md(e,{idToken:r,email:this._email,oobCode:this._password});default:Re(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Jt(t,e){return Fr(t,"POST","/v1/accounts:signInWithIdp",$e(t,e))}/**
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
 */const Ud="http://localhost";class Rt extends Ts{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Re("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=r,i=gs(r,["providerId","signInMethod"]);if(!n||!s)return null;const a=new Rt(n,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const r=this.buildRequest();return Jt(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,Jt(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Jt(e,r)}buildRequest(){const e={requestUri:Ud,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Nr(r)}return e}}/**
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
 */function Vd(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fd(t){const e=Dr(jr(t)).link,r=e?Dr(jr(e)).deep_link_id:null,n=Dr(jr(t)).deep_link_id;return(n?Dr(jr(n)).link:null)||n||r||e||t}class ks{constructor(e){var r,n,s,i,a,o;const c=Dr(jr(e)),u=(r=c.apiKey)!==null&&r!==void 0?r:null,f=(n=c.oobCode)!==null&&n!==void 0?n:null,m=Vd((s=c.mode)!==null&&s!==void 0?s:null);O(u&&f&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const r=Fd(e);try{return new ks(r)}catch{return null}}}/**
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
 */class Yt{constructor(){this.providerId=Yt.PROVIDER_ID}static credential(e,r){return Br._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=ks.parseLink(r);return O(n,"argument-error"),Br._fromEmailAndCode(e,n.code,n.tenantId)}}Yt.PROVIDER_ID="password",Yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ss{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wr extends Ss{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vt extends Wr{constructor(){super("facebook.com")}static credential(e){return Rt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com",vt.PROVIDER_ID="facebook.com";/**
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
 */class st extends Wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Rt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return st.credential(r,n)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com",st.PROVIDER_ID="google.com";/**
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
 */class yt extends Wr{constructor(){super("github.com")}static credential(e){return Rt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com",yt.PROVIDER_ID="github.com";/**
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
 */class _t extends Wr{constructor(){super("twitter.com")}static credential(e,r){return Rt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return _t.credential(r,n)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";/**
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
 */async function $d(t,e){return Fr(t,"POST","/v1/accounts:signUp",$e(t,e))}/**
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
 */class Pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,s=!1){const i=await tt._fromIdTokenResponse(e,n,s),a=Oa(n);return new Pt({user:i,providerId:a,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const s=Oa(n);return new Pt({user:e,providerId:s,_tokenResponse:n,operationType:r})}}function Oa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tn extends ht{constructor(e,r,n,s){var i;super(r.code,r.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Tn.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,s){return new Tn(e,r,n,s)}}function Ra(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Tn._fromErrorAndOperation(t,i,e,n):i})}async function Bd(t,e,r=!1){const n=await qt(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Pt._forOperation(t,"link",n)}/**
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
 */async function Wd(t,e,r=!1){const{auth:n}=t;if(Ve(n.app))return Promise.reject(Xe(n));const s="reauthenticate";try{const i=await qt(t,Ra(n,s,e,t),r);O(i.idToken,n,"internal-error");const a=xs(i.idToken);O(a,n,"internal-error");const{sub:o}=a;return O(t.uid===o,n,"user-mismatch"),Pt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Re(n,"user-mismatch"),i}}/**
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
 */async function Pa(t,e,r=!1){if(Ve(t.app))return Promise.reject(Xe(t));const n="signIn",s=await Ra(t,n,e),i=await Pt._fromIdTokenResponse(t,n,s);return r||await t._updateCurrentUser(i.user),i}async function Hd(t,e){return Pa(nt(t),e)}/**
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
 */function zd(t,e,r){var n;O(((n=r.url)===null||n===void 0?void 0:n.length)>0,t,"invalid-continue-uri"),O(typeof r.dynamicLinkDomain>"u"||r.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=r.url,e.dynamicLinkDomain=r.dynamicLinkDomain,e.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(O(r.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=r.iOS.bundleId),r.android&&(O(r.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=r.android.installApp,e.androidMinimumVersionCode=r.android.minimumVersion,e.androidPackageName=r.android.packageName)}/**
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
 */async function Cs(t){const e=nt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zd(t,e,r){const n=nt(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};r&&zd(n,s,r),await In(n,s,"getOobCode",jd)}async function qd(t,e,r){await Ad(Ue(t),{oobCode:e,newPassword:r}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Cs(t),n})}async function Gd(t,e){await Pd(Ue(t),{oobCode:e})}async function Kd(t,e,r){if(Ve(t.app))return Promise.reject(Xe(t));const n=nt(t),a=await In(n,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$d).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Cs(t),c}),o=await Pt._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(o.user),o}function Jd(t,e,r){return Ve(t.app)?Promise.reject(Xe(t)):Hd(Ue(t),Yt.credential(e,r)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Cs(t),n})}function Yd(t,e){return Xd(Ue(t),null,e)}async function Xd(t,e,r){const{auth:n}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};r&&(i.password=r);const a=await qt(t,Od(n,i));await t._updateTokensIfNecessary(a,!0)}function Qd(t,e,r,n){return Ue(t).onIdTokenChanged(e,r,n)}function ef(t,e,r){return Ue(t).beforeAuthStateChanged(e,r)}function tf(t){return Ue(t).signOut()}const kn="__sak";/**
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
 */class Na{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rf(){const t=ve();return Is(t)||xn(t)}const nf=1e3,sf=10;class Da extends Na{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rf()&&dd(),this.fallbackToPolling=Ea(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),s=this.localCache[r];n!==s&&e(r,s,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const s=()=>{const a=this.storage.getItem(n);!r&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);ud()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sf):s()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},nf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Da.type="LOCAL";const af=Da;/**
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
 */class ja extends Na{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}ja.type="SESSION";const La=ja;/**
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
 */function of(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Sn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(s=>s.isListeningto(e));if(r)return r;const n=new Sn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:s,data:i}=r.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(a).map(async u=>u(r.origin,i)),c=await of(o);r.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sn.receivers=[];/**
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
 */function As(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class cf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((o,c)=>{const u=As("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(m){const k=m;if(k.data.eventId===u)switch(k.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(k.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:r},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ge(){return window}function lf(t){Ge().location.href=t}/**
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
 */function Ma(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function uf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function df(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ff(){return Ma()?self:null}/**
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
 */const Ua="firebaseLocalStorageDb",hf=1,Cn="firebaseLocalStorage",Va="fbase_key";class Hr{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function An(t,e){return t.transaction([Cn],e?"readwrite":"readonly").objectStore(Cn)}function pf(){const t=indexedDB.deleteDatabase(Ua);return new Hr(t).toPromise()}function Os(){const t=indexedDB.open(Ua,hf);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(Cn,{keyPath:Va})}catch(s){r(s)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Cn)?e(n):(n.close(),await pf(),e(await Os()))})})}async function Fa(t,e,r){const n=An(t,!0).put({[Va]:e,value:r});return new Hr(n).toPromise()}async function mf(t,e){const r=An(t,!1).get(e),n=await new Hr(r).toPromise();return n===void 0?null:n.value}function $a(t,e){const r=An(t,!0).delete(e);return new Hr(r).toPromise()}const gf=800,vf=3;class Ba{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Os(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>vf)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ma()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sn._getInstance(ff()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await uf(),!this.activeServiceWorker)return;this.sender=new cf(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||df()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Os();return await Fa(e,kn,"1"),await $a(e,kn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fa(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>mf(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>$a(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=An(s,!1).getAll();return new Hr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),r.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),r.push(s));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ba.type="LOCAL";const yf=Ba;new Vr(3e4,6e4);/**
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
 */function Wa(t,e){return e?rt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rs extends Ts{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jt(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Jt(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function _f(t){return Pa(t.auth,new Rs(t),t.bypassAuthState)}function wf(t){const{auth:e,user:r}=t;return O(r,e,"internal-error"),Wd(r,new Rs(t),t.bypassAuthState)}async function bf(t){const{auth:e,user:r}=t;return O(r,e,"internal-error"),Bd(r,new Rs(t),t.bypassAuthState)}/**
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
 */class Ha{constructor(e,r,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:s,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _f;case"linkViaPopup":case"linkViaRedirect":return bf;case"reauthViaPopup":case"reauthViaRedirect":return wf;default:Re(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xf=new Vr(2e3,1e4);async function Ef(t,e,r){if(Ve(t.app))return Promise.reject(Fe(t,"operation-not-supported-in-this-environment"));const n=nt(t);zu(t,e,Ss);const s=Wa(n,r);return new Nt(n,"signInViaPopup",e,s).executeNotNull()}class Nt extends Ha{constructor(e,r,n,s,i){super(e,r,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=As();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xf.get())};e()}}Nt.currentPopupAction=null;/**
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
 */const If="pendingRedirect",On=new Map;class Tf extends Ha{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=On.get(this.auth._key());if(!e){try{const n=await kf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}On.set(this.auth._key(),e)}return this.bypassAuthState||On.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kf(t,e){const r=Af(e),n=Cf(t);if(!await n._isAvailable())return!1;const s=await n._get(r)==="true";return await n._remove(r),s}function Sf(t,e){On.set(t._key(),e)}function Cf(t){return rt(t._redirectPersistence)}function Af(t){return bn(If,t.config.apiKey,t.name)}async function Of(t,e,r=!1){if(Ve(t.app))return Promise.reject(Xe(t));const n=nt(t),s=Wa(n,e),a=await new Tf(n,s,r).execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Rf=10*60*1e3;class Pf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nf(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!Za(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Fe(this.auth,s))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rf&&this.cachedEventUids.clear(),this.cachedEventUids.has(za(e))}saveEventToCache(e){this.cachedEventUids.add(za(e)),this.lastProcessedEventTime=Date.now()}}function za(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Za({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Za(t);default:return!1}}/**
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
 */async function Df(t,e={}){return Pe(t,"GET","/v1/projects",e)}/**
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
 */const jf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lf=/^https?/;async function Mf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Df(t);for(const r of e)try{if(Uf(r))return}catch{}Re(t,"unauthorized-domain")}function Uf(t){const e=_s(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&a.hostname===n}if(!Lf.test(r))return!1;if(jf.test(t))return n===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const Vf=new Vr(3e4,6e4);function qa(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function Ff(t){return new Promise((e,r)=>{var n,s,i;function a(){qa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qa(),r(Fe(t,"network-request-failed"))},timeout:Vf.get()})}if(!((s=(n=Ge().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)a();else{const o=wd("iframefcb");return Ge()[o]=()=>{gapi.load?a():r(Fe(t,"network-request-failed"))},ka(`${_d()}?onload=${o}`).catch(c=>r(c))}}).catch(e=>{throw Rn=null,e})}let Rn=null;function $f(t){return Rn=Rn||Ff(t),Rn}/**
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
 */const Bf=new Vr(5e3,15e3),Wf="__/auth/iframe",Hf="emulator/auth/iframe",zf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qf(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?ws(e,Hf):`https://${t.config.authDomain}/${Wf}`,n={apiKey:e.apiKey,appName:t.name,v:Mr},s=Zf.get(t.config.apiHost);s&&(n.eid=s);const i=t._getFrameworks();return i.length&&(n.fw=i.join(",")),`${r}?${Nr(n).slice(1)}`}async function Gf(t){const e=await $f(t),r=Ge().gapi;return O(r,t,"internal-error"),e.open({where:document.body,url:qf(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zf,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const a=Fe(t,"network-request-failed"),o=Ge().setTimeout(()=>{i(a)},Bf.get());function c(){Ge().clearTimeout(o),s(n)}n.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const Kf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jf=500,Yf=600,Xf="_blank",Qf="http://localhost";class Ga{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eh(t,e,r,n=Jf,s=Yf){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const c=Object.assign(Object.assign({},Kf),{width:n.toString(),height:s.toString(),top:i,left:a}),u=ve().toLowerCase();r&&(o=ya(u)?Xf:r),va(u)&&(e=e||Qf,c.scrollbars="yes");const f=Object.entries(c).reduce((k,[R,U])=>`${k}${R}=${U},`,"");if(ld(u)&&o!=="_self")return th(e||"",o),new Ga(null);const m=window.open(e||"",o,f);O(m,t,"popup-blocked");try{m.focus()}catch{}return new Ga(m)}function th(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const rh="__/auth/handler",nh="emulator/auth/handler",sh=encodeURIComponent("fac");async function Ka(t,e,r,n,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Mr,eventId:s};if(e instanceof Ss){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Pl(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Wr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const f of Object.keys(o))o[f]===void 0&&delete o[f];const c=await t._getAppCheckToken(),u=c?`#${sh}=${encodeURIComponent(c)}`:"";return`${ih(t)}?${Nr(o).slice(1)}${u}`}function ih({config:t}){return t.emulator?ws(t,nh):`https://${t.authDomain}/${rh}`}/**
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
 */const Ps="webStorageSupport";class ah{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=La,this._completeRedirectFn=Of,this._overrideRedirectResult=Sf}async _openPopup(e,r,n,s){var i;et((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ka(e,r,n,_s(),s);return eh(e,a,As())}async _openRedirect(e,r,n,s){await this._originValidation(e);const i=await Ka(e,r,n,_s(),s);return lf(i),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:s,promise:i}=this.eventManagers[r];return s?Promise.resolve(s):(et(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await Gf(e),n=new Pf(e);return r.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Ps,{type:Ps},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ps];a!==void 0&&r(!!a),Re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Mf(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return Ea()||Is()||xn()}}const oh=ah;var Ja="@firebase/auth",Ya="1.7.5";/**
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
 */class ch{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uh(t){Lr(new zt("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;O(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ia(t)},u=new gd(n,s,i,c);return Td(u,r),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Lr(new zt("auth-internal",e=>{const r=nt(e.getProvider("auth").getImmediate());return(n=>new ch(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Ja,Ya,lh(t)),Zt(Ja,Ya,"esm2017")}/**
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
 */const dh=5*60,fh=Fi("authIdTokenMaxAge")||dh;let Xa=null;const hh=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>fh)return;const s=r==null?void 0:r.token;Xa!==s&&(Xa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ph(t=Nu()){const e=Ji(t,"auth");if(e.isInitialized())return e.getImmediate();const r=Id(t,{popupRedirectResolver:oh,persistence:[yf,af,La]}),n=Fi("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const a=hh(i.toString());ef(r,a,()=>a(r.currentUser)),Qd(r,o=>a(o))}}const s=bl("auth");return s&&kd(r,`http://${s}`),r}function mh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vd({loadJS(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=s=>{const i=Fe("internal-error");i.customData=s,r(i)},n.type="text/javascript",n.charset="UTF-8",mh().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),uh("Browser");var gh="firebase",vh="10.12.4";/**
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
 */Zt(gh,vh,"app");function Ns(t,e){if(!t||!e)throw new Ae("Firebase user missing email");return{uid:t,email:e}}function yh(t={}){var n;let e=t.auth;if(!e){if(!((n=t.config)!=null&&n.apiKey))throw new Ae("Firebase adapter needs a local test config after EXT-FIREBASE yes. Storybook default is the mock adapter.");const s=Yi(t.config);e=ph(s)}if(!e)throw new Ae("Firebase Auth instance is missing");const r=e;return{async login(s,i){const a=await Jd(r,s,i);return Ns(a.user.uid,a.user.email)},async signUp(s,i){const a=await Kd(r,s,i);return Ns(a.user.uid,a.user.email)},async logout(){await tf(r)},async forgotPassword(s,i){await Zd(r,s,i?{url:i}:void 0)},async resetPassword(s,i){await qd(r,s,i)},async changePassword(s){const i=r.currentUser;if(!(i!=null&&i.email))throw new Ae("Not signed in");await Yd(i,s)},async verifyEmail(s){await Gd(r,s)},async signInWithGoogle(){const s=await Ef(r,new st);return Ns(s.user.uid,s.user.email)}}}const _h=Object.freeze(Object.defineProperty({__proto__:null,createFirebaseAdapter:yh},Symbol.toStringTag,{value:"Module"}));ie.AuthError=Ae,ie.AuthStatus=uo,ie.DfxAuthEmail=fl,ie.DfxAuthProvider=lo,ie.DfxChangePassword=ll,ie.DfxForgetPassword=sl,ie.DfxResetPassword=Di,ie.DfxSignIn=zc,ie.DfxSignUp=Gc,ie.createAuthAdapter=go,ie.createEcomJwtAdapter=zs,ie.createMockAdapter=Bn,ie.loadFirebaseAdapter=hl,ie.useAuth=it,Object.defineProperty(ie,Symbol.toStringTag,{value:"Module"})});
