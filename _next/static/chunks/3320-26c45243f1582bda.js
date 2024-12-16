"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3320,4525],{70855:function(e,t,n){var i=n(85893),o=n(43120),a=n(62519),s=n(82703),r=n(74509),d=n(51192);let c=(0,d.ZP)(r.E.div).withConfig({componentId:"sc-d8f5bd38-0"})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  width: 542px;
  margin-bottom: 12px;

  @media ${o.U.mobileS} {
    width: calc(100vw - 32px);
  }
`,l=d.ZP.div.withConfig({componentId:"sc-d8f5bd38-1"})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 6px 12px;
  gap: 6px;
  background: #212738;
  cursor: pointer;
  &:hover {
    background: rgba(39, 44, 57, 0.85);
  }
  transition: background 0.2s ease-in-out;
`,f=d.ZP.div.withConfig({componentId:"sc-d8f5bd38-2"})`
  width: 8px;
  height: 8px;
  background: #1e873c;
  border-radius: 50%;
`,p=d.ZP.div.withConfig({componentId:"sc-d8f5bd38-3"})`
  font-size: 14px;
  line-height: 1.5;
`;t.Z=function(){return(0,i.jsx)(a.NL.Custom,{children:e=>{let{mounted:t,account:n,openAccountModal:o}=e;return(0,i.jsx)(s.M,{children:n&&t&&(0,i.jsx)(c,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{delay:.5},children:(0,i.jsxs)(l,{onClick:o,children:[(0,i.jsx)(f,{}),(0,i.jsxs)(p,{children:["Connected as ",n?n.ensName||`${n.address.slice(0,6)}...${n.address.slice(n.address.length-3,n.address.length)}`:null]})]})})})}})}},90374:function(e,t,n){var i=n(85893),o=n(51192);let a=o.ZP.div.withConfig({componentId:"sc-547afdda-0"})``;t.Z=function(){return(0,i.jsx)(a,{})}},89230:function(e,t,n){var i=n(85893),o=n(51232),a=n(34525),s=n(43120),r=n(48583),d=n(67294),c=n(51192),l=n(39625),f=n(69077),p=n(72033),x=n(62331);let h=c.ZP.a.withConfig({componentId:"sc-fadb2cbd-0"})`
  color: #fff;
  margin-right: 20px;
  margin-left: 40px;
`,u=c.ZP.div.withConfig({componentId:"sc-fadb2cbd-1"})`
  display: flex;
`,g=c.ZP.span.withConfig({componentId:"sc-fadb2cbd-2"})`
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
`;t.Z=function(){let[e,t]=(0,d.useState)(!0),[n,s]=(0,d.useState)(0n),[c,m]=(0,d.useState)(0n),[b,w]=(0,d.useState)(0n),{address:v}=(0,f.mA)(),[j,y]=(0,r.KO)(a.mevETHBalance),[C,E]=(0,r.KO)(a.depositedETHBalance),[S,Z]=(0,d.useState)(0xe172a7bc98947f5n),[k,F]=(0,d.useState)(0n),{data:I,error:T}=(0,f.do)({address:o.W7,abi:p.yS,functionName:"balanceOf",args:[v||"0x0"],enabled:!!v,watch:!0}),{data:P,error:$,isSuccess:M}=(0,f.do)({address:o.W7,abi:p.yS,functionName:"convertToAssets",args:[I||0xde0b6b3a7640000n],enabled:!0,watch:!0}),{data:H}=(0,f.do)({address:"0xf518f2EbeA5df8Ca2B5E9C7996a2A25e8010014b",abi:[{inputs:[],name:"getRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],functionName:"getRate",enabled:!0,watch:!1}),A=()=>{t(window.matchMedia("(max-width: 768px)").matches)};return(0,d.useEffect)(()=>{t(window.matchMedia("(max-width: 768px)").matches),window.addEventListener("resize",A,!1)},[]),(0,d.useEffect)(()=>{if(P){console.log("userMevETHBalance 111",I),console.log("userConvertToAssets 111",P);let e=P-0xde0b6b3a7640000n;I&&(e=P-I),s(e),console.log("assets",P),m(I||0xde0b6b3a7640000n),y(I?parseFloat((0,l.d)(I)).toFixed(3).toString():"0"),E(I?parseFloat((0,l.d)(P)).toFixed(3).toString():"0"),w(P)}H&&Z(H),b&&F(b)},[I,P,H,b]),console.log("rewardsiiii",n,H,b),(0,i.jsxs)(u,{children:[e?null:(0,i.jsxs)(g,{children:[(0,i.jsxs)("a",{href:"#",color:"red",title:`1 mevETH = ${parseFloat((0,l.d)(S)).toFixed(c?5:1)} ETH`,style:{display:"flex",alignItems:"center"},children:[(0,i.jsxs)("div",{style:{alignSelf:"start",marginRight:"auto"},children:[`${parseFloat((0,l.d)(c)).toFixed(0xde0b6b3a7640000n===c?1:3)}`," "]}),(0,i.jsx)("img",{style:{alignSelf:"start",marginRight:"auto"},src:"/svg/MEV-logo-token.SVG",width:"24px",height:"24px"}),(0,i.jsxs)("div",{children:[" ",` = ${parseFloat((0,l.d)(k)).toFixed(3)}`]}),(0,i.jsx)("img",{style:{alignSelf:"start",marginRight:"auto"},src:"/svg/eth.svg",width:"24px",height:"24px"})]}),(0,i.jsx)(h,{target:"_blank",href:"https://x.com/",children:"\uD835\uDD4F"})]}),(0,i.jsx)(x.Z,{style:{marginTop:3},href:"/stake",children:"Start staking ETH"})]})}},35854:function(e,t,n){n.d(t,{RK:function(){return d},cD:function(){return r},dJ:function(){return s},rL:function(){return c},x7:function(){return a}});var i=n(43120),o=n(51192);let a=o.ZP.div.withConfig({componentId:"sc-11156ab2-0"})`
  background: #212738;
  width: 100%;
  height: 52px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  @media ${i.U.mobileS} {
    padding: 0 16px;
  }
`,s=o.ZP.div.withConfig({componentId:"sc-11156ab2-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`,r=o.ZP.div.withConfig({componentId:"sc-11156ab2-2"})`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.selected?"#FFFFFF":"#A3A9C2"};

  // if onClick is defined, then it is clickable, and we define the hover state
  ${e=>e.onClick&&!e.disabled&&"&:hover { cursor: pointer; color: #ffffff; }"}
  transition: color 0.2s ease-in-out;
`,d=o.ZP.div.withConfig({componentId:"sc-11156ab2-3"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  @media ${i.U.mobileS} {
    gap: 12px;
  }
`,c=(0,o.ZP)(r).withConfig({componentId:"sc-11156ab2-4"})`
  text-align: right;
`},74431:function(e,t,n){var i=n(67294);t.Z=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>{window.innerWidth<560?t(!0):t(!1)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e}},34525:function(e,t,n){n.r(t),n.d(t,{depositedETHBalance:function(){return m},mevETHBalance:function(){return g}});var i=n(85893),o=n(51232),a=n(43120),s=n(51292),r=n(15103),d=n(48583),c=n(41664),l=n.n(c),f=n(67294),p=n(51192),x=n(39625),h=n(69077),u=n(72033);let g=(0,r.cn)("0"),m=(0,r.cn)("0");function b(e){let{href:t,text:n,target:o,onClick:a,color:s,menu:r,alt:d,newItem:c}=e;return a?(0,i.jsx)(j,{onClick:a,children:n}):r?(0,i.jsx)(l(),{target:o,href:t,title:d,children:(0,i.jsx)(E,{color:s,children:n})}):c?(0,i.jsx)(l(),{target:o,href:t,color:s,title:d,children:(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{style:{color:s},children:n}),(0,i.jsx)(w,{children:"NEW"})]})}):(0,i.jsx)(l(),{target:o,href:t,color:s,title:d,children:(0,i.jsx)(j,{color:s,children:n})})}let w=p.ZP.span.withConfig({componentId:"sc-27d96e2-0"})`
  background: #185c64;
  margin-left: 5px;
  padding: 2px 4px;
  border-radius: 5px;
  border: 1px solid #1c6970;
  color: #42d8e2;
  font-weight: 600;
`,v=p.ZP.div.withConfig({componentId:"sc-27d96e2-1"})`
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
`,j=p.ZP.div.withConfig({componentId:"sc-27d96e2-2"})`
  size: 14px;
  cursor: pointer;
  @media ${a.U.mobileM} {
    white-space: nowrap;
  }
  &:hover {
    color: #00bfff;
  }
  transition: color 0.2s ease-in-out;
`,y=p.F4`
  0% { opacity: 0; transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0); }
`,C=(0,p.ZP)(s.VY).withConfig({componentId:"sc-27d96e2-3"})`
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
  animation-name: ${y};
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  :focus {
    outline: none;
  }
`,E=p.ZP.div.withConfig({componentId:"sc-27d96e2-4"})`
  ${e=>{let{color:t="red"}=e;return t}};
  padding: 16px 20px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #00bfff;
  }
  transition: color 0.2s ease-in-out;
`,S=p.ZP.div.withConfig({componentId:"sc-27d96e2-5"})`
  width: 100%;
  height: 100%;
`,Z=(0,p.ZP)(S).withConfig({componentId:"sc-27d96e2-6"})``;t.default=function(){let[e,t]=(0,f.useState)(!1),[n,a]=(0,f.useState)(window.matchMedia("(max-width: 768px)").matches),[r,c]=(0,f.useState)(0n),[l,p]=(0,f.useState)(0n),[w,y]=(0,f.useState)(0n),{address:E}=(0,h.mA)(),[k,F]=(0,d.KO)(g),[I,T]=(0,d.KO)(m),[P,$]=(0,f.useState)(null),{data:M,error:H}=(0,h.do)({address:o.W7,abi:u.yS,functionName:"balanceOf",args:[E||"0x0"],enabled:!!E,watch:!0}),{data:A,error:N,isSuccess:z}=(0,h.do)({address:o.W7,abi:u.yS,functionName:"convertToAssets",args:[M||0xde0b6b3a7640000n],enabled:!0,watch:!0}),{data:R}=(0,h.do)({address:"0xf518f2EbeA5df8Ca2B5E9C7996a2A25e8010014b",abi:[{inputs:[],name:"getRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],functionName:"getRate",enabled:!0,watch:!1});return(0,f.useEffect)(()=>{let e=localStorage.getItem("user");if(console.log("storedUser",e),e){let t=JSON.parse(e);$(t)}},[]),(0,f.useEffect)(()=>{if(A){console.log("userMevETHBalance 111",M),console.log("userConvertToAssets 111",A);let e=A-0xde0b6b3a7640000n;M&&(e=A-M),c(e),console.log("assets",A),p(M||0xde0b6b3a7640000n),F(M?parseFloat((0,x.d)(M)).toFixed(3).toString():"0"),T(M?parseFloat((0,x.d)(A)).toFixed(3).toString():"0"),y(A)}},[M,A]),(0,f.useEffect)(()=>{t("/"===window.location.pathname),window.matchMedia("(max-width: 768px)").addEventListener("change",e=>a(e.matches))},[]),console.log("rewards",r),(0,i.jsxs)(v,{children:[(0,i.jsx)(b,{onClick:e?()=>window.scrollTo({top:0,behavior:"smooth"}):void 0,href:"/",text:"Home"}),n?(0,i.jsxs)(s.fC,{children:[(0,i.jsx)(s.xz,{asChild:!0,children:(0,i.jsx)(j,{children:" Explore "})}),(0,i.jsxs)(C,{avoidCollisions:!0,sideOffset:13,children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(b,{href:"/team",text:"Team",menu:!0}),(0,i.jsx)(b,{href:"/redeemCreamETH2",text:"Migrate",menu:!0})]}),(0,i.jsxs)(Z,{children:[(0,i.jsx)(b,{href:"/stake",text:"mevETH",menu:!0}),(0,i.jsx)(b,{href:"https://blog.mev.io",text:"Blog"}),(0,i.jsx)(b,{href:"/redemptions",text:"Redemptions",menu:!0})]}),(0,i.jsx)(s.Eh,{})]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{href:"/stake",text:"mevETH"}),(0,i.jsx)(b,{href:"/redemptions",text:"Redemptions"})]})]})}}}]);
//# sourceMappingURL=3320-26c45243f1582bda.js.map