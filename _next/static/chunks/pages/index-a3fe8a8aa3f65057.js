(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405, 4525],
  {
    48312: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(268);
        },
      ]);
    },
    89230: function (e, t, i) {
      "use strict";
      var o = i(85893),
        r = i(51232),
        a = i(34525),
        s = i(43120),
        d = i(48583),
        c = i(67294),
        l = i(51192),
        f = i(39625),
        p = i(69077),
        h = i(72033),
        u = i(62331);
      let x = l.ZP.a.withConfig({ componentId: "sc-fadb2cbd-0" })`
  color: #fff;
  margin-right: 20px;
  margin-left: 40px;
`,
        m = l.ZP.div.withConfig({ componentId: "sc-fadb2cbd-1" })`
  display: flex;
`,
        g = l.ZP.span.withConfig({ componentId: "sc-fadb2cbd-2" })`
  color: #fff;
  height: 38px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;

  @media ${s.U.mobileM} {
    padding: 0 14px;
  }
`;
      t.Z = function () {
        let [e, t] = (0, c.useState)(!0),
          [i, s] = (0, c.useState)(0n),
          [l, b] = (0, c.useState)(0n),
          [w, v] = (0, c.useState)(0n),
          { address: y } = (0, p.mA)(),
          [j, E] = (0, d.KO)(a.mevETHBalance),
          [S, C] = (0, d.KO)(a.depositedETHBalance),
          [T, k] = (0, c.useState)(0xe172a7bc98947f5n),
          [O, I] = (0, c.useState)(0n),
          { data: M, error: P } = (0, p.do)({
            address: r.W7,
            abi: h.yS,
            functionName: "balanceOf",
            args: [y || "0x0"],
            enabled: !!y,
            watch: !0,
          }),
          {
            data: $,
            error: Z,
            isSuccess: _,
          } = (0, p.do)({
            address: r.W7,
            abi: h.yS,
            functionName: "convertToAssets",
            args: [M || 0xde0b6b3a7640000n],
            enabled: !0,
            watch: !0,
          }),
          { data: F } = (0, p.do)({
            address: "0xf518f2EbeA5df8Ca2B5E9C7996a2A25e8010014b",
            abi: [
              {
                inputs: [],
                name: "getRate",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
            ],
            functionName: "getRate",
            enabled: !0,
            watch: !1,
          }),
          z = () => {
            t(window.matchMedia("(max-width: 768px)").matches);
          };
        return (
          (0, c.useEffect)(() => {
            t(window.matchMedia("(max-width: 768px)").matches),
              window.addEventListener("resize", z, !1);
          }, []),
          (0, c.useEffect)(() => {
            if ($) {
              console.log("userMevETHBalance 111", M),
                console.log("userConvertToAssets 111", $);
              let e = $ - 0xde0b6b3a7640000n;
              M && (e = $ - M),
                s(e),
                console.log("assets", $),
                b(M || 0xde0b6b3a7640000n),
                E(
                  M
                    ? parseFloat((0, f.d)(M))
                        .toFixed(3)
                        .toString()
                    : "0"
                ),
                C(
                  M
                    ? parseFloat((0, f.d)($))
                        .toFixed(3)
                        .toString()
                    : "0"
                ),
                v($);
            }
            F && k(F), w && I(w);
          }, [M, $, F, w]),
          console.log("rewardsiiii", i, F, w),
          (0, o.jsxs)(m, {
            children: [
              e
                ? null
                : (0, o.jsxs)(g, {
                    children: [
                      (0, o.jsx)(x, {
                        target: "_blank",
                        href: "https://x.com/ethanmev_fi",
                        children: "\uD835\uDD4F",
                      }),
                      (0, o.jsx)(x, {
                        target: "_blank",
                        href: "https://t.me/ethanmev_fi",
                        children: "Telegram",
                      }),
                    ],
                  }),
              (0, o.jsx)(u.Z, {
                style: { marginTop: 3 },
                href: "/stake",
                children: "Start staking ETH",
              }),
            ],
          })
        );
      };
    },
    34525: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          depositedETHBalance: function () {
            return b;
          },
          mevETHBalance: function () {
            return g;
          },
        });
      var o = i(85893),
        r = i(51232),
        a = i(43120),
        s = i(51292),
        d = i(15103),
        c = i(48583),
        l = i(41664),
        f = i.n(l),
        p = i(67294),
        h = i(51192),
        u = i(39625),
        x = i(69077),
        m = i(72033);
      let g = (0, d.cn)("0"),
        b = (0, d.cn)("0");
      function w(e) {
        let {
          href: t,
          text: i,
          target: r,
          onClick: a,
          color: s,
          menu: d,
          alt: c,
          newItem: l,
        } = e;
        return a
          ? (0, o.jsx)(j, { onClick: a, children: i })
          : d
          ? (0, o.jsx)(f(), {
              target: r,
              href: t,
              title: c,
              children: (0, o.jsx)(C, { color: s, children: i }),
            })
          : l
          ? (0, o.jsx)(f(), {
              target: r,
              href: t,
              color: s,
              title: c,
              children: (0, o.jsxs)("span", {
                children: [
                  (0, o.jsx)("span", { style: { color: s }, children: i }),
                  (0, o.jsx)(v, { children: "NEW" }),
                ],
              }),
            })
          : (0, o.jsx)(f(), {
              target: r,
              href: t,
              color: s,
              title: c,
              children: (0, o.jsx)(j, { color: s, children: i }),
            });
      }
      let v = h.ZP.span.withConfig({ componentId: "sc-27d96e2-0" })`
  background: #185c64;
  margin-left: 5px;
  padding: 2px 4px;
  border-radius: 5px;
  border: 1px solid #1c6970;
  color: #42d8e2;
  font-weight: 600;
`,
        y = h.ZP.div.withConfig({ componentId: "sc-27d96e2-1" })`
  position: fixed;

  background: #13494f;
  z-index: 1000;
  top: 18px;
  left: 50%;

  transform: translateX(-50%);
  border: 1px solid #254e53;
  height: 44px;
  border-radius: 64px;
  padding: 0 24px;
  gap: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${a.U.mobileM} {
    top: unset;
    bottom: 24px;

    gap: 20px;
    border-radius: 12px;
  }
`,
        j = h.ZP.div.withConfig({ componentId: "sc-27d96e2-2" })`
  size: 14px;
  cursor: pointer;
  @media ${a.U.mobileM} {
    white-space: nowrap;
  }
  &:hover {
    color: #00bfff;
  }
  transition: color 0.2s ease-in-out;
`,
        E = h.F4`
  0% { opacity: 0; transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0); }
`,
        S = (0, h.ZP)(s.VY).withConfig({ componentId: "sc-27d96e2-3" })`
  border: 1px solid #1d1f2d;
  height: 100%;
  width: 100%;
  border-radius: 24px;
  padding: 16px;
  gap: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background: #010314;
  animation-name: ${E};
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  :focus {
    outline: none;
  }
`,
        C = h.ZP.div.withConfig({ componentId: "sc-27d96e2-4" })`
  ${(e) => {
    let { color: t = "red" } = e;
    return t;
  }};
  padding: 16px 20px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #00bfff;
  }
  transition: color 0.2s ease-in-out;
`,
        T = h.ZP.div.withConfig({ componentId: "sc-27d96e2-5" })`
  width: 100%;
  height: 100%;
`,
        k = (0, h.ZP)(T).withConfig({ componentId: "sc-27d96e2-6" })``;
      t.default = function () {
        let [e, t] = (0, p.useState)(!1),
          [i, a] = (0, p.useState)(
            window.matchMedia("(max-width: 768px)").matches
          ),
          [d, l] = (0, p.useState)(0n),
          [f, h] = (0, p.useState)(0n),
          [v, E] = (0, p.useState)(0n),
          { address: C } = (0, x.mA)(),
          [O, I] = (0, c.KO)(g),
          [M, P] = (0, c.KO)(b),
          [$, Z] = (0, p.useState)(null),
          { data: _, error: F } = (0, x.do)({
            address: r.W7,
            abi: m.yS,
            functionName: "balanceOf",
            args: [C || "0x0"],
            enabled: !!C,
            watch: !0,
          }),
          {
            data: z,
            error: L,
            isSuccess: U,
          } = (0, x.do)({
            address: r.W7,
            abi: m.yS,
            functionName: "convertToAssets",
            args: [_ || 0xde0b6b3a7640000n],
            enabled: !0,
            watch: !0,
          }),
          { data: R } = (0, x.do)({
            address: "0xf518f2EbeA5df8Ca2B5E9C7996a2A25e8010014b",
            abi: [
              {
                inputs: [],
                name: "getRate",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
            ],
            functionName: "getRate",
            enabled: !0,
            watch: !1,
          });
        (0, p.useEffect)(() => {
          let e = localStorage.getItem("user");
          if ((console.log("storedUser", e), e)) {
            let t = JSON.parse(e);
            Z(t);
          }
        }, []),
          (0, p.useEffect)(() => {
            if (z) {
              console.log("userMevETHBalance 111", _),
                console.log("userConvertToAssets 111", z);
              let e = z - 0xde0b6b3a7640000n;
              _ && (e = z - _),
                l(e),
                console.log("assets", z),
                h(_ || 0xde0b6b3a7640000n),
                I(
                  _
                    ? parseFloat((0, u.d)(_))
                        .toFixed(3)
                        .toString()
                    : "0"
                ),
                P(
                  _
                    ? parseFloat((0, u.d)(z))
                        .toFixed(3)
                        .toString()
                    : "0"
                ),
                E(z);
            }
          }, [_, z]),
          (0, p.useEffect)(() => {
            t("/" === window.location.pathname),
              window
                .matchMedia("(max-width: 768px)")
                .addEventListener("change", (e) => a(e.matches));
          }, []),
          console.log("rewards", d);
        let A = e
          ? () => window.scrollTo({ top: 0, behavior: "smooth" })
          : void 0;
        return (0, o.jsxs)(y, {
          children: [
            (0, o.jsx)(w, { onClick: A, href: "/", text: "Home" }),
            i
              ? (0, o.jsxs)(s.fC, {
                  children: [
                    (0, o.jsx)(s.xz, {
                      asChild: !0,
                      children: (0, o.jsx)(j, { children: " Explore " }),
                    }),
                    (0, o.jsxs)(S, {
                      avoidCollisions: !0,
                      sideOffset: 13,
                      children: [
                        (0, o.jsxs)(T, {
                          children: [
                            (0, o.jsx)(w, {
                              href: "/team",
                              text: "Team",
                              menu: !0,
                            }),
                            (0, o.jsx)(w, {
                              href: "/redeemCreamETH2",
                              text: "Migrate",
                              menu: !0,
                            }),
                          ],
                        }),
                        (0, o.jsxs)(k, {
                          children: [
                            (0, o.jsx)(w, {
                              href: "/stake",
                              text: "mevETH",
                              menu: !0,
                            }),
                            (0, o.jsx)(w, {
                              href: "https://blog.mev.io",
                              text: "Blog",
                            }),
                            (0, o.jsx)(w, {
                              href: "/redemptions",
                              text: "Redemptions",
                              menu: !0,
                            }),
                          ],
                        }),
                        (0, o.jsx)(s.Eh, {}),
                      ],
                    }),
                  ],
                })
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(w, { href: "/stake", text: "mevETH" }),
                    (0, o.jsx)(w, {
                      href: "/redemptions",
                      text: "Redemptions",
                    }),
                  ],
                }),
          ],
        });
      };
    },
    268: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return eo;
          },
        });
      var o,
        r = i(85893),
        a = i(43120),
        s = i(67294),
        d = i(62249),
        c =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof global
            ? global
            : "u" > typeof self
            ? self
            : {},
        l = {},
        f = {};
      ({
        get exports() {
          return l;
        },
        set exports(n) {
          l = n;
        },
      }).exports = (function () {
        if (o) return f;
        o = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          r =
            s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          a = { key: !0, ref: !0, __self: !0, __source: !0 };
        function d(t, o, s) {
          var d,
            c = {},
            l = null,
            f = null;
          for (d in (void 0 !== s && (l = "" + s),
          void 0 !== o.key && (l = "" + o.key),
          void 0 !== o.ref && (f = o.ref),
          o))
            i.call(o, d) && !a.hasOwnProperty(d) && (c[d] = o[d]);
          if (t && t.defaultProps)
            for (d in (o = t.defaultProps)) void 0 === c[d] && (c[d] = o[d]);
          return {
            $$typeof: e,
            type: t,
            key: l,
            ref: f,
            props: c,
            _owner: r.current,
          };
        }
        return (f.Fragment = t), (f.jsx = d), (f.jsxs = d), f;
      })();
      let p = l.jsx;
      var h = 0 / 0,
        u = /^\s+|\s+$/g,
        x = /^[-+]0x[0-9a-f]+$/i,
        m = /^0b[01]+$/i,
        g = /^0o[0-7]+$/i,
        b = parseInt,
        w = "object" == typeof c && c && c.Object === Object && c,
        v = "object" == typeof self && self && self.Object === Object && self,
        y = w || v || Function("return this")(),
        j = Object.prototype.toString,
        E = Math.max,
        S = Math.min,
        C = function () {
          return y.Date.now();
        };
      function T(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function k(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == j.call(t))
        )
          return h;
        if (T(e)) {
          var t,
            i = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = T(i) ? i + "" : i;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(u, "");
        var o = m.test(e);
        return o || g.test(e) ? b(e.slice(2), o ? 2 : 8) : x.test(e) ? h : +e;
      }
      var O = function (e, t, i) {
        var o,
          r,
          a,
          s,
          d,
          c,
          l = 0,
          f = !1,
          p = !1,
          h = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function u(t) {
          var i = o,
            a = r;
          return (o = r = void 0), (l = t), (s = e.apply(a, i));
        }
        function x(e) {
          var i = e - c,
            o = e - l;
          return void 0 === c || i >= t || i < 0 || (p && o >= a);
        }
        function m() {
          var e,
            i,
            o,
            r = C();
          if (x(r)) return g(r);
          d = setTimeout(
            m,
            ((e = r - c), (i = r - l), (o = t - e), p ? S(o, a - i) : o)
          );
        }
        function g(e) {
          return (d = void 0), h && o ? u(e) : ((o = r = void 0), s);
        }
        function b() {
          var e,
            i = C(),
            a = x(i);
          if (((o = arguments), (r = this), (c = i), a)) {
            if (void 0 === d)
              return (l = e = c), (d = setTimeout(m, t)), f ? u(e) : s;
            if (p) return (d = setTimeout(m, t)), u(c);
          }
          return void 0 === d && (d = setTimeout(m, t)), s;
        }
        return (
          (t = k(t) || 0),
          T(i) &&
            ((f = !!i.leading),
            (a = (p = "maxWait" in i) ? E(k(i.maxWait) || 0, t) : a),
            (h = "trailing" in i ? !!i.trailing : h)),
          (b.cancel = function () {
            void 0 !== d && clearTimeout(d), (l = 0), (o = c = r = d = void 0);
          }),
          (b.flush = function () {
            return void 0 === d ? s : g(C());
          }),
          b
        );
      };
      let I = [],
        M = { width: "100%", height: "100%" },
        P = (0, s.forwardRef)(function (
          {
            className: e,
            children: t,
            debounceTime: i = 300,
            ignoreDimensions: o = I,
            parentSizeStyles: r,
            enableDebounceLeadingCall: a = !0,
            resizeObserverPolyfill: d,
            ...c
          },
          l
        ) {
          var f;
          let h = (0, s.useRef)(null),
            u = (0, s.useRef)(0),
            [x, m] = (0, s.useState)({ width: 0, height: 0, top: 0, left: 0 }),
            g = (0, s.useMemo)(() => {
              let e = Array.isArray(o) ? o : [o];
              return O(
                (t) => {
                  m((i) =>
                    Object.keys(i)
                      .filter((e) => i[e] !== t[e])
                      .every((t) => e.includes(t))
                      ? i
                      : t
                  );
                },
                i,
                { leading: a }
              );
            }, [i, a, o]);
          return (
            (0, s.useEffect)(() => {
              let e = d || window.ResizeObserver,
                t = new e((e) => {
                  e.forEach((e) => {
                    let {
                      left: t,
                      top: i,
                      width: o,
                      height: r,
                    } = (null == e ? void 0 : e.contentRect) ?? {};
                    u.current = window.requestAnimationFrame(() => {
                      g({ width: o, height: r, top: i, left: t });
                    });
                  });
                });
              return (
                h.current && t.observe(h.current),
                () => {
                  window.cancelAnimationFrame(u.current),
                    t.disconnect(),
                    g.cancel();
                }
              );
            }, [g, d]),
            p("div", {
              style: { ...M, ...r },
              ref:
                ((f = [l, h]),
                (e) => {
                  f.forEach((t) => {
                    "function" == typeof t
                      ? t(e)
                      : null != t && (t.current = e);
                  });
                }),
              className: e,
              ...c,
              children: t({ ...x, ref: h.current, resize: g }),
            })
          );
        }),
        $ = (0, s.forwardRef)(
          (
            {
              scene: e,
              style: t,
              onMouseDown: i,
              onMouseUp: o,
              onMouseHover: r,
              onKeyDown: a,
              onKeyUp: c,
              onStart: l,
              onLookAt: f,
              onFollow: h,
              onWheel: u,
              onLoad: x,
              renderOnDemand: m = !0,
              ...g
            },
            b
          ) => {
            let w = (0, s.useRef)(null),
              [v, y] = (0, s.useState)(!0);
            return (
              (0, s.useEffect)(() => {
                let t;
                y(!0);
                let s = [
                  { name: "mouseDown", cb: i },
                  { name: "mouseUp", cb: o },
                  { name: "mouseHover", cb: r },
                  { name: "keyDown", cb: a },
                  { name: "keyUp", cb: c },
                  { name: "start", cb: l },
                  { name: "lookAt", cb: f },
                  { name: "follow", cb: h },
                  { name: "scroll", cb: u },
                ];
                return (
                  w.current &&
                    ((t = new d.M(w.current, { renderOnDemand: m })),
                    (async function () {
                      for (let i of (await t.load(e), s))
                        i.cb && t.addEventListener(i.name, i.cb);
                      y(!1), null == x || x(t);
                    })()),
                  () => {
                    for (let e of s)
                      e.cb && t.removeEventListener(e.name, e.cb);
                    t.dispose();
                  }
                );
              }, [e]),
              p(P, {
                ref: b,
                parentSizeStyles: t,
                debounceTime: 50,
                ...g,
                children: () =>
                  p("canvas", {
                    ref: w,
                    style: { display: v ? "none" : "block" },
                  }),
              })
            );
          }
        );
      var Z = i(41664),
        _ = i.n(Z),
        F = i(51192),
        z = i(16553),
        L = i(89230);
      let U = F.ZP.div.withConfig({ componentId: "sc-955c775a-0" })`
  position: relative;

  border-bottom-left-radius: 38px;
  border-bottom-right-radius: 38px;
  width: calc(100vw - 48px);
  height: calc(100vh - 8px);
  align-self: center;
  overflow: hidden;

  @media ${a.U.mobileL} {
    width: 100vw;
    height: auto;
    min-height: 100vh;
  }

  @media ${a.U.mobileM} {
    min-height: unset;
  }
`,
        R = F.ZP.div.withConfig({ componentId: "sc-955c775a-1" })`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 90%;

  @media ${a.U.mobileL} {
    flex-direction: column;
  }
`,
        A = F.ZP.div.withConfig({ componentId: "sc-955c775a-2" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  min-height: 90vh;

  gap: 8px;
  padding-left: 7.5%;

  > div:first-child {
    font-size: 70px;
    font-weight: 500;
    max-width: 590px;
  }

  > div:nth-child(2) {
    max-width: 550px;
    font-size: 16px;
    font-weight: 400;
    color: #ececfa;
    line-height: 1.75;
  }

  @media ${a.U.mobileL} {
    padding: 0;
    padding-top: 5%;
    min-height: auto;
    max-width: 70vw;

    align-items: center;

    > div:first-child {
      max-width: unset;
      text-align: center;
    }

    > div:nth-child(2) {
      text-align: center;
      max-width: unset;
    }
  }

  @media ${a.U.mobileM} {
    padding-top: 12%;
    max-width: 85vw;
    > div:first-child {
      font-size: 50px;
    }
  }

  @media ${a.U.mobileS} {
    padding-top: 18%;
    > div:first-child {
      font-size: 32px;
    }
    > div:nth-child(2) {
      font-size: 14px;
      line-height: 1.4;
    }

`,
        D = F.ZP.a.withConfig({ componentId: "sc-955c775a-3" })`
  background: #ffffff;
  color: #000000;
  border-radius: 20px;
  height: 38px;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  margin-top: 8px;
  cursor: pointer;
  @media ${a.U.mobileL} {
    margin-bottom: 20px;
  }
`,
        H = F.ZP.a.withConfig({ componentId: "sc-955c775a-4" })`
  height: 38px;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  margin-top: 8px;
  cursor: pointer;

  @media ${a.U.mobileL} {
    margin-bottom: 20px;
  }
`,
        N = F.ZP.div.withConfig({ componentId: "sc-955c775a-5" })`
  height: 100%;
  width: 50vw;
  @media ${a.U.mobileL} {
    margin-top: 32px;
    width: 100vw;
    height: 50vh;
  }

  @media ${a.U.mobileM} {
    margin-top: 0;
  }
`;
      var B = function () {
          return (0, r.jsxs)(U, {
            children: [
              (0, r.jsxs)(z.gM, {
                children: [
                  (0, r.jsx)(_(), {
                    href: "/",
                    children: (0, r.jsx)(z.yA, {
                      src: "/logo.png",
                      alt: "Manifold LSD",
                    }),
                  }),
                  (0, r.jsx)(L.Z, {}),
                ],
              }),
              (0, r.jsxs)(R, {
                children: [
                  (0, r.jsxs)(A, {
                    children: [
                      (0, r.jsx)("div", {
                        children: "EthanMev Optimized Liquid Staking",
                      }),
                      (0, r.jsx)("div", {
                        children:
                          "Ethereum's next-generation seamless liquid staking protocol. Built from the ground up for EthanMev capture and Validator rewards.",
                      }),
                      (0, r.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          (0, r.jsx)(D, {
                            href: "https://app.uniswap.org/swap?outputCurrency=0x3Aa957C2d2E8ec1D66d3B2466A9693Ed6726c386",
                            children: "Buy Now",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(N, {
                    children: (0, r.jsx)($, {
                      onLoad: function (e) {
                        e.emitEvent(
                          "keyDown",
                          "a7186aec-6618-4997-b318-ef021f5cc885"
                        );
                      },
                      scene:
                        "https://prod.spline.design/l6IIuP2k6FsAfyjs/scene.splinecode",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        W = i(4113);
      function V(e) {
        let { title: t, subtitle: i, center: o } = e;
        return (0, r.jsxs)(Y, {
          center: o,
          children: [
            (0, r.jsx)("div", { children: t }),
            (0, r.jsx)("div", { children: i }),
          ],
        });
      }
      let K = F.ZP.div.withConfig({ componentId: "sc-a2ac1b36-0" })`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  width: 90vw;

  max-width: 1360px;

  @media ${a.U.mobileL} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
`,
        q = F.ZP.div.withConfig({ componentId: "sc-a2ac1b36-1" })`
  background: linear-gradient(180deg, rgba(2, 20, 23, 0.72) 15%, rgba(0, 0, 0, 0.05) 75%);
  border: 1.5px solid rgba(34, 44, 60, 0.8);
  border-radius: 16px;
  position: relative;

  &:hover {
    border-color: rgba(48, 50, 70, 1);
  }
  transition: border-color 0.2s ease-in-out;

  overflow: hidden;
`,
        Y = F.ZP.div.withConfig({ componentId: "sc-a2ac1b36-2" })`
  position: absolute;
  left: 24px;

  bottom: ${(e) => {
    let { center: t } = e;
    return t ? "30%" : "28px";
  }};
  max-width: ${(e) => {
    let { center: t } = e;
    return t ? "400px;" : "auto";
  }};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 10px;
  & > div:first-child {
    font-weight: 600;
    font-size: 22px;
  }
  & > div:last-child {
    font-weight: 400;
    max-width: 90%;
    ${a.O.grayShine}
  }

  z-index: 1;
`,
        X = (0, F.ZP)(function (e) {
          let {
            title: t,
            subtitle: i,
            center: o,
            children: a,
            className: s,
          } = e;
          return (0,
          r.jsxs)(q, { center: o, className: s, children: [(0, r.jsx)(V, { center: o, title: t, subtitle: i }), a] });
        }).withConfig({ componentId: "sc-a2ac1b36-3" })`
  width: calc(33% - 16px);
  min-height: 382px;
  aspect-ratio: 1/1.1;

  @media ${a.U.laptopS} {
    aspect-ratio: 1/1.5;
  }

  @media ${a.U.mobileL} {
    width: calc(100%);
    aspect-ratio: 1/1.1;
  }
`,
        G = F.ZP.div.withConfig({ componentId: "sc-a2ac1b36-4" })`
  height: 100%;
  position: absolute;
  width: 100%;
  left: 0;
  // background: green;
  overflow: hidden;
  border-radius: 16px;
`;
      var J = function () {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(K, {
            children: [
              (0, r.jsx)(X, {
                title: "Liquid Staking meets Lending",
                subtitle:
                  "mevETH is designed to rebalance across staking and lending to maximize yield.",
                children: (0, r.jsx)(G, {
                  children: (0, r.jsx)($, {
                    scene:
                      "https://prod.spline.design/cAwF-MqShwyeM0ib/scene.splinecode",
                  }),
                }),
              }),
              (0, r.jsx)(X, {
                title: "OpenMEV Architecture",
                subtitle:
                  "mevETH captures multiple winning block proposals, meaning validators always earn more than compared with mev-boost.",
                children: (0, r.jsx)(G, {
                  children: (0, r.jsx)($, {
                    scene:
                      "https://prod.spline.design/6GYK8mDK-6rVDjW8/scene.splinecode",
                  }),
                }),
              }),
              (0, r.jsx)(X, {
                title: "Non-Rebasing Design",
                subtitle:
                  "mevETH's non-rebasing design means your balance will never decrease, and allows friction-free use with your favorite DeFi protocols.",
                children: (0, r.jsx)(G, {
                  children: (0, r.jsx)($, {
                    scene:
                      "https://prod.spline.design/QzlWk9oiBBHZnrdC/scene.splinecode",
                  }),
                }),
              }),
            ],
          }),
        });
      };
      let Q = F.ZP.div.withConfig({ componentId: "sc-44449366-0" })`
  display: flex;
  flex-direction: column;
  align-items: center;
`,
        ee = F.ZP.div.withConfig({ componentId: "sc-44449366-1" })`
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  max-width: 388px;
  padding: 0 24px;
  padding-top: 72px;

  ${a.O.whiteShine}
`,
        et = F.ZP.div.withConfig({ componentId: "sc-44449366-2" })`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.85;
  text-align: center;
  max-width: 480px;
  margin-top: 18px;
  padding: 0 24px;
  margin-bottom: 48px;

  ${a.O.grayShine}
`;
      var en = function () {
          return (0, r.jsxs)(Q, {
            id: "about",
            children: [
              (0, r.jsx)(ee, {
                children: "Maintain the Liquidity of your ETH",
              }),
              (0, r.jsx)(et, {
                children:
                  "mevETH is the non-custodial liquid staking receipt that offers the highest potential rewards today.",
              }),
              (0, r.jsx)(J, {}),
              (0, r.jsx)(W.Z, {}),
            ],
          });
        },
        ei = i(57419);
      /**
       * @author Manifold Finance, Inc.
       * @date July, 12, 2023
       * @license GPL-3.0
       */ function eo() {
        return (0, r.jsxs)(ei.Z, {
          children: [(0, r.jsx)(B, {}), (0, r.jsx)(en, {})],
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [2918, 5090, 5675, 3853, 1292, 8764, 9761, 1438, 4113, 9774, 2888, 179],
      function () {
        return e((e.s = 48312));
      }
    ),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=index-a3fe8a8aa3f65057.js.map
