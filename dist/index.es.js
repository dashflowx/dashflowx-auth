import * as f from "react";
import J, { isValidElement as _s, createContext as zo, useContext as xl, useState as tn, useEffect as qe, forwardRef as he, createElement as Ce, memo as _l, Children as Jr, cloneElement as El, useMemo as Bo, Fragment as $d, useRef as et, useLayoutEffect as zd, useCallback as Hs, useReducer as Ey } from "react";
import * as Ni from "react-dom";
import Bd, { flushSync as Wd } from "react-dom";
var Va = { exports: {} }, ss = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eu;
function Ny() {
  if (eu) return ss;
  eu = 1;
  var t = J, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, c) {
    var d, p = {}, h = null, v = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (d in l) n.call(l, d) && !o.hasOwnProperty(d) && (p[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: e, type: a, key: h, ref: v, props: p, _owner: s.current };
  }
  return ss.Fragment = r, ss.jsx = i, ss.jsxs = i, ss;
}
var os = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tu;
function ky() {
  return tu || (tu = 1, process.env.NODE_ENV !== "production" && function() {
    var t = J, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = Symbol.iterator, m = "@@iterator";
    function g(b) {
      if (b === null || typeof b != "object")
        return null;
      var I = y && b[y] || b[m];
      return typeof I == "function" ? I : null;
    }
    var x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(b) {
      {
        for (var I = arguments.length, F = new Array(I > 1 ? I - 1 : 0), Y = 1; Y < I; Y++)
          F[Y - 1] = arguments[Y];
        E("error", b, F);
      }
    }
    function E(b, I, F) {
      {
        var Y = x.ReactDebugCurrentFrame, te = Y.getStackAddendum();
        te !== "" && (I += "%s", F = F.concat([te]));
        var ne = F.map(function(ue) {
          return String(ue);
        });
        ne.unshift("Warning: " + I), Function.prototype.apply.call(console[b], console, ne);
      }
    }
    var k = !1, C = !1, A = !1, O = !1, R = !1, L;
    L = Symbol.for("react.module.reference");
    function $(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === o || R || b === s || b === c || b === d || O || b === v || k || C || A || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof === p || b.$$typeof === i || b.$$typeof === a || b.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === L || b.getModuleId !== void 0));
    }
    function oe(b, I, F) {
      var Y = b.displayName;
      if (Y)
        return Y;
      var te = I.displayName || I.name || "";
      return te !== "" ? F + "(" + te + ")" : F;
    }
    function D(b) {
      return b.displayName || "Context";
    }
    function W(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case a:
            var I = b;
            return D(I) + ".Consumer";
          case i:
            var F = b;
            return D(F._context) + ".Provider";
          case l:
            return oe(b, b.render, "ForwardRef");
          case p:
            var Y = b.displayName || null;
            return Y !== null ? Y : W(b.type) || "Memo";
          case h: {
            var te = b, ne = te._payload, ue = te._init;
            try {
              return W(ue(ne));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, B = 0, re, q, pe, Z, ge, ke, Te;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function De() {
      {
        if (B === 0) {
          re = console.log, q = console.info, pe = console.warn, Z = console.error, ge = console.group, ke = console.groupCollapsed, Te = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        B++;
      }
    }
    function Xe() {
      {
        if (B--, B === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, b, {
              value: re
            }),
            info: P({}, b, {
              value: q
            }),
            warn: P({}, b, {
              value: pe
            }),
            error: P({}, b, {
              value: Z
            }),
            group: P({}, b, {
              value: ge
            }),
            groupCollapsed: P({}, b, {
              value: ke
            }),
            groupEnd: P({}, b, {
              value: Te
            })
          });
        }
        B < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ge = x.ReactCurrentDispatcher, Ne;
    function Me(b, I, F) {
      {
        if (Ne === void 0)
          try {
            throw Error();
          } catch (te) {
            var Y = te.stack.trim().match(/\n( *(at )?)/);
            Ne = Y && Y[1] || "";
          }
        return `
` + Ne + b;
      }
    }
    var Ue = !1, Je;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      Je = new hr();
    }
    function Gt(b, I) {
      if (!b || Ue)
        return "";
      {
        var F = Je.get(b);
        if (F !== void 0)
          return F;
      }
      var Y;
      Ue = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ne;
      ne = Ge.current, Ge.current = null, De();
      try {
        if (I) {
          var ue = function() {
            throw Error();
          };
          if (Object.defineProperty(ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ue, []);
            } catch (at) {
              Y = at;
            }
            Reflect.construct(b, [], ue);
          } else {
            try {
              ue.call();
            } catch (at) {
              Y = at;
            }
            b.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (at) {
            Y = at;
          }
          b();
        }
      } catch (at) {
        if (at && Y && typeof at.stack == "string") {
          for (var ae = at.stack.split(`
`), xe = Y.stack.split(`
`), _e = ae.length - 1, Re = xe.length - 1; _e >= 1 && Re >= 0 && ae[_e] !== xe[Re]; )
            Re--;
          for (; _e >= 1 && Re >= 0; _e--, Re--)
            if (ae[_e] !== xe[Re]) {
              if (_e !== 1 || Re !== 1)
                do
                  if (_e--, Re--, Re < 0 || ae[_e] !== xe[Re]) {
                    var nt = `
` + ae[_e].replace(" at new ", " at ");
                    return b.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", b.displayName)), typeof b == "function" && Je.set(b, nt), nt;
                  }
                while (_e >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        Ue = !1, Ge.current = ne, Xe(), Error.prepareStackTrace = te;
      }
      var Qe = b ? b.displayName || b.name : "", Kr = Qe ? Me(Qe) : "";
      return typeof b == "function" && Je.set(b, Kr), Kr;
    }
    function yt(b, I, F) {
      return Gt(b, !1);
    }
    function mr(b) {
      var I = b.prototype;
      return !!(I && I.isReactComponent);
    }
    function bt(b, I, F) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return Gt(b, mr(b));
      if (typeof b == "string")
        return Me(b);
      switch (b) {
        case c:
          return Me("Suspense");
        case d:
          return Me("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return yt(b.render);
          case p:
            return bt(b.type, I, F);
          case h: {
            var Y = b, te = Y._payload, ne = Y._init;
            try {
              return bt(ne(te), I, F);
            } catch {
            }
          }
        }
      return "";
    }
    var lt = Object.prototype.hasOwnProperty, gr = {}, N = x.ReactDebugCurrentFrame;
    function T(b) {
      if (b) {
        var I = b._owner, F = bt(b.type, b._source, I ? I.type : null);
        N.setExtraStackFrame(F);
      } else
        N.setExtraStackFrame(null);
    }
    function j(b, I, F, Y, te) {
      {
        var ne = Function.call.bind(lt);
        for (var ue in b)
          if (ne(b, ue)) {
            var ae = void 0;
            try {
              if (typeof b[ue] != "function") {
                var xe = Error((Y || "React class") + ": " + F + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xe.name = "Invariant Violation", xe;
              }
              ae = b[ue](I, ue, Y, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              ae = _e;
            }
            ae && !(ae instanceof Error) && (T(te), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", F, ue, typeof ae), T(null)), ae instanceof Error && !(ae.message in gr) && (gr[ae.message] = !0, T(te), w("Failed %s type: %s", F, ae.message), T(null));
          }
      }
    }
    var G = Array.isArray;
    function H(b) {
      return G(b);
    }
    function z(b) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, F = I && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return F;
      }
    }
    function ie(b) {
      try {
        return we(b), !1;
      } catch {
        return !0;
      }
    }
    function we(b) {
      return "" + b;
    }
    function je(b) {
      if (ie(b))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", z(b)), we(b);
    }
    var Ve = x.ReactCurrentOwner, Mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Hr, Yt, Xt;
    Xt = {};
    function es(b) {
      if (lt.call(b, "ref")) {
        var I = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function pn(b) {
      if (lt.call(b, "key")) {
        var I = Object.getOwnPropertyDescriptor(b, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function ts(b, I) {
      if (typeof b.ref == "string" && Ve.current && I && Ve.current.stateNode !== I) {
        var F = W(Ve.current.type);
        Xt[F] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Ve.current.type), b.ref), Xt[F] = !0);
      }
    }
    function hn(b, I) {
      {
        var F = function() {
          Hr || (Hr = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        F.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: F,
          configurable: !0
        });
      }
    }
    function oa(b, I) {
      {
        var F = function() {
          Yt || (Yt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        F.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: F,
          configurable: !0
        });
      }
    }
    var ia = function(b, I, F, Y, te, ne, ue) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: b,
        key: I,
        ref: F,
        props: ue,
        // Record the component responsible for creating this element.
        _owner: ne
      };
      return ae._store = {}, Object.defineProperty(ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function rs(b, I, F, Y, te) {
      {
        var ne, ue = {}, ae = null, xe = null;
        F !== void 0 && (je(F), ae = "" + F), pn(I) && (je(I.key), ae = "" + I.key), es(I) && (xe = I.ref, ts(I, te));
        for (ne in I)
          lt.call(I, ne) && !Mt.hasOwnProperty(ne) && (ue[ne] = I[ne]);
        if (b && b.defaultProps) {
          var _e = b.defaultProps;
          for (ne in _e)
            ue[ne] === void 0 && (ue[ne] = _e[ne]);
        }
        if (ae || xe) {
          var Re = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ae && hn(ue, Re), xe && oa(ue, Re);
        }
        return ia(b, ae, xe, te, Y, Ve.current, ue);
      }
    }
    var mn = x.ReactCurrentOwner, Jt = x.ReactDebugCurrentFrame;
    function Lt(b) {
      if (b) {
        var I = b._owner, F = bt(b.type, b._source, I ? I.type : null);
        Jt.setExtraStackFrame(F);
      } else
        Jt.setExtraStackFrame(null);
    }
    var Zr;
    Zr = !1;
    function gn(b) {
      return typeof b == "object" && b !== null && b.$$typeof === e;
    }
    function lo() {
      {
        if (mn.current) {
          var b = W(mn.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function co(b) {
      return "";
    }
    var uo = {};
    function fo(b) {
      {
        var I = lo();
        if (!I) {
          var F = typeof b == "string" ? b : b.displayName || b.name;
          F && (I = `

Check the top-level render call using <` + F + ">.");
        }
        return I;
      }
    }
    function ns(b, I) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var F = fo(I);
        if (uo[F])
          return;
        uo[F] = !0;
        var Y = "";
        b && b._owner && b._owner !== mn.current && (Y = " It was passed a child from " + W(b._owner.type) + "."), Lt(b), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, Y), Lt(null);
      }
    }
    function po(b, I) {
      {
        if (typeof b != "object")
          return;
        if (H(b))
          for (var F = 0; F < b.length; F++) {
            var Y = b[F];
            gn(Y) && ns(Y, I);
          }
        else if (gn(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var te = g(b);
          if (typeof te == "function" && te !== b.entries)
            for (var ne = te.call(b), ue; !(ue = ne.next()).done; )
              gn(ue.value) && ns(ue.value, I);
        }
      }
    }
    function aa(b) {
      {
        var I = b.type;
        if (I == null || typeof I == "string")
          return;
        var F;
        if (typeof I == "function")
          F = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === p))
          F = I.propTypes;
        else
          return;
        if (F) {
          var Y = W(I);
          j(F, b.props, "prop", Y, b);
        } else if (I.PropTypes !== void 0 && !Zr) {
          Zr = !0;
          var te = W(I);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ho(b) {
      {
        for (var I = Object.keys(b.props), F = 0; F < I.length; F++) {
          var Y = I[F];
          if (Y !== "children" && Y !== "key") {
            Lt(b), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Lt(null);
            break;
          }
        }
        b.ref !== null && (Lt(b), w("Invalid attribute `ref` supplied to `React.Fragment`."), Lt(null));
      }
    }
    var mo = {};
    function go(b, I, F, Y, te, ne) {
      {
        var ue = $(b);
        if (!ue) {
          var ae = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = co();
          xe ? ae += xe : ae += lo();
          var _e;
          b === null ? _e = "null" : H(b) ? _e = "array" : b !== void 0 && b.$$typeof === e ? (_e = "<" + (W(b.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof b, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, ae);
        }
        var Re = rs(b, I, F, te, ne);
        if (Re == null)
          return Re;
        if (ue) {
          var nt = I.children;
          if (nt !== void 0)
            if (Y)
              if (H(nt)) {
                for (var Qe = 0; Qe < nt.length; Qe++)
                  po(nt[Qe], b);
                Object.freeze && Object.freeze(nt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              po(nt, b);
        }
        if (lt.call(I, "key")) {
          var Kr = W(b), at = Object.keys(I).filter(function(_y) {
            return _y !== "key";
          }), ua = at.length > 0 ? "{key: someKey, " + at.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mo[Kr + ua]) {
            var xy = at.length > 0 ? "{" + at.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ua, Kr, xy, Kr), mo[Kr + ua] = !0;
          }
        }
        return b === n ? ho(Re) : aa(Re), Re;
      }
    }
    function la(b, I, F) {
      return go(b, I, F, !0);
    }
    function ca(b, I, F) {
      return go(b, I, F, !1);
    }
    var _ = ca, U = la;
    os.Fragment = n, os.jsx = _, os.jsxs = U;
  }()), os;
}
process.env.NODE_ENV === "production" ? Va.exports = Ny() : Va.exports = ky();
var S = Va.exports;
/**
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
 */
/**
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
 */
const Hd = function(t) {
  const e = [];
  let r = 0;
  for (let n = 0; n < t.length; n++) {
    let s = t.charCodeAt(n);
    s < 128 ? e[r++] = s : s < 2048 ? (e[r++] = s >> 6 | 192, e[r++] = s & 63 | 128) : (s & 64512) === 55296 && n + 1 < t.length && (t.charCodeAt(n + 1) & 64512) === 56320 ? (s = 65536 + ((s & 1023) << 10) + (t.charCodeAt(++n) & 1023), e[r++] = s >> 18 | 240, e[r++] = s >> 12 & 63 | 128, e[r++] = s >> 6 & 63 | 128, e[r++] = s & 63 | 128) : (e[r++] = s >> 12 | 224, e[r++] = s >> 6 & 63 | 128, e[r++] = s & 63 | 128);
  }
  return e;
}, Cy = function(t) {
  const e = [];
  let r = 0, n = 0;
  for (; r < t.length; ) {
    const s = t[r++];
    if (s < 128)
      e[n++] = String.fromCharCode(s);
    else if (s > 191 && s < 224) {
      const o = t[r++];
      e[n++] = String.fromCharCode((s & 31) << 6 | o & 63);
    } else if (s > 239 && s < 365) {
      const o = t[r++], i = t[r++], a = t[r++], l = ((s & 7) << 18 | (o & 63) << 12 | (i & 63) << 6 | a & 63) - 65536;
      e[n++] = String.fromCharCode(55296 + (l >> 10)), e[n++] = String.fromCharCode(56320 + (l & 1023));
    } else {
      const o = t[r++], i = t[r++];
      e[n++] = String.fromCharCode((s & 15) << 12 | (o & 63) << 6 | i & 63);
    }
  }
  return e.join("");
}, Zd = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(t, e) {
    if (!Array.isArray(t))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const r = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, n = [];
    for (let s = 0; s < t.length; s += 3) {
      const o = t[s], i = s + 1 < t.length, a = i ? t[s + 1] : 0, l = s + 2 < t.length, c = l ? t[s + 2] : 0, d = o >> 2, p = (o & 3) << 4 | a >> 4;
      let h = (a & 15) << 2 | c >> 6, v = c & 63;
      l || (v = 64, i || (h = 64)), n.push(r[d], r[p], r[h], r[v]);
    }
    return n.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(Hd(t), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : Cy(this.decodeStringToByteArray(t, e));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(t, e) {
    this.init_();
    const r = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, n = [];
    for (let s = 0; s < t.length; ) {
      const o = r[t.charAt(s++)], a = s < t.length ? r[t.charAt(s)] : 0;
      ++s;
      const c = s < t.length ? r[t.charAt(s)] : 64;
      ++s;
      const p = s < t.length ? r[t.charAt(s)] : 64;
      if (++s, o == null || a == null || c == null || p == null)
        throw new Ty();
      const h = o << 2 | a >> 4;
      if (n.push(h), c !== 64) {
        const v = a << 4 & 240 | c >> 2;
        if (n.push(v), p !== 64) {
          const y = c << 6 & 192 | p;
          n.push(y);
        }
      }
    }
    return n;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let t = 0; t < this.ENCODED_VALS.length; t++)
        this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
    }
  }
};
class Ty extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Sy = function(t) {
  const e = Hd(t);
  return Zd.encodeByteArray(e, !0);
}, Kd = function(t) {
  return Sy(t).replace(/\./g, "");
}, qd = function(t) {
  try {
    return Zd.decodeString(t, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
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
 */
function Ry() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
/**
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
 */
const Iy = () => Ry().__FIREBASE_DEFAULTS__, jy = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, Py = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && qd(t[1]);
  return e && JSON.parse(e);
}, Nl = () => {
  try {
    return Iy() || jy() || Py();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, Oy = (t) => {
  var e, r;
  return (r = (e = Nl()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || r === void 0 ? void 0 : r[t];
}, Gd = () => {
  var t;
  return (t = Nl()) === null || t === void 0 ? void 0 : t.config;
}, Yd = (t) => {
  var e;
  return (e = Nl()) === null || e === void 0 ? void 0 : e[`_${t}`];
};
/**
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
 */
class Ay {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, r) => {
      this.resolve = e, this.reject = r;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (r, n) => {
      r ? this.reject(r) : this.resolve(n), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(r) : e(r, n));
    };
  }
}
/**
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
 */
function tt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function Dy() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt());
}
function My() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function Ly() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Fy() {
  const t = tt();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function Uy() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Vy() {
  return new Promise((t, e) => {
    try {
      let r = !0;
      const n = "validate-browser-context-for-indexeddb-analytics-module", s = self.indexedDB.open(n);
      s.onsuccess = () => {
        s.result.close(), r || self.indexedDB.deleteDatabase(n), t(!0);
      }, s.onupgradeneeded = () => {
        r = !1;
      }, s.onerror = () => {
        var o;
        e(((o = s.error) === null || o === void 0 ? void 0 : o.message) || "");
      };
    } catch (r) {
      e(r);
    }
  });
}
/**
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
 */
const $y = "FirebaseError";
class Vr extends Error {
  constructor(e, r, n) {
    super(r), this.code = e, this.customData = n, this.name = $y, Object.setPrototypeOf(this, Vr.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Zs.prototype.create);
  }
}
class Zs {
  constructor(e, r, n) {
    this.service = e, this.serviceName = r, this.errors = n;
  }
  create(e, ...r) {
    const n = r[0] || {}, s = `${this.service}/${e}`, o = this.errors[e], i = o ? zy(o, n) : "Error", a = `${this.serviceName}: ${i} (${s}).`;
    return new Vr(s, a, n);
  }
}
function zy(t, e) {
  return t.replace(By, (r, n) => {
    const s = e[n];
    return s != null ? String(s) : `<${n}?>`;
  });
}
const By = /\{\$([^}]+)}/g;
function Wy(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function Wo(t, e) {
  if (t === e)
    return !0;
  const r = Object.keys(t), n = Object.keys(e);
  for (const s of r) {
    if (!n.includes(s))
      return !1;
    const o = t[s], i = e[s];
    if (ru(o) && ru(i)) {
      if (!Wo(o, i))
        return !1;
    } else if (o !== i)
      return !1;
  }
  for (const s of n)
    if (!r.includes(s))
      return !1;
  return !0;
}
function ru(t) {
  return t !== null && typeof t == "object";
}
/**
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
 */
function Ks(t) {
  const e = [];
  for (const [r, n] of Object.entries(t))
    Array.isArray(n) ? n.forEach((s) => {
      e.push(encodeURIComponent(r) + "=" + encodeURIComponent(s));
    }) : e.push(encodeURIComponent(r) + "=" + encodeURIComponent(n));
  return e.length ? "&" + e.join("&") : "";
}
function us(t) {
  const e = {};
  return t.replace(/^\?/, "").split("&").forEach((n) => {
    if (n) {
      const [s, o] = n.split("=");
      e[decodeURIComponent(s)] = decodeURIComponent(o);
    }
  }), e;
}
function ds(t) {
  const e = t.indexOf("?");
  if (!e)
    return "";
  const r = t.indexOf("#", e);
  return t.substring(e, r > 0 ? r : void 0);
}
function Hy(t, e) {
  const r = new Zy(t, e);
  return r.subscribe.bind(r);
}
class Zy {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, r) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = r, this.task.then(() => {
      e(this);
    }).catch((n) => {
      this.error(n);
    });
  }
  next(e) {
    this.forEachObserver((r) => {
      r.next(e);
    });
  }
  error(e) {
    this.forEachObserver((r) => {
      r.error(e);
    }), this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }), this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */
  subscribe(e, r, n) {
    let s;
    if (e === void 0 && r === void 0 && n === void 0)
      throw new Error("Missing Observer.");
    Ky(e, [
      "next",
      "error",
      "complete"
    ]) ? s = e : s = {
      next: e,
      error: r,
      complete: n
    }, s.next === void 0 && (s.next = da), s.error === void 0 && (s.error = da), s.complete === void 0 && (s.complete = da);
    const o = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? s.error(this.finalError) : s.complete();
      } catch {
      }
    }), this.observers.push(s), o;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(e) {
    this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let r = 0; r < this.observers.length; r++)
        this.sendOne(r, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, r) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          r(this.observers[e]);
        } catch (n) {
          typeof console < "u" && console.error && console.error(n);
        }
    });
  }
  close(e) {
    this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function Ky(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const r of e)
    if (r in t && typeof t[r] == "function")
      return !0;
  return !1;
}
function da() {
}
/**
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
 */
function mt(t) {
  return t && t._delegate ? t._delegate : t;
}
class Mn {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, r, n) {
    this.name = e, this.instanceFactory = r, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this;
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this;
  }
  setServiceProps(e) {
    return this.serviceProps = e, this;
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this;
  }
}
/**
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
 */
const qr = "[DEFAULT]";
/**
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
 */
class qy {
  constructor(e, r) {
    this.name = e, this.container = r, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const r = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(r)) {
      const n = new Ay();
      if (this.instancesDeferred.set(r, n), this.isInitialized(r) || this.shouldAutoInitialize())
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: r
          });
          s && n.resolve(s);
        } catch {
        }
    }
    return this.instancesDeferred.get(r).promise;
  }
  getImmediate(e) {
    var r;
    const n = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier), s = (r = e == null ? void 0 : e.optional) !== null && r !== void 0 ? r : !1;
    if (this.isInitialized(n) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: n
        });
      } catch (o) {
        if (s)
          return null;
        throw o;
      }
    else {
      if (s)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (Yy(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: qr });
        } catch {
        }
      for (const [r, n] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(r);
        try {
          const o = this.getOrInitializeService({
            instanceIdentifier: s
          });
          n.resolve(o);
        } catch {
        }
      }
    }
  }
  clearInstance(e = qr) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((r) => "INTERNAL" in r).map((r) => r.INTERNAL.delete()),
      ...e.filter((r) => "_delete" in r).map((r) => r._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = qr) {
    return this.instances.has(e);
  }
  getOptions(e = qr) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: r = {} } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(n))
      throw Error(`${this.name}(${n}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: n,
      options: r
    });
    for (const [o, i] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(o);
      n === a && i.resolve(s);
    }
    return s;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(e, r) {
    var n;
    const s = this.normalizeInstanceIdentifier(r), o = (n = this.onInitCallbacks.get(s)) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set();
    o.add(e), this.onInitCallbacks.set(s, o);
    const i = this.instances.get(s);
    return i && e(i, s), () => {
      o.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, r) {
    const n = this.onInitCallbacks.get(r);
    if (n)
      for (const s of n)
        try {
          s(e, r);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: r = {} }) {
    let n = this.instances.get(e);
    if (!n && this.component && (n = this.component.instanceFactory(this.container, {
      instanceIdentifier: Gy(e),
      options: r
    }), this.instances.set(e, n), this.instancesOptions.set(e, r), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, n);
      } catch {
      }
    return n || null;
  }
  normalizeInstanceIdentifier(e = qr) {
    return this.component ? this.component.multipleInstances ? e : qr : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Gy(t) {
  return t === qr ? void 0 : t;
}
function Yy(t) {
  return t.instantiationMode === "EAGER";
}
/**
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
 */
class Xy {
  constructor(e) {
    this.name = e, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(e) {
    const r = this.getProvider(e.name);
    if (r.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    r.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(e) {
    if (this.providers.has(e))
      return this.providers.get(e);
    const r = new qy(e, this);
    return this.providers.set(e, r), r;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
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
 */
var Ie;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(Ie || (Ie = {}));
const Jy = {
  debug: Ie.DEBUG,
  verbose: Ie.VERBOSE,
  info: Ie.INFO,
  warn: Ie.WARN,
  error: Ie.ERROR,
  silent: Ie.SILENT
}, Qy = Ie.INFO, eb = {
  [Ie.DEBUG]: "log",
  [Ie.VERBOSE]: "log",
  [Ie.INFO]: "info",
  [Ie.WARN]: "warn",
  [Ie.ERROR]: "error"
}, tb = (t, e, ...r) => {
  if (e < t.logLevel)
    return;
  const n = (/* @__PURE__ */ new Date()).toISOString(), s = eb[e];
  if (s)
    console[s](`[${n}]  ${t.name}:`, ...r);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class Xd {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = Qy, this._logHandler = tb, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in Ie))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Jy[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, Ie.DEBUG, ...e), this._logHandler(this, Ie.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, Ie.VERBOSE, ...e), this._logHandler(this, Ie.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, Ie.INFO, ...e), this._logHandler(this, Ie.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, Ie.WARN, ...e), this._logHandler(this, Ie.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, Ie.ERROR, ...e), this._logHandler(this, Ie.ERROR, ...e);
  }
}
const rb = (t, e) => e.some((r) => t instanceof r);
let nu, su;
function nb() {
  return nu || (nu = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function sb() {
  return su || (su = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const Jd = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Qd = /* @__PURE__ */ new WeakMap(), fa = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ new WeakMap();
function ob(t) {
  const e = new Promise((r, n) => {
    const s = () => {
      t.removeEventListener("success", o), t.removeEventListener("error", i);
    }, o = () => {
      r(Ir(t.result)), s();
    }, i = () => {
      n(t.error), s();
    };
    t.addEventListener("success", o), t.addEventListener("error", i);
  });
  return e.then((r) => {
    r instanceof IDBCursor && Jd.set(r, t);
  }).catch(() => {
  }), kl.set(e, t), e;
}
function ib(t) {
  if ($a.has(t))
    return;
  const e = new Promise((r, n) => {
    const s = () => {
      t.removeEventListener("complete", o), t.removeEventListener("error", i), t.removeEventListener("abort", i);
    }, o = () => {
      r(), s();
    }, i = () => {
      n(t.error || new DOMException("AbortError", "AbortError")), s();
    };
    t.addEventListener("complete", o), t.addEventListener("error", i), t.addEventListener("abort", i);
  });
  $a.set(t, e);
}
let za = {
  get(t, e, r) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return $a.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || Qd.get(t);
      if (e === "store")
        return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
    }
    return Ir(t[e]);
  },
  set(t, e, r) {
    return t[e] = r, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function ab(t) {
  za = t(za);
}
function lb(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...r) {
    const n = t.call(pa(this), e, ...r);
    return Qd.set(n, e.sort ? e.sort() : [e]), Ir(n);
  } : sb().includes(t) ? function(...e) {
    return t.apply(pa(this), e), Ir(Jd.get(this));
  } : function(...e) {
    return Ir(t.apply(pa(this), e));
  };
}
function cb(t) {
  return typeof t == "function" ? lb(t) : (t instanceof IDBTransaction && ib(t), rb(t, nb()) ? new Proxy(t, za) : t);
}
function Ir(t) {
  if (t instanceof IDBRequest)
    return ob(t);
  if (fa.has(t))
    return fa.get(t);
  const e = cb(t);
  return e !== t && (fa.set(t, e), kl.set(e, t)), e;
}
const pa = (t) => kl.get(t);
function ub(t, e, { blocked: r, upgrade: n, blocking: s, terminated: o } = {}) {
  const i = indexedDB.open(t, e), a = Ir(i);
  return n && i.addEventListener("upgradeneeded", (l) => {
    n(Ir(i.result), l.oldVersion, l.newVersion, Ir(i.transaction), l);
  }), r && i.addEventListener("blocked", (l) => r(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    l.oldVersion,
    l.newVersion,
    l
  )), a.then((l) => {
    o && l.addEventListener("close", () => o()), s && l.addEventListener("versionchange", (c) => s(c.oldVersion, c.newVersion, c));
  }).catch(() => {
  }), a;
}
const db = ["get", "getKey", "getAll", "getAllKeys", "count"], fb = ["put", "add", "delete", "clear"], ha = /* @__PURE__ */ new Map();
function ou(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (ha.get(e))
    return ha.get(e);
  const r = e.replace(/FromIndex$/, ""), n = e !== r, s = fb.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(s || db.includes(r))
  )
    return;
  const o = async function(i, ...a) {
    const l = this.transaction(i, s ? "readwrite" : "readonly");
    let c = l.store;
    return n && (c = c.index(a.shift())), (await Promise.all([
      c[r](...a),
      s && l.done
    ]))[0];
  };
  return ha.set(e, o), o;
}
ab((t) => ({
  ...t,
  get: (e, r, n) => ou(e, r) || t.get(e, r, n),
  has: (e, r) => !!ou(e, r) || t.has(e, r)
}));
/**
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
 */
class pb {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((r) => {
      if (hb(r)) {
        const n = r.getImmediate();
        return `${n.library}/${n.version}`;
      } else
        return null;
    }).filter((r) => r).join(" ");
  }
}
function hb(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Ba = "@firebase/app", iu = "0.10.7";
/**
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
 */
const rn = new Xd("@firebase/app"), mb = "@firebase/app-compat", gb = "@firebase/analytics-compat", vb = "@firebase/analytics", yb = "@firebase/app-check-compat", bb = "@firebase/app-check", wb = "@firebase/auth", xb = "@firebase/auth-compat", _b = "@firebase/database", Eb = "@firebase/database-compat", Nb = "@firebase/functions", kb = "@firebase/functions-compat", Cb = "@firebase/installations", Tb = "@firebase/installations-compat", Sb = "@firebase/messaging", Rb = "@firebase/messaging-compat", Ib = "@firebase/performance", jb = "@firebase/performance-compat", Pb = "@firebase/remote-config", Ob = "@firebase/remote-config-compat", Ab = "@firebase/storage", Db = "@firebase/storage-compat", Mb = "@firebase/firestore", Lb = "@firebase/vertexai-preview", Fb = "@firebase/firestore-compat", Ub = "firebase", Vb = "10.12.4";
/**
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
 */
const Wa = "[DEFAULT]", $b = {
  [Ba]: "fire-core",
  [mb]: "fire-core-compat",
  [vb]: "fire-analytics",
  [gb]: "fire-analytics-compat",
  [bb]: "fire-app-check",
  [yb]: "fire-app-check-compat",
  [wb]: "fire-auth",
  [xb]: "fire-auth-compat",
  [_b]: "fire-rtdb",
  [Eb]: "fire-rtdb-compat",
  [Nb]: "fire-fn",
  [kb]: "fire-fn-compat",
  [Cb]: "fire-iid",
  [Tb]: "fire-iid-compat",
  [Sb]: "fire-fcm",
  [Rb]: "fire-fcm-compat",
  [Ib]: "fire-perf",
  [jb]: "fire-perf-compat",
  [Pb]: "fire-rc",
  [Ob]: "fire-rc-compat",
  [Ab]: "fire-gcs",
  [Db]: "fire-gcs-compat",
  [Mb]: "fire-fst",
  [Fb]: "fire-fst-compat",
  [Lb]: "fire-vertex",
  "fire-js": "fire-js",
  [Ub]: "fire-js-all"
};
/**
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
 */
const Ho = /* @__PURE__ */ new Map(), zb = /* @__PURE__ */ new Map(), Ha = /* @__PURE__ */ new Map();
function au(t, e) {
  try {
    t.container.addComponent(e);
  } catch (r) {
    rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, r);
  }
}
function Es(t) {
  const e = t.name;
  if (Ha.has(e))
    return rn.debug(`There were multiple attempts to register component ${e}.`), !1;
  Ha.set(e, t);
  for (const r of Ho.values())
    au(r, t);
  for (const r of zb.values())
    au(r, t);
  return !0;
}
function ef(t, e) {
  const r = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return r && r.triggerHeartbeat(), t.container.getProvider(e);
}
function Tt(t) {
  return t.settings !== void 0;
}
/**
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
 */
const Bb = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}'",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "server-app-deleted": "Firebase Server App has been deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}, jr = new Zs("app", "Firebase", Bb);
/**
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
 */
class Wb {
  constructor(e, r, n) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, r), this._name = r.name, this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new Mn(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw jr.create("app-deleted", { appName: this._name });
  }
}
/**
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
 */
const qs = Vb;
function tf(t, e = {}) {
  let r = t;
  typeof e != "object" && (e = { name: e });
  const n = Object.assign({ name: Wa, automaticDataCollectionEnabled: !1 }, e), s = n.name;
  if (typeof s != "string" || !s)
    throw jr.create("bad-app-name", {
      appName: String(s)
    });
  if (r || (r = Gd()), !r)
    throw jr.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const o = Ho.get(s);
  if (o) {
    if (Wo(r, o.options) && Wo(n, o.config))
      return o;
    throw jr.create("duplicate-app", { appName: s });
  }
  const i = new Xy(s);
  for (const l of Ha.values())
    i.addComponent(l);
  const a = new Wb(r, n, i);
  return Ho.set(s, a), a;
}
function Hb(t = Wa) {
  const e = Ho.get(t);
  if (!e && t === Wa && Gd())
    return tf();
  if (!e)
    throw jr.create("no-app", { appName: t });
  return e;
}
function Tn(t, e, r) {
  var n;
  let s = (n = $b[t]) !== null && n !== void 0 ? n : t;
  r && (s += `-${r}`);
  const o = s.match(/\s|\//), i = e.match(/\s|\//);
  if (o || i) {
    const a = [
      `Unable to register library "${s}" with version "${e}":`
    ];
    o && a.push(`library name "${s}" contains illegal characters (whitespace or "/")`), o && i && a.push("and"), i && a.push(`version name "${e}" contains illegal characters (whitespace or "/")`), rn.warn(a.join(" "));
    return;
  }
  Es(new Mn(
    `${s}-version`,
    () => ({ library: s, version: e }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
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
 */
const Zb = "firebase-heartbeat-database", Kb = 1, Ns = "firebase-heartbeat-store";
let ma = null;
function rf() {
  return ma || (ma = ub(Zb, Kb, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          try {
            t.createObjectStore(Ns);
          } catch (r) {
            console.warn(r);
          }
      }
    }
  }).catch((t) => {
    throw jr.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), ma;
}
async function qb(t) {
  try {
    const r = (await rf()).transaction(Ns), n = await r.objectStore(Ns).get(nf(t));
    return await r.done, n;
  } catch (e) {
    if (e instanceof Vr)
      rn.warn(e.message);
    else {
      const r = jr.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      rn.warn(r.message);
    }
  }
}
async function lu(t, e) {
  try {
    const n = (await rf()).transaction(Ns, "readwrite");
    await n.objectStore(Ns).put(e, nf(t)), await n.done;
  } catch (r) {
    if (r instanceof Vr)
      rn.warn(r.message);
    else {
      const n = jr.create("idb-set", {
        originalErrorMessage: r == null ? void 0 : r.message
      });
      rn.warn(n.message);
    }
  }
}
function nf(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
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
 */
const Gb = 1024, Yb = 30 * 24 * 60 * 60 * 1e3;
class Xb {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const r = this.container.getProvider("app").getImmediate();
    this._storage = new Qb(r), this._heartbeatsCachePromise = this._storage.read().then((n) => (this._heartbeatsCache = n, n));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    var e, r;
    const s = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), o = cu();
    if (!(((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((r = this._heartbeatsCache) === null || r === void 0 ? void 0 : r.heartbeats) == null)) && !(this._heartbeatsCache.lastSentHeartbeatDate === o || this._heartbeatsCache.heartbeats.some((i) => i.date === o)))
      return this._heartbeatsCache.heartbeats.push({ date: o, agent: s }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((i) => {
        const a = new Date(i.date).valueOf();
        return Date.now() - a <= Yb;
      }), this._storage.overwrite(this._heartbeatsCache);
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    var e;
    if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
      return "";
    const r = cu(), { heartbeatsToSend: n, unsentEntries: s } = Jb(this._heartbeatsCache.heartbeats), o = Kd(JSON.stringify({ version: 2, heartbeats: n }));
    return this._heartbeatsCache.lastSentHeartbeatDate = r, s.length > 0 ? (this._heartbeatsCache.heartbeats = s, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), o;
  }
}
function cu() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Jb(t, e = Gb) {
  const r = [];
  let n = t.slice();
  for (const s of t) {
    const o = r.find((i) => i.agent === s.agent);
    if (o) {
      if (o.dates.push(s.date), uu(r) > e) {
        o.dates.pop();
        break;
      }
    } else if (r.push({
      agent: s.agent,
      dates: [s.date]
    }), uu(r) > e) {
      r.pop();
      break;
    }
    n = n.slice(1);
  }
  return {
    heartbeatsToSend: r,
    unsentEntries: n
  };
}
class Qb {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return Uy() ? Vy().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const r = await qb(this.app);
      return r != null && r.heartbeats ? r : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return lu(this.app, {
        lastSentHeartbeatDate: (r = e.lastSentHeartbeatDate) !== null && r !== void 0 ? r : s.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return lu(this.app, {
        lastSentHeartbeatDate: (r = e.lastSentHeartbeatDate) !== null && r !== void 0 ? r : s.lastSentHeartbeatDate,
        heartbeats: [
          ...s.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function uu(t) {
  return Kd(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
  ).length;
}
/**
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
 */
function ew(t) {
  Es(new Mn(
    "platform-logger",
    (e) => new pb(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Es(new Mn(
    "heartbeat",
    (e) => new Xb(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Tn(Ba, iu, t), Tn(Ba, iu, "esm2017"), Tn("fire-js", "");
}
ew("");
var tw = "firebase", rw = "10.12.4";
/**
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
 */
Tn(tw, rw, "app");
function Cl(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function sf() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const nw = sf, of = new Zs("auth", "Firebase", sf());
/**
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
 */
const Zo = new Xd("@firebase/auth");
function sw(t, ...e) {
  Zo.logLevel <= Ie.WARN && Zo.warn(`Auth (${qs}): ${t}`, ...e);
}
function Po(t, ...e) {
  Zo.logLevel <= Ie.ERROR && Zo.error(`Auth (${qs}): ${t}`, ...e);
}
/**
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
 */
function _t(t, ...e) {
  throw Sl(t, ...e);
}
function Rt(t, ...e) {
  return Sl(t, ...e);
}
function Tl(t, e, r) {
  const n = Object.assign(Object.assign({}, nw()), { [e]: r });
  return new Zs("auth", "Firebase", n).create(e, {
    appName: t.name
  });
}
function ir(t) {
  return Tl(t, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function ow(t, e, r) {
  const n = r;
  if (!(e instanceof n))
    throw n.name !== e.constructor.name && _t(
      t,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Tl(t, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function Sl(t, ...e) {
  if (typeof t != "string") {
    const r = e[0], n = [...e.slice(1)];
    return n[0] && (n[0].appName = t.name), t._errorFactory.create(r, ...n);
  }
  return of.create(t, ...e);
}
function ce(t, e, ...r) {
  if (!t)
    throw Sl(e, ...r);
}
function nr(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw Po(e), new Error(e);
}
function ar(t, e) {
  t || nr(e);
}
/**
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
 */
function Za() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.href) || "";
}
function iw() {
  return du() === "http:" || du() === "https:";
}
function du() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.protocol) || null;
}
/**
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
 */
function aw() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (iw() || My() || "connection" in navigator) ? navigator.onLine : !0;
}
function lw() {
  if (typeof navigator > "u")
    return null;
  const t = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    t.languages && t.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    t.language || // Couldn't determine language.
    null
  );
}
/**
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
 */
class Gs {
  constructor(e, r) {
    this.shortDelay = e, this.longDelay = r, ar(r > e, "Short delay should be less than long delay!"), this.isMobile = Dy() || Ly();
  }
  get() {
    return aw() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
  }
}
/**
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
 */
function Rl(t, e) {
  ar(t.emulator, "Emulator should always be set here");
  const { url: r } = t.emulator;
  return e ? `${r}${e.startsWith("/") ? e.slice(1) : e}` : r;
}
/**
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
 */
class af {
  static initialize(e, r, n) {
    this.fetchImpl = e, r && (this.headersImpl = r), n && (this.responseImpl = n);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch)
      return globalThis.fetch;
    if (typeof fetch < "u")
      return fetch;
    nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u")
      return Headers;
    nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u")
      return Response;
    nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
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
 */
const cw = {
  // Custom token errors.
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  MISSING_CUSTOM_TOKEN: "internal-error",
  // Create Auth URI errors.
  INVALID_IDENTIFIER: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  MISSING_CONTINUE_URI: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  INVALID_PASSWORD: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  MISSING_PASSWORD: "missing-password",
  // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
  // invalid.
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  // Sign up with email and password errors.
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  MISSING_REQ_TYPE: "internal-error",
  // Send Password reset email errors:
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  MISSING_OOB_CODE: "internal-error",
  // Operations that require ID token in request:
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  // Other errors.
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  // Phone Auth related errors.
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  // Multi factor related errors.
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  // Recaptcha related errors.
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
/**
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
 */
const uw = new Gs(3e4, 6e4);
function Ot(t, e) {
  return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
}
async function Nt(t, e, r, n, s = {}) {
  return lf(t, s, async () => {
    let o = {}, i = {};
    n && (e === "GET" ? i = n : o = {
      body: JSON.stringify(n)
    });
    const a = Ks(Object.assign({ key: t.config.apiKey }, i)).slice(1), l = await t._getAdditionalHeaders();
    return l[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", t.languageCode && (l[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = t.languageCode), af.fetch()(cf(t, t.config.apiHost, r, a), Object.assign({
      method: e,
      headers: l,
      referrerPolicy: "no-referrer"
    }, o));
  });
}
async function lf(t, e, r) {
  t._canInitEmulator = !1;
  const n = Object.assign(Object.assign({}, cw), e);
  try {
    const s = new fw(t), o = await Promise.race([
      r(),
      s.promise
    ]);
    s.clearNetworkTimeout();
    const i = await o.json();
    if ("needConfirmation" in i)
      throw vo(t, "account-exists-with-different-credential", i);
    if (o.ok && !("errorMessage" in i))
      return i;
    {
      const a = o.ok ? i.errorMessage : i.error.message, [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw vo(t, "credential-already-in-use", i);
      if (l === "EMAIL_EXISTS")
        throw vo(t, "email-already-in-use", i);
      if (l === "USER_DISABLED")
        throw vo(t, "user-disabled", i);
      const d = n[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw Tl(t, d, c);
      _t(t, d);
    }
  } catch (s) {
    if (s instanceof Vr)
      throw s;
    _t(t, "network-request-failed", { message: String(s) });
  }
}
async function Ys(t, e, r, n, s = {}) {
  const o = await Nt(t, e, r, n, s);
  return "mfaPendingCredential" in o && _t(t, "multi-factor-auth-required", {
    _serverResponse: o
  }), o;
}
function cf(t, e, r, n) {
  const s = `${e}${r}?${n}`;
  return t.config.emulator ? Rl(t.config, s) : `${t.config.apiScheme}://${s}`;
}
function dw(t) {
  switch (t) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class fw {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((r, n) => {
      this.timer = setTimeout(() => n(Rt(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), uw.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function vo(t, e, r) {
  const n = {
    appName: t.name
  };
  r.email && (n.email = r.email), r.phoneNumber && (n.phoneNumber = r.phoneNumber);
  const s = Rt(t, e, n);
  return s.customData._tokenResponse = r, s;
}
function fu(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class pw {
  constructor(e) {
    if (this.siteKey = "", this.recaptchaEnforcementState = [], e.recaptchaKey === void 0)
      throw new Error("recaptchaKey undefined");
    this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState;
  }
  /**
   * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
   *
   * @param providerStr - The provider whose enforcement state is to be returned.
   * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
   */
  getProviderEnforcementState(e) {
    if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0)
      return null;
    for (const r of this.recaptchaEnforcementState)
      if (r.provider && r.provider === e)
        return dw(r.enforcementState);
    return null;
  }
  /**
   * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
   *
   * @param providerStr - The provider whose enablement state is to be returned.
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
   */
  isProviderEnabled(e) {
    return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT";
  }
}
async function hw(t, e) {
  return Nt(t, "GET", "/v2/recaptchaConfig", Ot(t, e));
}
/**
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
 */
async function mw(t, e) {
  return Nt(t, "POST", "/v1/accounts:delete", e);
}
async function uf(t, e) {
  return Nt(t, "POST", "/v1/accounts:lookup", e);
}
/**
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
 */
function ms(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function gw(t, e = !1) {
  const r = mt(t), n = await r.getIdToken(e), s = Il(n);
  ce(
    s && s.exp && s.auth_time && s.iat,
    r.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const o = typeof s.firebase == "object" ? s.firebase : void 0, i = o == null ? void 0 : o.sign_in_provider;
  return {
    claims: s,
    token: n,
    authTime: ms(ga(s.auth_time)),
    issuedAtTime: ms(ga(s.iat)),
    expirationTime: ms(ga(s.exp)),
    signInProvider: i || null,
    signInSecondFactor: (o == null ? void 0 : o.sign_in_second_factor) || null
  };
}
function ga(t) {
  return Number(t) * 1e3;
}
function Il(t) {
  const [e, r, n] = t.split(".");
  if (e === void 0 || r === void 0 || n === void 0)
    return Po("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const s = qd(r);
    return s ? JSON.parse(s) : (Po("Failed to decode base64 JWT payload"), null);
  } catch (s) {
    return Po("Caught error parsing JWT payload as JSON", s == null ? void 0 : s.toString()), null;
  }
}
function pu(t) {
  const e = Il(t);
  return ce(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), ce(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), ce(
    typeof e.iat < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Number(e.exp) - Number(e.iat);
}
/**
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
 */
async function Ln(t, e, r = !1) {
  if (r)
    return e;
  try {
    return await e;
  } catch (n) {
    throw n instanceof Vr && vw(n) && t.auth.currentUser === t && await t.auth.signOut(), n;
  }
}
function vw({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
/**
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
 */
class yw {
  constructor(e) {
    this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
  }
  _start() {
    this.isRunning || (this.isRunning = !0, this.schedule());
  }
  _stop() {
    this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var r;
    if (e) {
      const n = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      ), n;
    } else {
      this.errorBackoff = 3e4;
      const s = ((r = this.user.stsTokenManager.expirationTime) !== null && r !== void 0 ? r : 0) - Date.now() - 3e5;
      return Math.max(0, s);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const r = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, r);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(
        /* wasError */
        !0
      );
      return;
    }
    this.schedule();
  }
}
/**
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
 */
class Ka {
  constructor(e, r) {
    this.createdAt = e, this.lastLoginAt = r, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = ms(this.lastLoginAt), this.creationTime = ms(this.createdAt);
  }
  _copy(e) {
    this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
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
 */
async function Ko(t) {
  var e;
  const r = t.auth, n = await t.getIdToken(), s = await Ln(t, uf(r, { idToken: n }));
  ce(
    s == null ? void 0 : s.users.length,
    r,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const o = s.users[0];
  t._notifyReloadListener(o);
  const i = !((e = o.providerUserInfo) === null || e === void 0) && e.length ? df(o.providerUserInfo) : [], a = ww(t.providerData, i), l = t.isAnonymous, c = !(t.email && o.passwordHash) && !(a != null && a.length), d = l ? c : !1, p = {
    uid: o.localId,
    displayName: o.displayName || null,
    photoURL: o.photoUrl || null,
    email: o.email || null,
    emailVerified: o.emailVerified || !1,
    phoneNumber: o.phoneNumber || null,
    tenantId: o.tenantId || null,
    providerData: a,
    metadata: new Ka(o.createdAt, o.lastLoginAt),
    isAnonymous: d
  };
  Object.assign(t, p);
}
async function bw(t) {
  const e = mt(t);
  await Ko(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function ww(t, e) {
  return [...t.filter((n) => !e.some((s) => s.providerId === n.providerId)), ...e];
}
function df(t) {
  return t.map((e) => {
    var { providerId: r } = e, n = Cl(e, ["providerId"]);
    return {
      providerId: r,
      uid: n.rawId || "",
      displayName: n.displayName || null,
      email: n.email || null,
      phoneNumber: n.phoneNumber || null,
      photoURL: n.photoUrl || null
    };
  });
}
/**
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
 */
async function xw(t, e) {
  const r = await lf(t, {}, async () => {
    const n = Ks({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: s, apiKey: o } = t.config, i = cf(t, s, "/v1/token", `key=${o}`), a = await t._getAdditionalHeaders();
    return a[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", af.fetch()(i, {
      method: "POST",
      headers: a,
      body: n
    });
  });
  return {
    accessToken: r.access_token,
    expiresIn: r.expires_in,
    refreshToken: r.refresh_token
  };
}
async function _w(t, e) {
  return Nt(t, "POST", "/v2/accounts:revokeToken", Ot(t, e));
}
/**
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
 */
class Sn {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    ce(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ce(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ce(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const r = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : pu(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, r);
  }
  updateFromIdToken(e) {
    ce(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const r = pu(e);
    this.updateTokensAndExpiration(e, null, r);
  }
  async getToken(e, r = !1) {
    return !r && this.accessToken && !this.isExpired ? this.accessToken : (ce(
      this.refreshToken,
      e,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    ), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, r) {
    const { accessToken: n, refreshToken: s, expiresIn: o } = await xw(e, r);
    this.updateTokensAndExpiration(n, s, Number(o));
  }
  updateTokensAndExpiration(e, r, n) {
    this.refreshToken = r || null, this.accessToken = e || null, this.expirationTime = Date.now() + n * 1e3;
  }
  static fromJSON(e, r) {
    const { refreshToken: n, accessToken: s, expirationTime: o } = r, i = new Sn();
    return n && (ce(typeof n == "string", "internal-error", {
      appName: e
    }), i.refreshToken = n), s && (ce(typeof s == "string", "internal-error", {
      appName: e
    }), i.accessToken = s), o && (ce(typeof o == "number", "internal-error", {
      appName: e
    }), i.expirationTime = o), i;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(e) {
    this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
  }
  _clone() {
    return Object.assign(new Sn(), this.toJSON());
  }
  _performRefresh() {
    return nr("not implemented");
  }
}
/**
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
 */
function vr(t, e) {
  ce(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class sr {
  constructor(e) {
    var { uid: r, auth: n, stsTokenManager: s } = e, o = Cl(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new yw(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = r, this.auth = n, this.stsTokenManager = s, this.accessToken = s.accessToken, this.displayName = o.displayName || null, this.email = o.email || null, this.emailVerified = o.emailVerified || !1, this.phoneNumber = o.phoneNumber || null, this.photoURL = o.photoURL || null, this.isAnonymous = o.isAnonymous || !1, this.tenantId = o.tenantId || null, this.providerData = o.providerData ? [...o.providerData] : [], this.metadata = new Ka(o.createdAt || void 0, o.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const r = await Ln(this, this.stsTokenManager.getToken(this.auth, e));
    return ce(
      r,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== r && (this.accessToken = r, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), r;
  }
  getIdTokenResult(e) {
    return gw(this, e);
  }
  reload() {
    return bw(this);
  }
  _assign(e) {
    this !== e && (ce(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((r) => Object.assign({}, r)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const r = new sr(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
    return r.metadata._copy(this.metadata), r;
  }
  _onReload(e) {
    ce(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, r = !1) {
    let n = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), r && await Ko(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (Tt(this.auth.app))
      return Promise.reject(ir(this.auth));
    const e = await this.getIdToken();
    return await Ln(this, mw(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => Object.assign({}, e)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, r) {
    var n, s, o, i, a, l, c, d;
    const p = (n = r.displayName) !== null && n !== void 0 ? n : void 0, h = (s = r.email) !== null && s !== void 0 ? s : void 0, v = (o = r.phoneNumber) !== null && o !== void 0 ? o : void 0, y = (i = r.photoURL) !== null && i !== void 0 ? i : void 0, m = (a = r.tenantId) !== null && a !== void 0 ? a : void 0, g = (l = r._redirectEventId) !== null && l !== void 0 ? l : void 0, x = (c = r.createdAt) !== null && c !== void 0 ? c : void 0, w = (d = r.lastLoginAt) !== null && d !== void 0 ? d : void 0, { uid: E, emailVerified: k, isAnonymous: C, providerData: A, stsTokenManager: O } = r;
    ce(
      E && O,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const R = Sn.fromJSON(this.name, O);
    ce(
      typeof E == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), vr(p, e.name), vr(h, e.name), ce(
      typeof k == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ce(
      typeof C == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), vr(v, e.name), vr(y, e.name), vr(m, e.name), vr(g, e.name), vr(x, e.name), vr(w, e.name);
    const L = new sr({
      uid: E,
      auth: e,
      email: h,
      emailVerified: k,
      displayName: p,
      isAnonymous: C,
      photoURL: y,
      phoneNumber: v,
      tenantId: m,
      stsTokenManager: R,
      createdAt: x,
      lastLoginAt: w
    });
    return A && Array.isArray(A) && (L.providerData = A.map(($) => Object.assign({}, $))), g && (L._redirectEventId = g), L;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, r, n = !1) {
    const s = new Sn();
    s.updateFromServerResponse(r);
    const o = new sr({
      uid: r.localId,
      auth: e,
      stsTokenManager: s,
      isAnonymous: n
    });
    return await Ko(o), o;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, r, n) {
    const s = r.users[0];
    ce(
      s.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = s.providerUserInfo !== void 0 ? df(s.providerUserInfo) : [], i = !(s.email && s.passwordHash) && !(o != null && o.length), a = new Sn();
    a.updateFromIdToken(n);
    const l = new sr({
      uid: s.localId,
      auth: e,
      stsTokenManager: a,
      isAnonymous: i
    }), c = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: o,
      metadata: new Ka(s.createdAt, s.lastLoginAt),
      isAnonymous: !(s.email && s.passwordHash) && !(o != null && o.length)
    };
    return Object.assign(l, c), l;
  }
}
/**
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
 */
const hu = /* @__PURE__ */ new Map();
function or(t) {
  ar(t instanceof Function, "Expected a class definition");
  let e = hu.get(t);
  return e ? (ar(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), hu.set(t, e), e);
}
/**
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
 */
class ff {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, r) {
    this.storage[e] = r;
  }
  async _get(e) {
    const r = this.storage[e];
    return r === void 0 ? null : r;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, r) {
  }
  _removeListener(e, r) {
  }
}
ff.type = "NONE";
const mu = ff;
/**
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
 */
function Oo(t, e, r) {
  return `firebase:${t}:${e}:${r}`;
}
class Rn {
  constructor(e, r, n) {
    this.persistence = e, this.auth = r, this.userKey = n;
    const { config: s, name: o } = this.auth;
    this.fullUserKey = Oo(this.userKey, s.apiKey, o), this.fullPersistenceKey = Oo("persistence", s.apiKey, o), this.boundEventHandler = r._onStorageEvent.bind(r), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? sr._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(e) {
    if (this.persistence === e)
      return;
    const r = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = e, r)
      return this.setCurrentUser(r);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, r, n = "authUser") {
    if (!r.length)
      return new Rn(or(mu), e, n);
    const s = (await Promise.all(r.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let o = s[0] || or(mu);
    const i = Oo(n, e.config.apiKey, e.name);
    let a = null;
    for (const c of r)
      try {
        const d = await c._get(i);
        if (d) {
          const p = sr._fromJSON(e, d);
          c !== o && (a = p), o = c;
          break;
        }
      } catch {
      }
    const l = s.filter((c) => c._shouldAllowMigration);
    return !o._shouldAllowMigration || !l.length ? new Rn(o, e, n) : (o = l[0], a && await o._set(i, a.toJSON()), await Promise.all(r.map(async (c) => {
      if (c !== o)
        try {
          await c._remove(i);
        } catch {
        }
    })), new Rn(o, e, n));
  }
}
/**
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
 */
function gu(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (mf(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (pf(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (vf(e))
    return "Blackberry";
  if (yf(e))
    return "Webos";
  if (jl(e))
    return "Safari";
  if ((e.includes("chrome/") || hf(e)) && !e.includes("edge/"))
    return "Chrome";
  if (gf(e))
    return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, n = t.match(r);
    if ((n == null ? void 0 : n.length) === 2)
      return n[1];
  }
  return "Other";
}
function pf(t = tt()) {
  return /firefox\//i.test(t);
}
function jl(t = tt()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function hf(t = tt()) {
  return /crios\//i.test(t);
}
function mf(t = tt()) {
  return /iemobile/i.test(t);
}
function gf(t = tt()) {
  return /android/i.test(t);
}
function vf(t = tt()) {
  return /blackberry/i.test(t);
}
function yf(t = tt()) {
  return /webos/i.test(t);
}
function ki(t = tt()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function Ew(t = tt()) {
  var e;
  return ki(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function Nw() {
  return Fy() && document.documentMode === 10;
}
function bf(t = tt()) {
  return ki(t) || gf(t) || yf(t) || vf(t) || /windows phone/i.test(t) || mf(t);
}
function kw() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
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
 */
function wf(t, e = []) {
  let r;
  switch (t) {
    case "Browser":
      r = gu(tt());
      break;
    case "Worker":
      r = `${gu(tt())}-${t}`;
      break;
    default:
      r = t;
  }
  const n = e.length ? e.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${qs}/${n}`;
}
/**
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
 */
class Cw {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, r) {
    const n = (o) => new Promise((i, a) => {
      try {
        const l = e(o);
        i(l);
      } catch (l) {
        a(l);
      }
    });
    n.onAbort = r, this.queue.push(n);
    const s = this.queue.length - 1;
    return () => {
      this.queue[s] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e)
      return;
    const r = [];
    try {
      for (const n of this.queue)
        await n(e), n.onAbort && r.push(n.onAbort);
    } catch (n) {
      r.reverse();
      for (const s of r)
        try {
          s();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: n == null ? void 0 : n.message
      });
    }
  }
}
/**
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
 */
async function Tw(t, e = {}) {
  return Nt(t, "GET", "/v2/passwordPolicy", Ot(t, e));
}
/**
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
 */
const Sw = 6;
class Rw {
  constructor(e) {
    var r, n, s, o;
    const i = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (r = i.minPasswordLength) !== null && r !== void 0 ? r : Sw, i.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = i.maxPasswordLength), i.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = i.containsLowercaseCharacter), i.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = i.containsUppercaseCharacter), i.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = i.containsNumericCharacter), i.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = i.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (s = (n = e.allowedNonAlphanumericCharacters) === null || n === void 0 ? void 0 : n.join("")) !== null && s !== void 0 ? s : "", this.forceUpgradeOnSignin = (o = e.forceUpgradeOnSignin) !== null && o !== void 0 ? o : !1, this.schemaVersion = e.schemaVersion;
  }
  validatePassword(e) {
    var r, n, s, o, i, a;
    const l = {
      isValid: !0,
      passwordPolicy: this
    };
    return this.validatePasswordLengthOptions(e, l), this.validatePasswordCharacterOptions(e, l), l.isValid && (l.isValid = (r = l.meetsMinPasswordLength) !== null && r !== void 0 ? r : !0), l.isValid && (l.isValid = (n = l.meetsMaxPasswordLength) !== null && n !== void 0 ? n : !0), l.isValid && (l.isValid = (s = l.containsLowercaseLetter) !== null && s !== void 0 ? s : !0), l.isValid && (l.isValid = (o = l.containsUppercaseLetter) !== null && o !== void 0 ? o : !0), l.isValid && (l.isValid = (i = l.containsNumericCharacter) !== null && i !== void 0 ? i : !0), l.isValid && (l.isValid = (a = l.containsNonAlphanumericCharacter) !== null && a !== void 0 ? a : !0), l;
  }
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordLengthOptions(e, r) {
    const n = this.customStrengthOptions.minPasswordLength, s = this.customStrengthOptions.maxPasswordLength;
    n && (r.meetsMinPasswordLength = e.length >= n), s && (r.meetsMaxPasswordLength = e.length <= s);
  }
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(e, r) {
    this.updatePasswordCharacterOptionsStatuses(
      r,
      /* containsLowercaseCharacter= */
      !1,
      /* containsUppercaseCharacter= */
      !1,
      /* containsNumericCharacter= */
      !1,
      /* containsNonAlphanumericCharacter= */
      !1
    );
    let n;
    for (let s = 0; s < e.length; s++)
      n = e.charAt(s), this.updatePasswordCharacterOptionsStatuses(
        r,
        /* containsLowercaseCharacter= */
        n >= "a" && n <= "z",
        /* containsUppercaseCharacter= */
        n >= "A" && n <= "Z",
        /* containsNumericCharacter= */
        n >= "0" && n <= "9",
        /* containsNonAlphanumericCharacter= */
        this.allowedNonAlphanumericCharacters.includes(n)
      );
  }
  /**
   * Updates the running validation status with the statuses for the character options.
   * Expected to be called each time a character is processed to update each option status
   * based on the current character.
   *
   * @param status Validation status.
   * @param containsLowercaseCharacter Whether the character is a lowercase letter.
   * @param containsUppercaseCharacter Whether the character is an uppercase letter.
   * @param containsNumericCharacter Whether the character is a numeric character.
   * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
   */
  updatePasswordCharacterOptionsStatuses(e, r, n, s, o) {
    this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = r)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = s)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = o));
  }
}
/**
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
 */
class Iw {
  constructor(e, r, n, s) {
    this.app = e, this.heartbeatServiceProvider = r, this.appCheckServiceProvider = n, this.config = s, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new vu(this), this.idTokenSubscription = new vu(this), this.beforeStateQueue = new Cw(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = of, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = s.sdkClientVersion;
  }
  _initializeWithPersistence(e, r) {
    return r && (this._popupRedirectResolver = or(r)), this._initializationPromise = this.queue(async () => {
      var n, s;
      if (!this._deleted && (this.persistenceManager = await Rn.create(this, e), !this._deleted)) {
        if (!((n = this._popupRedirectResolver) === null || n === void 0) && n._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(r), this.lastNotifiedUid = ((s = this.currentUser) === null || s === void 0 ? void 0 : s.uid) || null, !this._deleted && (this._isInitialized = !0);
      }
    }), this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted)
      return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(
        e,
        /* skipBeforeStateCallbacks */
        !0
      );
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const r = await uf(this, { idToken: e }), n = await sr._fromGetAccountInfoResponse(this, r, e);
      await this.directlySetCurrentUser(n);
    } catch (r) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", r), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    var r;
    if (Tt(this.app)) {
      const i = this.app.settings.authIdToken;
      return i ? new Promise((a) => {
        setTimeout(() => this.initializeCurrentUserFromIdToken(i).then(a, a));
      }) : this.directlySetCurrentUser(null);
    }
    const n = await this.assertedPersistence.getCurrentUser();
    let s = n, o = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const i = (r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId, a = s == null ? void 0 : s._redirectEventId, l = await this.tryRedirectSignIn(e);
      (!i || i === a) && (l != null && l.user) && (s = l.user, o = !0);
    }
    if (!s)
      return this.directlySetCurrentUser(null);
    if (!s._redirectEventId) {
      if (o)
        try {
          await this.beforeStateQueue.runMiddleware(s);
        } catch (i) {
          s = n, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(i));
        }
      return s ? this.reloadAndSetCurrentUserOrClear(s) : this.directlySetCurrentUser(null);
    }
    return ce(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === s._redirectEventId ? this.directlySetCurrentUser(s) : this.reloadAndSetCurrentUserOrClear(s);
  }
  async tryRedirectSignIn(e) {
    let r = null;
    try {
      r = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return r;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await Ko(e);
    } catch (r) {
      if ((r == null ? void 0 : r.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = lw();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (Tt(this.app))
      return Promise.reject(ir(this));
    const r = e ? mt(e) : null;
    return r && ce(
      r.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(r && r._clone(this));
  }
  async _updateCurrentUser(e, r = !1) {
    if (!this._deleted)
      return e && ce(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), r || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return Tt(this.app) ? Promise.reject(ir(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(e) {
    return Tt(this.app) ? Promise.reject(ir(this)) : this.queue(async () => {
      await this.assertedPersistence.setPersistence(or(e));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
    const r = this._getPasswordPolicyInternal();
    return r.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : r.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await Tw(this), r = new Rw(e);
    this.tenantId === null ? this._projectPasswordPolicy = r : this._tenantPasswordPolicies[this.tenantId] = r;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new Zs("auth", "Firebase", e());
  }
  onAuthStateChanged(e, r, n) {
    return this.registerStateListener(this.authStateSubscription, e, r, n);
  }
  beforeAuthStateChanged(e, r) {
    return this.beforeStateQueue.pushCallback(e, r);
  }
  onIdTokenChanged(e, r, n) {
    return this.registerStateListener(this.idTokenSubscription, e, r, n);
  }
  authStateReady() {
    return new Promise((e, r) => {
      if (this.currentUser)
        e();
      else {
        const n = this.onAuthStateChanged(() => {
          n(), e();
        }, r);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const r = await this.currentUser.getIdToken(), n = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token: e,
        idToken: r
      };
      this.tenantId != null && (n.tenantId = this.tenantId), await _w(this, n);
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
    };
  }
  async _setRedirectUser(e, r) {
    const n = await this.getOrInitRedirectPersistenceManager(r);
    return e === null ? n.removeCurrentUser() : n.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const r = e && or(e) || this._popupRedirectResolver;
      ce(
        r,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await Rn.create(
        this,
        [or(r._redirectPersistence)],
        "redirectUser"
        /* KeyName.REDIRECT_USER */
      ), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var r, n;
    return this._isInitialized && await this.queue(async () => {
    }), ((r = this._currentUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this._currentUser : ((n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId) === e ? this.redirectUser : null;
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, r;
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const n = (r = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && r !== void 0 ? r : null;
    this.lastNotifiedUid !== n && (this.lastNotifiedUid = n, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, r, n, s) {
    if (this._deleted)
      return () => {
      };
    const o = typeof r == "function" ? r : r.next.bind(r);
    let i = !1;
    const a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (ce(
      a,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), a.then(() => {
      i || o(this.currentUser);
    }), typeof r == "function") {
      const l = e.addObserver(r, n, s);
      return () => {
        i = !0, l();
      };
    } else {
      const l = e.addObserver(r);
      return () => {
        i = !0, l();
      };
    }
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(e) {
    this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return this.operations = this.operations.then(e, e), this.operations;
  }
  get assertedPersistence() {
    return ce(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = wf(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const r = {
      "X-Client-Version": this.clientVersion
    };
    this.app.options.appId && (r[
      "X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */
    ] = this.app.options.appId);
    const n = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
    n && (r[
      "X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */
    ] = n);
    const s = await this._getAppCheckToken();
    return s && (r[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = s), r;
  }
  async _getAppCheckToken() {
    var e;
    const r = await ((e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || e === void 0 ? void 0 : e.getToken());
    return r != null && r.error && sw(`Error while retrieving App Check token: ${r.error}`), r == null ? void 0 : r.token;
  }
}
function dr(t) {
  return mt(t);
}
class vu {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = Hy((r) => this.observer = r);
  }
  get next() {
    return ce(
      this.observer,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.observer.next.bind(this.observer);
  }
}
/**
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
 */
let Ci = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function jw(t) {
  Ci = t;
}
function xf(t) {
  return Ci.loadJS(t);
}
function Pw() {
  return Ci.recaptchaEnterpriseScript;
}
function Ow() {
  return Ci.gapiScript;
}
function Aw(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
const Dw = "recaptcha-enterprise", Mw = "NO_RECAPTCHA";
class Lw {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = Dw, this.auth = dr(e);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(e = "verify", r = !1) {
    async function n(o) {
      if (!r) {
        if (o.tenantId == null && o._agentRecaptchaConfig != null)
          return o._agentRecaptchaConfig.siteKey;
        if (o.tenantId != null && o._tenantRecaptchaConfigs[o.tenantId] !== void 0)
          return o._tenantRecaptchaConfigs[o.tenantId].siteKey;
      }
      return new Promise(async (i, a) => {
        hw(o, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((l) => {
          if (l.recaptchaKey === void 0)
            a(new Error("recaptcha Enterprise site key undefined"));
          else {
            const c = new pw(l);
            return o.tenantId == null ? o._agentRecaptchaConfig = c : o._tenantRecaptchaConfigs[o.tenantId] = c, i(c.siteKey);
          }
        }).catch((l) => {
          a(l);
        });
      });
    }
    function s(o, i, a) {
      const l = window.grecaptcha;
      fu(l) ? l.enterprise.ready(() => {
        l.enterprise.execute(o, { action: e }).then((c) => {
          i(c);
        }).catch(() => {
          i(Mw);
        });
      }) : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((o, i) => {
      n(this.auth).then((a) => {
        if (!r && fu(window.grecaptcha))
          s(a, o, i);
        else {
          if (typeof window > "u") {
            i(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let l = Pw();
          l.length !== 0 && (l += a), xf(l).then(() => {
            s(a, o, i);
          }).catch((c) => {
            i(c);
          });
        }
      }).catch((a) => {
        i(a);
      });
    });
  }
}
async function yu(t, e, r, n = !1) {
  const s = new Lw(t);
  let o;
  try {
    o = await s.verify(r);
  } catch {
    o = await s.verify(r, !0);
  }
  const i = Object.assign({}, e);
  return n ? Object.assign(i, { captchaResp: o }) : Object.assign(i, { captchaResponse: o }), Object.assign(i, {
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }), Object.assign(i, {
    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), i;
}
async function qo(t, e, r, n) {
  var s;
  if (!((s = t._getRecaptchaConfig()) === null || s === void 0) && s.isProviderEnabled(
    "EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */
  )) {
    const o = await yu(
      t,
      e,
      r,
      r === "getOobCode"
      /* RecaptchaActionName.GET_OOB_CODE */
    );
    return n(t, o);
  } else
    return n(t, e).catch(async (o) => {
      if (o.code === "auth/missing-recaptcha-token") {
        console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
        const i = await yu(
          t,
          e,
          r,
          r === "getOobCode"
          /* RecaptchaActionName.GET_OOB_CODE */
        );
        return n(t, i);
      } else
        return Promise.reject(o);
    });
}
/**
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
 */
function Fw(t, e) {
  const r = ef(t, "auth");
  if (r.isInitialized()) {
    const s = r.getImmediate(), o = r.getOptions();
    if (Wo(o, e ?? {}))
      return s;
    _t(
      s,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return r.initialize({ options: e });
}
function Uw(t, e) {
  const r = (e == null ? void 0 : e.persistence) || [], n = (Array.isArray(r) ? r : [r]).map(or);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(n, e == null ? void 0 : e.popupRedirectResolver);
}
function Vw(t, e, r) {
  const n = dr(t);
  ce(
    n._canInitEmulator,
    n,
    "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
  ), ce(
    /^https?:\/\//.test(e),
    n,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const s = !1, o = _f(e), { host: i, port: a } = $w(e), l = a === null ? "" : `:${a}`;
  n.config.emulator = { url: `${o}//${i}${l}/` }, n.settings.appVerificationDisabledForTesting = !0, n.emulatorConfig = Object.freeze({
    host: i,
    port: a,
    protocol: o.replace(":", ""),
    options: Object.freeze({ disableWarnings: s })
  }), zw();
}
function _f(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function $w(t) {
  const e = _f(t), r = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!r)
    return { host: "", port: null };
  const n = r[2].split("@").pop() || "", s = /^(\[[^\]]+\])(:|$)/.exec(n);
  if (s) {
    const o = s[1];
    return { host: o, port: bu(n.substr(o.length + 1)) };
  } else {
    const [o, i] = n.split(":");
    return { host: o, port: bu(i) };
  }
}
function bu(t) {
  if (!t)
    return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function zw() {
  function t() {
    const e = document.createElement("p"), r = e.style;
    e.innerText = "Running in emulator mode. Do not use with production credentials.", r.position = "fixed", r.width = "100%", r.backgroundColor = "#ffffff", r.border = ".1em solid #000000", r.color = "#b50000", r.bottom = "0px", r.left = "0px", r.margin = "0px", r.zIndex = "10000", r.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
  }
  typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", t) : t());
}
/**
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
 */
class Pl {
  /** @internal */
  constructor(e, r) {
    this.providerId = e, this.signInMethod = r;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return nr("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return nr("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, r) {
    return nr("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return nr("not implemented");
  }
}
/**
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
 */
async function Bw(t, e) {
  return Nt(t, "POST", "/v1/accounts:resetPassword", Ot(t, e));
}
async function Ww(t, e) {
  return Nt(t, "POST", "/v1/accounts:update", e);
}
async function Hw(t, e) {
  return Nt(t, "POST", "/v1/accounts:signUp", e);
}
async function Zw(t, e) {
  return Nt(t, "POST", "/v1/accounts:update", Ot(t, e));
}
/**
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
 */
async function Kw(t, e) {
  return Ys(t, "POST", "/v1/accounts:signInWithPassword", Ot(t, e));
}
async function Ef(t, e) {
  return Nt(t, "POST", "/v1/accounts:sendOobCode", Ot(t, e));
}
async function qw(t, e) {
  return Ef(t, e);
}
async function Gw(t, e) {
  return Ef(t, e);
}
/**
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
 */
async function Yw(t, e) {
  return Ys(t, "POST", "/v1/accounts:signInWithEmailLink", Ot(t, e));
}
async function Xw(t, e) {
  return Ys(t, "POST", "/v1/accounts:signInWithEmailLink", Ot(t, e));
}
/**
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
 */
class ks extends Pl {
  /** @internal */
  constructor(e, r, n, s = null) {
    super("password", n), this._email = e, this._password = r, this._tenantId = s;
  }
  /** @internal */
  static _fromEmailAndPassword(e, r) {
    return new ks(
      e,
      r,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, r, n = null) {
    return new ks(e, r, "emailLink", n);
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const r = typeof e == "string" ? JSON.parse(e) : e;
    if (r != null && r.email && (r != null && r.password)) {
      if (r.signInMethod === "password")
        return this._fromEmailAndPassword(r.email, r.password);
      if (r.signInMethod === "emailLink")
        return this._fromEmailAndCode(r.email, r.password, r.tenantId);
    }
    return null;
  }
  /** @internal */
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return qo(e, r, "signInWithPassword", Kw);
      case "emailLink":
        return Yw(e, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _t(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  async _linkToIdToken(e, r) {
    switch (this.signInMethod) {
      case "password":
        const n = {
          idToken: r,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return qo(e, n, "signUpPassword", Hw);
      case "emailLink":
        return Xw(e, {
          idToken: r,
          email: this._email,
          oobCode: this._password
        });
      default:
        _t(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
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
 */
async function In(t, e) {
  return Ys(t, "POST", "/v1/accounts:signInWithIdp", Ot(t, e));
}
/**
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
 */
const Jw = "http://localhost";
class nn extends Pl {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const r = new nn(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (r.idToken = e.idToken), e.accessToken && (r.accessToken = e.accessToken), e.nonce && !e.pendingToken && (r.nonce = e.nonce), e.pendingToken && (r.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (r.accessToken = e.oauthToken, r.secret = e.oauthTokenSecret) : _t(
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), r;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const r = typeof e == "string" ? JSON.parse(e) : e, { providerId: n, signInMethod: s } = r, o = Cl(r, ["providerId", "signInMethod"]);
    if (!n || !s)
      return null;
    const i = new nn(n, s);
    return i.idToken = o.idToken || void 0, i.accessToken = o.accessToken || void 0, i.secret = o.secret, i.nonce = o.nonce, i.pendingToken = o.pendingToken || null, i;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const r = this.buildRequest();
    return In(e, r);
  }
  /** @internal */
  _linkToIdToken(e, r) {
    const n = this.buildRequest();
    return n.idToken = r, In(e, n);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const r = this.buildRequest();
    return r.autoCreate = !1, In(e, r);
  }
  buildRequest() {
    const e = {
      requestUri: Jw,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken), this.accessToken && (r.access_token = this.accessToken), this.secret && (r.oauth_token_secret = this.secret), r.providerId = this.providerId, this.nonce && !this.pendingToken && (r.nonce = this.nonce), e.postBody = Ks(r);
    }
    return e;
  }
}
/**
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
 */
function Qw(t) {
  switch (t) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function ex(t) {
  const e = us(ds(t)).link, r = e ? us(ds(e)).deep_link_id : null, n = us(ds(t)).deep_link_id;
  return (n ? us(ds(n)).link : null) || n || r || e || t;
}
class Ol {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    var r, n, s, o, i, a;
    const l = us(ds(e)), c = (r = l.apiKey) !== null && r !== void 0 ? r : null, d = (n = l.oobCode) !== null && n !== void 0 ? n : null, p = Qw((s = l.mode) !== null && s !== void 0 ? s : null);
    ce(
      c && d && p,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.apiKey = c, this.operation = p, this.code = d, this.continueUrl = (o = l.continueUrl) !== null && o !== void 0 ? o : null, this.languageCode = (i = l.languageCode) !== null && i !== void 0 ? i : null, this.tenantId = (a = l.tenantId) !== null && a !== void 0 ? a : null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */
  static parseLink(e) {
    const r = ex(e);
    try {
      return new Ol(r);
    } catch {
      return null;
    }
  }
}
/**
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
 */
class Wn {
  constructor() {
    this.providerId = Wn.PROVIDER_ID;
  }
  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */
  static credential(e, r) {
    return ks._fromEmailAndPassword(e, r);
  }
  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The {@link Auth} instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  static credentialWithLink(e, r) {
    const n = Ol.parseLink(r);
    return ce(
      n,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), ks._fromEmailAndCode(e, n.code, n.tenantId);
  }
}
Wn.PROVIDER_ID = "password";
Wn.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Wn.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
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
 */
class Al {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(e) {
    this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(e) {
    return this.customParameters = e, this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
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
 */
class Xs extends Al {
  constructor() {
    super(...arguments), this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
}
/**
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
 */
class _r extends Xs {
  constructor() {
    super(
      "facebook.com"
      /* ProviderId.FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(e) {
    return nn._fromParams({
      providerId: _r.PROVIDER_ID,
      signInMethod: _r.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return _r.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return _r.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return _r.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
_r.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
_r.PROVIDER_ID = "facebook.com";
/**
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
 */
class rr extends Xs {
  constructor() {
    super(
      "google.com"
      /* ProviderId.GOOGLE */
    ), this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(e, r) {
    return nn._fromParams({
      providerId: rr.PROVIDER_ID,
      signInMethod: rr.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: r
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return rr.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return rr.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: r, oauthAccessToken: n } = e;
    if (!r && !n)
      return null;
    try {
      return rr.credential(r, n);
    } catch {
      return null;
    }
  }
}
rr.GOOGLE_SIGN_IN_METHOD = "google.com";
rr.PROVIDER_ID = "google.com";
/**
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
 */
class Er extends Xs {
  constructor() {
    super(
      "github.com"
      /* ProviderId.GITHUB */
    );
  }
  /**
   * Creates a credential for Github.
   *
   * @param accessToken - Github access token.
   */
  static credential(e) {
    return nn._fromParams({
      providerId: Er.PROVIDER_ID,
      signInMethod: Er.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Er.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Er.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Er.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Er.GITHUB_SIGN_IN_METHOD = "github.com";
Er.PROVIDER_ID = "github.com";
/**
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
 */
class Nr extends Xs {
  constructor() {
    super(
      "twitter.com"
      /* ProviderId.TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(e, r) {
    return nn._fromParams({
      providerId: Nr.PROVIDER_ID,
      signInMethod: Nr.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: r
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Nr.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Nr.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: r, oauthTokenSecret: n } = e;
    if (!r || !n)
      return null;
    try {
      return Nr.credential(r, n);
    } catch {
      return null;
    }
  }
}
Nr.TWITTER_SIGN_IN_METHOD = "twitter.com";
Nr.PROVIDER_ID = "twitter.com";
/**
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
 */
async function tx(t, e) {
  return Ys(t, "POST", "/v1/accounts:signUp", Ot(t, e));
}
/**
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
 */
class sn {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, r, n, s = !1) {
    const o = await sr._fromIdTokenResponse(e, n, s), i = wu(n);
    return new sn({
      user: o,
      providerId: i,
      _tokenResponse: n,
      operationType: r
    });
  }
  static async _forOperation(e, r, n) {
    await e._updateTokensIfNecessary(
      n,
      /* reload */
      !0
    );
    const s = wu(n);
    return new sn({
      user: e,
      providerId: s,
      _tokenResponse: n,
      operationType: r
    });
  }
}
function wu(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
/**
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
 */
class Go extends Vr {
  constructor(e, r, n, s) {
    var o;
    super(r.code, r.message), this.operationType = n, this.user = s, Object.setPrototypeOf(this, Go.prototype), this.customData = {
      appName: e.name,
      tenantId: (o = e.tenantId) !== null && o !== void 0 ? o : void 0,
      _serverResponse: r.customData._serverResponse,
      operationType: n
    };
  }
  static _fromErrorAndOperation(e, r, n, s) {
    return new Go(e, r, n, s);
  }
}
function Nf(t, e, r, n) {
  return (e === "reauthenticate" ? r._getReauthenticationResolver(t) : r._getIdTokenResponse(t)).catch((o) => {
    throw o.code === "auth/multi-factor-auth-required" ? Go._fromErrorAndOperation(t, o, e, n) : o;
  });
}
async function rx(t, e, r = !1) {
  const n = await Ln(t, e._linkToIdToken(t.auth, await t.getIdToken()), r);
  return sn._forOperation(t, "link", n);
}
/**
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
 */
async function nx(t, e, r = !1) {
  const { auth: n } = t;
  if (Tt(n.app))
    return Promise.reject(ir(n));
  const s = "reauthenticate";
  try {
    const o = await Ln(t, Nf(n, s, e, t), r);
    ce(
      o.idToken,
      n,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const i = Il(o.idToken);
    ce(
      i,
      n,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: a } = i;
    return ce(
      t.uid === a,
      n,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), sn._forOperation(t, s, o);
  } catch (o) {
    throw (o == null ? void 0 : o.code) === "auth/user-not-found" && _t(
      n,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), o;
  }
}
/**
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
 */
async function kf(t, e, r = !1) {
  if (Tt(t.app))
    return Promise.reject(ir(t));
  const n = "signIn", s = await Nf(t, n, e), o = await sn._fromIdTokenResponse(t, n, s);
  return r || await t._updateCurrentUser(o.user), o;
}
async function sx(t, e) {
  return kf(dr(t), e);
}
/**
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
 */
function Cf(t, e, r) {
  var n;
  ce(
    ((n = r.url) === null || n === void 0 ? void 0 : n.length) > 0,
    t,
    "invalid-continue-uri"
    /* AuthErrorCode.INVALID_CONTINUE_URI */
  ), ce(
    typeof r.dynamicLinkDomain > "u" || r.dynamicLinkDomain.length > 0,
    t,
    "invalid-dynamic-link-domain"
    /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */
  ), e.continueUrl = r.url, e.dynamicLinkDomain = r.dynamicLinkDomain, e.canHandleCodeInApp = r.handleCodeInApp, r.iOS && (ce(
    r.iOS.bundleId.length > 0,
    t,
    "missing-ios-bundle-id"
    /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */
  ), e.iOSBundleId = r.iOS.bundleId), r.android && (ce(
    r.android.packageName.length > 0,
    t,
    "missing-android-pkg-name"
    /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */
  ), e.androidInstallApp = r.android.installApp, e.androidMinimumVersionCode = r.android.minimumVersion, e.androidPackageName = r.android.packageName);
}
/**
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
 */
async function Dl(t) {
  const e = dr(t);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy();
}
async function ox(t, e, r) {
  const n = dr(t), s = {
    requestType: "PASSWORD_RESET",
    email: e,
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  };
  r && Cf(n, s, r), await qo(n, s, "getOobCode", Gw);
}
async function ix(t, e, r) {
  await Bw(mt(t), {
    oobCode: e,
    newPassword: r
  }).catch(async (n) => {
    throw n.code === "auth/password-does-not-meet-requirements" && Dl(t), n;
  });
}
async function ax(t, e) {
  await Zw(mt(t), { oobCode: e });
}
async function xu(t, e, r) {
  if (Tt(t.app))
    return Promise.reject(ir(t));
  const n = dr(t), i = await qo(n, {
    returnSecureToken: !0,
    email: e,
    password: r,
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }, "signUpPassword", tx).catch((l) => {
    throw l.code === "auth/password-does-not-meet-requirements" && Dl(t), l;
  }), a = await sn._fromIdTokenResponse(n, "signIn", i);
  return await n._updateCurrentUser(a.user), a;
}
function lx(t, e, r) {
  return Tt(t.app) ? Promise.reject(ir(t)) : sx(mt(t), Wn.credential(e, r)).catch(async (n) => {
    throw n.code === "auth/password-does-not-meet-requirements" && Dl(t), n;
  });
}
async function _u(t, e) {
  const r = mt(t), s = {
    requestType: "VERIFY_EMAIL",
    idToken: await t.getIdToken()
  };
  e && Cf(r.auth, s, e);
  const { email: o } = await qw(r.auth, s);
  o !== t.email && await t.reload();
}
function cx(t, e) {
  return ux(mt(t), null, e);
}
async function ux(t, e, r) {
  const { auth: n } = t, o = {
    idToken: await t.getIdToken(),
    returnSecureToken: !0
  };
  r && (o.password = r);
  const i = await Ln(t, Ww(n, o));
  await t._updateTokensIfNecessary(
    i,
    /* reload */
    !0
  );
}
function dx(t, e, r, n) {
  return mt(t).onIdTokenChanged(e, r, n);
}
function fx(t, e, r) {
  return mt(t).beforeAuthStateChanged(e, r);
}
function px(t, e, r, n) {
  return mt(t).onAuthStateChanged(e, r, n);
}
function hx(t) {
  return mt(t).signOut();
}
const Yo = "__sak";
/**
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
 */
class Tf {
  constructor(e, r) {
    this.storageRetriever = e, this.type = r;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(Yo, "1"), this.storage.removeItem(Yo), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, r) {
    return this.storage.setItem(e, JSON.stringify(r)), Promise.resolve();
  }
  _get(e) {
    const r = this.storage.getItem(e);
    return Promise.resolve(r ? JSON.parse(r) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
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
 */
function mx() {
  const t = tt();
  return jl(t) || ki(t);
}
const gx = 1e3, vx = 10;
class Sf extends Tf {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, r) => this.onStorageEvent(e, r), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = mx() && kw(), this.fallbackToPolling = bf(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const r of Object.keys(this.listeners)) {
      const n = this.storage.getItem(r), s = this.localCache[r];
      n !== s && e(r, s, n);
    }
  }
  onStorageEvent(e, r = !1) {
    if (!e.key) {
      this.forAllChangedKeys((i, a, l) => {
        this.notifyListeners(i, l);
      });
      return;
    }
    const n = e.key;
    if (r ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
      const i = this.storage.getItem(n);
      if (e.newValue !== i)
        e.newValue !== null ? this.storage.setItem(n, e.newValue) : this.storage.removeItem(n);
      else if (this.localCache[n] === e.newValue && !r)
        return;
    }
    const s = () => {
      const i = this.storage.getItem(n);
      !r && this.localCache[n] === i || this.notifyListeners(n, i);
    }, o = this.storage.getItem(n);
    Nw() && o !== e.newValue && e.newValue !== e.oldValue ? setTimeout(s, vx) : s();
  }
  notifyListeners(e, r) {
    this.localCache[e] = r;
    const n = this.listeners[e];
    if (n)
      for (const s of Array.from(n))
        s(r && JSON.parse(r));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, r, n) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: r,
            newValue: n
          }),
          /* poll */
          !0
        );
      });
    }, gx);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, r) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(r);
  }
  _removeListener(e, r) {
    this.listeners[e] && (this.listeners[e].delete(r), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(e, r) {
    await super._set(e, r), this.localCache[e] = JSON.stringify(r);
  }
  async _get(e) {
    const r = await super._get(e);
    return this.localCache[e] = JSON.stringify(r), r;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
Sf.type = "LOCAL";
const yx = Sf;
/**
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
 */
class Rf extends Tf {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(e, r) {
  }
  _removeListener(e, r) {
  }
}
Rf.type = "SESSION";
const If = Rf;
/**
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
 */
function bx(t) {
  return Promise.all(t.map(async (e) => {
    try {
      return {
        fulfilled: !0,
        value: await e
      };
    } catch (r) {
      return {
        fulfilled: !1,
        reason: r
      };
    }
  }));
}
/**
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
 */
class Ti {
  constructor(e) {
    this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(e) {
    const r = this.receivers.find((s) => s.isListeningto(e));
    if (r)
      return r;
    const n = new Ti(e);
    return this.receivers.push(n), n;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  async handleEvent(e) {
    const r = e, { eventId: n, eventType: s, data: o } = r.data, i = this.handlersMap[s];
    if (!(i != null && i.size))
      return;
    r.ports[0].postMessage({
      status: "ack",
      eventId: n,
      eventType: s
    });
    const a = Array.from(i).map(async (c) => c(r.origin, o)), l = await bx(a);
    r.ports[0].postMessage({
      status: "done",
      eventId: n,
      eventType: s,
      response: l
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(e, r) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(r);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, r) {
    this.handlersMap[e] && r && this.handlersMap[e].delete(r), (!r || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Ti.receivers = [];
/**
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
 */
function Ml(t = "", e = 10) {
  let r = "";
  for (let n = 0; n < e; n++)
    r += Math.floor(Math.random() * 10);
  return t + r;
}
/**
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
 */
class wx {
  constructor(e) {
    this.target = e, this.handlers = /* @__PURE__ */ new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(e) {
    e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(e, r, n = 50) {
    const s = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!s)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let o, i;
    return new Promise((a, l) => {
      const c = Ml("", 20);
      s.port1.start();
      const d = setTimeout(() => {
        l(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, n);
      i = {
        messageChannel: s,
        onMessage(p) {
          const h = p;
          if (h.data.eventId === c)
            switch (h.data.status) {
              case "ack":
                clearTimeout(d), o = setTimeout(
                  () => {
                    l(new Error(
                      "timeout"
                      /* _MessageError.TIMEOUT */
                    ));
                  },
                  3e3
                  /* _TimeoutDuration.COMPLETION */
                );
                break;
              case "done":
                clearTimeout(o), a(h.data.response);
                break;
              default:
                clearTimeout(d), clearTimeout(o), l(new Error(
                  "invalid_response"
                  /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
        }
      }, this.handlers.add(i), s.port1.addEventListener("message", i.onMessage), this.target.postMessage({
        eventType: e,
        eventId: c,
        data: r
      }, [s.port2]);
    }).finally(() => {
      i && this.removeMessageHandler(i);
    });
  }
}
/**
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
 */
function $t() {
  return window;
}
function xx(t) {
  $t().location.href = t;
}
/**
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
 */
function jf() {
  return typeof $t().WorkerGlobalScope < "u" && typeof $t().importScripts == "function";
}
async function _x() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Ex() {
  var t;
  return ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0 ? void 0 : t.controller) || null;
}
function Nx() {
  return jf() ? self : null;
}
/**
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
 */
const Pf = "firebaseLocalStorageDb", kx = 1, Xo = "firebaseLocalStorage", Of = "fbase_key";
class Js {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, r) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        r(this.request.error);
      });
    });
  }
}
function Si(t, e) {
  return t.transaction([Xo], e ? "readwrite" : "readonly").objectStore(Xo);
}
function Cx() {
  const t = indexedDB.deleteDatabase(Pf);
  return new Js(t).toPromise();
}
function qa() {
  const t = indexedDB.open(Pf, kx);
  return new Promise((e, r) => {
    t.addEventListener("error", () => {
      r(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const n = t.result;
      try {
        n.createObjectStore(Xo, { keyPath: Of });
      } catch (s) {
        r(s);
      }
    }), t.addEventListener("success", async () => {
      const n = t.result;
      n.objectStoreNames.contains(Xo) ? e(n) : (n.close(), await Cx(), e(await qa()));
    });
  });
}
async function Eu(t, e, r) {
  const n = Si(t, !0).put({
    [Of]: e,
    value: r
  });
  return new Js(n).toPromise();
}
async function Tx(t, e) {
  const r = Si(t, !1).get(e), n = await new Js(r).toPromise();
  return n === void 0 ? null : n.value;
}
function Nu(t, e) {
  const r = Si(t, !0).delete(e);
  return new Js(r).toPromise();
}
const Sx = 800, Rx = 3;
class Af {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await qa(), this.db);
  }
  async _withRetries(e) {
    let r = 0;
    for (; ; )
      try {
        const n = await this._openDb();
        return await e(n);
      } catch (n) {
        if (r++ > Rx)
          throw n;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return jf() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Ti._getInstance(Nx()), this.receiver._subscribe("keyChanged", async (e, r) => ({
      keyProcessed: (await this._poll()).includes(r.key)
    })), this.receiver._subscribe("ping", async (e, r) => [
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ]);
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    var e, r;
    if (this.activeServiceWorker = await _x(), !this.activeServiceWorker)
      return;
    this.sender = new wx(this.activeServiceWorker);
    const n = await this.sender._send(
      "ping",
      {},
      800
      /* _TimeoutDuration.LONG_ACK */
    );
    n && !((e = n[0]) === null || e === void 0) && e.fulfilled && !((r = n[0]) === null || r === void 0) && r.value.includes(
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ) && (this.serviceWorkerReceiverAvailable = !0);
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || Ex() !== this.activeServiceWorker))
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          // Use long timeout if receiver has previously responded to a ping from us.
          this.serviceWorkerReceiverAvailable ? 800 : 50
          /* _TimeoutDuration.ACK */
        );
      } catch {
      }
  }
  async _isAvailable() {
    try {
      if (!indexedDB)
        return !1;
      const e = await qa();
      return await Eu(e, Yo, "1"), await Nu(e, Yo), !0;
    } catch {
    }
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, r) {
    return this._withPendingWrite(async () => (await this._withRetries((n) => Eu(n, e, r)), this.localCache[e] = r, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const r = await this._withRetries((n) => Tx(n, e));
    return this.localCache[e] = r, r;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => Nu(r, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((s) => {
      const o = Si(s, !1).getAll();
      return new Js(o).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const r = [], n = /* @__PURE__ */ new Set();
    if (e.length !== 0)
      for (const { fbase_key: s, value: o } of e)
        n.add(s), JSON.stringify(this.localCache[s]) !== JSON.stringify(o) && (this.notifyListeners(s, o), r.push(s));
    for (const s of Object.keys(this.localCache))
      this.localCache[s] && !n.has(s) && (this.notifyListeners(s, null), r.push(s));
    return r;
  }
  notifyListeners(e, r) {
    this.localCache[e] = r;
    const n = this.listeners[e];
    if (n)
      for (const s of Array.from(n))
        s(r);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), Sx);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, r) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(r);
  }
  _removeListener(e, r) {
    this.listeners[e] && (this.listeners[e].delete(r), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Af.type = "LOCAL";
const Ix = Af;
new Gs(3e4, 6e4);
/**
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
 */
function Df(t, e) {
  return e ? or(e) : (ce(
    t._popupRedirectResolver,
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  ), t._popupRedirectResolver);
}
/**
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
 */
class Ll extends Pl {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return In(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, r) {
    return In(e, this._buildIdpRequest(r));
  }
  _getReauthenticationResolver(e) {
    return In(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const r = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (r.idToken = e), r;
  }
}
function jx(t) {
  return kf(t.auth, new Ll(t), t.bypassAuthState);
}
function Px(t) {
  const { auth: e, user: r } = t;
  return ce(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), nx(r, new Ll(t), t.bypassAuthState);
}
async function Ox(t) {
  const { auth: e, user: r } = t;
  return ce(
    r,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), rx(r, new Ll(t), t.bypassAuthState);
}
/**
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
 */
class Mf {
  constructor(e, r, n, s, o = !1) {
    this.auth = e, this.resolver = n, this.user = s, this.bypassAuthState = o, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(r) ? r : [r];
  }
  execute() {
    return new Promise(async (e, r) => {
      this.pendingPromise = { resolve: e, reject: r };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (n) {
        this.reject(n);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: r, sessionId: n, postBody: s, tenantId: o, error: i, type: a } = e;
    if (i) {
      this.reject(i);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: r,
      sessionId: n,
      tenantId: o || void 0,
      postBody: s || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(a)(l));
    } catch (c) {
      this.reject(c);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return jx;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Ox;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Px;
      default:
        _t(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    ar(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    ar(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
  }
}
/**
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
 */
const Ax = new Gs(2e3, 1e4);
async function Dx(t, e, r) {
  if (Tt(t.app))
    return Promise.reject(Rt(
      t,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    ));
  const n = dr(t);
  ow(t, e, Al);
  const s = Df(n, r);
  return new Gr(n, "signInViaPopup", e, s).executeNotNull();
}
class Gr extends Mf {
  constructor(e, r, n, s, o) {
    super(e, r, s, o), this.provider = n, this.authWindow = null, this.pollId = null, Gr.currentPopupAction && Gr.currentPopupAction.cancel(), Gr.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return ce(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    ar(this.filter.length === 1, "Popup operations only handle one event");
    const e = Ml();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((r) => {
      this.reject(r);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (r) => {
      r || this.reject(Rt(
        this.auth,
        "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
      ));
    }), this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(Rt(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Gr.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var r, n;
      if (!((n = (r = this.authWindow) === null || r === void 0 ? void 0 : r.window) === null || n === void 0) && n.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(Rt(
              this.auth,
              "popup-closed-by-user"
              /* AuthErrorCode.POPUP_CLOSED_BY_USER */
            ));
          },
          8e3
          /* _Timeout.AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(e, Ax.get());
    };
    e();
  }
}
Gr.currentPopupAction = null;
/**
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
 */
const Mx = "pendingRedirect", Ao = /* @__PURE__ */ new Map();
class Lx extends Mf {
  constructor(e, r, n = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], r, void 0, n), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = Ao.get(this.auth._key());
    if (!e) {
      try {
        const n = await Fx(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(n);
      } catch (r) {
        e = () => Promise.reject(r);
      }
      Ao.set(this.auth._key(), e);
    }
    return this.bypassAuthState || Ao.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect")
      return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const r = await this.auth._redirectUserForId(e.eventId);
      if (r)
        return this.user = r, super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function Fx(t, e) {
  const r = $x(e), n = Vx(t);
  if (!await n._isAvailable())
    return !1;
  const s = await n._get(r) === "true";
  return await n._remove(r), s;
}
function Ux(t, e) {
  Ao.set(t._key(), e);
}
function Vx(t) {
  return or(t._redirectPersistence);
}
function $x(t) {
  return Oo(Mx, t.config.apiKey, t.name);
}
async function zx(t, e, r = !1) {
  if (Tt(t.app))
    return Promise.reject(ir(t));
  const n = dr(t), s = Df(n, e), i = await new Lx(n, s, r).execute();
  return i && !r && (delete i.user._redirectEventId, await n._persistUserIfCurrent(i.user), await n._setRedirectUser(null, e)), i;
}
/**
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
 */
const Bx = 10 * 60 * 1e3;
class Wx {
  constructor(e) {
    this.auth = e, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(e) {
    this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e))
      return !1;
    let r = !1;
    return this.consumers.forEach((n) => {
      this.isEventForConsumer(e, n) && (r = !0, this.sendToConsumer(e, n), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !Hx(e) || (this.hasHandledPotentialRedirect = !0, r || (this.queuedRedirectEvent = e, r = !0)), r;
  }
  sendToConsumer(e, r) {
    var n;
    if (e.error && !Lf(e)) {
      const s = ((n = e.error.code) === null || n === void 0 ? void 0 : n.split("auth/")[1]) || "internal-error";
      r.onError(Rt(this.auth, s));
    } else
      r.onAuthEvent(e);
  }
  isEventForConsumer(e, r) {
    const n = r.eventId === null || !!e.eventId && e.eventId === r.eventId;
    return r.filter.includes(e.type) && n;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= Bx && this.cachedEventUids.clear(), this.cachedEventUids.has(ku(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(ku(e)), this.lastProcessedEventTime = Date.now();
  }
}
function ku(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function Lf({ type: t, error: e }) {
  return t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function Hx(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Lf(t);
    default:
      return !1;
  }
}
/**
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
 */
async function Zx(t, e = {}) {
  return Nt(t, "GET", "/v1/projects", e);
}
/**
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
 */
const Kx = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, qx = /^https?/;
async function Gx(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await Zx(t);
  for (const r of e)
    try {
      if (Yx(r))
        return;
    } catch {
    }
  _t(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function Yx(t) {
  const e = Za(), { protocol: r, hostname: n } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const i = new URL(t);
    return i.hostname === "" && n === "" ? r === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : r === "chrome-extension:" && i.hostname === n;
  }
  if (!qx.test(r))
    return !1;
  if (Kx.test(t))
    return n === t;
  const s = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + s + "|" + s + ")$", "i").test(n);
}
/**
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
 */
const Xx = new Gs(3e4, 6e4);
function Cu() {
  const t = $t().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let r = 0; r < t.CP.length; r++)
          t.CP[r] = null;
  }
}
function Jx(t) {
  return new Promise((e, r) => {
    var n, s, o;
    function i() {
      Cu(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          Cu(), r(Rt(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: Xx.get()
      });
    }
    if (!((s = (n = $t().gapi) === null || n === void 0 ? void 0 : n.iframes) === null || s === void 0) && s.Iframe)
      e(gapi.iframes.getContext());
    else if (!((o = $t().gapi) === null || o === void 0) && o.load)
      i();
    else {
      const a = Aw("iframefcb");
      return $t()[a] = () => {
        gapi.load ? i() : r(Rt(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, xf(`${Ow()}?onload=${a}`).catch((l) => r(l));
    }
  }).catch((e) => {
    throw Do = null, e;
  });
}
let Do = null;
function Qx(t) {
  return Do = Do || Jx(t), Do;
}
/**
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
 */
const e0 = new Gs(5e3, 15e3), t0 = "__/auth/iframe", r0 = "emulator/auth/iframe", n0 = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, s0 = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function o0(t) {
  const e = t.config;
  ce(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const r = e.emulator ? Rl(e, r0) : `https://${t.config.authDomain}/${t0}`, n = {
    apiKey: e.apiKey,
    appName: t.name,
    v: qs
  }, s = s0.get(t.config.apiHost);
  s && (n.eid = s);
  const o = t._getFrameworks();
  return o.length && (n.fw = o.join(",")), `${r}?${Ks(n).slice(1)}`;
}
async function i0(t) {
  const e = await Qx(t), r = $t().gapi;
  return ce(
    r,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: o0(t),
    messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: n0,
    dontclear: !0
  }, (n) => new Promise(async (s, o) => {
    await n.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const i = Rt(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), a = $t().setTimeout(() => {
      o(i);
    }, e0.get());
    function l() {
      $t().clearTimeout(a), s(n);
    }
    n.ping(l).then(l, () => {
      o(i);
    });
  }));
}
/**
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
 */
const a0 = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, l0 = 500, c0 = 600, u0 = "_blank", d0 = "http://localhost";
class Tu {
  constructor(e) {
    this.window = e, this.associatedEvent = null;
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {
      }
  }
}
function f0(t, e, r, n = l0, s = c0) {
  const o = Math.max((window.screen.availHeight - s) / 2, 0).toString(), i = Math.max((window.screen.availWidth - n) / 2, 0).toString();
  let a = "";
  const l = Object.assign(Object.assign({}, a0), {
    width: n.toString(),
    height: s.toString(),
    top: o,
    left: i
  }), c = tt().toLowerCase();
  r && (a = hf(c) ? u0 : r), pf(c) && (e = e || d0, l.scrollbars = "yes");
  const d = Object.entries(l).reduce((h, [v, y]) => `${h}${v}=${y},`, "");
  if (Ew(c) && a !== "_self")
    return p0(e || "", a), new Tu(null);
  const p = window.open(e || "", a, d);
  ce(
    p,
    t,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    p.focus();
  } catch {
  }
  return new Tu(p);
}
function p0(t, e) {
  const r = document.createElement("a");
  r.href = t, r.target = e;
  const n = document.createEvent("MouseEvent");
  n.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), r.dispatchEvent(n);
}
/**
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
 */
const h0 = "__/auth/handler", m0 = "emulator/auth/handler", g0 = encodeURIComponent("fac");
async function Su(t, e, r, n, s, o) {
  ce(
    t.config.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), ce(
    t.config.apiKey,
    t,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const i = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: r,
    redirectUrl: n,
    v: qs,
    eventId: s
  };
  if (e instanceof Al) {
    e.setDefaultLanguage(t.languageCode), i.providerId = e.providerId || "", Wy(e.getCustomParameters()) || (i.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, p] of Object.entries({}))
      i[d] = p;
  }
  if (e instanceof Xs) {
    const d = e.getScopes().filter((p) => p !== "");
    d.length > 0 && (i.scopes = d.join(","));
  }
  t.tenantId && (i.tid = t.tenantId);
  const a = i;
  for (const d of Object.keys(a))
    a[d] === void 0 && delete a[d];
  const l = await t._getAppCheckToken(), c = l ? `#${g0}=${encodeURIComponent(l)}` : "";
  return `${v0(t)}?${Ks(a).slice(1)}${c}`;
}
function v0({ config: t }) {
  return t.emulator ? Rl(t, m0) : `https://${t.authDomain}/${h0}`;
}
/**
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
 */
const va = "webStorageSupport";
class y0 {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = If, this._completeRedirectFn = zx, this._overrideRedirectResult = Ux;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, r, n, s) {
    var o;
    ar((o = this.eventManagers[e._key()]) === null || o === void 0 ? void 0 : o.manager, "_initialize() not called before _openPopup()");
    const i = await Su(e, r, n, Za(), s);
    return f0(e, i, Ml());
  }
  async _openRedirect(e, r, n, s) {
    await this._originValidation(e);
    const o = await Su(e, r, n, Za(), s);
    return xx(o), new Promise(() => {
    });
  }
  _initialize(e) {
    const r = e._key();
    if (this.eventManagers[r]) {
      const { manager: s, promise: o } = this.eventManagers[r];
      return s ? Promise.resolve(s) : (ar(o, "If manager is not set, promise should be"), o);
    }
    const n = this.initAndGetManager(e);
    return this.eventManagers[r] = { promise: n }, n.catch(() => {
      delete this.eventManagers[r];
    }), n;
  }
  async initAndGetManager(e) {
    const r = await i0(e), n = new Wx(e);
    return r.register("authEvent", (s) => (ce(
      s == null ? void 0 : s.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: n.onEvent(s.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: n }, this.iframes[e._key()] = r, n;
  }
  _isIframeWebStorageSupported(e, r) {
    this.iframes[e._key()].send(va, { type: va }, (s) => {
      var o;
      const i = (o = s == null ? void 0 : s[0]) === null || o === void 0 ? void 0 : o[va];
      i !== void 0 && r(!!i), _t(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const r = e._key();
    return this.originValidationPromises[r] || (this.originValidationPromises[r] = Gx(e)), this.originValidationPromises[r];
  }
  get _shouldInitProactively() {
    return bf() || jl() || ki();
  }
}
const b0 = y0;
var Ru = "@firebase/auth", Iu = "1.7.5";
/**
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
 */
class w0 {
  constructor(e) {
    this.auth = e, this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var e;
    return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null;
  }
  async getToken(e) {
    return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null;
  }
  addAuthTokenListener(e) {
    if (this.assertAuthConfigured(), this.internalListeners.has(e))
      return;
    const r = this.auth.onIdTokenChanged((n) => {
      e((n == null ? void 0 : n.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, r), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const r = this.internalListeners.get(e);
    r && (this.internalListeners.delete(e), r(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    ce(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
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
 */
function x0(t) {
  switch (t) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function _0(t) {
  Es(new Mn(
    "auth",
    (e, { options: r }) => {
      const n = e.getProvider("app").getImmediate(), s = e.getProvider("heartbeat"), o = e.getProvider("app-check-internal"), { apiKey: i, authDomain: a } = n.options;
      ce(i && !i.includes(":"), "invalid-api-key", { appName: n.name });
      const l = {
        apiKey: i,
        authDomain: a,
        clientPlatform: t,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: wf(t)
      }, c = new Iw(n, s, o, l);
      return Uw(c, r), c;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, r, n) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), Es(new Mn(
    "auth-internal",
    (e) => {
      const r = dr(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((n) => new w0(n))(r);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), Tn(Ru, Iu, x0(t)), Tn(Ru, Iu, "esm2017");
}
/**
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
 */
const E0 = 5 * 60, N0 = Yd("authIdTokenMaxAge") || E0;
let ju = null;
const k0 = (t) => async (e) => {
  const r = e && await e.getIdTokenResult(), n = r && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (n && n > N0)
    return;
  const s = r == null ? void 0 : r.token;
  ju !== s && (ju = s, await fetch(t, {
    method: s ? "POST" : "DELETE",
    headers: s ? {
      Authorization: `Bearer ${s}`
    } : {}
  }));
};
function C0(t = Hb()) {
  const e = ef(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const r = Fw(t, {
    popupRedirectResolver: b0,
    persistence: [
      Ix,
      yx,
      If
    ]
  }), n = Yd("authTokenSyncURL");
  if (n && typeof isSecureContext == "boolean" && isSecureContext) {
    const o = new URL(n, location.origin);
    if (location.origin === o.origin) {
      const i = k0(o.toString());
      fx(r, i, () => i(r.currentUser)), dx(r, (a) => i(a));
    }
  }
  const s = Oy("auth");
  return s && Vw(r, `http://${s}`), r;
}
function T0() {
  var t, e;
  return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document;
}
jw({
  loadJS(t) {
    return new Promise((e, r) => {
      const n = document.createElement("script");
      n.setAttribute("src", t), n.onload = e, n.onerror = (s) => {
        const o = Rt(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        o.customData = s, r(o);
      }, n.type = "text/javascript", n.charset = "UTF-8", T0().appendChild(n);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
_0(
  "Browser"
  /* ClientPlatform.BROWSER */
);
const S0 = (t) => {
  if (!t) return { app: null, auth: null, provider: null };
  const e = tf(t), r = C0(e);
  return { app: e, auth: r };
}, Fl = (t) => typeof t == "number" && !isNaN(t), gs = (t) => typeof t == "string", Ff = (t) => typeof t == "function", R0 = (t) => _s(t) || gs(t) || Ff(t) || Fl(t), Ft = /* @__PURE__ */ new Map();
let Ga = [];
const Pu = /* @__PURE__ */ new Set(), Uf = () => Ft.size > 0;
function I0(t, e) {
  var r;
  if (e) return !((r = Ft.get(e)) == null || !r.isToastActive(t));
  let n = !1;
  return Ft.forEach((s) => {
    s.isToastActive(t) && (n = !0);
  }), n;
}
function j0(t, e) {
  R0(t) && (Uf() || Ga.push({ content: t, options: e }), Ft.forEach((r) => {
    r.buildToast(t, e);
  }));
}
function Ou(t, e) {
  Ft.forEach((r) => {
    e != null && e != null && e.containerId ? (e == null ? void 0 : e.containerId) === r.id && r.toggle(t, e == null ? void 0 : e.id) : r.toggle(t, e == null ? void 0 : e.id);
  });
}
let P0 = 1;
const Vf = () => "" + P0++;
function O0(t) {
  return t && (gs(t.toastId) || Fl(t.toastId)) ? t.toastId : Vf();
}
function vs(t, e) {
  return j0(t, e), e.toastId;
}
function Jo(t, e) {
  return { ...e, type: e && e.type || t, toastId: O0(e) };
}
function yo(t) {
  return (e, r) => vs(e, Jo(t, r));
}
function Ae(t, e) {
  return vs(t, Jo("default", e));
}
Ae.loading = (t, e) => vs(t, Jo("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...e })), Ae.promise = function(t, e, r) {
  let n, { pending: s, error: o, success: i } = e;
  s && (n = gs(s) ? Ae.loading(s, r) : Ae.loading(s.render, { ...r, ...s }));
  const a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l = (d, p, h) => {
    if (p == null) return void Ae.dismiss(n);
    const v = { type: d, ...a, ...r, data: h }, y = gs(p) ? { render: p } : p;
    return n ? Ae.update(n, { ...v, ...y }) : Ae(y.render, { ...v, ...y }), h;
  }, c = Ff(t) ? t() : t;
  return c.then((d) => l("success", i, d)).catch((d) => l("error", o, d)), c;
}, Ae.success = yo("success"), Ae.info = yo("info"), Ae.error = yo("error"), Ae.warning = yo("warning"), Ae.warn = Ae.warning, Ae.dark = (t, e) => vs(t, Jo("default", { theme: "dark", ...e })), Ae.dismiss = function(t) {
  (function(e) {
    var r;
    if (Uf()) {
      if (e == null || gs(r = e) || Fl(r)) Ft.forEach((n) => {
        n.removeToast(e);
      });
      else if (e && ("containerId" in e || "id" in e)) {
        const n = Ft.get(e.containerId);
        n ? n.removeToast(e.id) : Ft.forEach((s) => {
          s.removeToast(e.id);
        });
      }
    } else Ga = Ga.filter((n) => e != null && n.options.toastId !== e);
  })(t);
}, Ae.clearWaitingQueue = function(t) {
  t === void 0 && (t = {}), Ft.forEach((e) => {
    !e.props.limit || t.containerId && e.id !== t.containerId || e.clearQueue();
  });
}, Ae.isActive = I0, Ae.update = function(t, e) {
  e === void 0 && (e = {});
  const r = ((n, s) => {
    var o;
    let { containerId: i } = s;
    return (o = Ft.get(i || 1)) == null ? void 0 : o.toasts.get(n);
  })(t, e);
  if (r) {
    const { props: n, content: s } = r, o = { delay: 100, ...n, ...e, toastId: e.toastId || t, updateId: Vf() };
    o.toastId !== t && (o.staleId = t);
    const i = o.render || s;
    delete o.render, vs(i, o);
  }
}, Ae.done = (t) => {
  Ae.update(t, { progress: 1 });
}, Ae.onChange = function(t) {
  return Pu.add(t), () => {
    Pu.delete(t);
  };
}, Ae.play = (t) => Ou(!0, t), Ae.pause = (t) => Ou(!1, t);
const A0 = (t) => Ae.info(t, {
  position: "top-right",
  autoClose: 5e3,
  hideProgressBar: !1,
  closeOnClick: !0,
  pauseOnHover: !0,
  draggable: !0,
  progress: void 0,
  theme: "light"
}), $f = (t) => Ae.error(t, {
  position: "top-right",
  autoClose: 5e3,
  hideProgressBar: !1,
  closeOnClick: !0,
  pauseOnHover: !0,
  draggable: !0,
  progress: void 0,
  theme: "light"
}), zf = zo({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  signUp: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
  inviteUser: () => Promise,
  changePassword: () => Promise,
  handleVerifyEmail: () => Promise
}), Hn = () => xl(zf), iO = ({ children: t, firebaseConfig: e }) => {
  const { auth: r } = S0(e || null), [n, s] = tn(null);
  qe(() => {
    console.log("The user is", n);
  }, [n]);
  function o(m, g) {
    if (r)
      return lx(r, m, g);
  }
  function i(m, g, x) {
    if (r)
      return xu(r, m, g).then((w) => {
        _u(w.user, {
          url: x
        }), r.signOut(), console.log("email send", m);
      }).catch((w) => {
        console.error("Error creating user:", w);
      });
  }
  function a(m) {
    if (r)
      return ax(r, m);
  }
  function l(m, g, x) {
    if (r)
      return xu(r, m, g).then((w) => {
        _u(w.user, {
          url: x
        }).then(() => {
          r.signOut();
        }).catch((E) => {
          $f(E.message);
        });
      }).catch((w) => {
        console.error("Error creating user:", w);
      });
  }
  function c(m, g) {
    if (r)
      return ox(r, m, {
        url: g
      });
  }
  function d(m, g) {
    if (r)
      return ix(r, m, g);
  }
  function p(m) {
    if (r != null && r.currentUser)
      return cx(r.currentUser, m);
  }
  function h() {
    if (r)
      return hx(r);
  }
  function v() {
    if (!r) return;
    const m = new rr();
    return Dx(r, m);
  }
  qe(() => {
    if (r || s(null), r) {
      const m = px(r, (g) => {
        s(g || null);
      });
      return () => {
        m();
      };
    }
  }, []);
  const y = {
    currentUser: n,
    signInWithGoogle: v,
    login: o,
    signUp: l,
    logout: h,
    forgotPassword: c,
    resetPassword: d,
    inviteUser: i,
    handleVerifyEmail: a,
    changePassword: p
  };
  return /* @__PURE__ */ S.jsx(zf.Provider, { value: y, children: t });
};
var Ee;
(function(t) {
  t.assertEqual = (s) => s;
  function e(s) {
  }
  t.assertIs = e;
  function r(s) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (s) => {
    const o = {};
    for (const i of s)
      o[i] = i;
    return o;
  }, t.getValidEnumValues = (s) => {
    const o = t.objectKeys(s).filter((a) => typeof s[s[a]] != "number"), i = {};
    for (const a of o)
      i[a] = s[a];
    return t.objectValues(i);
  }, t.objectValues = (s) => t.objectKeys(s).map(function(o) {
    return s[o];
  }), t.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const o = [];
    for (const i in s)
      Object.prototype.hasOwnProperty.call(s, i) && o.push(i);
    return o;
  }, t.find = (s, o) => {
    for (const i of s)
      if (o(i))
        return i;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, o = " | ") {
    return s.map((i) => typeof i == "string" ? `'${i}'` : i).join(o);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (s, o) => typeof o == "bigint" ? o.toString() : o;
})(Ee || (Ee = {}));
var Ya;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Ya || (Ya = {}));
const Q = Ee.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), kr = (t) => {
  switch (typeof t) {
    case "undefined":
      return Q.undefined;
    case "string":
      return Q.string;
    case "number":
      return isNaN(t) ? Q.nan : Q.number;
    case "boolean":
      return Q.boolean;
    case "function":
      return Q.function;
    case "bigint":
      return Q.bigint;
    case "symbol":
      return Q.symbol;
    case "object":
      return Array.isArray(t) ? Q.array : t === null ? Q.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? Q.promise : typeof Map < "u" && t instanceof Map ? Q.map : typeof Set < "u" && t instanceof Set ? Q.set : typeof Date < "u" && t instanceof Date ? Q.date : Q.object;
    default:
      return Q.unknown;
  }
}, V = Ee.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), D0 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class ft extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(o) {
      return o.message;
    }, n = { _errors: [] }, s = (o) => {
      for (const i of o.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(s);
        else if (i.code === "invalid_return_type")
          s(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          s(i.argumentsError);
        else if (i.path.length === 0)
          n._errors.push(r(i));
        else {
          let a = n, l = 0;
          for (; l < i.path.length; ) {
            const c = i.path[l];
            l === i.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(r(i))) : a[c] = a[c] || { _errors: [] }, a = a[c], l++;
          }
        }
    };
    return s(this), n;
  }
  static assert(e) {
    if (!(e instanceof ft))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ee.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, n = [];
    for (const s of this.issues)
      s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(e(s))) : n.push(e(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
ft.create = (t) => new ft(t);
const Fn = (t, e) => {
  let r;
  switch (t.code) {
    case V.invalid_type:
      t.received === Q.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case V.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Ee.jsonStringifyReplacer)}`;
      break;
    case V.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Ee.joinValues(t.keys, ", ")}`;
      break;
    case V.invalid_union:
      r = "Invalid input";
      break;
    case V.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Ee.joinValues(t.options)}`;
      break;
    case V.invalid_enum_value:
      r = `Invalid enum value. Expected ${Ee.joinValues(t.options)}, received '${t.received}'`;
      break;
    case V.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case V.invalid_return_type:
      r = "Invalid function return type";
      break;
    case V.invalid_date:
      r = "Invalid date";
      break;
    case V.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Ee.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case V.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case V.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case V.custom:
      r = "Invalid input";
      break;
    case V.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case V.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case V.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Ee.assertNever(t);
  }
  return { message: r };
};
let Bf = Fn;
function M0(t) {
  Bf = t;
}
function Qo() {
  return Bf;
}
const ei = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, o = [...r, ...s.path || []], i = {
    ...s,
    path: o
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: o,
      message: s.message
    };
  let a = "";
  const l = n.filter((c) => !!c).slice().reverse();
  for (const c of l)
    a = c(i, { data: e, defaultError: a }).message;
  return {
    ...s,
    path: o,
    message: a
  };
}, L0 = [];
function X(t, e) {
  const r = Qo(), n = ei({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      r,
      r === Fn ? void 0 : Fn
      // then global default map
    ].filter((s) => !!s)
  });
  t.common.issues.push(n);
}
class rt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted")
        return fe;
      s.status === "dirty" && e.dirty(), n.push(s.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const s of r) {
      const o = await s.key, i = await s.value;
      n.push({
        key: o,
        value: i
      });
    }
    return rt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: o, value: i } = s;
      if (o.status === "aborted" || i.status === "aborted")
        return fe;
      o.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), o.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (n[o.value] = i.value);
    }
    return { status: e.value, value: n };
  }
}
const fe = Object.freeze({
  status: "aborted"
}), kn = (t) => ({ status: "dirty", value: t }), it = (t) => ({ status: "valid", value: t }), Xa = (t) => t.status === "aborted", Ja = (t) => t.status === "dirty", Cs = (t) => t.status === "valid", Ts = (t) => typeof Promise < "u" && t instanceof Promise;
function ti(t, e, r, n) {
  if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t);
}
function Wf(t, e, r, n, s) {
  if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, r), r;
}
var le;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(le || (le = {}));
var fs, ps;
class Wt {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Au = (t, e) => {
  if (Cs(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new ft(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function me(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (i, a) => {
    var l, c;
    const { message: d } = t;
    return i.code === "invalid_enum_value" ? { message: d ?? a.defaultError } : typeof a.data > "u" ? { message: (l = d ?? n) !== null && l !== void 0 ? l : a.defaultError } : i.code !== "invalid_type" ? { message: a.defaultError } : { message: (c = d ?? r) !== null && c !== void 0 ? c : a.defaultError };
  }, description: s };
}
class ye {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return kr(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: kr(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new rt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: kr(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Ts(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    var n;
    const s = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: kr(e)
    }, o = this._parseSync({ data: e, path: s.path, parent: s });
    return Au(s, o);
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: kr(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), o = await (Ts(s) ? s : Promise.resolve(s));
    return Au(n, o);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, o) => {
      const i = e(s), a = () => o.addIssue({
        code: V.custom,
        ...n(s)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((l) => l ? !0 : (a(), !1)) : i ? !0 : (a(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new jt({
      schema: this,
      typeName: de.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return zt.create(this, this._def);
  }
  nullable() {
    return Mr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return It.create(this, this._def);
  }
  promise() {
    return Vn.create(this, this._def);
  }
  or(e) {
    return js.create([this, e], this._def);
  }
  and(e) {
    return Ps.create(this, e, this._def);
  }
  transform(e) {
    return new jt({
      ...me(this._def),
      schema: this,
      typeName: de.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ls({
      ...me(this._def),
      innerType: this,
      defaultValue: r,
      typeName: de.ZodDefault
    });
  }
  brand() {
    return new Ul({
      typeName: de.ZodBranded,
      type: this,
      ...me(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Fs({
      ...me(this._def),
      innerType: this,
      catchValue: r,
      typeName: de.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Qs.create(this, e);
  }
  readonly() {
    return Us.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const F0 = /^c[^\s-]{8,}$/i, U0 = /^[0-9a-z]+$/, V0 = /^[0-9A-HJKMNP-TV-Z]{26}$/, $0 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, z0 = /^[a-z0-9_-]{21}$/i, B0 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, W0 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, H0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ya;
const Z0 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, K0 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, q0 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Hf = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", G0 = new RegExp(`^${Hf}$`);
function Zf(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Y0(t) {
  return new RegExp(`^${Zf(t)}$`);
}
function Kf(t) {
  let e = `${Hf}T${Zf(t)}`;
  const r = [];
  return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function X0(t, e) {
  return !!((e === "v4" || !e) && Z0.test(t) || (e === "v6" || !e) && K0.test(t));
}
class St extends ye {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== Q.string) {
      const o = this._getOrReturnCtx(e);
      return X(o, {
        code: V.invalid_type,
        expected: Q.string,
        received: o.parsedType
      }), fe;
    }
    const n = new rt();
    let s;
    for (const o of this._def.checks)
      if (o.kind === "min")
        e.data.length < o.value && (s = this._getOrReturnCtx(e, s), X(s, {
          code: V.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "max")
        e.data.length > o.value && (s = this._getOrReturnCtx(e, s), X(s, {
          code: V.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "length") {
        const i = e.data.length > o.value, a = e.data.length < o.value;
        (i || a) && (s = this._getOrReturnCtx(e, s), i ? X(s, {
          code: V.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : a && X(s, {
          code: V.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), n.dirty());
      } else if (o.kind === "email")
        W0.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "email",
          code: V.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "emoji")
        ya || (ya = new RegExp(H0, "u")), ya.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "emoji",
          code: V.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "uuid")
        $0.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "uuid",
          code: V.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "nanoid")
        z0.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "nanoid",
          code: V.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid")
        F0.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "cuid",
          code: V.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid2")
        U0.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "cuid2",
          code: V.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "ulid")
        V0.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
          validation: "ulid",
          code: V.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), X(s, {
            validation: "url",
            code: V.invalid_string,
            message: o.message
          }), n.dirty();
        }
      else o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
        validation: "regex",
        code: V.invalid_string,
        message: o.message
      }), n.dirty())) : o.kind === "trim" ? e.data = e.data.trim() : o.kind === "includes" ? e.data.includes(o.value, o.position) || (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.invalid_string,
        validation: { includes: o.value, position: o.position },
        message: o.message
      }), n.dirty()) : o.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : o.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : o.kind === "startsWith" ? e.data.startsWith(o.value) || (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.invalid_string,
        validation: { startsWith: o.value },
        message: o.message
      }), n.dirty()) : o.kind === "endsWith" ? e.data.endsWith(o.value) || (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.invalid_string,
        validation: { endsWith: o.value },
        message: o.message
      }), n.dirty()) : o.kind === "datetime" ? Kf(o).test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.invalid_string,
        validation: "datetime",
        message: o.message
      }), n.dirty()) : o.kind === "date" ? G0.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.invalid_string,
        validation: "date",
        message: o.message
      }), n.dirty()) : o.kind === "time" ? Y0(o).test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.invalid_string,
        validation: "time",
        message: o.message
      }), n.dirty()) : o.kind === "duration" ? B0.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
        validation: "duration",
        code: V.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "ip" ? X0(e.data, o.version) || (s = this._getOrReturnCtx(e, s), X(s, {
        validation: "ip",
        code: V.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "base64" ? q0.test(e.data) || (s = this._getOrReturnCtx(e, s), X(s, {
        validation: "base64",
        code: V.invalid_string,
        message: o.message
      }), n.dirty()) : Ee.assertNever(o);
    return { status: n.value, value: e.data };
  }
  _regex(e, r, n) {
    return this.refinement((s) => e.test(s), {
      validation: r,
      code: V.invalid_string,
      ...le.errToObj(n)
    });
  }
  _addCheck(e) {
    return new St({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...le.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...le.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...le.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...le.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...le.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...le.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...le.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...le.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...le.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...le.errToObj(e) });
  }
  datetime(e) {
    var r, n;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : !1,
      local: (n = e == null ? void 0 : e.local) !== null && n !== void 0 ? n : !1,
      ...le.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...le.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...le.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...le.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...le.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...le.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...le.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...le.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...le.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...le.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, le.errToObj(e));
  }
  trim() {
    return new St({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new St({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new St({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
St.create = (t) => {
  var e;
  return new St({
    checks: [],
    typeName: de.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...me(t)
  });
};
function J0(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, o = parseInt(t.toFixed(s).replace(".", "")), i = parseInt(e.toFixed(s).replace(".", ""));
  return o % i / Math.pow(10, s);
}
class Or extends ye {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== Q.number) {
      const o = this._getOrReturnCtx(e);
      return X(o, {
        code: V.invalid_type,
        expected: Q.number,
        received: o.parsedType
      }), fe;
    }
    let n;
    const s = new rt();
    for (const o of this._def.checks)
      o.kind === "int" ? Ee.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), X(n, {
        code: V.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), s.dirty()) : o.kind === "min" ? (o.inclusive ? e.data < o.value : e.data <= o.value) && (n = this._getOrReturnCtx(e, n), X(n, {
        code: V.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? e.data > o.value : e.data >= o.value) && (n = this._getOrReturnCtx(e, n), X(n, {
        code: V.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? J0(e.data, o.value) !== 0 && (n = this._getOrReturnCtx(e, n), X(n, {
        code: V.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : o.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), X(n, {
        code: V.not_finite,
        message: o.message
      }), s.dirty()) : Ee.assertNever(o);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, le.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, le.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, le.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, le.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Or({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: le.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Or({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: le.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: le.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: le.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: le.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: le.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: le.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: le.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: le.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: le.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Ee.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
Or.create = (t) => new Or({
  checks: [],
  typeName: de.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...me(t)
});
class Ar extends ye {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== Q.bigint) {
      const o = this._getOrReturnCtx(e);
      return X(o, {
        code: V.invalid_type,
        expected: Q.bigint,
        received: o.parsedType
      }), fe;
    }
    let n;
    const s = new rt();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? e.data < o.value : e.data <= o.value) && (n = this._getOrReturnCtx(e, n), X(n, {
        code: V.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? e.data > o.value : e.data >= o.value) && (n = this._getOrReturnCtx(e, n), X(n, {
        code: V.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? e.data % o.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), X(n, {
        code: V.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : Ee.assertNever(o);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, le.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, le.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, le.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, le.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Ar({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: le.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ar({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: le.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: le.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: le.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: le.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: le.toString(r)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
Ar.create = (t) => {
  var e;
  return new Ar({
    checks: [],
    typeName: de.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...me(t)
  });
};
class Ss extends ye {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== Q.boolean) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: V.invalid_type,
        expected: Q.boolean,
        received: n.parsedType
      }), fe;
    }
    return it(e.data);
  }
}
Ss.create = (t) => new Ss({
  typeName: de.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...me(t)
});
class on extends ye {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== Q.date) {
      const o = this._getOrReturnCtx(e);
      return X(o, {
        code: V.invalid_type,
        expected: Q.date,
        received: o.parsedType
      }), fe;
    }
    if (isNaN(e.data.getTime())) {
      const o = this._getOrReturnCtx(e);
      return X(o, {
        code: V.invalid_date
      }), fe;
    }
    const n = new rt();
    let s;
    for (const o of this._def.checks)
      o.kind === "min" ? e.data.getTime() < o.value && (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), n.dirty()) : o.kind === "max" ? e.data.getTime() > o.value && (s = this._getOrReturnCtx(e, s), X(s, {
        code: V.too_big,
        message: o.message,
        inclusive: !0,
        exact: !1,
        maximum: o.value,
        type: "date"
      }), n.dirty()) : Ee.assertNever(o);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new on({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: le.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: le.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
on.create = (t) => new on({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: de.ZodDate,
  ...me(t)
});
class ri extends ye {
  _parse(e) {
    if (this._getType(e) !== Q.symbol) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: V.invalid_type,
        expected: Q.symbol,
        received: n.parsedType
      }), fe;
    }
    return it(e.data);
  }
}
ri.create = (t) => new ri({
  typeName: de.ZodSymbol,
  ...me(t)
});
class Rs extends ye {
  _parse(e) {
    if (this._getType(e) !== Q.undefined) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: V.invalid_type,
        expected: Q.undefined,
        received: n.parsedType
      }), fe;
    }
    return it(e.data);
  }
}
Rs.create = (t) => new Rs({
  typeName: de.ZodUndefined,
  ...me(t)
});
class Is extends ye {
  _parse(e) {
    if (this._getType(e) !== Q.null) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: V.invalid_type,
        expected: Q.null,
        received: n.parsedType
      }), fe;
    }
    return it(e.data);
  }
}
Is.create = (t) => new Is({
  typeName: de.ZodNull,
  ...me(t)
});
class Un extends ye {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return it(e.data);
  }
}
Un.create = (t) => new Un({
  typeName: de.ZodAny,
  ...me(t)
});
class Qr extends ye {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return it(e.data);
  }
}
Qr.create = (t) => new Qr({
  typeName: de.ZodUnknown,
  ...me(t)
});
class lr extends ye {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return X(r, {
      code: V.invalid_type,
      expected: Q.never,
      received: r.parsedType
    }), fe;
  }
}
lr.create = (t) => new lr({
  typeName: de.ZodNever,
  ...me(t)
});
class ni extends ye {
  _parse(e) {
    if (this._getType(e) !== Q.undefined) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: V.invalid_type,
        expected: Q.void,
        received: n.parsedType
      }), fe;
    }
    return it(e.data);
  }
}
ni.create = (t) => new ni({
  typeName: de.ZodVoid,
  ...me(t)
});
class It extends ye {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== Q.array)
      return X(r, {
        code: V.invalid_type,
        expected: Q.array,
        received: r.parsedType
      }), fe;
    if (s.exactLength !== null) {
      const i = r.data.length > s.exactLength.value, a = r.data.length < s.exactLength.value;
      (i || a) && (X(r, {
        code: i ? V.too_big : V.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (X(r, {
      code: V.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (X(r, {
      code: V.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((i, a) => s.type._parseAsync(new Wt(r, i, r.path, a)))).then((i) => rt.mergeArray(n, i));
    const o = [...r.data].map((i, a) => s.type._parseSync(new Wt(r, i, r.path, a)));
    return rt.mergeArray(n, o);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new It({
      ...this._def,
      minLength: { value: e, message: le.toString(r) }
    });
  }
  max(e, r) {
    return new It({
      ...this._def,
      maxLength: { value: e, message: le.toString(r) }
    });
  }
  length(e, r) {
    return new It({
      ...this._def,
      exactLength: { value: e, message: le.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
It.create = (t, e) => new It({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: de.ZodArray,
  ...me(e)
});
function En(t) {
  if (t instanceof Le) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = zt.create(En(n));
    }
    return new Le({
      ...t._def,
      shape: () => e
    });
  } else return t instanceof It ? new It({
    ...t._def,
    type: En(t.element)
  }) : t instanceof zt ? zt.create(En(t.unwrap())) : t instanceof Mr ? Mr.create(En(t.unwrap())) : t instanceof Ht ? Ht.create(t.items.map((e) => En(e))) : t;
}
class Le extends ye {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = Ee.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== Q.object) {
      const c = this._getOrReturnCtx(e);
      return X(c, {
        code: V.invalid_type,
        expected: Q.object,
        received: c.parsedType
      }), fe;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: o, keys: i } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof lr && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        i.includes(c) || a.push(c);
    const l = [];
    for (const c of i) {
      const d = o[c], p = s.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: d._parse(new Wt(s, p, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof lr) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of a)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: s.data[d] }
          });
      else if (c === "strict")
        a.length > 0 && (X(s, {
          code: V.unrecognized_keys,
          keys: a
        }), n.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of a) {
        const p = s.data[d];
        l.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new Wt(s, p, s.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of l) {
        const p = await d.key, h = await d.value;
        c.push({
          key: p,
          value: h,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => rt.mergeObjectSync(n, c)) : rt.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return le.errToObj, new Le({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, o, i, a;
          const l = (i = (o = (s = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(s, r, n).message) !== null && i !== void 0 ? i : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (a = le.errToObj(e).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new Le({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Le({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new Le({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new Le({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: de.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new Le({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Ee.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new Le({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Ee.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new Le({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return En(this);
  }
  partial(e) {
    const r = {};
    return Ee.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new Le({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return Ee.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let o = this.shape[n];
        for (; o instanceof zt; )
          o = o._def.innerType;
        r[n] = o;
      }
    }), new Le({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return qf(Ee.objectKeys(this.shape));
  }
}
Le.create = (t, e) => new Le({
  shape: () => t,
  unknownKeys: "strip",
  catchall: lr.create(),
  typeName: de.ZodObject,
  ...me(e)
});
Le.strictCreate = (t, e) => new Le({
  shape: () => t,
  unknownKeys: "strict",
  catchall: lr.create(),
  typeName: de.ZodObject,
  ...me(e)
});
Le.lazycreate = (t, e) => new Le({
  shape: t,
  unknownKeys: "strip",
  catchall: lr.create(),
  typeName: de.ZodObject,
  ...me(e)
});
class js extends ye {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(o) {
      for (const a of o)
        if (a.result.status === "valid")
          return a.result;
      for (const a of o)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const i = o.map((a) => new ft(a.ctx.common.issues));
      return X(r, {
        code: V.invalid_union,
        unionErrors: i
      }), fe;
    }
    if (r.common.async)
      return Promise.all(n.map(async (o) => {
        const i = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await o._parseAsync({
            data: r.data,
            path: r.path,
            parent: i
          }),
          ctx: i
        };
      })).then(s);
    {
      let o;
      const i = [];
      for (const l of n) {
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = l._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !o && (o = { result: d, ctx: c }), c.common.issues.length && i.push(c.common.issues);
      }
      if (o)
        return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((l) => new ft(l));
      return X(r, {
        code: V.invalid_union,
        unionErrors: a
      }), fe;
    }
  }
  get options() {
    return this._def.options;
  }
}
js.create = (t, e) => new js({
  options: t,
  typeName: de.ZodUnion,
  ...me(e)
});
const tr = (t) => t instanceof As ? tr(t.schema) : t instanceof jt ? tr(t.innerType()) : t instanceof Ds ? [t.value] : t instanceof Dr ? t.options : t instanceof Ms ? Ee.objectValues(t.enum) : t instanceof Ls ? tr(t._def.innerType) : t instanceof Rs ? [void 0] : t instanceof Is ? [null] : t instanceof zt ? [void 0, ...tr(t.unwrap())] : t instanceof Mr ? [null, ...tr(t.unwrap())] : t instanceof Ul || t instanceof Us ? tr(t.unwrap()) : t instanceof Fs ? tr(t._def.innerType) : [];
class Ri extends ye {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== Q.object)
      return X(r, {
        code: V.invalid_type,
        expected: Q.object,
        received: r.parsedType
      }), fe;
    const n = this.discriminator, s = r.data[n], o = this.optionsMap.get(s);
    return o ? r.common.async ? o._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : o._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (X(r, {
      code: V.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), fe);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, r, n) {
    const s = /* @__PURE__ */ new Map();
    for (const o of r) {
      const i = tr(o.shape[e]);
      if (!i.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of i) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        s.set(a, o);
      }
    }
    return new Ri({
      typeName: de.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...me(n)
    });
  }
}
function Qa(t, e) {
  const r = kr(t), n = kr(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === Q.object && n === Q.object) {
    const s = Ee.objectKeys(e), o = Ee.objectKeys(t).filter((a) => s.indexOf(a) !== -1), i = { ...t, ...e };
    for (const a of o) {
      const l = Qa(t[a], e[a]);
      if (!l.valid)
        return { valid: !1 };
      i[a] = l.data;
    }
    return { valid: !0, data: i };
  } else if (r === Q.array && n === Q.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let o = 0; o < t.length; o++) {
      const i = t[o], a = e[o], l = Qa(i, a);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return r === Q.date && n === Q.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Ps extends ye {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (o, i) => {
      if (Xa(o) || Xa(i))
        return fe;
      const a = Qa(o.value, i.value);
      return a.valid ? ((Ja(o) || Ja(i)) && r.dirty(), { status: r.value, value: a.data }) : (X(n, {
        code: V.invalid_intersection_types
      }), fe);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([o, i]) => s(o, i)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Ps.create = (t, e, r) => new Ps({
  left: t,
  right: e,
  typeName: de.ZodIntersection,
  ...me(r)
});
class Ht extends ye {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== Q.array)
      return X(n, {
        code: V.invalid_type,
        expected: Q.array,
        received: n.parsedType
      }), fe;
    if (n.data.length < this._def.items.length)
      return X(n, {
        code: V.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), fe;
    !this._def.rest && n.data.length > this._def.items.length && (X(n, {
      code: V.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const o = [...n.data].map((i, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new Wt(n, i, n.path, a)) : null;
    }).filter((i) => !!i);
    return n.common.async ? Promise.all(o).then((i) => rt.mergeArray(r, i)) : rt.mergeArray(r, o);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Ht({
      ...this._def,
      rest: e
    });
  }
}
Ht.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ht({
    items: t,
    typeName: de.ZodTuple,
    rest: null,
    ...me(e)
  });
};
class Os extends ye {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== Q.object)
      return X(n, {
        code: V.invalid_type,
        expected: Q.object,
        received: n.parsedType
      }), fe;
    const s = [], o = this._def.keyType, i = this._def.valueType;
    for (const a in n.data)
      s.push({
        key: o._parse(new Wt(n, a, n.path, a)),
        value: i._parse(new Wt(n, n.data[a], n.path, a)),
        alwaysSet: a in n.data
      });
    return n.common.async ? rt.mergeObjectAsync(r, s) : rt.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof ye ? new Os({
      keyType: e,
      valueType: r,
      typeName: de.ZodRecord,
      ...me(n)
    }) : new Os({
      keyType: St.create(),
      valueType: e,
      typeName: de.ZodRecord,
      ...me(r)
    });
  }
}
class si extends ye {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== Q.map)
      return X(n, {
        code: V.invalid_type,
        expected: Q.map,
        received: n.parsedType
      }), fe;
    const s = this._def.keyType, o = this._def.valueType, i = [...n.data.entries()].map(([a, l], c) => ({
      key: s._parse(new Wt(n, a, n.path, [c, "key"])),
      value: o._parse(new Wt(n, l, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of i) {
          const c = await l.key, d = await l.value;
          if (c.status === "aborted" || d.status === "aborted")
            return fe;
          (c.status === "dirty" || d.status === "dirty") && r.dirty(), a.set(c.value, d.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of i) {
        const c = l.key, d = l.value;
        if (c.status === "aborted" || d.status === "aborted")
          return fe;
        (c.status === "dirty" || d.status === "dirty") && r.dirty(), a.set(c.value, d.value);
      }
      return { status: r.value, value: a };
    }
  }
}
si.create = (t, e, r) => new si({
  valueType: e,
  keyType: t,
  typeName: de.ZodMap,
  ...me(r)
});
class an extends ye {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== Q.set)
      return X(n, {
        code: V.invalid_type,
        expected: Q.set,
        received: n.parsedType
      }), fe;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (X(n, {
      code: V.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (X(n, {
      code: V.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const o = this._def.valueType;
    function i(l) {
      const c = /* @__PURE__ */ new Set();
      for (const d of l) {
        if (d.status === "aborted")
          return fe;
        d.status === "dirty" && r.dirty(), c.add(d.value);
      }
      return { status: r.value, value: c };
    }
    const a = [...n.data.values()].map((l, c) => o._parse(new Wt(n, l, n.path, c)));
    return n.common.async ? Promise.all(a).then((l) => i(l)) : i(a);
  }
  min(e, r) {
    return new an({
      ...this._def,
      minSize: { value: e, message: le.toString(r) }
    });
  }
  max(e, r) {
    return new an({
      ...this._def,
      maxSize: { value: e, message: le.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
an.create = (t, e) => new an({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: de.ZodSet,
  ...me(e)
});
class jn extends ye {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== Q.function)
      return X(r, {
        code: V.invalid_type,
        expected: Q.function,
        received: r.parsedType
      }), fe;
    function n(a, l) {
      return ei({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Qo(),
          Fn
        ].filter((c) => !!c),
        issueData: {
          code: V.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(a, l) {
      return ei({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Qo(),
          Fn
        ].filter((c) => !!c),
        issueData: {
          code: V.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const o = { errorMap: r.common.contextualErrorMap }, i = r.data;
    if (this._def.returns instanceof Vn) {
      const a = this;
      return it(async function(...l) {
        const c = new ft([]), d = await a._def.args.parseAsync(l, o).catch((v) => {
          throw c.addIssue(n(l, v)), c;
        }), p = await Reflect.apply(i, this, d);
        return await a._def.returns._def.type.parseAsync(p, o).catch((v) => {
          throw c.addIssue(s(p, v)), c;
        });
      });
    } else {
      const a = this;
      return it(function(...l) {
        const c = a._def.args.safeParse(l, o);
        if (!c.success)
          throw new ft([n(l, c.error)]);
        const d = Reflect.apply(i, this, c.data), p = a._def.returns.safeParse(d, o);
        if (!p.success)
          throw new ft([s(d, p.error)]);
        return p.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new jn({
      ...this._def,
      args: Ht.create(e).rest(Qr.create())
    });
  }
  returns(e) {
    return new jn({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, n) {
    return new jn({
      args: e || Ht.create([]).rest(Qr.create()),
      returns: r || Qr.create(),
      typeName: de.ZodFunction,
      ...me(n)
    });
  }
}
class As extends ye {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
As.create = (t, e) => new As({
  getter: t,
  typeName: de.ZodLazy,
  ...me(e)
});
class Ds extends ye {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return X(r, {
        received: r.data,
        code: V.invalid_literal,
        expected: this._def.value
      }), fe;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ds.create = (t, e) => new Ds({
  value: t,
  typeName: de.ZodLiteral,
  ...me(e)
});
function qf(t, e) {
  return new Dr({
    values: t,
    typeName: de.ZodEnum,
    ...me(e)
  });
}
class Dr extends ye {
  constructor() {
    super(...arguments), fs.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return X(r, {
        expected: Ee.joinValues(n),
        received: r.parsedType,
        code: V.invalid_type
      }), fe;
    }
    if (ti(this, fs) || Wf(this, fs, new Set(this._def.values)), !ti(this, fs).has(e.data)) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return X(r, {
        received: r.data,
        code: V.invalid_enum_value,
        options: n
      }), fe;
    }
    return it(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e, r = this._def) {
    return Dr.create(e, {
      ...this._def,
      ...r
    });
  }
  exclude(e, r = this._def) {
    return Dr.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
fs = /* @__PURE__ */ new WeakMap();
Dr.create = qf;
class Ms extends ye {
  constructor() {
    super(...arguments), ps.set(this, void 0);
  }
  _parse(e) {
    const r = Ee.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== Q.string && n.parsedType !== Q.number) {
      const s = Ee.objectValues(r);
      return X(n, {
        expected: Ee.joinValues(s),
        received: n.parsedType,
        code: V.invalid_type
      }), fe;
    }
    if (ti(this, ps) || Wf(this, ps, new Set(Ee.getValidEnumValues(this._def.values))), !ti(this, ps).has(e.data)) {
      const s = Ee.objectValues(r);
      return X(n, {
        received: n.data,
        code: V.invalid_enum_value,
        options: s
      }), fe;
    }
    return it(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ps = /* @__PURE__ */ new WeakMap();
Ms.create = (t, e) => new Ms({
  values: t,
  typeName: de.ZodNativeEnum,
  ...me(e)
});
class Vn extends ye {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== Q.promise && r.common.async === !1)
      return X(r, {
        code: V.invalid_type,
        expected: Q.promise,
        received: r.parsedType
      }), fe;
    const n = r.parsedType === Q.promise ? r.data : Promise.resolve(r.data);
    return it(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Vn.create = (t, e) => new Vn({
  type: t,
  typeName: de.ZodPromise,
  ...me(e)
});
class jt extends ye {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === de.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = this._def.effect || null, o = {
      addIssue: (i) => {
        X(n, i), i.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (o.addIssue = o.addIssue.bind(o), s.type === "preprocess") {
      const i = s.transform(n.data, o);
      if (n.common.async)
        return Promise.resolve(i).then(async (a) => {
          if (r.value === "aborted")
            return fe;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? fe : l.status === "dirty" || r.value === "dirty" ? kn(l.value) : l;
        });
      {
        if (r.value === "aborted")
          return fe;
        const a = this._def.schema._parseSync({
          data: i,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? fe : a.status === "dirty" || r.value === "dirty" ? kn(a.value) : a;
      }
    }
    if (s.type === "refinement") {
      const i = (a) => {
        const l = s.refinement(a, o);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? fe : (a.status === "dirty" && r.dirty(), i(a.value), { status: r.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? fe : (a.status === "dirty" && r.dirty(), i(a.value).then(() => ({ status: r.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Cs(i))
          return i;
        const a = s.transform(i.value, o);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => Cs(i) ? Promise.resolve(s.transform(i.value, o)).then((a) => ({ status: r.value, value: a })) : i);
    Ee.assertNever(s);
  }
}
jt.create = (t, e, r) => new jt({
  schema: t,
  typeName: de.ZodEffects,
  effect: e,
  ...me(r)
});
jt.createWithPreprocess = (t, e, r) => new jt({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: de.ZodEffects,
  ...me(r)
});
class zt extends ye {
  _parse(e) {
    return this._getType(e) === Q.undefined ? it(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
zt.create = (t, e) => new zt({
  innerType: t,
  typeName: de.ZodOptional,
  ...me(e)
});
class Mr extends ye {
  _parse(e) {
    return this._getType(e) === Q.null ? it(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mr.create = (t, e) => new Mr({
  innerType: t,
  typeName: de.ZodNullable,
  ...me(e)
});
class Ls extends ye {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === Q.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ls.create = (t, e) => new Ls({
  innerType: t,
  typeName: de.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...me(e)
});
class Fs extends ye {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Ts(s) ? s.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new ft(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new ft(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Fs.create = (t, e) => new Fs({
  innerType: t,
  typeName: de.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...me(e)
});
class oi extends ye {
  _parse(e) {
    if (this._getType(e) !== Q.nan) {
      const n = this._getOrReturnCtx(e);
      return X(n, {
        code: V.invalid_type,
        expected: Q.nan,
        received: n.parsedType
      }), fe;
    }
    return { status: "valid", value: e.data };
  }
}
oi.create = (t) => new oi({
  typeName: de.ZodNaN,
  ...me(t)
});
const Q0 = Symbol("zod_brand");
class Ul extends ye {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Qs extends ye {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? fe : o.status === "dirty" ? (r.dirty(), kn(o.value)) : this._def.out._parseAsync({
          data: o.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? fe : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, r) {
    return new Qs({
      in: e,
      out: r,
      typeName: de.ZodPipeline
    });
  }
}
class Us extends ye {
  _parse(e) {
    const r = this._def.innerType._parse(e), n = (s) => (Cs(s) && (s.value = Object.freeze(s.value)), s);
    return Ts(r) ? r.then((s) => n(s)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Us.create = (t, e) => new Us({
  innerType: t,
  typeName: de.ZodReadonly,
  ...me(e)
});
function Gf(t, e = {}, r) {
  return t ? Un.create().superRefine((n, s) => {
    var o, i;
    if (!t(n)) {
      const a = typeof e == "function" ? e(n) : typeof e == "string" ? { message: e } : e, l = (i = (o = a.fatal) !== null && o !== void 0 ? o : r) !== null && i !== void 0 ? i : !0, c = typeof a == "string" ? { message: a } : a;
      s.addIssue({ code: "custom", ...c, fatal: l });
    }
  }) : Un.create();
}
const e_ = {
  object: Le.lazycreate
};
var de;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(de || (de = {}));
const t_ = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Gf((r) => r instanceof t, e), Yf = St.create, Xf = Or.create, r_ = oi.create, n_ = Ar.create, Jf = Ss.create, s_ = on.create, o_ = ri.create, i_ = Rs.create, a_ = Is.create, l_ = Un.create, c_ = Qr.create, u_ = lr.create, d_ = ni.create, f_ = It.create, p_ = Le.create, h_ = Le.strictCreate, m_ = js.create, g_ = Ri.create, v_ = Ps.create, y_ = Ht.create, b_ = Os.create, w_ = si.create, x_ = an.create, __ = jn.create, E_ = As.create, N_ = Ds.create, k_ = Dr.create, C_ = Ms.create, T_ = Vn.create, Du = jt.create, S_ = zt.create, R_ = Mr.create, I_ = jt.createWithPreprocess, j_ = Qs.create, P_ = () => Yf().optional(), O_ = () => Xf().optional(), A_ = () => Jf().optional(), D_ = {
  string: (t) => St.create({ ...t, coerce: !0 }),
  number: (t) => Or.create({ ...t, coerce: !0 }),
  boolean: (t) => Ss.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Ar.create({ ...t, coerce: !0 }),
  date: (t) => on.create({ ...t, coerce: !0 })
}, M_ = fe;
var ot = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Fn,
  setErrorMap: M0,
  getErrorMap: Qo,
  makeIssue: ei,
  EMPTY_PATH: L0,
  addIssueToContext: X,
  ParseStatus: rt,
  INVALID: fe,
  DIRTY: kn,
  OK: it,
  isAborted: Xa,
  isDirty: Ja,
  isValid: Cs,
  isAsync: Ts,
  get util() {
    return Ee;
  },
  get objectUtil() {
    return Ya;
  },
  ZodParsedType: Q,
  getParsedType: kr,
  ZodType: ye,
  datetimeRegex: Kf,
  ZodString: St,
  ZodNumber: Or,
  ZodBigInt: Ar,
  ZodBoolean: Ss,
  ZodDate: on,
  ZodSymbol: ri,
  ZodUndefined: Rs,
  ZodNull: Is,
  ZodAny: Un,
  ZodUnknown: Qr,
  ZodNever: lr,
  ZodVoid: ni,
  ZodArray: It,
  ZodObject: Le,
  ZodUnion: js,
  ZodDiscriminatedUnion: Ri,
  ZodIntersection: Ps,
  ZodTuple: Ht,
  ZodRecord: Os,
  ZodMap: si,
  ZodSet: an,
  ZodFunction: jn,
  ZodLazy: As,
  ZodLiteral: Ds,
  ZodEnum: Dr,
  ZodNativeEnum: Ms,
  ZodPromise: Vn,
  ZodEffects: jt,
  ZodTransformer: jt,
  ZodOptional: zt,
  ZodNullable: Mr,
  ZodDefault: Ls,
  ZodCatch: Fs,
  ZodNaN: oi,
  BRAND: Q0,
  ZodBranded: Ul,
  ZodPipeline: Qs,
  ZodReadonly: Us,
  custom: Gf,
  Schema: ye,
  ZodSchema: ye,
  late: e_,
  get ZodFirstPartyTypeKind() {
    return de;
  },
  coerce: D_,
  any: l_,
  array: f_,
  bigint: n_,
  boolean: Jf,
  date: s_,
  discriminatedUnion: g_,
  effect: Du,
  enum: k_,
  function: __,
  instanceof: t_,
  intersection: v_,
  lazy: E_,
  literal: N_,
  map: w_,
  nan: r_,
  nativeEnum: C_,
  never: u_,
  null: a_,
  nullable: R_,
  number: Xf,
  object: p_,
  oboolean: A_,
  onumber: O_,
  optional: S_,
  ostring: P_,
  pipeline: j_,
  preprocess: I_,
  promise: T_,
  record: b_,
  set: x_,
  strictObject: h_,
  string: Yf,
  symbol: o_,
  transformer: Du,
  tuple: y_,
  undefined: i_,
  union: m_,
  unknown: c_,
  void: d_,
  NEVER: M_,
  ZodIssueCode: V,
  quotelessJson: D0,
  ZodError: ft
}), eo = (t) => t.type === "checkbox", Cn = (t) => t instanceof Date, st = (t) => t == null;
const Qf = (t) => typeof t == "object";
var Ze = (t) => !st(t) && !Array.isArray(t) && Qf(t) && !Cn(t), L_ = (t) => Ze(t) && t.target ? eo(t.target) ? t.target.checked : t.target.value : t, F_ = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t, U_ = (t, e) => t.has(F_(e)), V_ = (t) => {
  const e = t.constructor && t.constructor.prototype;
  return Ze(e) && e.hasOwnProperty("isPrototypeOf");
}, Vl = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function wt(t) {
  let e;
  const r = Array.isArray(t);
  if (t instanceof Date)
    e = new Date(t);
  else if (t instanceof Set)
    e = new Set(t);
  else if (!(Vl && (t instanceof Blob || t instanceof FileList)) && (r || Ze(t)))
    if (e = r ? [] : {}, !r && !V_(t))
      e = t;
    else
      for (const n in t)
        t.hasOwnProperty(n) && (e[n] = wt(t[n]));
  else
    return t;
  return e;
}
var Ii = (t) => Array.isArray(t) ? t.filter(Boolean) : [], ze = (t) => t === void 0, ee = (t, e, r) => {
  if (!e || !Ze(t))
    return r;
  const n = Ii(e.split(/[,[\].]+?/)).reduce((s, o) => st(s) ? s : s[o], t);
  return ze(n) || n === t ? ze(t[e]) ? r : t[e] : n;
}, Cr = (t) => typeof t == "boolean", $l = (t) => /^\w*$/.test(t), ep = (t) => Ii(t.replace(/["|']|\]/g, "").split(/\.|\[/)), Se = (t, e, r) => {
  let n = -1;
  const s = $l(e) ? [e] : ep(e), o = s.length, i = o - 1;
  for (; ++n < o; ) {
    const a = s[n];
    let l = r;
    if (n !== i) {
      const c = t[a];
      l = Ze(c) || Array.isArray(c) ? c : isNaN(+s[n + 1]) ? {} : [];
    }
    if (a === "__proto__")
      return;
    t[a] = l, t = t[a];
  }
  return t;
};
const Mu = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Ct = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Qt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
J.createContext(null);
var $_ = (t, e, r, n = !0) => {
  const s = {
    defaultValues: e._defaultValues
  };
  for (const o in t)
    Object.defineProperty(s, o, {
      get: () => {
        const i = o;
        return e._proxyFormState[i] !== Ct.all && (e._proxyFormState[i] = !n || Ct.all), t[i];
      }
    });
  return s;
}, ut = (t) => Ze(t) && !Object.keys(t).length, z_ = (t, e, r, n) => {
  r(t);
  const { name: s, ...o } = t;
  return ut(o) || Object.keys(o).length >= Object.keys(e).length || Object.keys(o).find((i) => e[i] === Ct.all);
}, Mo = (t) => Array.isArray(t) ? t : [t];
function B_(t) {
  const e = J.useRef(t);
  e.current = t, J.useEffect(() => {
    const r = !t.disabled && e.current.subject && e.current.subject.subscribe({
      next: e.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [t.disabled]);
}
var Ut = (t) => typeof t == "string", W_ = (t, e, r, n, s) => Ut(t) ? (n && e.watch.add(t), ee(r, t, s)) : Array.isArray(t) ? t.map((o) => (n && e.watch.add(o), ee(r, o))) : (n && (e.watchAll = !0), r), tp = (t, e, r, n, s) => e ? {
  ...r[t],
  types: {
    ...r[t] && r[t].types ? r[t].types : {},
    [n]: s || !0
  }
} : {}, Lu = (t) => ({
  isOnSubmit: !t || t === Ct.onSubmit,
  isOnBlur: t === Ct.onBlur,
  isOnChange: t === Ct.onChange,
  isOnAll: t === Ct.all,
  isOnTouch: t === Ct.onTouched
}), Fu = (t, e, r) => !r && (e.watchAll || e.watch.has(t) || [...e.watch].some((n) => t.startsWith(n) && /^\.\w+/.test(t.slice(n.length))));
const ys = (t, e, r, n) => {
  for (const s of r || Object.keys(t)) {
    const o = ee(t, s);
    if (o) {
      const { _f: i, ...a } = o;
      if (i) {
        if (i.refs && i.refs[0] && e(i.refs[0], s) && !n)
          break;
        if (i.ref && e(i.ref, i.name) && !n)
          break;
        ys(a, e);
      } else Ze(a) && ys(a, e);
    }
  }
};
var H_ = (t, e, r) => {
  const n = Mo(ee(t, r));
  return Se(n, "root", e[r]), Se(t, r, n), t;
}, zl = (t) => t.type === "file", Rr = (t) => typeof t == "function", ii = (t) => {
  if (!Vl)
    return !1;
  const e = t ? t.ownerDocument : 0;
  return t instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, Lo = (t) => Ut(t), Bl = (t) => t.type === "radio", ai = (t) => t instanceof RegExp;
const Uu = {
  value: !1,
  isValid: !1
}, Vu = { value: !0, isValid: !0 };
var rp = (t) => {
  if (Array.isArray(t)) {
    if (t.length > 1) {
      const e = t.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: e, isValid: !!e.length };
    }
    return t[0].checked && !t[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      t[0].attributes && !ze(t[0].attributes.value) ? ze(t[0].value) || t[0].value === "" ? Vu : { value: t[0].value, isValid: !0 } : Vu
    ) : Uu;
  }
  return Uu;
};
const $u = {
  isValid: !1,
  value: null
};
var np = (t) => Array.isArray(t) ? t.reduce((e, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : e, $u) : $u;
function zu(t, e, r = "validate") {
  if (Lo(t) || Array.isArray(t) && t.every(Lo) || Cr(t) && !t)
    return {
      type: r,
      message: Lo(t) ? t : "",
      ref: e
    };
}
var vn = (t) => Ze(t) && !ai(t) ? t : {
  value: t,
  message: ""
}, Bu = async (t, e, r, n, s) => {
  const { ref: o, refs: i, required: a, maxLength: l, minLength: c, min: d, max: p, pattern: h, validate: v, name: y, valueAsNumber: m, mount: g, disabled: x } = t._f, w = ee(e, y);
  if (!g || x)
    return {};
  const E = i ? i[0] : o, k = (D) => {
    n && E.reportValidity && (E.setCustomValidity(Cr(D) ? "" : D || ""), E.reportValidity());
  }, C = {}, A = Bl(o), O = eo(o), R = A || O, L = (m || zl(o)) && ze(o.value) && ze(w) || ii(o) && o.value === "" || w === "" || Array.isArray(w) && !w.length, $ = tp.bind(null, y, r, C), oe = (D, W, P, B = Qt.maxLength, re = Qt.minLength) => {
    const q = D ? W : P;
    C[y] = {
      type: D ? B : re,
      message: q,
      ref: o,
      ...$(D ? B : re, q)
    };
  };
  if (s ? !Array.isArray(w) || !w.length : a && (!R && (L || st(w)) || Cr(w) && !w || O && !rp(i).isValid || A && !np(i).isValid)) {
    const { value: D, message: W } = Lo(a) ? { value: !!a, message: a } : vn(a);
    if (D && (C[y] = {
      type: Qt.required,
      message: W,
      ref: E,
      ...$(Qt.required, W)
    }, !r))
      return k(W), C;
  }
  if (!L && (!st(d) || !st(p))) {
    let D, W;
    const P = vn(p), B = vn(d);
    if (!st(w) && !isNaN(w)) {
      const re = o.valueAsNumber || w && +w;
      st(P.value) || (D = re > P.value), st(B.value) || (W = re < B.value);
    } else {
      const re = o.valueAsDate || new Date(w), q = (ge) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ge), pe = o.type == "time", Z = o.type == "week";
      Ut(P.value) && w && (D = pe ? q(w) > q(P.value) : Z ? w > P.value : re > new Date(P.value)), Ut(B.value) && w && (W = pe ? q(w) < q(B.value) : Z ? w < B.value : re < new Date(B.value));
    }
    if ((D || W) && (oe(!!D, P.message, B.message, Qt.max, Qt.min), !r))
      return k(C[y].message), C;
  }
  if ((l || c) && !L && (Ut(w) || s && Array.isArray(w))) {
    const D = vn(l), W = vn(c), P = !st(D.value) && w.length > +D.value, B = !st(W.value) && w.length < +W.value;
    if ((P || B) && (oe(P, D.message, W.message), !r))
      return k(C[y].message), C;
  }
  if (h && !L && Ut(w)) {
    const { value: D, message: W } = vn(h);
    if (ai(D) && !w.match(D) && (C[y] = {
      type: Qt.pattern,
      message: W,
      ref: o,
      ...$(Qt.pattern, W)
    }, !r))
      return k(W), C;
  }
  if (v) {
    if (Rr(v)) {
      const D = await v(w, e), W = zu(D, E);
      if (W && (C[y] = {
        ...W,
        ...$(Qt.validate, W.message)
      }, !r))
        return k(W.message), C;
    } else if (Ze(v)) {
      let D = {};
      for (const W in v) {
        if (!ut(D) && !r)
          break;
        const P = zu(await v[W](w, e), E, W);
        P && (D = {
          ...P,
          ...$(W, P.message)
        }, k(P.message), r && (C[y] = D));
      }
      if (!ut(D) && (C[y] = {
        ref: E,
        ...D
      }, !r))
        return C;
    }
  }
  return k(!0), C;
};
function Z_(t, e) {
  const r = e.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    t = ze(t) ? n++ : t[e[n++]];
  return t;
}
function K_(t) {
  for (const e in t)
    if (t.hasOwnProperty(e) && !ze(t[e]))
      return !1;
  return !0;
}
function He(t, e) {
  const r = Array.isArray(e) ? e : $l(e) ? [e] : ep(e), n = r.length === 1 ? t : Z_(t, r), s = r.length - 1, o = r[s];
  return n && delete n[o], s !== 0 && (Ze(n) && ut(n) || Array.isArray(n) && K_(n)) && He(t, r.slice(0, -1)), t;
}
var ba = () => {
  let t = [];
  return {
    get observers() {
      return t;
    },
    next: (s) => {
      for (const o of t)
        o.next && o.next(s);
    },
    subscribe: (s) => (t.push(s), {
      unsubscribe: () => {
        t = t.filter((o) => o !== s);
      }
    }),
    unsubscribe: () => {
      t = [];
    }
  };
}, li = (t) => st(t) || !Qf(t);
function Yr(t, e) {
  if (li(t) || li(e))
    return t === e;
  if (Cn(t) && Cn(e))
    return t.getTime() === e.getTime();
  const r = Object.keys(t), n = Object.keys(e);
  if (r.length !== n.length)
    return !1;
  for (const s of r) {
    const o = t[s];
    if (!n.includes(s))
      return !1;
    if (s !== "ref") {
      const i = e[s];
      if (Cn(o) && Cn(i) || Ze(o) && Ze(i) || Array.isArray(o) && Array.isArray(i) ? !Yr(o, i) : o !== i)
        return !1;
    }
  }
  return !0;
}
var sp = (t) => t.type === "select-multiple", q_ = (t) => Bl(t) || eo(t), wa = (t) => ii(t) && t.isConnected, op = (t) => {
  for (const e in t)
    if (Rr(t[e]))
      return !0;
  return !1;
};
function ci(t, e = {}) {
  const r = Array.isArray(t);
  if (Ze(t) || r)
    for (const n in t)
      Array.isArray(t[n]) || Ze(t[n]) && !op(t[n]) ? (e[n] = Array.isArray(t[n]) ? [] : {}, ci(t[n], e[n])) : st(t[n]) || (e[n] = !0);
  return e;
}
function ip(t, e, r) {
  const n = Array.isArray(t);
  if (Ze(t) || n)
    for (const s in t)
      Array.isArray(t[s]) || Ze(t[s]) && !op(t[s]) ? ze(e) || li(r[s]) ? r[s] = Array.isArray(t[s]) ? ci(t[s], []) : { ...ci(t[s]) } : ip(t[s], st(e) ? {} : e[s], r[s]) : r[s] = !Yr(t[s], e[s]);
  return r;
}
var bo = (t, e) => ip(t, e, ci(e)), ap = (t, { valueAsNumber: e, valueAsDate: r, setValueAs: n }) => ze(t) ? t : e ? t === "" ? NaN : t && +t : r && Ut(t) ? new Date(t) : n ? n(t) : t;
function xa(t) {
  const e = t.ref;
  if (!(t.refs ? t.refs.every((r) => r.disabled) : e.disabled))
    return zl(e) ? e.files : Bl(e) ? np(t.refs).value : sp(e) ? [...e.selectedOptions].map(({ value: r }) => r) : eo(e) ? rp(t.refs).value : ap(ze(e.value) ? t.ref.value : e.value, t);
}
var G_ = (t, e, r, n) => {
  const s = {};
  for (const o of t) {
    const i = ee(e, o);
    i && Se(s, o, i._f);
  }
  return {
    criteriaMode: r,
    names: [...t],
    fields: s,
    shouldUseNativeValidation: n
  };
}, is = (t) => ze(t) ? t : ai(t) ? t.source : Ze(t) ? ai(t.value) ? t.value.source : t.value : t, Y_ = (t) => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);
function Wu(t, e, r) {
  const n = ee(t, r);
  if (n || $l(r))
    return {
      error: n,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const o = s.join("."), i = ee(e, o), a = ee(t, o);
    if (i && !Array.isArray(i) && r !== o)
      return { name: r };
    if (a && a.type)
      return {
        name: o,
        error: a
      };
    s.pop();
  }
  return {
    name: r
  };
}
var X_ = (t, e, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(e || t) : (r ? n.isOnBlur : s.isOnBlur) ? !t : (r ? n.isOnChange : s.isOnChange) ? t : !0, J_ = (t, e) => !Ii(ee(t, e)).length && He(t, e);
const Q_ = {
  mode: Ct.onSubmit,
  reValidateMode: Ct.onChange,
  shouldFocusError: !0
};
function eE(t = {}) {
  let e = {
    ...Q_,
    ...t
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Rr(e.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1
  }, n = {}, s = Ze(e.defaultValues) || Ze(e.values) ? wt(e.defaultValues || e.values) || {} : {}, o = e.shouldUnregister ? {} : wt(s), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, a = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, c = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, p = {
    values: ba(),
    array: ba(),
    state: ba()
  }, h = Lu(e.mode), v = Lu(e.reValidateMode), y = e.criteriaMode === Ct.all, m = (N) => (T) => {
    clearTimeout(c), c = setTimeout(N, T);
  }, g = async (N) => {
    if (d.isValid || N) {
      const T = e.resolver ? ut((await R()).errors) : await $(n, !0);
      T !== r.isValid && p.state.next({
        isValid: T
      });
    }
  }, x = (N, T) => {
    (d.isValidating || d.validatingFields) && ((N || Array.from(a.mount)).forEach((j) => {
      j && (T ? Se(r.validatingFields, j, T) : He(r.validatingFields, j));
    }), p.state.next({
      validatingFields: r.validatingFields,
      isValidating: !ut(r.validatingFields)
    }));
  }, w = (N, T = [], j, G, H = !0, z = !0) => {
    if (G && j) {
      if (i.action = !0, z && Array.isArray(ee(n, N))) {
        const ie = j(ee(n, N), G.argA, G.argB);
        H && Se(n, N, ie);
      }
      if (z && Array.isArray(ee(r.errors, N))) {
        const ie = j(ee(r.errors, N), G.argA, G.argB);
        H && Se(r.errors, N, ie), J_(r.errors, N);
      }
      if (d.touchedFields && z && Array.isArray(ee(r.touchedFields, N))) {
        const ie = j(ee(r.touchedFields, N), G.argA, G.argB);
        H && Se(r.touchedFields, N, ie);
      }
      d.dirtyFields && (r.dirtyFields = bo(s, o)), p.state.next({
        name: N,
        isDirty: D(N, T),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Se(o, N, T);
  }, E = (N, T) => {
    Se(r.errors, N, T), p.state.next({
      errors: r.errors
    });
  }, k = (N) => {
    r.errors = N, p.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, C = (N, T, j, G) => {
    const H = ee(n, N);
    if (H) {
      const z = ee(o, N, ze(j) ? ee(s, N) : j);
      ze(z) || G && G.defaultChecked || T ? Se(o, N, T ? z : xa(H._f)) : B(N, z), i.mount && g();
    }
  }, A = (N, T, j, G, H) => {
    let z = !1, ie = !1;
    const we = {
      name: N
    }, je = !!(ee(n, N) && ee(n, N)._f && ee(n, N)._f.disabled);
    if (!j || G) {
      d.isDirty && (ie = r.isDirty, r.isDirty = we.isDirty = D(), z = ie !== we.isDirty);
      const Ve = je || Yr(ee(s, N), T);
      ie = !!(!je && ee(r.dirtyFields, N)), Ve || je ? He(r.dirtyFields, N) : Se(r.dirtyFields, N, !0), we.dirtyFields = r.dirtyFields, z = z || d.dirtyFields && ie !== !Ve;
    }
    if (j) {
      const Ve = ee(r.touchedFields, N);
      Ve || (Se(r.touchedFields, N, j), we.touchedFields = r.touchedFields, z = z || d.touchedFields && Ve !== j);
    }
    return z && H && p.state.next(we), z ? we : {};
  }, O = (N, T, j, G) => {
    const H = ee(r.errors, N), z = d.isValid && Cr(T) && r.isValid !== T;
    if (t.delayError && j ? (l = m(() => E(N, j)), l(t.delayError)) : (clearTimeout(c), l = null, j ? Se(r.errors, N, j) : He(r.errors, N)), (j ? !Yr(H, j) : H) || !ut(G) || z) {
      const ie = {
        ...G,
        ...z && Cr(T) ? { isValid: T } : {},
        errors: r.errors,
        name: N
      };
      r = {
        ...r,
        ...ie
      }, p.state.next(ie);
    }
  }, R = async (N) => {
    x(N, !0);
    const T = await e.resolver(o, e.context, G_(N || a.mount, n, e.criteriaMode, e.shouldUseNativeValidation));
    return x(N), T;
  }, L = async (N) => {
    const { errors: T } = await R(N);
    if (N)
      for (const j of N) {
        const G = ee(T, j);
        G ? Se(r.errors, j, G) : He(r.errors, j);
      }
    else
      r.errors = T;
    return T;
  }, $ = async (N, T, j = {
    valid: !0
  }) => {
    for (const G in N) {
      const H = N[G];
      if (H) {
        const { _f: z, ...ie } = H;
        if (z) {
          const we = a.array.has(z.name);
          x([G], !0);
          const je = await Bu(H, o, y, e.shouldUseNativeValidation && !T, we);
          if (x([G]), je[z.name] && (j.valid = !1, T))
            break;
          !T && (ee(je, z.name) ? we ? H_(r.errors, je, z.name) : Se(r.errors, z.name, je[z.name]) : He(r.errors, z.name));
        }
        ie && await $(ie, T, j);
      }
    }
    return j.valid;
  }, oe = () => {
    for (const N of a.unMount) {
      const T = ee(n, N);
      T && (T._f.refs ? T._f.refs.every((j) => !wa(j)) : !wa(T._f.ref)) && Ge(N);
    }
    a.unMount = /* @__PURE__ */ new Set();
  }, D = (N, T) => (N && T && Se(o, N, T), !Yr(ke(), s)), W = (N, T, j) => W_(N, a, {
    ...i.mount ? o : ze(T) ? s : Ut(N) ? { [N]: T } : T
  }, j, T), P = (N) => Ii(ee(i.mount ? o : s, N, t.shouldUnregister ? ee(s, N, []) : [])), B = (N, T, j = {}) => {
    const G = ee(n, N);
    let H = T;
    if (G) {
      const z = G._f;
      z && (!z.disabled && Se(o, N, ap(T, z)), H = ii(z.ref) && st(T) ? "" : T, sp(z.ref) ? [...z.ref.options].forEach((ie) => ie.selected = H.includes(ie.value)) : z.refs ? eo(z.ref) ? z.refs.length > 1 ? z.refs.forEach((ie) => (!ie.defaultChecked || !ie.disabled) && (ie.checked = Array.isArray(H) ? !!H.find((we) => we === ie.value) : H === ie.value)) : z.refs[0] && (z.refs[0].checked = !!H) : z.refs.forEach((ie) => ie.checked = ie.value === H) : zl(z.ref) ? z.ref.value = "" : (z.ref.value = H, z.ref.type || p.values.next({
        name: N,
        values: { ...o }
      })));
    }
    (j.shouldDirty || j.shouldTouch) && A(N, H, j.shouldTouch, j.shouldDirty, !0), j.shouldValidate && ge(N);
  }, re = (N, T, j) => {
    for (const G in T) {
      const H = T[G], z = `${N}.${G}`, ie = ee(n, z);
      (a.array.has(N) || !li(H) || ie && !ie._f) && !Cn(H) ? re(z, H, j) : B(z, H, j);
    }
  }, q = (N, T, j = {}) => {
    const G = ee(n, N), H = a.array.has(N), z = wt(T);
    Se(o, N, z), H ? (p.array.next({
      name: N,
      values: { ...o }
    }), (d.isDirty || d.dirtyFields) && j.shouldDirty && p.state.next({
      name: N,
      dirtyFields: bo(s, o),
      isDirty: D(N, z)
    })) : G && !G._f && !st(z) ? re(N, z, j) : B(N, z, j), Fu(N, a) && p.state.next({ ...r }), p.values.next({
      name: i.mount ? N : void 0,
      values: { ...o }
    });
  }, pe = async (N) => {
    i.mount = !0;
    const T = N.target;
    let j = T.name, G = !0;
    const H = ee(n, j), z = () => T.type ? xa(H._f) : L_(N), ie = (we) => {
      G = Number.isNaN(we) || we === ee(o, j, we);
    };
    if (H) {
      let we, je;
      const Ve = z(), Mt = N.type === Mu.BLUR || N.type === Mu.FOCUS_OUT, Hr = !Y_(H._f) && !e.resolver && !ee(r.errors, j) && !H._f.deps || X_(Mt, ee(r.touchedFields, j), r.isSubmitted, v, h), Yt = Fu(j, a, Mt);
      Se(o, j, Ve), Mt ? (H._f.onBlur && H._f.onBlur(N), l && l(0)) : H._f.onChange && H._f.onChange(N);
      const Xt = A(j, Ve, Mt, !1), es = !ut(Xt) || Yt;
      if (!Mt && p.values.next({
        name: j,
        type: N.type,
        values: { ...o }
      }), Hr)
        return d.isValid && g(), es && p.state.next({ name: j, ...Yt ? {} : Xt });
      if (!Mt && Yt && p.state.next({ ...r }), e.resolver) {
        const { errors: pn } = await R([j]);
        if (ie(Ve), G) {
          const ts = Wu(r.errors, n, j), hn = Wu(pn, n, ts.name || j);
          we = hn.error, j = hn.name, je = ut(pn);
        }
      } else
        x([j], !0), we = (await Bu(H, o, y, e.shouldUseNativeValidation))[j], x([j]), ie(Ve), G && (we ? je = !1 : d.isValid && (je = await $(n, !0)));
      G && (H._f.deps && ge(H._f.deps), O(j, je, we, Xt));
    }
  }, Z = (N, T) => {
    if (ee(r.errors, T) && N.focus)
      return N.focus(), 1;
  }, ge = async (N, T = {}) => {
    let j, G;
    const H = Mo(N);
    if (e.resolver) {
      const z = await L(ze(N) ? N : H);
      j = ut(z), G = N ? !H.some((ie) => ee(z, ie)) : j;
    } else N ? (G = (await Promise.all(H.map(async (z) => {
      const ie = ee(n, z);
      return await $(ie && ie._f ? { [z]: ie } : ie);
    }))).every(Boolean), !(!G && !r.isValid) && g()) : G = j = await $(n);
    return p.state.next({
      ...!Ut(N) || d.isValid && j !== r.isValid ? {} : { name: N },
      ...e.resolver || !N ? { isValid: j } : {},
      errors: r.errors
    }), T.shouldFocus && !G && ys(n, Z, N ? H : a.mount), G;
  }, ke = (N) => {
    const T = {
      ...i.mount ? o : s
    };
    return ze(N) ? T : Ut(N) ? ee(T, N) : N.map((j) => ee(T, j));
  }, Te = (N, T) => ({
    invalid: !!ee((T || r).errors, N),
    isDirty: !!ee((T || r).dirtyFields, N),
    error: ee((T || r).errors, N),
    isValidating: !!ee(r.validatingFields, N),
    isTouched: !!ee((T || r).touchedFields, N)
  }), Pe = (N) => {
    N && Mo(N).forEach((T) => He(r.errors, T)), p.state.next({
      errors: N ? r.errors : {}
    });
  }, De = (N, T, j) => {
    const G = (ee(n, N, { _f: {} })._f || {}).ref, H = ee(r.errors, N) || {}, { ref: z, message: ie, type: we, ...je } = H;
    Se(r.errors, N, {
      ...je,
      ...T,
      ref: G
    }), p.state.next({
      name: N,
      errors: r.errors,
      isValid: !1
    }), j && j.shouldFocus && G && G.focus && G.focus();
  }, Xe = (N, T) => Rr(N) ? p.values.subscribe({
    next: (j) => N(W(void 0, T), j)
  }) : W(N, T, !0), Ge = (N, T = {}) => {
    for (const j of N ? Mo(N) : a.mount)
      a.mount.delete(j), a.array.delete(j), T.keepValue || (He(n, j), He(o, j)), !T.keepError && He(r.errors, j), !T.keepDirty && He(r.dirtyFields, j), !T.keepTouched && He(r.touchedFields, j), !T.keepIsValidating && He(r.validatingFields, j), !e.shouldUnregister && !T.keepDefaultValue && He(s, j);
    p.values.next({
      values: { ...o }
    }), p.state.next({
      ...r,
      ...T.keepDirty ? { isDirty: D() } : {}
    }), !T.keepIsValid && g();
  }, Ne = ({ disabled: N, name: T, field: j, fields: G, value: H }) => {
    if (Cr(N) && i.mount || N) {
      const z = N ? void 0 : ze(H) ? xa(j ? j._f : ee(G, T)._f) : H;
      Se(o, T, z), A(T, z, !1, !1, !0);
    }
  }, Me = (N, T = {}) => {
    let j = ee(n, N);
    const G = Cr(T.disabled);
    return Se(n, N, {
      ...j || {},
      _f: {
        ...j && j._f ? j._f : { ref: { name: N } },
        name: N,
        mount: !0,
        ...T
      }
    }), a.mount.add(N), j ? Ne({
      field: j,
      disabled: T.disabled,
      name: N,
      value: T.value
    }) : C(N, !0, T.value), {
      ...G ? { disabled: T.disabled } : {},
      ...e.progressive ? {
        required: !!T.required,
        min: is(T.min),
        max: is(T.max),
        minLength: is(T.minLength),
        maxLength: is(T.maxLength),
        pattern: is(T.pattern)
      } : {},
      name: N,
      onChange: pe,
      onBlur: pe,
      ref: (H) => {
        if (H) {
          Me(N, T), j = ee(n, N);
          const z = ze(H.value) && H.querySelectorAll && H.querySelectorAll("input,select,textarea")[0] || H, ie = q_(z), we = j._f.refs || [];
          if (ie ? we.find((je) => je === z) : z === j._f.ref)
            return;
          Se(n, N, {
            _f: {
              ...j._f,
              ...ie ? {
                refs: [
                  ...we.filter(wa),
                  z,
                  ...Array.isArray(ee(s, N)) ? [{}] : []
                ],
                ref: { type: z.type, name: N }
              } : { ref: z }
            }
          }), C(N, !1, void 0, z);
        } else
          j = ee(n, N, {}), j._f && (j._f.mount = !1), (e.shouldUnregister || T.shouldUnregister) && !(U_(a.array, N) && i.action) && a.unMount.add(N);
      }
    };
  }, Ue = () => e.shouldFocusError && ys(n, Z, a.mount), Je = (N) => {
    Cr(N) && (p.state.next({ disabled: N }), ys(n, (T, j) => {
      const G = ee(n, j);
      G && (T.disabled = G._f.disabled || N, Array.isArray(G._f.refs) && G._f.refs.forEach((H) => {
        H.disabled = G._f.disabled || N;
      }));
    }, 0, !1));
  }, hr = (N, T) => async (j) => {
    let G;
    j && (j.preventDefault && j.preventDefault(), j.persist && j.persist());
    let H = wt(o);
    if (p.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: z, values: ie } = await R();
      r.errors = z, H = ie;
    } else
      await $(n);
    if (He(r.errors, "root"), ut(r.errors)) {
      p.state.next({
        errors: {}
      });
      try {
        await N(H, j);
      } catch (z) {
        G = z;
      }
    } else
      T && await T({ ...r.errors }, j), Ue(), setTimeout(Ue);
    if (p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ut(r.errors) && !G,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), G)
      throw G;
  }, Gt = (N, T = {}) => {
    ee(n, N) && (ze(T.defaultValue) ? q(N, wt(ee(s, N))) : (q(N, T.defaultValue), Se(s, N, wt(T.defaultValue))), T.keepTouched || He(r.touchedFields, N), T.keepDirty || (He(r.dirtyFields, N), r.isDirty = T.defaultValue ? D(N, wt(ee(s, N))) : D()), T.keepError || (He(r.errors, N), d.isValid && g()), p.state.next({ ...r }));
  }, yt = (N, T = {}) => {
    const j = N ? wt(N) : s, G = wt(j), H = ut(N), z = H ? s : G;
    if (T.keepDefaultValues || (s = j), !T.keepValues) {
      if (T.keepDirtyValues)
        for (const ie of a.mount)
          ee(r.dirtyFields, ie) ? Se(z, ie, ee(o, ie)) : q(ie, ee(z, ie));
      else {
        if (Vl && ze(N))
          for (const ie of a.mount) {
            const we = ee(n, ie);
            if (we && we._f) {
              const je = Array.isArray(we._f.refs) ? we._f.refs[0] : we._f.ref;
              if (ii(je)) {
                const Ve = je.closest("form");
                if (Ve) {
                  Ve.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      o = t.shouldUnregister ? T.keepDefaultValues ? wt(s) : {} : wt(z), p.array.next({
        values: { ...z }
      }), p.values.next({
        values: { ...z }
      });
    }
    a = {
      mount: T.keepDirtyValues ? a.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, i.mount = !d.isValid || !!T.keepIsValid || !!T.keepDirtyValues, i.watch = !!t.shouldUnregister, p.state.next({
      submitCount: T.keepSubmitCount ? r.submitCount : 0,
      isDirty: H ? !1 : T.keepDirty ? r.isDirty : !!(T.keepDefaultValues && !Yr(N, s)),
      isSubmitted: T.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: H ? {} : T.keepDirtyValues ? T.keepDefaultValues && o ? bo(s, o) : r.dirtyFields : T.keepDefaultValues && N ? bo(s, N) : T.keepDirty ? r.dirtyFields : {},
      touchedFields: T.keepTouched ? r.touchedFields : {},
      errors: T.keepErrors ? r.errors : {},
      isSubmitSuccessful: T.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, mr = (N, T) => yt(Rr(N) ? N(o) : N, T);
  return {
    control: {
      register: Me,
      unregister: Ge,
      getFieldState: Te,
      handleSubmit: hr,
      setError: De,
      _executeSchema: R,
      _getWatch: W,
      _getDirty: D,
      _updateValid: g,
      _removeUnmounted: oe,
      _updateFieldArray: w,
      _updateDisabledField: Ne,
      _getFieldArray: P,
      _reset: yt,
      _resetDefaultValues: () => Rr(e.defaultValues) && e.defaultValues().then((N) => {
        mr(N, e.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (N) => {
        r = {
          ...r,
          ...N
        };
      },
      _disableForm: Je,
      _subjects: p,
      _proxyFormState: d,
      _setErrors: k,
      get _fields() {
        return n;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return i;
      },
      set _state(N) {
        i = N;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(N) {
        a = N;
      },
      get _formState() {
        return r;
      },
      set _formState(N) {
        r = N;
      },
      get _options() {
        return e;
      },
      set _options(N) {
        e = {
          ...e,
          ...N
        };
      }
    },
    trigger: ge,
    register: Me,
    handleSubmit: hr,
    watch: Xe,
    setValue: q,
    getValues: ke,
    reset: mr,
    resetField: Gt,
    clearErrors: Pe,
    unregister: Ge,
    setError: De,
    setFocus: (N, T = {}) => {
      const j = ee(n, N), G = j && j._f;
      if (G) {
        const H = G.refs ? G.refs[0] : G.ref;
        H.focus && (H.focus(), T.shouldSelect && H.select());
      }
    },
    getFieldState: Te
  };
}
function to(t = {}) {
  const e = J.useRef(), r = J.useRef(), [n, s] = J.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Rr(t.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1,
    defaultValues: Rr(t.defaultValues) ? void 0 : t.defaultValues
  });
  e.current || (e.current = {
    ...eE(t),
    formState: n
  });
  const o = e.current.control;
  return o._options = t, B_({
    subject: o._subjects.state,
    next: (i) => {
      z_(i, o._proxyFormState, o._updateFormState) && s({ ...o._formState });
    }
  }), J.useEffect(() => o._disableForm(t.disabled), [o, t.disabled]), J.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const i = o._getDirty();
      i !== n.isDirty && o._subjects.state.next({
        isDirty: i
      });
    }
  }, [o, n.isDirty]), J.useEffect(() => {
    t.values && !Yr(t.values, r.current) ? (o._reset(t.values, o._options.resetOptions), r.current = t.values, s((i) => ({ ...i }))) : o._resetDefaultValues();
  }, [t.values, o]), J.useEffect(() => {
    t.errors && o._setErrors(t.errors);
  }, [t.errors, o]), J.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), J.useEffect(() => {
    t.shouldUnregister && o._subjects.values.next({
      values: o._getWatch()
    });
  }, [t.shouldUnregister, o]), e.current.formState = $_(n, o), e.current;
}
const Hu = (t, e, r) => {
  if (t && "reportValidity" in t) {
    const n = ee(r, e);
    t.setCustomValidity(n && n.message || ""), t.reportValidity();
  }
}, lp = (t, e) => {
  for (const r in e.fields) {
    const n = e.fields[r];
    n && n.ref && "reportValidity" in n.ref ? Hu(n.ref, r, t) : n.refs && n.refs.forEach((s) => Hu(s, r, t));
  }
}, tE = (t, e) => {
  e.shouldUseNativeValidation && lp(t, e);
  const r = {};
  for (const n in t) {
    const s = ee(e.fields, n), o = Object.assign(t[n] || {}, { ref: s && s.ref });
    if (rE(e.names || Object.keys(t), n)) {
      const i = Object.assign({}, ee(r, n));
      Se(i, "root", o), Se(r, n, i);
    } else Se(r, n, o);
  }
  return r;
}, rE = (t, e) => t.some((r) => r.startsWith(e + "."));
var nE = function(t, e) {
  for (var r = {}; t.length; ) {
    var n = t[0], s = n.code, o = n.message, i = n.path.join(".");
    if (!r[i]) if ("unionErrors" in n) {
      var a = n.unionErrors[0].errors[0];
      r[i] = { message: a.message, type: a.code };
    } else r[i] = { message: o, type: s };
    if ("unionErrors" in n && n.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(p) {
        return t.push(p);
      });
    }), e) {
      var l = r[i].types, c = l && l[n.code];
      r[i] = tp(i, e, r, s, c ? [].concat(c, n.message) : n.message);
    }
    t.shift();
  }
  return r;
}, ro = function(t, e, r) {
  return r === void 0 && (r = {}), function(n, s, o) {
    try {
      return Promise.resolve(function(i, a) {
        try {
          var l = Promise.resolve(t[r.mode === "sync" ? "parse" : "parseAsync"](n, e)).then(function(c) {
            return o.shouldUseNativeValidation && lp({}, o), { errors: {}, values: r.raw ? n : c };
          });
        } catch (c) {
          return a(c);
        }
        return l && l.then ? l.then(void 0, a) : l;
      }(0, function(i) {
        if (function(a) {
          return Array.isArray(a == null ? void 0 : a.errors);
        }(i)) return { values: {}, errors: tE(nE(i.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}, _a = { exports: {} }, as = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zu;
function sE() {
  if (Zu) return as;
  Zu = 1;
  var t = J, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, c) {
    var d, p = {}, h = null, v = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (d in l) n.call(l, d) && !o.hasOwnProperty(d) && (p[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: e, type: a, key: h, ref: v, props: p, _owner: s.current };
  }
  return as.Fragment = r, as.jsx = i, as.jsxs = i, as;
}
var wo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ku;
function oE() {
  return Ku || (Ku = 1, process.env.NODE_ENV !== "production" && function() {
    var t = J, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = Symbol.iterator, m = "@@iterator";
    function g(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var U = y && _[y] || _[m];
      return typeof U == "function" ? U : null;
    }
    var x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(_) {
      {
        for (var U = arguments.length, b = new Array(U > 1 ? U - 1 : 0), I = 1; I < U; I++)
          b[I - 1] = arguments[I];
        E("error", _, b);
      }
    }
    function E(_, U, b) {
      {
        var I = x.ReactDebugCurrentFrame, F = I.getStackAddendum();
        F !== "" && (U += "%s", b = b.concat([F]));
        var Y = b.map(function(te) {
          return String(te);
        });
        Y.unshift("Warning: " + U), Function.prototype.apply.call(console[_], console, Y);
      }
    }
    var k = !1, C = !1, A = !1, O = !1, R = !1, L;
    L = Symbol.for("react.module.reference");
    function $(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === o || R || _ === s || _ === c || _ === d || O || _ === v || k || C || A || typeof _ == "object" && _ !== null && (_.$$typeof === h || _.$$typeof === p || _.$$typeof === i || _.$$typeof === a || _.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === L || _.getModuleId !== void 0));
    }
    function oe(_, U, b) {
      var I = _.displayName;
      if (I)
        return I;
      var F = U.displayName || U.name || "";
      return F !== "" ? b + "(" + F + ")" : b;
    }
    function D(_) {
      return _.displayName || "Context";
    }
    function W(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case a:
            var U = _;
            return D(U) + ".Consumer";
          case i:
            var b = _;
            return D(b._context) + ".Provider";
          case l:
            return oe(_, _.render, "ForwardRef");
          case p:
            var I = _.displayName || null;
            return I !== null ? I : W(_.type) || "Memo";
          case h: {
            var F = _, Y = F._payload, te = F._init;
            try {
              return W(te(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, B = 0, re, q, pe, Z, ge, ke, Te;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function De() {
      {
        if (B === 0) {
          re = console.log, q = console.info, pe = console.warn, Z = console.error, ge = console.group, ke = console.groupCollapsed, Te = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        B++;
      }
    }
    function Xe() {
      {
        if (B--, B === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, _, {
              value: re
            }),
            info: P({}, _, {
              value: q
            }),
            warn: P({}, _, {
              value: pe
            }),
            error: P({}, _, {
              value: Z
            }),
            group: P({}, _, {
              value: ge
            }),
            groupCollapsed: P({}, _, {
              value: ke
            }),
            groupEnd: P({}, _, {
              value: Te
            })
          });
        }
        B < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ge = x.ReactCurrentDispatcher, Ne;
    function Me(_, U, b) {
      {
        if (Ne === void 0)
          try {
            throw Error();
          } catch (F) {
            var I = F.stack.trim().match(/\n( *(at )?)/);
            Ne = I && I[1] || "";
          }
        return `
` + Ne + _;
      }
    }
    var Ue = !1, Je;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      Je = new hr();
    }
    function Gt(_, U) {
      if (!_ || Ue)
        return "";
      {
        var b = Je.get(_);
        if (b !== void 0)
          return b;
      }
      var I;
      Ue = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = Ge.current, Ge.current = null, De();
      try {
        if (U) {
          var te = function() {
            throw Error();
          };
          if (Object.defineProperty(te.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(te, []);
            } catch (Qe) {
              I = Qe;
            }
            Reflect.construct(_, [], te);
          } else {
            try {
              te.call();
            } catch (Qe) {
              I = Qe;
            }
            _.call(te.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            I = Qe;
          }
          _();
        }
      } catch (Qe) {
        if (Qe && I && typeof Qe.stack == "string") {
          for (var ne = Qe.stack.split(`
`), ue = I.stack.split(`
`), ae = ne.length - 1, xe = ue.length - 1; ae >= 1 && xe >= 0 && ne[ae] !== ue[xe]; )
            xe--;
          for (; ae >= 1 && xe >= 0; ae--, xe--)
            if (ne[ae] !== ue[xe]) {
              if (ae !== 1 || xe !== 1)
                do
                  if (ae--, xe--, xe < 0 || ne[ae] !== ue[xe]) {
                    var _e = `
` + ne[ae].replace(" at new ", " at ");
                    return _.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", _.displayName)), typeof _ == "function" && Je.set(_, _e), _e;
                  }
                while (ae >= 1 && xe >= 0);
              break;
            }
        }
      } finally {
        Ue = !1, Ge.current = Y, Xe(), Error.prepareStackTrace = F;
      }
      var Re = _ ? _.displayName || _.name : "", nt = Re ? Me(Re) : "";
      return typeof _ == "function" && Je.set(_, nt), nt;
    }
    function yt(_, U, b) {
      return Gt(_, !1);
    }
    function mr(_) {
      var U = _.prototype;
      return !!(U && U.isReactComponent);
    }
    function bt(_, U, b) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return Gt(_, mr(_));
      if (typeof _ == "string")
        return Me(_);
      switch (_) {
        case c:
          return Me("Suspense");
        case d:
          return Me("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case l:
            return yt(_.render);
          case p:
            return bt(_.type, U, b);
          case h: {
            var I = _, F = I._payload, Y = I._init;
            try {
              return bt(Y(F), U, b);
            } catch {
            }
          }
        }
      return "";
    }
    var lt = Object.prototype.hasOwnProperty, gr = {}, N = x.ReactDebugCurrentFrame;
    function T(_) {
      if (_) {
        var U = _._owner, b = bt(_.type, _._source, U ? U.type : null);
        N.setExtraStackFrame(b);
      } else
        N.setExtraStackFrame(null);
    }
    function j(_, U, b, I, F) {
      {
        var Y = Function.call.bind(lt);
        for (var te in _)
          if (Y(_, te)) {
            var ne = void 0;
            try {
              if (typeof _[te] != "function") {
                var ue = Error((I || "React class") + ": " + b + " type `" + te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              ne = _[te](U, te, I, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ae) {
              ne = ae;
            }
            ne && !(ne instanceof Error) && (T(F), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", b, te, typeof ne), T(null)), ne instanceof Error && !(ne.message in gr) && (gr[ne.message] = !0, T(F), w("Failed %s type: %s", b, ne.message), T(null));
          }
      }
    }
    var G = Array.isArray;
    function H(_) {
      return G(_);
    }
    function z(_) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, b = U && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return b;
      }
    }
    function ie(_) {
      try {
        return we(_), !1;
      } catch {
        return !0;
      }
    }
    function we(_) {
      return "" + _;
    }
    function je(_) {
      if (ie(_))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", z(_)), we(_);
    }
    var Ve = x.ReactCurrentOwner, Mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Hr, Yt;
    function Xt(_) {
      if (lt.call(_, "ref")) {
        var U = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function es(_) {
      if (lt.call(_, "key")) {
        var U = Object.getOwnPropertyDescriptor(_, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function pn(_, U) {
      typeof _.ref == "string" && Ve.current;
    }
    function ts(_, U) {
      {
        var b = function() {
          Hr || (Hr = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        b.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function hn(_, U) {
      {
        var b = function() {
          Yt || (Yt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        b.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var oa = function(_, U, b, I, F, Y, te) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: _,
        key: U,
        ref: b,
        props: te,
        // Record the component responsible for creating this element.
        _owner: Y
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function ia(_, U, b, I, F) {
      {
        var Y, te = {}, ne = null, ue = null;
        b !== void 0 && (je(b), ne = "" + b), es(U) && (je(U.key), ne = "" + U.key), Xt(U) && (ue = U.ref, pn(U));
        for (Y in U)
          lt.call(U, Y) && !Mt.hasOwnProperty(Y) && (te[Y] = U[Y]);
        if (_ && _.defaultProps) {
          var ae = _.defaultProps;
          for (Y in ae)
            te[Y] === void 0 && (te[Y] = ae[Y]);
        }
        if (ne || ue) {
          var xe = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          ne && ts(te, xe), ue && hn(te, xe);
        }
        return oa(_, ne, ue, F, I, Ve.current, te);
      }
    }
    var rs = x.ReactCurrentOwner, mn = x.ReactDebugCurrentFrame;
    function Jt(_) {
      if (_) {
        var U = _._owner, b = bt(_.type, _._source, U ? U.type : null);
        mn.setExtraStackFrame(b);
      } else
        mn.setExtraStackFrame(null);
    }
    var Lt;
    Lt = !1;
    function Zr(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function gn() {
      {
        if (rs.current) {
          var _ = W(rs.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function lo(_) {
      return "";
    }
    var co = {};
    function uo(_) {
      {
        var U = gn();
        if (!U) {
          var b = typeof _ == "string" ? _ : _.displayName || _.name;
          b && (U = `

Check the top-level render call using <` + b + ">.");
        }
        return U;
      }
    }
    function fo(_, U) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var b = uo(U);
        if (co[b])
          return;
        co[b] = !0;
        var I = "";
        _ && _._owner && _._owner !== rs.current && (I = " It was passed a child from " + W(_._owner.type) + "."), Jt(_), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, I), Jt(null);
      }
    }
    function ns(_, U) {
      {
        if (typeof _ != "object")
          return;
        if (H(_))
          for (var b = 0; b < _.length; b++) {
            var I = _[b];
            Zr(I) && fo(I, U);
          }
        else if (Zr(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var F = g(_);
          if (typeof F == "function" && F !== _.entries)
            for (var Y = F.call(_), te; !(te = Y.next()).done; )
              Zr(te.value) && fo(te.value, U);
        }
      }
    }
    function po(_) {
      {
        var U = _.type;
        if (U == null || typeof U == "string")
          return;
        var b;
        if (typeof U == "function")
          b = U.propTypes;
        else if (typeof U == "object" && (U.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        U.$$typeof === p))
          b = U.propTypes;
        else
          return;
        if (b) {
          var I = W(U);
          j(b, _.props, "prop", I, _);
        } else if (U.PropTypes !== void 0 && !Lt) {
          Lt = !0;
          var F = W(U);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function aa(_) {
      {
        for (var U = Object.keys(_.props), b = 0; b < U.length; b++) {
          var I = U[b];
          if (I !== "children" && I !== "key") {
            Jt(_), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), Jt(null);
            break;
          }
        }
        _.ref !== null && (Jt(_), w("Invalid attribute `ref` supplied to `React.Fragment`."), Jt(null));
      }
    }
    function ho(_, U, b, I, F, Y) {
      {
        var te = $(_);
        if (!te) {
          var ne = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = lo();
          ue ? ne += ue : ne += gn();
          var ae;
          _ === null ? ae = "null" : H(_) ? ae = "array" : _ !== void 0 && _.$$typeof === e ? (ae = "<" + (W(_.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof _, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, ne);
        }
        var xe = ia(_, U, b, F, Y);
        if (xe == null)
          return xe;
        if (te) {
          var _e = U.children;
          if (_e !== void 0)
            if (I)
              if (H(_e)) {
                for (var Re = 0; Re < _e.length; Re++)
                  ns(_e[Re], _);
                Object.freeze && Object.freeze(_e);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ns(_e, _);
        }
        return _ === n ? aa(xe) : po(xe), xe;
      }
    }
    function mo(_, U, b) {
      return ho(_, U, b, !0);
    }
    function go(_, U, b) {
      return ho(_, U, b, !1);
    }
    var la = go, ca = mo;
    wo.Fragment = n, wo.jsx = la, wo.jsxs = ca;
  }()), wo;
}
var qu;
function iE() {
  return qu || (qu = 1, process.env.NODE_ENV === "production" ? _a.exports = sE() : _a.exports = oE()), _a.exports;
}
var u = iE();
function aE(t, e) {
  const r = f.createContext(e);
  function n(o) {
    const { children: i, ...a } = o, l = f.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ u.jsx(r.Provider, { value: l, children: i });
  }
  function s(o) {
    const i = f.useContext(r);
    if (i) return i;
    if (e !== void 0) return e;
    throw new Error(`\`${o}\` must be used within \`${t}\``);
  }
  return n.displayName = t + "Provider", [n, s];
}
function We(t, e = []) {
  let r = [];
  function n(o, i) {
    const a = f.createContext(i), l = r.length;
    r = [...r, i];
    function c(p) {
      const { scope: h, children: v, ...y } = p, m = (h == null ? void 0 : h[t][l]) || a, g = f.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ u.jsx(m.Provider, { value: g, children: v });
    }
    function d(p, h) {
      const v = (h == null ? void 0 : h[t][l]) || a, y = f.useContext(v);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${o}\``);
    }
    return c.displayName = o + "Provider", [c, d];
  }
  const s = () => {
    const o = r.map((i) => f.createContext(i));
    return function(i) {
      const a = (i == null ? void 0 : i[t]) || o;
      return f.useMemo(
        () => ({ [`__scope${t}`]: { ...i, [t]: a } }),
        [i, a]
      );
    };
  };
  return s.scopeName = t, [n, lE(s, ...e)];
}
function lE(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const r = () => {
    const n = t.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(s) {
      const o = n.reduce((i, { useScope: a, scopeName: l }) => {
        const c = a(s)[`__scope${l}`];
        return { ...i, ...c };
      }, {});
      return f.useMemo(() => ({ [`__scope${e.scopeName}`]: o }), [o]);
    };
  };
  return r.scopeName = e.scopeName, r;
}
function cE(t, e) {
  typeof t == "function" ? t(e) : t != null && (t.current = e);
}
function ji(...t) {
  return (e) => t.forEach((r) => cE(r, e));
}
function be(...t) {
  return f.useCallback(ji(...t), t);
}
var Lr = f.forwardRef((t, e) => {
  const { children: r, ...n } = t, s = f.Children.toArray(r), o = s.find(uE);
  if (o) {
    const i = o.props.children, a = s.map((l) => l === o ? f.Children.count(i) > 1 ? f.Children.only(null) : f.isValidElement(i) ? i.props.children : null : l);
    return /* @__PURE__ */ u.jsx(el, { ...n, ref: e, children: f.isValidElement(i) ? f.cloneElement(i, void 0, a) : null });
  }
  return /* @__PURE__ */ u.jsx(el, { ...n, ref: e, children: r });
});
Lr.displayName = "Slot";
var el = f.forwardRef((t, e) => {
  const { children: r, ...n } = t;
  if (f.isValidElement(r)) {
    const s = fE(r);
    return f.cloneElement(r, {
      ...dE(n, r.props),
      // @ts-ignore
      ref: e ? ji(e, s) : s
    });
  }
  return f.Children.count(r) > 1 ? f.Children.only(null) : null;
});
el.displayName = "SlotClone";
var Wl = ({ children: t }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: t });
function uE(t) {
  return f.isValidElement(t) && t.type === Wl;
}
function dE(t, e) {
  const r = { ...e };
  for (const n in e) {
    const s = t[n], o = e[n];
    /^on[A-Z]/.test(n) ? s && o ? r[n] = (...i) => {
      o(...i), s(...i);
    } : s && (r[n] = s) : n === "style" ? r[n] = { ...s, ...o } : n === "className" && (r[n] = [s, o].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
function fE(t) {
  var e, r;
  let n = (e = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : e.get, s = n && "isReactWarning" in n && n.isReactWarning;
  return s ? t.ref : (n = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, s = n && "isReactWarning" in n && n.isReactWarning, s ? t.props.ref : t.props.ref || t.ref);
}
function no(t) {
  const e = t + "CollectionProvider", [r, n] = We(e), [s, o] = r(
    e,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: y, children: m } = v, g = J.useRef(null), x = J.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(s, { scope: y, itemMap: x, collectionRef: g, children: m });
  };
  i.displayName = e;
  const a = t + "CollectionSlot", l = J.forwardRef(
    (v, y) => {
      const { scope: m, children: g } = v, x = o(a, m), w = be(y, x.collectionRef);
      return /* @__PURE__ */ u.jsx(Lr, { ref: w, children: g });
    }
  );
  l.displayName = a;
  const c = t + "CollectionItemSlot", d = "data-radix-collection-item", p = J.forwardRef(
    (v, y) => {
      const { scope: m, children: g, ...x } = v, w = J.useRef(null), E = be(y, w), k = o(c, m);
      return J.useEffect(() => (k.itemMap.set(w, { ref: w, ...x }), () => void k.itemMap.delete(w))), /* @__PURE__ */ u.jsx(Lr, { [d]: "", ref: E, children: g });
    }
  );
  p.displayName = c;
  function h(v) {
    const y = o(t + "CollectionConsumer", v);
    return J.useCallback(() => {
      const m = y.collectionRef.current;
      if (!m) return [];
      const g = Array.from(m.querySelectorAll(`[${d}]`));
      return Array.from(y.itemMap.values()).sort(
        (x, w) => g.indexOf(x.ref.current) - g.indexOf(w.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: i, Slot: l, ItemSlot: p },
    h,
    n
  ];
}
function K(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(n) {
    if (t == null || t(n), r === !1 || !n.defaultPrevented)
      return e == null ? void 0 : e(n);
  };
}
function $e(t) {
  const e = f.useRef(t);
  return f.useEffect(() => {
    e.current = t;
  }), f.useMemo(() => (...r) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...r);
  }, []);
}
function gt({
  prop: t,
  defaultProp: e,
  onChange: r = () => {
  }
}) {
  const [n, s] = pE({ defaultProp: e, onChange: r }), o = t !== void 0, i = o ? t : n, a = $e(r), l = f.useCallback(
    (c) => {
      if (o) {
        const d = typeof c == "function" ? c(t) : c;
        d !== t && a(d);
      } else
        s(c);
    },
    [o, t, s, a]
  );
  return [i, l];
}
function pE({
  defaultProp: t,
  onChange: e
}) {
  const r = f.useState(t), [n] = r, s = f.useRef(n), o = $e(e);
  return f.useEffect(() => {
    s.current !== n && (o(n), s.current = n);
  }, [n, s, o]), r;
}
var hE = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], se = hE.reduce((t, e) => {
  const r = f.forwardRef((n, s) => {
    const { asChild: o, ...i } = n, a = o ? Lr : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(a, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${e}`, { ...t, [e]: r };
}, {});
function Hl(t, e) {
  t && Ni.flushSync(() => t.dispatchEvent(e));
}
var Et = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
};
function mE(t, e) {
  return f.useReducer((r, n) => e[r][n] ?? r, t);
}
var Ye = (t) => {
  const { present: e, children: r } = t, n = gE(e), s = typeof r == "function" ? r({ present: n.isPresent }) : f.Children.only(r), o = be(n.ref, vE(s));
  return typeof r == "function" || n.isPresent ? f.cloneElement(s, { ref: o }) : null;
};
Ye.displayName = "Presence";
function gE(t) {
  const [e, r] = f.useState(), n = f.useRef({}), s = f.useRef(t), o = f.useRef("none"), i = t ? "mounted" : "unmounted", [a, l] = mE(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return f.useEffect(() => {
    const c = xo(n.current);
    o.current = a === "mounted" ? c : "none";
  }, [a]), Et(() => {
    const c = n.current, d = s.current;
    if (d !== t) {
      const p = o.current, h = xo(c);
      t ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), s.current = t;
    }
  }, [t, l]), Et(() => {
    if (e) {
      const c = (p) => {
        const h = xo(n.current).includes(p.animationName);
        p.target === e && h && Ni.flushSync(() => l("ANIMATION_END"));
      }, d = (p) => {
        p.target === e && (o.current = xo(n.current));
      };
      return e.addEventListener("animationstart", d), e.addEventListener("animationcancel", c), e.addEventListener("animationend", c), () => {
        e.removeEventListener("animationstart", d), e.removeEventListener("animationcancel", c), e.removeEventListener("animationend", c);
      };
    } else
      l("ANIMATION_END");
  }, [e, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: f.useCallback((c) => {
      c && (n.current = getComputedStyle(c)), r(c);
    }, [])
  };
}
function xo(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function vE(t) {
  var e, r;
  let n = (e = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : e.get, s = n && "isReactWarning" in n && n.isReactWarning;
  return s ? t.ref : (n = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, s = n && "isReactWarning" in n && n.isReactWarning, s ? t.props.ref : t.props.ref || t.ref);
}
var yE = f.useId || (() => {
}), bE = 0;
function Pi(t) {
  const [e, r] = f.useState(yE());
  return Et(() => {
    r((n) => n ?? String(bE++));
  }, [t]), e ? `radix-${e}` : "";
}
var Zl = "Collapsible", [wE, cp] = We(Zl), [xE, Kl] = wE(Zl), up = f.forwardRef(
  (t, e) => {
    const {
      __scopeCollapsible: r,
      open: n,
      defaultOpen: s,
      disabled: o,
      onOpenChange: i,
      ...a
    } = t, [l = !1, c] = gt({
      prop: n,
      defaultProp: s,
      onChange: i
    });
    return /* @__PURE__ */ u.jsx(
      xE,
      {
        scope: r,
        disabled: o,
        contentId: Pi(),
        open: l,
        onOpenToggle: f.useCallback(() => c((d) => !d), [c]),
        children: /* @__PURE__ */ u.jsx(
          se.div,
          {
            "data-state": Gl(l),
            "data-disabled": o ? "" : void 0,
            ...a,
            ref: e
          }
        )
      }
    );
  }
);
up.displayName = Zl;
var dp = "CollapsibleTrigger", fp = f.forwardRef(
  (t, e) => {
    const { __scopeCollapsible: r, ...n } = t, s = Kl(dp, r);
    return /* @__PURE__ */ u.jsx(
      se.button,
      {
        type: "button",
        "aria-controls": s.contentId,
        "aria-expanded": s.open || !1,
        "data-state": Gl(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        disabled: s.disabled,
        ...n,
        ref: e,
        onClick: K(t.onClick, s.onOpenToggle)
      }
    );
  }
);
fp.displayName = dp;
var ql = "CollapsibleContent", pp = f.forwardRef(
  (t, e) => {
    const { forceMount: r, ...n } = t, s = Kl(ql, t.__scopeCollapsible);
    return /* @__PURE__ */ u.jsx(Ye, { present: r || s.open, children: ({ present: o }) => /* @__PURE__ */ u.jsx(_E, { ...n, ref: e, present: o }) });
  }
);
pp.displayName = ql;
var _E = f.forwardRef((t, e) => {
  const { __scopeCollapsible: r, present: n, children: s, ...o } = t, i = Kl(ql, r), [a, l] = f.useState(n), c = f.useRef(null), d = be(e, c), p = f.useRef(0), h = p.current, v = f.useRef(0), y = v.current, m = i.open || a, g = f.useRef(m), x = f.useRef();
  return f.useEffect(() => {
    const w = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), Et(() => {
    const w = c.current;
    if (w) {
      x.current = x.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const E = w.getBoundingClientRect();
      p.current = E.height, v.current = E.width, g.current || (w.style.transitionDuration = x.current.transitionDuration, w.style.animationName = x.current.animationName), l(n);
    }
  }, [i.open, n]), /* @__PURE__ */ u.jsx(
    se.div,
    {
      "data-state": Gl(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !m,
      ...o,
      ref: d,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": y ? `${y}px` : void 0,
        ...t.style
      },
      children: m && s
    }
  );
});
function Gl(t) {
  return t ? "open" : "closed";
}
var EE = up, NE = fp, kE = pp, CE = f.createContext(void 0);
function dn(t) {
  const e = f.useContext(CE);
  return t || e || "ltr";
}
var fr = "Accordion", TE = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Yl, SE, RE] = no(fr), [Oi] = We(fr, [
  RE,
  cp
]), Xl = cp(), IE = J.forwardRef(
  (t, e) => {
    const { type: r, ...n } = t, s = n, o = n;
    return /* @__PURE__ */ u.jsx(Yl.Provider, { scope: t.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ u.jsx(AE, { ...o, ref: e }) : /* @__PURE__ */ u.jsx(OE, { ...s, ref: e }) });
  }
);
IE.displayName = fr;
var [hp, jE] = Oi(fr), [mp, PE] = Oi(
  fr,
  { collapsible: !1 }
), OE = J.forwardRef(
  (t, e) => {
    const {
      value: r,
      defaultValue: n,
      onValueChange: s = () => {
      },
      collapsible: o = !1,
      ...i
    } = t, [a, l] = gt({
      prop: r,
      defaultProp: n,
      onChange: s
    });
    return /* @__PURE__ */ u.jsx(
      hp,
      {
        scope: t.__scopeAccordion,
        value: a ? [a] : [],
        onItemOpen: l,
        onItemClose: J.useCallback(() => o && l(""), [o, l]),
        children: /* @__PURE__ */ u.jsx(mp, { scope: t.__scopeAccordion, collapsible: o, children: /* @__PURE__ */ u.jsx(gp, { ...i, ref: e }) })
      }
    );
  }
), AE = J.forwardRef((t, e) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: s = () => {
    },
    ...o
  } = t, [i = [], a] = gt({
    prop: r,
    defaultProp: n,
    onChange: s
  }), l = J.useCallback(
    (d) => a((p = []) => [...p, d]),
    [a]
  ), c = J.useCallback(
    (d) => a((p = []) => p.filter((h) => h !== d)),
    [a]
  );
  return /* @__PURE__ */ u.jsx(
    hp,
    {
      scope: t.__scopeAccordion,
      value: i,
      onItemOpen: l,
      onItemClose: c,
      children: /* @__PURE__ */ u.jsx(mp, { scope: t.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ u.jsx(gp, { ...o, ref: e }) })
    }
  );
}), [DE, Ai] = Oi(fr), gp = J.forwardRef(
  (t, e) => {
    const { __scopeAccordion: r, disabled: n, dir: s, orientation: o = "vertical", ...i } = t, a = J.useRef(null), l = be(a, e), c = SE(r), d = dn(s) === "ltr", p = K(t.onKeyDown, (h) => {
      var v;
      if (!TE.includes(h.key)) return;
      const y = h.target, m = c().filter((R) => {
        var L;
        return !((L = R.ref.current) != null && L.disabled);
      }), g = m.findIndex((R) => R.ref.current === y), x = m.length;
      if (g === -1) return;
      h.preventDefault();
      let w = g;
      const E = 0, k = x - 1, C = () => {
        w = g + 1, w > k && (w = E);
      }, A = () => {
        w = g - 1, w < E && (w = k);
      };
      switch (h.key) {
        case "Home":
          w = E;
          break;
        case "End":
          w = k;
          break;
        case "ArrowRight":
          o === "horizontal" && (d ? C() : A());
          break;
        case "ArrowDown":
          o === "vertical" && C();
          break;
        case "ArrowLeft":
          o === "horizontal" && (d ? A() : C());
          break;
        case "ArrowUp":
          o === "vertical" && A();
          break;
      }
      const O = w % x;
      (v = m[O].ref.current) == null || v.focus();
    });
    return /* @__PURE__ */ u.jsx(
      DE,
      {
        scope: r,
        disabled: n,
        direction: s,
        orientation: o,
        children: /* @__PURE__ */ u.jsx(Yl.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(
          se.div,
          {
            ...i,
            "data-orientation": o,
            ref: l,
            onKeyDown: n ? void 0 : p
          }
        ) })
      }
    );
  }
), ui = "AccordionItem", [ME, Jl] = Oi(ui), vp = J.forwardRef(
  (t, e) => {
    const { __scopeAccordion: r, value: n, ...s } = t, o = Ai(ui, r), i = jE(ui, r), a = Xl(r), l = Pi(), c = n && i.value.includes(n) || !1, d = o.disabled || t.disabled;
    return /* @__PURE__ */ u.jsx(
      ME,
      {
        scope: r,
        open: c,
        disabled: d,
        triggerId: l,
        children: /* @__PURE__ */ u.jsx(
          EE,
          {
            "data-orientation": o.orientation,
            "data-state": Ep(c),
            ...a,
            ...s,
            ref: e,
            disabled: d,
            open: c,
            onOpenChange: (p) => {
              p ? i.onItemOpen(n) : i.onItemClose(n);
            }
          }
        )
      }
    );
  }
);
vp.displayName = ui;
var yp = "AccordionHeader", bp = J.forwardRef(
  (t, e) => {
    const { __scopeAccordion: r, ...n } = t, s = Ai(fr, r), o = Jl(yp, r);
    return /* @__PURE__ */ u.jsx(
      se.h3,
      {
        "data-orientation": s.orientation,
        "data-state": Ep(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: e
      }
    );
  }
);
bp.displayName = yp;
var tl = "AccordionTrigger", wp = J.forwardRef(
  (t, e) => {
    const { __scopeAccordion: r, ...n } = t, s = Ai(fr, r), o = Jl(tl, r), i = PE(tl, r), a = Xl(r);
    return /* @__PURE__ */ u.jsx(Yl.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
      NE,
      {
        "aria-disabled": o.open && !i.collapsible || void 0,
        "data-orientation": s.orientation,
        id: o.triggerId,
        ...a,
        ...n,
        ref: e
      }
    ) });
  }
);
wp.displayName = tl;
var xp = "AccordionContent", _p = J.forwardRef(
  (t, e) => {
    const { __scopeAccordion: r, ...n } = t, s = Ai(fr, r), o = Jl(xp, r), i = Xl(r);
    return /* @__PURE__ */ u.jsx(
      kE,
      {
        role: "region",
        "aria-labelledby": o.triggerId,
        "data-orientation": s.orientation,
        ...i,
        ...n,
        ref: e,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...t.style
        }
      }
    );
  }
);
_p.displayName = xp;
function Ep(t) {
  return t ? "open" : "closed";
}
var LE = vp, FE = bp, Np = wp, kp = _p;
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UE = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Cp = (...t) => t.filter((e, r, n) => !!e && n.indexOf(e) === r).join(" ");
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var VE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $E = he(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: o,
    iconNode: i,
    ...a
  }, l) => Ce(
    "svg",
    {
      ref: l,
      ...VE,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: n ? Number(r) * 24 / Number(e) : r,
      className: Cp("lucide", s),
      ...a
    },
    [
      ...i.map(([c, d]) => Ce(c, d)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = (t, e) => {
  const r = he(
    ({ className: n, ...s }, o) => Ce($E, {
      ref: o,
      iconNode: e,
      className: Cp(`lucide-${UE(t)}`, n),
      ...s
    })
  );
  return r.displayName = `${t}`, r;
};
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zE = Fe("ArrowDownRight", [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BE = Fe("ArrowLeftRight", [
  ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
  ["path", { d: "M4 7h16", key: "6tx8e3" }],
  ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
  ["path", { d: "M20 17H4", key: "h6l3hr" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WE = Fe("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HE = Fe("ArrowUpDown", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZE = Fe("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KE = Fe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = Fe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qE = Fe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = Fe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GE = Fe("ChevronsRight", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sp = Fe("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
Fe("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YE = Fe("Diamond", [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
      key: "1f1r0c"
    }
  ]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = Fe("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XE = Fe("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JE = Fe("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QE = Fe("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eN = Fe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tN = Fe("Slash", [["path", { d: "M22 2 2 22", key: "y4kqgn" }]]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rN = Fe("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nN = Fe("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sN = Fe("Triangle", [
  [
    "path",
    { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "14u9p9" }
  ]
]);
/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = Fe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Rp(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (e = 0; e < s; e++) t[e] && (r = Rp(t[e])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function oN() {
  for (var t, e, r = 0, n = "", s = arguments.length; r < s; r++) (t = arguments[r]) && (e = Rp(t)) && (n && (n += " "), n += e);
  return n;
}
const tc = "-";
function iN(t) {
  const e = lN(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t;
  function s(i) {
    const a = i.split(tc);
    return a[0] === "" && a.length !== 1 && a.shift(), Ip(a, e) || aN(i);
  }
  function o(i, a) {
    const l = r[i] || [];
    return a && n[i] ? [...l, ...n[i]] : l;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: o
  };
}
function Ip(t, e) {
  var r;
  if (t.length === 0)
    return e.classGroupId;
  const n = t[0], s = e.nextPart.get(n), o = s ? Ip(t.slice(1), s) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const i = t.join(tc);
  return (r = e.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : r.classGroupId;
}
const Gu = /^\[(.+)\]$/;
function aN(t) {
  if (Gu.test(t)) {
    const e = Gu.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function lN(t) {
  const {
    theme: e,
    prefix: r
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return uN(Object.entries(t.classGroups), r).forEach(([s, o]) => {
    rl(o, n, s, e);
  }), n;
}
function rl(t, e, r, n) {
  t.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? e : Yu(e, s);
      o.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (cN(s)) {
        rl(s(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([o, i]) => {
      rl(i, Yu(e, o), r, n);
    });
  });
}
function Yu(t, e) {
  let r = t;
  return e.split(tc).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function cN(t) {
  return t.isThemeGetter;
}
function uN(t, e) {
  return e ? t.map(([r, n]) => {
    const s = n.map((o) => typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, a]) => [e + i, a])) : o);
    return [r, s];
  }) : t;
}
function dN(t) {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function s(o, i) {
    r.set(o, i), e++, e > t && (e = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(o) {
      let i = r.get(o);
      if (i !== void 0)
        return i;
      if ((i = n.get(o)) !== void 0)
        return s(o, i), i;
    },
    set(o, i) {
      r.has(o) ? r.set(o, i) : s(o, i);
    }
  };
}
const jp = "!";
function fN(t) {
  const e = t.separator, r = e.length === 1, n = e[0], s = e.length;
  return function(o) {
    const i = [];
    let a = 0, l = 0, c;
    for (let y = 0; y < o.length; y++) {
      let m = o[y];
      if (a === 0) {
        if (m === n && (r || o.slice(y, y + s) === e)) {
          i.push(o.slice(l, y)), l = y + s;
          continue;
        }
        if (m === "/") {
          c = y;
          continue;
        }
      }
      m === "[" ? a++ : m === "]" && a--;
    }
    const d = i.length === 0 ? o : o.substring(l), p = d.startsWith(jp), h = p ? d.substring(1) : d, v = c && c > l ? c - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: v
    };
  };
}
function pN(t) {
  if (t.length <= 1)
    return t;
  const e = [];
  let r = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...r.sort(), n), r = []) : r.push(n);
  }), e.push(...r.sort()), e;
}
function hN(t) {
  return {
    cache: dN(t.cacheSize),
    splitModifiers: fN(t),
    ...iN(t)
  };
}
const mN = /\s+/;
function gN(t, e) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = e, o = /* @__PURE__ */ new Set();
  return t.trim().split(mN).map((i) => {
    const {
      modifiers: a,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: d
    } = r(i);
    let p = n(d ? c.substring(0, d) : c), h = !!d;
    if (!p) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (p = n(c), !p)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      h = !1;
    }
    const v = pN(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? v + jp : v,
      classGroupId: p,
      originalClassName: i,
      hasPostfixModifier: h
    };
  }).reverse().filter((i) => {
    if (!i.isTailwindClass)
      return !0;
    const {
      modifierId: a,
      classGroupId: l,
      hasPostfixModifier: c
    } = i, d = a + l;
    return o.has(d) ? !1 : (o.add(d), s(l, c).forEach((p) => o.add(a + p)), !0);
  }).reverse().map((i) => i.originalClassName).join(" ");
}
function vN() {
  let t = 0, e, r, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = Pp(e)) && (n && (n += " "), n += r);
  return n;
}
function Pp(t) {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = Pp(t[n])) && (r && (r += " "), r += e);
  return r;
}
function yN(t, ...e) {
  let r, n, s, o = i;
  function i(l) {
    const c = e.reduce((d, p) => p(d), t());
    return r = hN(c), n = r.cache.get, s = r.cache.set, o = a, a(l);
  }
  function a(l) {
    const c = n(l);
    if (c)
      return c;
    const d = gN(l, r);
    return s(l, d), d;
  }
  return function() {
    return o(vN.apply(null, arguments));
  };
}
function Oe(t) {
  const e = (r) => r[t] || [];
  return e.isThemeGetter = !0, e;
}
const Op = /^\[(?:([a-z-]+):)?(.+)\]$/i, bN = /^\d+\/\d+$/, wN = /* @__PURE__ */ new Set(["px", "full", "screen"]), xN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _N = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, EN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, NN = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, kN = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function er(t) {
  return Xr(t) || wN.has(t) || bN.test(t);
}
function yr(t) {
  return Zn(t, "length", ON);
}
function Xr(t) {
  return !!t && !Number.isNaN(Number(t));
}
function _o(t) {
  return Zn(t, "number", Xr);
}
function ls(t) {
  return !!t && Number.isInteger(Number(t));
}
function CN(t) {
  return t.endsWith("%") && Xr(t.slice(0, -1));
}
function ve(t) {
  return Op.test(t);
}
function br(t) {
  return xN.test(t);
}
const TN = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function SN(t) {
  return Zn(t, TN, Ap);
}
function RN(t) {
  return Zn(t, "position", Ap);
}
const IN = /* @__PURE__ */ new Set(["image", "url"]);
function jN(t) {
  return Zn(t, IN, DN);
}
function PN(t) {
  return Zn(t, "", AN);
}
function cs() {
  return !0;
}
function Zn(t, e, r) {
  const n = Op.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1;
}
function ON(t) {
  return _N.test(t) && !EN.test(t);
}
function Ap() {
  return !1;
}
function AN(t) {
  return NN.test(t);
}
function DN(t) {
  return kN.test(t);
}
function MN() {
  const t = Oe("colors"), e = Oe("spacing"), r = Oe("blur"), n = Oe("brightness"), s = Oe("borderColor"), o = Oe("borderRadius"), i = Oe("borderSpacing"), a = Oe("borderWidth"), l = Oe("contrast"), c = Oe("grayscale"), d = Oe("hueRotate"), p = Oe("invert"), h = Oe("gap"), v = Oe("gradientColorStops"), y = Oe("gradientColorStopPositions"), m = Oe("inset"), g = Oe("margin"), x = Oe("opacity"), w = Oe("padding"), E = Oe("saturate"), k = Oe("scale"), C = Oe("sepia"), A = Oe("skew"), O = Oe("space"), R = Oe("translate"), L = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], oe = () => ["auto", ve, e], D = () => [ve, e], W = () => ["", er, yr], P = () => ["auto", Xr, ve], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], re = () => ["solid", "dashed", "dotted", "double", "none"], q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], pe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Z = () => ["", "0", ve], ge = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ke = () => [Xr, _o], Te = () => [Xr, ve];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [cs],
      spacing: [er, yr],
      blur: ["none", "", br, ve],
      brightness: ke(),
      borderColor: [t],
      borderRadius: ["none", "", "full", br, ve],
      borderSpacing: D(),
      borderWidth: W(),
      contrast: ke(),
      grayscale: Z(),
      hueRotate: Te(),
      invert: Z(),
      gap: D(),
      gradientColorStops: [t],
      gradientColorStopPositions: [CN, yr],
      inset: oe(),
      margin: oe(),
      opacity: ke(),
      padding: D(),
      saturate: ke(),
      scale: ke(),
      sepia: Z(),
      skew: Te(),
      space: D(),
      translate: D()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ve]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [br]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ge()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ge()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...B(), ve]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ls, ve]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: oe()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ve]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ls, ve]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [cs]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ls, ve]
        }, ve]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [cs]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ls, ve]
        }, ve]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...pe()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...pe(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...pe(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [O]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [O]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ve, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ve, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ve, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [br]
        }, br]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ve, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ve, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ve, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ve, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", br, yr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _o]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [cs]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ve]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Xr, _o]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", er, ve]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ve]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ve]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...re(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", er, yr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", er, ve]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: D()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ve]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ve]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...B(), RN]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", SN]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, jN]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [v]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...re(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: re()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...re()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [er, ve]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [er, yr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: W()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [er, yr]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", br, PN]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [cs]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": q()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": q()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", br, ve]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [C]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [C]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ve]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Te()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ve]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Te()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ve]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [k]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [k]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [k]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ls, ve]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ve]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ve]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ve]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [er, yr, _o]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const LN = /* @__PURE__ */ yN(MN);
function M(...t) {
  return LN(oN(t));
}
const FN = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  LE,
  {
    ref: r,
    className: M("border-b", t),
    ...e
  }
));
FN.displayName = "AccordionItem";
const UN = f.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ u.jsx(FE, { className: "flex", children: /* @__PURE__ */ u.jsxs(
  Np,
  {
    ref: n,
    className: M(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      t
    ),
    ...r,
    children: [
      e,
      /* @__PURE__ */ u.jsx(Tp, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
UN.displayName = Np.displayName;
const VN = f.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ u.jsx(
  kp,
  {
    ref: n,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ u.jsx("div", { className: M("pb-4 pt-0", t), children: e })
  }
));
VN.displayName = kp.displayName;
function Dp(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) for (e = 0; e < t.length; e++) t[e] && (r = Dp(t[e])) && (n && (n += " "), n += r);
  else for (e in t) t[e] && (n && (n += " "), n += e);
  return n;
}
function $N() {
  for (var t, e, r = 0, n = ""; r < arguments.length; ) (t = arguments[r++]) && (e = Dp(t)) && (n && (n += " "), n += e);
  return n;
}
const Xu = (t) => typeof t == "boolean" ? "".concat(t) : t === 0 ? "0" : t, Ju = $N, $r = (t, e) => (r) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return Ju(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: o } = e, i = Object.keys(s).map((c) => {
    const d = r == null ? void 0 : r[c], p = o == null ? void 0 : o[c];
    if (d === null) return null;
    const h = Xu(d) || Xu(p);
    return s[c][h];
  }), a = r && Object.entries(r).reduce((c, d) => {
    let [p, h] = d;
    return h === void 0 || (c[p] = h), c;
  }, {}), l = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, d) => {
    let { class: p, className: h, ...v } = d;
    return Object.entries(v).every((y) => {
      let [m, g] = y;
      return Array.isArray(g) ? g.includes({
        ...o,
        ...a
      }[m]) : {
        ...o,
        ...a
      }[m] === g;
    }) ? [
      ...c,
      p,
      h
    ] : c;
  }, []);
  return Ju(t, i, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, zN = $r(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), BN = f.forwardRef(({ className: t, variant: e, ...r }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: M(zN({ variant: e }), t),
    ...r
  }
));
BN.displayName = "Alert";
const WN = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  "h5",
  {
    ref: r,
    className: M("mb-1 font-medium leading-none tracking-tight", t),
    ...e
  }
));
WN.displayName = "AlertTitle";
const HN = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: M("text-sm [&_p]:leading-relaxed", t),
    ...e
  }
));
HN.displayName = "AlertDescription";
const Mp = (t) => {
  switch (t) {
    case "primary":
      return "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
    case "secondary":
      return "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500";
    case "outline":
      return "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500";
    case "ghost":
      return "text-gray-700 hover:bg-gray-100 focus:ring-gray-500";
    case "destructive":
      return "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
    case "success":
      return "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500";
    case "warning":
      return "bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500";
    case "info":
      return "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400";
    case "light":
      return "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300";
    case "dark":
      return "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-600";
    case "gradient":
      return "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-blue-500";
    case "glass":
      return "bg-gradient-to-br from-white/90 via-white/70 to-white/50 border border-white/60 text-gray-800 hover:from-white/95 hover:via-white/80 hover:to-white/60 focus:ring-blue-300/50 shadow-lg shadow-gray-200/50 backdrop-blur-sm";
    case "neon":
      return "bg-black text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400 shadow-lg shadow-cyan-400/50";
    case "soft":
      return "bg-blue-50 text-blue-700 hover:bg-blue-100 focus:ring-blue-300";
    case "bordered":
      return "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 focus:ring-gray-400";
    default:
      return "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
  }
}, Lp = (t) => {
  if (!t) return "px-4 py-2 text-sm";
  switch (t) {
    case "xs":
      return "px-2 py-1 text-xs";
    case "sm":
      return "px-3 py-1.5 text-sm";
    case "md":
      return "px-4 py-2 text-sm";
    case "lg":
      return "px-6 py-3 text-base";
    case "xl":
      return "px-8 py-4 text-lg";
    case "2xl":
      return "px-10 py-5 text-xl";
    case "icon":
      return "p-2";
    case "default":
      return "px-4 py-2 text-sm";
    default:
      return "px-4 py-2 text-sm";
  }
}, Fp = (t) => {
  switch (t) {
    case "default":
      return "rounded-md";
    case "rounded":
      return "rounded-lg";
    case "pill":
      return "rounded-full";
    case "square":
      return "rounded-none";
    case "circle":
      return "rounded-full";
    default:
      return "rounded-md";
  }
}, ZN = J.forwardRef(({
  variant: t = "primary",
  size: e = "md",
  shape: r = "default",
  disabled: n = !1,
  loading: s = !1,
  fullWidth: o = !1,
  icon: i,
  iconPosition: a = "left",
  children: l = "Button",
  className: c = "",
  type: d = "button",
  href: p,
  target: h,
  rel: v,
  ...y
}, m) => {
  const g = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed", x = Mp(t), w = Lp(e), E = Fp(r), k = [
    g,
    x,
    w,
    E,
    o ? "w-full" : "",
    c
  ].filter(Boolean).join(" ");
  if (r === "circle") {
    const C = `${g} ${x} ${e === "xs" ? "w-8 h-8" : e === "sm" ? "w-10 h-10" : e === "md" ? "w-12 h-12" : e === "lg" ? "w-14 h-14" : e === "xl" ? "w-16 h-16" : "w-20 h-20"} ${E} ${c}`;
    return J.createElement("button", {
      ref: m,
      className: C,
      disabled: n || s,
      type: d,
      ...y
    }, i || l);
  }
  return p ? J.createElement("a", {
    href: p,
    target: h,
    rel: v,
    className: k,
    ...y
  }, [
    s && J.createElement("svg", {
      key: "loading",
      className: "animate-spin -ml-1 mr-2 h-4 w-4",
      fill: "none",
      viewBox: "0 0 24 24"
    }, [
      J.createElement("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4"
      }),
      J.createElement("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      })
    ]),
    i && a === "left" && J.createElement("span", { key: "icon-left" }, i),
    l,
    i && a === "right" && J.createElement("span", { key: "icon-right" }, i)
  ]) : J.createElement("button", {
    ref: m,
    className: k,
    disabled: n || s,
    type: d,
    ...y
  }, [
    s && J.createElement("svg", {
      key: "loading",
      className: "animate-spin -ml-1 mr-2 h-4 w-4",
      fill: "none",
      viewBox: "0 0 24 24"
    }, [
      J.createElement("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4"
      }),
      J.createElement("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      })
    ]),
    i && a === "left" && J.createElement("span", { key: "icon-left" }, i),
    l,
    i && a === "right" && J.createElement("span", { key: "icon-right" }, i)
  ]);
}), KN = J.forwardRef((t, e) => {
  const [r, n] = J.useState(!1);
  return J.useEffect(() => {
    n(!0);
  }, []), r ? /* @__PURE__ */ u.jsx(ZN, { ...t, ref: e }) : /* @__PURE__ */ u.jsx("div", { className: "animate-pulse bg-gray-200 rounded p-4 text-center", children: "Loading Button..." });
}), pt = KN, rc = (t) => {
  const e = (t == null ? void 0 : t.variant) || "primary", r = (t == null ? void 0 : t.size) || "md", n = (t == null ? void 0 : t.shape) || "default", s = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed", o = Mp(e), i = Lp(r), a = Fp(n);
  return `${s} ${o} ${i} ${a}`;
};
function qN(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = $e(t);
  f.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return e.addEventListener("keydown", n, { capture: !0 }), () => e.removeEventListener("keydown", n, { capture: !0 });
  }, [r, e]);
}
var GN = "DismissableLayer", nl = "dismissableLayer.update", YN = "dismissableLayer.pointerDownOutside", XN = "dismissableLayer.focusOutside", Qu, Up = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), so = f.forwardRef(
  (t, e) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: s,
      onFocusOutside: o,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = t, c = f.useContext(Up), [d, p] = f.useState(null), h = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = f.useState({}), y = be(e, (O) => p(O)), m = Array.from(c.layers), [g] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), x = m.indexOf(g), w = d ? m.indexOf(d) : -1, E = c.layersWithOutsidePointerEventsDisabled.size > 0, k = w >= x, C = QN((O) => {
      const R = O.target, L = [...c.branches].some(($) => $.contains(R));
      !k || L || (s == null || s(O), i == null || i(O), O.defaultPrevented || a == null || a());
    }, h), A = ek((O) => {
      const R = O.target;
      [...c.branches].some((L) => L.contains(R)) || (o == null || o(O), i == null || i(O), O.defaultPrevented || a == null || a());
    }, h);
    return qN((O) => {
      w === c.layers.size - 1 && (n == null || n(O), !O.defaultPrevented && a && (O.preventDefault(), a()));
    }, h), f.useEffect(() => {
      if (d)
        return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Qu = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), ed(), () => {
          r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Qu);
        };
    }, [d, h, r, c]), f.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), ed());
    }, [d, c]), f.useEffect(() => {
      const O = () => v({});
      return document.addEventListener(nl, O), () => document.removeEventListener(nl, O);
    }, []), /* @__PURE__ */ u.jsx(
      se.div,
      {
        ...l,
        ref: y,
        style: {
          pointerEvents: E ? k ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: K(t.onFocusCapture, A.onFocusCapture),
        onBlurCapture: K(t.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: K(
          t.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
so.displayName = GN;
var JN = "DismissableLayerBranch", Vp = f.forwardRef((t, e) => {
  const r = f.useContext(Up), n = f.useRef(null), s = be(e, n);
  return f.useEffect(() => {
    const o = n.current;
    if (o)
      return r.branches.add(o), () => {
        r.branches.delete(o);
      };
  }, [r.branches]), /* @__PURE__ */ u.jsx(se.div, { ...t, ref: s });
});
Vp.displayName = JN;
function QN(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = $e(t), n = f.useRef(!1), s = f.useRef(() => {
  });
  return f.useEffect(() => {
    const o = (a) => {
      if (a.target && !n.current) {
        let l = function() {
          $p(
            YN,
            r,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (e.removeEventListener("click", s.current), s.current = l, e.addEventListener("click", s.current, { once: !0 })) : l();
      } else
        e.removeEventListener("click", s.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      e.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(i), e.removeEventListener("pointerdown", o), e.removeEventListener("click", s.current);
    };
  }, [e, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function ek(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = $e(t), n = f.useRef(!1);
  return f.useEffect(() => {
    const s = (o) => {
      o.target && !n.current && $p(XN, r, { originalEvent: o }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", s), () => e.removeEventListener("focusin", s);
  }, [e, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function ed() {
  const t = new CustomEvent(nl);
  document.dispatchEvent(t);
}
function $p(t, e, r, { discrete: n }) {
  const s = r.originalEvent.target, o = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: r });
  e && s.addEventListener(t, e, { once: !0 }), n ? Hl(s, o) : s.dispatchEvent(o);
}
var tk = so, rk = Vp, Ea = "focusScope.autoFocusOnMount", Na = "focusScope.autoFocusOnUnmount", td = { bubbles: !1, cancelable: !0 }, nk = "FocusScope", nc = f.forwardRef((t, e) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: o,
    ...i
  } = t, [a, l] = f.useState(null), c = $e(s), d = $e(o), p = f.useRef(null), h = be(e, (m) => l(m)), v = f.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  f.useEffect(() => {
    if (n) {
      let m = function(E) {
        if (v.paused || !a) return;
        const k = E.target;
        a.contains(k) ? p.current = k : wr(p.current, { select: !0 });
      }, g = function(E) {
        if (v.paused || !a) return;
        const k = E.relatedTarget;
        k !== null && (a.contains(k) || wr(p.current, { select: !0 }));
      }, x = function(E) {
        if (document.activeElement === document.body)
          for (const k of E)
            k.removedNodes.length > 0 && wr(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", g);
      const w = new MutationObserver(x);
      return a && w.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", g), w.disconnect();
      };
    }
  }, [n, a, v.paused]), f.useEffect(() => {
    if (a) {
      nd.add(v);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const g = new CustomEvent(Ea, td);
        a.addEventListener(Ea, c), a.dispatchEvent(g), g.defaultPrevented || (sk(ck(zp(a)), { select: !0 }), document.activeElement === m && wr(a));
      }
      return () => {
        a.removeEventListener(Ea, c), setTimeout(() => {
          const g = new CustomEvent(Na, td);
          a.addEventListener(Na, d), a.dispatchEvent(g), g.defaultPrevented || wr(m ?? document.body, { select: !0 }), a.removeEventListener(Na, d), nd.remove(v);
        }, 0);
      };
    }
  }, [a, c, d, v]);
  const y = f.useCallback(
    (m) => {
      if (!r && !n || v.paused) return;
      const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, x = document.activeElement;
      if (g && x) {
        const w = m.currentTarget, [E, k] = ok(w);
        E && k ? !m.shiftKey && x === k ? (m.preventDefault(), r && wr(E, { select: !0 })) : m.shiftKey && x === E && (m.preventDefault(), r && wr(k, { select: !0 })) : x === w && m.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ u.jsx(se.div, { tabIndex: -1, ...i, ref: h, onKeyDown: y });
});
nc.displayName = nk;
function sk(t, { select: e = !1 } = {}) {
  const r = document.activeElement;
  for (const n of t)
    if (wr(n, { select: e }), document.activeElement !== r) return;
}
function ok(t) {
  const e = zp(t), r = rd(e, t), n = rd(e.reverse(), t);
  return [r, n];
}
function zp(t) {
  const e = [], r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const s = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) e.push(r.currentNode);
  return e;
}
function rd(t, e) {
  for (const r of t)
    if (!ik(r, { upTo: e })) return r;
}
function ik(t, { upTo: e }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (e !== void 0 && t === e) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function ak(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function wr(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const r = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== r && ak(t) && e && t.select();
  }
}
var nd = lk();
function lk() {
  let t = [];
  return {
    add(e) {
      const r = t[0];
      e !== r && (r == null || r.pause()), t = sd(t, e), t.unshift(e);
    },
    remove(e) {
      var r;
      t = sd(t, e), (r = t[0]) == null || r.resume();
    }
  };
}
function sd(t, e) {
  const r = [...t], n = r.indexOf(e);
  return n !== -1 && r.splice(n, 1), r;
}
function ck(t) {
  return t.filter((e) => e.tagName !== "A");
}
var uk = "Portal", sc = f.forwardRef((t, e) => {
  var r;
  const { container: n, ...s } = t, [o, i] = f.useState(!1);
  Et(() => i(!0), []);
  const a = n || o && ((r = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : r.body);
  return a ? Bd.createPortal(/* @__PURE__ */ u.jsx(se.div, { ...s, ref: e }), a) : null;
});
sc.displayName = uk;
var ka = 0;
function Bp() {
  f.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", t[0] ?? od()), document.body.insertAdjacentElement("beforeend", t[1] ?? od()), ka++, () => {
      ka === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), ka--;
    };
  }, []);
}
function od() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", t;
}
var Tr = function() {
  return Tr = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Tr.apply(this, arguments);
};
function dk(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function fk(t, e, r) {
  for (var n = 0, s = e.length, o; n < s; n++)
    (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return t.concat(o || Array.prototype.slice.call(e));
}
var bs = "right-scroll-bar-position", ws = "width-before-scroll-bar", pk = "with-scroll-bars-hidden", hk = "--removed-body-scroll-bar-size";
function Ca(t, e) {
  return typeof t == "function" ? t(e) : t && (t.current = e), t;
}
function mk(t, e) {
  var r = tn(function() {
    return {
      // value
      value: t,
      // last callback
      callback: e,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var s = r.value;
          s !== n && (r.value = n, r.callback(n, s));
        }
      }
    };
  })[0];
  return r.callback = e, r.facade;
}
var gk = typeof window < "u" ? f.useLayoutEffect : f.useEffect, id = /* @__PURE__ */ new WeakMap();
function Wp(t, e) {
  var r = mk(null, function(n) {
    return t.forEach(function(s) {
      return Ca(s, n);
    });
  });
  return gk(function() {
    var n = id.get(r);
    if (n) {
      var s = new Set(n), o = new Set(t), i = r.current;
      s.forEach(function(a) {
        o.has(a) || Ca(a, null);
      }), o.forEach(function(a) {
        s.has(a) || Ca(a, i);
      });
    }
    id.set(r, t);
  }, [t]), r;
}
var di = function() {
  return di = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, di.apply(this, arguments);
};
function vk(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function yk(t) {
  return t;
}
function bk(t, e) {
  e === void 0 && (e = yk);
  var r = [], n = !1, s = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : t;
    },
    useMedium: function(o) {
      var i = e(o, n);
      return r.push(i), function() {
        r = r.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(o);
      }
      r = {
        push: function(a) {
          return o(a);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(o) {
      n = !0;
      var i = [];
      if (r.length) {
        var a = r;
        r = [], a.forEach(o), i = r;
      }
      var l = function() {
        var d = i;
        i = [], d.forEach(o);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), r = {
        push: function(d) {
          i.push(d), c();
        },
        filter: function(d) {
          return i = i.filter(d), r;
        }
      };
    }
  };
  return s;
}
function Hp(t) {
  t === void 0 && (t = {});
  var e = bk(null);
  return e.options = di({ async: !0, ssr: !1 }, t), e;
}
var Zp = function(t) {
  var e = t.sideCar, r = vk(t, ["sideCar"]);
  if (!e)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = e.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return f.createElement(n, di({}, r));
};
Zp.isSideCarExport = !0;
function Kp(t, e) {
  return t.useMedium(e), Zp;
}
var qp = Hp(), Ta = function() {
}, Di = f.forwardRef(function(t, e) {
  var r = f.useRef(null), n = f.useState({
    onScrollCapture: Ta,
    onWheelCapture: Ta,
    onTouchMoveCapture: Ta
  }), s = n[0], o = n[1], i = t.forwardProps, a = t.children, l = t.className, c = t.removeScrollBar, d = t.enabled, p = t.shards, h = t.sideCar, v = t.noIsolation, y = t.inert, m = t.allowPinchZoom, g = t.as, x = g === void 0 ? "div" : g, w = t.gapMode, E = dk(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = h, C = Wp([r, e]), A = Tr(Tr({}, E), s);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(k, { sideCar: qp, removeScrollBar: c, shards: p, noIsolation: v, inert: y, setCallbacks: o, allowPinchZoom: !!m, lockRef: r, gapMode: w }),
    i ? f.cloneElement(f.Children.only(a), Tr(Tr({}, A), { ref: C })) : f.createElement(x, Tr({}, A, { className: l, ref: C }), a)
  );
});
Di.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Di.classNames = {
  fullWidth: ws,
  zeroRight: bs
};
var wk = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function xk() {
  if (!document)
    return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var e = wk();
  return e && t.setAttribute("nonce", e), t;
}
function _k(t, e) {
  t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
}
function Ek(t) {
  var e = document.head || document.getElementsByTagName("head")[0];
  e.appendChild(t);
}
var Nk = function() {
  var t = 0, e = null;
  return {
    add: function(r) {
      t == 0 && (e = xk()) && (_k(e, r), Ek(e)), t++;
    },
    remove: function() {
      t--, !t && e && (e.parentNode && e.parentNode.removeChild(e), e = null);
    }
  };
}, kk = function() {
  var t = Nk();
  return function(e, r) {
    f.useEffect(function() {
      return t.add(e), function() {
        t.remove();
      };
    }, [e && r]);
  };
}, oc = function() {
  var t = kk(), e = function(r) {
    var n = r.styles, s = r.dynamic;
    return t(n, s), null;
  };
  return e;
}, Ck = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Sa = function(t) {
  return parseInt(t || "", 10) || 0;
}, Tk = function(t) {
  var e = window.getComputedStyle(document.body), r = e[t === "padding" ? "paddingLeft" : "marginLeft"], n = e[t === "padding" ? "paddingTop" : "marginTop"], s = e[t === "padding" ? "paddingRight" : "marginRight"];
  return [Sa(r), Sa(n), Sa(s)];
}, Sk = function(t) {
  if (t === void 0 && (t = "margin"), typeof window > "u")
    return Ck;
  var e = Tk(t), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: e[0],
    top: e[1],
    right: e[2],
    gap: Math.max(0, n - r + e[2] - e[0])
  };
}, Rk = oc(), Pn = "data-scroll-locked", Ik = function(t, e, r, n) {
  var s = t.left, o = t.top, i = t.right, a = t.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(pk, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(a, "px ").concat(n, `;
  }
  body[`).concat(Pn, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    e && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(a, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(bs, ` {
    right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(ws, ` {
    margin-right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(bs, " .").concat(bs, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(ws, " .").concat(ws, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Pn, `] {
    `).concat(hk, ": ").concat(a, `px;
  }
`);
}, ad = function() {
  var t = parseInt(document.body.getAttribute(Pn) || "0", 10);
  return isFinite(t) ? t : 0;
}, jk = function() {
  f.useEffect(function() {
    return document.body.setAttribute(Pn, (ad() + 1).toString()), function() {
      var t = ad() - 1;
      t <= 0 ? document.body.removeAttribute(Pn) : document.body.setAttribute(Pn, t.toString());
    };
  }, []);
}, Gp = function(t) {
  var e = t.noRelative, r = t.noImportant, n = t.gapMode, s = n === void 0 ? "margin" : n;
  jk();
  var o = f.useMemo(function() {
    return Sk(s);
  }, [s]);
  return f.createElement(Rk, { styles: Ik(o, !e, s, r ? "" : "!important") });
}, sl = !1;
if (typeof window < "u")
  try {
    var Eo = Object.defineProperty({}, "passive", {
      get: function() {
        return sl = !0, !0;
      }
    });
    window.addEventListener("test", Eo, Eo), window.removeEventListener("test", Eo, Eo);
  } catch {
    sl = !1;
  }
var yn = sl ? { passive: !1 } : !1, Pk = function(t) {
  return t.tagName === "TEXTAREA";
}, Yp = function(t, e) {
  var r = window.getComputedStyle(t);
  return (
    // not-not-scrollable
    r[e] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Pk(t) && r[e] === "visible")
  );
}, Ok = function(t) {
  return Yp(t, "overflowY");
}, Ak = function(t) {
  return Yp(t, "overflowX");
}, ld = function(t, e) {
  var r = e.ownerDocument, n = e;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var s = Xp(t, n);
    if (s) {
      var o = Jp(t, n), i = o[1], a = o[2];
      if (i > a)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, Dk = function(t) {
  var e = t.scrollTop, r = t.scrollHeight, n = t.clientHeight;
  return [
    e,
    r,
    n
  ];
}, Mk = function(t) {
  var e = t.scrollLeft, r = t.scrollWidth, n = t.clientWidth;
  return [
    e,
    r,
    n
  ];
}, Xp = function(t, e) {
  return t === "v" ? Ok(e) : Ak(e);
}, Jp = function(t, e) {
  return t === "v" ? Dk(e) : Mk(e);
}, Lk = function(t, e) {
  return t === "h" && e === "rtl" ? -1 : 1;
}, Fk = function(t, e, r, n, s) {
  var o = Lk(t, window.getComputedStyle(e).direction), i = o * n, a = r.target, l = e.contains(a), c = !1, d = i > 0, p = 0, h = 0;
  do {
    var v = Jp(t, a), y = v[0], m = v[1], g = v[2], x = m - g - o * y;
    (y || x) && Xp(t, a) && (p += x, h += y), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (e.contains(a) || e === a)
  );
  return (d && Math.abs(p) < 1 || !d && Math.abs(h) < 1) && (c = !0), c;
}, No = function(t) {
  return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
}, cd = function(t) {
  return [t.deltaX, t.deltaY];
}, ud = function(t) {
  return t && "current" in t ? t.current : t;
}, Uk = function(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}, Vk = function(t) {
  return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
}, $k = 0, bn = [];
function zk(t) {
  var e = f.useRef([]), r = f.useRef([0, 0]), n = f.useRef(), s = f.useState($k++)[0], o = f.useState(oc)[0], i = f.useRef(t);
  f.useEffect(function() {
    i.current = t;
  }, [t]), f.useEffect(function() {
    if (t.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var m = fk([t.lockRef.current], (t.shards || []).map(ud)).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [t.inert, t.lockRef.current, t.shards]);
  var a = f.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2)
      return !i.current.allowPinchZoom;
    var x = No(m), w = r.current, E = "deltaX" in m ? m.deltaX : w[0] - x[0], k = "deltaY" in m ? m.deltaY : w[1] - x[1], C, A = m.target, O = Math.abs(E) > Math.abs(k) ? "h" : "v";
    if ("touches" in m && O === "h" && A.type === "range")
      return !1;
    var R = ld(O, A);
    if (!R)
      return !0;
    if (R ? C = O : (C = O === "v" ? "h" : "v", R = ld(O, A)), !R)
      return !1;
    if (!n.current && "changedTouches" in m && (E || k) && (n.current = C), !C)
      return !0;
    var L = n.current || C;
    return Fk(L, g, m, L === "h" ? E : k);
  }, []), l = f.useCallback(function(m) {
    var g = m;
    if (!(!bn.length || bn[bn.length - 1] !== o)) {
      var x = "deltaY" in g ? cd(g) : No(g), w = e.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Uk(C.delta, x);
      })[0];
      if (w && w.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!w) {
        var E = (i.current.shards || []).map(ud).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), k = E.length > 0 ? a(g, E[0]) : !i.current.noIsolation;
        k && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = f.useCallback(function(m, g, x, w) {
    var E = { name: m, delta: g, target: x, should: w, shadowParent: Bk(x) };
    e.current.push(E), setTimeout(function() {
      e.current = e.current.filter(function(k) {
        return k !== E;
      });
    }, 1);
  }, []), d = f.useCallback(function(m) {
    r.current = No(m), n.current = void 0;
  }, []), p = f.useCallback(function(m) {
    c(m.type, cd(m), m.target, a(m, t.lockRef.current));
  }, []), h = f.useCallback(function(m) {
    c(m.type, No(m), m.target, a(m, t.lockRef.current));
  }, []);
  f.useEffect(function() {
    return bn.push(o), t.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, yn), document.addEventListener("touchmove", l, yn), document.addEventListener("touchstart", d, yn), function() {
      bn = bn.filter(function(m) {
        return m !== o;
      }), document.removeEventListener("wheel", l, yn), document.removeEventListener("touchmove", l, yn), document.removeEventListener("touchstart", d, yn);
    };
  }, []);
  var v = t.removeScrollBar, y = t.inert;
  return f.createElement(
    f.Fragment,
    null,
    y ? f.createElement(o, { styles: Vk(s) }) : null,
    v ? f.createElement(Gp, { gapMode: t.gapMode }) : null
  );
}
function Bk(t) {
  for (var e = null; t !== null; )
    t instanceof ShadowRoot && (e = t.host, t = t.host), t = t.parentNode;
  return e;
}
const Wk = Kp(qp, zk);
var ic = f.forwardRef(function(t, e) {
  return f.createElement(Di, Tr({}, t, { ref: e, sideCar: Wk }));
});
ic.classNames = Di.classNames;
var Hk = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, wn = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), Co = {}, Ra = 0, Qp = function(t) {
  return t && (t.host || Qp(t.parentNode));
}, Zk = function(t, e) {
  return e.map(function(r) {
    if (t.contains(r))
      return r;
    var n = Qp(r);
    return n && t.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Kk = function(t, e, r, n) {
  var s = Zk(e, Array.isArray(t) ? t : [t]);
  Co[r] || (Co[r] = /* @__PURE__ */ new WeakMap());
  var o = Co[r], i = [], a = /* @__PURE__ */ new Set(), l = new Set(s), c = function(p) {
    !p || a.has(p) || (a.add(p), c(p.parentNode));
  };
  s.forEach(c);
  var d = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(h) {
      if (a.has(h))
        d(h);
      else
        try {
          var v = h.getAttribute(n), y = v !== null && v !== "false", m = (wn.get(h) || 0) + 1, g = (o.get(h) || 0) + 1;
          wn.set(h, m), o.set(h, g), i.push(h), m === 1 && y && ko.set(h, !0), g === 1 && h.setAttribute(r, "true"), y || h.setAttribute(n, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", h, x);
        }
    });
  };
  return d(e), a.clear(), Ra++, function() {
    i.forEach(function(p) {
      var h = wn.get(p) - 1, v = o.get(p) - 1;
      wn.set(p, h), o.set(p, v), h || (ko.has(p) || p.removeAttribute(n), ko.delete(p)), v || p.removeAttribute(r);
    }), Ra--, Ra || (wn = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), Co = {});
  };
}, ac = function(t, e, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), s = Hk(t);
  return s ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live]"))), Kk(n, s, r, "aria-hidden")) : function() {
    return null;
  };
}, eh = "Dialog", [th, rh] = We(eh), [aO, At] = th(eh), nh = "DialogTrigger", sh = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, ...n } = t, s = At(nh, r), o = be(e, s.triggerRef);
    return /* @__PURE__ */ u.jsx(
      se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": uc(s.open),
        ...n,
        ref: o,
        onClick: K(t.onClick, s.onOpenToggle)
      }
    );
  }
);
sh.displayName = nh;
var lc = "DialogPortal", [qk, oh] = th(lc, {
  forceMount: void 0
}), ih = (t) => {
  const { __scopeDialog: e, forceMount: r, children: n, container: s } = t, o = At(lc, e);
  return /* @__PURE__ */ u.jsx(qk, { scope: e, forceMount: r, children: f.Children.map(n, (i) => /* @__PURE__ */ u.jsx(Ye, { present: r || o.open, children: /* @__PURE__ */ u.jsx(sc, { asChild: !0, container: s, children: i }) })) });
};
ih.displayName = lc;
var fi = "DialogOverlay", ah = f.forwardRef(
  (t, e) => {
    const r = oh(fi, t.__scopeDialog), { forceMount: n = r.forceMount, ...s } = t, o = At(fi, t.__scopeDialog);
    return o.modal ? /* @__PURE__ */ u.jsx(Ye, { present: n || o.open, children: /* @__PURE__ */ u.jsx(Gk, { ...s, ref: e }) }) : null;
  }
);
ah.displayName = fi;
var Gk = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, ...n } = t, s = At(fi, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(ic, { as: Lr, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ u.jsx(
        se.div,
        {
          "data-state": uc(s.open),
          ...n,
          ref: e,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), ln = "DialogContent", lh = f.forwardRef(
  (t, e) => {
    const r = oh(ln, t.__scopeDialog), { forceMount: n = r.forceMount, ...s } = t, o = At(ln, t.__scopeDialog);
    return /* @__PURE__ */ u.jsx(Ye, { present: n || o.open, children: o.modal ? /* @__PURE__ */ u.jsx(Yk, { ...s, ref: e }) : /* @__PURE__ */ u.jsx(Xk, { ...s, ref: e }) });
  }
);
lh.displayName = ln;
var Yk = f.forwardRef(
  (t, e) => {
    const r = At(ln, t.__scopeDialog), n = f.useRef(null), s = be(e, r.contentRef, n);
    return f.useEffect(() => {
      const o = n.current;
      if (o) return ac(o);
    }, []), /* @__PURE__ */ u.jsx(
      ch,
      {
        ...t,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: K(t.onCloseAutoFocus, (o) => {
          var i;
          o.preventDefault(), (i = r.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: K(t.onPointerDownOutside, (o) => {
          const i = o.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && o.preventDefault();
        }),
        onFocusOutside: K(
          t.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), Xk = f.forwardRef(
  (t, e) => {
    const r = At(ln, t.__scopeDialog), n = f.useRef(!1), s = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      ch,
      {
        ...t,
        ref: e,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var i, a;
          (i = t.onCloseAutoFocus) == null || i.call(t, o), o.defaultPrevented || (n.current || (a = r.triggerRef.current) == null || a.focus(), o.preventDefault()), n.current = !1, s.current = !1;
        },
        onInteractOutside: (o) => {
          var i, a;
          (i = t.onInteractOutside) == null || i.call(t, o), o.defaultPrevented || (n.current = !0, o.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const l = o.target;
          (a = r.triggerRef.current) != null && a.contains(l) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && s.current && o.preventDefault();
        }
      }
    );
  }
), ch = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: s, onCloseAutoFocus: o, ...i } = t, a = At(ln, r), l = f.useRef(null), c = be(e, l);
    return Bp(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        nc,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: s,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ u.jsx(
            so,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": uc(a.open),
              ...i,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(Qk, { titleId: a.titleId }),
        /* @__PURE__ */ u.jsx(tC, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), cc = "DialogTitle", uh = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, ...n } = t, s = At(cc, r);
    return /* @__PURE__ */ u.jsx(se.h2, { id: s.titleId, ...n, ref: e });
  }
);
uh.displayName = cc;
var dh = "DialogDescription", fh = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, ...n } = t, s = At(dh, r);
    return /* @__PURE__ */ u.jsx(se.p, { id: s.descriptionId, ...n, ref: e });
  }
);
fh.displayName = dh;
var ph = "DialogClose", hh = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, ...n } = t, s = At(ph, r);
    return /* @__PURE__ */ u.jsx(
      se.button,
      {
        type: "button",
        ...n,
        ref: e,
        onClick: K(t.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
hh.displayName = ph;
function uc(t) {
  return t ? "open" : "closed";
}
var mh = "DialogTitleWarning", [Jk, gh] = aE(mh, {
  contentName: ln,
  titleName: cc,
  docsSlug: "dialog"
}), Qk = ({ titleId: t }) => {
  const e = gh(mh), r = `\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;
  return f.useEffect(() => {
    t && (document.getElementById(t) || console.error(r));
  }, [r, t]), null;
}, eC = "DialogDescriptionWarning", tC = ({ contentRef: t, descriptionId: e }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${gh(eC).contentName}}.`;
  return f.useEffect(() => {
    var n;
    const s = (n = t.current) == null ? void 0 : n.getAttribute("aria-describedby");
    e && s && (document.getElementById(e) || console.warn(r));
  }, [r, t, e]), null;
}, rC = sh, nC = ih, sC = ah, oC = lh, iC = uh, aC = fh, vh = hh, lC = "AlertDialog", [cC] = We(lC, [
  rh
]), zr = rh(), uC = "AlertDialogTrigger", dC = f.forwardRef(
  (t, e) => {
    const { __scopeAlertDialog: r, ...n } = t, s = zr(r);
    return /* @__PURE__ */ u.jsx(rC, { ...s, ...n, ref: e });
  }
);
dC.displayName = uC;
var fC = "AlertDialogPortal", yh = (t) => {
  const { __scopeAlertDialog: e, ...r } = t, n = zr(e);
  return /* @__PURE__ */ u.jsx(nC, { ...n, ...r });
};
yh.displayName = fC;
var pC = "AlertDialogOverlay", bh = f.forwardRef(
  (t, e) => {
    const { __scopeAlertDialog: r, ...n } = t, s = zr(r);
    return /* @__PURE__ */ u.jsx(sC, { ...s, ...n, ref: e });
  }
);
bh.displayName = pC;
var On = "AlertDialogContent", [hC, mC] = cC(On), wh = f.forwardRef(
  (t, e) => {
    const { __scopeAlertDialog: r, children: n, ...s } = t, o = zr(r), i = f.useRef(null), a = be(e, i), l = f.useRef(null);
    return /* @__PURE__ */ u.jsx(
      Jk,
      {
        contentName: On,
        titleName: xh,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ u.jsx(hC, { scope: r, cancelRef: l, children: /* @__PURE__ */ u.jsxs(
          oC,
          {
            role: "alertdialog",
            ...o,
            ...s,
            ref: a,
            onOpenAutoFocus: K(s.onOpenAutoFocus, (c) => {
              var d;
              c.preventDefault(), (d = l.current) == null || d.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ u.jsx(Wl, { children: n }),
              /* @__PURE__ */ u.jsx(vC, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
wh.displayName = On;
var xh = "AlertDialogTitle", _h = f.forwardRef(
  (t, e) => {
    const { __scopeAlertDialog: r, ...n } = t, s = zr(r);
    return /* @__PURE__ */ u.jsx(iC, { ...s, ...n, ref: e });
  }
);
_h.displayName = xh;
var Eh = "AlertDialogDescription", Nh = f.forwardRef((t, e) => {
  const { __scopeAlertDialog: r, ...n } = t, s = zr(r);
  return /* @__PURE__ */ u.jsx(aC, { ...s, ...n, ref: e });
});
Nh.displayName = Eh;
var gC = "AlertDialogAction", kh = f.forwardRef(
  (t, e) => {
    const { __scopeAlertDialog: r, ...n } = t, s = zr(r);
    return /* @__PURE__ */ u.jsx(vh, { ...s, ...n, ref: e });
  }
);
kh.displayName = gC;
var Ch = "AlertDialogCancel", Th = f.forwardRef(
  (t, e) => {
    const { __scopeAlertDialog: r, ...n } = t, { cancelRef: s } = mC(Ch, r), o = zr(r), i = be(e, s);
    return /* @__PURE__ */ u.jsx(vh, { ...o, ...n, ref: i });
  }
);
Th.displayName = Ch;
var vC = ({ contentRef: t }) => {
  const e = `\`${On}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${On}\` by passing a \`${Eh}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${On}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return f.useEffect(() => {
    var r;
    document.getElementById(
      (r = t.current) == null ? void 0 : r.getAttribute("aria-describedby")
    ) || console.warn(e);
  }, [e, t]), null;
}, yC = yh, Sh = bh, Rh = wh, Ih = kh, jh = Th, Ph = _h, Oh = Nh;
const bC = yC, Ah = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Sh,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: r
  }
));
Ah.displayName = Sh.displayName;
const wC = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsxs(bC, { children: [
  /* @__PURE__ */ u.jsx(Ah, {}),
  /* @__PURE__ */ u.jsx(
    Rh,
    {
      ref: r,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...e
    }
  )
] }));
wC.displayName = Rh.displayName;
const xC = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Ph,
  {
    ref: r,
    className: M("text-lg font-semibold", t),
    ...e
  }
));
xC.displayName = Ph.displayName;
const _C = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Oh,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", t),
    ...e
  }
));
_C.displayName = Oh.displayName;
const EC = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Ih,
  {
    ref: r,
    className: M(rc(), t),
    ...e
  }
));
EC.displayName = Ih.displayName;
const NC = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  jh,
  {
    ref: r,
    className: M(
      rc({ variant: "outline" }),
      "mt-2 sm:mt-0",
      t
    ),
    ...e
  }
));
NC.displayName = jh.displayName;
var kC = "AspectRatio", CC = f.forwardRef(
  (t, e) => {
    const { ratio: r = 1 / 1, style: n, ...s } = t;
    return /* @__PURE__ */ u.jsx(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / r}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ u.jsx(
          se.div,
          {
            ...s,
            ref: e,
            style: {
              ...n,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
CC.displayName = kC;
var dc = "Avatar", [TC] = We(dc), [SC, Dh] = TC(dc), Mh = f.forwardRef(
  (t, e) => {
    const { __scopeAvatar: r, ...n } = t, [s, o] = f.useState("idle");
    return /* @__PURE__ */ u.jsx(
      SC,
      {
        scope: r,
        imageLoadingStatus: s,
        onImageLoadingStatusChange: o,
        children: /* @__PURE__ */ u.jsx(se.span, { ...n, ref: e })
      }
    );
  }
);
Mh.displayName = dc;
var Lh = "AvatarImage", Fh = f.forwardRef(
  (t, e) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: s = () => {
    }, ...o } = t, i = Dh(Lh, r), a = RC(n), l = $e((c) => {
      s(c), i.onImageLoadingStatusChange(c);
    });
    return Et(() => {
      a !== "idle" && l(a);
    }, [a, l]), a === "loaded" ? /* @__PURE__ */ u.jsx(se.img, { ...o, ref: e, src: n }) : null;
  }
);
Fh.displayName = Lh;
var Uh = "AvatarFallback", Vh = f.forwardRef(
  (t, e) => {
    const { __scopeAvatar: r, delayMs: n, ...s } = t, o = Dh(Uh, r), [i, a] = f.useState(n === void 0);
    return f.useEffect(() => {
      if (n !== void 0) {
        const l = window.setTimeout(() => a(!0), n);
        return () => window.clearTimeout(l);
      }
    }, [n]), i && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ u.jsx(se.span, { ...s, ref: e }) : null;
  }
);
Vh.displayName = Uh;
function RC(t) {
  const [e, r] = f.useState("idle");
  return Et(() => {
    if (!t) {
      r("error");
      return;
    }
    let n = !0;
    const s = new window.Image(), o = (i) => () => {
      n && r(i);
    };
    return r("loading"), s.onload = o("loaded"), s.onerror = o("error"), s.src = t, () => {
      n = !1;
    };
  }, [t]), e;
}
var $h = Mh, zh = Fh, Bh = Vh;
const IC = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  $h,
  {
    ref: r,
    className: M(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      t
    ),
    ...e
  }
));
IC.displayName = $h.displayName;
const jC = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  zh,
  {
    ref: r,
    className: M("aspect-square h-full w-full", t),
    ...e
  }
));
jC.displayName = zh.displayName;
const PC = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Bh,
  {
    ref: r,
    className: M(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      t
    ),
    ...e
  }
));
PC.displayName = Bh.displayName;
const OC = (t) => {
  const e = "w-full", r = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl"
  }, n = {
    thin: "font-thin",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black"
  }, s = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }, o = {
    low: "text-gray-600 font-light"
  };
  return M(
    e,
    t.size && r[t.size],
    t.weight && n[t.weight],
    t.align && s[t.align],
    t.emphasis && o[t.emphasis],
    t.italic && "italic",
    t.underline && "underline underline-offset-2"
  );
}, Be = f.forwardRef(
  ({
    as: t = "span",
    size: e,
    weight: r,
    align: n,
    italic: s,
    underline: o,
    emphasis: i,
    className: a,
    children: l,
    ...c
  }, d) => {
    const p = OC({ size: e, weight: r, align: n, italic: s, underline: o, emphasis: i });
    return /* @__PURE__ */ u.jsx(
      t,
      {
        ref: d,
        className: M(p, a),
        ...c,
        children: l
      }
    );
  }
), AC = (t, e) => {
  const r = "block", n = {
    default: "",
    container: "container mx-auto px-4 py-8",
    card: "bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow",
    spacing: "space-y-4",
    flex: "flex items-center gap-4",
    grid: "grid grid-cols-2 gap-4",
    responsive: "p-4 md:p-6 lg:p-8",
    interactive: "p-4 border rounded-lg cursor-pointer hover:bg-gray-50",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-2xl",
    animated: "p-4 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
  }, s = {
    sm: "p-2 text-sm",
    md: "p-4 text-base",
    lg: "p-6 text-lg",
    xl: "p-8 text-xl"
  };
  return `${r} ${n[t]} ${s[e]}`;
}, DC = he(({
  variant: t = "default",
  size: e = "md",
  className: r,
  boxItem: n,
  ...s
}, o) => {
  const i = AC(t, e), a = r ? `${i} ${r}` : i;
  return f.createElement("div", {
    ref: o,
    className: a,
    ...s
  }, n);
});
DC.displayName = "Box";
function MC(...t) {
  return t.filter(Boolean).join(" ");
}
const LC = ({ children: t }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: t }), FC = ({ children: t, className: e, ...r }) => /* @__PURE__ */ u.jsx("div", { className: MC("w-80", e), ...r, children: t }), UC = ({ children: t, className: e, ...r }) => /* @__PURE__ */ u.jsx("div", { className: e, ...r, children: t }), VC = f.forwardRef(({ ...t }, e) => /* @__PURE__ */ u.jsx("nav", { ref: e, "aria-label": "breadcrumb", ...t }));
VC.displayName = "Breadcrumb";
const $C = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  "ol",
  {
    ref: r,
    className: M(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      t
    ),
    ...e
  }
));
$C.displayName = "BreadcrumbList";
const zC = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  "li",
  {
    ref: r,
    className: M("inline-flex items-center gap-1.5", t),
    ...e
  }
));
zC.displayName = "BreadcrumbItem";
const BC = f.forwardRef(({ asChild: t, className: e, ...r }, n) => {
  const s = t ? Lr : "a";
  return /* @__PURE__ */ u.jsx(
    s,
    {
      ref: n,
      className: M("transition-colors hover:text-foreground", e),
      ...r
    }
  );
});
BC.displayName = "BreadcrumbLink";
const WC = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  "span",
  {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: M("font-normal text-foreground", t),
    ...e
  }
));
WC.displayName = "BreadcrumbPage";
const Wh = ({
  className: t,
  ...e
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("flex h-9 w-9 items-center justify-center", t),
    ...e,
    children: [
      /* @__PURE__ */ u.jsx(Ql, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Wh.displayName = "BreadcrumbElipssis";
const HC = (t, e) => {
  const r = "flex items-center", n = {
    default: "text-gray-700",
    minimal: "text-gray-600",
    bordered: "text-gray-700 border border-gray-200 rounded-lg px-3 py-2",
    filled: "text-gray-700 bg-gray-50 rounded-lg px-3 py-2",
    gradient: "text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg px-3 py-2",
    outlined: "text-gray-700 border-2 border-gray-300 rounded-lg px-3 py-2"
  }, s = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };
  return `${r} ${n[t]} ${s[e]}`;
}, ZC = (t) => {
  const e = { className: "text-gray-400" };
  switch (t) {
    case "slash":
      return /* @__PURE__ */ u.jsx(tN, { ...e, className: "w-4 h-4 text-gray-400" });
    case "chevron":
      return /* @__PURE__ */ u.jsx(Fo, { ...e, className: "w-4 h-4 text-gray-400" });
    case "arrow":
      return /* @__PURE__ */ u.jsx(WE, { ...e, className: "w-4 h-4 text-gray-400" });
    case "dot":
      return /* @__PURE__ */ u.jsx(QE, { ...e, className: "w-2 h-2 text-gray-400" });
    case "custom":
      return /* @__PURE__ */ u.jsx(Fo, { ...e, className: "w-4 h-4 text-gray-400" });
    case "caret":
      return /* @__PURE__ */ u.jsx(Tp, { ...e, className: "w-4 h-4 text-gray-400" });
    case "double-chevron":
      return /* @__PURE__ */ u.jsx(GE, { ...e, className: "w-4 h-4 text-gray-400" });
    case "triangle":
      return /* @__PURE__ */ u.jsx(sN, { ...e, className: "w-3 h-3 text-gray-400" });
    case "circle":
      return /* @__PURE__ */ u.jsx(Sp, { ...e, className: "w-2 h-2 text-gray-400 fill-current" });
    case "square":
      return /* @__PURE__ */ u.jsx(rN, { ...e, className: "w-2 h-2 text-gray-400 fill-current" });
    case "star":
      return /* @__PURE__ */ u.jsx(nN, { ...e, className: "w-3 h-3 text-gray-400 fill-current" });
    case "heart":
      return /* @__PURE__ */ u.jsx(JE, { ...e, className: "w-3 h-3 text-gray-400 fill-current" });
    case "diamond":
      return /* @__PURE__ */ u.jsx(YE, { ...e, className: "w-3 h-3 text-gray-400 fill-current" });
    case "arrow-up-right":
      return /* @__PURE__ */ u.jsx(ZE, { ...e, className: "w-4 h-4 text-gray-400" });
    case "arrow-down-right":
      return /* @__PURE__ */ u.jsx(zE, { ...e, className: "w-4 h-4 text-gray-400" });
    case "arrow-left-right":
      return /* @__PURE__ */ u.jsx(BE, { ...e, className: "w-4 h-4 text-gray-400" });
    case "arrow-up-down":
      return /* @__PURE__ */ u.jsx(HE, { ...e, className: "w-4 h-4 text-gray-400" });
    case "grip-vertical":
      return /* @__PURE__ */ u.jsx(XE, { ...e, className: "w-3 h-3 text-gray-400" });
    case "more-horizontal":
      return /* @__PURE__ */ u.jsx(Ql, { ...e, className: "w-4 h-4 text-gray-400" });
    case "plus":
      return /* @__PURE__ */ u.jsx(eN, { ...e, className: "w-3 h-3 text-gray-400" });
    default:
      return /* @__PURE__ */ u.jsx(Fo, { ...e, className: "w-4 h-4 text-gray-400" });
  }
};
f.forwardRef(({
  variant: t = "default",
  size: e = "md",
  separatorStyle: r = "chevron",
  breadcrumbList: n = [],
  className: s,
  ...o
}, i) => {
  if (typeof window > "u")
    return /* @__PURE__ */ u.jsx("div", { className: "animate-pulse bg-gray-200 rounded p-4 text-center", children: "Loading Breadcrumb..." });
  const a = Array.isArray(n) ? n : [], l = a.length > 0 ? a : [
    { id: "1", type: "item", title: "Home", href: "/", separator: !1 }
  ], c = HC(t, e), d = "text-blue-600 hover:text-blue-800 transition-colors duration-200", p = "text-gray-900 font-medium";
  return /* @__PURE__ */ u.jsx("nav", { ref: i, "aria-label": "Breadcrumb", className: c, ...o, children: /* @__PURE__ */ u.jsx("ol", { className: "flex items-center flex-wrap gap-1 md:gap-3", children: l.map((h, v) => {
    var y;
    const m = v === l.length - 1, g = h.type === "dropdown" && h.children && h.children.length > 0;
    return /* @__PURE__ */ u.jsxs("li", { className: "flex items-center", children: [
      g ? /* @__PURE__ */ u.jsxs(LC, { children: [
        /* @__PURE__ */ u.jsxs(UC, { className: `${d} flex items-center`, children: [
          /* @__PURE__ */ u.jsx("span", { children: h.title }),
          /* @__PURE__ */ u.jsx(Wh, { className: "ml-1 h-4 w-4" })
        ] }),
        /* @__PURE__ */ u.jsx(FC, { className: "w-48 p-1", children: (y = h.children) == null ? void 0 : y.map((x, w) => /* @__PURE__ */ u.jsx(
          "a",
          {
            href: x.href,
            className: "block cursor-pointer rounded px-2 py-1.5 text-sm hover:bg-gray-100",
            children: x.title
          },
          w
        )) })
      ] }) : /* @__PURE__ */ u.jsx("div", { className: "flex items-center", children: h.href && !m ? /* @__PURE__ */ u.jsx("a", { href: h.href, className: d, children: h.title }) : /* @__PURE__ */ u.jsx("span", { className: m ? p : d, children: h.title }) }),
      !m && /* @__PURE__ */ u.jsx("span", { className: "mx-3 text-gray-400 flex-shrink-0", children: ZC(r) })
    ] }, h.id);
  }) }) });
});
function Mi(t) {
  const e = f.useRef({ value: t, previous: t });
  return f.useMemo(() => (e.current.value !== t && (e.current.previous = e.current.value, e.current.value = t), e.current.previous), [t]);
}
function oo(t) {
  const [e, r] = f.useState(void 0);
  return Et(() => {
    if (t) {
      r({ width: t.offsetWidth, height: t.offsetHeight });
      const n = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const o = s[0];
        let i, a;
        if ("borderBoxSize" in o) {
          const l = o.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, a = c.blockSize;
        } else
          i = t.offsetWidth, a = t.offsetHeight;
        r({ width: i, height: a });
      });
      return n.observe(t, { box: "border-box" }), () => n.unobserve(t);
    } else
      r(void 0);
  }, [t]), e;
}
var fc = "Checkbox", [KC] = We(fc), [qC, GC] = KC(fc), Hh = f.forwardRef(
  (t, e) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: s,
      defaultChecked: o,
      required: i,
      disabled: a,
      value: l = "on",
      onCheckedChange: c,
      ...d
    } = t, [p, h] = f.useState(null), v = be(e, (E) => h(E)), y = f.useRef(!1), m = p ? !!p.closest("form") : !0, [g = !1, x] = gt({
      prop: s,
      defaultProp: o,
      onChange: c
    }), w = f.useRef(g);
    return f.useEffect(() => {
      const E = p == null ? void 0 : p.form;
      if (E) {
        const k = () => x(w.current);
        return E.addEventListener("reset", k), () => E.removeEventListener("reset", k);
      }
    }, [p, x]), /* @__PURE__ */ u.jsxs(qC, { scope: r, state: g, disabled: a, children: [
      /* @__PURE__ */ u.jsx(
        se.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": en(g) ? "mixed" : g,
          "aria-required": i,
          "data-state": qh(g),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...d,
          ref: v,
          onKeyDown: K(t.onKeyDown, (E) => {
            E.key === "Enter" && E.preventDefault();
          }),
          onClick: K(t.onClick, (E) => {
            x((k) => en(k) ? !0 : !k), m && (y.current = E.isPropagationStopped(), y.current || E.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ u.jsx(
        YC,
        {
          control: p,
          bubbles: !y.current,
          name: n,
          value: l,
          checked: g,
          required: i,
          disabled: a,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Hh.displayName = fc;
var Zh = "CheckboxIndicator", Kh = f.forwardRef(
  (t, e) => {
    const { __scopeCheckbox: r, forceMount: n, ...s } = t, o = GC(Zh, r);
    return /* @__PURE__ */ u.jsx(Ye, { present: n || en(o.state) || o.state === !0, children: /* @__PURE__ */ u.jsx(
      se.span,
      {
        "data-state": qh(o.state),
        "data-disabled": o.disabled ? "" : void 0,
        ...s,
        ref: e,
        style: { pointerEvents: "none", ...t.style }
      }
    ) });
  }
);
Kh.displayName = Zh;
var YC = (t) => {
  const { control: e, checked: r, bubbles: n = !0, ...s } = t, o = f.useRef(null), i = Mi(r), a = oo(e);
  return f.useEffect(() => {
    const l = o.current, c = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== r && d) {
      const p = new Event("click", { bubbles: n });
      l.indeterminate = en(r), d.call(l, en(r) ? !1 : r), l.dispatchEvent(p);
    }
  }, [i, r, n]), /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: en(r) ? !1 : r,
      ...s,
      tabIndex: -1,
      ref: o,
      style: {
        ...t.style,
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function en(t) {
  return t === "indeterminate";
}
function qh(t) {
  return en(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
var Gh = Hh, XC = Kh;
const JC = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Gh,
  {
    ref: r,
    className: M(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      t
    ),
    ...e,
    children: /* @__PURE__ */ u.jsx(
      XC,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ u.jsx(KE, { className: "h-4 w-4" })
      }
    )
  }
));
JC.displayName = Gh.displayName;
var QC = "Label", Yh = f.forwardRef((t, e) => /* @__PURE__ */ u.jsx(
  se.label,
  {
    ...t,
    ref: e,
    onMouseDown: (r) => {
      var n;
      r.target.closest("button, input, select, textarea") || ((n = t.onMouseDown) == null || n.call(t, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
Yh.displayName = QC;
var Xh = Yh;
const eT = $r(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Jh = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Xh,
  {
    ref: r,
    className: M(eT(), t),
    ...e
  }
));
Jh.displayName = Xh.displayName;
he(
  ({ image: t, label: e, ...r }, n) => /* @__PURE__ */ u.jsxs(
    Be,
    {
      className: "dark:hover:shadow-lg-light h-64 rounded-lg border border-gray-100 bg-white hover:border-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700",
      ref: n,
      ...r,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "p-10 flex items-center justify-between rounded-t-md border-b border-gray-200 bg-gray-50 px-5 py-2.5 dark:border-gray-700 dark:bg-gray-800", children: [
          /* @__PURE__ */ u.jsx("span", { className: "text-base font-medium text-gray-900 dark:text-white", children: e }),
          /* @__PURE__ */ u.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ u.jsx(
            "svg",
            {
              className: "h-3.5 w-3.5",
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 18 18",
              children: /* @__PURE__ */ u.jsx(
                "path",
                {
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "flex h-64 items-center justify-center", children: /* @__PURE__ */ u.jsx("div", { className: "relative", children: /* @__PURE__ */ u.jsx("span", { children: t }) }) })
      ]
    }
  )
);
function Ke() {
  return Ke = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Ke.apply(null, arguments);
}
function Pr(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(n) {
    if (t == null || t(n), r === !1 || !n.defaultPrevented) return e == null ? void 0 : e(n);
  };
}
function tT(t, e) {
  typeof t == "function" ? t(e) : t != null && (t.current = e);
}
function Qh(...t) {
  return (e) => t.forEach(
    (r) => tT(r, e)
  );
}
function Kn(...t) {
  return Hs(Qh(...t), t);
}
function rT(t, e = []) {
  let r = [];
  function n(o, i) {
    const a = /* @__PURE__ */ zo(i), l = r.length;
    r = [
      ...r,
      i
    ];
    function c(p) {
      const { scope: h, children: v, ...y } = p, m = (h == null ? void 0 : h[t][l]) || a, g = Bo(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ Ce(m.Provider, {
        value: g
      }, v);
    }
    function d(p, h) {
      const v = (h == null ? void 0 : h[t][l]) || a, y = xl(v);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${o}\``);
    }
    return c.displayName = o + "Provider", [
      c,
      d
    ];
  }
  const s = () => {
    const o = r.map((i) => /* @__PURE__ */ zo(i));
    return function(i) {
      const a = (i == null ? void 0 : i[t]) || o;
      return Bo(
        () => ({
          [`__scope${t}`]: {
            ...i,
            [t]: a
          }
        }),
        [
          i,
          a
        ]
      );
    };
  };
  return s.scopeName = t, [
    n,
    nT(s, ...e)
  ];
}
function nT(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const r = () => {
    const n = t.map(
      (s) => ({
        useScope: s(),
        scopeName: s.scopeName
      })
    );
    return function(s) {
      const o = n.reduce((i, { useScope: a, scopeName: l }) => {
        const c = a(s)[`__scope${l}`];
        return {
          ...i,
          ...c
        };
      }, {});
      return Bo(
        () => ({
          [`__scope${e.scopeName}`]: o
        }),
        [
          o
        ]
      );
    };
  };
  return r.scopeName = e.scopeName, r;
}
const ol = globalThis != null && globalThis.document ? zd : () => {
}, sT = f.useId || (() => {
});
let oT = 0;
function Ia(t) {
  const [e, r] = f.useState(sT());
  return ol(() => {
    r(
      (n) => n ?? String(oT++)
    );
  }, [
    t
  ]), t || (e ? `radix-${e}` : "");
}
function cn(t) {
  const e = et(t);
  return qe(() => {
    e.current = t;
  }), Bo(
    () => (...r) => {
      var n;
      return (n = e.current) === null || n === void 0 ? void 0 : n.call(e, ...r);
    },
    []
  );
}
function iT({ prop: t, defaultProp: e, onChange: r = () => {
} }) {
  const [n, s] = aT({
    defaultProp: e,
    onChange: r
  }), o = t !== void 0, i = o ? t : n, a = cn(r), l = Hs((c) => {
    if (o) {
      const d = typeof c == "function" ? c(t) : c;
      d !== t && a(d);
    } else s(c);
  }, [
    o,
    t,
    s,
    a
  ]);
  return [
    i,
    l
  ];
}
function aT({ defaultProp: t, onChange: e }) {
  const r = tn(t), [n] = r, s = et(n), o = cn(e);
  return qe(() => {
    s.current !== n && (o(n), s.current = n);
  }, [
    n,
    s,
    o
  ]), r;
}
const pc = /* @__PURE__ */ he((t, e) => {
  const { children: r, ...n } = t, s = Jr.toArray(r), o = s.find(cT);
  if (o) {
    const i = o.props.children, a = s.map((l) => l === o ? Jr.count(i) > 1 ? Jr.only(null) : /* @__PURE__ */ _s(i) ? i.props.children : null : l);
    return /* @__PURE__ */ Ce(il, Ke({}, n, {
      ref: e
    }), /* @__PURE__ */ _s(i) ? /* @__PURE__ */ El(i, void 0, a) : null);
  }
  return /* @__PURE__ */ Ce(il, Ke({}, n, {
    ref: e
  }), r);
});
pc.displayName = "Slot";
const il = /* @__PURE__ */ he((t, e) => {
  const { children: r, ...n } = t;
  return /* @__PURE__ */ _s(r) ? /* @__PURE__ */ El(r, {
    ...uT(n, r.props),
    ref: e ? Qh(e, r.ref) : r.ref
  }) : Jr.count(r) > 1 ? Jr.only(null) : null;
});
il.displayName = "SlotClone";
const lT = ({ children: t }) => /* @__PURE__ */ Ce($d, null, t);
function cT(t) {
  return /* @__PURE__ */ _s(t) && t.type === lT;
}
function uT(t, e) {
  const r = {
    ...e
  };
  for (const n in e) {
    const s = t[n], o = e[n];
    /^on[A-Z]/.test(n) ? s && o ? r[n] = (...i) => {
      o(...i), s(...i);
    } : s && (r[n] = s) : n === "style" ? r[n] = {
      ...s,
      ...o
    } : n === "className" && (r[n] = [
      s,
      o
    ].filter(Boolean).join(" "));
  }
  return {
    ...t,
    ...r
  };
}
const dT = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Br = dT.reduce((t, e) => {
  const r = /* @__PURE__ */ he((n, s) => {
    const { asChild: o, ...i } = n, a = o ? pc : e;
    return qe(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ Ce(a, Ke({}, i, {
      ref: s
    }));
  });
  return r.displayName = `Primitive.${e}`, {
    ...t,
    [e]: r
  };
}, {});
function fT(t, e) {
  t && Wd(
    () => t.dispatchEvent(e)
  );
}
function pT(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(t);
  qe(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return e.addEventListener("keydown", n), () => e.removeEventListener("keydown", n);
  }, [
    r,
    e
  ]);
}
const al = "dismissableLayer.update", hT = "dismissableLayer.pointerDownOutside", mT = "dismissableLayer.focusOutside";
let dd;
const gT = /* @__PURE__ */ zo({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), vT = /* @__PURE__ */ he((t, e) => {
  var r;
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: s, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: a, onDismiss: l, ...c } = t, d = xl(gT), [p, h] = tn(null), v = (r = p == null ? void 0 : p.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, y] = tn({}), m = Kn(
    e,
    (R) => h(R)
  ), g = Array.from(d.layers), [x] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = g.indexOf(x), E = p ? g.indexOf(p) : -1, k = d.layersWithOutsidePointerEventsDisabled.size > 0, C = E >= w, A = yT((R) => {
    const L = R.target, $ = [
      ...d.branches
    ].some(
      (oe) => oe.contains(L)
    );
    !C || $ || (o == null || o(R), a == null || a(R), R.defaultPrevented || l == null || l());
  }, v), O = bT((R) => {
    const L = R.target;
    [
      ...d.branches
    ].some(
      ($) => $.contains(L)
    ) || (i == null || i(R), a == null || a(R), R.defaultPrevented || l == null || l());
  }, v);
  return pT((R) => {
    E === d.layers.size - 1 && (s == null || s(R), !R.defaultPrevented && l && (R.preventDefault(), l()));
  }, v), qe(() => {
    if (p)
      return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (dd = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), fd(), () => {
        n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = dd);
      };
  }, [
    p,
    v,
    n,
    d
  ]), qe(() => () => {
    p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), fd());
  }, [
    p,
    d
  ]), qe(() => {
    const R = () => y({});
    return document.addEventListener(al, R), () => document.removeEventListener(al, R);
  }, []), /* @__PURE__ */ Ce(Br.div, Ke({}, c, {
    ref: m,
    style: {
      pointerEvents: k ? C ? "auto" : "none" : void 0,
      ...t.style
    },
    onFocusCapture: Pr(t.onFocusCapture, O.onFocusCapture),
    onBlurCapture: Pr(t.onBlurCapture, O.onBlurCapture),
    onPointerDownCapture: Pr(t.onPointerDownCapture, A.onPointerDownCapture)
  }));
});
function yT(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(t), n = et(!1), s = et(() => {
  });
  return qe(() => {
    const o = (a) => {
      if (a.target && !n.current) {
        let l = function() {
          em(hT, r, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: a
        };
        a.pointerType === "touch" ? (e.removeEventListener("click", s.current), s.current = l, e.addEventListener("click", s.current, {
          once: !0
        })) : l();
      } else
        e.removeEventListener("click", s.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      e.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(i), e.removeEventListener("pointerdown", o), e.removeEventListener("click", s.current);
    };
  }, [
    e,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function bT(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(t), n = et(!1);
  return qe(() => {
    const s = (o) => {
      o.target && !n.current && em(mT, r, {
        originalEvent: o
      }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", s), () => e.removeEventListener("focusin", s);
  }, [
    e,
    r
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function fd() {
  const t = new CustomEvent(al);
  document.dispatchEvent(t);
}
function em(t, e, r, { discrete: n }) {
  const s = r.originalEvent.target, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  e && s.addEventListener(t, e, {
    once: !0
  }), n ? fT(s, o) : s.dispatchEvent(o);
}
const ja = "focusScope.autoFocusOnMount", Pa = "focusScope.autoFocusOnUnmount", pd = {
  bubbles: !1,
  cancelable: !0
}, wT = /* @__PURE__ */ he((t, e) => {
  const { loop: r = !1, trapped: n = !1, onMountAutoFocus: s, onUnmountAutoFocus: o, ...i } = t, [a, l] = tn(null), c = cn(s), d = cn(o), p = et(null), h = Kn(
    e,
    (m) => l(m)
  ), v = et({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  qe(() => {
    if (n) {
      let m = function(E) {
        if (v.paused || !a) return;
        const k = E.target;
        a.contains(k) ? p.current = k : xr(p.current, {
          select: !0
        });
      }, g = function(E) {
        if (v.paused || !a) return;
        const k = E.relatedTarget;
        k !== null && (a.contains(k) || xr(p.current, {
          select: !0
        }));
      }, x = function(E) {
        if (document.activeElement === document.body)
          for (const k of E) k.removedNodes.length > 0 && xr(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", g);
      const w = new MutationObserver(x);
      return a && w.observe(a, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", g), w.disconnect();
      };
    }
  }, [
    n,
    a,
    v.paused
  ]), qe(() => {
    if (a) {
      md.add(v);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const g = new CustomEvent(ja, pd);
        a.addEventListener(ja, c), a.dispatchEvent(g), g.defaultPrevented || (xT(CT(tm(a)), {
          select: !0
        }), document.activeElement === m && xr(a));
      }
      return () => {
        a.removeEventListener(ja, c), setTimeout(() => {
          const g = new CustomEvent(Pa, pd);
          a.addEventListener(Pa, d), a.dispatchEvent(g), g.defaultPrevented || xr(m ?? document.body, {
            select: !0
          }), a.removeEventListener(Pa, d), md.remove(v);
        }, 0);
      };
    }
  }, [
    a,
    c,
    d,
    v
  ]);
  const y = Hs((m) => {
    if (!r && !n || v.paused) return;
    const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, x = document.activeElement;
    if (g && x) {
      const w = m.currentTarget, [E, k] = _T(w);
      E && k ? !m.shiftKey && x === k ? (m.preventDefault(), r && xr(E, {
        select: !0
      })) : m.shiftKey && x === E && (m.preventDefault(), r && xr(k, {
        select: !0
      })) : x === w && m.preventDefault();
    }
  }, [
    r,
    n,
    v.paused
  ]);
  return /* @__PURE__ */ Ce(Br.div, Ke({
    tabIndex: -1
  }, i, {
    ref: h,
    onKeyDown: y
  }));
});
function xT(t, { select: e = !1 } = {}) {
  const r = document.activeElement;
  for (const n of t)
    if (xr(n, {
      select: e
    }), document.activeElement !== r) return;
}
function _T(t) {
  const e = tm(t), r = hd(e, t), n = hd(e.reverse(), t);
  return [
    r,
    n
  ];
}
function tm(t) {
  const e = [], r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const s = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) e.push(r.currentNode);
  return e;
}
function hd(t, e) {
  for (const r of t)
    if (!ET(r, {
      upTo: e
    })) return r;
}
function ET(t, { upTo: e }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (e !== void 0 && t === e) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function NT(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function xr(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const r = document.activeElement;
    t.focus({
      preventScroll: !0
    }), t !== r && NT(t) && e && t.select();
  }
}
const md = kT();
function kT() {
  let t = [];
  return {
    add(e) {
      const r = t[0];
      e !== r && (r == null || r.pause()), t = gd(t, e), t.unshift(e);
    },
    remove(e) {
      var r;
      t = gd(t, e), (r = t[0]) === null || r === void 0 || r.resume();
    }
  };
}
function gd(t, e) {
  const r = [
    ...t
  ], n = r.indexOf(e);
  return n !== -1 && r.splice(n, 1), r;
}
function CT(t) {
  return t.filter(
    (e) => e.tagName !== "A"
  );
}
const TT = /* @__PURE__ */ he((t, e) => {
  var r;
  const { container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...s } = t;
  return n ? /* @__PURE__ */ Bd.createPortal(/* @__PURE__ */ Ce(Br.div, Ke({}, s, {
    ref: e
  })), n) : null;
});
function ST(t, e) {
  return Ey((r, n) => e[r][n] ?? r, t);
}
const Li = (t) => {
  const { present: e, children: r } = t, n = RT(e), s = typeof r == "function" ? r({
    present: n.isPresent
  }) : Jr.only(r), o = Kn(n.ref, s.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ El(s, {
    ref: o
  }) : null;
};
Li.displayName = "Presence";
function RT(t) {
  const [e, r] = tn(), n = et({}), s = et(t), o = et("none"), i = t ? "mounted" : "unmounted", [a, l] = ST(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return qe(() => {
    const c = To(n.current);
    o.current = a === "mounted" ? c : "none";
  }, [
    a
  ]), ol(() => {
    const c = n.current, d = s.current;
    if (d !== t) {
      const p = o.current, h = To(c);
      t ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), s.current = t;
    }
  }, [
    t,
    l
  ]), ol(() => {
    if (e) {
      const c = (p) => {
        const h = To(n.current).includes(p.animationName);
        p.target === e && h && Wd(
          () => l("ANIMATION_END")
        );
      }, d = (p) => {
        p.target === e && (o.current = To(n.current));
      };
      return e.addEventListener("animationstart", d), e.addEventListener("animationcancel", c), e.addEventListener("animationend", c), () => {
        e.removeEventListener("animationstart", d), e.removeEventListener("animationcancel", c), e.removeEventListener("animationend", c);
      };
    } else
      l("ANIMATION_END");
  }, [
    e,
    l
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(a),
    ref: Hs((c) => {
      c && (n.current = getComputedStyle(c)), r(c);
    }, [])
  };
}
function To(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
let Oa = 0;
function IT() {
  qe(() => {
    var t, e;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (t = r[0]) !== null && t !== void 0 ? t : vd()), document.body.insertAdjacentElement("beforeend", (e = r[1]) !== null && e !== void 0 ? e : vd()), Oa++, () => {
      Oa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (n) => n.remove()
      ), Oa--;
    };
  }, []);
}
function vd() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", t;
}
var Sr = function() {
  return Sr = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Sr.apply(this, arguments);
};
function jT(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function PT(t, e, r) {
  for (var n = 0, s = e.length, o; n < s; n++)
    (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return t.concat(o || Array.prototype.slice.call(e));
}
var rm = Hp(), Aa = function() {
}, Fi = f.forwardRef(function(t, e) {
  var r = f.useRef(null), n = f.useState({
    onScrollCapture: Aa,
    onWheelCapture: Aa,
    onTouchMoveCapture: Aa
  }), s = n[0], o = n[1], i = t.forwardProps, a = t.children, l = t.className, c = t.removeScrollBar, d = t.enabled, p = t.shards, h = t.sideCar, v = t.noIsolation, y = t.inert, m = t.allowPinchZoom, g = t.as, x = g === void 0 ? "div" : g, w = jT(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), E = h, k = Wp([r, e]), C = Sr(Sr({}, w), s);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(E, { sideCar: rm, removeScrollBar: c, shards: p, noIsolation: v, inert: y, setCallbacks: o, allowPinchZoom: !!m, lockRef: r }),
    i ? f.cloneElement(f.Children.only(a), Sr(Sr({}, C), { ref: k })) : f.createElement(x, Sr({}, C, { className: l, ref: k }), a)
  );
});
Fi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Fi.classNames = {
  fullWidth: ws,
  zeroRight: bs
};
var ll = !1;
if (typeof window < "u")
  try {
    var So = Object.defineProperty({}, "passive", {
      get: function() {
        return ll = !0, !0;
      }
    });
    window.addEventListener("test", So, So), window.removeEventListener("test", So, So);
  } catch {
    ll = !1;
  }
var xn = ll ? { passive: !1 } : !1, OT = function(t) {
  return t.tagName === "TEXTAREA";
}, nm = function(t, e) {
  var r = window.getComputedStyle(t);
  return (
    // not-not-scrollable
    r[e] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !OT(t) && r[e] === "visible")
  );
}, AT = function(t) {
  return nm(t, "overflowY");
}, DT = function(t) {
  return nm(t, "overflowX");
}, yd = function(t, e) {
  var r = e;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var n = sm(t, r);
    if (n) {
      var s = om(t, r), o = s[1], i = s[2];
      if (o > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, MT = function(t) {
  var e = t.scrollTop, r = t.scrollHeight, n = t.clientHeight;
  return [
    e,
    r,
    n
  ];
}, LT = function(t) {
  var e = t.scrollLeft, r = t.scrollWidth, n = t.clientWidth;
  return [
    e,
    r,
    n
  ];
}, sm = function(t, e) {
  return t === "v" ? AT(e) : DT(e);
}, om = function(t, e) {
  return t === "v" ? MT(e) : LT(e);
}, FT = function(t, e) {
  return t === "h" && e === "rtl" ? -1 : 1;
}, UT = function(t, e, r, n, s) {
  var o = FT(t, window.getComputedStyle(e).direction), i = o * n, a = r.target, l = e.contains(a), c = !1, d = i > 0, p = 0, h = 0;
  do {
    var v = om(t, a), y = v[0], m = v[1], g = v[2], x = m - g - o * y;
    (y || x) && sm(t, a) && (p += x, h += y), a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (e.contains(a) || e === a)
  );
  return (d && p === 0 || !d && h === 0) && (c = !0), c;
}, Ro = function(t) {
  return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
}, bd = function(t) {
  return [t.deltaX, t.deltaY];
}, wd = function(t) {
  return t && "current" in t ? t.current : t;
}, VT = function(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}, $T = function(t) {
  return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
}, zT = 0, _n = [];
function BT(t) {
  var e = f.useRef([]), r = f.useRef([0, 0]), n = f.useRef(), s = f.useState(zT++)[0], o = f.useState(function() {
    return oc();
  })[0], i = f.useRef(t);
  f.useEffect(function() {
    i.current = t;
  }, [t]), f.useEffect(function() {
    if (t.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var m = PT([t.lockRef.current], (t.shards || []).map(wd)).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [t.inert, t.lockRef.current, t.shards]);
  var a = f.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2)
      return !i.current.allowPinchZoom;
    var x = Ro(m), w = r.current, E = "deltaX" in m ? m.deltaX : w[0] - x[0], k = "deltaY" in m ? m.deltaY : w[1] - x[1], C, A = m.target, O = Math.abs(E) > Math.abs(k) ? "h" : "v";
    if ("touches" in m && O === "h" && A.type === "range")
      return !1;
    var R = yd(O, A);
    if (!R)
      return !0;
    if (R ? C = O : (C = O === "v" ? "h" : "v", R = yd(O, A)), !R)
      return !1;
    if (!n.current && "changedTouches" in m && (E || k) && (n.current = C), !C)
      return !0;
    var L = n.current || C;
    return UT(L, g, m, L === "h" ? E : k);
  }, []), l = f.useCallback(function(m) {
    var g = m;
    if (!(!_n.length || _n[_n.length - 1] !== o)) {
      var x = "deltaY" in g ? bd(g) : Ro(g), w = e.current.filter(function(C) {
        return C.name === g.type && C.target === g.target && VT(C.delta, x);
      })[0];
      if (w && w.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!w) {
        var E = (i.current.shards || []).map(wd).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), k = E.length > 0 ? a(g, E[0]) : !i.current.noIsolation;
        k && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = f.useCallback(function(m, g, x, w) {
    var E = { name: m, delta: g, target: x, should: w };
    e.current.push(E), setTimeout(function() {
      e.current = e.current.filter(function(k) {
        return k !== E;
      });
    }, 1);
  }, []), d = f.useCallback(function(m) {
    r.current = Ro(m), n.current = void 0;
  }, []), p = f.useCallback(function(m) {
    c(m.type, bd(m), m.target, a(m, t.lockRef.current));
  }, []), h = f.useCallback(function(m) {
    c(m.type, Ro(m), m.target, a(m, t.lockRef.current));
  }, []);
  f.useEffect(function() {
    return _n.push(o), t.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, xn), document.addEventListener("touchmove", l, xn), document.addEventListener("touchstart", d, xn), function() {
      _n = _n.filter(function(m) {
        return m !== o;
      }), document.removeEventListener("wheel", l, xn), document.removeEventListener("touchmove", l, xn), document.removeEventListener("touchstart", d, xn);
    };
  }, []);
  var v = t.removeScrollBar, y = t.inert;
  return f.createElement(
    f.Fragment,
    null,
    y ? f.createElement(o, { styles: $T(s) }) : null,
    v ? f.createElement(Gp, { gapMode: "margin" }) : null
  );
}
const WT = Kp(rm, BT);
var im = f.forwardRef(function(t, e) {
  return f.createElement(Fi, Sr({}, t, { ref: e, sideCar: WT }));
});
im.classNames = Fi.classNames;
const am = "Dialog", [lm] = rT(am), [HT, Dt] = lm(am), ZT = (t) => {
  const { __scopeDialog: e, children: r, open: n, defaultOpen: s, onOpenChange: o, modal: i = !0 } = t, a = et(null), l = et(null), [c = !1, d] = iT({
    prop: n,
    defaultProp: s,
    onChange: o
  });
  return /* @__PURE__ */ Ce(HT, {
    scope: e,
    triggerRef: a,
    contentRef: l,
    contentId: Ia(),
    titleId: Ia(),
    descriptionId: Ia(),
    open: c,
    onOpenChange: d,
    onOpenToggle: Hs(
      () => d(
        (p) => !p
      ),
      [
        d
      ]
    ),
    modal: i
  }, r);
}, KT = "DialogTrigger", qT = /* @__PURE__ */ he((t, e) => {
  const { __scopeDialog: r, ...n } = t, s = Dt(KT, r), o = Kn(e, s.triggerRef);
  return /* @__PURE__ */ Ce(Br.button, Ke({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": s.open,
    "aria-controls": s.contentId,
    "data-state": hc(s.open)
  }, n, {
    ref: o,
    onClick: Pr(t.onClick, s.onOpenToggle)
  }));
}), cm = "DialogPortal", [GT, um] = lm(cm, {
  forceMount: void 0
}), YT = (t) => {
  const { __scopeDialog: e, forceMount: r, children: n, container: s } = t, o = Dt(cm, e);
  return /* @__PURE__ */ Ce(GT, {
    scope: e,
    forceMount: r
  }, Jr.map(
    n,
    (i) => /* @__PURE__ */ Ce(Li, {
      present: r || o.open
    }, /* @__PURE__ */ Ce(TT, {
      asChild: !0,
      container: s
    }, i))
  ));
}, cl = "DialogOverlay", XT = /* @__PURE__ */ he((t, e) => {
  const r = um(cl, t.__scopeDialog), { forceMount: n = r.forceMount, ...s } = t, o = Dt(cl, t.__scopeDialog);
  return o.modal ? /* @__PURE__ */ Ce(Li, {
    present: n || o.open
  }, /* @__PURE__ */ Ce(JT, Ke({}, s, {
    ref: e
  }))) : null;
}), JT = /* @__PURE__ */ he((t, e) => {
  const { __scopeDialog: r, ...n } = t, s = Dt(cl, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ Ce(im, {
      as: pc,
      allowPinchZoom: !0,
      shards: [
        s.contentRef
      ]
    }, /* @__PURE__ */ Ce(Br.div, Ke({
      "data-state": hc(s.open)
    }, n, {
      ref: e,
      style: {
        pointerEvents: "auto",
        ...n.style
      }
    })))
  );
}), Vs = "DialogContent", QT = /* @__PURE__ */ he((t, e) => {
  const r = um(Vs, t.__scopeDialog), { forceMount: n = r.forceMount, ...s } = t, o = Dt(Vs, t.__scopeDialog);
  return /* @__PURE__ */ Ce(Li, {
    present: n || o.open
  }, o.modal ? /* @__PURE__ */ Ce(eS, Ke({}, s, {
    ref: e
  })) : /* @__PURE__ */ Ce(tS, Ke({}, s, {
    ref: e
  })));
}), eS = /* @__PURE__ */ he((t, e) => {
  const r = Dt(Vs, t.__scopeDialog), n = et(null), s = Kn(e, r.contentRef, n);
  return qe(() => {
    const o = n.current;
    if (o) return ac(o);
  }, []), /* @__PURE__ */ Ce(dm, Ke({}, t, {
    ref: s,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Pr(t.onCloseAutoFocus, (o) => {
      var i;
      o.preventDefault(), (i = r.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: Pr(t.onPointerDownOutside, (o) => {
      const i = o.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
      (i.button === 2 || a) && o.preventDefault();
    }),
    onFocusOutside: Pr(
      t.onFocusOutside,
      (o) => o.preventDefault()
    )
  }));
}), tS = /* @__PURE__ */ he((t, e) => {
  const r = Dt(Vs, t.__scopeDialog), n = et(!1), s = et(!1);
  return /* @__PURE__ */ Ce(dm, Ke({}, t, {
    ref: e,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var i;
      if ((i = t.onCloseAutoFocus) === null || i === void 0 || i.call(t, o), !o.defaultPrevented) {
        var a;
        n.current || (a = r.triggerRef.current) === null || a === void 0 || a.focus(), o.preventDefault();
      }
      n.current = !1, s.current = !1;
    },
    onInteractOutside: (o) => {
      var i, a;
      (i = t.onInteractOutside) === null || i === void 0 || i.call(t, o), o.defaultPrevented || (n.current = !0, o.detail.originalEvent.type === "pointerdown" && (s.current = !0));
      const l = o.target;
      !((a = r.triggerRef.current) === null || a === void 0) && a.contains(l) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && s.current && o.preventDefault();
    }
  }));
}), dm = /* @__PURE__ */ he((t, e) => {
  const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: s, onCloseAutoFocus: o, ...i } = t, a = Dt(Vs, r), l = et(null), c = Kn(e, l);
  return IT(), /* @__PURE__ */ Ce($d, null, /* @__PURE__ */ Ce(wT, {
    asChild: !0,
    loop: !0,
    trapped: n,
    onMountAutoFocus: s,
    onUnmountAutoFocus: o
  }, /* @__PURE__ */ Ce(vT, Ke({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": hc(a.open)
  }, i, {
    ref: c,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
}), rS = "DialogTitle", nS = /* @__PURE__ */ he((t, e) => {
  const { __scopeDialog: r, ...n } = t, s = Dt(rS, r);
  return /* @__PURE__ */ Ce(Br.h2, Ke({
    id: s.titleId
  }, n, {
    ref: e
  }));
}), sS = "DialogDescription", oS = /* @__PURE__ */ he((t, e) => {
  const { __scopeDialog: r, ...n } = t, s = Dt(sS, r);
  return /* @__PURE__ */ Ce(Br.p, Ke({
    id: s.descriptionId
  }, n, {
    ref: e
  }));
}), iS = "DialogClose", aS = /* @__PURE__ */ he((t, e) => {
  const { __scopeDialog: r, ...n } = t, s = Dt(iS, r);
  return /* @__PURE__ */ Ce(Br.button, Ke({
    type: "button"
  }, n, {
    ref: e,
    onClick: Pr(
      t.onClick,
      () => s.onOpenChange(!1)
    )
  }));
});
function hc(t) {
  return t ? "open" : "closed";
}
const lS = ZT, cS = qT, fm = YT, Ui = XT, Vi = QT, $i = nS, zi = oS, mc = aS, uS = lS, xd = cS, dS = fm, fS = mc, pm = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Ui,
  {
    ref: r,
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e
  }
));
pm.displayName = Ui.displayName;
const hm = f.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ u.jsxs(dS, { children: [
  /* @__PURE__ */ u.jsx(pm, {}),
  /* @__PURE__ */ u.jsxs(
    Vi,
    {
      ref: n,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...r,
      children: [
        e,
        /* @__PURE__ */ u.jsxs(mc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ u.jsx(ec, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
hm.displayName = Vi.displayName;
const mm = ({
  className: t,
  ...e
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      t
    ),
    ...e
  }
);
mm.displayName = "DialogHeader";
const gm = ({
  className: t,
  ...e
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
);
gm.displayName = "DialogFooter";
const vm = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  $i,
  {
    ref: r,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      t
    ),
    ...e
  }
));
vm.displayName = $i.displayName;
const ym = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  zi,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", t),
    ...e
  }
));
ym.displayName = zi.displayName;
const pS = {
  sm: "sm:max-w-[300px]",
  md: "sm:max-w-[425px]",
  lg: "sm:max-w-[600px]",
  xl: "sm:max-w-[800px]",
  full: "sm:max-w-[95vw]"
}, hS = {
  default: {
    title: "Dialog",
    description: "",
    actions: [{ label: "Close", variant: "outline", disabled: !1 }]
  },
  confirmation: {
    title: "Confirm Action",
    description: "Are you sure you want to proceed?",
    actions: [
      { label: "Cancel", variant: "outline", disabled: !1 },
      { label: "Confirm", variant: "destructive", disabled: !1 }
    ]
  },
  info: {
    title: "Information",
    description: "Here is some important information.",
    actions: [{ label: "Got it", variant: "primary", disabled: !1 }]
  },
  warning: {
    title: "Warning",
    description: "Please be careful with this action.",
    actions: [
      { label: "Cancel", variant: "outline", disabled: !1 },
      { label: "Continue", variant: "destructive", disabled: !1 }
    ]
  },
  error: {
    title: "Error",
    description: "Something went wrong. Please try again.",
    actions: [{ label: "Close", variant: "destructive", disabled: !1 }]
  }
}, mS = f.memo(({
  open: t,
  onOpenChange: e,
  trigger: r,
  triggerText: n = "Open Dialog",
  triggerVariant: s = "outline",
  title: o,
  description: i,
  children: a,
  actions: l,
  showCloseButton: c = !0,
  closeOnOverlayClick: d = !0,
  closeOnEscape: p = !0,
  size: h = "md",
  contentClassName: v,
  headerClassName: y,
  footerClassName: m,
  type: g = "default",
  loading: x = !1,
  disabled: w = !1
}) => {
  const [E, k] = f.useState(t ?? !1);
  f.useEffect(() => {
    t !== void 0 && k(t);
  }, [t]);
  const C = f.useMemo(() => hS[g], [g]), A = o || C.title, O = i || C.description, R = l || C.actions, L = pS[h], $ = f.useCallback((q) => {
    var pe;
    (pe = q.onClick) == null || pe.call(q);
  }, []), oe = f.useCallback((q) => {
    k(q), e == null || e(q);
  }, [e]), D = f.useCallback((q) => {
    d || q.preventDefault();
  }, [d]), W = f.useCallback((q) => {
    p || q.preventDefault();
  }, [p]), P = f.useMemo(() => r ? /* @__PURE__ */ u.jsx(xd, { asChild: !0, children: r }) : /* @__PURE__ */ u.jsx(xd, { asChild: !0, children: /* @__PURE__ */ u.jsx(pt, { variant: s, disabled: w, children: n }) }), [r, n, s, w]), B = f.useMemo(() => R.length === 0 ? null : /* @__PURE__ */ u.jsx(gm, { className: m, children: R.map((q, pe) => /* @__PURE__ */ u.jsx(
    pt,
    {
      variant: q.variant || "primary",
      onClick: () => $(q),
      disabled: q.disabled || w || x,
      className: x ? "opacity-50" : "",
      children: q.label
    },
    `${q.label}-${pe}`
  )) }), [R, $, w, x, m]), re = f.useMemo(() => a ? /* @__PURE__ */ u.jsx("div", { className: "py-4", children: a }) : null, [a]);
  return /* @__PURE__ */ u.jsxs(uS, { open: E, onOpenChange: oe, children: [
    P,
    /* @__PURE__ */ u.jsxs(
      hm,
      {
        className: `${L} ${v || ""}`,
        onPointerDownOutside: D,
        onEscapeKeyDown: W,
        children: [
          /* @__PURE__ */ u.jsxs(mm, { className: y, children: [
            /* @__PURE__ */ u.jsx(vm, { children: A }),
            O && /* @__PURE__ */ u.jsx(ym, { children: O })
          ] }),
          re,
          B,
          c && /* @__PURE__ */ u.jsx(fS, { asChild: !0, children: /* @__PURE__ */ u.jsx(pt, { variant: "ghost", size: "icon", className: "absolute right-4 top-4", children: /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" }) }) })
        ]
      }
    )
  ] });
});
mS.displayName = "Dialog";
const gS = {
  left: {
    container: "left-0 top-0 h-screen",
    transform: {
      open: "translate-x-0",
      closed: "-translate-x-full"
    }
  },
  right: {
    container: "right-0 top-0 h-screen",
    transform: {
      open: "translate-x-0",
      closed: "translate-x-full"
    }
  },
  top: {
    container: "top-0 left-0 w-screen",
    transform: {
      open: "translate-y-0",
      closed: "-translate-y-full"
    }
  },
  bottom: {
    container: "bottom-0 left-0 w-screen",
    transform: {
      open: "translate-y-0",
      closed: "translate-y-full"
    }
  }
}, vS = {
  sm: {
    horizontal: "w-64",
    vertical: "h-64"
  },
  md: {
    horizontal: "w-80",
    vertical: "h-80"
  },
  lg: {
    horizontal: "w-96",
    vertical: "h-96"
  },
  xl: {
    horizontal: "w-[28rem]",
    vertical: "h-[28rem]"
  },
  full: {
    horizontal: "w-screen",
    vertical: "h-screen"
  }
}, yS = {
  default: {
    title: "Drawer",
    description: "",
    actions: [{ label: "Close", variant: "outline", disabled: !1 }]
  },
  info: {
    title: "Information",
    description: "Here is some important information.",
    actions: [{ label: "Got it", variant: "primary", disabled: !1 }]
  },
  warning: {
    title: "Warning",
    description: "Please be careful with this action.",
    actions: [{ label: "Close", variant: "warning", disabled: !1 }]
  },
  error: {
    title: "Error",
    description: "Something went wrong. Please try again.",
    actions: [{ label: "Close", variant: "destructive", disabled: !1 }]
  },
  success: {
    title: "Success",
    description: "Operation completed successfully.",
    actions: [{ label: "Close", variant: "success", disabled: !1 }]
  }
}, bS = f.memo(({
  open: t,
  onOpenChange: e,
  trigger: r,
  triggerText: n = "Open Drawer",
  triggerVariant: s = "primary",
  title: o,
  description: i,
  children: a,
  header: l,
  footer: c,
  actions: d,
  showCloseButton: p = !0,
  closeOnOverlayClick: h = !0,
  closeOnEscape: v = !0,
  position: y = "left",
  size: m = "md",
  className: g,
  containerClassName: x,
  headerClassName: w,
  footerClassName: E,
  overlayClassName: k,
  type: C = "default",
  loading: A = !1,
  disabled: O = !1
}) => {
  const [R, L] = f.useState(t ?? !1);
  f.useEffect(() => {
    t !== void 0 && L(t);
  }, [t]);
  const $ = f.useMemo(() => yS[C], [C]), oe = o || $.title, D = i || $.description, W = d || $.actions, P = f.useMemo(() => gS[y], [y]), B = f.useMemo(() => vS[m], [m]), re = y === "top" || y === "bottom" ? B.vertical : B.horizontal, q = R ? P.transform.open : P.transform.closed, pe = f.useCallback((Ne) => {
    var Me;
    (Me = Ne.onClick) == null || Me.call(Ne);
  }, []), Z = f.useCallback((Ne) => {
    L(Ne), e == null || e(Ne);
  }, [e]), ge = f.useCallback(() => {
    Z(!1);
  }, [Z]), ke = f.useCallback((Ne) => {
    h && Ne.target === Ne.currentTarget && ge();
  }, [h, ge]), Te = f.useCallback((Ne) => {
    v && Ne.key === "Escape" && ge();
  }, [v, ge]);
  f.useEffect(() => {
    if (R)
      return document.addEventListener("keydown", Te), () => document.removeEventListener("keydown", Te);
  }, [R, Te]);
  const Pe = f.useMemo(() => r ? /* @__PURE__ */ u.jsx("div", { onClick: () => Z(!0), children: r }) : /* @__PURE__ */ u.jsx(
    pt,
    {
      variant: s,
      disabled: O,
      onClick: () => Z(!0),
      children: n
    }
  ), [r, n, s, O, Z]), De = f.useMemo(() => W.length === 0 ? null : /* @__PURE__ */ u.jsx("div", { className: M("flex items-center justify-end gap-2 pt-4 border-t border-gray-200", E), children: W.map((Ne, Me) => /* @__PURE__ */ u.jsx(
    pt,
    {
      variant: Ne.variant || "primary",
      onClick: () => pe(Ne),
      disabled: Ne.disabled || O || A,
      className: A ? "opacity-50" : "",
      children: Ne.label
    },
    `${Ne.label}-${Me}`
  )) }), [W, pe, O, A, E]), Xe = f.useMemo(() => l || /* @__PURE__ */ u.jsxs("div", { className: M("flex items-center justify-between pb-4 border-b border-gray-200", w), children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ u.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: oe }),
      D && /* @__PURE__ */ u.jsx("p", { className: "text-sm text-gray-600 mt-1", children: D })
    ] }),
    p && /* @__PURE__ */ u.jsxs(
      pt,
      {
        variant: "ghost",
        size: "icon",
        onClick: ge,
        className: "text-gray-500 hover:text-gray-700",
        children: [
          /* @__PURE__ */ u.jsx(
            "svg",
            {
              className: "w-4 h-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ u.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            }
          ),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close drawer" })
        ]
      }
    )
  ] }), [l, w, oe, D, p, ge]), Ge = f.useMemo(() => c || De, [c, De]);
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    Pe,
    R && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "div",
        {
          className: M(
            "fixed inset-0 z-40 bg-black/50 transition-opacity",
            k
          ),
          onClick: ke
        }
      ),
      /* @__PURE__ */ u.jsx(
        "div",
        {
          className: M(
            "fixed z-50 bg-white shadow-xl transition-transform duration-300 ease-in-out",
            P.container,
            re,
            q,
            g
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "drawer-title",
          children: /* @__PURE__ */ u.jsxs("div", { className: M("flex flex-col h-full p-6", x), children: [
            Xe,
            /* @__PURE__ */ u.jsx("div", { className: "flex-1 overflow-y-auto py-4", children: a }),
            Ge
          ] })
        }
      )
    ] })
  ] });
});
bS.displayName = "Drawer";
const wS = J.createContext(null), xS = () => J.useContext(wS), _S = f.createContext(
  {}
), Bi = () => {
  const t = f.useContext(_S), e = f.useContext(bm), { getFieldState: r, formState: n } = xS(), s = r(t.name, n);
  if (!t)
    throw new Error("useFormField should be used within <FormField>");
  const { id: o } = e;
  return {
    id: o,
    name: t.name,
    formItemId: `${o}-form-item`,
    formDescriptionId: `${o}-form-item-description`,
    formMessageId: `${o}-form-item-message`,
    ...s
  };
}, bm = f.createContext(
  {}
), ES = f.forwardRef(({ className: t, ...e }, r) => {
  const n = f.useId();
  return /* @__PURE__ */ u.jsx(bm.Provider, { value: { id: n }, children: /* @__PURE__ */ u.jsx("div", { ref: r, className: M("space-y-2", t), ...e }) });
});
ES.displayName = "FormItem";
const NS = f.forwardRef(({ className: t, ...e }, r) => {
  const { error: n, formItemId: s } = Bi();
  return /* @__PURE__ */ u.jsx(
    Jh,
    {
      ref: r,
      className: M(n && "text-destructive", t),
      htmlFor: s,
      ...e
    }
  );
});
NS.displayName = "FormLabel";
const kS = f.forwardRef(({ ...t }, e) => {
  const { error: r, formItemId: n, formDescriptionId: s, formMessageId: o } = Bi();
  return /* @__PURE__ */ u.jsx(
    Lr,
    {
      ref: e,
      id: n,
      "aria-describedby": r ? `${s} ${o}` : `${s}`,
      "aria-invalid": !!r,
      ...t
    }
  );
});
kS.displayName = "FormControl";
const CS = f.forwardRef(({ className: t, ...e }, r) => {
  const { formDescriptionId: n } = Bi();
  return /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: r,
      id: n,
      className: M("text-sm text-muted-foreground", t),
      ...e
    }
  );
});
CS.displayName = "FormDescription";
const TS = f.forwardRef(({ className: t, children: e, ...r }, n) => {
  const { error: s, formMessageId: o } = Bi(), i = s ? String(s == null ? void 0 : s.message) : e;
  return i ? /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: n,
      id: o,
      className: M("text-sm font-medium text-destructive", t),
      ...r,
      children: i
    }
  ) : null;
});
TS.displayName = "FormMessage";
const SS = he(
  ({ className: t, type: e, ...r }, n) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: e,
      className: M(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ref: n,
      ...r
    }
  )
);
SS.displayName = "FormInput";
const RS = he(
  ({ className: t, type: e, ...r }, n) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: e,
      className: M(
        "flex h-10 w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-b-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ref: n,
      ...r
    }
  )
);
RS.displayName = "FormInput2";
const IS = he(
  ({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
    "textarea",
    {
      className: M(
        "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        t
      ),
      ref: r,
      ...e
    }
  )
);
IS.displayName = "FormTextArea";
const jS = he(
  ({ className: t, children: e, ...r }, n) => /* @__PURE__ */ u.jsx("div", { ref: n, className: M("grid gap-2", t), ...r, children: e })
);
jS.displayName = "FormRadioGroup";
const PS = he(
  ({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "radio",
      ref: r,
      className: M(
        "h-4 w-4 rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2",
        t
      ),
      ...e
    }
  )
);
PS.displayName = "FormRadioGroupItem";
const OS = he(
  ({ className: t, children: e, ...r }, n) => /* @__PURE__ */ u.jsx(
    "select",
    {
      ref: n,
      className: M(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...r,
      children: e
    }
  )
);
OS.displayName = "FormSelect";
const AS = he(
  ({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "checkbox",
      ref: r,
      className: M(
        "peer h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-transparent bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-blue-600",
        t
      ),
      ...e
    }
  )
);
AS.displayName = "FormSwitch";
const DS = he(
  ({ className: t, label: e, ...r }, n) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ u.jsx(
      "input",
      {
        type: "checkbox",
        ref: n,
        className: M(
          "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2",
          t
        ),
        ...r
      }
    ),
    e && /* @__PURE__ */ u.jsx("label", { className: "text-sm font-medium text-gray-900", children: e })
  ] })
);
DS.displayName = "FormCheckbox";
const MS = he(
  ({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "date",
      ref: r,
      className: M(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...e
    }
  )
);
MS.displayName = "FormDatePicker";
const LS = he(
  ({ className: t, pressed: e, children: r, ...n }, s) => /* @__PURE__ */ u.jsx(
    "button",
    {
      ref: s,
      type: "button",
      className: M(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-3 py-2",
        e ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900",
        t
      ),
      ...n,
      children: r
    }
  )
);
LS.displayName = "FormToggle";
const FS = he(
  ({ className: t, children: e, ...r }, n) => /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      className: M(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        t
      ),
      ...r,
      children: e
    }
  )
);
FS.displayName = "FormToggleGroup";
he(
  ({ children: t, className: e, ...r }, n) => /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      className: M("grid grid-cols-2 md:grid-cols-3 gap-4", e),
      ...r,
      children: t
    }
  )
);
const US = (t, e, r, n, s) => M(
  t,
  e ? "border-green-500 focus-within:border-green-400 focus-within:border-2" : "",
  r ? "border-red-500 focus-within:border-red-400 focus-within:border-2" : "",
  n ? " w-full" : "w-60",
  s
), _d = (t, e) => M(
  "mt-2 text-sm",
  t ? "text-green-500" : "text-red-500",
  e ? "" : "hidden"
), gc = ({
  children: t,
  sucessMsg: e,
  errorMsg: r,
  fullwidth: n,
  customClasses: s,
  baseClasses: o
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: US(
      o,
      e,
      r,
      n,
      s
    ),
    children: t
  }
), vc = ({ sucessMsg: t, errorMsg: e }) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
  /* @__PURE__ */ u.jsx("p", { className: _d(!0, !!t), children: t }),
  /* @__PURE__ */ u.jsx("p", { className: _d(!1, !!e), children: e })
] }), yc = ({
  prefixElement: t,
  sufixElement: e,
  prefixElementClassName: r,
  sufixElementClassName: n,
  children: s
}) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
  /* @__PURE__ */ u.jsx(
    "div",
    {
      className: M(
        r,
        t ? "" : "hidden"
      ),
      children: t
    }
  ),
  s,
  /* @__PURE__ */ u.jsx(
    "div",
    {
      className: M(n, e ? "" : "hidden"),
      children: e
    }
  )
] }), bc = ({ lable: t, lableClassName: e, required: r, htmlFor: n }) => /* @__PURE__ */ u.jsxs(
  "label",
  {
    className: M(
      "block font-bold mb-2 text-sm text-gray-900 dark:text-white",
      t ? "" : "hidden",
      e
    ),
    htmlFor: n,
    children: [
      t,
      " ",
      r && /* @__PURE__ */ u.jsx("span", { className: "text-red-500", children: "*" })
    ]
  }
), VS = $r([
  "w-full",
  "flex-1",
  "appearence-none",
  "placeholder:text-gray-400",
  "focus:outline-none",
  "bg-white",
  "px-4",
  "py-2",
  "text-base",
  "text-gray-700"
]), Bt = _l(he(
  ({
    className: t,
    prefixElement: e,
    sufixElement: r,
    fullwidth: n,
    disabled: s,
    sucessMsg: o,
    errorMsg: i,
    placeholder: a,
    lable: l,
    lableClassName: c,
    sufixElementClassName: d,
    input2ContainerClassName: p,
    prefixElementClassName: h,
    required: v,
    formMode: y = !1,
    ...m
  }, g) => {
    const x = "flex items-center justify-start focus-within:border-b-gray-500 relative overflow-hidden border-b-2 transition", w = /* @__PURE__ */ u.jsx(
      "input",
      {
        ref: g,
        type: "text",
        autoComplete: "off",
        placeholder: a,
        className: M(VS({ className: t })),
        ...m,
        disabled: s
      }
    ), E = /* @__PURE__ */ u.jsx(
      yc,
      {
        prefixElement: e,
        sufixElement: r,
        prefixElementClassName: h,
        sufixElementClassName: d,
        children: w
      }
    );
    return y ? /* @__PURE__ */ u.jsx(
      "input",
      {
        ref: g,
        type: "text",
        autoComplete: "off",
        placeholder: a,
        className: M(
          "flex h-10 w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-b-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
          o ? "border-b-green-500 focus:border-b-green-500" : "",
          i ? "border-b-red-500 focus:border-b-red-500" : "",
          t
        ),
        ...m,
        disabled: s
      }
    ) : /* @__PURE__ */ u.jsxs("div", { className: M("mb-2", t), children: [
      /* @__PURE__ */ u.jsx(
        bc,
        {
          lable: l,
          lableClassName: c,
          required: v,
          htmlFor: "input2Element"
        }
      ),
      /* @__PURE__ */ u.jsx(
        gc,
        {
          baseClasses: x,
          sucessMsg: o,
          errorMsg: i,
          fullwidth: n,
          customClasses: p,
          children: E
        }
      ),
      /* @__PURE__ */ u.jsx(vc, { sucessMsg: o, errorMsg: i })
    ] });
  }
)), $S = $r([
  "w-full",
  "transition-all",
  "duration-100",
  "outline-none",
  "placeholder:text-gray-400",
  "px-2",
  "bg-transparent",
  "border-gray-300",
  "dark:bg-gray-700"
]);
_l(he(
  ({
    className: t,
    prefixElement: e,
    sufixElement: r,
    fullwidth: n,
    disabled: s,
    sucessMsg: o,
    errorMsg: i,
    placeholder: a,
    lable: l,
    lableClassName: c,
    sufixElementClassName: d,
    inputContainerClassName: p,
    prefixElementClassName: h,
    required: v,
    formMode: y = !1,
    ...m
  }, g) => {
    const x = "flex items-center justify-start border border-gray-200 p-2 rounded-lg focus-within:border-primary-500 focus-within:border-2", w = /* @__PURE__ */ u.jsx(
      "input",
      {
        ref: g,
        type: "text",
        autoComplete: "off",
        placeholder: a,
        className: M($S({ className: t })),
        ...m,
        disabled: s
      }
    ), E = /* @__PURE__ */ u.jsx(
      yc,
      {
        prefixElement: e,
        sufixElement: r,
        prefixElementClassName: h,
        sufixElementClassName: d,
        children: w
      }
    );
    return y ? /* @__PURE__ */ u.jsx(
      "input",
      {
        ref: g,
        type: "text",
        autoComplete: "off",
        placeholder: a,
        className: M(
          "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
          o ? "border-green-500 focus:ring-green-500" : "",
          i ? "border-red-500 focus:ring-red-500" : "",
          t
        ),
        ...m,
        disabled: s
      }
    ) : /* @__PURE__ */ u.jsxs("div", { className: M("mb-2", t), children: [
      /* @__PURE__ */ u.jsx(
        bc,
        {
          lable: l,
          lableClassName: c,
          required: v,
          htmlFor: "inputElement"
        }
      ),
      /* @__PURE__ */ u.jsx(
        gc,
        {
          baseClasses: x,
          sucessMsg: o,
          errorMsg: i,
          fullwidth: n,
          customClasses: p,
          children: E
        }
      ),
      /* @__PURE__ */ u.jsx(vc, { sucessMsg: o, errorMsg: i })
    ] });
  }
));
const zS = he(
  ({ listArray: t, listClassName: e, ...r }, n) => /* @__PURE__ */ u.jsx(
    "ol",
    {
      className: M(
        "max-w-md space-y-1 list-decimal list-inside",
        e
      ),
      ref: n,
      ...r,
      children: t == null ? void 0 : t.map((s) => /* @__PURE__ */ u.jsx("li", { className: s.className, children: s.content }, s.id))
    }
  )
), BS = he(
  ({ listArray: t, listClassName: e, ...r }, n) => /* @__PURE__ */ u.jsx(
    "ul",
    {
      className: M(
        "max-w-md space-y-1 list-disc list-inside",
        e
      ),
      ref: n,
      ...r,
      children: t == null ? void 0 : t.map((s) => /* @__PURE__ */ u.jsx("li", { className: s.className, children: s.content }, s.id))
    }
  )
), WS = he(
  ({ listArray: t, listClassName: e, ...r }, n) => /* @__PURE__ */ u.jsx(
    "ul",
    {
      className: M("max-w-md space-y-1 list-inside", e),
      ref: n,
      ...r,
      children: t == null ? void 0 : t.map((s) => /* @__PURE__ */ u.jsxs(
        "li",
        {
          className: M("flex items-center", s.className),
          children: [
            s.icon,
            s.content
          ]
        },
        s.id
      ))
    }
  )
);
he(
  ({ listArray: t, listClassName: e, varients: r, ...n }, s) => /* @__PURE__ */ u.jsx("div", { ref: s, ...n, children: r === "ordered" ? /* @__PURE__ */ u.jsx(zS, { listArray: t, listClassName: e }) : r === "iconunordered" ? /* @__PURE__ */ u.jsx(
    WS,
    {
      listArray: t,
      listClassName: e
    }
  ) : /* @__PURE__ */ u.jsx(BS, { listArray: t, listClassName: e }) })
);
const wm = ({
  className: t,
  ...e
}) => /* @__PURE__ */ u.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: M("mx-auto flex w-full justify-center", t),
    ...e
  }
);
wm.displayName = "PaginationComp";
const xm = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  "ul",
  {
    ref: r,
    className: M("list-none flex flex-row items-center gap-1", t),
    ...e
  }
));
xm.displayName = "PaginationContent";
const Nn = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx("li", { ref: r, className: M("list-none", t), ...e }));
Nn.displayName = "PaginationItem";
const An = ({
  className: t,
  isActive: e,
  size: r = "icon",
  ...n
}) => /* @__PURE__ */ u.jsx(
  "a",
  {
    "aria-current": e ? "page" : void 0,
    className: M(
      rc({
        variant: e ? "outline" : "ghost",
        size: r
      }),
      t
    ),
    ...n
  }
);
An.displayName = "PaginationLink";
const _m = ({
  className: t,
  children: e,
  ...r
}) => /* @__PURE__ */ u.jsxs(
  An,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: M("gap-1 pl-2.5", t),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx(qE, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { children: "Previous" })
    ]
  }
);
_m.displayName = "PaginationPrevious";
const Em = ({
  className: t,
  children: e,
  ...r
}) => /* @__PURE__ */ u.jsxs(
  An,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: M("gap-1 pr-2.5", t),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { children: "Next" }),
      /* @__PURE__ */ u.jsx(Fo, { className: "h-4 w-4" })
    ]
  }
);
Em.displayName = "PaginationNext";
const Nm = ({
  className: t,
  ...e
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: M("flex h-9 w-9 items-center justify-center", t),
    ...e,
    children: [
      /* @__PURE__ */ u.jsx(Ql, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Nm.displayName = "PaginationEllipsis";
const ct = {
  currentPage: 1,
  totalPages: 10,
  itemsPerPage: 10,
  showFirstLast: !1,
  showPrevNext: !0,
  showEllipsis: !0,
  maxVisiblePages: 5,
  variant: "default",
  size: "md",
  disabled: !1,
  showInfo: !1,
  showPageSize: !1,
  pageSizeOptions: [10, 20, 50, 100]
}, HS = (t, e, r, n) => {
  if (e <= r)
    return Array.from({ length: e }, (i, a) => a + 1);
  const s = [], o = Math.floor(r / 2);
  if (t <= o + 1) {
    for (let i = 1; i <= r - 1; i++)
      s.push(i);
    n && e > r && s.push("ellipsis"), s.push(e);
  } else if (t >= e - o) {
    s.push(1), n && e > r && s.push("ellipsis");
    for (let i = e - r + 2; i <= e; i++)
      s.push(i);
  } else {
    s.push(1), n && s.push("ellipsis");
    for (let i = t - o + 1; i <= t + o - 1; i++)
      s.push(i);
    n && s.push("ellipsis"), s.push(e);
  }
  return s;
}, ZS = (t = "default") => ({
  default: "gap-1",
  minimal: "gap-0.5",
  compact: "gap-0",
  extended: "gap-2"
})[t], KS = (t = "md") => ({
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
})[t], qS = f.memo(({
  currentPage: t = ct.currentPage,
  totalPages: e = ct.totalPages,
  totalItems: r,
  itemsPerPage: n = ct.itemsPerPage,
  showFirstLast: s = ct.showFirstLast,
  showPrevNext: o = ct.showPrevNext,
  showEllipsis: i = ct.showEllipsis,
  maxVisiblePages: a = ct.maxVisiblePages,
  onPageChange: l,
  className: c,
  variant: d = ct.variant,
  size: p = ct.size,
  disabled: h = ct.disabled,
  showInfo: v = ct.showInfo,
  showPageSize: y = ct.showPageSize,
  pageSizeOptions: m = ct.pageSizeOptions,
  onPageSizeChange: g
}) => {
  const x = f.useMemo(() => r && n ? Math.ceil(r / n) : e, [r, n, e]), w = f.useMemo(
    () => HS(t, x, a, i),
    [t, x, a, i]
  ), E = f.useCallback((R) => {
    h || R < 1 || R > x || R === t || l == null || l(R);
  }, [h, x, t, l]), k = f.useCallback((R) => {
    h || g == null || g(R);
  }, [h, g]), C = f.useMemo(() => {
    if (!v || !r) return "";
    const R = (t - 1) * n + 1, L = Math.min(t * n, r);
    return `Showing ${R}-${L} of ${r} items`;
  }, [v, r, t, n]), A = f.useMemo(() => ZS(d), [d]), O = f.useMemo(() => KS(p), [p]);
  return /* @__PURE__ */ u.jsxs("div", { className: M("flex flex-col items-center space-y-4", c), children: [
    /* @__PURE__ */ u.jsx(wm, { children: /* @__PURE__ */ u.jsxs(xm, { className: M(A, O), children: [
      s && t > 1 && /* @__PURE__ */ u.jsx(Nn, { children: /* @__PURE__ */ u.jsx(
        An,
        {
          href: "#",
          onClick: (R) => {
            R.preventDefault(), h || E(1);
          },
          className: h ? "pointer-events-none opacity-50" : "",
          children: "1"
        }
      ) }),
      o && /* @__PURE__ */ u.jsx(Nn, { children: /* @__PURE__ */ u.jsx(
        _m,
        {
          href: "#",
          onClick: (R) => {
            R.preventDefault(), E(t - 1);
          },
          className: h || t <= 1 ? "pointer-events-none opacity-50" : ""
        }
      ) }),
      w.map((R, L) => /* @__PURE__ */ u.jsx(Nn, { children: R === "ellipsis" ? /* @__PURE__ */ u.jsx(Nm, {}) : /* @__PURE__ */ u.jsx(
        An,
        {
          href: "#",
          onClick: ($) => {
            $.preventDefault(), h || E(R);
          },
          isActive: R === t,
          className: h ? "pointer-events-none opacity-50" : "",
          children: R
        }
      ) }, L)),
      o && /* @__PURE__ */ u.jsx(Nn, { children: /* @__PURE__ */ u.jsx(
        Em,
        {
          href: "#",
          onClick: (R) => {
            R.preventDefault(), E(t + 1);
          },
          className: h || t >= x ? "pointer-events-none opacity-50" : ""
        }
      ) }),
      s && t < x && /* @__PURE__ */ u.jsx(Nn, { children: /* @__PURE__ */ u.jsx(
        An,
        {
          href: "#",
          onClick: (R) => {
            R.preventDefault(), h || E(x);
          },
          className: h ? "pointer-events-none opacity-50" : "",
          children: x
        }
      ) })
    ] }) }),
    v && C && /* @__PURE__ */ u.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: C }),
    y && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400", children: [
      /* @__PURE__ */ u.jsx("span", { children: "Items per page:" }),
      /* @__PURE__ */ u.jsx(
        "select",
        {
          value: n,
          onChange: (R) => k(Number(R.target.value)),
          disabled: h,
          className: "rounded border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          children: m.map((R) => /* @__PURE__ */ u.jsx("option", { value: R, children: R }, R))
        }
      )
    ] })
  ] });
});
qS.displayName = "Pagination";
var Da = "rovingFocusGroup.onEntryFocus", GS = { bubbles: !1, cancelable: !0 }, Wi = "RovingFocusGroup", [ul, km, YS] = no(Wi), [XS, Wr] = We(
  Wi,
  [YS]
), [JS, QS] = XS(Wi), Cm = f.forwardRef(
  (t, e) => /* @__PURE__ */ u.jsx(ul.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(ul.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(eR, { ...t, ref: e }) }) })
);
Cm.displayName = Wi;
var eR = f.forwardRef((t, e) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: s = !1,
    dir: o,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: d = !1,
    ...p
  } = t, h = f.useRef(null), v = be(e, h), y = dn(o), [m = null, g] = gt({
    prop: i,
    defaultProp: a,
    onChange: l
  }), [x, w] = f.useState(!1), E = $e(c), k = km(r), C = f.useRef(!1), [A, O] = f.useState(0);
  return f.useEffect(() => {
    const R = h.current;
    if (R)
      return R.addEventListener(Da, E), () => R.removeEventListener(Da, E);
  }, [E]), /* @__PURE__ */ u.jsx(
    JS,
    {
      scope: r,
      orientation: n,
      dir: y,
      loop: s,
      currentTabStopId: m,
      onItemFocus: f.useCallback(
        (R) => g(R),
        [g]
      ),
      onItemShiftTab: f.useCallback(() => w(!0), []),
      onFocusableItemAdd: f.useCallback(
        () => O((R) => R + 1),
        []
      ),
      onFocusableItemRemove: f.useCallback(
        () => O((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ u.jsx(
        se.div,
        {
          tabIndex: x || A === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: v,
          style: { outline: "none", ...t.style },
          onMouseDown: K(t.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: K(t.onFocus, (R) => {
            const L = !C.current;
            if (R.target === R.currentTarget && L && !x) {
              const $ = new CustomEvent(Da, GS);
              if (R.currentTarget.dispatchEvent($), !$.defaultPrevented) {
                const oe = k().filter((B) => B.focusable), D = oe.find((B) => B.active), W = oe.find((B) => B.id === m), P = [D, W, ...oe].filter(
                  Boolean
                ).map((B) => B.ref.current);
                Rm(P, d);
              }
            }
            C.current = !1;
          }),
          onBlur: K(t.onBlur, () => w(!1))
        }
      )
    }
  );
}), Tm = "RovingFocusGroupItem", Sm = f.forwardRef(
  (t, e) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: s = !1,
      tabStopId: o,
      ...i
    } = t, a = Pi(), l = o || a, c = QS(Tm, r), d = c.currentTabStopId === l, p = km(r), { onFocusableItemAdd: h, onFocusableItemRemove: v } = c;
    return f.useEffect(() => {
      if (n)
        return h(), () => v();
    }, [n, h, v]), /* @__PURE__ */ u.jsx(
      ul.ItemSlot,
      {
        scope: r,
        id: l,
        focusable: n,
        active: s,
        children: /* @__PURE__ */ u.jsx(
          se.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...i,
            ref: e,
            onMouseDown: K(t.onMouseDown, (y) => {
              n ? c.onItemFocus(l) : y.preventDefault();
            }),
            onFocus: K(t.onFocus, () => c.onItemFocus(l)),
            onKeyDown: K(t.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const m = nR(y, c.orientation, c.dir);
              if (m !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let g = p().filter((x) => x.focusable).map((x) => x.ref.current);
                if (m === "last") g.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && g.reverse();
                  const x = g.indexOf(y.currentTarget);
                  g = c.loop ? sR(g, x + 1) : g.slice(x + 1);
                }
                setTimeout(() => Rm(g));
              }
            })
          }
        )
      }
    );
  }
);
Sm.displayName = Tm;
var tR = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function rR(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function nR(t, e, r) {
  const n = rR(t.key, r);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return tR[n];
}
function Rm(t, e = !1) {
  const r = document.activeElement;
  for (const n of t)
    if (n === r || (n.focus({ preventScroll: e }), document.activeElement !== r)) return;
}
function sR(t, e) {
  return t.map((r, n) => t[(e + n) % t.length]);
}
var Hi = Cm, Zi = Sm, wc = "Radio", [oR, Im] = We(wc), [iR, aR] = oR(wc), jm = f.forwardRef(
  (t, e) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: s = !1,
      required: o,
      disabled: i,
      value: a = "on",
      onCheck: l,
      ...c
    } = t, [d, p] = f.useState(null), h = be(e, (m) => p(m)), v = f.useRef(!1), y = d ? !!d.closest("form") : !0;
    return /* @__PURE__ */ u.jsxs(iR, { scope: r, checked: s, disabled: i, children: [
      /* @__PURE__ */ u.jsx(
        se.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": s,
          "data-state": Am(s),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: a,
          ...c,
          ref: h,
          onClick: K(t.onClick, (m) => {
            s || l == null || l(), y && (v.current = m.isPropagationStopped(), v.current || m.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ u.jsx(
        lR,
        {
          control: d,
          bubbles: !v.current,
          name: n,
          value: a,
          checked: s,
          required: o,
          disabled: i,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
jm.displayName = wc;
var Pm = "RadioIndicator", Om = f.forwardRef(
  (t, e) => {
    const { __scopeRadio: r, forceMount: n, ...s } = t, o = aR(Pm, r);
    return /* @__PURE__ */ u.jsx(Ye, { present: n || o.checked, children: /* @__PURE__ */ u.jsx(
      se.span,
      {
        "data-state": Am(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...s,
        ref: e
      }
    ) });
  }
);
Om.displayName = Pm;
var lR = (t) => {
  const { control: e, checked: r, bubbles: n = !0, ...s } = t, o = f.useRef(null), i = Mi(r), a = oo(e);
  return f.useEffect(() => {
    const l = o.current, c = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== r && d) {
      const p = new Event("click", { bubbles: n });
      d.call(l, r), l.dispatchEvent(p);
    }
  }, [i, r, n]), /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: r,
      ...s,
      tabIndex: -1,
      ref: o,
      style: {
        ...t.style,
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function Am(t) {
  return t ? "checked" : "unchecked";
}
var cR = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], xc = "RadioGroup", [uR] = We(xc, [
  Wr,
  Im
]), Dm = Wr(), Mm = Im(), [dR, fR] = uR(xc), Lm = f.forwardRef(
  (t, e) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: s,
      value: o,
      required: i = !1,
      disabled: a = !1,
      orientation: l,
      dir: c,
      loop: d = !0,
      onValueChange: p,
      ...h
    } = t, v = Dm(r), y = dn(c), [m, g] = gt({
      prop: o,
      defaultProp: s,
      onChange: p
    });
    return /* @__PURE__ */ u.jsx(
      dR,
      {
        scope: r,
        name: n,
        required: i,
        disabled: a,
        value: m,
        onValueChange: g,
        children: /* @__PURE__ */ u.jsx(
          Hi,
          {
            asChild: !0,
            ...v,
            orientation: l,
            dir: y,
            loop: d,
            children: /* @__PURE__ */ u.jsx(
              se.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": l,
                "data-disabled": a ? "" : void 0,
                dir: y,
                ...h,
                ref: e
              }
            )
          }
        )
      }
    );
  }
);
Lm.displayName = xc;
var Fm = "RadioGroupItem", Um = f.forwardRef(
  (t, e) => {
    const { __scopeRadioGroup: r, disabled: n, ...s } = t, o = fR(Fm, r), i = o.disabled || n, a = Dm(r), l = Mm(r), c = f.useRef(null), d = be(e, c), p = o.value === s.value, h = f.useRef(!1);
    return f.useEffect(() => {
      const v = (m) => {
        cR.includes(m.key) && (h.current = !0);
      }, y = () => h.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ u.jsx(
      Zi,
      {
        asChild: !0,
        ...a,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ u.jsx(
          jm,
          {
            disabled: i,
            required: o.required,
            checked: p,
            ...l,
            ...s,
            name: o.name,
            ref: d,
            onCheck: () => o.onValueChange(s.value),
            onKeyDown: K((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: K(s.onFocus, () => {
              var v;
              h.current && ((v = c.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
Um.displayName = Fm;
var pR = "RadioGroupIndicator", Vm = f.forwardRef(
  (t, e) => {
    const { __scopeRadioGroup: r, ...n } = t, s = Mm(r);
    return /* @__PURE__ */ u.jsx(Om, { ...s, ...n, ref: e });
  }
);
Vm.displayName = pR;
var $m = Lm, zm = Um, hR = Vm;
const mR = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  $m,
  {
    className: M("grid gap-2", t),
    ...e,
    ref: r
  }
));
mR.displayName = $m.displayName;
const gR = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  zm,
  {
    ref: r,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...e,
    children: /* @__PURE__ */ u.jsx(hR, { className: "flex items-center justify-center", children: /* @__PURE__ */ u.jsx(Sp, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
gR.displayName = zm.displayName;
var vR = "Separator", Ed = "horizontal", yR = ["horizontal", "vertical"], Bm = f.forwardRef((t, e) => {
  const { decorative: r, orientation: n = Ed, ...s } = t, o = bR(n) ? n : Ed, i = r ? { role: "none" } : { "aria-orientation": o === "vertical" ? o : void 0, role: "separator" };
  return /* @__PURE__ */ u.jsx(
    se.div,
    {
      "data-orientation": o,
      ...i,
      ...s,
      ref: e
    }
  );
});
Bm.displayName = vR;
function bR(t) {
  return yR.includes(t);
}
var Wm = Bm;
const wR = f.forwardRef(
  ({ className: t, orientation: e = "horizontal", decorative: r = !0, ...n }, s) => /* @__PURE__ */ u.jsx(
    Wm,
    {
      ref: s,
      decorative: r,
      orientation: e,
      className: M(
        "shrink-0 bg-border",
        e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      ...n
    }
  )
);
wR.displayName = Wm.displayName;
function _c(t, [e, r]) {
  return Math.min(r, Math.max(e, t));
}
function xR(t, e) {
  return f.useReducer((r, n) => e[r][n] ?? r, t);
}
var Ec = "ScrollArea", [Hm] = We(Ec), [_R, kt] = Hm(Ec), Zm = f.forwardRef(
  (t, e) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: s,
      scrollHideDelay: o = 600,
      ...i
    } = t, [a, l] = f.useState(null), [c, d] = f.useState(null), [p, h] = f.useState(null), [v, y] = f.useState(null), [m, g] = f.useState(null), [x, w] = f.useState(0), [E, k] = f.useState(0), [C, A] = f.useState(!1), [O, R] = f.useState(!1), L = be(e, (oe) => l(oe)), $ = dn(s);
    return /* @__PURE__ */ u.jsx(
      _R,
      {
        scope: r,
        type: n,
        dir: $,
        scrollHideDelay: o,
        scrollArea: a,
        viewport: c,
        onViewportChange: d,
        content: p,
        onContentChange: h,
        scrollbarX: v,
        onScrollbarXChange: y,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: A,
        scrollbarY: m,
        onScrollbarYChange: g,
        scrollbarYEnabled: O,
        onScrollbarYEnabledChange: R,
        onCornerWidthChange: w,
        onCornerHeightChange: k,
        children: /* @__PURE__ */ u.jsx(
          se.div,
          {
            dir: $,
            ...i,
            ref: L,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": x + "px",
              "--radix-scroll-area-corner-height": E + "px",
              ...t.style
            }
          }
        )
      }
    );
  }
);
Zm.displayName = Ec;
var Km = "ScrollAreaViewport", qm = f.forwardRef(
  (t, e) => {
    const { __scopeScrollArea: r, children: n, nonce: s, ...o } = t, i = kt(Km, r), a = f.useRef(null), l = be(e, a, i.onViewportChange);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ u.jsx(
        se.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...o,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...t.style
          },
          children: /* @__PURE__ */ u.jsx("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: n })
        }
      )
    ] });
  }
);
qm.displayName = Km;
var qt = "ScrollAreaScrollbar", Nc = f.forwardRef(
  (t, e) => {
    const { forceMount: r, ...n } = t, s = kt(qt, t.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: i } = s, a = t.orientation === "horizontal";
    return f.useEffect(() => (a ? o(!0) : i(!0), () => {
      a ? o(!1) : i(!1);
    }), [a, o, i]), s.type === "hover" ? /* @__PURE__ */ u.jsx(ER, { ...n, ref: e, forceMount: r }) : s.type === "scroll" ? /* @__PURE__ */ u.jsx(NR, { ...n, ref: e, forceMount: r }) : s.type === "auto" ? /* @__PURE__ */ u.jsx(Gm, { ...n, ref: e, forceMount: r }) : s.type === "always" ? /* @__PURE__ */ u.jsx(kc, { ...n, ref: e }) : null;
  }
);
Nc.displayName = qt;
var ER = f.forwardRef((t, e) => {
  const { forceMount: r, ...n } = t, s = kt(qt, t.__scopeScrollArea), [o, i] = f.useState(!1);
  return f.useEffect(() => {
    const a = s.scrollArea;
    let l = 0;
    if (a) {
      const c = () => {
        window.clearTimeout(l), i(!0);
      }, d = () => {
        l = window.setTimeout(() => i(!1), s.scrollHideDelay);
      };
      return a.addEventListener("pointerenter", c), a.addEventListener("pointerleave", d), () => {
        window.clearTimeout(l), a.removeEventListener("pointerenter", c), a.removeEventListener("pointerleave", d);
      };
    }
  }, [s.scrollArea, s.scrollHideDelay]), /* @__PURE__ */ u.jsx(Ye, { present: r || o, children: /* @__PURE__ */ u.jsx(
    Gm,
    {
      "data-state": o ? "visible" : "hidden",
      ...n,
      ref: e
    }
  ) });
}), NR = f.forwardRef((t, e) => {
  const { forceMount: r, ...n } = t, s = kt(qt, t.__scopeScrollArea), o = t.orientation === "horizontal", i = qi(() => l("SCROLL_END"), 100), [a, l] = xR("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return f.useEffect(() => {
    if (a === "idle") {
      const c = window.setTimeout(() => l("HIDE"), s.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [a, s.scrollHideDelay, l]), f.useEffect(() => {
    const c = s.viewport, d = o ? "scrollLeft" : "scrollTop";
    if (c) {
      let p = c[d];
      const h = () => {
        const v = c[d];
        p !== v && (l("SCROLL"), i()), p = v;
      };
      return c.addEventListener("scroll", h), () => c.removeEventListener("scroll", h);
    }
  }, [s.viewport, o, l, i]), /* @__PURE__ */ u.jsx(Ye, { present: r || a !== "hidden", children: /* @__PURE__ */ u.jsx(
    kc,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...n,
      ref: e,
      onPointerEnter: K(t.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: K(t.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), Gm = f.forwardRef((t, e) => {
  const r = kt(qt, t.__scopeScrollArea), { forceMount: n, ...s } = t, [o, i] = f.useState(!1), a = t.orientation === "horizontal", l = qi(() => {
    if (r.viewport) {
      const c = r.viewport.offsetWidth < r.viewport.scrollWidth, d = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(a ? c : d);
    }
  }, 10);
  return $n(r.viewport, l), $n(r.content, l), /* @__PURE__ */ u.jsx(Ye, { present: n || o, children: /* @__PURE__ */ u.jsx(
    kc,
    {
      "data-state": o ? "visible" : "hidden",
      ...s,
      ref: e
    }
  ) });
}), kc = f.forwardRef((t, e) => {
  const { orientation: r = "vertical", ...n } = t, s = kt(qt, t.__scopeScrollArea), o = f.useRef(null), i = f.useRef(0), [a, l] = f.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = eg(a.viewport, a.content), d = {
    ...n,
    sizes: a,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (h) => o.current = h,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (h) => i.current = h
  };
  function p(h, v) {
    return IR(h, i.current, a, v);
  }
  return r === "horizontal" ? /* @__PURE__ */ u.jsx(
    kR,
    {
      ...d,
      ref: e,
      onThumbPositionChange: () => {
        if (s.viewport && o.current) {
          const h = s.viewport.scrollLeft, v = Nd(h, a, s.dir);
          o.current.style.transform = `translate3d(${v}px, 0, 0)`;
        }
      },
      onWheelScroll: (h) => {
        s.viewport && (s.viewport.scrollLeft = h);
      },
      onDragScroll: (h) => {
        s.viewport && (s.viewport.scrollLeft = p(h, s.dir));
      }
    }
  ) : r === "vertical" ? /* @__PURE__ */ u.jsx(
    CR,
    {
      ...d,
      ref: e,
      onThumbPositionChange: () => {
        if (s.viewport && o.current) {
          const h = s.viewport.scrollTop, v = Nd(h, a);
          o.current.style.transform = `translate3d(0, ${v}px, 0)`;
        }
      },
      onWheelScroll: (h) => {
        s.viewport && (s.viewport.scrollTop = h);
      },
      onDragScroll: (h) => {
        s.viewport && (s.viewport.scrollTop = p(h));
      }
    }
  ) : null;
}), kR = f.forwardRef((t, e) => {
  const { sizes: r, onSizesChange: n, ...s } = t, o = kt(qt, t.__scopeScrollArea), [i, a] = f.useState(), l = f.useRef(null), c = be(e, l, o.onScrollbarXChange);
  return f.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ u.jsx(
    Xm,
    {
      "data-orientation": "horizontal",
      ...s,
      ref: c,
      sizes: r,
      style: {
        bottom: 0,
        left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ki(r) + "px",
        ...t.style
      },
      onThumbPointerDown: (d) => t.onThumbPointerDown(d.x),
      onDragScroll: (d) => t.onDragScroll(d.x),
      onWheelScroll: (d, p) => {
        if (o.viewport) {
          const h = o.viewport.scrollLeft + d.deltaX;
          t.onWheelScroll(h), rg(h, p) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && o.viewport && i && n({
          content: o.viewport.scrollWidth,
          viewport: o.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: hi(i.paddingLeft),
            paddingEnd: hi(i.paddingRight)
          }
        });
      }
    }
  );
}), CR = f.forwardRef((t, e) => {
  const { sizes: r, onSizesChange: n, ...s } = t, o = kt(qt, t.__scopeScrollArea), [i, a] = f.useState(), l = f.useRef(null), c = be(e, l, o.onScrollbarYChange);
  return f.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ u.jsx(
    Xm,
    {
      "data-orientation": "vertical",
      ...s,
      ref: c,
      sizes: r,
      style: {
        top: 0,
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Ki(r) + "px",
        ...t.style
      },
      onThumbPointerDown: (d) => t.onThumbPointerDown(d.y),
      onDragScroll: (d) => t.onDragScroll(d.y),
      onWheelScroll: (d, p) => {
        if (o.viewport) {
          const h = o.viewport.scrollTop + d.deltaY;
          t.onWheelScroll(h), rg(h, p) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && o.viewport && i && n({
          content: o.viewport.scrollHeight,
          viewport: o.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: hi(i.paddingTop),
            paddingEnd: hi(i.paddingBottom)
          }
        });
      }
    }
  );
}), [TR, Ym] = Hm(qt), Xm = f.forwardRef((t, e) => {
  const {
    __scopeScrollArea: r,
    sizes: n,
    hasThumb: s,
    onThumbChange: o,
    onThumbPointerUp: i,
    onThumbPointerDown: a,
    onThumbPositionChange: l,
    onDragScroll: c,
    onWheelScroll: d,
    onResize: p,
    ...h
  } = t, v = kt(qt, r), [y, m] = f.useState(null), g = be(e, (L) => m(L)), x = f.useRef(null), w = f.useRef(""), E = v.viewport, k = n.content - n.viewport, C = $e(d), A = $e(l), O = qi(p, 10);
  function R(L) {
    if (x.current) {
      const $ = L.clientX - x.current.left, oe = L.clientY - x.current.top;
      c({ x: $, y: oe });
    }
  }
  return f.useEffect(() => {
    const L = ($) => {
      const oe = $.target;
      y != null && y.contains(oe) && C($, k);
    };
    return document.addEventListener("wheel", L, { passive: !1 }), () => document.removeEventListener("wheel", L, { passive: !1 });
  }, [E, y, k, C]), f.useEffect(A, [n, A]), $n(y, O), $n(v.content, O), /* @__PURE__ */ u.jsx(
    TR,
    {
      scope: r,
      scrollbar: y,
      hasThumb: s,
      onThumbChange: $e(o),
      onThumbPointerUp: $e(i),
      onThumbPositionChange: A,
      onThumbPointerDown: $e(a),
      children: /* @__PURE__ */ u.jsx(
        se.div,
        {
          ...h,
          ref: g,
          style: { position: "absolute", ...h.style },
          onPointerDown: K(t.onPointerDown, (L) => {
            L.button === 0 && (L.target.setPointerCapture(L.pointerId), x.current = y.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), R(L));
          }),
          onPointerMove: K(t.onPointerMove, R),
          onPointerUp: K(t.onPointerUp, (L) => {
            const $ = L.target;
            $.hasPointerCapture(L.pointerId) && $.releasePointerCapture(L.pointerId), document.body.style.webkitUserSelect = w.current, v.viewport && (v.viewport.style.scrollBehavior = ""), x.current = null;
          })
        }
      )
    }
  );
}), pi = "ScrollAreaThumb", Jm = f.forwardRef(
  (t, e) => {
    const { forceMount: r, ...n } = t, s = Ym(pi, t.__scopeScrollArea);
    return /* @__PURE__ */ u.jsx(Ye, { present: r || s.hasThumb, children: /* @__PURE__ */ u.jsx(SR, { ref: e, ...n }) });
  }
), SR = f.forwardRef(
  (t, e) => {
    const { __scopeScrollArea: r, style: n, ...s } = t, o = kt(pi, r), i = Ym(pi, r), { onThumbPositionChange: a } = i, l = be(
      e,
      (p) => i.onThumbChange(p)
    ), c = f.useRef(), d = qi(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return f.useEffect(() => {
      const p = o.viewport;
      if (p) {
        const h = () => {
          if (d(), !c.current) {
            const v = jR(p, a);
            c.current = v, a();
          }
        };
        return a(), p.addEventListener("scroll", h), () => p.removeEventListener("scroll", h);
      }
    }, [o.viewport, d, a]), /* @__PURE__ */ u.jsx(
      se.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...s,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...n
        },
        onPointerDownCapture: K(t.onPointerDownCapture, (p) => {
          const h = p.target.getBoundingClientRect(), v = p.clientX - h.left, y = p.clientY - h.top;
          i.onThumbPointerDown({ x: v, y });
        }),
        onPointerUp: K(t.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
Jm.displayName = pi;
var Cc = "ScrollAreaCorner", Qm = f.forwardRef(
  (t, e) => {
    const r = kt(Cc, t.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ u.jsx(RR, { ...t, ref: e }) : null;
  }
);
Qm.displayName = Cc;
var RR = f.forwardRef((t, e) => {
  const { __scopeScrollArea: r, ...n } = t, s = kt(Cc, r), [o, i] = f.useState(0), [a, l] = f.useState(0), c = !!(o && a);
  return $n(s.scrollbarX, () => {
    var d;
    const p = ((d = s.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    s.onCornerHeightChange(p), l(p);
  }), $n(s.scrollbarY, () => {
    var d;
    const p = ((d = s.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    s.onCornerWidthChange(p), i(p);
  }), c ? /* @__PURE__ */ u.jsx(
    se.div,
    {
      ...n,
      ref: e,
      style: {
        width: o,
        height: a,
        position: "absolute",
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...t.style
      }
    }
  ) : null;
});
function hi(t) {
  return t ? parseInt(t, 10) : 0;
}
function eg(t, e) {
  const r = t / e;
  return isNaN(r) ? 0 : r;
}
function Ki(t) {
  const e = eg(t.viewport, t.content), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, n = (t.scrollbar.size - r) * e;
  return Math.max(n, 18);
}
function IR(t, e, r, n = "ltr") {
  const s = Ki(r), o = s / 2, i = e || o, a = s - i, l = r.scrollbar.paddingStart + i, c = r.scrollbar.size - r.scrollbar.paddingEnd - a, d = r.content - r.viewport, p = n === "ltr" ? [0, d] : [d * -1, 0];
  return tg([l, c], p)(t);
}
function Nd(t, e, r = "ltr") {
  const n = Ki(e), s = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = e.scrollbar.size - s, i = e.content - e.viewport, a = o - n, l = r === "ltr" ? [0, i] : [i * -1, 0], c = _c(t, l);
  return tg([0, i], [0, a])(c);
}
function tg(t, e) {
  return (r) => {
    if (t[0] === t[1] || e[0] === e[1]) return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (r - t[0]);
  };
}
function rg(t, e) {
  return t > 0 && t < e;
}
var jR = (t, e = () => {
}) => {
  let r = { left: t.scrollLeft, top: t.scrollTop }, n = 0;
  return function s() {
    const o = { left: t.scrollLeft, top: t.scrollTop }, i = r.left !== o.left, a = r.top !== o.top;
    (i || a) && e(), r = o, n = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(n);
};
function qi(t, e) {
  const r = $e(t), n = f.useRef(0);
  return f.useEffect(() => () => window.clearTimeout(n.current), []), f.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, e);
  }, [r, e]);
}
function $n(t, e) {
  const r = $e(e);
  Et(() => {
    let n = 0;
    if (t) {
      const s = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return s.observe(t), () => {
        window.cancelAnimationFrame(n), s.unobserve(t);
      };
    }
  }, [t, r]);
}
var ng = Zm, PR = qm, OR = Qm;
const AR = f.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ u.jsxs(
  ng,
  {
    ref: n,
    className: M("relative overflow-hidden", t),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx(PR, { className: "h-full w-full rounded-[inherit]", children: e }),
      /* @__PURE__ */ u.jsx(sg, {}),
      /* @__PURE__ */ u.jsx(OR, {})
    ]
  }
));
AR.displayName = ng.displayName;
const sg = f.forwardRef(({ className: t, orientation: e = "vertical", ...r }, n) => /* @__PURE__ */ u.jsx(
  Nc,
  {
    ref: n,
    orientation: e,
    className: M(
      "flex touch-none select-none transition-colors",
      e === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      t
    ),
    ...r,
    children: /* @__PURE__ */ u.jsx(Jm, { className: "relative flex-1 rounded-full bg-border" })
  }
));
sg.displayName = Nc.displayName;
Array.from({ length: 50 }).map(
  (t, e, r) => `v1.2.0-beta.${r.length - e}`
);
const DR = he(
  ({ label: t, children: e, ...r }, n) => /* @__PURE__ */ u.jsxs("div", { ref: n, ...r, children: [
    /* @__PURE__ */ u.jsx(
      "label",
      {
        htmlFor: "select",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        children: t
      }
    ),
    /* @__PURE__ */ u.jsx(
      "select",
      {
        id: "select",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        children: e
      }
    )
  ] })
), MR = he(
  ({ selected: t, children: e, ...r }, n) => /* @__PURE__ */ u.jsx("option", { ref: n, ...r, selected: t, children: e })
);
he(
  ({ items: t, selected: e, ...r }, n) => /* @__PURE__ */ u.jsx(DR, { ref: n, ...r, children: t.map((s) => /* @__PURE__ */ u.jsx(MR, { selected: e === s.id, children: s.itemElement })) })
);
const LR = fm, og = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Ui,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: r
  }
));
og.displayName = Ui.displayName;
const FR = $r(
  "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), UR = f.forwardRef(({ side: t = "right", className: e, children: r, hasCustomBackground: n = !1, ...s }, o) => /* @__PURE__ */ u.jsxs(LR, { children: [
  /* @__PURE__ */ u.jsx(og, {}),
  /* @__PURE__ */ u.jsxs(
    Vi,
    {
      ref: o,
      className: M(
        FR({ side: t }),
        // Add default background only if no custom background is provided
        n ? "" : "bg-background",
        e
      ),
      ...s,
      children: [
        r,
        /* @__PURE__ */ u.jsxs(mc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ u.jsx(ec, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
UR.displayName = Vi.displayName;
const VR = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  $i,
  {
    ref: r,
    className: M("text-lg font-semibold text-foreground", t),
    ...e
  }
));
VR.displayName = $i.displayName;
const $R = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  zi,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", t),
    ...e
  }
));
$R.displayName = zi.displayName;
var ig = ["PageUp", "PageDown"], ag = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], lg = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, qn = "Slider", [dl, zR, BR] = no(qn), [cg] = We(qn, [
  BR
]), [WR, Gi] = cg(qn), ug = f.forwardRef(
  (t, e) => {
    const {
      name: r,
      min: n = 0,
      max: s = 100,
      step: o = 1,
      orientation: i = "horizontal",
      disabled: a = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: c = [n],
      value: d,
      onValueChange: p = () => {
      },
      onValueCommit: h = () => {
      },
      inverted: v = !1,
      ...y
    } = t, m = f.useRef(/* @__PURE__ */ new Set()), g = f.useRef(0), x = i === "horizontal" ? HR : ZR, [w = [], E] = gt({
      prop: d,
      defaultProp: c,
      onChange: (L) => {
        var $;
        ($ = [...m.current][g.current]) == null || $.focus(), p(L);
      }
    }), k = f.useRef(w);
    function C(L) {
      const $ = XR(w, L);
      R(L, $);
    }
    function A(L) {
      R(L, g.current);
    }
    function O() {
      const L = k.current[g.current];
      w[g.current] !== L && h(w);
    }
    function R(L, $, { commit: oe } = { commit: !1 }) {
      const D = tI(o), W = rI(Math.round((L - n) / o) * o + n, D), P = _c(W, [n, s]);
      E((B = []) => {
        const re = GR(B, P, $);
        if (eI(re, l * o)) {
          g.current = re.indexOf(P);
          const q = String(re) !== String(B);
          return q && oe && h(re), q ? re : B;
        } else
          return B;
      });
    }
    return /* @__PURE__ */ u.jsx(
      WR,
      {
        scope: t.__scopeSlider,
        name: r,
        disabled: a,
        min: n,
        max: s,
        valueIndexToChangeRef: g,
        thumbs: m.current,
        values: w,
        orientation: i,
        children: /* @__PURE__ */ u.jsx(dl.Provider, { scope: t.__scopeSlider, children: /* @__PURE__ */ u.jsx(dl.Slot, { scope: t.__scopeSlider, children: /* @__PURE__ */ u.jsx(
          x,
          {
            "aria-disabled": a,
            "data-disabled": a ? "" : void 0,
            ...y,
            ref: e,
            onPointerDown: K(y.onPointerDown, () => {
              a || (k.current = w);
            }),
            min: n,
            max: s,
            inverted: v,
            onSlideStart: a ? void 0 : C,
            onSlideMove: a ? void 0 : A,
            onSlideEnd: a ? void 0 : O,
            onHomeKeyDown: () => !a && R(n, 0, { commit: !0 }),
            onEndKeyDown: () => !a && R(s, w.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: L, direction: $ }) => {
              if (!a) {
                const oe = ig.includes(L.key) || L.shiftKey && ag.includes(L.key) ? 10 : 1, D = g.current, W = w[D], P = o * oe * $;
                R(W + P, D, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
ug.displayName = qn;
var [dg, fg] = cg(qn, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), HR = f.forwardRef(
  (t, e) => {
    const {
      min: r,
      max: n,
      dir: s,
      inverted: o,
      onSlideStart: i,
      onSlideMove: a,
      onSlideEnd: l,
      onStepKeyDown: c,
      ...d
    } = t, [p, h] = f.useState(null), v = be(e, (E) => h(E)), y = f.useRef(), m = dn(s), g = m === "ltr", x = g && !o || !g && o;
    function w(E) {
      const k = y.current || p.getBoundingClientRect(), C = [0, k.width], A = Tc(C, x ? [r, n] : [n, r]);
      return y.current = k, A(E - k.left);
    }
    return /* @__PURE__ */ u.jsx(
      dg,
      {
        scope: t.__scopeSlider,
        startEdge: x ? "left" : "right",
        endEdge: x ? "right" : "left",
        direction: x ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ u.jsx(
          pg,
          {
            dir: m,
            "data-orientation": "horizontal",
            ...d,
            ref: v,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (E) => {
              const k = w(E.clientX);
              i == null || i(k);
            },
            onSlideMove: (E) => {
              const k = w(E.clientX);
              a == null || a(k);
            },
            onSlideEnd: () => {
              y.current = void 0, l == null || l();
            },
            onStepKeyDown: (E) => {
              const k = lg[x ? "from-left" : "from-right"].includes(E.key);
              c == null || c({ event: E, direction: k ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), ZR = f.forwardRef(
  (t, e) => {
    const {
      min: r,
      max: n,
      inverted: s,
      onSlideStart: o,
      onSlideMove: i,
      onSlideEnd: a,
      onStepKeyDown: l,
      ...c
    } = t, d = f.useRef(null), p = be(e, d), h = f.useRef(), v = !s;
    function y(m) {
      const g = h.current || d.current.getBoundingClientRect(), x = [0, g.height], w = Tc(x, v ? [n, r] : [r, n]);
      return h.current = g, w(m - g.top);
    }
    return /* @__PURE__ */ u.jsx(
      dg,
      {
        scope: t.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ u.jsx(
          pg,
          {
            "data-orientation": "vertical",
            ...c,
            ref: p,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (m) => {
              const g = y(m.clientY);
              o == null || o(g);
            },
            onSlideMove: (m) => {
              const g = y(m.clientY);
              i == null || i(g);
            },
            onSlideEnd: () => {
              h.current = void 0, a == null || a();
            },
            onStepKeyDown: (m) => {
              const g = lg[v ? "from-bottom" : "from-top"].includes(m.key);
              l == null || l({ event: m, direction: g ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), pg = f.forwardRef(
  (t, e) => {
    const {
      __scopeSlider: r,
      onSlideStart: n,
      onSlideMove: s,
      onSlideEnd: o,
      onHomeKeyDown: i,
      onEndKeyDown: a,
      onStepKeyDown: l,
      ...c
    } = t, d = Gi(qn, r);
    return /* @__PURE__ */ u.jsx(
      se.span,
      {
        ...c,
        ref: e,
        onKeyDown: K(t.onKeyDown, (p) => {
          p.key === "Home" ? (i(p), p.preventDefault()) : p.key === "End" ? (a(p), p.preventDefault()) : ig.concat(ag).includes(p.key) && (l(p), p.preventDefault());
        }),
        onPointerDown: K(t.onPointerDown, (p) => {
          const h = p.target;
          h.setPointerCapture(p.pointerId), p.preventDefault(), d.thumbs.has(h) ? h.focus() : n(p);
        }),
        onPointerMove: K(t.onPointerMove, (p) => {
          p.target.hasPointerCapture(p.pointerId) && s(p);
        }),
        onPointerUp: K(t.onPointerUp, (p) => {
          const h = p.target;
          h.hasPointerCapture(p.pointerId) && (h.releasePointerCapture(p.pointerId), o(p));
        })
      }
    );
  }
), hg = "SliderTrack", mg = f.forwardRef(
  (t, e) => {
    const { __scopeSlider: r, ...n } = t, s = Gi(hg, r);
    return /* @__PURE__ */ u.jsx(
      se.span,
      {
        "data-disabled": s.disabled ? "" : void 0,
        "data-orientation": s.orientation,
        ...n,
        ref: e
      }
    );
  }
);
mg.displayName = hg;
var fl = "SliderRange", gg = f.forwardRef(
  (t, e) => {
    const { __scopeSlider: r, ...n } = t, s = Gi(fl, r), o = fg(fl, r), i = f.useRef(null), a = be(e, i), l = s.values.length, c = s.values.map(
      (h) => yg(h, s.min, s.max)
    ), d = l > 1 ? Math.min(...c) : 0, p = 100 - Math.max(...c);
    return /* @__PURE__ */ u.jsx(
      se.span,
      {
        "data-orientation": s.orientation,
        "data-disabled": s.disabled ? "" : void 0,
        ...n,
        ref: a,
        style: {
          ...t.style,
          [o.startEdge]: d + "%",
          [o.endEdge]: p + "%"
        }
      }
    );
  }
);
gg.displayName = fl;
var pl = "SliderThumb", vg = f.forwardRef(
  (t, e) => {
    const r = zR(t.__scopeSlider), [n, s] = f.useState(null), o = be(e, (a) => s(a)), i = f.useMemo(
      () => n ? r().findIndex((a) => a.ref.current === n) : -1,
      [r, n]
    );
    return /* @__PURE__ */ u.jsx(KR, { ...t, ref: o, index: i });
  }
), KR = f.forwardRef(
  (t, e) => {
    const { __scopeSlider: r, index: n, name: s, ...o } = t, i = Gi(pl, r), a = fg(pl, r), [l, c] = f.useState(null), d = be(e, (w) => c(w)), p = l ? !!l.closest("form") : !0, h = oo(l), v = i.values[n], y = v === void 0 ? 0 : yg(v, i.min, i.max), m = YR(n, i.values.length), g = h == null ? void 0 : h[a.size], x = g ? JR(g, y, a.direction) : 0;
    return f.useEffect(() => {
      if (l)
        return i.thumbs.add(l), () => {
          i.thumbs.delete(l);
        };
    }, [l, i.thumbs]), /* @__PURE__ */ u.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [a.startEdge]: `calc(${y}% + ${x}px)`
        },
        children: [
          /* @__PURE__ */ u.jsx(dl.ItemSlot, { scope: t.__scopeSlider, children: /* @__PURE__ */ u.jsx(
            se.span,
            {
              role: "slider",
              "aria-label": t["aria-label"] || m,
              "aria-valuemin": i.min,
              "aria-valuenow": v,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...o,
              ref: d,
              style: v === void 0 ? { display: "none" } : t.style,
              onFocus: K(t.onFocus, () => {
                i.valueIndexToChangeRef.current = n;
              })
            }
          ) }),
          p && /* @__PURE__ */ u.jsx(
            qR,
            {
              name: s ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              value: v
            },
            n
          )
        ]
      }
    );
  }
);
vg.displayName = pl;
var qR = (t) => {
  const { value: e, ...r } = t, n = f.useRef(null), s = Mi(e);
  return f.useEffect(() => {
    const o = n.current, i = window.HTMLInputElement.prototype, a = Object.getOwnPropertyDescriptor(i, "value").set;
    if (s !== e && a) {
      const l = new Event("input", { bubbles: !0 });
      a.call(o, e), o.dispatchEvent(l);
    }
  }, [s, e]), /* @__PURE__ */ u.jsx("input", { style: { display: "none" }, ...r, ref: n, defaultValue: e });
};
function GR(t = [], e, r) {
  const n = [...t];
  return n[r] = e, n.sort((s, o) => s - o);
}
function yg(t, e, r) {
  const n = 100 / (r - e) * (t - e);
  return _c(n, [0, 100]);
}
function YR(t, e) {
  return e > 2 ? `Value ${t + 1} of ${e}` : e === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function XR(t, e) {
  if (t.length === 1) return 0;
  const r = t.map((s) => Math.abs(s - e)), n = Math.min(...r);
  return r.indexOf(n);
}
function JR(t, e, r) {
  const n = t / 2, s = Tc([0, 50], [0, n]);
  return (n - s(e) * r) * r;
}
function QR(t) {
  return t.slice(0, -1).map((e, r) => t[r + 1] - e);
}
function eI(t, e) {
  if (e > 0) {
    const r = QR(t);
    return Math.min(...r) >= e;
  }
  return !0;
}
function Tc(t, e) {
  return (r) => {
    if (t[0] === t[1] || e[0] === e[1]) return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (r - t[0]);
  };
}
function tI(t) {
  return (String(t).split(".")[1] || "").length;
}
function rI(t, e) {
  const r = Math.pow(10, e);
  return Math.round(t * r) / r;
}
var bg = ug, nI = mg, sI = gg, oI = vg;
const wg = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsxs(
  bg,
  {
    ref: r,
    className: M(
      "relative flex w-full touch-none select-none items-center",
      t
    ),
    ...e,
    children: [
      /* @__PURE__ */ u.jsx(nI, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ u.jsx(sI, { className: "absolute h-full bg-gray-600" }) }),
      /* @__PURE__ */ u.jsx(oI, { className: "block h-5 w-5 rounded-full border-2 border-gray-600 bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
wg.displayName = bg.displayName;
const iI = (t = "md") => {
  switch (t) {
    case "sm":
      return {
        trackHeight: "h-1",
        thumbSize: "h-3 w-3",
        spacing: "space-y-1"
      };
    case "lg":
      return {
        trackHeight: "h-3",
        thumbSize: "h-6 w-6",
        spacing: "space-y-3"
      };
    case "md":
    default:
      return {
        trackHeight: "h-2",
        thumbSize: "h-5 w-5",
        spacing: "space-y-2"
      };
  }
}, aI = (t = "default") => {
  switch (t) {
    case "primary":
      return {
        track: "bg-blue-100",
        range: "bg-blue-600",
        thumb: "border-blue-600 bg-white"
      };
    case "success":
      return {
        track: "bg-green-100",
        range: "bg-green-600",
        thumb: "border-green-600 bg-white"
      };
    case "warning":
      return {
        track: "bg-yellow-100",
        range: "bg-yellow-500",
        thumb: "border-yellow-500 bg-white"
      };
    case "error":
      return {
        track: "bg-red-100",
        range: "bg-red-600",
        thumb: "border-red-600 bg-white"
      };
    case "default":
    default:
      return {
        track: "bg-gray-200",
        range: "bg-gray-600",
        thumb: "border-gray-600 bg-white"
      };
  }
}, lI = f.memo(({
  value: t,
  defaultValue: e = [50],
  min: r = 0,
  max: n = 100,
  step: s = 1,
  className: o,
  trackClassName: i,
  rangeClassName: a,
  thumbClassName: l,
  disabled: c = !1,
  orientation: d = "horizontal",
  inverted: p = !1,
  showLabels: h = !1,
  showValue: v = !1,
  showTicks: y = !1,
  tickCount: m = 5,
  label: g,
  valueLabel: x,
  onValueChange: w,
  onValueCommit: E,
  size: k = "md",
  variant: C = "default"
}) => {
  const A = f.useMemo(() => iI(k), [k]), O = f.useMemo(() => aI(C), [C]), R = f.useMemo(() => {
    if (!y) return [];
    const P = [], B = (n - r) / (m - 1);
    for (let re = 0; re < m; re++)
      P.push(r + B * re);
    return P;
  }, [y, r, n, m]), L = f.useCallback((P) => {
    w == null || w(P);
  }, [w]), $ = f.useCallback((P) => {
    E == null || E(P);
  }, [E]), oe = () => y ? /* @__PURE__ */ u.jsx("div", { className: "flex justify-between mt-1", children: R.map((P, B) => /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "text-xs text-gray-500 text-center",
      style: { width: `${100 / (m - 1)}%` },
      children: P
    },
    B
  )) }) : null, D = () => {
    if (!v) return null;
    const P = (t || e)[0] || 0;
    return /* @__PURE__ */ u.jsx("div", { className: "text-sm text-gray-600 font-medium", children: x || `${P}` });
  }, W = () => !h || !g ? null : /* @__PURE__ */ u.jsx("label", { className: "text-sm font-medium text-gray-700", children: g });
  return /* @__PURE__ */ u.jsxs("div", { className: M("w-full", A.spacing, o), children: [
    W(),
    D(),
    /* @__PURE__ */ u.jsxs(
      wg,
      {
        value: t,
        defaultValue: e,
        min: r,
        max: n,
        step: s,
        disabled: c,
        orientation: d,
        inverted: p,
        onValueChange: L,
        onValueCommit: $,
        className: M(
          "relative flex w-full touch-none select-none items-center",
          d === "vertical" && "flex-col h-64",
          o
        ),
        children: [
          /* @__PURE__ */ u.jsx("div", { className: M(
            "relative w-full grow overflow-hidden rounded-full",
            A.trackHeight,
            O.track,
            i
          ), children: /* @__PURE__ */ u.jsx("div", { className: M(
            "absolute h-full rounded-full",
            O.range,
            a
          ) }) }),
          /* @__PURE__ */ u.jsx("div", { className: M(
            "block rounded-full border-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            A.thumbSize,
            O.thumb,
            l
          ) })
        ]
      }
    ),
    oe()
  ] });
});
lI.displayName = "Slider";
var Sc = "Switch", [cI] = We(Sc), [uI, dI] = cI(Sc), xg = f.forwardRef(
  (t, e) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: s,
      defaultChecked: o,
      required: i,
      disabled: a,
      value: l = "on",
      onCheckedChange: c,
      ...d
    } = t, [p, h] = f.useState(null), v = be(e, (w) => h(w)), y = f.useRef(!1), m = p ? !!p.closest("form") : !0, [g = !1, x] = gt({
      prop: s,
      defaultProp: o,
      onChange: c
    });
    return /* @__PURE__ */ u.jsxs(uI, { scope: r, checked: g, disabled: a, children: [
      /* @__PURE__ */ u.jsx(
        se.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": g,
          "aria-required": i,
          "data-state": Ng(g),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...d,
          ref: v,
          onClick: K(t.onClick, (w) => {
            x((E) => !E), m && (y.current = w.isPropagationStopped(), y.current || w.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ u.jsx(
        fI,
        {
          control: p,
          bubbles: !y.current,
          name: n,
          value: l,
          checked: g,
          required: i,
          disabled: a,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
xg.displayName = Sc;
var _g = "SwitchThumb", Eg = f.forwardRef(
  (t, e) => {
    const { __scopeSwitch: r, ...n } = t, s = dI(_g, r);
    return /* @__PURE__ */ u.jsx(
      se.span,
      {
        "data-state": Ng(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...n,
        ref: e
      }
    );
  }
);
Eg.displayName = _g;
var fI = (t) => {
  const { control: e, checked: r, bubbles: n = !0, ...s } = t, o = f.useRef(null), i = Mi(r), a = oo(e);
  return f.useEffect(() => {
    const l = o.current, c = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== r && d) {
      const p = new Event("click", { bubbles: n });
      d.call(l, r), l.dispatchEvent(p);
    }
  }, [i, r, n]), /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: r,
      ...s,
      tabIndex: -1,
      ref: o,
      style: {
        ...t.style,
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function Ng(t) {
  return t ? "checked" : "unchecked";
}
var kg = xg, pI = Eg;
const hI = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  kg,
  {
    className: M(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      t
    ),
    ...e,
    ref: r,
    children: /* @__PURE__ */ u.jsx(
      pI,
      {
        className: M(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
hI.displayName = kg.displayName;
var Rc = "Tabs", [mI] = We(Rc, [
  Wr
]), Cg = Wr(), [gI, Ic] = mI(Rc), vI = f.forwardRef(
  (t, e) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: s,
      defaultValue: o,
      orientation: i = "horizontal",
      dir: a,
      activationMode: l = "automatic",
      ...c
    } = t, d = dn(a), [p, h] = gt({
      prop: n,
      onChange: s,
      defaultProp: o
    });
    return /* @__PURE__ */ u.jsx(
      gI,
      {
        scope: r,
        baseId: Pi(),
        value: p,
        onValueChange: h,
        orientation: i,
        dir: d,
        activationMode: l,
        children: /* @__PURE__ */ u.jsx(
          se.div,
          {
            dir: d,
            "data-orientation": i,
            ...c,
            ref: e
          }
        )
      }
    );
  }
);
vI.displayName = Rc;
var Tg = "TabsList", Sg = f.forwardRef(
  (t, e) => {
    const { __scopeTabs: r, loop: n = !0, ...s } = t, o = Ic(Tg, r), i = Cg(r);
    return /* @__PURE__ */ u.jsx(
      Hi,
      {
        asChild: !0,
        ...i,
        orientation: o.orientation,
        dir: o.dir,
        loop: n,
        children: /* @__PURE__ */ u.jsx(
          se.div,
          {
            role: "tablist",
            "aria-orientation": o.orientation,
            ...s,
            ref: e
          }
        )
      }
    );
  }
);
Sg.displayName = Tg;
var Rg = "TabsTrigger", Ig = f.forwardRef(
  (t, e) => {
    const { __scopeTabs: r, value: n, disabled: s = !1, ...o } = t, i = Ic(Rg, r), a = Cg(r), l = Og(i.baseId, n), c = Ag(i.baseId, n), d = n === i.value;
    return /* @__PURE__ */ u.jsx(
      Zi,
      {
        asChild: !0,
        ...a,
        focusable: !s,
        active: d,
        children: /* @__PURE__ */ u.jsx(
          se.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": c,
            "data-state": d ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: l,
            ...o,
            ref: e,
            onMouseDown: K(t.onMouseDown, (p) => {
              !s && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(n) : p.preventDefault();
            }),
            onKeyDown: K(t.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && i.onValueChange(n);
            }),
            onFocus: K(t.onFocus, () => {
              const p = i.activationMode !== "manual";
              !d && !s && p && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
Ig.displayName = Rg;
var jg = "TabsContent", Pg = f.forwardRef(
  (t, e) => {
    const { __scopeTabs: r, value: n, forceMount: s, children: o, ...i } = t, a = Ic(jg, r), l = Og(a.baseId, n), c = Ag(a.baseId, n), d = n === a.value, p = f.useRef(d);
    return f.useEffect(() => {
      const h = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ u.jsx(Ye, { present: s || d, children: ({ present: h }) => /* @__PURE__ */ u.jsx(
      se.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !h,
        id: c,
        tabIndex: 0,
        ...i,
        ref: e,
        style: {
          ...t.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: h && o
      }
    ) });
  }
);
Pg.displayName = jg;
function Og(t, e) {
  return `${t}-trigger-${e}`;
}
function Ag(t, e) {
  return `${t}-content-${e}`;
}
var Dg = Sg, Mg = Ig, Lg = Pg;
const yI = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Dg,
  {
    ref: r,
    className: M(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
yI.displayName = Dg.displayName;
const bI = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Mg,
  {
    ref: r,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...e
  }
));
bI.displayName = Mg.displayName;
const wI = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Lg,
  {
    ref: r,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
wI.displayName = Lg.displayName;
const xI = $r([
  "transition-all",
  "duration-100",
  "outline-none",
  "placeholder:text-gray-400",
  "px-2",
  "bg-transparent",
  "dark:text-white"
]);
_l(he(
  ({
    className: t,
    prefixElement: e,
    sufixElement: r,
    fullwidth: n,
    disabled: s,
    sucessMsg: o,
    errorMsg: i,
    placeholder: a,
    lable: l,
    lableClassName: c,
    required: d,
    formMode: p = !1,
    ...h
  }, v) => {
    const y = "flex items-start justify-center border border-gray-200 p-2 rounded-lg focus-within:border-primary-500 focus-within:border-2", m = /* @__PURE__ */ u.jsx(
      "textarea",
      {
        ref: v,
        className: M(xI({ className: t })),
        ...h,
        disabled: s,
        placeholder: a
      }
    ), g = /* @__PURE__ */ u.jsx(
      yc,
      {
        prefixElement: e,
        sufixElement: r,
        prefixElementClassName: "w-4 h-4 mt-2",
        sufixElementClassName: "w-4 h-4 mt-2",
        children: m
      }
    );
    return p ? /* @__PURE__ */ u.jsx(
      "textarea",
      {
        ref: v,
        className: M(
          "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          o ? "border-green-500 focus:ring-green-500" : "",
          i ? "border-red-500 focus:ring-red-500" : "",
          t
        ),
        ...h,
        disabled: s,
        placeholder: a
      }
    ) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        bc,
        {
          lable: l,
          lableClassName: c,
          required: d,
          htmlFor: "textAreaElement"
        }
      ),
      /* @__PURE__ */ u.jsx(
        gc,
        {
          baseClasses: y,
          sucessMsg: o,
          errorMsg: i,
          fullwidth: n,
          customClasses: n ? " w-full" : "w-56",
          children: g
        }
      ),
      /* @__PURE__ */ u.jsx(vc, { sucessMsg: o, errorMsg: i })
    ] });
  }
));
const _I = 1, EI = 1e6;
let Ma = 0;
function NI() {
  return Ma = (Ma + 1) % Number.MAX_SAFE_INTEGER, Ma.toString();
}
const La = /* @__PURE__ */ new Map(), kd = (t) => {
  if (La.has(t))
    return;
  const e = setTimeout(() => {
    La.delete(t), xs({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, EI);
  La.set(t, e);
}, kI = (t, e) => {
  switch (e.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [e.toast, ...t.toasts].slice(0, _I)
      };
    case "UPDATE_TOAST":
      return {
        ...t,
        toasts: t.toasts.map(
          (r) => r.id === e.toast.id ? { ...r, ...e.toast } : r
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = e;
      return r ? kd(r) : t.toasts.forEach((n) => {
        kd(n.id);
      }), {
        ...t,
        toasts: t.toasts.map(
          (n) => n.id === r || r === void 0 ? {
            ...n,
            open: !1
          } : n
        )
      };
    }
    case "REMOVE_TOAST":
      return e.toastId === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((r) => r.id !== e.toastId)
      };
  }
}, Uo = [];
let Vo = { toasts: [] };
function xs(t) {
  Vo = kI(Vo, t), Uo.forEach((e) => {
    e(Vo);
  });
}
function CI({ ...t }) {
  const e = NI(), r = (s) => xs({
    type: "UPDATE_TOAST",
    toast: { ...s, id: e }
  }), n = () => xs({ type: "DISMISS_TOAST", toastId: e });
  return xs({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: e,
      open: !0,
      onOpenChange: (s) => {
        s || n();
      }
    }
  }), {
    id: e,
    dismiss: n,
    update: r
  };
}
function jc() {
  const [t, e] = f.useState(Vo);
  return f.useEffect(() => (Uo.push(e), () => {
    const r = Uo.indexOf(e);
    r > -1 && Uo.splice(r, 1);
  }), [t]), {
    ...t,
    toast: CI,
    dismiss: (r) => xs({ type: "DISMISS_TOAST", toastId: r })
  };
}
var TI = "VisuallyHidden", Yi = f.forwardRef(
  (t, e) => /* @__PURE__ */ u.jsx(
    se.span,
    {
      ...t,
      ref: e,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...t.style
      }
    }
  )
);
Yi.displayName = TI;
var SI = Yi, Pc = "ToastProvider", [Oc, RI, II] = no("Toast"), [Fg] = We("Toast", [II]), [jI, Xi] = Fg(Pc), Ug = (t) => {
  const {
    __scopeToast: e,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: s = "right",
    swipeThreshold: o = 50,
    children: i
  } = t, [a, l] = f.useState(null), [c, d] = f.useState(0), p = f.useRef(!1), h = f.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Pc}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ u.jsx(Oc.Provider, { scope: e, children: /* @__PURE__ */ u.jsx(
    jI,
    {
      scope: e,
      label: r,
      duration: n,
      swipeDirection: s,
      swipeThreshold: o,
      toastCount: c,
      viewport: a,
      onViewportChange: l,
      onToastAdd: f.useCallback(() => d((v) => v + 1), []),
      onToastRemove: f.useCallback(() => d((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: p,
      isClosePausedRef: h,
      children: i
    }
  ) });
};
Ug.displayName = Pc;
var Vg = "ToastViewport", PI = ["F8"], hl = "toast.viewportPause", ml = "toast.viewportResume", $g = f.forwardRef(
  (t, e) => {
    const {
      __scopeToast: r,
      hotkey: n = PI,
      label: s = "Notifications ({hotkey})",
      ...o
    } = t, i = Xi(Vg, r), a = RI(r), l = f.useRef(null), c = f.useRef(null), d = f.useRef(null), p = f.useRef(null), h = be(e, p, i.onViewportChange), v = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = i.toastCount > 0;
    f.useEffect(() => {
      const g = (x) => {
        var w;
        n.every((E) => x[E] || x.code === E) && ((w = p.current) == null || w.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [n]), f.useEffect(() => {
      const g = l.current, x = p.current;
      if (y && g && x) {
        const w = () => {
          if (!i.isClosePausedRef.current) {
            const A = new CustomEvent(hl);
            x.dispatchEvent(A), i.isClosePausedRef.current = !0;
          }
        }, E = () => {
          if (i.isClosePausedRef.current) {
            const A = new CustomEvent(ml);
            x.dispatchEvent(A), i.isClosePausedRef.current = !1;
          }
        }, k = (A) => {
          !g.contains(A.relatedTarget) && E();
        }, C = () => {
          g.contains(document.activeElement) || E();
        };
        return g.addEventListener("focusin", w), g.addEventListener("focusout", k), g.addEventListener("pointermove", w), g.addEventListener("pointerleave", C), window.addEventListener("blur", w), window.addEventListener("focus", E), () => {
          g.removeEventListener("focusin", w), g.removeEventListener("focusout", k), g.removeEventListener("pointermove", w), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", w), window.removeEventListener("focus", E);
        };
      }
    }, [y, i.isClosePausedRef]);
    const m = f.useCallback(
      ({ tabbingDirection: g }) => {
        const x = a().map((w) => {
          const E = w.ref.current, k = [E, ...HI(E)];
          return g === "forwards" ? k : k.reverse();
        });
        return (g === "forwards" ? x.reverse() : x).flat();
      },
      [a]
    );
    return f.useEffect(() => {
      const g = p.current;
      if (g) {
        const x = (w) => {
          var E, k, C;
          const A = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !A) {
            const O = document.activeElement, R = w.shiftKey;
            if (w.target === g && R) {
              (E = c.current) == null || E.focus();
              return;
            }
            const L = m({ tabbingDirection: R ? "backwards" : "forwards" }), $ = L.findIndex((oe) => oe === O);
            Fa(L.slice($ + 1)) ? w.preventDefault() : R ? (k = c.current) == null || k.focus() : (C = d.current) == null || C.focus();
          }
        };
        return g.addEventListener("keydown", x), () => g.removeEventListener("keydown", x);
      }
    }, [a, m]), /* @__PURE__ */ u.jsxs(
      rk,
      {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ u.jsx(
            gl,
            {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const g = m({
                  tabbingDirection: "forwards"
                });
                Fa(g);
              }
            }
          ),
          /* @__PURE__ */ u.jsx(Oc.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(se.ol, { tabIndex: -1, ...o, ref: h }) }),
          y && /* @__PURE__ */ u.jsx(
            gl,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = m({
                  tabbingDirection: "backwards"
                });
                Fa(g);
              }
            }
          )
        ]
      }
    );
  }
);
$g.displayName = Vg;
var zg = "ToastFocusProxy", gl = f.forwardRef(
  (t, e) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...s } = t, o = Xi(zg, r);
    return /* @__PURE__ */ u.jsx(
      Yi,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...s,
        ref: e,
        style: { position: "fixed" },
        onFocus: (i) => {
          var a;
          const l = i.relatedTarget;
          !((a = o.viewport) != null && a.contains(l)) && n();
        }
      }
    );
  }
);
gl.displayName = zg;
var Ji = "Toast", OI = "toast.swipeStart", AI = "toast.swipeMove", DI = "toast.swipeCancel", MI = "toast.swipeEnd", Bg = f.forwardRef(
  (t, e) => {
    const { forceMount: r, open: n, defaultOpen: s, onOpenChange: o, ...i } = t, [a = !0, l] = gt({
      prop: n,
      defaultProp: s,
      onChange: o
    });
    return /* @__PURE__ */ u.jsx(Ye, { present: r || a, children: /* @__PURE__ */ u.jsx(
      UI,
      {
        open: a,
        ...i,
        ref: e,
        onClose: () => l(!1),
        onPause: $e(t.onPause),
        onResume: $e(t.onResume),
        onSwipeStart: K(t.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: K(t.onSwipeMove, (c) => {
          const { x: d, y: p } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "move"), c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: K(t.onSwipeCancel, (c) => {
          c.currentTarget.setAttribute("data-swipe", "cancel"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: K(t.onSwipeEnd, (c) => {
          const { x: d, y: p } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "end"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), l(!1);
        })
      }
    ) });
  }
);
Bg.displayName = Ji;
var [LI, FI] = Fg(Ji, {
  onClose() {
  }
}), UI = f.forwardRef(
  (t, e) => {
    const {
      __scopeToast: r,
      type: n = "foreground",
      duration: s,
      open: o,
      onClose: i,
      onEscapeKeyDown: a,
      onPause: l,
      onResume: c,
      onSwipeStart: d,
      onSwipeMove: p,
      onSwipeCancel: h,
      onSwipeEnd: v,
      ...y
    } = t, m = Xi(Ji, r), [g, x] = f.useState(null), w = be(e, (P) => x(P)), E = f.useRef(null), k = f.useRef(null), C = s || m.duration, A = f.useRef(0), O = f.useRef(C), R = f.useRef(0), { onToastAdd: L, onToastRemove: $ } = m, oe = $e(() => {
      var P;
      g != null && g.contains(document.activeElement) && ((P = m.viewport) == null || P.focus()), i();
    }), D = f.useCallback(
      (P) => {
        !P || P === 1 / 0 || (window.clearTimeout(R.current), A.current = (/* @__PURE__ */ new Date()).getTime(), R.current = window.setTimeout(oe, P));
      },
      [oe]
    );
    f.useEffect(() => {
      const P = m.viewport;
      if (P) {
        const B = () => {
          D(O.current), c == null || c();
        }, re = () => {
          const q = (/* @__PURE__ */ new Date()).getTime() - A.current;
          O.current = O.current - q, window.clearTimeout(R.current), l == null || l();
        };
        return P.addEventListener(hl, re), P.addEventListener(ml, B), () => {
          P.removeEventListener(hl, re), P.removeEventListener(ml, B);
        };
      }
    }, [m.viewport, C, l, c, D]), f.useEffect(() => {
      o && !m.isClosePausedRef.current && D(C);
    }, [o, C, m.isClosePausedRef, D]), f.useEffect(() => (L(), () => $()), [L, $]);
    const W = f.useMemo(() => g ? Yg(g) : null, [g]);
    return m.viewport ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      W && /* @__PURE__ */ u.jsx(
        VI,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: W
        }
      ),
      /* @__PURE__ */ u.jsx(LI, { scope: r, onClose: oe, children: Ni.createPortal(
        /* @__PURE__ */ u.jsx(Oc.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
          tk,
          {
            asChild: !0,
            onEscapeKeyDown: K(a, () => {
              m.isFocusedToastEscapeKeyDownRef.current || oe(), m.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ u.jsx(
              se.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": o ? "open" : "closed",
                "data-swipe-direction": m.swipeDirection,
                ...y,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...t.style },
                onKeyDown: K(t.onKeyDown, (P) => {
                  P.key === "Escape" && (a == null || a(P.nativeEvent), P.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, oe()));
                }),
                onPointerDown: K(t.onPointerDown, (P) => {
                  P.button === 0 && (E.current = { x: P.clientX, y: P.clientY });
                }),
                onPointerMove: K(t.onPointerMove, (P) => {
                  if (!E.current) return;
                  const B = P.clientX - E.current.x, re = P.clientY - E.current.y, q = !!k.current, pe = ["left", "right"].includes(m.swipeDirection), Z = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max, ge = pe ? Z(0, B) : 0, ke = pe ? 0 : Z(0, re), Te = P.pointerType === "touch" ? 10 : 2, Pe = { x: ge, y: ke }, De = { originalEvent: P, delta: Pe };
                  q ? (k.current = Pe, Io(AI, p, De, {
                    discrete: !1
                  })) : Cd(Pe, m.swipeDirection, Te) ? (k.current = Pe, Io(OI, d, De, {
                    discrete: !1
                  }), P.target.setPointerCapture(P.pointerId)) : (Math.abs(B) > Te || Math.abs(re) > Te) && (E.current = null);
                }),
                onPointerUp: K(t.onPointerUp, (P) => {
                  const B = k.current, re = P.target;
                  if (re.hasPointerCapture(P.pointerId) && re.releasePointerCapture(P.pointerId), k.current = null, E.current = null, B) {
                    const q = P.currentTarget, pe = { originalEvent: P, delta: B };
                    Cd(B, m.swipeDirection, m.swipeThreshold) ? Io(MI, v, pe, {
                      discrete: !0
                    }) : Io(
                      DI,
                      h,
                      pe,
                      {
                        discrete: !0
                      }
                    ), q.addEventListener("click", (Z) => Z.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        m.viewport
      ) })
    ] }) : null;
  }
), VI = (t) => {
  const { __scopeToast: e, children: r, ...n } = t, s = Xi(Ji, e), [o, i] = f.useState(!1), [a, l] = f.useState(!1);
  return BI(() => i(!0)), f.useEffect(() => {
    const c = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(c);
  }, []), a ? null : /* @__PURE__ */ u.jsx(sc, { asChild: !0, children: /* @__PURE__ */ u.jsx(Yi, { ...n, children: o && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    s.label,
    " ",
    r
  ] }) }) });
}, $I = "ToastTitle", Wg = f.forwardRef(
  (t, e) => {
    const { __scopeToast: r, ...n } = t;
    return /* @__PURE__ */ u.jsx(se.div, { ...n, ref: e });
  }
);
Wg.displayName = $I;
var zI = "ToastDescription", Hg = f.forwardRef(
  (t, e) => {
    const { __scopeToast: r, ...n } = t;
    return /* @__PURE__ */ u.jsx(se.div, { ...n, ref: e });
  }
);
Hg.displayName = zI;
var Zg = "ToastAction", Kg = f.forwardRef(
  (t, e) => {
    const { altText: r, ...n } = t;
    return r.trim() ? /* @__PURE__ */ u.jsx(Gg, { altText: r, asChild: !0, children: /* @__PURE__ */ u.jsx(Ac, { ...n, ref: e }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Zg}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Kg.displayName = Zg;
var qg = "ToastClose", Ac = f.forwardRef(
  (t, e) => {
    const { __scopeToast: r, ...n } = t, s = FI(qg, r);
    return /* @__PURE__ */ u.jsx(Gg, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      se.button,
      {
        type: "button",
        ...n,
        ref: e,
        onClick: K(t.onClick, s.onClose)
      }
    ) });
  }
);
Ac.displayName = qg;
var Gg = f.forwardRef((t, e) => {
  const { __scopeToast: r, altText: n, ...s } = t;
  return /* @__PURE__ */ u.jsx(
    se.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...s,
      ref: e
    }
  );
});
function Yg(t) {
  const e = [];
  return Array.from(t.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && e.push(r.textContent), WI(r)) {
      const n = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (s) {
          const o = r.dataset.radixToastAnnounceAlt;
          o && e.push(o);
        } else
          e.push(...Yg(r));
    }
  }), e;
}
function Io(t, e, r, { discrete: n }) {
  const s = r.originalEvent.currentTarget, o = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: r });
  e && s.addEventListener(t, e, { once: !0 }), n ? Hl(s, o) : s.dispatchEvent(o);
}
var Cd = (t, e, r = 0) => {
  const n = Math.abs(t.x), s = Math.abs(t.y), o = n > s;
  return e === "left" || e === "right" ? o && n > r : !o && s > r;
};
function BI(t = () => {
}) {
  const e = $e(t);
  Et(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(e)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [e]);
}
function WI(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function HI(t) {
  const e = [], r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const s = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) e.push(r.currentNode);
  return e;
}
function Fa(t) {
  const e = document.activeElement;
  return t.some((r) => r === e ? !0 : (r.focus(), document.activeElement !== e));
}
var ZI = Ug, Xg = $g, Jg = Bg, Qg = Wg, ev = Hg, tv = Kg, rv = Ac;
const KI = ZI, nv = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Xg,
  {
    ref: r,
    className: M(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      t
    ),
    ...e
  }
));
nv.displayName = Xg.displayName;
const qI = $r(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-white text-gray-900",
        destructive: "border-red-200 bg-red-50 text-red-800",
        success: "border-green-200 bg-green-50 text-green-800",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
        info: "border-blue-200 bg-blue-50 text-blue-800"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), sv = f.forwardRef(({ className: t, variant: e, ...r }, n) => /* @__PURE__ */ u.jsx(
  Jg,
  {
    ref: n,
    className: M(qI({ variant: e }), t),
    ...r
  }
));
sv.displayName = Jg.displayName;
const Dc = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  tv,
  {
    ref: r,
    className: M(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t
    ),
    ...e
  }
));
Dc.displayName = tv.displayName;
const ov = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  rv,
  {
    ref: r,
    className: M(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...e,
    children: /* @__PURE__ */ u.jsx(ec, { className: "h-4 w-4" })
  }
));
ov.displayName = rv.displayName;
const iv = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  Qg,
  {
    ref: r,
    className: M("text-sm font-semibold", t),
    ...e
  }
));
iv.displayName = Qg.displayName;
const av = f.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ u.jsx(
  ev,
  {
    ref: r,
    className: M("text-sm opacity-90", t),
    ...e
  }
));
av.displayName = ev.displayName;
const GI = (t) => {
  switch (t) {
    case "success":
      return "border-green-200 bg-white text-green-800";
    case "warning":
      return "border-yellow-200 bg-white text-yellow-800";
    case "info":
      return "border-blue-200 bg-white text-blue-800";
    case "destructive":
      return "border-red-200 bg-white text-red-800";
    case "default":
    default:
      return "border-gray-200 bg-white text-gray-900";
  }
}, YI = (t) => {
  switch (t) {
    case "sm":
      return "p-3 pr-6 text-xs";
    case "lg":
      return "p-8 pr-10 text-base";
    case "md":
    default:
      return "p-6 pr-8 text-sm";
  }
}, XI = f.memo(({
  title: t,
  description: e,
  children: r,
  variant: n = "default",
  size: s = "md",
  className: o = "",
  bgColor: i,
  bgIntensity: a = "50",
  duration: l = 5e3,
  autoDismiss: c = !0,
  action: d,
  onOpenChange: p
}) => {
  const { toast: h } = jc(), v = f.useCallback(() => {
    const g = i ? `bg-${i}-${a}` : "", x = i ? `text-${i}-${parseInt(a) + 300}` : "", w = i ? `border-${i}-${parseInt(a) + 100}` : "", E = {
      title: t,
      description: e,
      variant: n,
      duration: c ? l : void 0,
      onOpenChange: p,
      className: `${g} ${x} ${w}`.trim(),
      action: d ? /* @__PURE__ */ u.jsx(
        Dc,
        {
          altText: d.label,
          onClick: d.onClick,
          className: d.variant === "destructive" ? "text-red-600 hover:text-red-700" : "",
          children: d.label
        }
      ) : void 0
    };
    h(E);
  }, [h, t, e, n, i, a, l, c, d, p]), y = f.useMemo(() => GI(n), [n]), m = f.useMemo(() => YI(s), [s]);
  return /* @__PURE__ */ u.jsx(
    pt,
    {
      variant: "outline",
      onClick: v,
      className: `${y} ${m} ${o}`,
      children: r || "Show Toast"
    }
  );
});
XI.displayName = "Toast";
function JI() {
  const { toasts: t } = jc();
  return /* @__PURE__ */ u.jsxs(KI, { children: [
    t.map(function({ id: e, title: r, description: n, action: s, ...o }) {
      return /* @__PURE__ */ u.jsxs(sv, { ...o, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ u.jsx(iv, { children: r }),
          n && /* @__PURE__ */ u.jsx(av, { children: n })
        ] }),
        s,
        /* @__PURE__ */ u.jsx(ov, {})
      ] }, e);
    }),
    /* @__PURE__ */ u.jsx(nv, {})
  ] });
}
const QI = f.memo(({
  title: t = "Scheduled: Catch up",
  description: e = "Friday, February 10, 2023 at 5:57 PM",
  children: r,
  variant: n = "default",
  size: s = "md",
  className: o = "",
  bgColor: i,
  bgIntensity: a = "50",
  duration: l = 5e3,
  autoDismiss: c = !0,
  action: d,
  onOpenChange: p,
  showToaster: h = !0
}) => {
  const { toast: v } = jc(), y = f.useCallback(() => {
    const E = i ? `bg-${i}-${a}` : "", k = i ? `text-${i}-${parseInt(a) + 300}` : "", C = i ? `border-${i}-${parseInt(a) + 100}` : "", A = {
      title: t,
      description: e,
      variant: n,
      duration: c ? l : void 0,
      onOpenChange: p,
      className: `${E} ${k} ${C}`.trim(),
      action: d ? /* @__PURE__ */ u.jsx(
        Dc,
        {
          altText: d.label,
          onClick: d.onClick,
          className: d.variant === "destructive" ? "text-red-600 hover:text-red-700" : "",
          children: d.label
        }
      ) : void 0
    };
    v(A);
  }, [v, t, e, n, i, a, l, c, d, p]), m = f.useCallback(() => {
    switch (n) {
      case "success":
        return "border-green-200 bg-white text-green-800 hover:bg-green-50";
      case "warning":
        return "border-yellow-200 bg-white text-yellow-800 hover:bg-yellow-50";
      case "info":
        return "border-blue-200 bg-white text-blue-800 hover:bg-blue-50";
      case "destructive":
        return "border-red-200 bg-white text-red-800 hover:bg-red-50";
      case "default":
      default:
        return "border-gray-200 bg-white text-gray-900 hover:bg-gray-50";
    }
  }, [n]), g = f.useCallback(() => {
    switch (s) {
      case "sm":
        return "px-3 py-2 text-xs";
      case "lg":
        return "px-6 py-3 text-base";
      case "md":
      default:
        return "px-4 py-2 text-sm";
    }
  }, [s]), x = m(), w = g();
  return /* @__PURE__ */ u.jsxs("div", { className: "space-y-4", children: [
    h && /* @__PURE__ */ u.jsx(JI, {}),
    /* @__PURE__ */ u.jsx(
      pt,
      {
        variant: "outline",
        onClick: y,
        className: `${x} ${w} ${o}`,
        children: r || "Add to calendar"
      }
    )
  ] });
});
QI.displayName = "Toaster";
he(
  ({ label: t, toggleClassName: e, ...r }, n) => /* @__PURE__ */ u.jsxs(
    "label",
    {
      className: "inline-flex items-center cursor-pointer",
      ref: n,
      ...r,
      children: [
        /* @__PURE__ */ u.jsx("input", { type: "checkbox", value: "", className: "sr-only peer" }),
        /* @__PURE__ */ u.jsx(
          "div",
          {
            className: M(
              "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
              e
            )
          }
        ),
        /* @__PURE__ */ u.jsx("span", { className: "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300", children: t })
      ]
    }
  )
);
var ej = "Toggle", Mc = f.forwardRef((t, e) => {
  const { pressed: r, defaultPressed: n = !1, onPressedChange: s, ...o } = t, [i = !1, a] = gt({
    prop: r,
    onChange: s,
    defaultProp: n
  });
  return /* @__PURE__ */ u.jsx(
    se.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": t.disabled ? "" : void 0,
      ...o,
      ref: e,
      onClick: K(t.onClick, () => {
        t.disabled || a(!i);
      })
    }
  );
});
Mc.displayName = ej;
var lv = Mc;
const cv = $r(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), tj = f.forwardRef(({ className: t, variant: e, size: r, ...n }, s) => /* @__PURE__ */ u.jsx(
  lv,
  {
    ref: s,
    className: M(cv({ variant: e, size: r, className: t })),
    ...n
  }
));
tj.displayName = lv.displayName;
var Gn = "ToggleGroup", [uv] = We(Gn, [
  Wr
]), dv = Wr(), Lc = J.forwardRef((t, e) => {
  const { type: r, ...n } = t;
  if (r === "single") {
    const s = n;
    return /* @__PURE__ */ u.jsx(rj, { ...s, ref: e });
  }
  if (r === "multiple") {
    const s = n;
    return /* @__PURE__ */ u.jsx(nj, { ...s, ref: e });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Gn}\``);
});
Lc.displayName = Gn;
var [fv, pv] = uv(Gn), rj = J.forwardRef((t, e) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: s = () => {
    },
    ...o
  } = t, [i, a] = gt({
    prop: r,
    defaultProp: n,
    onChange: s
  });
  return /* @__PURE__ */ u.jsx(
    fv,
    {
      scope: t.__scopeToggleGroup,
      type: "single",
      value: i ? [i] : [],
      onItemActivate: a,
      onItemDeactivate: J.useCallback(() => a(""), [a]),
      children: /* @__PURE__ */ u.jsx(hv, { ...o, ref: e })
    }
  );
}), nj = J.forwardRef((t, e) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: s = () => {
    },
    ...o
  } = t, [i = [], a] = gt({
    prop: r,
    defaultProp: n,
    onChange: s
  }), l = J.useCallback(
    (d) => a((p = []) => [...p, d]),
    [a]
  ), c = J.useCallback(
    (d) => a((p = []) => p.filter((h) => h !== d)),
    [a]
  );
  return /* @__PURE__ */ u.jsx(
    fv,
    {
      scope: t.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: l,
      onItemDeactivate: c,
      children: /* @__PURE__ */ u.jsx(hv, { ...o, ref: e })
    }
  );
});
Lc.displayName = Gn;
var [sj, oj] = uv(Gn), hv = J.forwardRef(
  (t, e) => {
    const {
      __scopeToggleGroup: r,
      disabled: n = !1,
      rovingFocus: s = !0,
      orientation: o,
      dir: i,
      loop: a = !0,
      ...l
    } = t, c = dv(r), d = dn(i), p = { role: "group", dir: d, ...l };
    return /* @__PURE__ */ u.jsx(sj, { scope: r, rovingFocus: s, disabled: n, children: s ? /* @__PURE__ */ u.jsx(
      Hi,
      {
        asChild: !0,
        ...c,
        orientation: o,
        dir: d,
        loop: a,
        children: /* @__PURE__ */ u.jsx(se.div, { ...p, ref: e })
      }
    ) : /* @__PURE__ */ u.jsx(se.div, { ...p, ref: e }) });
  }
), mi = "ToggleGroupItem", mv = J.forwardRef(
  (t, e) => {
    const r = pv(mi, t.__scopeToggleGroup), n = oj(mi, t.__scopeToggleGroup), s = dv(t.__scopeToggleGroup), o = r.value.includes(t.value), i = n.disabled || t.disabled, a = { ...t, pressed: o, disabled: i }, l = J.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ u.jsx(
      Zi,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: o,
        ref: l,
        children: /* @__PURE__ */ u.jsx(Td, { ...a, ref: e })
      }
    ) : /* @__PURE__ */ u.jsx(Td, { ...a, ref: e });
  }
);
mv.displayName = mi;
var Td = J.forwardRef(
  (t, e) => {
    const { __scopeToggleGroup: r, value: n, ...s } = t, o = pv(mi, r), i = { role: "radio", "aria-checked": t.pressed, "aria-pressed": void 0 }, a = o.type === "single" ? i : void 0;
    return /* @__PURE__ */ u.jsx(
      Mc,
      {
        ...a,
        ...s,
        ref: e,
        onPressedChange: (l) => {
          l ? o.onItemActivate(n) : o.onItemDeactivate(n);
        }
      }
    );
  }
), gv = Lc, vv = mv;
const yv = f.createContext({
  size: "default",
  variant: "default"
}), ij = f.forwardRef(({ className: t, variant: e, size: r, children: n, ...s }, o) => /* @__PURE__ */ u.jsx(
  gv,
  {
    ref: o,
    className: M("flex items-center justify-center gap-1", t),
    ...s,
    children: /* @__PURE__ */ u.jsx(yv.Provider, { value: { variant: e, size: r }, children: n })
  }
));
ij.displayName = gv.displayName;
const aj = f.forwardRef(({ className: t, children: e, variant: r, size: n, ...s }, o) => {
  const i = f.useContext(yv);
  return /* @__PURE__ */ u.jsx(
    vv,
    {
      ref: o,
      className: M(
        cv({
          variant: i.variant || r,
          size: i.size || n
        }),
        t
      ),
      ...s,
      children: e
    }
  );
});
aj.displayName = vv.displayName;
const lj = ["top", "right", "bottom", "left"], Vt = Math.min, dt = Math.max, gi = Math.round, jo = Math.floor, Fr = (t) => ({
  x: t,
  y: t
}), cj = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, uj = {
  start: "end",
  end: "start"
};
function vl(t, e, r) {
  return dt(t, Vt(e, r));
}
function cr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ur(t) {
  return t.split("-")[0];
}
function Yn(t) {
  return t.split("-")[1];
}
function Fc(t) {
  return t === "x" ? "y" : "x";
}
function Uc(t) {
  return t === "y" ? "height" : "width";
}
function Xn(t) {
  return ["top", "bottom"].includes(ur(t)) ? "y" : "x";
}
function Vc(t) {
  return Fc(Xn(t));
}
function dj(t, e, r) {
  r === void 0 && (r = !1);
  const n = Yn(t), s = Vc(t), o = Uc(s);
  let i = s === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (i = vi(i)), [i, vi(i)];
}
function fj(t) {
  const e = vi(t);
  return [yl(t), e, yl(e)];
}
function yl(t) {
  return t.replace(/start|end/g, (e) => uj[e]);
}
function pj(t, e, r) {
  const n = ["left", "right"], s = ["right", "left"], o = ["top", "bottom"], i = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return r ? e ? s : n : e ? n : s;
    case "left":
    case "right":
      return e ? o : i;
    default:
      return [];
  }
}
function hj(t, e, r, n) {
  const s = Yn(t);
  let o = pj(ur(t), r === "start", n);
  return s && (o = o.map((i) => i + "-" + s), e && (o = o.concat(o.map(yl)))), o;
}
function vi(t) {
  return t.replace(/left|right|bottom|top/g, (e) => cj[e]);
}
function mj(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function bv(t) {
  return typeof t != "number" ? mj(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function yi(t) {
  const {
    x: e,
    y: r,
    width: n,
    height: s
  } = t;
  return {
    width: n,
    height: s,
    top: r,
    left: e,
    right: e + n,
    bottom: r + s,
    x: e,
    y: r
  };
}
function Sd(t, e, r) {
  let {
    reference: n,
    floating: s
  } = t;
  const o = Xn(e), i = Vc(e), a = Uc(i), l = ur(e), c = o === "y", d = n.x + n.width / 2 - s.width / 2, p = n.y + n.height / 2 - s.height / 2, h = n[a] / 2 - s[a] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: d,
        y: n.y - s.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      v = {
        x: n.x - s.width,
        y: p
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (Yn(e)) {
    case "start":
      v[i] -= h * (r && c ? -1 : 1);
      break;
    case "end":
      v[i] += h * (r && c ? -1 : 1);
      break;
  }
  return v;
}
const gj = async (t, e, r) => {
  const {
    placement: n = "bottom",
    strategy: s = "absolute",
    middleware: o = [],
    platform: i
  } = r, a = o.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(e));
  let c = await i.getElementRects({
    reference: t,
    floating: e,
    strategy: s
  }), {
    x: d,
    y: p
  } = Sd(c, n, l), h = n, v = {}, y = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: g,
      fn: x
    } = a[m], {
      x: w,
      y: E,
      data: k,
      reset: C
    } = await x({
      x: d,
      y: p,
      initialPlacement: n,
      placement: h,
      strategy: s,
      middlewareData: v,
      rects: c,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = w ?? d, p = E ?? p, v = {
      ...v,
      [g]: {
        ...v[g],
        ...k
      }
    }, C && y <= 50 && (y++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (c = C.rects === !0 ? await i.getElementRects({
      reference: t,
      floating: e,
      strategy: s
    }) : C.rects), {
      x: d,
      y: p
    } = Sd(c, h, l)), m = -1);
  }
  return {
    x: d,
    y: p,
    placement: h,
    strategy: s,
    middlewareData: v
  };
};
async function $s(t, e) {
  var r;
  e === void 0 && (e = {});
  const {
    x: n,
    y: s,
    platform: o,
    rects: i,
    elements: a,
    strategy: l
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: h = !1,
    padding: v = 0
  } = cr(e, t), y = bv(v), m = a[h ? p === "floating" ? "reference" : "floating" : p], g = yi(await o.getClippingRect({
    element: (r = await (o.isElement == null ? void 0 : o.isElement(m))) == null || r ? m : m.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), x = p === "floating" ? {
    x: n,
    y: s,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), E = await (o.isElement == null ? void 0 : o.isElement(w)) ? await (o.getScale == null ? void 0 : o.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = yi(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: w,
    strategy: l
  }) : x);
  return {
    top: (g.top - k.top + y.top) / E.y,
    bottom: (k.bottom - g.bottom + y.bottom) / E.y,
    left: (g.left - k.left + y.left) / E.x,
    right: (k.right - g.right + y.right) / E.x
  };
}
const vj = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: r,
      y: n,
      placement: s,
      rects: o,
      platform: i,
      elements: a,
      middlewareData: l
    } = e, {
      element: c,
      padding: d = 0
    } = cr(t, e) || {};
    if (c == null)
      return {};
    const p = bv(d), h = {
      x: r,
      y: n
    }, v = Vc(s), y = Uc(v), m = await i.getDimensions(c), g = v === "y", x = g ? "top" : "left", w = g ? "bottom" : "right", E = g ? "clientHeight" : "clientWidth", k = o.reference[y] + o.reference[v] - h[v] - o.floating[y], C = h[v] - o.reference[v], A = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let O = A ? A[E] : 0;
    (!O || !await (i.isElement == null ? void 0 : i.isElement(A))) && (O = a.floating[E] || o.floating[y]);
    const R = k / 2 - C / 2, L = O / 2 - m[y] / 2 - 1, $ = Vt(p[x], L), oe = Vt(p[w], L), D = $, W = O - m[y] - oe, P = O / 2 - m[y] / 2 + R, B = vl(D, P, W), re = !l.arrow && Yn(s) != null && P !== B && o.reference[y] / 2 - (P < D ? $ : oe) - m[y] / 2 < 0, q = re ? P < D ? P - D : P - W : 0;
    return {
      [v]: h[v] + q,
      data: {
        [v]: B,
        centerOffset: P - B - q,
        ...re && {
          alignmentOffset: q
        }
      },
      reset: re
    };
  }
}), yj = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var r, n;
      const {
        placement: s,
        middlewareData: o,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: h,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: m = !0,
        ...g
      } = cr(t, e);
      if ((r = o.arrow) != null && r.alignmentOffset)
        return {};
      const x = ur(s), w = ur(a) === a, E = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = h || (w || !m ? [vi(a)] : fj(a));
      !h && y !== "none" && k.push(...hj(a, m, y, E));
      const C = [a, ...k], A = await $s(e, g), O = [];
      let R = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (d && O.push(A[x]), p) {
        const D = dj(s, i, E);
        O.push(A[D[0]], A[D[1]]);
      }
      if (R = [...R, {
        placement: s,
        overflows: O
      }], !O.every((D) => D <= 0)) {
        var L, $;
        const D = (((L = o.flip) == null ? void 0 : L.index) || 0) + 1, W = C[D];
        if (W)
          return {
            data: {
              index: D,
              overflows: R
            },
            reset: {
              placement: W
            }
          };
        let P = ($ = R.filter((B) => B.overflows[0] <= 0).sort((B, re) => B.overflows[1] - re.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!P)
          switch (v) {
            case "bestFit": {
              var oe;
              const B = (oe = R.map((re) => [re.placement, re.overflows.filter((q) => q > 0).reduce((q, pe) => q + pe, 0)]).sort((re, q) => re[1] - q[1])[0]) == null ? void 0 : oe[0];
              B && (P = B);
              break;
            }
            case "initialPlacement":
              P = a;
              break;
          }
        if (s !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function Rd(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Id(t) {
  return lj.some((e) => t[e] >= 0);
}
const bj = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: r
      } = e, {
        strategy: n = "referenceHidden",
        ...s
      } = cr(t, e);
      switch (n) {
        case "referenceHidden": {
          const o = await $s(e, {
            ...s,
            elementContext: "reference"
          }), i = Rd(o, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Id(i)
            }
          };
        }
        case "escaped": {
          const o = await $s(e, {
            ...s,
            altBoundary: !0
          }), i = Rd(o, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Id(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function wj(t, e) {
  const {
    placement: r,
    platform: n,
    elements: s
  } = t, o = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)), i = ur(r), a = Yn(r), l = Xn(r) === "y", c = ["left", "top"].includes(i) ? -1 : 1, d = o && l ? -1 : 1, p = cr(e, t);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: y
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return a && typeof y == "number" && (v = a === "end" ? y * -1 : y), l ? {
    x: v * d,
    y: h * c
  } : {
    x: h * c,
    y: v * d
  };
}
const xj = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var r, n;
      const {
        x: s,
        y: o,
        placement: i,
        middlewareData: a
      } = e, l = await wj(e, t);
      return i === ((r = a.offset) == null ? void 0 : r.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: s + l.x,
        y: o + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, _j = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: r,
        y: n,
        placement: s
      } = e, {
        mainAxis: o = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x,
              y: w
            } = g;
            return {
              x,
              y: w
            };
          }
        },
        ...l
      } = cr(t, e), c = {
        x: r,
        y: n
      }, d = await $s(e, l), p = Xn(ur(s)), h = Fc(p);
      let v = c[h], y = c[p];
      if (o) {
        const g = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", w = v + d[g], E = v - d[x];
        v = vl(w, v, E);
      }
      if (i) {
        const g = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", w = y + d[g], E = y - d[x];
        y = vl(w, y, E);
      }
      const m = a.fn({
        ...e,
        [h]: v,
        [p]: y
      });
      return {
        ...m,
        data: {
          x: m.x - r,
          y: m.y - n
        }
      };
    }
  };
}, Ej = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: r,
        y: n,
        placement: s,
        rects: o,
        middlewareData: i
      } = e, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = cr(t, e), d = {
        x: r,
        y: n
      }, p = Xn(s), h = Fc(p);
      let v = d[h], y = d[p];
      const m = cr(a, e), g = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const E = h === "y" ? "height" : "width", k = o.reference[h] - o.floating[E] + g.mainAxis, C = o.reference[h] + o.reference[E] - g.mainAxis;
        v < k ? v = k : v > C && (v = C);
      }
      if (c) {
        var x, w;
        const E = h === "y" ? "width" : "height", k = ["top", "left"].includes(ur(s)), C = o.reference[p] - o.floating[E] + (k && ((x = i.offset) == null ? void 0 : x[p]) || 0) + (k ? 0 : g.crossAxis), A = o.reference[p] + o.reference[E] + (k ? 0 : ((w = i.offset) == null ? void 0 : w[p]) || 0) - (k ? g.crossAxis : 0);
        y < C ? y = C : y > A && (y = A);
      }
      return {
        [h]: v,
        [p]: y
      };
    }
  };
}, Nj = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: r,
        rects: n,
        platform: s,
        elements: o
      } = e, {
        apply: i = () => {
        },
        ...a
      } = cr(t, e), l = await $s(e, a), c = ur(r), d = Yn(r), p = Xn(r) === "y", {
        width: h,
        height: v
      } = n.floating;
      let y, m;
      c === "top" || c === "bottom" ? (y = c, m = d === (await (s.isRTL == null ? void 0 : s.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (m = c, y = d === "end" ? "top" : "bottom");
      const g = v - l.top - l.bottom, x = h - l.left - l.right, w = Vt(v - l[y], g), E = Vt(h - l[m], x), k = !e.middlewareData.shift;
      let C = w, A = E;
      if (p ? A = d || k ? Vt(E, x) : x : C = d || k ? Vt(w, g) : g, k && !d) {
        const R = dt(l.left, 0), L = dt(l.right, 0), $ = dt(l.top, 0), oe = dt(l.bottom, 0);
        p ? A = h - 2 * (R !== 0 || L !== 0 ? R + L : dt(l.left, l.right)) : C = v - 2 * ($ !== 0 || oe !== 0 ? $ + oe : dt(l.top, l.bottom));
      }
      await i({
        ...e,
        availableWidth: A,
        availableHeight: C
      });
      const O = await s.getDimensions(o.floating);
      return h !== O.width || v !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Jn(t) {
  return wv(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function ht(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function pr(t) {
  var e;
  return (e = (wv(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function wv(t) {
  return t instanceof Node || t instanceof ht(t).Node;
}
function Zt(t) {
  return t instanceof Element || t instanceof ht(t).Element;
}
function Kt(t) {
  return t instanceof HTMLElement || t instanceof ht(t).HTMLElement;
}
function jd(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof ht(t).ShadowRoot;
}
function io(t) {
  const {
    overflow: e,
    overflowX: r,
    overflowY: n,
    display: s
  } = Pt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(s);
}
function kj(t) {
  return ["table", "td", "th"].includes(Jn(t));
}
function $c(t) {
  const e = zc(), r = Pt(t);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !e && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !e && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Cj(t) {
  let e = Ur(t);
  for (; Kt(e) && !zn(e); ) {
    if ($c(e))
      return e;
    e = Ur(e);
  }
  return null;
}
function zc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function zn(t) {
  return ["html", "body", "#document"].includes(Jn(t));
}
function Pt(t) {
  return ht(t).getComputedStyle(t);
}
function Qi(t) {
  return Zt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Ur(t) {
  if (Jn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    jd(t) && t.host || // Fallback.
    pr(t)
  );
  return jd(e) ? e.host : e;
}
function xv(t) {
  const e = Ur(t);
  return zn(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Kt(e) && io(e) ? e : xv(e);
}
function zs(t, e, r) {
  var n;
  e === void 0 && (e = []), r === void 0 && (r = !0);
  const s = xv(t), o = s === ((n = t.ownerDocument) == null ? void 0 : n.body), i = ht(s);
  return o ? e.concat(i, i.visualViewport || [], io(s) ? s : [], i.frameElement && r ? zs(i.frameElement) : []) : e.concat(s, zs(s, [], r));
}
function _v(t) {
  const e = Pt(t);
  let r = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const s = Kt(t), o = s ? t.offsetWidth : r, i = s ? t.offsetHeight : n, a = gi(r) !== o || gi(n) !== i;
  return a && (r = o, n = i), {
    width: r,
    height: n,
    $: a
  };
}
function Bc(t) {
  return Zt(t) ? t : t.contextElement;
}
function Dn(t) {
  const e = Bc(t);
  if (!Kt(e))
    return Fr(1);
  const r = e.getBoundingClientRect(), {
    width: n,
    height: s,
    $: o
  } = _v(e);
  let i = (o ? gi(r.width) : r.width) / n, a = (o ? gi(r.height) : r.height) / s;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Tj = /* @__PURE__ */ Fr(0);
function Ev(t) {
  const e = ht(t);
  return !zc() || !e.visualViewport ? Tj : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Sj(t, e, r) {
  return e === void 0 && (e = !1), !r || e && r !== ht(t) ? !1 : e;
}
function un(t, e, r, n) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const s = t.getBoundingClientRect(), o = Bc(t);
  let i = Fr(1);
  e && (n ? Zt(n) && (i = Dn(n)) : i = Dn(t));
  const a = Sj(o, r, n) ? Ev(o) : Fr(0);
  let l = (s.left + a.x) / i.x, c = (s.top + a.y) / i.y, d = s.width / i.x, p = s.height / i.y;
  if (o) {
    const h = ht(o), v = n && Zt(n) ? ht(n) : n;
    let y = h, m = y.frameElement;
    for (; m && n && v !== y; ) {
      const g = Dn(m), x = m.getBoundingClientRect(), w = Pt(m), E = x.left + (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, k = x.top + (m.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, c *= g.y, d *= g.x, p *= g.y, l += E, c += k, y = ht(m), m = y.frameElement;
    }
  }
  return yi({
    width: d,
    height: p,
    x: l,
    y: c
  });
}
const Rj = [":popover-open", ":modal"];
function Wc(t) {
  return Rj.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Ij(t) {
  let {
    elements: e,
    rect: r,
    offsetParent: n,
    strategy: s
  } = t;
  const o = s === "fixed", i = pr(n), a = e ? Wc(e.floating) : !1;
  if (n === i || a && o)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Fr(1);
  const d = Fr(0), p = Kt(n);
  if ((p || !p && !o) && ((Jn(n) !== "body" || io(i)) && (l = Qi(n)), Kt(n))) {
    const h = un(n);
    c = Dn(n), d.x = h.x + n.clientLeft, d.y = h.y + n.clientTop;
  }
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - l.scrollLeft * c.x + d.x,
    y: r.y * c.y - l.scrollTop * c.y + d.y
  };
}
function jj(t) {
  return Array.from(t.getClientRects());
}
function Nv(t) {
  return un(pr(t)).left + Qi(t).scrollLeft;
}
function Pj(t) {
  const e = pr(t), r = Qi(t), n = t.ownerDocument.body, s = dt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), o = dt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Nv(t);
  const a = -r.scrollTop;
  return Pt(n).direction === "rtl" && (i += dt(e.clientWidth, n.clientWidth) - s), {
    width: s,
    height: o,
    x: i,
    y: a
  };
}
function Oj(t, e) {
  const r = ht(t), n = pr(t), s = r.visualViewport;
  let o = n.clientWidth, i = n.clientHeight, a = 0, l = 0;
  if (s) {
    o = s.width, i = s.height;
    const c = zc();
    (!c || c && e === "fixed") && (a = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: a,
    y: l
  };
}
function Aj(t, e) {
  const r = un(t, !0, e === "fixed"), n = r.top + t.clientTop, s = r.left + t.clientLeft, o = Kt(t) ? Dn(t) : Fr(1), i = t.clientWidth * o.x, a = t.clientHeight * o.y, l = s * o.x, c = n * o.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Pd(t, e, r) {
  let n;
  if (e === "viewport")
    n = Oj(t, r);
  else if (e === "document")
    n = Pj(pr(t));
  else if (Zt(e))
    n = Aj(e, r);
  else {
    const s = Ev(t);
    n = {
      ...e,
      x: e.x - s.x,
      y: e.y - s.y
    };
  }
  return yi(n);
}
function kv(t, e) {
  const r = Ur(t);
  return r === e || !Zt(r) || zn(r) ? !1 : Pt(r).position === "fixed" || kv(r, e);
}
function Dj(t, e) {
  const r = e.get(t);
  if (r)
    return r;
  let n = zs(t, [], !1).filter((a) => Zt(a) && Jn(a) !== "body"), s = null;
  const o = Pt(t).position === "fixed";
  let i = o ? Ur(t) : t;
  for (; Zt(i) && !zn(i); ) {
    const a = Pt(i), l = $c(i);
    !l && a.position === "fixed" && (s = null), (o ? !l && !s : !l && a.position === "static" && s && ["absolute", "fixed"].includes(s.position) || io(i) && !l && kv(t, i)) ? n = n.filter((c) => c !== i) : s = a, i = Ur(i);
  }
  return e.set(t, n), n;
}
function Mj(t) {
  let {
    element: e,
    boundary: r,
    rootBoundary: n,
    strategy: s
  } = t;
  const o = [...r === "clippingAncestors" ? Wc(e) ? [] : Dj(e, this._c) : [].concat(r), n], i = o[0], a = o.reduce((l, c) => {
    const d = Pd(e, c, s);
    return l.top = dt(d.top, l.top), l.right = Vt(d.right, l.right), l.bottom = Vt(d.bottom, l.bottom), l.left = dt(d.left, l.left), l;
  }, Pd(e, i, s));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Lj(t) {
  const {
    width: e,
    height: r
  } = _v(t);
  return {
    width: e,
    height: r
  };
}
function Fj(t, e, r) {
  const n = Kt(e), s = pr(e), o = r === "fixed", i = un(t, !0, o, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Fr(0);
  if (n || !n && !o)
    if ((Jn(e) !== "body" || io(s)) && (a = Qi(e)), n) {
      const p = un(e, !0, o, e);
      l.x = p.x + e.clientLeft, l.y = p.y + e.clientTop;
    } else s && (l.x = Nv(s));
  const c = i.left + a.scrollLeft - l.x, d = i.top + a.scrollTop - l.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Ua(t) {
  return Pt(t).position === "static";
}
function Od(t, e) {
  return !Kt(t) || Pt(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Cv(t, e) {
  const r = ht(t);
  if (Wc(t))
    return r;
  if (!Kt(t)) {
    let s = Ur(t);
    for (; s && !zn(s); ) {
      if (Zt(s) && !Ua(s))
        return s;
      s = Ur(s);
    }
    return r;
  }
  let n = Od(t, e);
  for (; n && kj(n) && Ua(n); )
    n = Od(n, e);
  return n && zn(n) && Ua(n) && !$c(n) ? r : n || Cj(t) || r;
}
const Uj = async function(t) {
  const e = this.getOffsetParent || Cv, r = this.getDimensions, n = await r(t.floating);
  return {
    reference: Fj(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Vj(t) {
  return Pt(t).direction === "rtl";
}
const $j = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ij,
  getDocumentElement: pr,
  getClippingRect: Mj,
  getOffsetParent: Cv,
  getElementRects: Uj,
  getClientRects: jj,
  getDimensions: Lj,
  getScale: Dn,
  isElement: Zt,
  isRTL: Vj
};
function zj(t, e) {
  let r = null, n;
  const s = pr(t);
  function o() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), r = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const {
      left: c,
      top: d,
      width: p,
      height: h
    } = t.getBoundingClientRect();
    if (a || e(), !p || !h)
      return;
    const v = jo(d), y = jo(s.clientWidth - (c + p)), m = jo(s.clientHeight - (d + h)), g = jo(c), x = {
      rootMargin: -v + "px " + -y + "px " + -m + "px " + -g + "px",
      threshold: dt(0, Vt(1, l)) || 1
    };
    let w = !0;
    function E(k) {
      const C = k[0].intersectionRatio;
      if (C !== l) {
        if (!w)
          return i();
        C ? i(!1, C) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      r = new IntersectionObserver(E, {
        ...x,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(E, x);
    }
    r.observe(t);
  }
  return i(!0), o;
}
function Bj(t, e, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Bc(t), d = s || o ? [...c ? zs(c) : [], ...zs(e)] : [];
  d.forEach((x) => {
    s && x.addEventListener("scroll", r, {
      passive: !0
    }), o && x.addEventListener("resize", r);
  });
  const p = c && a ? zj(c, r) : null;
  let h = -1, v = null;
  i && (v = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === c && v && (v.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var E;
      (E = v) == null || E.observe(e);
    })), r();
  }), c && !l && v.observe(c), v.observe(e));
  let y, m = l ? un(t) : null;
  l && g();
  function g() {
    const x = un(t);
    m && (x.x !== m.x || x.y !== m.y || x.width !== m.width || x.height !== m.height) && r(), m = x, y = requestAnimationFrame(g);
  }
  return r(), () => {
    var x;
    d.forEach((w) => {
      s && w.removeEventListener("scroll", r), o && w.removeEventListener("resize", r);
    }), p == null || p(), (x = v) == null || x.disconnect(), v = null, l && cancelAnimationFrame(y);
  };
}
const Wj = xj, Hj = _j, Zj = yj, Kj = Nj, qj = bj, Ad = vj, Gj = Ej, Yj = (t, e, r) => {
  const n = /* @__PURE__ */ new Map(), s = {
    platform: $j,
    ...r
  }, o = {
    ...s.platform,
    _c: n
  };
  return gj(t, e, {
    ...s,
    platform: o
  });
};
var $o = typeof document < "u" ? zd : qe;
function bi(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let r, n, s;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (r = t.length, r !== e.length) return !1;
      for (n = r; n-- !== 0; )
        if (!bi(t[n], e[n]))
          return !1;
      return !0;
    }
    if (s = Object.keys(t), r = s.length, r !== Object.keys(e).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(e, s[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const o = s[n];
      if (!(o === "_owner" && t.$$typeof) && !bi(t[o], e[o]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function Tv(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dd(t, e) {
  const r = Tv(t);
  return Math.round(e * r) / r;
}
function Md(t) {
  const e = f.useRef(t);
  return $o(() => {
    e.current = t;
  }), e;
}
function Xj(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: s,
    elements: {
      reference: o,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = t, [d, p] = f.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [h, v] = f.useState(n);
  bi(h, n) || v(n);
  const [y, m] = f.useState(null), [g, x] = f.useState(null), w = f.useCallback((q) => {
    q !== A.current && (A.current = q, m(q));
  }, []), E = f.useCallback((q) => {
    q !== O.current && (O.current = q, x(q));
  }, []), k = o || y, C = i || g, A = f.useRef(null), O = f.useRef(null), R = f.useRef(d), L = l != null, $ = Md(l), oe = Md(s), D = f.useCallback(() => {
    if (!A.current || !O.current)
      return;
    const q = {
      placement: e,
      strategy: r,
      middleware: h
    };
    oe.current && (q.platform = oe.current), Yj(A.current, O.current, q).then((pe) => {
      const Z = {
        ...pe,
        isPositioned: !0
      };
      W.current && !bi(R.current, Z) && (R.current = Z, Ni.flushSync(() => {
        p(Z);
      }));
    });
  }, [h, e, r, oe]);
  $o(() => {
    c === !1 && R.current.isPositioned && (R.current.isPositioned = !1, p((q) => ({
      ...q,
      isPositioned: !1
    })));
  }, [c]);
  const W = f.useRef(!1);
  $o(() => (W.current = !0, () => {
    W.current = !1;
  }), []), $o(() => {
    if (k && (A.current = k), C && (O.current = C), k && C) {
      if ($.current)
        return $.current(k, C, D);
      D();
    }
  }, [k, C, D, $, L]);
  const P = f.useMemo(() => ({
    reference: A,
    floating: O,
    setReference: w,
    setFloating: E
  }), [w, E]), B = f.useMemo(() => ({
    reference: k,
    floating: C
  }), [k, C]), re = f.useMemo(() => {
    const q = {
      position: r,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return q;
    const pe = Dd(B.floating, d.x), Z = Dd(B.floating, d.y);
    return a ? {
      ...q,
      transform: "translate(" + pe + "px, " + Z + "px)",
      ...Tv(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: pe,
      top: Z
    };
  }, [r, a, B.floating, d.x, d.y]);
  return f.useMemo(() => ({
    ...d,
    update: D,
    refs: P,
    elements: B,
    floatingStyles: re
  }), [d, D, P, B, re]);
}
const Jj = (t) => {
  function e(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(r) {
      const {
        element: n,
        padding: s
      } = typeof t == "function" ? t(r) : t;
      return n && e(n) ? n.current != null ? Ad({
        element: n.current,
        padding: s
      }).fn(r) : {} : n ? Ad({
        element: n,
        padding: s
      }).fn(r) : {};
    }
  };
}, Qj = (t, e) => ({
  ...Wj(t),
  options: [t, e]
}), e1 = (t, e) => ({
  ...Hj(t),
  options: [t, e]
}), t1 = (t, e) => ({
  ...Gj(t),
  options: [t, e]
}), r1 = (t, e) => ({
  ...Zj(t),
  options: [t, e]
}), n1 = (t, e) => ({
  ...Kj(t),
  options: [t, e]
}), s1 = (t, e) => ({
  ...qj(t),
  options: [t, e]
}), o1 = (t, e) => ({
  ...Jj(t),
  options: [t, e]
});
var i1 = "Arrow", Sv = f.forwardRef((t, e) => {
  const { children: r, width: n = 10, height: s = 5, ...o } = t;
  return /* @__PURE__ */ u.jsx(
    se.svg,
    {
      ...o,
      ref: e,
      width: n,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? r : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Sv.displayName = i1;
var a1 = Sv, Rv = "Popper", [Iv, ea] = We(Rv), [lO, jv] = Iv(Rv), Pv = "PopperAnchor", Ov = f.forwardRef(
  (t, e) => {
    const { __scopePopper: r, virtualRef: n, ...s } = t, o = jv(Pv, r), i = f.useRef(null), a = be(e, i);
    return f.useEffect(() => {
      o.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ u.jsx(se.div, { ...s, ref: a });
  }
);
Ov.displayName = Pv;
var Hc = "PopperContent", [l1, c1] = Iv(Hc), Av = f.forwardRef(
  (t, e) => {
    var r, n, s, o, i, a;
    const {
      __scopePopper: l,
      side: c = "bottom",
      sideOffset: d = 0,
      align: p = "center",
      alignOffset: h = 0,
      arrowPadding: v = 0,
      avoidCollisions: y = !0,
      collisionBoundary: m = [],
      collisionPadding: g = 0,
      sticky: x = "partial",
      hideWhenDetached: w = !1,
      updatePositionStrategy: E = "optimized",
      onPlaced: k,
      ...C
    } = t, A = jv(Hc, l), [O, R] = f.useState(null), L = be(e, (yt) => R(yt)), [$, oe] = f.useState(null), D = oo($), W = (D == null ? void 0 : D.width) ?? 0, P = (D == null ? void 0 : D.height) ?? 0, B = c + (p !== "center" ? "-" + p : ""), re = typeof g == "number" ? g : { top: 0, right: 0, bottom: 0, left: 0, ...g }, q = Array.isArray(m) ? m : [m], pe = q.length > 0, Z = {
      padding: re,
      boundary: q.filter(d1),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: pe
    }, { refs: ge, floatingStyles: ke, placement: Te, isPositioned: Pe, middlewareData: De } = Xj({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: B,
      whileElementsMounted: (...yt) => Bj(...yt, {
        animationFrame: E === "always"
      }),
      elements: {
        reference: A.anchor
      },
      middleware: [
        Qj({ mainAxis: d + P, alignmentAxis: h }),
        y && e1({
          mainAxis: !0,
          crossAxis: !1,
          limiter: x === "partial" ? t1() : void 0,
          ...Z
        }),
        y && r1({ ...Z }),
        n1({
          ...Z,
          apply: ({ elements: yt, rects: mr, availableWidth: bt, availableHeight: lt }) => {
            const { width: gr, height: N } = mr.reference, T = yt.floating.style;
            T.setProperty("--radix-popper-available-width", `${bt}px`), T.setProperty("--radix-popper-available-height", `${lt}px`), T.setProperty("--radix-popper-anchor-width", `${gr}px`), T.setProperty("--radix-popper-anchor-height", `${N}px`);
          }
        }),
        $ && o1({ element: $, padding: v }),
        f1({ arrowWidth: W, arrowHeight: P }),
        w && s1({ strategy: "referenceHidden", ...Z })
      ]
    }), [Xe, Ge] = Lv(Te), Ne = $e(k);
    Et(() => {
      Pe && (Ne == null || Ne());
    }, [Pe, Ne]);
    const Me = (r = De.arrow) == null ? void 0 : r.x, Ue = (n = De.arrow) == null ? void 0 : n.y, Je = ((s = De.arrow) == null ? void 0 : s.centerOffset) !== 0, [hr, Gt] = f.useState();
    return Et(() => {
      O && Gt(window.getComputedStyle(O).zIndex);
    }, [O]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: ge.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ke,
          transform: Pe ? ke.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: hr,
          "--radix-popper-transform-origin": [
            (o = De.transformOrigin) == null ? void 0 : o.x,
            (i = De.transformOrigin) == null ? void 0 : i.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((a = De.hide) == null ? void 0 : a.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ u.jsx(
          l1,
          {
            scope: l,
            placedSide: Xe,
            onArrowChange: oe,
            arrowX: Me,
            arrowY: Ue,
            shouldHideArrow: Je,
            children: /* @__PURE__ */ u.jsx(
              se.div,
              {
                "data-side": Xe,
                "data-align": Ge,
                ...C,
                ref: L,
                style: {
                  ...C.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Pe ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Av.displayName = Hc;
var Dv = "PopperArrow", u1 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Mv = f.forwardRef(function(t, e) {
  const { __scopePopper: r, ...n } = t, s = c1(Dv, r), o = u1[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [o]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ u.jsx(
          a1,
          {
            ...n,
            ref: e,
            style: {
              ...n.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Mv.displayName = Dv;
function d1(t) {
  return t !== null;
}
var f1 = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var r, n, s;
    const { placement: o, rects: i, middlewareData: a } = e, l = ((r = a.arrow) == null ? void 0 : r.centerOffset) !== 0, c = l ? 0 : t.arrowWidth, d = l ? 0 : t.arrowHeight, [p, h] = Lv(o), v = { start: "0%", center: "50%", end: "100%" }[h], y = (((n = a.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, m = (((s = a.arrow) == null ? void 0 : s.y) ?? 0) + d / 2;
    let g = "", x = "";
    return p === "bottom" ? (g = l ? v : `${y}px`, x = `${-d}px`) : p === "top" ? (g = l ? v : `${y}px`, x = `${i.floating.height + d}px`) : p === "right" ? (g = `${-d}px`, x = l ? v : `${m}px`) : p === "left" && (g = `${i.floating.width + d}px`, x = l ? v : `${m}px`), { data: { x: g, y: x } };
  }
});
function Lv(t) {
  const [e, r = "center"] = t.split("-");
  return [e, r];
}
var Fv = Ov, Uv = Av, Vv = Mv, [ta] = We("Tooltip", [
  ea
]), Zc = ea(), p1 = "TooltipProvider", Ld = "tooltip.open", [cO, $v] = ta(p1), zv = "Tooltip", [uO, ra] = ta(zv), bl = "TooltipTrigger", h1 = f.forwardRef(
  (t, e) => {
    const { __scopeTooltip: r, ...n } = t, s = ra(bl, r), o = $v(bl, r), i = Zc(r), a = f.useRef(null), l = be(e, a, s.onTriggerChange), c = f.useRef(!1), d = f.useRef(!1), p = f.useCallback(() => c.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ u.jsx(Fv, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
      se.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...n,
        ref: l,
        onPointerMove: K(t.onPointerMove, (h) => {
          h.pointerType !== "touch" && !d.current && !o.isPointerInTransitRef.current && (s.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: K(t.onPointerLeave, () => {
          s.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: K(t.onPointerDown, () => {
          c.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: K(t.onFocus, () => {
          c.current || s.onOpen();
        }),
        onBlur: K(t.onBlur, s.onClose),
        onClick: K(t.onClick, s.onClose)
      }
    ) });
  }
);
h1.displayName = bl;
var m1 = "TooltipPortal", [dO, g1] = ta(m1, {
  forceMount: void 0
}), Bn = "TooltipContent", Bv = f.forwardRef(
  (t, e) => {
    const r = g1(Bn, t.__scopeTooltip), { forceMount: n = r.forceMount, side: s = "top", ...o } = t, i = ra(Bn, t.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(Ye, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ u.jsx(Wv, { side: s, ...o, ref: e }) : /* @__PURE__ */ u.jsx(v1, { side: s, ...o, ref: e }) });
  }
), v1 = f.forwardRef((t, e) => {
  const r = ra(Bn, t.__scopeTooltip), n = $v(Bn, t.__scopeTooltip), s = f.useRef(null), o = be(e, s), [i, a] = f.useState(null), { trigger: l, onClose: c } = r, d = s.current, { onPointerInTransitChange: p } = n, h = f.useCallback(() => {
    a(null), p(!1);
  }, [p]), v = f.useCallback(
    (y, m) => {
      const g = y.currentTarget, x = { x: y.clientX, y: y.clientY }, w = x1(x, g.getBoundingClientRect()), E = _1(x, w), k = E1(m.getBoundingClientRect()), C = k1([...E, ...k]);
      a(C), p(!0);
    },
    [p]
  );
  return f.useEffect(() => () => h(), [h]), f.useEffect(() => {
    if (l && d) {
      const y = (g) => v(g, d), m = (g) => v(g, l);
      return l.addEventListener("pointerleave", y), d.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", y), d.removeEventListener("pointerleave", m);
      };
    }
  }, [l, d, v, h]), f.useEffect(() => {
    if (i) {
      const y = (m) => {
        const g = m.target, x = { x: m.clientX, y: m.clientY }, w = (l == null ? void 0 : l.contains(g)) || (d == null ? void 0 : d.contains(g)), E = !N1(x, i);
        w ? h() : E && (h(), c());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [l, d, i, c, h]), /* @__PURE__ */ u.jsx(Wv, { ...t, ref: o });
}), [y1, b1] = ta(zv, { isInside: !1 }), Wv = f.forwardRef(
  (t, e) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": s,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      ...a
    } = t, l = ra(Bn, r), c = Zc(r), { onClose: d } = l;
    return f.useEffect(() => (document.addEventListener(Ld, d), () => document.removeEventListener(Ld, d)), [d]), f.useEffect(() => {
      if (l.trigger) {
        const p = (h) => {
          const v = h.target;
          v != null && v.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ u.jsx(
      so,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ u.jsxs(
          Uv,
          {
            "data-state": l.stateAttribute,
            ...c,
            ...a,
            ref: e,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ u.jsx(Wl, { children: n }),
              /* @__PURE__ */ u.jsx(y1, { scope: r, isInside: !0, children: /* @__PURE__ */ u.jsx(SI, { id: l.contentId, role: "tooltip", children: s || n }) })
            ]
          }
        )
      }
    );
  }
);
Bv.displayName = Bn;
var Hv = "TooltipArrow", w1 = f.forwardRef(
  (t, e) => {
    const { __scopeTooltip: r, ...n } = t, s = Zc(r);
    return b1(
      Hv,
      r
    ).isInside ? null : /* @__PURE__ */ u.jsx(Vv, { ...s, ...n, ref: e });
  }
);
w1.displayName = Hv;
function x1(t, e) {
  const r = Math.abs(e.top - t.y), n = Math.abs(e.bottom - t.y), s = Math.abs(e.right - t.x), o = Math.abs(e.left - t.x);
  switch (Math.min(r, n, s, o)) {
    case o:
      return "left";
    case s:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function _1(t, e, r = 5) {
  const n = [];
  switch (e) {
    case "top":
      n.push(
        { x: t.x - r, y: t.y + r },
        { x: t.x + r, y: t.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: t.x - r, y: t.y - r },
        { x: t.x + r, y: t.y - r }
      );
      break;
    case "left":
      n.push(
        { x: t.x + r, y: t.y - r },
        { x: t.x + r, y: t.y + r }
      );
      break;
    case "right":
      n.push(
        { x: t.x - r, y: t.y - r },
        { x: t.x - r, y: t.y + r }
      );
      break;
  }
  return n;
}
function E1(t) {
  const { top: e, right: r, bottom: n, left: s } = t;
  return [
    { x: s, y: e },
    { x: r, y: e },
    { x: r, y: n },
    { x: s, y: n }
  ];
}
function N1(t, e) {
  const { x: r, y: n } = t;
  let s = !1;
  for (let o = 0, i = e.length - 1; o < e.length; i = o++) {
    const a = e[o].x, l = e[o].y, c = e[i].x, d = e[i].y;
    l > n != d > n && r < (c - a) * (n - l) / (d - l) + a && (s = !s);
  }
  return s;
}
function k1(t) {
  const e = t.slice();
  return e.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), C1(e);
}
function C1(t) {
  if (t.length <= 1) return t.slice();
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (; e.length >= 2; ) {
      const o = e[e.length - 1], i = e[e.length - 2];
      if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x)) e.pop();
      else break;
    }
    e.push(s);
  }
  e.pop();
  const r = [];
  for (let n = t.length - 1; n >= 0; n--) {
    const s = t[n];
    for (; r.length >= 2; ) {
      const o = r[r.length - 1], i = r[r.length - 2];
      if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x)) r.pop();
      else break;
    }
    r.push(s);
  }
  return r.pop(), e.length === 1 && r.length === 1 && e[0].x === r[0].x && e[0].y === r[0].y ? e : e.concat(r);
}
var Zv = Bv;
const T1 = f.forwardRef(({ className: t, sideOffset: e = 4, ...r }, n) => /* @__PURE__ */ u.jsx(
  Zv,
  {
    ref: n,
    sideOffset: e,
    className: M(
      "z-50 overflow-hidden rounded-md border bg-white px-3 py-1.5 text-sm text-gray-900 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...r
  }
));
T1.displayName = Zv.displayName;
he(
  ({
    align: t,
    size: e,
    emphasis: r,
    italic: n,
    underline: s,
    weight: o,
    className: i,
    variant: a,
    children: l,
    ...c
  }, d) => /* @__PURE__ */ u.jsxs("div", { ref: d, ...c, children: [
    a === "one" && /* @__PURE__ */ u.jsx(
      Be,
      {
        as: "h1",
        className: i,
        size: e,
        weight: o,
        align: t,
        italic: n,
        underline: s,
        emphasis: r,
        children: l
      }
    ),
    a === "two" && /* @__PURE__ */ u.jsx(
      Be,
      {
        as: "h2",
        className: i,
        size: e,
        weight: o,
        align: t,
        italic: n,
        underline: s,
        emphasis: r,
        children: l
      }
    ),
    a === "three" && /* @__PURE__ */ u.jsx(
      Be,
      {
        as: "h3",
        className: i,
        size: e,
        weight: o,
        align: t,
        italic: n,
        underline: s,
        emphasis: r,
        children: l
      }
    ),
    a === "four" && /* @__PURE__ */ u.jsx(
      Be,
      {
        as: "h4",
        className: i,
        size: e,
        weight: o,
        align: t,
        italic: n,
        underline: s,
        emphasis: r,
        children: l
      }
    ),
    a === "five" && /* @__PURE__ */ u.jsx(
      Be,
      {
        as: "h5",
        className: i,
        size: e,
        weight: o,
        align: t,
        italic: n,
        underline: s,
        emphasis: r,
        children: l
      }
    ),
    a === "six" && /* @__PURE__ */ u.jsx(
      Be,
      {
        as: "h6",
        className: i,
        size: e,
        weight: o,
        align: t,
        italic: n,
        underline: s,
        emphasis: r,
        children: l
      }
    ),
    a === "para" && /* @__PURE__ */ u.jsx(
      Be,
      {
        as: "p",
        className: i,
        size: e,
        weight: o,
        align: t,
        italic: n,
        underline: s,
        emphasis: r,
        children: l
      }
    )
  ] })
);
var wl = ["Enter", " "], S1 = ["ArrowDown", "PageUp", "Home"], Kv = ["ArrowUp", "PageDown", "End"], R1 = [...S1, ...Kv], I1 = {
  ltr: [...wl, "ArrowRight"],
  rtl: [...wl, "ArrowLeft"]
}, j1 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, na = "Menu", [Bs, P1, O1] = no(na), [fn, qv] = We(na, [
  O1,
  ea,
  Wr
]), Kc = ea(), Gv = Wr(), [fO, Qn] = fn(na), [pO, ao] = fn(na), A1 = "MenuAnchor", qc = f.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, ...n } = t, s = Kc(r);
    return /* @__PURE__ */ u.jsx(Fv, { ...s, ...n, ref: e });
  }
);
qc.displayName = A1;
var D1 = "MenuPortal", [hO, Yv] = fn(D1, {
  forceMount: void 0
}), xt = "MenuContent", [M1, Gc] = fn(xt), Xv = f.forwardRef(
  (t, e) => {
    const r = Yv(xt, t.__scopeMenu), { forceMount: n = r.forceMount, ...s } = t, o = Qn(xt, t.__scopeMenu), i = ao(xt, t.__scopeMenu);
    return /* @__PURE__ */ u.jsx(Bs.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ u.jsx(Ye, { present: n || o.open, children: /* @__PURE__ */ u.jsx(Bs.Slot, { scope: t.__scopeMenu, children: i.modal ? /* @__PURE__ */ u.jsx(L1, { ...s, ref: e }) : /* @__PURE__ */ u.jsx(F1, { ...s, ref: e }) }) }) });
  }
), L1 = f.forwardRef(
  (t, e) => {
    const r = Qn(xt, t.__scopeMenu), n = f.useRef(null), s = be(e, n);
    return f.useEffect(() => {
      const o = n.current;
      if (o) return ac(o);
    }, []), /* @__PURE__ */ u.jsx(
      Yc,
      {
        ...t,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: K(
          t.onFocusOutside,
          (o) => o.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), F1 = f.forwardRef((t, e) => {
  const r = Qn(xt, t.__scopeMenu);
  return /* @__PURE__ */ u.jsx(
    Yc,
    {
      ...t,
      ref: e,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), Yc = f.forwardRef(
  (t, e) => {
    const {
      __scopeMenu: r,
      loop: n = !1,
      trapFocus: s,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: d,
      onFocusOutside: p,
      onInteractOutside: h,
      onDismiss: v,
      disableOutsideScroll: y,
      ...m
    } = t, g = Qn(xt, r), x = ao(xt, r), w = Kc(r), E = Gv(r), k = P1(r), [C, A] = f.useState(null), O = f.useRef(null), R = be(e, O, g.onContentChange), L = f.useRef(0), $ = f.useRef(""), oe = f.useRef(0), D = f.useRef(null), W = f.useRef("right"), P = f.useRef(0), B = y ? ic : f.Fragment, re = y ? { as: Lr, allowPinchZoom: !0 } : void 0, q = (Z) => {
      var ge, ke;
      const Te = $.current + Z, Pe = k().filter((Ue) => !Ue.disabled), De = document.activeElement, Xe = (ge = Pe.find((Ue) => Ue.ref.current === De)) == null ? void 0 : ge.textValue, Ge = Pe.map((Ue) => Ue.textValue), Ne = Y1(Ge, Te, Xe), Me = (ke = Pe.find((Ue) => Ue.textValue === Ne)) == null ? void 0 : ke.ref.current;
      (function Ue(Je) {
        $.current = Je, window.clearTimeout(L.current), Je !== "" && (L.current = window.setTimeout(() => Ue(""), 1e3));
      })(Te), Me && setTimeout(() => Me.focus());
    };
    f.useEffect(() => () => window.clearTimeout(L.current), []), Bp();
    const pe = f.useCallback((Z) => {
      var ge, ke;
      return W.current === ((ge = D.current) == null ? void 0 : ge.side) && J1(Z, (ke = D.current) == null ? void 0 : ke.area);
    }, []);
    return /* @__PURE__ */ u.jsx(
      M1,
      {
        scope: r,
        searchRef: $,
        onItemEnter: f.useCallback(
          (Z) => {
            pe(Z) && Z.preventDefault();
          },
          [pe]
        ),
        onItemLeave: f.useCallback(
          (Z) => {
            var ge;
            pe(Z) || ((ge = O.current) == null || ge.focus(), A(null));
          },
          [pe]
        ),
        onTriggerLeave: f.useCallback(
          (Z) => {
            pe(Z) && Z.preventDefault();
          },
          [pe]
        ),
        pointerGraceTimerRef: oe,
        onPointerGraceIntentChange: f.useCallback((Z) => {
          D.current = Z;
        }, []),
        children: /* @__PURE__ */ u.jsx(B, { ...re, children: /* @__PURE__ */ u.jsx(
          nc,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: K(o, (Z) => {
              var ge;
              Z.preventDefault(), (ge = O.current) == null || ge.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ u.jsx(
              so,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: p,
                onInteractOutside: h,
                onDismiss: v,
                children: /* @__PURE__ */ u.jsx(
                  Hi,
                  {
                    asChild: !0,
                    ...E,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: K(l, (Z) => {
                      x.isUsingKeyboardRef.current || Z.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u.jsx(
                      Uv,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": py(g.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...w,
                        ...m,
                        ref: R,
                        style: { outline: "none", ...m.style },
                        onKeyDown: K(m.onKeyDown, (Z) => {
                          const ge = Z.target.closest("[data-radix-menu-content]") === Z.currentTarget, ke = Z.ctrlKey || Z.altKey || Z.metaKey, Te = Z.key.length === 1;
                          ge && (Z.key === "Tab" && Z.preventDefault(), !ke && Te && q(Z.key));
                          const Pe = O.current;
                          if (Z.target !== Pe || !R1.includes(Z.key)) return;
                          Z.preventDefault();
                          const De = k().filter((Xe) => !Xe.disabled).map((Xe) => Xe.ref.current);
                          Kv.includes(Z.key) && De.reverse(), q1(De);
                        }),
                        onBlur: K(t.onBlur, (Z) => {
                          Z.currentTarget.contains(Z.target) || (window.clearTimeout(L.current), $.current = "");
                        }),
                        onPointerMove: K(
                          t.onPointerMove,
                          Ws((Z) => {
                            const ge = Z.target, ke = P.current !== Z.clientX;
                            if (Z.currentTarget.contains(ge) && ke) {
                              const Te = Z.clientX > P.current ? "right" : "left";
                              W.current = Te, P.current = Z.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Xv.displayName = xt;
var U1 = "MenuGroup", Xc = f.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, ...n } = t;
    return /* @__PURE__ */ u.jsx(se.div, { role: "group", ...n, ref: e });
  }
);
Xc.displayName = U1;
var V1 = "MenuLabel", Jv = f.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, ...n } = t;
    return /* @__PURE__ */ u.jsx(se.div, { ...n, ref: e });
  }
);
Jv.displayName = V1;
var wi = "MenuItem", Fd = "menu.itemSelect", sa = f.forwardRef(
  (t, e) => {
    const { disabled: r = !1, onSelect: n, ...s } = t, o = f.useRef(null), i = ao(wi, t.__scopeMenu), a = Gc(wi, t.__scopeMenu), l = be(e, o), c = f.useRef(!1), d = () => {
      const p = o.current;
      if (!r && p) {
        const h = new CustomEvent(Fd, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Fd, (v) => n == null ? void 0 : n(v), { once: !0 }), Hl(p, h), h.defaultPrevented ? c.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ u.jsx(
      Qv,
      {
        ...s,
        ref: l,
        disabled: r,
        onClick: K(t.onClick, d),
        onPointerDown: (p) => {
          var h;
          (h = t.onPointerDown) == null || h.call(t, p), c.current = !0;
        },
        onPointerUp: K(t.onPointerUp, (p) => {
          var h;
          c.current || (h = p.currentTarget) == null || h.click();
        }),
        onKeyDown: K(t.onKeyDown, (p) => {
          const h = a.searchRef.current !== "";
          r || h && p.key === " " || wl.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
sa.displayName = wi;
var Qv = f.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: s, ...o } = t, i = Gc(wi, r), a = Gv(r), l = f.useRef(null), c = be(e, l), [d, p] = f.useState(!1), [h, v] = f.useState("");
    return f.useEffect(() => {
      const y = l.current;
      y && v((y.textContent ?? "").trim());
    }, [o.children]), /* @__PURE__ */ u.jsx(
      Bs.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: s ?? h,
        children: /* @__PURE__ */ u.jsx(Zi, { asChild: !0, ...a, focusable: !n, children: /* @__PURE__ */ u.jsx(
          se.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...o,
            ref: c,
            onPointerMove: K(
              t.onPointerMove,
              Ws((y) => {
                n ? i.onItemLeave(y) : (i.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: K(
              t.onPointerLeave,
              Ws((y) => i.onItemLeave(y))
            ),
            onFocus: K(t.onFocus, () => p(!0)),
            onBlur: K(t.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), $1 = "MenuCheckboxItem", ey = f.forwardRef(
  (t, e) => {
    const { checked: r = !1, onCheckedChange: n, ...s } = t;
    return /* @__PURE__ */ u.jsx(oy, { scope: t.__scopeMenu, checked: r, children: /* @__PURE__ */ u.jsx(
      sa,
      {
        role: "menuitemcheckbox",
        "aria-checked": xi(r) ? "mixed" : r,
        ...s,
        ref: e,
        "data-state": Qc(r),
        onSelect: K(
          s.onSelect,
          () => n == null ? void 0 : n(xi(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ey.displayName = $1;
var ty = "MenuRadioGroup", [z1, B1] = fn(
  ty,
  { value: void 0, onValueChange: () => {
  } }
), ry = f.forwardRef(
  (t, e) => {
    const { value: r, onValueChange: n, ...s } = t, o = $e(n);
    return /* @__PURE__ */ u.jsx(z1, { scope: t.__scopeMenu, value: r, onValueChange: o, children: /* @__PURE__ */ u.jsx(Xc, { ...s, ref: e }) });
  }
);
ry.displayName = ty;
var ny = "MenuRadioItem", sy = f.forwardRef(
  (t, e) => {
    const { value: r, ...n } = t, s = B1(ny, t.__scopeMenu), o = r === s.value;
    return /* @__PURE__ */ u.jsx(oy, { scope: t.__scopeMenu, checked: o, children: /* @__PURE__ */ u.jsx(
      sa,
      {
        role: "menuitemradio",
        "aria-checked": o,
        ...n,
        ref: e,
        "data-state": Qc(o),
        onSelect: K(
          n.onSelect,
          () => {
            var i;
            return (i = s.onValueChange) == null ? void 0 : i.call(s, r);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
sy.displayName = ny;
var Jc = "MenuItemIndicator", [oy, W1] = fn(
  Jc,
  { checked: !1 }
), iy = f.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, forceMount: n, ...s } = t, o = W1(Jc, r);
    return /* @__PURE__ */ u.jsx(
      Ye,
      {
        present: n || xi(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          se.span,
          {
            ...s,
            ref: e,
            "data-state": Qc(o.checked)
          }
        )
      }
    );
  }
);
iy.displayName = Jc;
var H1 = "MenuSeparator", ay = f.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, ...n } = t;
    return /* @__PURE__ */ u.jsx(
      se.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: e
      }
    );
  }
);
ay.displayName = H1;
var Z1 = "MenuArrow", ly = f.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, ...n } = t, s = Kc(r);
    return /* @__PURE__ */ u.jsx(Vv, { ...s, ...n, ref: e });
  }
);
ly.displayName = Z1;
var K1 = "MenuSub", [mO, cy] = fn(K1), hs = "MenuSubTrigger", uy = f.forwardRef(
  (t, e) => {
    const r = Qn(hs, t.__scopeMenu), n = ao(hs, t.__scopeMenu), s = cy(hs, t.__scopeMenu), o = Gc(hs, t.__scopeMenu), i = f.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = o, c = { __scopeMenu: t.__scopeMenu }, d = f.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return f.useEffect(() => d, [d]), f.useEffect(() => {
      const p = a.current;
      return () => {
        window.clearTimeout(p), l(null);
      };
    }, [a, l]), /* @__PURE__ */ u.jsx(qc, { asChild: !0, ...c, children: /* @__PURE__ */ u.jsx(
      Qv,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": s.contentId,
        "data-state": py(r.open),
        ...t,
        ref: ji(e, s.onTriggerChange),
        onClick: (p) => {
          var h;
          (h = t.onClick) == null || h.call(t, p), !(t.disabled || p.defaultPrevented) && (p.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: K(
          t.onPointerMove,
          Ws((p) => {
            o.onItemEnter(p), !p.defaultPrevented && !t.disabled && !r.open && !i.current && (o.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: K(
          t.onPointerLeave,
          Ws((p) => {
            var h, v;
            d();
            const y = (h = r.content) == null ? void 0 : h.getBoundingClientRect();
            if (y) {
              const m = (v = r.content) == null ? void 0 : v.dataset.side, g = m === "right", x = g ? -5 : 5, w = y[g ? "left" : "right"], E = y[g ? "right" : "left"];
              o.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + x, y: p.clientY },
                  { x: w, y: y.top },
                  { x: E, y: y.top },
                  { x: E, y: y.bottom },
                  { x: w, y: y.bottom }
                ],
                side: m
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => o.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (o.onTriggerLeave(p), p.defaultPrevented) return;
              o.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: K(t.onKeyDown, (p) => {
          var h;
          const v = o.searchRef.current !== "";
          t.disabled || v && p.key === " " || I1[n.dir].includes(p.key) && (r.onOpenChange(!0), (h = r.content) == null || h.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
uy.displayName = hs;
var dy = "MenuSubContent", fy = f.forwardRef(
  (t, e) => {
    const r = Yv(xt, t.__scopeMenu), { forceMount: n = r.forceMount, ...s } = t, o = Qn(xt, t.__scopeMenu), i = ao(xt, t.__scopeMenu), a = cy(dy, t.__scopeMenu), l = f.useRef(null), c = be(e, l);
    return /* @__PURE__ */ u.jsx(Bs.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ u.jsx(Ye, { present: n || o.open, children: /* @__PURE__ */ u.jsx(Bs.Slot, { scope: t.__scopeMenu, children: /* @__PURE__ */ u.jsx(
      Yc,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...s,
        ref: c,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var p;
          i.isUsingKeyboardRef.current && ((p = l.current) == null || p.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: K(t.onFocusOutside, (d) => {
          d.target !== a.trigger && o.onOpenChange(!1);
        }),
        onEscapeKeyDown: K(t.onEscapeKeyDown, (d) => {
          i.onClose(), d.preventDefault();
        }),
        onKeyDown: K(t.onKeyDown, (d) => {
          var p;
          const h = d.currentTarget.contains(d.target), v = j1[i.dir].includes(d.key);
          h && v && (o.onOpenChange(!1), (p = a.trigger) == null || p.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
fy.displayName = dy;
function py(t) {
  return t ? "open" : "closed";
}
function xi(t) {
  return t === "indeterminate";
}
function Qc(t) {
  return xi(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function q1(t) {
  const e = document.activeElement;
  for (const r of t)
    if (r === e || (r.focus(), document.activeElement !== e)) return;
}
function G1(t, e) {
  return t.map((r, n) => t[(e + n) % t.length]);
}
function Y1(t, e, r) {
  const n = e.length > 1 && Array.from(e).every((a) => a === e[0]) ? e[0] : e, s = r ? t.indexOf(r) : -1;
  let o = G1(t, Math.max(s, 0));
  n.length === 1 && (o = o.filter((a) => a !== r));
  const i = o.find(
    (a) => a.toLowerCase().startsWith(n.toLowerCase())
  );
  return i !== r ? i : void 0;
}
function X1(t, e) {
  const { x: r, y: n } = t;
  let s = !1;
  for (let o = 0, i = e.length - 1; o < e.length; i = o++) {
    const a = e[o].x, l = e[o].y, c = e[i].x, d = e[i].y;
    l > n != d > n && r < (c - a) * (n - l) / (d - l) + a && (s = !s);
  }
  return s;
}
function J1(t, e) {
  if (!e) return !1;
  const r = { x: t.clientX, y: t.clientY };
  return X1(r, e);
}
function Ws(t) {
  return (e) => e.pointerType === "mouse" ? t(e) : void 0;
}
var Q1 = qc, eP = Xv, tP = Xc, rP = Jv, nP = sa, sP = ey, oP = ry, iP = sy, aP = iy, lP = ay, cP = ly, uP = uy, dP = fy, hy = "DropdownMenu", [fP] = We(
  hy,
  [qv]
), vt = qv(), [gO, my] = fP(hy), gy = "DropdownMenuTrigger", pP = f.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...s } = t, o = my(gy, r), i = vt(r);
    return /* @__PURE__ */ u.jsx(Q1, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
      se.button,
      {
        type: "button",
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": o.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...s,
        ref: ji(e, o.triggerRef),
        onPointerDown: K(t.onPointerDown, (a) => {
          !n && a.button === 0 && a.ctrlKey === !1 && (o.onOpenToggle(), o.open || a.preventDefault());
        }),
        onKeyDown: K(t.onKeyDown, (a) => {
          n || (["Enter", " "].includes(a.key) && o.onOpenToggle(), a.key === "ArrowDown" && o.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
pP.displayName = gy;
var vy = "DropdownMenuContent", hP = f.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, ...n } = t, s = my(vy, r), o = vt(r), i = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      eP,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ...n,
        ref: e,
        onCloseAutoFocus: K(t.onCloseAutoFocus, (a) => {
          var l;
          i.current || (l = s.triggerRef.current) == null || l.focus(), i.current = !1, a.preventDefault();
        }),
        onInteractOutside: K(t.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, d = l.button === 2 || c;
          (!s.modal || d) && (i.current = !0);
        }),
        style: {
          ...t.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
hP.displayName = vy;
var mP = "DropdownMenuGroup", gP = f.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
    return /* @__PURE__ */ u.jsx(tP, { ...s, ...n, ref: e });
  }
);
gP.displayName = mP;
var vP = "DropdownMenuLabel", yP = f.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
    return /* @__PURE__ */ u.jsx(rP, { ...s, ...n, ref: e });
  }
);
yP.displayName = vP;
var bP = "DropdownMenuItem", wP = f.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
    return /* @__PURE__ */ u.jsx(nP, { ...s, ...n, ref: e });
  }
);
wP.displayName = bP;
var xP = "DropdownMenuCheckboxItem", _P = f.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
  return /* @__PURE__ */ u.jsx(sP, { ...s, ...n, ref: e });
});
_P.displayName = xP;
var EP = "DropdownMenuRadioGroup", NP = f.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
  return /* @__PURE__ */ u.jsx(oP, { ...s, ...n, ref: e });
});
NP.displayName = EP;
var kP = "DropdownMenuRadioItem", CP = f.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
  return /* @__PURE__ */ u.jsx(iP, { ...s, ...n, ref: e });
});
CP.displayName = kP;
var TP = "DropdownMenuItemIndicator", SP = f.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
  return /* @__PURE__ */ u.jsx(aP, { ...s, ...n, ref: e });
});
SP.displayName = TP;
var RP = "DropdownMenuSeparator", IP = f.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
  return /* @__PURE__ */ u.jsx(lP, { ...s, ...n, ref: e });
});
IP.displayName = RP;
var jP = "DropdownMenuArrow", PP = f.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
    return /* @__PURE__ */ u.jsx(cP, { ...s, ...n, ref: e });
  }
);
PP.displayName = jP;
var OP = "DropdownMenuSubTrigger", AP = f.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
  return /* @__PURE__ */ u.jsx(uP, { ...s, ...n, ref: e });
});
AP.displayName = OP;
var DP = "DropdownMenuSubContent", MP = f.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, s = vt(r);
  return /* @__PURE__ */ u.jsx(
    dP,
    {
      ...s,
      ...n,
      ref: e,
      style: {
        ...t.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
MP.displayName = DP;
var yy = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ud = J.createContext && /* @__PURE__ */ J.createContext(yy), LP = ["attr", "size", "title"];
function FP(t, e) {
  if (t == null) return {};
  var r = UP(t, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (s = 0; s < o.length; s++)
      n = o[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function UP(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function _i() {
  return _i = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, _i.apply(this, arguments);
}
function Vd(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ei(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vd(Object(r), !0).forEach(function(n) {
      VP(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Vd(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function VP(t, e, r) {
  return e = $P(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function $P(t) {
  var e = zP(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function zP(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function by(t) {
  return t && t.map((e, r) => /* @__PURE__ */ J.createElement(e.tag, Ei({
    key: r
  }, e.attr), by(e.child)));
}
function BP(t) {
  return (e) => /* @__PURE__ */ J.createElement(WP, _i({
    attr: Ei({}, t.attr)
  }, e), by(t.child));
}
function WP(t) {
  var e = (r) => {
    var {
      attr: n,
      size: s,
      title: o
    } = t, i = FP(t, LP), a = s || r.size || "1em", l;
    return r.className && (l = r.className), t.className && (l = (l ? l + " " : "") + t.className), /* @__PURE__ */ J.createElement("svg", _i({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, i, {
      className: l,
      style: Ei(Ei({
        color: t.color || r.color
      }, r.style), t.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ J.createElement("title", null, o), t.children);
  };
  return Ud !== void 0 ? /* @__PURE__ */ J.createElement(Ud.Consumer, null, (r) => e(r)) : e(yy);
}
function wy(t) {
  return BP({ tag: "svg", attr: { version: "1.1", x: "0px", y: "0px", viewBox: "0 0 48 48", enableBackground: "new 0 0 48 48" }, child: [{ tag: "path", attr: { fill: "#FFC107", d: `M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z` }, child: [] }, { tag: "path", attr: { fill: "#FF3D00", d: `M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z` }, child: [] }, { tag: "path", attr: { fill: "#4CAF50", d: `M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z` }, child: [] }, { tag: "path", attr: { fill: "#1976D2", d: `M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z` }, child: [] }] })(t);
}
const HP = ({
  logoUrl: t,
  handleSubmitOn: e,
  handleSubmit: r,
  handleSubmitForm: n,
  register: s,
  errors: o,
  isLoading: i,
  library: a,
  type: l,
  forgetPasswordUrl: c,
  redirectSignupUrl: d,
  PreviewDescription: p,
  previewTitle: h,
  previewImg: v,
  showSignUp: y,
  showSignOn: m = !0
}) => {
  var g, x;
  return /* @__PURE__ */ S.jsxs("div", { className: "flex flex-wrap w-screen h-screen", children: [
    /* @__PURE__ */ S.jsx("div", { className: "flex w-full flex-col md:w-[40%]", children: /* @__PURE__ */ S.jsxs("div", { className: "w-[80%] ml-12 my-auto flex flex-col pt-8 md:px-6 md:pt-0", children: [
      /* @__PURE__ */ S.jsx(
        "a",
        {
          href: "#",
          className: "py-4 text-2xl font-semibold text-gray-900 dark:text-white",
          children: /* @__PURE__ */ S.jsx("img", { className: "w-auto h-10", src: t, alt: "" })
        }
      ),
      m && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("p", { className: "text-left text-3xl font-bold", children: "Sign in to your account" }),
        /* @__PURE__ */ S.jsxs(
          "button",
          {
            className: "-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white",
            onClick: () => e("google"),
            children: [
              /* @__PURE__ */ S.jsx(wy, { className: "mr-2" }),
              "Log in with Google"
            ]
          }
        ),
        /* @__PURE__ */ S.jsx("div", { className: "relative mt-8 flex h-px place-items-center bg-gray-200", children: /* @__PURE__ */ S.jsx("div", { className: "absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500", children: "or" }) })
      ] }),
      /* @__PURE__ */ S.jsxs(
        "form",
        {
          className: "flex flex-col pt-3 md:pt-8",
          onSubmit: r(n),
          children: [
            /* @__PURE__ */ S.jsx("div", { className: "flex flex-col pt-4", children: /* @__PURE__ */ S.jsx(
              Bt,
              {
                type: "email",
                id: "login-email",
                className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                placeholder: "Email",
                fullWidth: !0,
                ...s("email", { required: !0 }),
                errorMsg: (g = o.email) == null ? void 0 : g.message
              }
            ) }),
            /* @__PURE__ */ S.jsx("div", { className: "mb-12 flex flex-col pt-4", children: /* @__PURE__ */ S.jsx(
              Bt,
              {
                type: "password",
                id: "login-password",
                className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                placeholder: "Password",
                fullWidth: !0,
                ...s("password", { required: !0 }),
                errorMsg: (x = o.password) == null ? void 0 : x.message
              }
            ) }),
            /* @__PURE__ */ S.jsx(
              pt,
              {
                variant: "primary",
                color: "primary",
                type: "submit",
                className: "w-full rounded-lg px-4 py-2 text-center text-base font-semibold shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2",
                fullWidth: !0,
                disabled: i,
                children: "Sign in"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ S.jsx("div", { className: "flex items-center justify-between my-6", children: /* @__PURE__ */ S.jsxs("div", { children: [
        a === "react" && /* @__PURE__ */ S.jsx(
          Be,
          {
            as: l,
            to: c,
            className: "text-primary-600 text-sm dark:text-primary-500 font-thin hover:underline",
            children: "Forget Password?"
          }
        ),
        a === "next" && /* @__PURE__ */ S.jsx(
          Be,
          {
            as: l,
            href: c,
            className: "text-primary-600 text-sm dark:text-primary-500 font-thin hover:underline",
            children: "Forget Password?"
          }
        )
      ] }) }),
      y && /* @__PURE__ */ S.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ S.jsxs("p", { className: "whitespace-nowrap text-gray-600", children: [
        "Don't have an account?",
        " ",
        a === "react" && /* @__PURE__ */ S.jsx(
          Be,
          {
            as: l,
            to: d,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign Up"
          }
        ),
        a === "next" && /* @__PURE__ */ S.jsx(
          Be,
          {
            as: l,
            href: d,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign Up"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ S.jsxs("div", { className: "pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "absolute bottom-0 z-10 px-8 text-white opacity-100", children: [
        /* @__PURE__ */ S.jsx("p", { className: "mb-8 text-3xl font-semibold leading-10", children: p }),
        /* @__PURE__ */ S.jsx("p", { className: "mb-7 text-sm opacity-70", children: h })
      ] }),
      /* @__PURE__ */ S.jsx(
        "img",
        {
          className: "-z-1 absolute top-0 h-full w-full object-cover opacity-90",
          src: v
        }
      )
    ] })
  ] });
}, ZP = ot.object({
  email: ot.string().min(1, { message: "Please enter a valid email" }).email({ message: "Not a valid email" }),
  password: ot.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" })
}), vO = ({
  library: t,
  type: e,
  forgetPasswordUrl: r,
  redirectSignupUrl: n,
  previewImg: s,
  previewTitle: o,
  PreviewDescription: i,
  handleSignIn: a,
  isLoading: l,
  handleSignOn: c,
  handleSignOnError: d,
  logoUrl: p,
  varient: h = "basic",
  showSignUp: v = !0
}) => {
  const { login: y, signInWithGoogle: m } = Hn(), {
    register: g,
    handleSubmit: x,
    formState: { errors: w }
  } = to({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: ro(ZP)
  }), E = (C) => {
    y(C.email, C.password).then(() => {
      a({ email: C.email, password: C.password }), console.log("Sign In Success");
    }).catch((A) => {
      console.log("Error: " + A);
    });
  }, k = (C) => {
    C === "google" && m().then((A) => c && c(A)).catch((A) => d && d(A));
  };
  if (h === "basic")
    return /* @__PURE__ */ S.jsx(
      HP,
      {
        logoUrl: p,
        handleSubmitOn: k,
        handleSubmit: x,
        handleSubmitForm: E,
        register: g,
        errors: w,
        isLoading: l,
        library: t,
        type: e,
        forgetPasswordUrl: r,
        redirectSignupUrl: n,
        PreviewDescription: i,
        previewTitle: o,
        previewImg: s,
        showSignUp: v
      }
    );
}, KP = ({
  logoUrl: t,
  handleSubmitOn: e,
  handleSubmit: r,
  handleSubmitForm: n,
  register: s,
  errors: o,
  isLoading: i,
  library: a,
  type: l,
  redirectSignInUrl: c,
  PreviewDescription: d,
  previewTitle: p,
  previewImg: h,
  showSignIn: v,
  showSignOn: y
}) => {
  var m, g, x;
  return /* @__PURE__ */ S.jsxs("div", { className: "flex flex-wrap w-screen h-screen", children: [
    /* @__PURE__ */ S.jsx("div", { className: "flex w-full flex-col md:w-[40%]", children: /* @__PURE__ */ S.jsxs("div", { className: "w-[80%] ml-12 my-auto flex flex-col pt-8 md:px-6 md:pt-0", children: [
      /* @__PURE__ */ S.jsx(
        "a",
        {
          href: "#",
          className: "py-4 text-2xl font-semibold text-gray-900 dark:text-white",
          children: /* @__PURE__ */ S.jsx("img", { className: "w-auto h-10", src: t, alt: "" })
        }
      ),
      y && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("p", { className: "text-left text-3xl font-bold", children: "Create a new account" }),
        /* @__PURE__ */ S.jsxs(
          "button",
          {
            className: "-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white",
            onClick: () => e("google"),
            children: [
              /* @__PURE__ */ S.jsx(wy, { className: "mr-2" }),
              "Sign Up with Google"
            ]
          }
        ),
        /* @__PURE__ */ S.jsx("div", { className: "relative mt-8 flex h-px place-items-center bg-gray-200", children: /* @__PURE__ */ S.jsx("div", { className: "absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500", children: "or" }) })
      ] }),
      /* @__PURE__ */ S.jsxs(
        "form",
        {
          className: "flex flex-col pt-3 md:pt-8",
          onSubmit: r(n),
          children: [
            /* @__PURE__ */ S.jsx("div", { className: "flex flex-col pt-4", children: /* @__PURE__ */ S.jsx(
              Bt,
              {
                type: "username",
                id: "login-username",
                className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                placeholder: "First and Last Name",
                fullWidth: !0,
                ...s("username", { required: !0 }),
                errorMsg: (m = o.username) == null ? void 0 : m.message
              }
            ) }),
            /* @__PURE__ */ S.jsx("div", { className: "flex flex-col pt-4", children: /* @__PURE__ */ S.jsx(
              Bt,
              {
                type: "email",
                id: "login-email",
                className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                placeholder: "Email",
                fullWidth: !0,
                ...s("email", { required: !0 }),
                errorMsg: (g = o.email) == null ? void 0 : g.message
              }
            ) }),
            /* @__PURE__ */ S.jsx("div", { className: "mb-12 flex flex-col pt-4", children: /* @__PURE__ */ S.jsx(
              Bt,
              {
                type: "password",
                id: "login-password",
                className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                placeholder: "Password",
                fullWidth: !0,
                ...s("password", { required: !0 }),
                errorMsg: (x = o.password) == null ? void 0 : x.message
              }
            ) }),
            /* @__PURE__ */ S.jsx(
              pt,
              {
                variant: "primary",
                color: "primary",
                type: "submit",
                className: "w-full rounded-lg px-4 py-2 text-center text-base font-semibold shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2",
                fullWidth: !0,
                disabled: i,
                children: "Sign Up"
              }
            )
          ]
        }
      ),
      v && /* @__PURE__ */ S.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ S.jsxs("p", { className: "whitespace-nowrap text-gray-600", children: [
        "Already have an account?",
        " ",
        a === "react" && /* @__PURE__ */ S.jsx(
          Be,
          {
            as: l,
            to: c,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign In"
          }
        ),
        a === "next" && /* @__PURE__ */ S.jsx(
          Be,
          {
            as: l,
            href: c,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign In"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ S.jsxs("div", { className: "pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "absolute bottom-0 z-10 px-8 text-white opacity-100", children: [
        /* @__PURE__ */ S.jsx("p", { className: "mb-8 text-3xl font-semibold leading-10", children: d }),
        /* @__PURE__ */ S.jsx("p", { className: "mb-7 text-sm opacity-70", children: p })
      ] }),
      /* @__PURE__ */ S.jsx(
        "img",
        {
          className: "-z-1 absolute top-0 h-full w-full object-cover opacity-90",
          src: h
        }
      )
    ] })
  ] });
}, qP = ot.object({
  username: ot.string().min(1, { message: "Please enter a valid Username" }).max(20, { message: "Username must be less than 20 characters" }),
  email: ot.string().min(1, { message: "Please enter a valid email" }).email({ message: "Not a valid email" }),
  password: ot.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" })
}), yO = ({
  library: t,
  type: e,
  redirectSignInUrl: r,
  previewImg: n,
  previewTitle: s,
  PreviewDescription: o,
  handleSignUp: i,
  isLoading: a,
  handleSignOn: l,
  handleSignOnError: c,
  logoUrl: d,
  varient: p = "basic",
  showSignIn: h = !0,
  continueUrl: v,
  showSignOn: y
}) => {
  const { signUp: m, signInWithGoogle: g } = Hn(), {
    register: x,
    handleSubmit: w,
    formState: { errors: E }
  } = to({
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
    resolver: ro(qP)
  }), k = (A) => {
    m(A.email, A.password, v).then(() => {
      i({
        username: A.username,
        email: A.email,
        password: A.password
      }), console.log("Signup successfully");
    }).catch((O) => {
      console.log(O, "Error signing up");
    });
  }, C = (A) => {
    A === "google" && g().then((O) => l && l(O)).catch((O) => c && c(O));
  };
  if (p === "basic")
    return /* @__PURE__ */ S.jsx(
      KP,
      {
        logoUrl: d,
        handleSubmitOn: C,
        handleSubmit: w,
        handleSubmitForm: k,
        register: x,
        errors: E,
        isLoading: a,
        library: t,
        type: e,
        redirectSignInUrl: r,
        PreviewDescription: o,
        previewTitle: s,
        previewImg: n,
        showSignIn: h,
        showSignOn: y
      }
    );
}, GP = ({
  handleSubmit: t,
  handleSubmitForm: e,
  register: r,
  errors: n,
  isLoading: s,
  library: o,
  type: i,
  redirectSignInUrl: a,
  PreviewDescription: l,
  previewTitle: c,
  previewImg: d,
  showSignIn: p
}) => {
  var h;
  return /* @__PURE__ */ S.jsxs("div", { className: "flex flex-wrap w-screen h-screen", children: [
    /* @__PURE__ */ S.jsx("div", { className: "flex w-full flex-col md:w-[40%]", children: /* @__PURE__ */ S.jsx("div", { className: "h-full flex items-center justify-center", children: /* @__PURE__ */ S.jsxs("div", { className: "mx-auto max-w-md", children: [
      /* @__PURE__ */ S.jsx("div", { className: "rounded-xl bg-white", children: /* @__PURE__ */ S.jsxs("div", { className: "p-4 sm:p-7", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ S.jsx("div", { className: "mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500", children: /* @__PURE__ */ S.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2",
              children: /* @__PURE__ */ S.jsx(
                "path",
                {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ S.jsx("h1", { className: "block text-2xl font-bold text-gray-800", children: "Forgot password?" }),
          /* @__PURE__ */ S.jsx("p", { className: "mt-2 text-sm text-gray-600", children: "Don't worry we'll send you reset instructions." })
        ] }),
        /* @__PURE__ */ S.jsx("div", { className: "mt-6", children: /* @__PURE__ */ S.jsx(
          "form",
          {
            className: "flex flex-col pt-3 md:pt-8",
            onSubmit: t(e),
            children: /* @__PURE__ */ S.jsxs("div", { className: "grid gap-y-4", children: [
              /* @__PURE__ */ S.jsx("div", { className: "flex flex-col pt-4", children: /* @__PURE__ */ S.jsx(
                Bt,
                {
                  type: "email",
                  id: "login-email",
                  className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                  placeholder: "Email",
                  fullWidth: !0,
                  ...r("email", { required: !0 }),
                  errorMsg: (h = n.email) == null ? void 0 : h.message
                }
              ) }),
              /* @__PURE__ */ S.jsx(
                pt,
                {
                  variant: "primary",
                  color: "primary",
                  type: "submit",
                  fullWidth: !0,
                  className: "inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2",
                  disabled: s,
                  children: "Forget password?"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      p && /* @__PURE__ */ S.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ S.jsxs("p", { className: "whitespace-nowrap text-gray-600", children: [
        "Remember your password?",
        " ",
        o === "react" && /* @__PURE__ */ S.jsx(
          Be,
          {
            as: i,
            to: a,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign in here"
          }
        ),
        o === "next" && /* @__PURE__ */ S.jsx(
          Be,
          {
            as: i,
            href: a,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign in here"
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ S.jsxs("div", { className: "pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "absolute bottom-0 z-10 px-8 text-white opacity-100", children: [
        /* @__PURE__ */ S.jsx("p", { className: "mb-8 text-3xl font-semibold leading-10", children: l }),
        /* @__PURE__ */ S.jsx("p", { className: "mb-7 text-sm opacity-70", children: c })
      ] }),
      /* @__PURE__ */ S.jsx(
        "img",
        {
          className: "-z-1 absolute top-0 h-full w-full object-cover opacity-90",
          src: d
        }
      )
    ] })
  ] });
}, YP = ot.object({
  email: ot.string().min(1, { message: "Please enter a valid email" }).email({ message: "Not a valid email" })
}), bO = ({
  library: t,
  type: e,
  redirectSignInUrl: r,
  previewImg: n,
  previewTitle: s,
  PreviewDescription: o,
  isLoading: i,
  varient: a = "basic",
  showSignIn: l = !0,
  continueUrl: c,
  handleForgetPassword: d
}) => {
  const { forgotPassword: p } = Hn(), {
    register: h,
    handleSubmit: v,
    formState: { errors: y }
  } = to({
    defaultValues: {
      email: ""
    },
    resolver: ro(YP)
  }), m = (g) => {
    p(g.email, c).then(() => {
      console.log("Email sent successfully"), A0("Email sent successfully"), d && d();
    }).catch((x) => {
      console.log(x, "Error sending email"), $f(x.message);
    });
  };
  if (a === "basic")
    return /* @__PURE__ */ S.jsx(
      GP,
      {
        handleSubmit: v,
        handleSubmitForm: m,
        register: h,
        errors: y,
        isLoading: i,
        library: t,
        type: e,
        redirectSignInUrl: r,
        PreviewDescription: o,
        previewTitle: s,
        previewImg: n,
        showSignIn: l
      }
    );
}, XP = ({
  handleSubmit: t,
  handleSubmitForm: e,
  register: r,
  errors: n,
  isLoading: s,
  library: o,
  type: i,
  redirectSignInUrl: a,
  PreviewDescription: l,
  previewTitle: c,
  previewImg: d,
  showSignIn: p
}) => {
  var h, v;
  return /* @__PURE__ */ S.jsxs("div", { className: "flex flex-wrap w-screen h-screen", children: [
    /* @__PURE__ */ S.jsx("div", { className: "flex w-full flex-col md:w-[40%]", children: /* @__PURE__ */ S.jsx("div", { className: "h-full flex items-center justify-center z-10", children: /* @__PURE__ */ S.jsxs("div", { className: "mx-auto max-w-md w-[80%]", children: [
      /* @__PURE__ */ S.jsx("div", { className: "rounded-xl bg-white", children: /* @__PURE__ */ S.jsxs("div", { className: "p-4 sm:p-7", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ S.jsx("div", { className: "mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500", children: /* @__PURE__ */ S.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2",
              children: /* @__PURE__ */ S.jsx(
                "path",
                {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ S.jsx("h1", { className: "block text-2xl font-bold text-gray-800", children: "Reset password?" })
        ] }),
        /* @__PURE__ */ S.jsx("div", { className: "mt-6", children: /* @__PURE__ */ S.jsx(
          "form",
          {
            className: "flex flex-col pt-3 md:pt-8",
            onSubmit: t(e),
            children: /* @__PURE__ */ S.jsxs("div", { className: "grid gap-y-4", children: [
              /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col pt-4", children: [
                /* @__PURE__ */ S.jsx(
                  Bt,
                  {
                    type: "newpassword",
                    id: "login-newpassword",
                    className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                    placeholder: "New Password",
                    fullWidth: !0,
                    ...r("newpassword", { required: !0 }),
                    errorMsg: (h = n.newpassword) == null ? void 0 : h.message
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  Bt,
                  {
                    type: "confirmpassword",
                    id: "login-confirmpassword",
                    className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                    placeholder: "Confirm Password",
                    fullWidth: !0,
                    ...r("confirmpassword", { required: !0 }),
                    errorMsg: (v = n.confirmpassword) == null ? void 0 : v.message
                  }
                )
              ] }),
              /* @__PURE__ */ S.jsx(
                pt,
                {
                  variant: "primary",
                  color: "primary",
                  type: "submit",
                  fullWidth: !0,
                  className: "inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2",
                  disabled: s,
                  children: "Reset password"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      p && /* @__PURE__ */ S.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ S.jsxs("p", { className: "whitespace-nowrap text-gray-600", children: [
        "Remember your password?",
        " ",
        o === "react" && /* @__PURE__ */ S.jsx(
          Be,
          {
            as: i,
            to: a,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign in here"
          }
        ),
        o === "next" && /* @__PURE__ */ S.jsx(
          Be,
          {
            as: i,
            href: a,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign in here"
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ S.jsxs("div", { className: "pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "absolute bottom-0 z-10 px-8 text-white opacity-100", children: [
        /* @__PURE__ */ S.jsx("p", { className: "mb-8 text-3xl font-semibold leading-10", children: l }),
        /* @__PURE__ */ S.jsx("p", { className: "mb-7 text-sm opacity-70", children: c })
      ] }),
      /* @__PURE__ */ S.jsx(
        "img",
        {
          className: "-z-1 absolute top-0 h-full w-full object-cover opacity-90",
          src: d
        }
      )
    ] })
  ] });
}, JP = ot.object({
  newpassword: ot.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" }),
  confirmpassword: ot.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" })
}), QP = ({
  library: t,
  type: e,
  redirectSignInUrl: r,
  previewImg: n,
  previewTitle: s,
  PreviewDescription: o,
  handleResetPassword: i,
  isLoading: a,
  varient: l = "basic",
  showSignIn: c = !0,
  oobCode: d
}) => {
  const { resetPassword: p } = Hn(), {
    register: h,
    handleSubmit: v,
    formState: { errors: y }
  } = to({
    defaultValues: {
      newpassword: "",
      confirmpassword: ""
    },
    resolver: ro(JP)
  }), m = (g) => {
    p(d, g.confirmpassword).then(() => {
      i({
        password: g.confirmpassword
      });
    }).catch((x) => {
      console.log(x, "Error resetting password");
    });
  };
  if (l === "basic")
    return /* @__PURE__ */ S.jsx(
      XP,
      {
        handleSubmit: v,
        handleSubmitForm: m,
        register: h,
        errors: y,
        isLoading: a,
        library: t,
        type: e,
        redirectSignInUrl: r,
        PreviewDescription: o,
        previewTitle: s,
        previewImg: n,
        showSignIn: c
      }
    );
}, eO = () => /* @__PURE__ */ S.jsx("div", { children: "DfxRecoverEmail" }), tO = ({
  oobCode: t,
  handleEmailVerified: e,
  handleEmailVerificationError: r
}) => {
  const { handleVerifyEmail: n } = Hn();
  return qe(() => {
    n(t).then(() => {
      e && e();
    }).catch((s) => {
      r && r(s);
    });
  }, []), /* @__PURE__ */ S.jsx(S.Fragment, {});
}, wO = ({
  mode: t,
  library: e,
  type: r,
  redirectSignInUrl: n,
  previewImg: s,
  previewTitle: o,
  PreviewDescription: i,
  handleResetPassword: a,
  isLoading: l,
  varient: c = "basic",
  showSignIn: d = !0,
  oobCode: p,
  handleEmailVerified: h,
  handleEmailVerificationError: v
}) => {
  if (t === "resetPassword")
    return /* @__PURE__ */ S.jsx(
      QP,
      {
        library: e,
        type: r,
        redirectSignInUrl: n,
        previewImg: s,
        previewTitle: o,
        PreviewDescription: i,
        handleResetPassword: a,
        oobCode: p,
        isLoading: l,
        varient: c,
        showSignIn: d
      }
    );
  if (t === "recoverEmail")
    return /* @__PURE__ */ S.jsx(eO, {});
  if (t === "verifyEmail")
    return /* @__PURE__ */ S.jsx(
      tO,
      {
        oobCode: p,
        handleEmailVerified: h,
        handleEmailVerificationError: v
      }
    );
}, rO = ({
  handleSubmit: t,
  handleSubmitForm: e,
  register: r,
  errors: n,
  isLoading: s,
  library: o,
  type: i,
  redirectSignInUrl: a,
  showSignIn: l
}) => {
  var c, d;
  return /* @__PURE__ */ S.jsx("div", { className: "flex flex-wrap w-full h-full", children: /* @__PURE__ */ S.jsx("div", { className: "flex w-full flex-col", children: /* @__PURE__ */ S.jsx("div", { className: "h-full flex items-center justify-center z-10", children: /* @__PURE__ */ S.jsxs("div", { className: "mx-auto", children: [
    /* @__PURE__ */ S.jsx("div", { className: "rounded-xl bg-white", children: /* @__PURE__ */ S.jsxs("div", { className: "p-4 sm:p-7", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ S.jsx("div", { className: "mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500", children: /* @__PURE__ */ S.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2",
            children: /* @__PURE__ */ S.jsx(
              "path",
              {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              }
            )
          }
        ) }),
        /* @__PURE__ */ S.jsx("h1", { className: "block text-2xl font-bold text-gray-800", children: "Reset password?" })
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "mt-6", children: /* @__PURE__ */ S.jsx(
        "form",
        {
          className: "flex flex-col pt-3 md:pt-8",
          onSubmit: t(e),
          children: /* @__PURE__ */ S.jsxs("div", { className: "grid gap-y-4", children: [
            /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col pt-4", children: [
              /* @__PURE__ */ S.jsx(
                Bt,
                {
                  type: "newpassword",
                  id: "login-newpassword",
                  className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                  placeholder: "New Password",
                  fullWidth: !0,
                  ...r("newpassword", { required: !0 }),
                  errorMsg: (c = n.newpassword) == null ? void 0 : c.message
                }
              ),
              /* @__PURE__ */ S.jsx(
                Bt,
                {
                  type: "confirmpassword",
                  id: "login-confirmpassword",
                  className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                  placeholder: "Confirm Password",
                  fullWidth: !0,
                  ...r("confirmpassword", { required: !0 }),
                  errorMsg: (d = n.confirmpassword) == null ? void 0 : d.message
                }
              )
            ] }),
            /* @__PURE__ */ S.jsx(
              pt,
              {
                variant: "primary",
                color: "primary",
                type: "submit",
                fullWidth: !0,
                className: "inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2",
                disabled: s,
                children: "Reset password"
              }
            )
          ] })
        }
      ) })
    ] }) }),
    l && /* @__PURE__ */ S.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ S.jsxs("p", { className: "whitespace-nowrap text-gray-600", children: [
      "Remember your password?",
      " ",
      o === "react" && /* @__PURE__ */ S.jsx(
        Be,
        {
          as: i,
          to: a,
          className: "underline-offset-4 font-semibold text-primary underline",
          children: "Sign in here"
        }
      ),
      o === "next" && /* @__PURE__ */ S.jsx(
        Be,
        {
          as: i,
          href: a,
          className: "underline-offset-4 font-semibold text-primary underline",
          children: "Sign in here"
        }
      )
    ] }) })
  ] }) }) }) });
}, nO = ot.object({
  newpassword: ot.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" }),
  confirmpassword: ot.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" })
}), xO = ({
  library: t,
  type: e,
  redirectSignInUrl: r,
  handleChangePassword: n,
  isLoading: s,
  varient: o = "basic",
  showSignIn: i = !0
}) => {
  const { changePassword: a } = Hn(), {
    register: l,
    handleSubmit: c,
    formState: { errors: d }
  } = to({
    defaultValues: {
      newpassword: "",
      confirmpassword: ""
    },
    resolver: ro(nO)
  }), p = (h) => {
    a(h.confirmpassword).then(() => {
      n({
        password: h.confirmpassword
      }), console.log("Password reset successfully");
    }).catch((v) => {
      console.log(v, "Error resetting password");
    });
  };
  if (o === "basic")
    return /* @__PURE__ */ S.jsx(
      rO,
      {
        handleSubmit: c,
        handleSubmitForm: p,
        register: l,
        errors: d,
        isLoading: s,
        library: t,
        type: e,
        redirectSignInUrl: r,
        showSignIn: i
      }
    );
};
export {
  wO as DfxAuthEmail,
  iO as DfxAuthProvider,
  xO as DfxChangePassword,
  bO as DfxForgetPassword,
  QP as DfxResetPassword,
  vO as DfxSignIn,
  yO as DfxSignUp,
  Hn as useAuth
};
