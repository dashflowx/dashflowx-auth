import re, { createContext as mn, useMemo as is, useState as os, useContext as pn, isValidElement as gn, useEffect as yn } from "react";
import { Input2 as Ae, Button as Gt, TypographyComp as Ee } from "@dashflowx/core";
var $r = { exports: {} }, Nt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;
function vn() {
  if (ls) return Nt;
  ls = 1;
  var t = re, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(o, u, h) {
    var m, g = {}, O = null, P = null;
    h !== void 0 && (O = "" + h), u.key !== void 0 && (O = "" + u.key), u.ref !== void 0 && (P = u.ref);
    for (m in u) s.call(u, m) && !a.hasOwnProperty(m) && (g[m] = u[m]);
    if (o && o.defaultProps) for (m in u = o.defaultProps, u) g[m] === void 0 && (g[m] = u[m]);
    return { $$typeof: e, type: o, key: O, ref: P, props: g, _owner: n.current };
  }
  return Nt.Fragment = r, Nt.jsx = i, Nt.jsxs = i, Nt;
}
var St = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function xn() {
  return cs || (cs = 1, process.env.NODE_ENV !== "production" && function() {
    var t = re, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), U = Symbol.iterator, le = "@@iterator";
    function Y(l) {
      if (l === null || typeof l != "object")
        return null;
      var y = U && l[U] || l[le];
      return typeof y == "function" ? y : null;
    }
    var B = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(l) {
      {
        for (var y = arguments.length, k = new Array(y > 1 ? y - 1 : 0), A = 1; A < y; A++)
          k[A - 1] = arguments[A];
        de("error", l, k);
      }
    }
    function de(l, y, k) {
      {
        var A = B.ReactDebugCurrentFrame, z = A.getStackAddendum();
        z !== "" && (y += "%s", k = k.concat([z]));
        var H = k.map(function(M) {
          return String(M);
        });
        H.unshift("Warning: " + y), Function.prototype.apply.call(console[l], console, H);
      }
    }
    var fe = !1, G = !1, K = !1, ce = !1, De = !1, Ze;
    Ze = Symbol.for("react.module.reference");
    function ve(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === s || l === a || De || l === n || l === h || l === m || ce || l === P || fe || G || K || typeof l == "object" && l !== null && (l.$$typeof === O || l.$$typeof === g || l.$$typeof === i || l.$$typeof === o || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Ze || l.getModuleId !== void 0));
    }
    function lt(l, y, k) {
      var A = l.displayName;
      if (A)
        return A;
      var z = y.displayName || y.name || "";
      return z !== "" ? k + "(" + z + ")" : k;
    }
    function Z(l) {
      return l.displayName || "Context";
    }
    function V(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case n:
          return "StrictMode";
        case h:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case o:
            var y = l;
            return Z(y) + ".Consumer";
          case i:
            var k = l;
            return Z(k._context) + ".Provider";
          case u:
            return lt(l, l.render, "ForwardRef");
          case g:
            var A = l.displayName || null;
            return A !== null ? A : V(l.type) || "Memo";
          case O: {
            var z = l, H = z._payload, M = z._init;
            try {
              return V(M(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, ee = 0, xe, he, $e, Ue, Be, jt, Et;
    function er() {
    }
    er.__reactDisabledLog = !0;
    function tr() {
      {
        if (ee === 0) {
          xe = console.log, he = console.info, $e = console.warn, Ue = console.error, Be = console.group, jt = console.groupCollapsed, Et = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: er,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        ee++;
      }
    }
    function Cr() {
      {
        if (ee--, ee === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, l, {
              value: xe
            }),
            info: q({}, l, {
              value: he
            }),
            warn: q({}, l, {
              value: $e
            }),
            error: q({}, l, {
              value: Ue
            }),
            group: q({}, l, {
              value: Be
            }),
            groupCollapsed: q({}, l, {
              value: jt
            }),
            groupEnd: q({}, l, {
              value: Et
            })
          });
        }
        ee < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qe = B.ReactCurrentDispatcher, ct;
    function ze(l, y, k) {
      {
        if (ct === void 0)
          try {
            throw Error();
          } catch (z) {
            var A = z.stack.trim().match(/\n( *(at )?)/);
            ct = A && A[1] || "";
          }
        return `
` + ct + l;
      }
    }
    var ut = !1, dt;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      dt = new rr();
    }
    function sr(l, y) {
      if (!l || ut)
        return "";
      {
        var k = dt.get(l);
        if (k !== void 0)
          return k;
      }
      var A;
      ut = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = Qe.current, Qe.current = null, tr();
      try {
        if (y) {
          var M = function() {
            throw Error();
          };
          if (Object.defineProperty(M.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(M, []);
            } catch (_e) {
              A = _e;
            }
            Reflect.construct(l, [], M);
          } else {
            try {
              M.call();
            } catch (_e) {
              A = _e;
            }
            l.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            A = _e;
          }
          l();
        }
      } catch (_e) {
        if (_e && A && typeof _e.stack == "string") {
          for (var F = _e.stack.split(`
`), me = A.stack.split(`
`), te = F.length - 1, ne = me.length - 1; te >= 1 && ne >= 0 && F[te] !== me[ne]; )
            ne--;
          for (; te >= 1 && ne >= 0; te--, ne--)
            if (F[te] !== me[ne]) {
              if (te !== 1 || ne !== 1)
                do
                  if (te--, ne--, ne < 0 || F[te] !== me[ne]) {
                    var ke = `
` + F[te].replace(" at new ", " at ");
                    return l.displayName && ke.includes("<anonymous>") && (ke = ke.replace("<anonymous>", l.displayName)), typeof l == "function" && dt.set(l, ke), ke;
                  }
                while (te >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        ut = !1, Qe.current = H, Cr(), Error.prepareStackTrace = z;
      }
      var pt = l ? l.displayName || l.name : "", tt = pt ? ze(pt) : "";
      return typeof l == "function" && dt.set(l, tt), tt;
    }
    function nr(l, y, k) {
      return sr(l, !1);
    }
    function ar(l) {
      var y = l.prototype;
      return !!(y && y.isReactComponent);
    }
    function Tt(l, y, k) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return sr(l, ar(l));
      if (typeof l == "string")
        return ze(l);
      switch (l) {
        case h:
          return ze("Suspense");
        case m:
          return ze("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return nr(l.render);
          case g:
            return Tt(l.type, y, k);
          case O: {
            var A = l, z = A._payload, H = A._init;
            try {
              return Tt(H(z), y, k);
            } catch {
            }
          }
        }
      return "";
    }
    var ft = Object.prototype.hasOwnProperty, Or = {}, c = B.ReactDebugCurrentFrame;
    function f(l) {
      if (l) {
        var y = l._owner, k = Tt(l.type, l._source, y ? y.type : null);
        c.setExtraStackFrame(k);
      } else
        c.setExtraStackFrame(null);
    }
    function p(l, y, k, A, z) {
      {
        var H = Function.call.bind(ft);
        for (var M in l)
          if (H(l, M)) {
            var F = void 0;
            try {
              if (typeof l[M] != "function") {
                var me = Error((A || "React class") + ": " + k + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw me.name = "Invariant Violation", me;
              }
              F = l[M](y, M, A, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              F = te;
            }
            F && !(F instanceof Error) && (f(z), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", k, M, typeof F), f(null)), F instanceof Error && !(F.message in Or) && (Or[F.message] = !0, f(z), S("Failed %s type: %s", k, F.message), f(null));
          }
      }
    }
    var b = Array.isArray;
    function _(l) {
      return b(l);
    }
    function x(l) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, k = y && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return k;
      }
    }
    function T(l) {
      try {
        return $(l), !1;
      } catch {
        return !0;
      }
    }
    function $(l) {
      return "" + l;
    }
    function X(l) {
      if (T(l))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", x(l)), $(l);
    }
    var ae = B.ReactCurrentOwner, We = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ir, ht, et;
    et = {};
    function Rr(l) {
      if (ft.call(l, "ref")) {
        var y = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function or(l) {
      if (ft.call(l, "key")) {
        var y = Object.getOwnPropertyDescriptor(l, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Ar(l, y) {
      if (typeof l.ref == "string" && ae.current && y && ae.current.stateNode !== y) {
        var k = V(ae.current.type);
        et[k] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(ae.current.type), l.ref), et[k] = !0);
      }
    }
    function lr(l, y) {
      {
        var k = function() {
          ir || (ir = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        k.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function en(l, y) {
      {
        var k = function() {
          ht || (ht = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        k.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var tn = function(l, y, k, A, z, H, M) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: l,
        key: y,
        ref: k,
        props: M,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(F, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function rn(l, y, k, A, z) {
      {
        var H, M = {}, F = null, me = null;
        k !== void 0 && (X(k), F = "" + k), or(y) && (X(y.key), F = "" + y.key), Rr(y) && (me = y.ref, Ar(y, z));
        for (H in y)
          ft.call(y, H) && !We.hasOwnProperty(H) && (M[H] = y[H]);
        if (l && l.defaultProps) {
          var te = l.defaultProps;
          for (H in te)
            M[H] === void 0 && (M[H] = te[H]);
        }
        if (F || me) {
          var ne = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          F && lr(M, ne), me && en(M, ne);
        }
        return tn(l, F, me, z, A, ae.current, M);
      }
    }
    var Pr = B.ReactCurrentOwner, Qr = B.ReactDebugCurrentFrame;
    function mt(l) {
      if (l) {
        var y = l._owner, k = Tt(l.type, l._source, y ? y.type : null);
        Qr.setExtraStackFrame(k);
      } else
        Qr.setExtraStackFrame(null);
    }
    var Ir;
    Ir = !1;
    function Vr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === e;
    }
    function es() {
      {
        if (Pr.current) {
          var l = V(Pr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function sn(l) {
      return "";
    }
    var ts = {};
    function nn(l) {
      {
        var y = es();
        if (!y) {
          var k = typeof l == "string" ? l : l.displayName || l.name;
          k && (y = `

Check the top-level render call using <` + k + ">.");
        }
        return y;
      }
    }
    function rs(l, y) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var k = nn(y);
        if (ts[k])
          return;
        ts[k] = !0;
        var A = "";
        l && l._owner && l._owner !== Pr.current && (A = " It was passed a child from " + V(l._owner.type) + "."), mt(l), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, A), mt(null);
      }
    }
    function ss(l, y) {
      {
        if (typeof l != "object")
          return;
        if (_(l))
          for (var k = 0; k < l.length; k++) {
            var A = l[k];
            Vr(A) && rs(A, y);
          }
        else if (Vr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var z = Y(l);
          if (typeof z == "function" && z !== l.entries)
            for (var H = z.call(l), M; !(M = H.next()).done; )
              Vr(M.value) && rs(M.value, y);
        }
      }
    }
    function an(l) {
      {
        var y = l.type;
        if (y == null || typeof y == "string")
          return;
        var k;
        if (typeof y == "function")
          k = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === g))
          k = y.propTypes;
        else
          return;
        if (k) {
          var A = V(y);
          p(k, l.props, "prop", A, l);
        } else if (y.PropTypes !== void 0 && !Ir) {
          Ir = !0;
          var z = V(y);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function on(l) {
      {
        for (var y = Object.keys(l.props), k = 0; k < y.length; k++) {
          var A = y[k];
          if (A !== "children" && A !== "key") {
            mt(l), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), mt(null);
            break;
          }
        }
        l.ref !== null && (mt(l), S("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    var ns = {};
    function as(l, y, k, A, z, H) {
      {
        var M = ve(l);
        if (!M) {
          var F = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = sn();
          me ? F += me : F += es();
          var te;
          l === null ? te = "null" : _(l) ? te = "array" : l !== void 0 && l.$$typeof === e ? (te = "<" + (V(l.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : te = typeof l, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, F);
        }
        var ne = rn(l, y, k, z, H);
        if (ne == null)
          return ne;
        if (M) {
          var ke = y.children;
          if (ke !== void 0)
            if (A)
              if (_(ke)) {
                for (var pt = 0; pt < ke.length; pt++)
                  ss(ke[pt], l);
                Object.freeze && Object.freeze(ke);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ss(ke, l);
        }
        if (ft.call(y, "key")) {
          var tt = V(l), _e = Object.keys(y).filter(function(hn) {
            return hn !== "key";
          }), Dr = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ns[tt + Dr]) {
            var fn = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Dr, tt, fn, tt), ns[tt + Dr] = !0;
          }
        }
        return l === s ? on(ne) : an(ne), ne;
      }
    }
    function ln(l, y, k) {
      return as(l, y, k, !0);
    }
    function cn(l, y, k) {
      return as(l, y, k, !1);
    }
    var un = cn, dn = ln;
    St.Fragment = s, St.jsx = un, St.jsxs = dn;
  }()), St;
}
process.env.NODE_ENV === "production" ? $r.exports = vn() : $r.exports = xn();
var d = $r.exports;
class nt extends Error {
  constructor(e) {
    super(e), this.name = "AuthError";
  }
}
function Ts(t = {}) {
  const e = new Map(
    (t.users ?? [{ email: "ada@example.com", password: "password" }]).map((s) => [
      s.email.toLowerCase(),
      s
    ])
  );
  function r(s) {
    throw new nt(s);
  }
  return {
    async login(s, n) {
      const a = e.get(s.toLowerCase());
      return (!a || a.password !== n) && r("Invalid email or password"), { uid: `mock-${s}`, email: a.email };
    },
    async signUp(s, n) {
      const a = s.toLowerCase();
      return e.has(a) && r("Email already registered"), e.set(a, { email: s, password: n }), { uid: `mock-${s}`, email: s };
    },
    async logout() {
    },
    async forgotPassword(s) {
      e.has(s.toLowerCase()) || r("No account for that email");
    },
    async resetPassword(s, n) {
      s === "bad" && r("Invalid reset code");
      const a = e.values().next().value;
      a && (a.password = n);
    },
    async changePassword(s) {
      s || r("Password required");
    },
    async verifyEmail(s) {
      s === "bad" && r("Invalid verification code");
    },
    async signInWithGoogle() {
      return { uid: "mock-google", email: "ada@example.com" };
    }
  };
}
const Ns = mn(null);
function _n(t) {
  return t instanceof Error ? t.message : "Auth failed";
}
function Ei({
  children: t,
  adapter: e,
  adapterName: r = "mock"
}) {
  const s = is(() => e ?? Ts(), [e]), [n, a] = os(null), [i, o] = os(null), u = is(() => {
    const h = async (m) => {
      try {
        const g = await m();
        return o(null), g;
      } catch (g) {
        throw o(_n(g)), g;
      }
    };
    return {
      currentUser: n,
      lastError: i,
      adapterName: r,
      login: (m, g) => h(async () => {
        const O = await s.login(m, g);
        return a(O), O;
      }),
      signUp: (m, g, O) => h(async () => {
        const P = await s.signUp(m, g, O);
        return a(P), P;
      }),
      logout: () => h(async () => {
        await s.logout(), a(null);
      }),
      forgotPassword: (m, g) => h(() => s.forgotPassword(m, g)),
      resetPassword: (m, g) => h(() => s.resetPassword(m, g)),
      changePassword: (m) => h(() => s.changePassword(m)),
      handleVerifyEmail: (m) => h(() => s.verifyEmail(m)),
      signInWithGoogle: () => h(async () => {
        const m = await s.signInWithGoogle();
        return a(m), m;
      }),
      inviteUser: (m, g, O) => h(() => s.signUp(m, g, O))
    };
  }, [r, n, i, s]);
  return /* @__PURE__ */ d.jsx(Ns.Provider, { value: u, children: t });
}
function ot() {
  const t = pn(Ns);
  if (!t)
    throw new Error("useAuth must be used inside DfxAuthProvider");
  return t;
}
function Ti() {
  const { currentUser: t, lastError: e, adapterName: r } = ot();
  return /* @__PURE__ */ d.jsxs("div", { className: "space-x-2 p-2 text-sm", "data-testid": "auth-status", children: [
    /* @__PURE__ */ d.jsx("span", { "data-testid": "auth-adapter", children: r }),
    /* @__PURE__ */ d.jsx("span", { "data-testid": "auth-user", children: t ? t.email : "signed-out" }),
    /* @__PURE__ */ d.jsx("span", { "data-testid": "auth-error", children: e ?? "" })
  ] });
}
const bn = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "::1"]);
function wn(t) {
  let e;
  try {
    e = new URL(t);
  } catch {
    throw new nt("Invalid ecom API base URL");
  }
  if (!bn.has(e.hostname))
    throw new nt(
      "ecom JWT adapter only talks to the local API on localhost:5000. Production RDS/API is not allowed."
    );
  return e;
}
async function kn(t) {
  try {
    const e = await t.json();
    return e.error || e.message || `HTTP ${t.status}`;
  } catch {
    return `HTTP ${t.status}`;
  }
}
function jn(t) {
  var s, n;
  const e = (s = t.user) == null ? void 0 : s.id, r = (n = t.user) == null ? void 0 : n.email;
  if (!e || !r) throw new nt("ecom login response missing user");
  return { uid: e, email: r };
}
function En(t = {}) {
  const e = wn(t.baseUrl ?? "http://127.0.0.1:5000").origin, r = t.fetchImpl ?? fetch.bind(globalThis);
  async function s(i, o) {
    const u = await r(`${e}${i}`, {
      ...o,
      credentials: "include",
      headers: { "Content-Type": "application/json", ...o.headers || {} }
    });
    if (!u.ok) throw new nt(await kn(u));
    return u.status === 204 ? {} : u.json();
  }
  const n = (i) => {
    throw new nt(
      `${i} is not on this adapter. Use ecom’s own password/email routes on local /api/v1/auth — not production.`
    );
  };
  async function a(i, o) {
    const u = await s("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: i, password: o })
    });
    return jn(u);
  }
  return {
    login: a,
    async signUp(i, o) {
      var h, m;
      const u = await s("/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify({ email: i, password: o, name: i.split("@")[0] })
      });
      return (h = u.user) != null && h.id && ((m = u.user) != null && m.email) ? { uid: u.user.id, email: u.user.email } : a(i, o);
    },
    async logout() {
      await s("/api/v1/auth/logout", { method: "POST" });
    },
    async forgotPassword() {
      n("Forgot password");
    },
    async resetPassword() {
      n("Reset password");
    },
    async changePassword() {
      n("Change password");
    },
    async verifyEmail() {
      n("Verify email");
    },
    signInWithGoogle() {
      return n("Google sign-in");
    }
  };
}
function Ni(t = {}) {
  if (t.kind === "firebase")
    throw new nt(
      "Pass createFirebaseAdapter(config) into DfxAuthProvider after EXT-FIREBASE. Do not load Firebase from the mock/ecom factory."
    );
  return t.kind === "ecom-jwt" ? En(t) : Ts(t);
}
var L;
(function(t) {
  t.assertEqual = (n) => n;
  function e(n) {
  }
  t.assertIs = e;
  function r(n) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (n) => {
    const a = {};
    for (const i of n)
      a[i] = i;
    return a;
  }, t.getValidEnumValues = (n) => {
    const a = t.objectKeys(n).filter((o) => typeof n[n[o]] != "number"), i = {};
    for (const o of a)
      i[o] = n[o];
    return t.objectValues(i);
  }, t.objectValues = (n) => t.objectKeys(n).map(function(a) {
    return n[a];
  }), t.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const a = [];
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && a.push(i);
    return a;
  }, t.find = (n, a) => {
    for (const i of n)
      if (a(i))
        return i;
  }, t.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n;
  function s(n, a = " | ") {
    return n.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  t.joinValues = s, t.jsonStringifyReplacer = (n, a) => typeof a == "bigint" ? a.toString() : a;
})(L || (L = {}));
var Ur;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Ur || (Ur = {}));
const j = L.arrayToEnum([
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
]), qe = (t) => {
  switch (typeof t) {
    case "undefined":
      return j.undefined;
    case "string":
      return j.string;
    case "number":
      return isNaN(t) ? j.nan : j.number;
    case "boolean":
      return j.boolean;
    case "function":
      return j.function;
    case "bigint":
      return j.bigint;
    case "symbol":
      return j.symbol;
    case "object":
      return Array.isArray(t) ? j.array : t === null ? j.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? j.promise : typeof Map < "u" && t instanceof Map ? j.map : typeof Set < "u" && t instanceof Set ? j.set : typeof Date < "u" && t instanceof Date ? j.date : j.object;
    default:
      return j.unknown;
  }
}, v = L.arrayToEnum([
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
]), Tn = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class we extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(a) {
      return a.message;
    }, s = { _errors: [] }, n = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(n);
        else if (i.code === "invalid_return_type")
          n(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          n(i.argumentsError);
        else if (i.path.length === 0)
          s._errors.push(r(i));
        else {
          let o = s, u = 0;
          for (; u < i.path.length; ) {
            const h = i.path[u];
            u === i.path.length - 1 ? (o[h] = o[h] || { _errors: [] }, o[h]._errors.push(r(i))) : o[h] = o[h] || { _errors: [] }, o = o[h], u++;
          }
        }
    };
    return n(this), s;
  }
  static assert(e) {
    if (!(e instanceof we))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, L.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, s = [];
    for (const n of this.issues)
      n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(e(n))) : s.push(e(n));
    return { formErrors: s, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
we.create = (t) => new we(t);
const bt = (t, e) => {
  let r;
  switch (t.code) {
    case v.invalid_type:
      t.received === j.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case v.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, L.jsonStringifyReplacer)}`;
      break;
    case v.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${L.joinValues(t.keys, ", ")}`;
      break;
    case v.invalid_union:
      r = "Invalid input";
      break;
    case v.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${L.joinValues(t.options)}`;
      break;
    case v.invalid_enum_value:
      r = `Invalid enum value. Expected ${L.joinValues(t.options)}, received '${t.received}'`;
      break;
    case v.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case v.invalid_return_type:
      r = "Invalid function return type";
      break;
    case v.invalid_date:
      r = "Invalid date";
      break;
    case v.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : L.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case v.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case v.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case v.custom:
      r = "Invalid input";
      break;
    case v.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case v.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case v.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, L.assertNever(t);
  }
  return { message: r };
};
let Ss = bt;
function Nn(t) {
  Ss = t;
}
function hr() {
  return Ss;
}
const mr = (t) => {
  const { data: e, path: r, errorMaps: s, issueData: n } = t, a = [...r, ...n.path || []], i = {
    ...n,
    path: a
  };
  if (n.message !== void 0)
    return {
      ...n,
      path: a,
      message: n.message
    };
  let o = "";
  const u = s.filter((h) => !!h).slice().reverse();
  for (const h of u)
    o = h(i, { data: e, defaultError: o }).message;
  return {
    ...n,
    path: a,
    message: o
  };
}, Sn = [];
function w(t, e) {
  const r = hr(), s = mr({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      r,
      r === bt ? void 0 : bt
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(s);
}
class ue {
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
    const s = [];
    for (const n of r) {
      if (n.status === "aborted")
        return R;
      n.status === "dirty" && e.dirty(), s.push(n.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, r) {
    const s = [];
    for (const n of r) {
      const a = await n.key, i = await n.value;
      s.push({
        key: a,
        value: i
      });
    }
    return ue.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, r) {
    const s = {};
    for (const n of r) {
      const { key: a, value: i } = n;
      if (a.status === "aborted" || i.status === "aborted")
        return R;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const R = Object.freeze({
  status: "aborted"
}), vt = (t) => ({ status: "dirty", value: t }), ye = (t) => ({ status: "valid", value: t }), Br = (t) => t.status === "aborted", zr = (t) => t.status === "dirty", Vt = (t) => t.status === "valid", Dt = (t) => typeof Promise < "u" && t instanceof Promise;
function pr(t, e, r, s) {
  if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t);
}
function Cs(t, e, r, s, n) {
  if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, r), r;
}
var N;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(N || (N = {}));
var Ot, Rt;
class Ie {
  constructor(e, r, s, n) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const us = (t, e) => {
  if (Vt(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new we(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function I(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: s, description: n } = t;
  if (e && (r || s))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: n } : { errorMap: (i, o) => {
    var u, h;
    const { message: m } = t;
    return i.code === "invalid_enum_value" ? { message: m ?? o.defaultError } : typeof o.data > "u" ? { message: (u = m ?? s) !== null && u !== void 0 ? u : o.defaultError } : i.code !== "invalid_type" ? { message: o.defaultError } : { message: (h = m ?? r) !== null && h !== void 0 ? h : o.defaultError };
  }, description: n };
}
class D {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return qe(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: qe(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new ue(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: qe(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Dt(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const s = this.safeParse(e, r);
    if (s.success)
      return s.data;
    throw s.error;
  }
  safeParse(e, r) {
    var s;
    const n = {
      common: {
        issues: [],
        async: (s = r == null ? void 0 : r.async) !== null && s !== void 0 ? s : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: qe(e)
    }, a = this._parseSync({ data: e, path: n.path, parent: n });
    return us(n, a);
  }
  async parseAsync(e, r) {
    const s = await this.safeParseAsync(e, r);
    if (s.success)
      return s.data;
    throw s.error;
  }
  async safeParseAsync(e, r) {
    const s = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: qe(e)
    }, n = this._parse({ data: e, path: s.path, parent: s }), a = await (Dt(n) ? n : Promise.resolve(n));
    return us(s, a);
  }
  refine(e, r) {
    const s = (n) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(n) : r;
    return this._refinement((n, a) => {
      const i = e(n), o = () => a.addIssue({
        code: v.custom,
        ...s(n)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((u) => u ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((s, n) => e(s) ? !0 : (n.addIssue(typeof r == "function" ? r(s, n) : r), !1));
  }
  _refinement(e) {
    return new Ce({
      schema: this,
      typeName: C.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Pe.create(this, this._def);
  }
  nullable() {
    return Xe.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Se.create(this, this._def);
  }
  promise() {
    return kt.create(this, this._def);
  }
  or(e) {
    return Lt.create([this, e], this._def);
  }
  and(e) {
    return $t.create(this, e, this._def);
  }
  transform(e) {
    return new Ce({
      ...I(this._def),
      schema: this,
      typeName: C.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new qt({
      ...I(this._def),
      innerType: this,
      defaultValue: r,
      typeName: C.ZodDefault
    });
  }
  brand() {
    return new Hr({
      typeName: C.ZodBranded,
      type: this,
      ...I(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ht({
      ...I(this._def),
      innerType: this,
      catchValue: r,
      typeName: C.ZodCatch
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
    return Jt.create(this, e);
  }
  readonly() {
    return Yt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Cn = /^c[^\s-]{8,}$/i, On = /^[0-9a-z]+$/, Rn = /^[0-9A-HJKMNP-TV-Z]{26}$/, An = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Pn = /^[a-z0-9_-]{21}$/i, In = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Vn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Dn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Zr;
const Zn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Fn = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Mn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Os = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Ln = new RegExp(`^${Os}$`);
function Rs(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function $n(t) {
  return new RegExp(`^${Rs(t)}$`);
}
function As(t) {
  let e = `${Os}T${Rs(t)}`;
  const r = [];
  return r.push(t.local ? "Z?" : "Z"), t.offset && r.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${r.join("|")})`, new RegExp(`^${e}$`);
}
function Un(t, e) {
  return !!((e === "v4" || !e) && Zn.test(t) || (e === "v6" || !e) && Fn.test(t));
}
class Ne extends D {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== j.string) {
      const a = this._getOrReturnCtx(e);
      return w(a, {
        code: v.invalid_type,
        expected: j.string,
        received: a.parsedType
      }), R;
    }
    const s = new ue();
    let n;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (n = this._getOrReturnCtx(e, n), w(n, {
          code: v.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (n = this._getOrReturnCtx(e, n), w(n, {
          code: v.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, o = e.data.length < a.value;
        (i || o) && (n = this._getOrReturnCtx(e, n), i ? w(n, {
          code: v.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && w(n, {
          code: v.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), s.dirty());
      } else if (a.kind === "email")
        Vn.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
          validation: "email",
          code: v.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "emoji")
        Zr || (Zr = new RegExp(Dn, "u")), Zr.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
          validation: "emoji",
          code: v.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "uuid")
        An.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
          validation: "uuid",
          code: v.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "nanoid")
        Pn.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
          validation: "nanoid",
          code: v.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid")
        Cn.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
          validation: "cuid",
          code: v.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid2")
        On.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
          validation: "cuid2",
          code: v.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "ulid")
        Rn.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
          validation: "ulid",
          code: v.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), w(n, {
            validation: "url",
            code: v.invalid_string,
            message: a.message
          }), s.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
        validation: "regex",
        code: v.invalid_string,
        message: a.message
      }), s.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(e, n), w(n, {
        code: v.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), s.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (n = this._getOrReturnCtx(e, n), w(n, {
        code: v.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), s.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (n = this._getOrReturnCtx(e, n), w(n, {
        code: v.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), s.dirty()) : a.kind === "datetime" ? As(a).test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
        code: v.invalid_string,
        validation: "datetime",
        message: a.message
      }), s.dirty()) : a.kind === "date" ? Ln.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
        code: v.invalid_string,
        validation: "date",
        message: a.message
      }), s.dirty()) : a.kind === "time" ? $n(a).test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
        code: v.invalid_string,
        validation: "time",
        message: a.message
      }), s.dirty()) : a.kind === "duration" ? In.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
        validation: "duration",
        code: v.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "ip" ? Un(e.data, a.version) || (n = this._getOrReturnCtx(e, n), w(n, {
        validation: "ip",
        code: v.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "base64" ? Mn.test(e.data) || (n = this._getOrReturnCtx(e, n), w(n, {
        validation: "base64",
        code: v.invalid_string,
        message: a.message
      }), s.dirty()) : L.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _regex(e, r, s) {
    return this.refinement((n) => e.test(n), {
      validation: r,
      code: v.invalid_string,
      ...N.errToObj(s)
    });
  }
  _addCheck(e) {
    return new Ne({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...N.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...N.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...N.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...N.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...N.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...N.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...N.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...N.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...N.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...N.errToObj(e) });
  }
  datetime(e) {
    var r, s;
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
      local: (s = e == null ? void 0 : e.local) !== null && s !== void 0 ? s : !1,
      ...N.errToObj(e == null ? void 0 : e.message)
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
      ...N.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...N.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...N.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...N.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...N.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...N.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...N.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...N.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...N.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, N.errToObj(e));
  }
  trim() {
    return new Ne({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Ne({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Ne({
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
Ne.create = (t) => {
  var e;
  return new Ne({
    checks: [],
    typeName: C.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...I(t)
  });
};
function Bn(t, e) {
  const r = (t.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = r > s ? r : s, a = parseInt(t.toFixed(n).replace(".", "")), i = parseInt(e.toFixed(n).replace(".", ""));
  return a % i / Math.pow(10, n);
}
class Ge extends D {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== j.number) {
      const a = this._getOrReturnCtx(e);
      return w(a, {
        code: v.invalid_type,
        expected: j.number,
        received: a.parsedType
      }), R;
    }
    let s;
    const n = new ue();
    for (const a of this._def.checks)
      a.kind === "int" ? L.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), w(s, {
        code: v.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), n.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), w(s, {
        code: v.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), w(s, {
        code: v.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? Bn(e.data, a.value) !== 0 && (s = this._getOrReturnCtx(e, s), w(s, {
        code: v.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), w(s, {
        code: v.not_finite,
        message: a.message
      }), n.dirty()) : L.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, N.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, N.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, N.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, N.toString(r));
  }
  setLimit(e, r, s, n) {
    return new Ge({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: s,
          message: N.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ge({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: N.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: N.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: N.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: N.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: N.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: N.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: N.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: N.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: N.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && L.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min" ? (r === null || s.value > r) && (r = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
Ge.create = (t) => new Ge({
  checks: [],
  typeName: C.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...I(t)
});
class Je extends D {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== j.bigint) {
      const a = this._getOrReturnCtx(e);
      return w(a, {
        code: v.invalid_type,
        expected: j.bigint,
        received: a.parsedType
      }), R;
    }
    let s;
    const n = new ue();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), w(s, {
        code: v.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), w(s, {
        code: v.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), w(s, {
        code: v.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : L.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, N.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, N.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, N.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, N.toString(r));
  }
  setLimit(e, r, s, n) {
    return new Je({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: s,
          message: N.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Je({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: N.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: N.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: N.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: N.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: N.toString(r)
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
Je.create = (t) => {
  var e;
  return new Je({
    checks: [],
    typeName: C.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...I(t)
  });
};
class Zt extends D {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== j.boolean) {
      const s = this._getOrReturnCtx(e);
      return w(s, {
        code: v.invalid_type,
        expected: j.boolean,
        received: s.parsedType
      }), R;
    }
    return ye(e.data);
  }
}
Zt.create = (t) => new Zt({
  typeName: C.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...I(t)
});
class at extends D {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== j.date) {
      const a = this._getOrReturnCtx(e);
      return w(a, {
        code: v.invalid_type,
        expected: j.date,
        received: a.parsedType
      }), R;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return w(a, {
        code: v.invalid_date
      }), R;
    }
    const s = new ue();
    let n;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (n = this._getOrReturnCtx(e, n), w(n, {
        code: v.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), s.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (n = this._getOrReturnCtx(e, n), w(n, {
        code: v.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), s.dirty()) : L.assertNever(a);
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new at({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: N.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: N.toString(r)
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
at.create = (t) => new at({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: C.ZodDate,
  ...I(t)
});
class gr extends D {
  _parse(e) {
    if (this._getType(e) !== j.symbol) {
      const s = this._getOrReturnCtx(e);
      return w(s, {
        code: v.invalid_type,
        expected: j.symbol,
        received: s.parsedType
      }), R;
    }
    return ye(e.data);
  }
}
gr.create = (t) => new gr({
  typeName: C.ZodSymbol,
  ...I(t)
});
class Ft extends D {
  _parse(e) {
    if (this._getType(e) !== j.undefined) {
      const s = this._getOrReturnCtx(e);
      return w(s, {
        code: v.invalid_type,
        expected: j.undefined,
        received: s.parsedType
      }), R;
    }
    return ye(e.data);
  }
}
Ft.create = (t) => new Ft({
  typeName: C.ZodUndefined,
  ...I(t)
});
class Mt extends D {
  _parse(e) {
    if (this._getType(e) !== j.null) {
      const s = this._getOrReturnCtx(e);
      return w(s, {
        code: v.invalid_type,
        expected: j.null,
        received: s.parsedType
      }), R;
    }
    return ye(e.data);
  }
}
Mt.create = (t) => new Mt({
  typeName: C.ZodNull,
  ...I(t)
});
class wt extends D {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ye(e.data);
  }
}
wt.create = (t) => new wt({
  typeName: C.ZodAny,
  ...I(t)
});
class st extends D {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ye(e.data);
  }
}
st.create = (t) => new st({
  typeName: C.ZodUnknown,
  ...I(t)
});
class Le extends D {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return w(r, {
      code: v.invalid_type,
      expected: j.never,
      received: r.parsedType
    }), R;
  }
}
Le.create = (t) => new Le({
  typeName: C.ZodNever,
  ...I(t)
});
class yr extends D {
  _parse(e) {
    if (this._getType(e) !== j.undefined) {
      const s = this._getOrReturnCtx(e);
      return w(s, {
        code: v.invalid_type,
        expected: j.void,
        received: s.parsedType
      }), R;
    }
    return ye(e.data);
  }
}
yr.create = (t) => new yr({
  typeName: C.ZodVoid,
  ...I(t)
});
class Se extends D {
  _parse(e) {
    const { ctx: r, status: s } = this._processInputParams(e), n = this._def;
    if (r.parsedType !== j.array)
      return w(r, {
        code: v.invalid_type,
        expected: j.array,
        received: r.parsedType
      }), R;
    if (n.exactLength !== null) {
      const i = r.data.length > n.exactLength.value, o = r.data.length < n.exactLength.value;
      (i || o) && (w(r, {
        code: i ? v.too_big : v.too_small,
        minimum: o ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), s.dirty());
    }
    if (n.minLength !== null && r.data.length < n.minLength.value && (w(r, {
      code: v.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), s.dirty()), n.maxLength !== null && r.data.length > n.maxLength.value && (w(r, {
      code: v.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), s.dirty()), r.common.async)
      return Promise.all([...r.data].map((i, o) => n.type._parseAsync(new Ie(r, i, r.path, o)))).then((i) => ue.mergeArray(s, i));
    const a = [...r.data].map((i, o) => n.type._parseSync(new Ie(r, i, r.path, o)));
    return ue.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Se({
      ...this._def,
      minLength: { value: e, message: N.toString(r) }
    });
  }
  max(e, r) {
    return new Se({
      ...this._def,
      maxLength: { value: e, message: N.toString(r) }
    });
  }
  length(e, r) {
    return new Se({
      ...this._def,
      exactLength: { value: e, message: N.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Se.create = (t, e) => new Se({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: C.ZodArray,
  ...I(e)
});
function yt(t) {
  if (t instanceof Q) {
    const e = {};
    for (const r in t.shape) {
      const s = t.shape[r];
      e[r] = Pe.create(yt(s));
    }
    return new Q({
      ...t._def,
      shape: () => e
    });
  } else return t instanceof Se ? new Se({
    ...t._def,
    type: yt(t.element)
  }) : t instanceof Pe ? Pe.create(yt(t.unwrap())) : t instanceof Xe ? Xe.create(yt(t.unwrap())) : t instanceof Ve ? Ve.create(t.items.map((e) => yt(e))) : t;
}
class Q extends D {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = L.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== j.object) {
      const h = this._getOrReturnCtx(e);
      return w(h, {
        code: v.invalid_type,
        expected: j.object,
        received: h.parsedType
      }), R;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Le && this._def.unknownKeys === "strip"))
      for (const h in n.data)
        i.includes(h) || o.push(h);
    const u = [];
    for (const h of i) {
      const m = a[h], g = n.data[h];
      u.push({
        key: { status: "valid", value: h },
        value: m._parse(new Ie(n, g, n.path, h)),
        alwaysSet: h in n.data
      });
    }
    if (this._def.catchall instanceof Le) {
      const h = this._def.unknownKeys;
      if (h === "passthrough")
        for (const m of o)
          u.push({
            key: { status: "valid", value: m },
            value: { status: "valid", value: n.data[m] }
          });
      else if (h === "strict")
        o.length > 0 && (w(n, {
          code: v.unrecognized_keys,
          keys: o
        }), s.dirty());
      else if (h !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const h = this._def.catchall;
      for (const m of o) {
        const g = n.data[m];
        u.push({
          key: { status: "valid", value: m },
          value: h._parse(
            new Ie(n, g, n.path, m)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: m in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const h = [];
      for (const m of u) {
        const g = await m.key, O = await m.value;
        h.push({
          key: g,
          value: O,
          alwaysSet: m.alwaysSet
        });
      }
      return h;
    }).then((h) => ue.mergeObjectSync(s, h)) : ue.mergeObjectSync(s, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return N.errToObj, new Q({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, s) => {
          var n, a, i, o;
          const u = (i = (a = (n = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(n, r, s).message) !== null && i !== void 0 ? i : s.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = N.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new Q({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Q({
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
    return new Q({
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
    return new Q({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: C.ZodObject
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
    return new Q({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return L.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (r[s] = this.shape[s]);
    }), new Q({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return L.objectKeys(this.shape).forEach((s) => {
      e[s] || (r[s] = this.shape[s]);
    }), new Q({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return yt(this);
  }
  partial(e) {
    const r = {};
    return L.objectKeys(this.shape).forEach((s) => {
      const n = this.shape[s];
      e && !e[s] ? r[s] = n : r[s] = n.optional();
    }), new Q({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return L.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s])
        r[s] = this.shape[s];
      else {
        let a = this.shape[s];
        for (; a instanceof Pe; )
          a = a._def.innerType;
        r[s] = a;
      }
    }), new Q({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Ps(L.objectKeys(this.shape));
  }
}
Q.create = (t, e) => new Q({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Le.create(),
  typeName: C.ZodObject,
  ...I(e)
});
Q.strictCreate = (t, e) => new Q({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Le.create(),
  typeName: C.ZodObject,
  ...I(e)
});
Q.lazycreate = (t, e) => new Q({
  shape: t,
  unknownKeys: "strip",
  catchall: Le.create(),
  typeName: C.ZodObject,
  ...I(e)
});
class Lt extends D {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = this._def.options;
    function n(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new we(o.ctx.common.issues));
      return w(r, {
        code: v.invalid_union,
        unionErrors: i
      }), R;
    }
    if (r.common.async)
      return Promise.all(s.map(async (a) => {
        const i = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: r.data,
            path: r.path,
            parent: i
          }),
          ctx: i
        };
      })).then(n);
    {
      let a;
      const i = [];
      for (const u of s) {
        const h = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, m = u._parseSync({
          data: r.data,
          path: r.path,
          parent: h
        });
        if (m.status === "valid")
          return m;
        m.status === "dirty" && !a && (a = { result: m, ctx: h }), h.common.issues.length && i.push(h.common.issues);
      }
      if (a)
        return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((u) => new we(u));
      return w(r, {
        code: v.invalid_union,
        unionErrors: o
      }), R;
    }
  }
  get options() {
    return this._def.options;
  }
}
Lt.create = (t, e) => new Lt({
  options: t,
  typeName: C.ZodUnion,
  ...I(e)
});
const Me = (t) => t instanceof Bt ? Me(t.schema) : t instanceof Ce ? Me(t.innerType()) : t instanceof zt ? [t.value] : t instanceof Ke ? t.options : t instanceof Wt ? L.objectValues(t.enum) : t instanceof qt ? Me(t._def.innerType) : t instanceof Ft ? [void 0] : t instanceof Mt ? [null] : t instanceof Pe ? [void 0, ...Me(t.unwrap())] : t instanceof Xe ? [null, ...Me(t.unwrap())] : t instanceof Hr || t instanceof Yt ? Me(t.unwrap()) : t instanceof Ht ? Me(t._def.innerType) : [];
class Nr extends D {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== j.object)
      return w(r, {
        code: v.invalid_type,
        expected: j.object,
        received: r.parsedType
      }), R;
    const s = this.discriminator, n = r.data[s], a = this.optionsMap.get(n);
    return a ? r.common.async ? a._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : a._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (w(r, {
      code: v.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [s]
    }), R);
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
  static create(e, r, s) {
    const n = /* @__PURE__ */ new Map();
    for (const a of r) {
      const i = Me(a.shape[e]);
      if (!i.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (n.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        n.set(o, a);
      }
    }
    return new Nr({
      typeName: C.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: n,
      ...I(s)
    });
  }
}
function Wr(t, e) {
  const r = qe(t), s = qe(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === j.object && s === j.object) {
    const n = L.objectKeys(e), a = L.objectKeys(t).filter((o) => n.indexOf(o) !== -1), i = { ...t, ...e };
    for (const o of a) {
      const u = Wr(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      i[o] = u.data;
    }
    return { valid: !0, data: i };
  } else if (r === j.array && s === j.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const n = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a], o = e[a], u = Wr(i, o);
      if (!u.valid)
        return { valid: !1 };
      n.push(u.data);
    }
    return { valid: !0, data: n };
  } else return r === j.date && s === j.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class $t extends D {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), n = (a, i) => {
      if (Br(a) || Br(i))
        return R;
      const o = Wr(a.value, i.value);
      return o.valid ? ((zr(a) || zr(i)) && r.dirty(), { status: r.value, value: o.data }) : (w(s, {
        code: v.invalid_intersection_types
      }), R);
    };
    return s.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      }),
      this._def.right._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      })
    ]).then(([a, i]) => n(a, i)) : n(this._def.left._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }), this._def.right._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }));
  }
}
$t.create = (t, e, r) => new $t({
  left: t,
  right: e,
  typeName: C.ZodIntersection,
  ...I(r)
});
class Ve extends D {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== j.array)
      return w(s, {
        code: v.invalid_type,
        expected: j.array,
        received: s.parsedType
      }), R;
    if (s.data.length < this._def.items.length)
      return w(s, {
        code: v.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), R;
    !this._def.rest && s.data.length > this._def.items.length && (w(s, {
      code: v.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const a = [...s.data].map((i, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new Ie(s, i, s.path, o)) : null;
    }).filter((i) => !!i);
    return s.common.async ? Promise.all(a).then((i) => ue.mergeArray(r, i)) : ue.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Ve({
      ...this._def,
      rest: e
    });
  }
}
Ve.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ve({
    items: t,
    typeName: C.ZodTuple,
    rest: null,
    ...I(e)
  });
};
class Ut extends D {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== j.object)
      return w(s, {
        code: v.invalid_type,
        expected: j.object,
        received: s.parsedType
      }), R;
    const n = [], a = this._def.keyType, i = this._def.valueType;
    for (const o in s.data)
      n.push({
        key: a._parse(new Ie(s, o, s.path, o)),
        value: i._parse(new Ie(s, s.data[o], s.path, o)),
        alwaysSet: o in s.data
      });
    return s.common.async ? ue.mergeObjectAsync(r, n) : ue.mergeObjectSync(r, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, s) {
    return r instanceof D ? new Ut({
      keyType: e,
      valueType: r,
      typeName: C.ZodRecord,
      ...I(s)
    }) : new Ut({
      keyType: Ne.create(),
      valueType: e,
      typeName: C.ZodRecord,
      ...I(r)
    });
  }
}
class vr extends D {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== j.map)
      return w(s, {
        code: v.invalid_type,
        expected: j.map,
        received: s.parsedType
      }), R;
    const n = this._def.keyType, a = this._def.valueType, i = [...s.data.entries()].map(([o, u], h) => ({
      key: n._parse(new Ie(s, o, s.path, [h, "key"])),
      value: a._parse(new Ie(s, u, s.path, [h, "value"]))
    }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of i) {
          const h = await u.key, m = await u.value;
          if (h.status === "aborted" || m.status === "aborted")
            return R;
          (h.status === "dirty" || m.status === "dirty") && r.dirty(), o.set(h.value, m.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of i) {
        const h = u.key, m = u.value;
        if (h.status === "aborted" || m.status === "aborted")
          return R;
        (h.status === "dirty" || m.status === "dirty") && r.dirty(), o.set(h.value, m.value);
      }
      return { status: r.value, value: o };
    }
  }
}
vr.create = (t, e, r) => new vr({
  valueType: e,
  keyType: t,
  typeName: C.ZodMap,
  ...I(r)
});
class it extends D {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== j.set)
      return w(s, {
        code: v.invalid_type,
        expected: j.set,
        received: s.parsedType
      }), R;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (w(s, {
      code: v.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), r.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (w(s, {
      code: v.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), r.dirty());
    const a = this._def.valueType;
    function i(u) {
      const h = /* @__PURE__ */ new Set();
      for (const m of u) {
        if (m.status === "aborted")
          return R;
        m.status === "dirty" && r.dirty(), h.add(m.value);
      }
      return { status: r.value, value: h };
    }
    const o = [...s.data.values()].map((u, h) => a._parse(new Ie(s, u, s.path, h)));
    return s.common.async ? Promise.all(o).then((u) => i(u)) : i(o);
  }
  min(e, r) {
    return new it({
      ...this._def,
      minSize: { value: e, message: N.toString(r) }
    });
  }
  max(e, r) {
    return new it({
      ...this._def,
      maxSize: { value: e, message: N.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
it.create = (t, e) => new it({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: C.ZodSet,
  ...I(e)
});
class _t extends D {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== j.function)
      return w(r, {
        code: v.invalid_type,
        expected: j.function,
        received: r.parsedType
      }), R;
    function s(o, u) {
      return mr({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          hr(),
          bt
        ].filter((h) => !!h),
        issueData: {
          code: v.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function n(o, u) {
      return mr({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          hr(),
          bt
        ].filter((h) => !!h),
        issueData: {
          code: v.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, i = r.data;
    if (this._def.returns instanceof kt) {
      const o = this;
      return ye(async function(...u) {
        const h = new we([]), m = await o._def.args.parseAsync(u, a).catch((P) => {
          throw h.addIssue(s(u, P)), h;
        }), g = await Reflect.apply(i, this, m);
        return await o._def.returns._def.type.parseAsync(g, a).catch((P) => {
          throw h.addIssue(n(g, P)), h;
        });
      });
    } else {
      const o = this;
      return ye(function(...u) {
        const h = o._def.args.safeParse(u, a);
        if (!h.success)
          throw new we([s(u, h.error)]);
        const m = Reflect.apply(i, this, h.data), g = o._def.returns.safeParse(m, a);
        if (!g.success)
          throw new we([n(m, g.error)]);
        return g.data;
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
    return new _t({
      ...this._def,
      args: Ve.create(e).rest(st.create())
    });
  }
  returns(e) {
    return new _t({
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
  static create(e, r, s) {
    return new _t({
      args: e || Ve.create([]).rest(st.create()),
      returns: r || st.create(),
      typeName: C.ZodFunction,
      ...I(s)
    });
  }
}
class Bt extends D {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Bt.create = (t, e) => new Bt({
  getter: t,
  typeName: C.ZodLazy,
  ...I(e)
});
class zt extends D {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return w(r, {
        received: r.data,
        code: v.invalid_literal,
        expected: this._def.value
      }), R;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
zt.create = (t, e) => new zt({
  value: t,
  typeName: C.ZodLiteral,
  ...I(e)
});
function Ps(t, e) {
  return new Ke({
    values: t,
    typeName: C.ZodEnum,
    ...I(e)
  });
}
class Ke extends D {
  constructor() {
    super(...arguments), Ot.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return w(r, {
        expected: L.joinValues(s),
        received: r.parsedType,
        code: v.invalid_type
      }), R;
    }
    if (pr(this, Ot) || Cs(this, Ot, new Set(this._def.values)), !pr(this, Ot).has(e.data)) {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return w(r, {
        received: r.data,
        code: v.invalid_enum_value,
        options: s
      }), R;
    }
    return ye(e.data);
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
    return Ke.create(e, {
      ...this._def,
      ...r
    });
  }
  exclude(e, r = this._def) {
    return Ke.create(this.options.filter((s) => !e.includes(s)), {
      ...this._def,
      ...r
    });
  }
}
Ot = /* @__PURE__ */ new WeakMap();
Ke.create = Ps;
class Wt extends D {
  constructor() {
    super(...arguments), Rt.set(this, void 0);
  }
  _parse(e) {
    const r = L.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== j.string && s.parsedType !== j.number) {
      const n = L.objectValues(r);
      return w(s, {
        expected: L.joinValues(n),
        received: s.parsedType,
        code: v.invalid_type
      }), R;
    }
    if (pr(this, Rt) || Cs(this, Rt, new Set(L.getValidEnumValues(this._def.values))), !pr(this, Rt).has(e.data)) {
      const n = L.objectValues(r);
      return w(s, {
        received: s.data,
        code: v.invalid_enum_value,
        options: n
      }), R;
    }
    return ye(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Rt = /* @__PURE__ */ new WeakMap();
Wt.create = (t, e) => new Wt({
  values: t,
  typeName: C.ZodNativeEnum,
  ...I(e)
});
class kt extends D {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== j.promise && r.common.async === !1)
      return w(r, {
        code: v.invalid_type,
        expected: j.promise,
        received: r.parsedType
      }), R;
    const s = r.parsedType === j.promise ? r.data : Promise.resolve(r.data);
    return ye(s.then((n) => this._def.type.parseAsync(n, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
kt.create = (t, e) => new kt({
  type: t,
  typeName: C.ZodPromise,
  ...I(e)
});
class Ce extends D {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === C.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), n = this._def.effect || null, a = {
      addIssue: (i) => {
        w(s, i), i.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), n.type === "preprocess") {
      const i = n.transform(s.data, a);
      if (s.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (r.value === "aborted")
            return R;
          const u = await this._def.schema._parseAsync({
            data: o,
            path: s.path,
            parent: s
          });
          return u.status === "aborted" ? R : u.status === "dirty" || r.value === "dirty" ? vt(u.value) : u;
        });
      {
        if (r.value === "aborted")
          return R;
        const o = this._def.schema._parseSync({
          data: i,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? R : o.status === "dirty" || r.value === "dirty" ? vt(o.value) : o;
      }
    }
    if (n.type === "refinement") {
      const i = (o) => {
        const u = n.refinement(o, a);
        if (s.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? R : (o.status === "dirty" && r.dirty(), i(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? R : (o.status === "dirty" && r.dirty(), i(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (n.type === "transform")
      if (s.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!Vt(i))
          return i;
        const o = n.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => Vt(i) ? Promise.resolve(n.transform(i.value, a)).then((o) => ({ status: r.value, value: o })) : i);
    L.assertNever(n);
  }
}
Ce.create = (t, e, r) => new Ce({
  schema: t,
  typeName: C.ZodEffects,
  effect: e,
  ...I(r)
});
Ce.createWithPreprocess = (t, e, r) => new Ce({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: C.ZodEffects,
  ...I(r)
});
class Pe extends D {
  _parse(e) {
    return this._getType(e) === j.undefined ? ye(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Pe.create = (t, e) => new Pe({
  innerType: t,
  typeName: C.ZodOptional,
  ...I(e)
});
class Xe extends D {
  _parse(e) {
    return this._getType(e) === j.null ? ye(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Xe.create = (t, e) => new Xe({
  innerType: t,
  typeName: C.ZodNullable,
  ...I(e)
});
class qt extends D {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let s = r.data;
    return r.parsedType === j.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
      data: s,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
qt.create = (t, e) => new qt({
  innerType: t,
  typeName: C.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...I(e)
});
class Ht extends D {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, n = this._def.innerType._parse({
      data: s.data,
      path: s.path,
      parent: {
        ...s
      }
    });
    return Dt(n) ? n.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new we(s.common.issues);
        },
        input: s.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new we(s.common.issues);
        },
        input: s.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ht.create = (t, e) => new Ht({
  innerType: t,
  typeName: C.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...I(e)
});
class xr extends D {
  _parse(e) {
    if (this._getType(e) !== j.nan) {
      const s = this._getOrReturnCtx(e);
      return w(s, {
        code: v.invalid_type,
        expected: j.nan,
        received: s.parsedType
      }), R;
    }
    return { status: "valid", value: e.data };
  }
}
xr.create = (t) => new xr({
  typeName: C.ZodNaN,
  ...I(t)
});
const zn = Symbol("zod_brand");
class Hr extends D {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = r.data;
    return this._def.type._parse({
      data: s,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Jt extends D {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return a.status === "aborted" ? R : a.status === "dirty" ? (r.dirty(), vt(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: s.path,
          parent: s
        });
      })();
    {
      const n = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      });
      return n.status === "aborted" ? R : n.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: n.value
      }) : this._def.out._parseSync({
        data: n.value,
        path: s.path,
        parent: s
      });
    }
  }
  static create(e, r) {
    return new Jt({
      in: e,
      out: r,
      typeName: C.ZodPipeline
    });
  }
}
class Yt extends D {
  _parse(e) {
    const r = this._def.innerType._parse(e), s = (n) => (Vt(n) && (n.value = Object.freeze(n.value)), n);
    return Dt(r) ? r.then((n) => s(n)) : s(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Yt.create = (t, e) => new Yt({
  innerType: t,
  typeName: C.ZodReadonly,
  ...I(e)
});
function Is(t, e = {}, r) {
  return t ? wt.create().superRefine((s, n) => {
    var a, i;
    if (!t(s)) {
      const o = typeof e == "function" ? e(s) : typeof e == "string" ? { message: e } : e, u = (i = (a = o.fatal) !== null && a !== void 0 ? a : r) !== null && i !== void 0 ? i : !0, h = typeof o == "string" ? { message: o } : o;
      n.addIssue({ code: "custom", ...h, fatal: u });
    }
  }) : wt.create();
}
const Wn = {
  object: Q.lazycreate
};
var C;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(C || (C = {}));
const qn = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Is((r) => r instanceof t, e), Vs = Ne.create, Ds = Ge.create, Hn = xr.create, Yn = Je.create, Zs = Zt.create, Gn = at.create, Jn = gr.create, Kn = Ft.create, Xn = Mt.create, Qn = wt.create, ea = st.create, ta = Le.create, ra = yr.create, sa = Se.create, na = Q.create, aa = Q.strictCreate, ia = Lt.create, oa = Nr.create, la = $t.create, ca = Ve.create, ua = Ut.create, da = vr.create, fa = it.create, ha = _t.create, ma = Bt.create, pa = zt.create, ga = Ke.create, ya = Wt.create, va = kt.create, ds = Ce.create, xa = Pe.create, _a = Xe.create, ba = Ce.createWithPreprocess, wa = Jt.create, ka = () => Vs().optional(), ja = () => Ds().optional(), Ea = () => Zs().optional(), Ta = {
  string: (t) => Ne.create({ ...t, coerce: !0 }),
  number: (t) => Ge.create({ ...t, coerce: !0 }),
  boolean: (t) => Zt.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Je.create({ ...t, coerce: !0 }),
  date: (t) => at.create({ ...t, coerce: !0 })
}, Na = R;
var ge = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: bt,
  setErrorMap: Nn,
  getErrorMap: hr,
  makeIssue: mr,
  EMPTY_PATH: Sn,
  addIssueToContext: w,
  ParseStatus: ue,
  INVALID: R,
  DIRTY: vt,
  OK: ye,
  isAborted: Br,
  isDirty: zr,
  isValid: Vt,
  isAsync: Dt,
  get util() {
    return L;
  },
  get objectUtil() {
    return Ur;
  },
  ZodParsedType: j,
  getParsedType: qe,
  ZodType: D,
  datetimeRegex: As,
  ZodString: Ne,
  ZodNumber: Ge,
  ZodBigInt: Je,
  ZodBoolean: Zt,
  ZodDate: at,
  ZodSymbol: gr,
  ZodUndefined: Ft,
  ZodNull: Mt,
  ZodAny: wt,
  ZodUnknown: st,
  ZodNever: Le,
  ZodVoid: yr,
  ZodArray: Se,
  ZodObject: Q,
  ZodUnion: Lt,
  ZodDiscriminatedUnion: Nr,
  ZodIntersection: $t,
  ZodTuple: Ve,
  ZodRecord: Ut,
  ZodMap: vr,
  ZodSet: it,
  ZodFunction: _t,
  ZodLazy: Bt,
  ZodLiteral: zt,
  ZodEnum: Ke,
  ZodNativeEnum: Wt,
  ZodPromise: kt,
  ZodEffects: Ce,
  ZodTransformer: Ce,
  ZodOptional: Pe,
  ZodNullable: Xe,
  ZodDefault: qt,
  ZodCatch: Ht,
  ZodNaN: xr,
  BRAND: zn,
  ZodBranded: Hr,
  ZodPipeline: Jt,
  ZodReadonly: Yt,
  custom: Is,
  Schema: D,
  ZodSchema: D,
  late: Wn,
  get ZodFirstPartyTypeKind() {
    return C;
  },
  coerce: Ta,
  any: Qn,
  array: sa,
  bigint: Yn,
  boolean: Zs,
  date: Gn,
  discriminatedUnion: oa,
  effect: ds,
  enum: ga,
  function: ha,
  instanceof: qn,
  intersection: la,
  lazy: ma,
  literal: pa,
  map: da,
  nan: Hn,
  nativeEnum: ya,
  never: ta,
  null: Xn,
  nullable: _a,
  number: Ds,
  object: na,
  oboolean: Ea,
  onumber: ja,
  optional: xa,
  ostring: ka,
  pipeline: wa,
  preprocess: ba,
  promise: va,
  record: ua,
  set: fa,
  strictObject: aa,
  string: Vs,
  symbol: Jn,
  transformer: ds,
  tuple: ca,
  undefined: Kn,
  union: ia,
  unknown: ea,
  void: ra,
  NEVER: Na,
  ZodIssueCode: v,
  quotelessJson: Tn,
  ZodError: we
}), Kt = (t) => t.type === "checkbox", xt = (t) => t instanceof Date, pe = (t) => t == null;
const Fs = (t) => typeof t == "object";
var oe = (t) => !pe(t) && !Array.isArray(t) && Fs(t) && !xt(t), Sa = (t) => oe(t) && t.target ? Kt(t.target) ? t.target.checked : t.target.value : t, Ca = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t, Oa = (t, e) => t.has(Ca(e)), Ra = (t) => {
  const e = t.constructor && t.constructor.prototype;
  return oe(e) && e.hasOwnProperty("isPrototypeOf");
}, Yr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function je(t) {
  let e;
  const r = Array.isArray(t);
  if (t instanceof Date)
    e = new Date(t);
  else if (t instanceof Set)
    e = new Set(t);
  else if (!(Yr && (t instanceof Blob || t instanceof FileList)) && (r || oe(t)))
    if (e = r ? [] : {}, !r && !Ra(t))
      e = t;
    else
      for (const s in t)
        t.hasOwnProperty(s) && (e[s] = je(t[s]));
  else
    return t;
  return e;
}
var Sr = (t) => Array.isArray(t) ? t.filter(Boolean) : [], se = (t) => t === void 0, E = (t, e, r) => {
  if (!e || !oe(t))
    return r;
  const s = Sr(e.split(/[,[\].]+?/)).reduce((n, a) => pe(n) ? n : n[a], t);
  return se(s) || s === t ? se(t[e]) ? r : t[e] : s;
}, He = (t) => typeof t == "boolean", Gr = (t) => /^\w*$/.test(t), Ms = (t) => Sr(t.replace(/["|']|\]/g, "").split(/\.|\[/)), W = (t, e, r) => {
  let s = -1;
  const n = Gr(e) ? [e] : Ms(e), a = n.length, i = a - 1;
  for (; ++s < a; ) {
    const o = n[s];
    let u = r;
    if (s !== i) {
      const h = t[o];
      u = oe(h) || Array.isArray(h) ? h : isNaN(+n[s + 1]) ? {} : [];
    }
    if (o === "__proto__")
      return;
    t[o] = u, t = t[o];
  }
  return t;
};
const fs = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Te = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Fe = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
re.createContext(null);
var Aa = (t, e, r, s = !0) => {
  const n = {
    defaultValues: e._defaultValues
  };
  for (const a in t)
    Object.defineProperty(n, a, {
      get: () => {
        const i = a;
        return e._proxyFormState[i] !== Te.all && (e._proxyFormState[i] = !s || Te.all), t[i];
      }
    });
  return n;
}, be = (t) => oe(t) && !Object.keys(t).length, Pa = (t, e, r, s) => {
  r(t);
  const { name: n, ...a } = t;
  return be(a) || Object.keys(a).length >= Object.keys(e).length || Object.keys(a).find((i) => e[i] === Te.all);
}, dr = (t) => Array.isArray(t) ? t : [t];
function Ia(t) {
  const e = re.useRef(t);
  e.current = t, re.useEffect(() => {
    const r = !t.disabled && e.current.subject && e.current.subject.subscribe({
      next: e.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [t.disabled]);
}
var Re = (t) => typeof t == "string", Va = (t, e, r, s, n) => Re(t) ? (s && e.watch.add(t), E(r, t, n)) : Array.isArray(t) ? t.map((a) => (s && e.watch.add(a), E(r, a))) : (s && (e.watchAll = !0), r), Ls = (t, e, r, s, n) => e ? {
  ...r[t],
  types: {
    ...r[t] && r[t].types ? r[t].types : {},
    [s]: n || !0
  }
} : {}, hs = (t) => ({
  isOnSubmit: !t || t === Te.onSubmit,
  isOnBlur: t === Te.onBlur,
  isOnChange: t === Te.onChange,
  isOnAll: t === Te.all,
  isOnTouch: t === Te.onTouched
}), ms = (t, e, r) => !r && (e.watchAll || e.watch.has(t) || [...e.watch].some((s) => t.startsWith(s) && /^\.\w+/.test(t.slice(s.length))));
const At = (t, e, r, s) => {
  for (const n of r || Object.keys(t)) {
    const a = E(t, n);
    if (a) {
      const { _f: i, ...o } = a;
      if (i) {
        if (i.refs && i.refs[0] && e(i.refs[0], n) && !s)
          break;
        if (i.ref && e(i.ref, i.name) && !s)
          break;
        At(o, e);
      } else oe(o) && At(o, e);
    }
  }
};
var Da = (t, e, r) => {
  const s = dr(E(t, r));
  return W(s, "root", e[r]), W(t, r, s), t;
}, Jr = (t) => t.type === "file", Ye = (t) => typeof t == "function", _r = (t) => {
  if (!Yr)
    return !1;
  const e = t ? t.ownerDocument : 0;
  return t instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, fr = (t) => Re(t), Kr = (t) => t.type === "radio", br = (t) => t instanceof RegExp;
const ps = {
  value: !1,
  isValid: !1
}, gs = { value: !0, isValid: !0 };
var $s = (t) => {
  if (Array.isArray(t)) {
    if (t.length > 1) {
      const e = t.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: e, isValid: !!e.length };
    }
    return t[0].checked && !t[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      t[0].attributes && !se(t[0].attributes.value) ? se(t[0].value) || t[0].value === "" ? gs : { value: t[0].value, isValid: !0 } : gs
    ) : ps;
  }
  return ps;
};
const ys = {
  isValid: !1,
  value: null
};
var Us = (t) => Array.isArray(t) ? t.reduce((e, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : e, ys) : ys;
function vs(t, e, r = "validate") {
  if (fr(t) || Array.isArray(t) && t.every(fr) || He(t) && !t)
    return {
      type: r,
      message: fr(t) ? t : "",
      ref: e
    };
}
var gt = (t) => oe(t) && !br(t) ? t : {
  value: t,
  message: ""
}, xs = async (t, e, r, s, n) => {
  const { ref: a, refs: i, required: o, maxLength: u, minLength: h, min: m, max: g, pattern: O, validate: P, name: U, valueAsNumber: le, mount: Y, disabled: B } = t._f, S = E(e, U);
  if (!Y || B)
    return {};
  const de = i ? i[0] : a, fe = (Z) => {
    s && de.reportValidity && (de.setCustomValidity(He(Z) ? "" : Z || ""), de.reportValidity());
  }, G = {}, K = Kr(a), ce = Kt(a), De = K || ce, Ze = (le || Jr(a)) && se(a.value) && se(S) || _r(a) && a.value === "" || S === "" || Array.isArray(S) && !S.length, ve = Ls.bind(null, U, r, G), lt = (Z, V, q, ee = Fe.maxLength, xe = Fe.minLength) => {
    const he = Z ? V : q;
    G[U] = {
      type: Z ? ee : xe,
      message: he,
      ref: a,
      ...ve(Z ? ee : xe, he)
    };
  };
  if (n ? !Array.isArray(S) || !S.length : o && (!De && (Ze || pe(S)) || He(S) && !S || ce && !$s(i).isValid || K && !Us(i).isValid)) {
    const { value: Z, message: V } = fr(o) ? { value: !!o, message: o } : gt(o);
    if (Z && (G[U] = {
      type: Fe.required,
      message: V,
      ref: de,
      ...ve(Fe.required, V)
    }, !r))
      return fe(V), G;
  }
  if (!Ze && (!pe(m) || !pe(g))) {
    let Z, V;
    const q = gt(g), ee = gt(m);
    if (!pe(S) && !isNaN(S)) {
      const xe = a.valueAsNumber || S && +S;
      pe(q.value) || (Z = xe > q.value), pe(ee.value) || (V = xe < ee.value);
    } else {
      const xe = a.valueAsDate || new Date(S), he = (Be) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Be), $e = a.type == "time", Ue = a.type == "week";
      Re(q.value) && S && (Z = $e ? he(S) > he(q.value) : Ue ? S > q.value : xe > new Date(q.value)), Re(ee.value) && S && (V = $e ? he(S) < he(ee.value) : Ue ? S < ee.value : xe < new Date(ee.value));
    }
    if ((Z || V) && (lt(!!Z, q.message, ee.message, Fe.max, Fe.min), !r))
      return fe(G[U].message), G;
  }
  if ((u || h) && !Ze && (Re(S) || n && Array.isArray(S))) {
    const Z = gt(u), V = gt(h), q = !pe(Z.value) && S.length > +Z.value, ee = !pe(V.value) && S.length < +V.value;
    if ((q || ee) && (lt(q, Z.message, V.message), !r))
      return fe(G[U].message), G;
  }
  if (O && !Ze && Re(S)) {
    const { value: Z, message: V } = gt(O);
    if (br(Z) && !S.match(Z) && (G[U] = {
      type: Fe.pattern,
      message: V,
      ref: a,
      ...ve(Fe.pattern, V)
    }, !r))
      return fe(V), G;
  }
  if (P) {
    if (Ye(P)) {
      const Z = await P(S, e), V = vs(Z, de);
      if (V && (G[U] = {
        ...V,
        ...ve(Fe.validate, V.message)
      }, !r))
        return fe(V.message), G;
    } else if (oe(P)) {
      let Z = {};
      for (const V in P) {
        if (!be(Z) && !r)
          break;
        const q = vs(await P[V](S, e), de, V);
        q && (Z = {
          ...q,
          ...ve(V, q.message)
        }, fe(q.message), r && (G[U] = Z));
      }
      if (!be(Z) && (G[U] = {
        ref: de,
        ...Z
      }, !r))
        return G;
    }
  }
  return fe(!0), G;
};
function Za(t, e) {
  const r = e.slice(0, -1).length;
  let s = 0;
  for (; s < r; )
    t = se(t) ? s++ : t[e[s++]];
  return t;
}
function Fa(t) {
  for (const e in t)
    if (t.hasOwnProperty(e) && !se(t[e]))
      return !1;
  return !0;
}
function ie(t, e) {
  const r = Array.isArray(e) ? e : Gr(e) ? [e] : Ms(e), s = r.length === 1 ? t : Za(t, r), n = r.length - 1, a = r[n];
  return s && delete s[a], n !== 0 && (oe(s) && be(s) || Array.isArray(s) && Fa(s)) && ie(t, r.slice(0, -1)), t;
}
var Fr = () => {
  let t = [];
  return {
    get observers() {
      return t;
    },
    next: (n) => {
      for (const a of t)
        a.next && a.next(n);
    },
    subscribe: (n) => (t.push(n), {
      unsubscribe: () => {
        t = t.filter((a) => a !== n);
      }
    }),
    unsubscribe: () => {
      t = [];
    }
  };
}, wr = (t) => pe(t) || !Fs(t);
function rt(t, e) {
  if (wr(t) || wr(e))
    return t === e;
  if (xt(t) && xt(e))
    return t.getTime() === e.getTime();
  const r = Object.keys(t), s = Object.keys(e);
  if (r.length !== s.length)
    return !1;
  for (const n of r) {
    const a = t[n];
    if (!s.includes(n))
      return !1;
    if (n !== "ref") {
      const i = e[n];
      if (xt(a) && xt(i) || oe(a) && oe(i) || Array.isArray(a) && Array.isArray(i) ? !rt(a, i) : a !== i)
        return !1;
    }
  }
  return !0;
}
var Bs = (t) => t.type === "select-multiple", Ma = (t) => Kr(t) || Kt(t), Mr = (t) => _r(t) && t.isConnected, zs = (t) => {
  for (const e in t)
    if (Ye(t[e]))
      return !0;
  return !1;
};
function kr(t, e = {}) {
  const r = Array.isArray(t);
  if (oe(t) || r)
    for (const s in t)
      Array.isArray(t[s]) || oe(t[s]) && !zs(t[s]) ? (e[s] = Array.isArray(t[s]) ? [] : {}, kr(t[s], e[s])) : pe(t[s]) || (e[s] = !0);
  return e;
}
function Ws(t, e, r) {
  const s = Array.isArray(t);
  if (oe(t) || s)
    for (const n in t)
      Array.isArray(t[n]) || oe(t[n]) && !zs(t[n]) ? se(e) || wr(r[n]) ? r[n] = Array.isArray(t[n]) ? kr(t[n], []) : { ...kr(t[n]) } : Ws(t[n], pe(e) ? {} : e[n], r[n]) : r[n] = !rt(t[n], e[n]);
  return r;
}
var cr = (t, e) => Ws(t, e, kr(e)), qs = (t, { valueAsNumber: e, valueAsDate: r, setValueAs: s }) => se(t) ? t : e ? t === "" ? NaN : t && +t : r && Re(t) ? new Date(t) : s ? s(t) : t;
function Lr(t) {
  const e = t.ref;
  if (!(t.refs ? t.refs.every((r) => r.disabled) : e.disabled))
    return Jr(e) ? e.files : Kr(e) ? Us(t.refs).value : Bs(e) ? [...e.selectedOptions].map(({ value: r }) => r) : Kt(e) ? $s(t.refs).value : qs(se(e.value) ? t.ref.value : e.value, t);
}
var La = (t, e, r, s) => {
  const n = {};
  for (const a of t) {
    const i = E(e, a);
    i && W(n, a, i._f);
  }
  return {
    criteriaMode: r,
    names: [...t],
    fields: n,
    shouldUseNativeValidation: s
  };
}, Ct = (t) => se(t) ? t : br(t) ? t.source : oe(t) ? br(t.value) ? t.value.source : t.value : t, $a = (t) => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);
function _s(t, e, r) {
  const s = E(t, r);
  if (s || Gr(r))
    return {
      error: s,
      name: r
    };
  const n = r.split(".");
  for (; n.length; ) {
    const a = n.join("."), i = E(e, a), o = E(t, a);
    if (i && !Array.isArray(i) && r !== a)
      return { name: r };
    if (o && o.type)
      return {
        name: a,
        error: o
      };
    n.pop();
  }
  return {
    name: r
  };
}
var Ua = (t, e, r, s, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(e || t) : (r ? s.isOnBlur : n.isOnBlur) ? !t : (r ? s.isOnChange : n.isOnChange) ? t : !0, Ba = (t, e) => !Sr(E(t, e)).length && ie(t, e);
const za = {
  mode: Te.onSubmit,
  reValidateMode: Te.onChange,
  shouldFocusError: !0
};
function Wa(t = {}) {
  let e = {
    ...za,
    ...t
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Ye(e.defaultValues),
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
  }, s = {}, n = oe(e.defaultValues) || oe(e.values) ? je(e.defaultValues || e.values) || {} : {}, a = e.shouldUnregister ? {} : je(n), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, o = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, u, h = 0;
  const m = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, g = {
    values: Fr(),
    array: Fr(),
    state: Fr()
  }, O = hs(e.mode), P = hs(e.reValidateMode), U = e.criteriaMode === Te.all, le = (c) => (f) => {
    clearTimeout(h), h = setTimeout(c, f);
  }, Y = async (c) => {
    if (m.isValid || c) {
      const f = e.resolver ? be((await De()).errors) : await ve(s, !0);
      f !== r.isValid && g.state.next({
        isValid: f
      });
    }
  }, B = (c, f) => {
    (m.isValidating || m.validatingFields) && ((c || Array.from(o.mount)).forEach((p) => {
      p && (f ? W(r.validatingFields, p, f) : ie(r.validatingFields, p));
    }), g.state.next({
      validatingFields: r.validatingFields,
      isValidating: !be(r.validatingFields)
    }));
  }, S = (c, f = [], p, b, _ = !0, x = !0) => {
    if (b && p) {
      if (i.action = !0, x && Array.isArray(E(s, c))) {
        const T = p(E(s, c), b.argA, b.argB);
        _ && W(s, c, T);
      }
      if (x && Array.isArray(E(r.errors, c))) {
        const T = p(E(r.errors, c), b.argA, b.argB);
        _ && W(r.errors, c, T), Ba(r.errors, c);
      }
      if (m.touchedFields && x && Array.isArray(E(r.touchedFields, c))) {
        const T = p(E(r.touchedFields, c), b.argA, b.argB);
        _ && W(r.touchedFields, c, T);
      }
      m.dirtyFields && (r.dirtyFields = cr(n, a)), g.state.next({
        name: c,
        isDirty: Z(c, f),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      W(a, c, f);
  }, de = (c, f) => {
    W(r.errors, c, f), g.state.next({
      errors: r.errors
    });
  }, fe = (c) => {
    r.errors = c, g.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, G = (c, f, p, b) => {
    const _ = E(s, c);
    if (_) {
      const x = E(a, c, se(p) ? E(n, c) : p);
      se(x) || b && b.defaultChecked || f ? W(a, c, f ? x : Lr(_._f)) : ee(c, x), i.mount && Y();
    }
  }, K = (c, f, p, b, _) => {
    let x = !1, T = !1;
    const $ = {
      name: c
    }, X = !!(E(s, c) && E(s, c)._f && E(s, c)._f.disabled);
    if (!p || b) {
      m.isDirty && (T = r.isDirty, r.isDirty = $.isDirty = Z(), x = T !== $.isDirty);
      const ae = X || rt(E(n, c), f);
      T = !!(!X && E(r.dirtyFields, c)), ae || X ? ie(r.dirtyFields, c) : W(r.dirtyFields, c, !0), $.dirtyFields = r.dirtyFields, x = x || m.dirtyFields && T !== !ae;
    }
    if (p) {
      const ae = E(r.touchedFields, c);
      ae || (W(r.touchedFields, c, p), $.touchedFields = r.touchedFields, x = x || m.touchedFields && ae !== p);
    }
    return x && _ && g.state.next($), x ? $ : {};
  }, ce = (c, f, p, b) => {
    const _ = E(r.errors, c), x = m.isValid && He(f) && r.isValid !== f;
    if (t.delayError && p ? (u = le(() => de(c, p)), u(t.delayError)) : (clearTimeout(h), u = null, p ? W(r.errors, c, p) : ie(r.errors, c)), (p ? !rt(_, p) : _) || !be(b) || x) {
      const T = {
        ...b,
        ...x && He(f) ? { isValid: f } : {},
        errors: r.errors,
        name: c
      };
      r = {
        ...r,
        ...T
      }, g.state.next(T);
    }
  }, De = async (c) => {
    B(c, !0);
    const f = await e.resolver(a, e.context, La(c || o.mount, s, e.criteriaMode, e.shouldUseNativeValidation));
    return B(c), f;
  }, Ze = async (c) => {
    const { errors: f } = await De(c);
    if (c)
      for (const p of c) {
        const b = E(f, p);
        b ? W(r.errors, p, b) : ie(r.errors, p);
      }
    else
      r.errors = f;
    return f;
  }, ve = async (c, f, p = {
    valid: !0
  }) => {
    for (const b in c) {
      const _ = c[b];
      if (_) {
        const { _f: x, ...T } = _;
        if (x) {
          const $ = o.array.has(x.name);
          B([b], !0);
          const X = await xs(_, a, U, e.shouldUseNativeValidation && !f, $);
          if (B([b]), X[x.name] && (p.valid = !1, f))
            break;
          !f && (E(X, x.name) ? $ ? Da(r.errors, X, x.name) : W(r.errors, x.name, X[x.name]) : ie(r.errors, x.name));
        }
        T && await ve(T, f, p);
      }
    }
    return p.valid;
  }, lt = () => {
    for (const c of o.unMount) {
      const f = E(s, c);
      f && (f._f.refs ? f._f.refs.every((p) => !Mr(p)) : !Mr(f._f.ref)) && Qe(c);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, Z = (c, f) => (c && f && W(a, c, f), !rt(jt(), n)), V = (c, f, p) => Va(c, o, {
    ...i.mount ? a : se(f) ? n : Re(c) ? { [c]: f } : f
  }, p, f), q = (c) => Sr(E(i.mount ? a : n, c, t.shouldUnregister ? E(n, c, []) : [])), ee = (c, f, p = {}) => {
    const b = E(s, c);
    let _ = f;
    if (b) {
      const x = b._f;
      x && (!x.disabled && W(a, c, qs(f, x)), _ = _r(x.ref) && pe(f) ? "" : f, Bs(x.ref) ? [...x.ref.options].forEach((T) => T.selected = _.includes(T.value)) : x.refs ? Kt(x.ref) ? x.refs.length > 1 ? x.refs.forEach((T) => (!T.defaultChecked || !T.disabled) && (T.checked = Array.isArray(_) ? !!_.find(($) => $ === T.value) : _ === T.value)) : x.refs[0] && (x.refs[0].checked = !!_) : x.refs.forEach((T) => T.checked = T.value === _) : Jr(x.ref) ? x.ref.value = "" : (x.ref.value = _, x.ref.type || g.values.next({
        name: c,
        values: { ...a }
      })));
    }
    (p.shouldDirty || p.shouldTouch) && K(c, _, p.shouldTouch, p.shouldDirty, !0), p.shouldValidate && Be(c);
  }, xe = (c, f, p) => {
    for (const b in f) {
      const _ = f[b], x = `${c}.${b}`, T = E(s, x);
      (o.array.has(c) || !wr(_) || T && !T._f) && !xt(_) ? xe(x, _, p) : ee(x, _, p);
    }
  }, he = (c, f, p = {}) => {
    const b = E(s, c), _ = o.array.has(c), x = je(f);
    W(a, c, x), _ ? (g.array.next({
      name: c,
      values: { ...a }
    }), (m.isDirty || m.dirtyFields) && p.shouldDirty && g.state.next({
      name: c,
      dirtyFields: cr(n, a),
      isDirty: Z(c, x)
    })) : b && !b._f && !pe(x) ? xe(c, x, p) : ee(c, x, p), ms(c, o) && g.state.next({ ...r }), g.values.next({
      name: i.mount ? c : void 0,
      values: { ...a }
    });
  }, $e = async (c) => {
    i.mount = !0;
    const f = c.target;
    let p = f.name, b = !0;
    const _ = E(s, p), x = () => f.type ? Lr(_._f) : Sa(c), T = ($) => {
      b = Number.isNaN($) || $ === E(a, p, $);
    };
    if (_) {
      let $, X;
      const ae = x(), We = c.type === fs.BLUR || c.type === fs.FOCUS_OUT, ir = !$a(_._f) && !e.resolver && !E(r.errors, p) && !_._f.deps || Ua(We, E(r.touchedFields, p), r.isSubmitted, P, O), ht = ms(p, o, We);
      W(a, p, ae), We ? (_._f.onBlur && _._f.onBlur(c), u && u(0)) : _._f.onChange && _._f.onChange(c);
      const et = K(p, ae, We, !1), Rr = !be(et) || ht;
      if (!We && g.values.next({
        name: p,
        type: c.type,
        values: { ...a }
      }), ir)
        return m.isValid && Y(), Rr && g.state.next({ name: p, ...ht ? {} : et });
      if (!We && ht && g.state.next({ ...r }), e.resolver) {
        const { errors: or } = await De([p]);
        if (T(ae), b) {
          const Ar = _s(r.errors, s, p), lr = _s(or, s, Ar.name || p);
          $ = lr.error, p = lr.name, X = be(or);
        }
      } else
        B([p], !0), $ = (await xs(_, a, U, e.shouldUseNativeValidation))[p], B([p]), T(ae), b && ($ ? X = !1 : m.isValid && (X = await ve(s, !0)));
      b && (_._f.deps && Be(_._f.deps), ce(p, X, $, et));
    }
  }, Ue = (c, f) => {
    if (E(r.errors, f) && c.focus)
      return c.focus(), 1;
  }, Be = async (c, f = {}) => {
    let p, b;
    const _ = dr(c);
    if (e.resolver) {
      const x = await Ze(se(c) ? c : _);
      p = be(x), b = c ? !_.some((T) => E(x, T)) : p;
    } else c ? (b = (await Promise.all(_.map(async (x) => {
      const T = E(s, x);
      return await ve(T && T._f ? { [x]: T } : T);
    }))).every(Boolean), !(!b && !r.isValid) && Y()) : b = p = await ve(s);
    return g.state.next({
      ...!Re(c) || m.isValid && p !== r.isValid ? {} : { name: c },
      ...e.resolver || !c ? { isValid: p } : {},
      errors: r.errors
    }), f.shouldFocus && !b && At(s, Ue, c ? _ : o.mount), b;
  }, jt = (c) => {
    const f = {
      ...i.mount ? a : n
    };
    return se(c) ? f : Re(c) ? E(f, c) : c.map((p) => E(f, p));
  }, Et = (c, f) => ({
    invalid: !!E((f || r).errors, c),
    isDirty: !!E((f || r).dirtyFields, c),
    error: E((f || r).errors, c),
    isValidating: !!E(r.validatingFields, c),
    isTouched: !!E((f || r).touchedFields, c)
  }), er = (c) => {
    c && dr(c).forEach((f) => ie(r.errors, f)), g.state.next({
      errors: c ? r.errors : {}
    });
  }, tr = (c, f, p) => {
    const b = (E(s, c, { _f: {} })._f || {}).ref, _ = E(r.errors, c) || {}, { ref: x, message: T, type: $, ...X } = _;
    W(r.errors, c, {
      ...X,
      ...f,
      ref: b
    }), g.state.next({
      name: c,
      errors: r.errors,
      isValid: !1
    }), p && p.shouldFocus && b && b.focus && b.focus();
  }, Cr = (c, f) => Ye(c) ? g.values.subscribe({
    next: (p) => c(V(void 0, f), p)
  }) : V(c, f, !0), Qe = (c, f = {}) => {
    for (const p of c ? dr(c) : o.mount)
      o.mount.delete(p), o.array.delete(p), f.keepValue || (ie(s, p), ie(a, p)), !f.keepError && ie(r.errors, p), !f.keepDirty && ie(r.dirtyFields, p), !f.keepTouched && ie(r.touchedFields, p), !f.keepIsValidating && ie(r.validatingFields, p), !e.shouldUnregister && !f.keepDefaultValue && ie(n, p);
    g.values.next({
      values: { ...a }
    }), g.state.next({
      ...r,
      ...f.keepDirty ? { isDirty: Z() } : {}
    }), !f.keepIsValid && Y();
  }, ct = ({ disabled: c, name: f, field: p, fields: b, value: _ }) => {
    if (He(c) && i.mount || c) {
      const x = c ? void 0 : se(_) ? Lr(p ? p._f : E(b, f)._f) : _;
      W(a, f, x), K(f, x, !1, !1, !0);
    }
  }, ze = (c, f = {}) => {
    let p = E(s, c);
    const b = He(f.disabled);
    return W(s, c, {
      ...p || {},
      _f: {
        ...p && p._f ? p._f : { ref: { name: c } },
        name: c,
        mount: !0,
        ...f
      }
    }), o.mount.add(c), p ? ct({
      field: p,
      disabled: f.disabled,
      name: c,
      value: f.value
    }) : G(c, !0, f.value), {
      ...b ? { disabled: f.disabled } : {},
      ...e.progressive ? {
        required: !!f.required,
        min: Ct(f.min),
        max: Ct(f.max),
        minLength: Ct(f.minLength),
        maxLength: Ct(f.maxLength),
        pattern: Ct(f.pattern)
      } : {},
      name: c,
      onChange: $e,
      onBlur: $e,
      ref: (_) => {
        if (_) {
          ze(c, f), p = E(s, c);
          const x = se(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _, T = Ma(x), $ = p._f.refs || [];
          if (T ? $.find((X) => X === x) : x === p._f.ref)
            return;
          W(s, c, {
            _f: {
              ...p._f,
              ...T ? {
                refs: [
                  ...$.filter(Mr),
                  x,
                  ...Array.isArray(E(n, c)) ? [{}] : []
                ],
                ref: { type: x.type, name: c }
              } : { ref: x }
            }
          }), G(c, !1, void 0, x);
        } else
          p = E(s, c, {}), p._f && (p._f.mount = !1), (e.shouldUnregister || f.shouldUnregister) && !(Oa(o.array, c) && i.action) && o.unMount.add(c);
      }
    };
  }, ut = () => e.shouldFocusError && At(s, Ue, o.mount), dt = (c) => {
    He(c) && (g.state.next({ disabled: c }), At(s, (f, p) => {
      const b = E(s, p);
      b && (f.disabled = b._f.disabled || c, Array.isArray(b._f.refs) && b._f.refs.forEach((_) => {
        _.disabled = b._f.disabled || c;
      }));
    }, 0, !1));
  }, rr = (c, f) => async (p) => {
    let b;
    p && (p.preventDefault && p.preventDefault(), p.persist && p.persist());
    let _ = je(a);
    if (g.state.next({
      isSubmitting: !0
    }), e.resolver) {
      const { errors: x, values: T } = await De();
      r.errors = x, _ = T;
    } else
      await ve(s);
    if (ie(r.errors, "root"), be(r.errors)) {
      g.state.next({
        errors: {}
      });
      try {
        await c(_, p);
      } catch (x) {
        b = x;
      }
    } else
      f && await f({ ...r.errors }, p), ut(), setTimeout(ut);
    if (g.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: be(r.errors) && !b,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), b)
      throw b;
  }, sr = (c, f = {}) => {
    E(s, c) && (se(f.defaultValue) ? he(c, je(E(n, c))) : (he(c, f.defaultValue), W(n, c, je(f.defaultValue))), f.keepTouched || ie(r.touchedFields, c), f.keepDirty || (ie(r.dirtyFields, c), r.isDirty = f.defaultValue ? Z(c, je(E(n, c))) : Z()), f.keepError || (ie(r.errors, c), m.isValid && Y()), g.state.next({ ...r }));
  }, nr = (c, f = {}) => {
    const p = c ? je(c) : n, b = je(p), _ = be(c), x = _ ? n : b;
    if (f.keepDefaultValues || (n = p), !f.keepValues) {
      if (f.keepDirtyValues)
        for (const T of o.mount)
          E(r.dirtyFields, T) ? W(x, T, E(a, T)) : he(T, E(x, T));
      else {
        if (Yr && se(c))
          for (const T of o.mount) {
            const $ = E(s, T);
            if ($ && $._f) {
              const X = Array.isArray($._f.refs) ? $._f.refs[0] : $._f.ref;
              if (_r(X)) {
                const ae = X.closest("form");
                if (ae) {
                  ae.reset();
                  break;
                }
              }
            }
          }
        s = {};
      }
      a = t.shouldUnregister ? f.keepDefaultValues ? je(n) : {} : je(x), g.array.next({
        values: { ...x }
      }), g.values.next({
        values: { ...x }
      });
    }
    o = {
      mount: f.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, i.mount = !m.isValid || !!f.keepIsValid || !!f.keepDirtyValues, i.watch = !!t.shouldUnregister, g.state.next({
      submitCount: f.keepSubmitCount ? r.submitCount : 0,
      isDirty: _ ? !1 : f.keepDirty ? r.isDirty : !!(f.keepDefaultValues && !rt(c, n)),
      isSubmitted: f.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: _ ? {} : f.keepDirtyValues ? f.keepDefaultValues && a ? cr(n, a) : r.dirtyFields : f.keepDefaultValues && c ? cr(n, c) : f.keepDirty ? r.dirtyFields : {},
      touchedFields: f.keepTouched ? r.touchedFields : {},
      errors: f.keepErrors ? r.errors : {},
      isSubmitSuccessful: f.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ar = (c, f) => nr(Ye(c) ? c(a) : c, f);
  return {
    control: {
      register: ze,
      unregister: Qe,
      getFieldState: Et,
      handleSubmit: rr,
      setError: tr,
      _executeSchema: De,
      _getWatch: V,
      _getDirty: Z,
      _updateValid: Y,
      _removeUnmounted: lt,
      _updateFieldArray: S,
      _updateDisabledField: ct,
      _getFieldArray: q,
      _reset: nr,
      _resetDefaultValues: () => Ye(e.defaultValues) && e.defaultValues().then((c) => {
        ar(c, e.resetOptions), g.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (c) => {
        r = {
          ...r,
          ...c
        };
      },
      _disableForm: dt,
      _subjects: g,
      _proxyFormState: m,
      _setErrors: fe,
      get _fields() {
        return s;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return i;
      },
      set _state(c) {
        i = c;
      },
      get _defaultValues() {
        return n;
      },
      get _names() {
        return o;
      },
      set _names(c) {
        o = c;
      },
      get _formState() {
        return r;
      },
      set _formState(c) {
        r = c;
      },
      get _options() {
        return e;
      },
      set _options(c) {
        e = {
          ...e,
          ...c
        };
      }
    },
    trigger: Be,
    register: ze,
    handleSubmit: rr,
    watch: Cr,
    setValue: he,
    getValues: jt,
    reset: ar,
    resetField: sr,
    clearErrors: er,
    unregister: Qe,
    setError: tr,
    setFocus: (c, f = {}) => {
      const p = E(s, c), b = p && p._f;
      if (b) {
        const _ = b.refs ? b.refs[0] : b.ref;
        _.focus && (_.focus(), f.shouldSelect && _.select());
      }
    },
    getFieldState: Et
  };
}
function Xt(t = {}) {
  const e = re.useRef(), r = re.useRef(), [s, n] = re.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ye(t.defaultValues),
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
    defaultValues: Ye(t.defaultValues) ? void 0 : t.defaultValues
  });
  e.current || (e.current = {
    ...Wa(t),
    formState: s
  });
  const a = e.current.control;
  return a._options = t, Ia({
    subject: a._subjects.state,
    next: (i) => {
      Pa(i, a._proxyFormState, a._updateFormState) && n({ ...a._formState });
    }
  }), re.useEffect(() => a._disableForm(t.disabled), [a, t.disabled]), re.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const i = a._getDirty();
      i !== s.isDirty && a._subjects.state.next({
        isDirty: i
      });
    }
  }, [a, s.isDirty]), re.useEffect(() => {
    t.values && !rt(t.values, r.current) ? (a._reset(t.values, a._options.resetOptions), r.current = t.values, n((i) => ({ ...i }))) : a._resetDefaultValues();
  }, [t.values, a]), re.useEffect(() => {
    t.errors && a._setErrors(t.errors);
  }, [t.errors, a]), re.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), re.useEffect(() => {
    t.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [t.shouldUnregister, a]), e.current.formState = Aa(s, a), e.current;
}
const bs = (t, e, r) => {
  if (t && "reportValidity" in t) {
    const s = E(r, e);
    t.setCustomValidity(s && s.message || ""), t.reportValidity();
  }
}, Hs = (t, e) => {
  for (const r in e.fields) {
    const s = e.fields[r];
    s && s.ref && "reportValidity" in s.ref ? bs(s.ref, r, t) : s.refs && s.refs.forEach((n) => bs(n, r, t));
  }
}, qa = (t, e) => {
  e.shouldUseNativeValidation && Hs(t, e);
  const r = {};
  for (const s in t) {
    const n = E(e.fields, s), a = Object.assign(t[s] || {}, { ref: n && n.ref });
    if (Ha(e.names || Object.keys(t), s)) {
      const i = Object.assign({}, E(r, s));
      W(i, "root", a), W(r, s, i);
    } else W(r, s, a);
  }
  return r;
}, Ha = (t, e) => t.some((r) => r.startsWith(e + "."));
var Ya = function(t, e) {
  for (var r = {}; t.length; ) {
    var s = t[0], n = s.code, a = s.message, i = s.path.join(".");
    if (!r[i]) if ("unionErrors" in s) {
      var o = s.unionErrors[0].errors[0];
      r[i] = { message: o.message, type: o.code };
    } else r[i] = { message: a, type: n };
    if ("unionErrors" in s && s.unionErrors.forEach(function(m) {
      return m.errors.forEach(function(g) {
        return t.push(g);
      });
    }), e) {
      var u = r[i].types, h = u && u[s.code];
      r[i] = Ls(i, e, r, n, h ? [].concat(h, s.message) : s.message);
    }
    t.shift();
  }
  return r;
}, Qt = function(t, e, r) {
  return r === void 0 && (r = {}), function(s, n, a) {
    try {
      return Promise.resolve(function(i, o) {
        try {
          var u = Promise.resolve(t[r.mode === "sync" ? "parse" : "parseAsync"](s, e)).then(function(h) {
            return a.shouldUseNativeValidation && Hs({}, a), { errors: {}, values: r.raw ? s : h };
          });
        } catch (h) {
          return o(h);
        }
        return u && u.then ? u.then(void 0, o) : u;
      }(0, function(i) {
        if (function(o) {
          return Array.isArray(o == null ? void 0 : o.errors);
        }(i)) return { values: {}, errors: qa(Ya(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}, Ys = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ws = re.createContext && /* @__PURE__ */ re.createContext(Ys), Ga = ["attr", "size", "title"];
function Ja(t, e) {
  if (t == null) return {};
  var r = Ka(t, e), s, n;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (n = 0; n < a.length; n++)
      s = a[n], !(e.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (r[s] = t[s]);
  }
  return r;
}
function Ka(t, e) {
  if (t == null) return {};
  var r = {};
  for (var s in t)
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      if (e.indexOf(s) >= 0) continue;
      r[s] = t[s];
    }
  return r;
}
function jr() {
  return jr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, jr.apply(this, arguments);
}
function ks(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, s);
  }
  return r;
}
function Er(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ks(Object(r), !0).forEach(function(s) {
      Xa(t, s, r[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ks(Object(r)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(r, s));
    });
  }
  return t;
}
function Xa(t, e, r) {
  return e = Qa(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Qa(t) {
  var e = ei(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ei(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(t, e || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Gs(t) {
  return t && t.map((e, r) => /* @__PURE__ */ re.createElement(e.tag, Er({
    key: r
  }, e.attr), Gs(e.child)));
}
function ti(t) {
  return (e) => /* @__PURE__ */ re.createElement(ri, jr({
    attr: Er({}, t.attr)
  }, e), Gs(t.child));
}
function ri(t) {
  var e = (r) => {
    var {
      attr: s,
      size: n,
      title: a
    } = t, i = Ja(t, Ga), o = n || r.size || "1em", u;
    return r.className && (u = r.className), t.className && (u = (u ? u + " " : "") + t.className), /* @__PURE__ */ re.createElement("svg", jr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, s, i, {
      className: u,
      style: Er(Er({
        color: t.color || r.color
      }, r.style), t.style),
      height: o,
      width: o,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ re.createElement("title", null, a), t.children);
  };
  return ws !== void 0 ? /* @__PURE__ */ re.createElement(ws.Consumer, null, (r) => e(r)) : e(Ys);
}
function Js(t) {
  return ti({ tag: "svg", attr: { version: "1.1", x: "0px", y: "0px", viewBox: "0 0 48 48", enableBackground: "new 0 0 48 48" }, child: [{ tag: "path", attr: { fill: "#FFC107", d: `M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z` }, child: [] }, { tag: "path", attr: { fill: "#FF3D00", d: `M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z` }, child: [] }, { tag: "path", attr: { fill: "#4CAF50", d: `M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z` }, child: [] }, { tag: "path", attr: { fill: "#1976D2", d: `M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z` }, child: [] }] })(t);
}
const si = ({
  logoUrl: t,
  handleSubmitOn: e,
  handleSubmit: r,
  handleSubmitForm: s,
  register: n,
  errors: a,
  isLoading: i,
  library: o,
  type: u,
  forgetPasswordUrl: h,
  redirectSignupUrl: m,
  PreviewDescription: g,
  previewTitle: O,
  previewImg: P,
  showSignUp: U,
  showSignOn: le = !0
}) => {
  var Y, B;
  return /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap w-screen h-screen", children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex w-full flex-col md:w-[40%]", children: /* @__PURE__ */ d.jsxs("div", { className: "w-[80%] ml-12 my-auto flex flex-col pt-8 md:px-6 md:pt-0", children: [
      /* @__PURE__ */ d.jsx(
        "a",
        {
          href: "#",
          className: "py-4 text-2xl font-semibold text-gray-900 dark:text-white",
          children: /* @__PURE__ */ d.jsx("img", { className: "w-auto h-10", src: t, alt: "" })
        }
      ),
      le && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx("p", { className: "text-left text-3xl font-bold", children: "Sign in to your account" }),
        /* @__PURE__ */ d.jsxs(
          "button",
          {
            className: "-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white",
            onClick: () => e("google"),
            children: [
              /* @__PURE__ */ d.jsx(Js, { className: "mr-2" }),
              "Log in with Google"
            ]
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: "relative mt-8 flex h-px place-items-center bg-gray-200", children: /* @__PURE__ */ d.jsx("div", { className: "absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500", children: "or" }) })
      ] }),
      /* @__PURE__ */ d.jsxs(
        "form",
        {
          className: "flex flex-col pt-3 md:pt-8",
          onSubmit: r(s),
          children: [
            /* @__PURE__ */ d.jsx("div", { className: "flex flex-col pt-4", children: /* @__PURE__ */ d.jsx(
              Ae,
              {
                type: "email",
                id: "login-email",
                className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                placeholder: "Email",
                fullwidth: !0,
                ...n("email", { required: !0 }),
                errorMsg: (Y = a.email) == null ? void 0 : Y.message
              }
            ) }),
            /* @__PURE__ */ d.jsx("div", { className: "mb-12 flex flex-col pt-4", children: /* @__PURE__ */ d.jsx(
              Ae,
              {
                type: "password",
                id: "login-password",
                className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                placeholder: "Password",
                fullwidth: !0,
                ...n("password", { required: !0 }),
                errorMsg: (B = a.password) == null ? void 0 : B.message
              }
            ) }),
            /* @__PURE__ */ d.jsx(
              Gt,
              {
                variant: "primary",
                type: "submit",
                className: "w-full rounded-lg px-4 py-2 text-center text-base font-semibold shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2",
                fullwidth: !0,
                disabled: i,
                children: "Sign in"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ d.jsx("div", { className: "flex items-center justify-between my-6", children: /* @__PURE__ */ d.jsxs("div", { children: [
        o === "react" && /* @__PURE__ */ d.jsx(
          Ee,
          {
            as: u,
            to: h,
            className: "text-primary-600 text-sm dark:text-primary-500 font-thin hover:underline",
            children: "Forget Password?"
          }
        ),
        o === "next" && /* @__PURE__ */ d.jsx(
          Ee,
          {
            as: u,
            href: h,
            className: "text-primary-600 text-sm dark:text-primary-500 font-thin hover:underline",
            children: "Forget Password?"
          }
        )
      ] }) }),
      U && /* @__PURE__ */ d.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ d.jsxs("p", { className: "whitespace-nowrap text-gray-600", children: [
        "Don't have an account?",
        " ",
        o === "react" && /* @__PURE__ */ d.jsx(
          Ee,
          {
            as: u,
            to: m,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign Up"
          }
        ),
        o === "next" && /* @__PURE__ */ d.jsx(
          Ee,
          {
            as: u,
            href: m,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign Up"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "absolute bottom-0 z-10 px-8 text-white opacity-100", children: [
        /* @__PURE__ */ d.jsx("p", { className: "mb-8 text-3xl font-semibold leading-10", children: g }),
        /* @__PURE__ */ d.jsx("p", { className: "mb-7 text-sm opacity-70", children: O })
      ] }),
      /* @__PURE__ */ d.jsx(
        "img",
        {
          className: "-z-1 absolute top-0 h-full w-full object-cover opacity-90",
          src: P
        }
      )
    ] })
  ] });
}, ni = ge.object({
  email: ge.string().min(1, { message: "Please enter a valid email" }).email({ message: "Not a valid email" }),
  password: ge.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" })
}), Si = ({
  library: t,
  type: e,
  forgetPasswordUrl: r,
  redirectSignupUrl: s,
  previewImg: n,
  previewTitle: a,
  PreviewDescription: i,
  handleSignIn: o,
  isLoading: u,
  handleSignOn: h,
  handleSignOnError: m,
  logoUrl: g,
  varient: O = "basic",
  showSignUp: P = !0,
  showSignOn: U = !0
}) => {
  const { login: le, signInWithGoogle: Y } = ot(), {
    register: B,
    handleSubmit: S,
    formState: { errors: de }
  } = Xt({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: Qt(ni)
  }), fe = (K) => {
    le(K.email, K.password).then(() => {
      o({ email: K.email, password: K.password }), console.log("Sign In Success");
    }).catch((ce) => {
      console.log("Error: " + ce);
    });
  }, G = (K) => {
    K === "google" && Y().then((ce) => h && h(ce)).catch((ce) => m && m(ce));
  };
  if (O === "basic")
    return /* @__PURE__ */ d.jsx(
      si,
      {
        logoUrl: g,
        handleSubmitOn: G,
        handleSubmit: S,
        handleSubmitForm: fe,
        register: B,
        errors: de,
        isLoading: u,
        library: t,
        type: e,
        forgetPasswordUrl: r,
        redirectSignupUrl: s,
        PreviewDescription: i,
        previewTitle: a,
        previewImg: n,
        showSignUp: P,
        showSignOn: U
      }
    );
}, ai = ({
  logoUrl: t,
  handleSubmitOn: e,
  handleSubmit: r,
  handleSubmitForm: s,
  register: n,
  errors: a,
  isLoading: i,
  library: o,
  type: u,
  redirectSignInUrl: h,
  PreviewDescription: m,
  previewTitle: g,
  previewImg: O,
  showSignIn: P,
  showSignOn: U
}) => {
  var le, Y, B;
  return /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap w-screen h-screen", children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex w-full flex-col md:w-[40%]", children: /* @__PURE__ */ d.jsxs("div", { className: "w-[80%] ml-12 my-auto flex flex-col pt-8 md:px-6 md:pt-0", children: [
      /* @__PURE__ */ d.jsx(
        "a",
        {
          href: "#",
          className: "py-4 text-2xl font-semibold text-gray-900 dark:text-white",
          children: /* @__PURE__ */ d.jsx("img", { className: "w-auto h-10", src: t, alt: "" })
        }
      ),
      U && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx("p", { className: "text-left text-3xl font-bold", children: "Create a new account" }),
        /* @__PURE__ */ d.jsxs(
          "button",
          {
            className: "-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white",
            onClick: () => e("google"),
            children: [
              /* @__PURE__ */ d.jsx(Js, { className: "mr-2" }),
              "Sign Up with Google"
            ]
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: "relative mt-8 flex h-px place-items-center bg-gray-200", children: /* @__PURE__ */ d.jsx("div", { className: "absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500", children: "or" }) })
      ] }),
      /* @__PURE__ */ d.jsxs(
        "form",
        {
          className: "flex flex-col pt-3 md:pt-8",
          onSubmit: r(s),
          children: [
            /* @__PURE__ */ d.jsx("div", { className: "flex flex-col pt-4", children: /* @__PURE__ */ d.jsx(
              Ae,
              {
                type: "username",
                id: "login-username",
                className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                placeholder: "First and Last Name",
                fullwidth: !0,
                ...n("username", { required: !0 }),
                errorMsg: (le = a.username) == null ? void 0 : le.message
              }
            ) }),
            /* @__PURE__ */ d.jsx("div", { className: "flex flex-col pt-4", children: /* @__PURE__ */ d.jsx(
              Ae,
              {
                type: "email",
                id: "login-email",
                className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                placeholder: "Email",
                fullwidth: !0,
                ...n("email", { required: !0 }),
                errorMsg: (Y = a.email) == null ? void 0 : Y.message
              }
            ) }),
            /* @__PURE__ */ d.jsx("div", { className: "mb-12 flex flex-col pt-4", children: /* @__PURE__ */ d.jsx(
              Ae,
              {
                type: "password",
                id: "login-password",
                className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                placeholder: "Password",
                fullwidth: !0,
                ...n("password", { required: !0 }),
                errorMsg: (B = a.password) == null ? void 0 : B.message
              }
            ) }),
            /* @__PURE__ */ d.jsx(
              Gt,
              {
                variant: "primary",
                type: "submit",
                className: "w-full rounded-lg px-4 py-2 text-center text-base font-semibold shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2",
                fullwidth: !0,
                disabled: i,
                children: "Sign Up"
              }
            )
          ]
        }
      ),
      P && /* @__PURE__ */ d.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ d.jsxs("p", { className: "whitespace-nowrap text-gray-600", children: [
        "Already have an account?",
        " ",
        o === "react" && /* @__PURE__ */ d.jsx(
          Ee,
          {
            as: u,
            to: h,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign In"
          }
        ),
        o === "next" && /* @__PURE__ */ d.jsx(
          Ee,
          {
            as: u,
            href: h,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign In"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "absolute bottom-0 z-10 px-8 text-white opacity-100", children: [
        /* @__PURE__ */ d.jsx("p", { className: "mb-8 text-3xl font-semibold leading-10", children: m }),
        /* @__PURE__ */ d.jsx("p", { className: "mb-7 text-sm opacity-70", children: g })
      ] }),
      /* @__PURE__ */ d.jsx(
        "img",
        {
          className: "-z-1 absolute top-0 h-full w-full object-cover opacity-90",
          src: O
        }
      )
    ] })
  ] });
}, ii = ge.object({
  username: ge.string().min(1, { message: "Please enter a valid Username" }).max(20, { message: "Username must be less than 20 characters" }),
  email: ge.string().min(1, { message: "Please enter a valid email" }).email({ message: "Not a valid email" }),
  password: ge.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" })
}), Ci = ({
  library: t,
  type: e,
  redirectSignInUrl: r,
  previewImg: s,
  previewTitle: n,
  PreviewDescription: a,
  handleSignUp: i,
  isLoading: o,
  handleSignOn: u,
  handleSignOnError: h,
  logoUrl: m,
  varient: g = "basic",
  showSignIn: O = !0,
  continueUrl: P,
  showSignOn: U
}) => {
  const { signUp: le, signInWithGoogle: Y } = ot(), {
    register: B,
    handleSubmit: S,
    formState: { errors: de }
  } = Xt({
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
    resolver: Qt(ii)
  }), fe = (K) => {
    le(K.email, K.password, P).then(() => {
      i({
        username: K.username,
        email: K.email,
        password: K.password
      }), console.log("Signup successfully");
    }).catch((ce) => {
      console.log(ce, "Error signing up");
    });
  }, G = (K) => {
    K === "google" && Y().then((ce) => u && u(ce)).catch((ce) => h && h(ce));
  };
  if (g === "basic")
    return /* @__PURE__ */ d.jsx(
      ai,
      {
        logoUrl: m,
        handleSubmitOn: G,
        handleSubmit: S,
        handleSubmitForm: fe,
        register: B,
        errors: de,
        isLoading: o,
        library: t,
        type: e,
        redirectSignInUrl: r,
        PreviewDescription: a,
        previewTitle: n,
        previewImg: s,
        showSignIn: O,
        showSignOn: U
      }
    );
}, oi = ({
  handleSubmit: t,
  handleSubmitForm: e,
  register: r,
  errors: s,
  isLoading: n,
  library: a,
  type: i,
  redirectSignInUrl: o,
  PreviewDescription: u,
  previewTitle: h,
  previewImg: m,
  showSignIn: g
}) => {
  var O;
  return /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap w-screen h-screen", children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex w-full flex-col md:w-[40%]", children: /* @__PURE__ */ d.jsx("div", { className: "h-full flex items-center justify-center", children: /* @__PURE__ */ d.jsxs("div", { className: "mx-auto max-w-md", children: [
      /* @__PURE__ */ d.jsx("div", { className: "rounded-xl bg-white", children: /* @__PURE__ */ d.jsxs("div", { className: "p-4 sm:p-7", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500", children: /* @__PURE__ */ d.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2",
              children: /* @__PURE__ */ d.jsx(
                "path",
                {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx("h1", { className: "block text-2xl font-bold text-gray-800", children: "Forgot password?" }),
          /* @__PURE__ */ d.jsx("p", { className: "mt-2 text-sm text-gray-600", children: "Don't worry we'll send you reset instructions." })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "mt-6", children: /* @__PURE__ */ d.jsx(
          "form",
          {
            className: "flex flex-col pt-3 md:pt-8",
            onSubmit: t(e),
            children: /* @__PURE__ */ d.jsxs("div", { className: "grid gap-y-4", children: [
              /* @__PURE__ */ d.jsx("div", { className: "flex flex-col pt-4", children: /* @__PURE__ */ d.jsx(
                Ae,
                {
                  type: "email",
                  id: "login-email",
                  className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                  placeholder: "Email",
                  fullwidth: !0,
                  ...r("email", { required: !0 }),
                  errorMsg: (O = s.email) == null ? void 0 : O.message
                }
              ) }),
              /* @__PURE__ */ d.jsx(
                Gt,
                {
                  variant: "primary",
                  type: "submit",
                  fullwidth: !0,
                  className: "inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2",
                  disabled: n,
                  children: "Forget password?"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      g && /* @__PURE__ */ d.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ d.jsxs("p", { className: "whitespace-nowrap text-gray-600", children: [
        "Remember your password?",
        " ",
        a === "react" && /* @__PURE__ */ d.jsx(
          Ee,
          {
            as: i,
            to: o,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign in here"
          }
        ),
        a === "next" && /* @__PURE__ */ d.jsx(
          Ee,
          {
            as: i,
            href: o,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign in here"
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "absolute bottom-0 z-10 px-8 text-white opacity-100", children: [
        /* @__PURE__ */ d.jsx("p", { className: "mb-8 text-3xl font-semibold leading-10", children: u }),
        /* @__PURE__ */ d.jsx("p", { className: "mb-7 text-sm opacity-70", children: h })
      ] }),
      /* @__PURE__ */ d.jsx(
        "img",
        {
          className: "-z-1 absolute top-0 h-full w-full object-cover opacity-90",
          src: m
        }
      )
    ] })
  ] });
}, Xr = (t) => typeof t == "number" && !isNaN(t), Pt = (t) => typeof t == "string", Ks = (t) => typeof t == "function", li = (t) => gn(t) || Pt(t) || Ks(t) || Xr(t), Oe = /* @__PURE__ */ new Map();
let qr = [];
const js = /* @__PURE__ */ new Set(), Xs = () => Oe.size > 0;
function ci(t, e) {
  var r;
  if (e) return !((r = Oe.get(e)) == null || !r.isToastActive(t));
  let s = !1;
  return Oe.forEach((n) => {
    n.isToastActive(t) && (s = !0);
  }), s;
}
function ui(t, e) {
  li(t) && (Xs() || qr.push({ content: t, options: e }), Oe.forEach((r) => {
    r.buildToast(t, e);
  }));
}
function Es(t, e) {
  Oe.forEach((r) => {
    e != null && e != null && e.containerId ? (e == null ? void 0 : e.containerId) === r.id && r.toggle(t, e == null ? void 0 : e.id) : r.toggle(t, e == null ? void 0 : e.id);
  });
}
let di = 1;
const Qs = () => "" + di++;
function fi(t) {
  return t && (Pt(t.toastId) || Xr(t.toastId)) ? t.toastId : Qs();
}
function It(t, e) {
  return ui(t, e), e.toastId;
}
function Tr(t, e) {
  return { ...e, type: e && e.type || t, toastId: fi(e) };
}
function ur(t) {
  return (e, r) => It(e, Tr(t, r));
}
function J(t, e) {
  return It(t, Tr("default", e));
}
J.loading = (t, e) => It(t, Tr("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...e })), J.promise = function(t, e, r) {
  let s, { pending: n, error: a, success: i } = e;
  n && (s = Pt(n) ? J.loading(n, r) : J.loading(n.render, { ...r, ...n }));
  const o = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, u = (m, g, O) => {
    if (g == null) return void J.dismiss(s);
    const P = { type: m, ...o, ...r, data: O }, U = Pt(g) ? { render: g } : g;
    return s ? J.update(s, { ...P, ...U }) : J(U.render, { ...P, ...U }), O;
  }, h = Ks(t) ? t() : t;
  return h.then((m) => u("success", i, m)).catch((m) => u("error", a, m)), h;
}, J.success = ur("success"), J.info = ur("info"), J.error = ur("error"), J.warning = ur("warning"), J.warn = J.warning, J.dark = (t, e) => It(t, Tr("default", { theme: "dark", ...e })), J.dismiss = function(t) {
  (function(e) {
    var r;
    if (Xs()) {
      if (e == null || Pt(r = e) || Xr(r)) Oe.forEach((s) => {
        s.removeToast(e);
      });
      else if (e && ("containerId" in e || "id" in e)) {
        const s = Oe.get(e.containerId);
        s ? s.removeToast(e.id) : Oe.forEach((n) => {
          n.removeToast(e.id);
        });
      }
    } else qr = qr.filter((s) => e != null && s.options.toastId !== e);
  })(t);
}, J.clearWaitingQueue = function(t) {
  t === void 0 && (t = {}), Oe.forEach((e) => {
    !e.props.limit || t.containerId && e.id !== t.containerId || e.clearQueue();
  });
}, J.isActive = ci, J.update = function(t, e) {
  e === void 0 && (e = {});
  const r = ((s, n) => {
    var a;
    let { containerId: i } = n;
    return (a = Oe.get(i || 1)) == null ? void 0 : a.toasts.get(s);
  })(t, e);
  if (r) {
    const { props: s, content: n } = r, a = { delay: 100, ...s, ...e, toastId: e.toastId || t, updateId: Qs() };
    a.toastId !== t && (a.staleId = t);
    const i = a.render || n;
    delete a.render, It(i, a);
  }
}, J.done = (t) => {
  J.update(t, { progress: 1 });
}, J.onChange = function(t) {
  return js.add(t), () => {
    js.delete(t);
  };
}, J.play = (t) => Es(!0, t), J.pause = (t) => Es(!1, t);
const hi = (t) => J.info(t, {
  position: "top-right",
  autoClose: 5e3,
  hideProgressBar: !1,
  closeOnClick: !0,
  pauseOnHover: !0,
  draggable: !0,
  progress: void 0,
  theme: "light"
}), mi = (t) => J.error(t, {
  position: "top-right",
  autoClose: 5e3,
  hideProgressBar: !1,
  closeOnClick: !0,
  pauseOnHover: !0,
  draggable: !0,
  progress: void 0,
  theme: "light"
}), pi = ge.object({
  email: ge.string().min(1, { message: "Please enter a valid email" }).email({ message: "Not a valid email" })
}), Oi = ({
  library: t,
  type: e,
  redirectSignInUrl: r,
  previewImg: s,
  previewTitle: n,
  PreviewDescription: a,
  isLoading: i,
  varient: o = "basic",
  showSignIn: u = !0,
  continueUrl: h,
  handleForgetPassword: m
}) => {
  const { forgotPassword: g } = ot(), {
    register: O,
    handleSubmit: P,
    formState: { errors: U }
  } = Xt({
    defaultValues: {
      email: ""
    },
    resolver: Qt(pi)
  }), le = (Y) => {
    g(Y.email, h).then(() => {
      console.log("Email sent successfully"), hi("Email sent successfully"), m && m();
    }).catch((B) => {
      console.log(B, "Error sending email"), mi(B.message);
    });
  };
  if (o === "basic")
    return /* @__PURE__ */ d.jsx(
      oi,
      {
        handleSubmit: P,
        handleSubmitForm: le,
        register: O,
        errors: U,
        isLoading: i,
        library: t,
        type: e,
        redirectSignInUrl: r,
        PreviewDescription: a,
        previewTitle: n,
        previewImg: s,
        showSignIn: u
      }
    );
}, gi = ({
  handleSubmit: t,
  handleSubmitForm: e,
  register: r,
  errors: s,
  isLoading: n,
  library: a,
  type: i,
  redirectSignInUrl: o,
  PreviewDescription: u,
  previewTitle: h,
  previewImg: m,
  showSignIn: g
}) => {
  var O, P;
  return /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap w-screen h-screen", children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex w-full flex-col md:w-[40%]", children: /* @__PURE__ */ d.jsx("div", { className: "h-full flex items-center justify-center z-10", children: /* @__PURE__ */ d.jsxs("div", { className: "mx-auto max-w-md w-[80%]", children: [
      /* @__PURE__ */ d.jsx("div", { className: "rounded-xl bg-white", children: /* @__PURE__ */ d.jsxs("div", { className: "p-4 sm:p-7", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ d.jsx("div", { className: "mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500", children: /* @__PURE__ */ d.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2",
              children: /* @__PURE__ */ d.jsx(
                "path",
                {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx("h1", { className: "block text-2xl font-bold text-gray-800", children: "Reset password?" })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "mt-6", children: /* @__PURE__ */ d.jsx(
          "form",
          {
            className: "flex flex-col pt-3 md:pt-8",
            onSubmit: t(e),
            children: /* @__PURE__ */ d.jsxs("div", { className: "grid gap-y-4", children: [
              /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col pt-4", children: [
                /* @__PURE__ */ d.jsx(
                  Ae,
                  {
                    type: "newpassword",
                    id: "login-newpassword",
                    className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                    placeholder: "New Password",
                    fullwidth: !0,
                    ...r("newpassword", { required: !0 }),
                    errorMsg: (O = s.newpassword) == null ? void 0 : O.message
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  Ae,
                  {
                    type: "confirmpassword",
                    id: "login-confirmpassword",
                    className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                    placeholder: "Confirm Password",
                    fullwidth: !0,
                    ...r("confirmpassword", { required: !0 }),
                    errorMsg: (P = s.confirmpassword) == null ? void 0 : P.message
                  }
                )
              ] }),
              /* @__PURE__ */ d.jsx(
                Gt,
                {
                  variant: "primary",
                  type: "submit",
                  fullwidth: !0,
                  className: "inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2",
                  disabled: n,
                  children: "Reset password"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      g && /* @__PURE__ */ d.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ d.jsxs("p", { className: "whitespace-nowrap text-gray-600", children: [
        "Remember your password?",
        " ",
        a === "react" && /* @__PURE__ */ d.jsx(
          Ee,
          {
            as: i,
            to: o,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign in here"
          }
        ),
        a === "next" && /* @__PURE__ */ d.jsx(
          Ee,
          {
            as: i,
            href: o,
            className: "underline-offset-4 font-semibold text-primary underline",
            children: "Sign in here"
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "absolute bottom-0 z-10 px-8 text-white opacity-100", children: [
        /* @__PURE__ */ d.jsx("p", { className: "mb-8 text-3xl font-semibold leading-10", children: u }),
        /* @__PURE__ */ d.jsx("p", { className: "mb-7 text-sm opacity-70", children: h })
      ] }),
      /* @__PURE__ */ d.jsx(
        "img",
        {
          className: "-z-1 absolute top-0 h-full w-full object-cover opacity-90",
          src: m
        }
      )
    ] })
  ] });
}, yi = ge.object({
  newpassword: ge.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" }),
  confirmpassword: ge.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" })
}), vi = ({
  library: t,
  type: e,
  redirectSignInUrl: r,
  previewImg: s,
  previewTitle: n,
  PreviewDescription: a,
  handleResetPassword: i,
  isLoading: o,
  varient: u = "basic",
  showSignIn: h = !0,
  oobCode: m
}) => {
  const { resetPassword: g } = ot(), {
    register: O,
    handleSubmit: P,
    formState: { errors: U }
  } = Xt({
    defaultValues: {
      newpassword: "",
      confirmpassword: ""
    },
    resolver: Qt(yi)
  }), le = (Y) => {
    g(m, Y.confirmpassword).then(() => {
      i({
        password: Y.confirmpassword
      });
    }).catch((B) => {
      console.log(B, "Error resetting password");
    });
  };
  if (u === "basic")
    return /* @__PURE__ */ d.jsx(
      gi,
      {
        handleSubmit: P,
        handleSubmitForm: le,
        register: O,
        errors: U,
        isLoading: o,
        library: t,
        type: e,
        redirectSignInUrl: r,
        PreviewDescription: a,
        previewTitle: n,
        previewImg: s,
        showSignIn: h
      }
    );
}, xi = ({
  handleSubmit: t,
  handleSubmitForm: e,
  register: r,
  errors: s,
  isLoading: n,
  library: a,
  type: i,
  redirectSignInUrl: o,
  showSignIn: u
}) => {
  var h, m;
  return /* @__PURE__ */ d.jsx("div", { className: "flex flex-wrap w-full h-full", children: /* @__PURE__ */ d.jsx("div", { className: "flex w-full flex-col", children: /* @__PURE__ */ d.jsx("div", { className: "h-full flex items-center justify-center z-10", children: /* @__PURE__ */ d.jsxs("div", { className: "mx-auto", children: [
    /* @__PURE__ */ d.jsx("div", { className: "rounded-xl bg-white", children: /* @__PURE__ */ d.jsxs("div", { className: "p-4 sm:p-7", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ d.jsx("div", { className: "mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500", children: /* @__PURE__ */ d.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2",
            children: /* @__PURE__ */ d.jsx(
              "path",
              {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              }
            )
          }
        ) }),
        /* @__PURE__ */ d.jsx("h1", { className: "block text-2xl font-bold text-gray-800", children: "Reset password?" })
      ] }),
      /* @__PURE__ */ d.jsx("div", { className: "mt-6", children: /* @__PURE__ */ d.jsx(
        "form",
        {
          className: "flex flex-col pt-3 md:pt-8",
          onSubmit: t(e),
          children: /* @__PURE__ */ d.jsxs("div", { className: "grid gap-y-4", children: [
            /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col pt-4", children: [
              /* @__PURE__ */ d.jsx(
                Ae,
                {
                  type: "newpassword",
                  id: "login-newpassword",
                  className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                  placeholder: "New Password",
                  fullwidth: !0,
                  ...r("newpassword", { required: !0 }),
                  errorMsg: (h = s.newpassword) == null ? void 0 : h.message
                }
              ),
              /* @__PURE__ */ d.jsx(
                Ae,
                {
                  type: "confirmpassword",
                  id: "login-confirmpassword",
                  className: "w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none",
                  placeholder: "Confirm Password",
                  fullwidth: !0,
                  ...r("confirmpassword", { required: !0 }),
                  errorMsg: (m = s.confirmpassword) == null ? void 0 : m.message
                }
              )
            ] }),
            /* @__PURE__ */ d.jsx(
              Gt,
              {
                variant: "primary",
                type: "submit",
                fullwidth: !0,
                className: "inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2",
                disabled: n,
                children: "Reset password"
              }
            )
          ] })
        }
      ) })
    ] }) }),
    u && /* @__PURE__ */ d.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ d.jsxs("p", { className: "whitespace-nowrap text-gray-600", children: [
      "Remember your password?",
      " ",
      a === "react" && /* @__PURE__ */ d.jsx(
        Ee,
        {
          as: i,
          to: o,
          className: "underline-offset-4 font-semibold text-primary underline",
          children: "Sign in here"
        }
      ),
      a === "next" && /* @__PURE__ */ d.jsx(
        Ee,
        {
          as: i,
          href: o,
          className: "underline-offset-4 font-semibold text-primary underline",
          children: "Sign in here"
        }
      )
    ] }) })
  ] }) }) }) });
}, _i = ge.object({
  newpassword: ge.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" }),
  confirmpassword: ge.string().min(1, { message: "Please enter a valid password" }).max(20, { message: "Password must be less than 20 characters" })
}), Ri = ({
  library: t,
  type: e,
  redirectSignInUrl: r,
  handleChangePassword: s,
  isLoading: n,
  varient: a = "basic",
  showSignIn: i = !0
}) => {
  const { changePassword: o } = ot(), {
    register: u,
    handleSubmit: h,
    formState: { errors: m }
  } = Xt({
    defaultValues: {
      newpassword: "",
      confirmpassword: ""
    },
    resolver: Qt(_i)
  }), g = (O) => {
    o(O.confirmpassword).then(() => {
      s({
        password: O.confirmpassword
      }), console.log("Password reset successfully");
    }).catch((P) => {
      console.log(P, "Error resetting password");
    });
  };
  if (a === "basic")
    return /* @__PURE__ */ d.jsx(
      xi,
      {
        handleSubmit: h,
        handleSubmitForm: g,
        register: u,
        errors: m,
        isLoading: n,
        library: t,
        type: e,
        redirectSignInUrl: r,
        showSignIn: i
      }
    );
}, bi = () => /* @__PURE__ */ d.jsx("div", { children: "DfxRecoverEmail" }), wi = ({
  oobCode: t,
  handleEmailVerified: e,
  handleEmailVerificationError: r
}) => {
  const { handleVerifyEmail: s } = ot();
  return yn(() => {
    s(t).then(() => {
      e && e();
    }).catch((n) => {
      r && r(n);
    });
  }, []), /* @__PURE__ */ d.jsx(d.Fragment, {});
}, Ai = ({
  mode: t,
  library: e,
  type: r,
  redirectSignInUrl: s,
  previewImg: n,
  previewTitle: a,
  PreviewDescription: i,
  handleResetPassword: o,
  isLoading: u,
  varient: h = "basic",
  showSignIn: m = !0,
  oobCode: g,
  handleEmailVerified: O,
  handleEmailVerificationError: P
}) => {
  if (t === "resetPassword")
    return /* @__PURE__ */ d.jsx(
      vi,
      {
        library: e,
        type: r,
        redirectSignInUrl: s,
        previewImg: n,
        previewTitle: a,
        PreviewDescription: i,
        handleResetPassword: o,
        oobCode: g,
        isLoading: u,
        varient: h,
        showSignIn: m
      }
    );
  if (t === "recoverEmail")
    return /* @__PURE__ */ d.jsx(bi, {});
  if (t === "verifyEmail")
    return /* @__PURE__ */ d.jsx(
      wi,
      {
        oobCode: g,
        handleEmailVerified: O,
        handleEmailVerificationError: P
      }
    );
};
async function Pi(...t) {
  const { createFirebaseAdapter: e } = await import("./firebase-hCwD27LG.js");
  return e(...t);
}
export {
  nt as AuthError,
  Ti as AuthStatus,
  Ai as DfxAuthEmail,
  Ei as DfxAuthProvider,
  Ri as DfxChangePassword,
  Oi as DfxForgetPassword,
  vi as DfxResetPassword,
  Si as DfxSignIn,
  Ci as DfxSignUp,
  Ni as createAuthAdapter,
  En as createEcomJwtAdapter,
  Ts as createMockAdapter,
  Pi as loadFirebaseAdapter,
  ot as useAuth
};
