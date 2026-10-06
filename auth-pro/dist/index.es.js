import Te, { useState as O } from "react";
var ee = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function dr() {
  if (Ce) return M;
  Ce = 1;
  var x = Te, g = Symbol.for("react.element"), E = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, R = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(s, d, P) {
    var b, C = {}, T = null, L = null;
    P !== void 0 && (T = "" + P), d.key !== void 0 && (T = "" + d.key), d.ref !== void 0 && (L = d.ref);
    for (b in d) m.call(d, b) && !_.hasOwnProperty(b) && (C[b] = d[b]);
    if (s && s.defaultProps) for (b in d = s.defaultProps, d) C[b] === void 0 && (C[b] = d[b]);
    return { $$typeof: g, type: s, key: T, ref: L, props: C, _owner: R.current };
  }
  return M.Fragment = E, M.jsx = j, M.jsxs = j, M;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var x = Te, g = Symbol.for("react.element"), E = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), re = Symbol.iterator, ke = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var D = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = D.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Ae = !1, Ne = !1, Fe = !1, Ie = !1, te;
    te = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === _ || Ie || e === R || e === P || e === b || Fe || e === L || De || Ae || Ne || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === C || e.$$typeof === j || e.$$typeof === s || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case E:
          return "Portal";
        case _:
          return "Profiler";
        case R:
          return "StrictMode";
        case P:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var r = e;
            return ne(r) + ".Consumer";
          case j:
            var t = e;
            return ne(t._context) + ".Provider";
          case d:
            return Me(e, e.render, "ForwardRef");
          case C:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case T: {
            var l = e, u = l._payload, i = l._init;
            try {
              return S(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, F = 0, ae, ie, oe, se, le, ue, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function We() {
      {
        if (F === 0) {
          ae = console.log, ie = console.info, oe = console.warn, se = console.error, le = console.group, ue = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Le() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ae
            }),
            info: k({}, e, {
              value: ie
            }),
            warn: k({}, e, {
              value: oe
            }),
            error: k({}, e, {
              value: se
            }),
            group: k({}, e, {
              value: le
            }),
            groupCollapsed: k({}, e, {
              value: ue
            }),
            groupEnd: k({}, e, {
              value: ce
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = D.ReactCurrentDispatcher, q;
    function Y(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var K = !1, V;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ye();
    }
    function de(e, r) {
      if (!e || K)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, We();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (h) {
              n = h;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), p = n.stack.split(`
`), c = a.length - 1, f = p.length - 1; c >= 1 && f >= 0 && a[c] !== p[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== p[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== p[f]) {
                    var y = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, y), y;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = u, Le(), Error.prepareStackTrace = l;
      }
      var N = e ? e.displayName || e.name : "", w = N ? Y(N) : "";
      return typeof e == "function" && V.set(e, w), w;
    }
    function Ve(e, r, t) {
      return de(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ue(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case P:
          return Y("Suspense");
        case b:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ve(e.render);
          case C:
            return U(e.type, r, t);
          case T: {
            var n = e, l = n._payload, u = n._init;
            try {
              return U(u(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, pe = D.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, l) {
      {
        var u = Function.call.bind(I);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (B(l), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), B(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, B(l), v("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Je = Array.isArray;
    function G(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function he(e) {
      if (Ke(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), me(e);
    }
    var $ = D.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, be, z;
    z = {};
    function ze(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = S($.current.type);
        z[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S($.current.type), e.ref), z[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ge || (ge = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, l, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, l) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (he(t), a = "" + t), Xe(r) && (he(r.key), a = "" + r.key), ze(r) && (p = r.ref, He(r, l));
        for (u in r)
          I.call(r, u) && !Ge.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            i[u] === void 0 && (i[u] = c[u]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, f), p && Qe(i, f);
        }
        return er(e, a, p, l, n, $.current, i);
      }
    }
    var X = D.ReactCurrentOwner, ye = D.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function xe() {
      {
        if (X.current) {
          var e = S(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Ee = {};
    function nr(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + S(e._owner.type) + "."), A(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Re(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = we(e);
          if (typeof l == "function" && l !== e.entries)
            for (var u = l.call(e), i; !(i = u.next()).done; )
              Z(i.value) && Re(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var l = S(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var je = {};
    function Se(e, r, t, n, l, u) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr();
          p ? a += p : a += xe();
          var c;
          e === null ? c = "null" : G(e) ? c = "array" : e !== void 0 && e.$$typeof === g ? (c = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = rr(e, r, t, l, u);
        if (f == null)
          return f;
        if (i) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (G(y)) {
                for (var N = 0; N < y.length; N++)
                  _e(y[N], e);
                Object.freeze && Object.freeze(y);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(y, e);
        }
        if (I.call(r, "key")) {
          var w = S(e), h = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Q = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[w + Q]) {
            var cr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, w, cr, w), je[w + Q] = !0;
          }
        }
        return e === m ? ir(f) : ar(f), f;
      }
    }
    function or(e, r, t) {
      return Se(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var lr = sr, ur = or;
    W.Fragment = m, W.jsx = lr, W.jsxs = ur;
  }()), W;
}
process.env.NODE_ENV === "production" ? ee.exports = dr() : ee.exports = vr();
var o = ee.exports;
const pr = ["Okta", "Azure AD", "Google Workspace"], mr = ["SAML", "OIDC"];
function gr({ defaultEmail: x = "ada@example.com" }) {
  const [g, E] = O("Okta"), [m, R] = O("SAML"), [_, j] = O(null);
  return /* @__PURE__ */ o.jsxs("div", { className: "max-w-md space-y-4 p-6 text-sm", "data-testid": "pro-sso", children: [
    /* @__PURE__ */ o.jsx("h2", { className: "text-xl font-semibold", children: "SSO / SAML" }),
    /* @__PURE__ */ o.jsx("p", { className: "text-slate-600", children: "Mock IdP only. Do not point this at a production tenant." }),
    /* @__PURE__ */ o.jsxs("label", { className: "block", children: [
      "Provider",
      /* @__PURE__ */ o.jsx(
        "select",
        {
          className: "mt-1 w-full rounded border px-2 py-1",
          "data-testid": "sso-provider",
          value: g,
          onChange: (s) => E(s.target.value),
          children: pr.map((s) => /* @__PURE__ */ o.jsx("option", { children: s }, s))
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("label", { className: "block", children: [
      "Protocol",
      /* @__PURE__ */ o.jsx(
        "select",
        {
          className: "mt-1 w-full rounded border px-2 py-1",
          "data-testid": "sso-protocol",
          value: m,
          onChange: (s) => R(s.target.value),
          children: mr.map((s) => /* @__PURE__ */ o.jsx("option", { children: s }, s))
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        type: "button",
        className: "rounded bg-slate-900 px-3 py-2 text-white",
        "data-testid": "sso-continue",
        onClick: () => j(`${m}:${g}:${x}`),
        children: [
          "Continue with mock ",
          m
        ]
      }
    ),
    _ ? /* @__PURE__ */ o.jsxs("p", { "data-testid": "sso-session", className: "rounded bg-slate-100 p-2", children: [
      "Mock assertion for ",
      _
    ] }) : /* @__PURE__ */ o.jsx("p", { "data-testid": "sso-session", children: "signed-out" })
  ] });
}
function br() {
  const [x, g] = O("ada@example.com"), [E, m] = O(!1), [R, _] = O(null);
  return /* @__PURE__ */ o.jsxs("div", { className: "max-w-md space-y-4 p-6 text-sm", "data-testid": "pro-magic", children: [
    /* @__PURE__ */ o.jsx("h2", { className: "text-xl font-semibold", children: "Magic link" }),
    /* @__PURE__ */ o.jsx("p", { className: "text-slate-600", children: "Mock inbox. No SES/Twilio and no production Firebase." }),
    /* @__PURE__ */ o.jsxs("label", { className: "block", children: [
      "Email",
      /* @__PURE__ */ o.jsx(
        "input",
        {
          className: "mt-1 w-full rounded border px-2 py-1",
          "data-testid": "magic-email",
          type: "email",
          value: x,
          onChange: (j) => g(j.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "rounded bg-slate-900 px-3 py-2 text-white",
        "data-testid": "magic-send",
        onClick: () => m(!0),
        children: "Send mock magic link"
      }
    ),
    E ? /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "rounded border px-3 py-2",
        "data-testid": "magic-open",
        onClick: () => _(x),
        children: "Open mock magic link"
      }
    ) : null,
    /* @__PURE__ */ o.jsx("p", { "data-testid": "magic-session", children: R || (E ? "link-sent" : "signed-out") })
  ] });
}
function yr() {
  const [x, g] = O(""), [E, m] = O([
    { email: "ada@example.com", status: "accepted" }
  ]), [R, _] = O("");
  function j() {
    const s = x.trim().toLowerCase();
    !s || E.some((d) => d.email === s) || (m((d) => [...d, { email: s, status: "pending" }]), g(""));
  }
  return /* @__PURE__ */ o.jsxs("div", { className: "max-w-lg space-y-4 p-6 text-sm", "data-testid": "pro-invites", children: [
    /* @__PURE__ */ o.jsx("h2", { className: "text-xl font-semibold", children: "Org invites" }),
    /* @__PURE__ */ o.jsx("p", { className: "text-slate-600", children: "Mock roster. No SCIM and no production IdP." }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          className: "flex-1 rounded border px-2 py-1",
          "data-testid": "invite-email",
          type: "email",
          placeholder: "teammate@example.com",
          value: x,
          onChange: (s) => g(s.target.value)
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "rounded bg-slate-900 px-3 py-2 text-white",
          "data-testid": "invite-send",
          onClick: j,
          children: "Invite"
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("ul", { "data-testid": "invite-list", className: "divide-y rounded border", children: E.map((s) => /* @__PURE__ */ o.jsxs("li", { className: "flex items-center justify-between px-3 py-2", children: [
      /* @__PURE__ */ o.jsxs("span", { children: [
        s.email,
        " (",
        s.status,
        ")"
      ] }),
      s.status === "pending" ? /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "text-blue-700 underline",
          "data-testid": `invite-copy-${s.email}`,
          onClick: () => _(`https://localhost:6009/invite/${s.email}`),
          children: "Copy mock link"
        }
      ) : null
    ] }, s.email)) }),
    /* @__PURE__ */ o.jsx("p", { "data-testid": "invite-copied", children: R || "none" })
  ] });
}
export {
  br as DfxMagicLink,
  yr as DfxOrgInvites,
  gr as DfxSsoSaml
};
