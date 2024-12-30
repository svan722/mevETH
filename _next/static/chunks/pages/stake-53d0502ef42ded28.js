(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8797],
  {
    54997: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/stake",
        function () {
          return n(14759);
        },
      ]);
    },
    36441: function (e, t, n) {
      "use strict";
      n.d(t, {
        Si: function () {
          return d;
        },
        bR: function () {
          return c;
        },
      });
      var a = n(85893);
      n(81001);
      var i = n(43120),
        s = n(82703),
        o = n(74509),
        r = n(42444),
        l = n(51192);
      function c(e) {
        let { title: t, subtitle: n, Logo: i, didLoad: o, alt: l } = e;
        return (0, a.jsx)(s.M, {
          children: (0, a.jsxs)(u, {
            children: [
              (0, a.jsx)(h, { layout: !0, children: t }),
              o &&
                (0, a.jsxs)(f, {
                  initial: { opacity: 0, y: 6, transform: "scale(0.85)" },
                  animate: { opacity: 1, y: 0, transform: "scale(1)" },
                  exit: { opacity: 0 },
                  transition: { duration: 0.125 },
                  children: [
                    l
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(r.u, {
                              id: "apr-tooltip",
                              style: { fontSize: "18px" },
                            }),
                            (0, a.jsx)("a", {
                              "data-tooltip-id": "apr-tooltip",
                              "data-tooltip-content": l,
                              "data-tooltip-place": "bottom",
                              children: n,
                            }),
                          ],
                        })
                      : n,
                    i && (0, a.jsx)(i, { width: 16, height: 16 }),
                  ],
                }),
            ],
          }),
        });
      }
      let d = (0, l.ZP)(o.E.div).withConfig({ componentId: "sc-37905a2d-0" })`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 542px;
  margin-top: 14px;

  @media ${i.U.mobileS} {
    width: calc(100vw - 32px);
  }
`,
        u = (0, l.ZP)(o.E.div).withConfig({ componentId: "sc-37905a2d-1" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: rgba(29, 34, 47, 0.7);

  width: calc(100% / 3 - 10px);

  height: 80px;

  border-radius: 12px;

  @media ${i.U.mobileS} {
    width: calc(100% / 3 - 4px);
  }
`,
        h = (0, l.ZP)(o.E.div).withConfig({ componentId: "sc-37905a2d-2" })`
  font-size: 14px;
  color: #c9c9c9;
  font-weight: 400;
  text-align: center;
  @media ${i.U.mobileS} {
    font-size: 12px;
  }
`,
        f = (0, l.ZP)(o.E.div).withConfig({ componentId: "sc-37905a2d-3" })`
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${i.U.mobileS} {
    font-size: 20px;
  }
`;
    },
    64626: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var a = n(85893),
        i = n(51232);
      n(81001);
      var s = n(64487),
        o = n(67294),
        r = n(39625),
        l = n(69077),
        c = [
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "description",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint80", name: "_roundId", type: "uint80" },
            ],
            name: "getRoundData",
            outputs: [
              { internalType: "uint80", name: "roundId", type: "uint80" },
              { internalType: "int256", name: "answer", type: "int256" },
              { internalType: "uint256", name: "startedAt", type: "uint256" },
              { internalType: "uint256", name: "updatedAt", type: "uint256" },
              {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "latestRoundData",
            outputs: [
              { internalType: "uint80", name: "roundId", type: "uint80" },
              { internalType: "int256", name: "answer", type: "int256" },
              { internalType: "uint256", name: "startedAt", type: "uint256" },
              { internalType: "uint256", name: "updatedAt", type: "uint256" },
              {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "version",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        d = n(61965),
        u = n(36441),
        h = function () {
          let [e, t] = (0, o.useState)("0"),
            [n, h] = (0, o.useState)([0n, 0n]),
            [f, p] = (0, o.useState)("0"),
            [m, x] = (0, o.useState)("0"),
            [g, y] = (0, o.useState)("0"),
            [w, j] = (0, o.useState)(0),
            { data: E, error: S } = (0, l.do)({
              address: i.W7,
              abi: d.Z,
              functionName: "totalAssets",
            }),
            {
              data: b,
              isError: v,
              isLoading: T,
            } = (0, l.do)({
              address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
              abi: c,
              functionName: "latestRoundData",
            }),
            { data: k } = (0, l.do)({
              address: i.W7,
              abi: d.Z,
              functionName: "fraction",
            });
          (0, o.useEffect)(() => {
            if (b) {
              let e = b[1];
              e && j(parseFloat(e.toString()) / 1e8);
            }
          }, [b]),
            (0, o.useEffect)(() => {
              k && h(k);
            }, [k]);
          let [C, F] = (0, o.useState)(null),
            H = () => {
              let e = new Date(1696426103e3),
                t = new Date(),
                a = n[0],
                i = n[1],
                s = (t.getTime() - e.getTime()) / 1e3;
              console.log(" Start time:", e.toISOString()),
                console.log(" End time:", t.toISOString()),
                console.log(` Time difference is ${s} seconds`);
              let o =
                (100 *
                  (parseFloat(a.toString()) - parseFloat(i.toString())) *
                  31536e3) /
                (s * parseFloat(i.toString()));
              console.log(" APY base:", o);
              let r = 100 * ((1 + o / 100) ** 2 - 1);
              console.log(" APY compounding:", r),
                x(o.toFixed(2)),
                p(r.toFixed(2));
            };
          (0, o.useEffect)(() => {
            console.log("APY compounding rewards", C?.summary.latestBlock),
              k && n[0] && H();
          }, [C?.summary.latestBlock, n, k]),
            (0, o.useEffect)(() => {
              try {
                if (E) {
                  let e = (0, r.d)(E);
                  if (E) {
                    t(e);
                    let n = (parseFloat(e) * w) / 10;
                    y(n.toFixed(0));
                  }
                }
              } catch (e) {
                (0, s.Tb)(Error("Failed to format totalAssets"), {});
              }
            }, [w, E]);
          let Z = 0 !== w;
          return (0, a.jsxs)(u.Si, {
            children: [
              (0, a.jsx)(u.bR, {
                didLoad: Z,
                title: "Total Value Locked",
                subtitle: "0",
              }),
              (0, a.jsx)(u.bR, {
                didLoad: Z,
                title: "Compound APY",
                alt: `Base APY: ${m}%`,
                subtitle: `${f}%`,
              }),
              (0, a.jsx)(u.bR, {
                didLoad: Z,
                title: "Staked",
                subtitle: "$ 0",
              }),
            ],
          });
        };
    },
    14759: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ei;
          },
        });
      var a = n(85893),
        i = n(70855),
        s = n(90374),
        o = n(16553),
        r = n(89230),
        l = n(51232),
        c = n(82082),
        d = n(59769),
        u = n(43120),
        h = n(64487),
        f = n(56371),
        p = n(74509),
        m = n(48583),
        x = n(67294),
        g = n(51192),
        y = n(33305),
        w = n(39028),
        j = n(69077),
        E = n(72033),
        S = n(54753),
        b = n(81594),
        v = n(84842),
        T = n(71414),
        k = n(65950),
        C = n(9489),
        F = n(94393),
        H = n.n(F);
      let Z = g.ZP.div.withConfig({ componentId: "sc-c08475a7-0" })`
  position: absolute;
  top: 0;
  overflow: hidden;

  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
      var I = function (e) {
        let { shouldTrigger: t } = e;
        return (
          (0, x.useEffect)(() => {
            t &&
              setTimeout(() => {
                H().confetti(document.getElementById("ready-text"), {
                  count: H().variation.range(20, 40),
                  spread: H().variation.range(40, 60),
                  color: () =>
                    F.random.randomRange(0, 1) > 0.5
                      ? new F.Color(203, 255, 255)
                      : new F.Color(0, 255, 248),
                });
              }, 250);
          }, [t]),
          (0, a.jsx)(Z, { id: "party-js-container" })
        );
      };
      function P(e) {
        return (0, a.jsx)(A, {
          initial: { opacity: 0.8, y: 6 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.25 },
          children: e.hash
            ? (0, a.jsxs)(v.Fn, {
                children: [
                  "Your transaction is loading. You can view it on Etherscan by clicking",
                  " ",
                  (0, a.jsx)("a", {
                    rel: "norefferer",
                    target: "_blank",
                    href: `${C.gs}/tx/${e.hash}`,
                    children: "here",
                  }),
                  ".",
                ],
              })
            : (0, a.jsx)(v.Fn, {
                children:
                  "Please sign the transaction with your wallet, the hash will show up shortly.",
              }),
        });
      }
      function M(e) {
        let [t, n] = (0, m.KO)(d.stakedTxStatus);
        return (0, a.jsxs)(A, {
          initial: { opacity: 0.8, y: 6 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.25 },
          children: [
            (0, a.jsxs)(v.Fn, {
              children: [
                "Sorry, something wrong happened. Here is the error message: ",
                e.errorMessage,
              ],
            }),
            (0, a.jsx)("div", { style: { flexGrow: 1 } }),
            (0, a.jsx)(b.Z, {
              text: "Go Back",
              onClick: () => {
                console.log("status", t),
                  e.reset?.(),
                  e.setMode("Stake"),
                  n("None");
              },
            }),
          ],
        });
      }
      function $(e) {
        let { setMode: t, amount: n, reset: i } = e;
        return (0, a.jsxs)(A, {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.275 },
          children: [
            (0, a.jsxs)(v.Fn, {
              id: "ready-text",
              children: [
                "You've successfully converted ",
                n,
                " ETH to mevETH.",
              ],
            }),
            (0, a.jsx)("div", { style: { flexGrow: 1 } }),
            (0, a.jsx)(b.Z, {
              text: "See what you can do with mevETH",
              onClick: () => {
                t("Use"), i?.();
              },
            }),
          ],
        });
      }
      let A = (0, g.ZP)(p.E.div).withConfig({ componentId: "sc-5108edea-0" })`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
      var N = function (e) {
        let { setMode: t, reset: n } = e,
          [i] = (0, m.KO)(d.stakedAmount),
          [s] = (0, m.KO)(d.stakedTxHash),
          [o] = (0, m.KO)(d.writeTxErrorMessage),
          [r] = (0, m.KO)(d.stakedTxStatus),
          l = P;
        return (
          "Success" === r ? (l = $) : "Error" === r && (l = M),
          (0, a.jsxs)(v.CB, {
            children: [
              (0, a.jsx)(l, {
                setMode: t,
                amount: i,
                hash: s,
                status: r,
                errorMessage: o,
                reset: n,
              }),
              (0, a.jsx)(I, { shouldTrigger: "Success" === r }),
            ],
          })
        );
      };
      function O(e) {
        let { setMode: t, mode: n } = e,
          { address: i } = (0, j.mA)(),
          { data: s, isError: o, isLoading: r } = (0, j.LK)(),
          [u, p] = (0, m.KO)(d.stakedAmount),
          [g, k] = (0, x.useState)("0.0"),
          C = (0, c.N)(u, 500),
          [F, H] = (0, m.KO)(d.stakedTxHash),
          [Z, I] = (0, m.KO)(d.writeTxErrorMessage),
          [P, M] = (0, m.KO)(d.stakedTxStatus),
          [$, A] = (0, x.useState)(!1),
          [O, _] = (0, x.useState)(0n),
          { data: B, error: Y } = (0, j.do)({
            address: l.V0,
            abi: E.yS,
            functionName: "balanceOf",
            args: [i || "0x0"],
            enabled: !!i,
            watch: !0,
          }),
          R = () => {
            console.log("feeData", s), console.log("feedata config", ec);
            let e = g;
            return ($ && B && (e = (0, f.formatEther)(B)),
            ec && s?.maxFeePerGas)
              ? (0, y.f)(e) -
                  (BigInt(105e3) * BigInt(s.maxFeePerGas) * BigInt(1)) /
                    BigInt(1)
              : (0, y.f)(e);
          },
          { data: K, isSuccess: W } = (0, j.KQ)({ address: i }),
          D = (e) => {
            try {
              return (0, y.f)(e);
            } catch (t) {
              console.log(t),
                (0, h.Tb)(Error("Failed parsing ETH"), { tags: { string: e } });
            }
            return (0, y.f)("0");
          },
          { data: G, error: U } = (0, j.do)({
            address: l.uH,
            abi: S.$,
            functionName: "amountOutStake",
            args: [D(u)],
            enabled: D(u) > 0,
            watch: !0,
          });
        console.log("amountOutStakeData", G),
          (0, x.useEffect)(() => {
            G && G.length > 0 && G[0] && _(G[0]);
          }, [G]);
        let z = () => {
            if (!i) return;
            let e = R();
            if (e <= 0) {
              p("0");
              return;
            }
            console.log("mm", e.toString(), D(g).toString());
            let t = g;
            if ($ && B) {
              p((t = (0, f.formatEther)(B)));
              return;
            }
            e < D(t) ? p((0, f.formatEther)(e)) : p(t);
          },
          V = () => D(u) >= D("0.01"),
          { config: J, error: X } = (0, j.PJ)({
            address: l.V0,
            abi: E.em,
            functionName: "approve",
            args: [l.uH, D(u)],
            enabled: !!C && V() && $,
          }),
          {
            data: q,
            write: Q,
            isLoading: ee,
            isSuccess: et,
            isError: en,
            error: ea,
          } = (0, j.GG)(J),
          {
            data: ei,
            isError: es,
            isLoading: eo,
            isSuccess: er,
            isFetching: el,
          } = (0, j.BX)({ hash: q?.hash, enabled: !!q?.hash, timeout: 12e4 }),
          { config: ec, error: ed } = (0, j.PJ)({
            address: l.uH,
            abi: S.$,
            functionName: "stakeEthForMevEth",
            args: [i, D(u), O - (1n * O) / 100n, 1714944167, G ? G[1] : {}],
            value: $ ? BigInt(0) : D(u),
            enabled: !!C && O > 0n,
          }),
          {
            data: eu,
            write: eh,
            isLoading: ef,
            isSuccess: ep,
            isError: em,
            isIdle: ex,
            error: eg,
            reset: ey,
          } = (0, j.GG)(ec),
          {
            data: ew,
            isError: ej,
            isLoading: eE,
            isSuccess: eS,
          } = (0, j.BX)({ hash: eu?.hash, enabled: !!eu?.hash });
        console.log("bool", !!$);
        let {
          data: eb,
          error: ev,
          isSuccess: eT,
          isLoading: ek,
        } = (0, j.do)({
          address: l.V0,
          abi: E.em,
          functionName: "allowance",
          args: [i || "0x0", l.uH],
          enabled: !!$ && !!B,
          watch: !0,
        });
        if (
          (ek && console.log("loading weth allowance", eb),
          eT && console.log("success weth allowance", eb),
          ep && eu?.hash && H(eu.hash),
          ef &&
            (t("Confirm"),
            console.log("status", "Loading", eu?.hash),
            eu?.hash && (M("Loading"), H(eu.hash))),
          em &&
            (eg?.cause instanceof w.ab
              ? (t("Stake"), M("None"), console.log("user rejected"))
              : eg &&
                (t("Confirm"),
                M("Error"),
                I(eg.message),
                (0, h.Tb)(Error("Failed deposit"), {
                  tags: { message: eg.message },
                }))),
          en &&
            (ea?.cause instanceof w.ab
              ? (t("Stake"), M("None"))
              : ea &&
                (t("Confirm"),
                M("Error"),
                I(ea.message),
                (0, h.Tb)(Error("❌ Failed WETH9 Approval"), {
                  tags: { message: ea.message },
                }))),
          eS)
        )
          switch (ew?.status) {
            case "success":
              M("Success");
              break;
            case "reverted":
              M("Error"),
                I(
                  "Your transaction has been reverted, no funds have been deposited."
                );
          }
        let eC = async () => {
            if ($ || V()) {
              if (i) {
                if (W && eh) {
                  if (ed) console.log("error", ed);
                  else
                    try {
                      await eh();
                    } catch (e) {
                      t("Confirm"),
                        M("Error"),
                        I(e),
                        (0, h.Tb)(Error("Failed staling write transaction"), {
                          tags: { message: e },
                        });
                    }
                } else console.log("error", em, eg, W, eh);
              } else alert("no ethers");
            }
          },
          eF = async () => {
            if (V() && Q)
              try {
                await Q();
              } catch (e) {
                t("Confirm"),
                  M("Error"),
                  I(e),
                  (0, h.Tb)(
                    Error("❌ Failed WETH9 approval write transaction"),
                    { tags: { message: e } }
                  );
              }
          };
        return ((0, x.useEffect)(() => {
          W && K?.formatted && (K.value, k(K.formatted));
        }, [W, K?.formatted]),
        "Confirm" === n && (ef || em || W))
          ? (console.log("modemode", n),
            (0, a.jsx)(N, { setMode: t, reset: ey }))
          : "Stake" === n
          ? (0, a.jsxs)(v.CB, {
              children: [
                (0, a.jsxs)(v.Fn, {
                  children: [
                    "Stake ETH in your wallet to receive mevETH, a Liquid Staking Token (LST) that corresponds to your staked ETH, enabling seamless participation in Ethereum's Proof of Stake network using our",
                    " ",
                    (0, a.jsx)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: "https://www.rated.network/o/MevEth?timeWindow=all&network=mainnet&idType=pool",
                      children: "",
                    }),
                    ".",
                  ],
                }),
                (0, a.jsxs)(v.OZ, {
                  children: [
                    (0, a.jsxs)(v.jp, {
                      children: [
                        (0, a.jsx)(v.Y2, {
                          value: u,
                          onChange: (e) => {
                            (!e.target.value ||
                              0 > parseFloat(e.target.value)) &&
                              p("0");
                            try {
                              D(e.target.value), R(), D(e.target.value), D(g);
                            } catch (e) {
                              console.log(e);
                            }
                            p(e.target.value);
                          },
                          type: "number",
                          max: g,
                          placeholder: "0.0",
                        }),
                        (0, a.jsx)(v.JS, {
                          children: (0, a.jsx)(T.Z, { height: 32, width: 32 }),
                        }),
                      ],
                    }),
                    $ && B
                      ? (0, a.jsxs)(v.ER, {
                          onClick: z,
                          children: ["Max: ", (0, f.formatEther)(B), " WETH"],
                        })
                      : (0, a.jsxs)(v.ER, {
                          onClick: z,
                          children: ["Max: ", g, " ETH"],
                        }),
                    B
                      ? $
                        ? (0, a.jsxs)(v.HY, {
                            onClick: () => {
                              A(!1);
                            },
                            children: ["Switch to ETH (", g, " ETH)"],
                          })
                        : (0, a.jsxs)(v.HY, {
                            onClick: () => {
                              A(!0);
                            },
                            children: [
                              "Switch to WETH (",
                              (0, f.formatEther)(B),
                              " WETH)",
                            ],
                          })
                      : null,
                  ],
                }),
                D(u) === BigInt(0) || V()
                  ? $
                    ? D(u) > 0 && B && eb && eb >= D(u)
                      ? (0, a.jsx)(b.Z, {
                          text: `Stake ${parseFloat(u).toFixed(
                            2
                          )} WETH for ${parseFloat(
                            (0, f.formatEther)(O)
                          ).toFixed(4)} mevETH`,
                          onClick: eC,
                        })
                      : (0, a.jsx)(b.Z, {
                          text: eo
                            ? "Approving... please wait."
                            : B && B < D(u)
                            ? "You do not have enough WETH"
                            : "Approve mevETH to deposit your WETH",
                          disabled:
                            ee ||
                            eo ||
                            el ||
                            "" === u ||
                            "0" === u ||
                            (!!B && B < D(u)),
                          onClick: eF,
                        })
                    : (0, a.jsx)(b.Z, {
                        text:
                          D(u) > D(g)
                            ? "You do not have enough ETH"
                            : `Stake ${parseFloat(u).toFixed(
                                2
                              )} ETH for ${parseFloat(
                                (0, f.formatEther)(O)
                              ).toFixed(4)} mevETH`,
                        onClick: eC,
                        disabled: D(u) > D(g),
                      })
                  : (0, a.jsx)(b.Z, {
                      text: "Stake at least 0.01 ETH",
                      disabled: !0,
                      onClick: eC,
                    }),
              ],
            })
          : (0, a.jsx)(L, {});
      }
      function L() {
        let [e, t] = (0, x.useState)("");
        return (0, a.jsxs)(v.CB, {
          children: [
            (0, a.jsx)(v.Fn, {
              children:
                "You can use your mevETH to earn rewards on other protocols. ",
            }),
            (0, a.jsx)(v.OZ, {
              children: (0, a.jsx)(Y, {
                children: k.m.map((t) =>
                  (0, a.jsx)("a", {
                    href: t.href,
                    rel: "noopener",
                    target: "_blank",
                    children: (0, a.jsxs)(B, {
                      children: [
                        (0, a.jsx)(R, {
                          isActive: "SushiSwap" === e,
                          src: t.src,
                        }),
                        (0, a.jsx)(_, { children: t.desc }),
                      ],
                    }),
                  })
                ),
              }),
            }),
          ],
        });
      }
      let _ = g.ZP.div.withConfig({ componentId: "sc-e5697554-0" })`
  margin-left: 10px;
  margin-top: 10px;
`,
        B = g.ZP.div.withConfig({ componentId: "sc-e5697554-1" })`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 10px;
  align-items: left;
`,
        Y = g.ZP.div.withConfig({ componentId: "sc-e5697554-2" })`
  justify-content: left;
  align-items: left;
  gap: 24px;
`,
        R = g.ZP.img.withConfig({ componentId: "sc-e5697554-3" })`
  height: 40px;
  width: 40px;
  opacity: ${(e) => {
    let { isActive: t } = e;
    return t ? 1 : 0.5;
  }};
  &:hover {
    ${(e) => {
      let { isActive: t } = e;
      return (
        !t &&
        "opacity: ${({ isActive }) => (isActive ? 1 : 0.8)}; cursor: pointer; transform: scale(1.05)"
      );
    }}
  }

  transition: all 0.2s ease-in-out;
`;
      function K(e) {
        let { setMode: t, mode: n } = e;
        return (0, a.jsx)(O, { setMode: t, mode: n });
      }
      (0, g.ZP)(p.E.div).withConfig({ componentId: "sc-e5697554-4" })`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  height: 48px;
  margin-top: 16px;

  @media ${u.U.mobileS} {
    font-size: 14px;
  }
`;
      var W = n(64626),
        D = n(35854),
        G = n(74431),
        U = n(42522),
        z = function (e) {
          let { mode: t, setMode: n } = e,
            i = (0, G.Z)();
          return (0, a.jsxs)(D.x7, {
            children: [
              (0, a.jsx)(D.dJ, {
                children: (0, a.jsx)(D.cD, {
                  selected: !0,
                  children: i ? "Stake" : "Stake ETH for mevETH",
                }),
              }),
              (0, a.jsxs)(D.RK, {
                children: [
                  (0, a.jsx)(D.rL, {
                    disabled: !0,
                    selected: "Stake" === t,
                    children: "1. Stake",
                  }),
                  (0, a.jsx)(U.Z, {}),
                  (0, a.jsx)(D.rL, {
                    disabled: !0,
                    selected: "Confirm" === t,
                    children: "2. Confirm",
                  }),
                  (0, a.jsx)(U.Z, {}),
                  (0, a.jsx)(D.rL, {
                    disabled: !0,
                    selected: "Use" === t,
                    children: "3. Use",
                  }),
                ],
              }),
            ],
          });
        },
        V = n(57419),
        J = n(13589),
        X = n(82703),
        q = n(5152),
        Q = n.n(q),
        ee = n(41664),
        et = n.n(ee);
      function en() {
        return (0, a.jsxs)(o.gM, {
          children: [
            (0, a.jsx)(et(), {
              href: "/",
              children: (0, a.jsx)(o.yA, {
                src: "/svg/MEV Text White.svg",
                alt: "mevETH",
              }),
            }),
            (0, a.jsx)(r.Z, {}),
          ],
        });
      }
      function ea() {
        let [e, t] = (0, x.useState)("Stake");
        return (0, a.jsx)(J.S, {
          children: (0, a.jsxs)(o.A_, {
            initial: { transform: "scale(0.9)" },
            animate: { transform: "scale(1)" },
            exit: { transform: "scale(0.9)" },
            layout: !0,
            children: [
              (0, a.jsx)(i.Z, {}),
              (0, a.jsxs)(o.kS, {
                children: [
                  (0, a.jsx)(z, { mode: e, setMode: t }),
                  (0, a.jsx)(X.M, {
                    children: (0, a.jsx)(K, { mode: e, setMode: t }),
                  }),
                ],
              }),
              (0, a.jsx)(W.Z, {}),
            ],
          }),
        });
      }
      function ei() {
        return (0, a.jsxs)(V.Z, {
          children: [
            (0, a.jsx)(en, {}),
            (0, a.jsx)(ea, {}),
            (0, a.jsx)(s.Z, {}),
          ],
        });
      }
      Q()(() => n.e(3484).then(n.bind(n, 13484)), {
        loadableGenerated: { webpack: () => [13484] },
        ssr: !1,
      });
    },
    46601: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        5090, 5675, 3853, 1292, 1111, 9761, 7121, 7728, 1438, 3320, 4113, 4767,
        9774, 2888, 179,
      ],
      function () {
        return e((e.s = 54997));
      }
    ),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=stake-53d0502ef42ded28.js.map
