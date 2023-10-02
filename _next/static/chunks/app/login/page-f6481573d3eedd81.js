(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{9428:function(e,r,o){Promise.resolve().then(o.bind(o,3759))},3759:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return _}});var t=o(7437),a=o(2265),n=o(2749),i=o(4033),l=o(1419),s=o(9116),d=o(791),c=o(3428),u=o(7042),m=o(5600),h=o(1380),p=o(9442),v=o(7615),x=o(462),g=o(4126),f=o(1122);function Z(e){return(0,f.d6)("MuiAlert",e)}(0,f.sI)("MuiAlert",["root","startDecorator","endDecorator","colorPrimary","colorDanger","colorNeutral","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid"]);var A=o(7467);let y=["children","className","color","invertedColors","role","variant","size","startDecorator","endDecorator","component","slots","slotProps"],j=e=>{let{variant:r,color:o,size:t}=e,a={root:["root",t&&`size${(0,h.Z)(t)}`,o&&`color${(0,h.Z)(o)}`,r&&`variant${(0,h.Z)(r)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,m.Z)(a,Z,{})},D=(0,p.Z)("div",{name:"JoyAlert",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>{var o,t;let{p:a,padding:n,borderRadius:i}=(0,A.V)({theme:e,ownerState:r},["p","padding","borderRadius"]);return[(0,c.Z)({"--Alert-radius":e.vars.radius.sm,"--Alert-decoratorChildRadius":"max((var(--Alert-radius) - var(--variant-borderWidth, 0px)) - var(--Alert-padding), min(var(--Alert-padding) + var(--variant-borderWidth, 0px), var(--Alert-radius) / 2))","--Button-minHeight":"var(--Alert-decoratorChildHeight)","--IconButton-size":"var(--Alert-decoratorChildHeight)","--Button-radius":"var(--Alert-decoratorChildRadius)","--IconButton-radius":"var(--Alert-decoratorChildRadius)","--Icon-color":"currentColor"},"sm"===r.size&&{"--Alert-padding":"0.5rem","--Alert-decoratorChildHeight":"1.5rem","--Icon-fontSize":e.vars.fontSize.xl,gap:"0.5rem"},"md"===r.size&&{"--Alert-padding":"0.75rem","--Alert-decoratorChildHeight":"2rem","--Icon-fontSize":e.vars.fontSize.xl,gap:"0.625rem"},"lg"===r.size&&{"--Alert-padding":"1rem","--Alert-decoratorChildHeight":"2.375rem","--Icon-fontSize":e.vars.fontSize.xl2,gap:"0.875rem"},{backgroundColor:e.vars.palette.background.surface,display:"flex",position:"relative",alignItems:"center",padding:"var(--Alert-padding)",borderRadius:"var(--Alert-radius)"},e.typography[`body-${({sm:"xs",md:"sm",lg:"md"})[r.size]}`],{fontWeight:e.vars.fontWeight.md},null==(o=e.variants[r.variant])?void 0:o[r.color]),"context"!==r.color&&r.invertedColors&&(null==(t=e.colorInversion[r.variant])?void 0:t[r.color]),void 0!==a&&{"--Alert-padding":a},void 0!==n&&{"--Alert-padding":n},void 0!==i&&{"--Alert-radius":i}]}),C=(0,p.Z)("span",{name:"JoyAlert",slot:"StartDecorator",overridesResolver:(e,r)=>r.startDecorator})({display:"inherit",flex:"none"}),S=(0,p.Z)("span",{name:"JoyAlert",slot:"EndDecorator",overridesResolver:(e,r)=>r.endDecorator})({display:"inherit",flex:"none",marginLeft:"auto"}),z=a.forwardRef(function(e,r){let o=(0,v.Z)({props:e,name:"JoyAlert"}),{children:n,className:i,color:l="neutral",invertedColors:s=!1,role:m="alert",variant:h="soft",size:p="md",startDecorator:f,endDecorator:Z,component:A,slots:z={},slotProps:b={}}=o,w=(0,d.Z)(o,y),{getColor:P}=(0,x.VT)(h),I=P(e.color,l),R=(0,c.Z)({},o,{color:I,variant:h,size:p}),k=j(R),N=(0,c.Z)({},w,{component:A,slots:z,slotProps:b}),[_,H]=(0,g.Z)("root",{ref:r,className:(0,u.Z)(k.root,i),elementType:D,externalForwardedProps:N,ownerState:R,additionalProps:{role:m}}),[T,E]=(0,g.Z)("startDecorator",{className:k.startDecorator,elementType:C,externalForwardedProps:N,ownerState:R}),[M,V]=(0,g.Z)("endDecorator",{className:k.endDecorator,elementType:S,externalForwardedProps:N,ownerState:R}),W=(0,t.jsxs)(a.Fragment,{children:[f&&(0,t.jsx)(T,(0,c.Z)({},E,{children:f})),n,Z&&(0,t.jsx)(M,(0,c.Z)({},V,{children:Z}))]});return(0,t.jsx)(_,(0,c.Z)({},H,{children:s?(0,t.jsx)(x.do,{variant:h,children:W}):W}))});var b=o(9219),w=o(8767),P=o(5999),I=o(3969),R=o(6347),k=o(3455),N=o(3014);function _(){let[e,r]=(0,a.useState)({username:"",password:""}),o=(0,i.useRouter)(),d=o=>{let{name:t,value:a}=o.target;r({...e,[t]:a})},c=async r=>{r.preventDefault();try{let r=await (0,n.signIn)("credentials",{...e,username:e.username.split("@")[0],redirect:!1});(null==r?void 0:r.error)?N.Am.error("Sai email hoặc mật khẩu!"):o.push("/")}catch(e){console.error("Đ\xe3 xảy ra lỗi:",e)}};return(0,t.jsxs)(l.Z,{sx:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",alignItems:"center",minHeight:"70vh"},children:[(0,t.jsx)(N.Ix,{}),(0,t.jsxs)(l.Z,{sx:{width:300,mx:"auto",my:4,py:3,px:2,display:"flex",flexDirection:"column",gap:2,borderRadius:"sm",boxShadow:"md"},variant:"outlined",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(s.ZP,{level:"h4",component:"h1",children:(0,t.jsx)("strong",{children:"VNPT Đồng Th\xe1p xin ch\xe0o"})}),(0,t.jsx)(s.ZP,{level:"body-sm",children:"Đăng nhập để tiếp tục."})]}),(0,t.jsx)(z,{color:"danger",variant:"outlined",children:"Sai email hoặc mật khẩu!"}),(0,t.jsxs)("form",{onSubmit:c,children:[(0,t.jsxs)(b.Z,{id:"email",children:[(0,t.jsx)(w.Z,{children:"Email"}),(0,t.jsx)(P.ZP,{name:"username",type:"email",placeholder:"username",value:e.username,required:!0,onChange:d}),(0,t.jsx)(I.Z,{children:"Với email VNPT, v\xed dụ: abc@vnpt.vn"})]}),(0,t.jsxs)(b.Z,{id:"password",children:[(0,t.jsx)(w.Z,{children:"Password"}),(0,t.jsx)(P.ZP,{name:"password",type:"password",placeholder:"password",required:!0,value:e.password,onChange:d})]}),(0,t.jsx)(R.Z,{sx:{mt:1,alignSelf:"center"},type:"submit",children:"1 2 3 Dz\xf4"})]}),(0,t.jsx)(s.ZP,{endDecorator:(0,t.jsx)(k.Z,{href:"/sign-up",children:"Đăng k\xfd"}),fontSize:"sm",sx:{alignSelf:"center"},children:"Chưa c\xf3 t\xe0i khoản?"})]})]})}o(4193)},6314:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[511,843,749,201,971,864,744],function(){return e(e.s=9428)}),_N_E=e.O()}]);