import{d as a,b as o,r as e,o as s,i as l,n,a as c,k as t,_ as r,ao as i,ap as m,aq as d,ar as u,as as p,a5 as g,at as _,B as f,U as v,w as h,e as w,c as j,a4 as L,Q as C,H as b,t as I}from"./index-CD5z-L2p.js";import{E as k}from"./el-switch-CfMEB_VU.js";import{u as E}from"./useIcon-D8J_96up.js";import{E as D,a as V,b as x}from"./el-dropdown-item-DuGKGSIn.js";import"./el-popper-DZWDgZ8T.js";const P="var(--el-color-black)",T=r(a({__name:"ThemeSwitch",setup(a){const{getPrefixCls:r}=t(),i=r("theme-switch"),m=E({icon:"emojione-monotone:sun",color:"#fde047"}),d=E({icon:"emojione-monotone:crescent-moon",color:"#fde047"}),u=o(),p=e(u.getIsDark),g=a=>{u.setIsDark(a)};return(a,o)=>(s(),l(c(k),{class:n(c(i)),modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=a=>p.value=a),"inline-prompt":"","border-color":P,"inactive-color":P,"active-color":P,"active-icon":c(m),"inactive-icon":c(d),onChange:g},null,8,["class","modelValue","active-icon","inactive-icon"]))}}),[["__scopeId","data-v-52ce9834"]]),y=()=>({changeLocale:async a=>{const o=i.global,e=await m(Object.assign({"../../locales/en.ts":()=>d((()=>import("./en-CqnmpH5V.js")),__vite__mapDeps([])),"../../locales/zh-CN.ts":()=>d((()=>import("./zh-CN-BDLsbzk4.js")),__vite__mapDeps([]))}),`../../locales/${a}.ts`);o.setLocaleMessage(a,e.default),(a=>{const o=u();"legacy"===i.mode?i.global.locale=a:i.global.locale.value=a,o.setCurrentLocale({lang:a}),p(a)})(a)}}),z=a({__name:"LocaleDropdown",props:{color:g.string.def("")},setup(a){const{getPrefixCls:o}=t(),e=o("locale-dropdown"),r=_(),i=f((()=>r.getLocaleMap)),m=f((()=>r.getCurrentLocale)),d=a=>{if(a===c(m).lang)return;window.location.reload(),r.setCurrentLocale({lang:a});const{changeLocale:o}=y();o(a)};return(o,t)=>{const r=v("Icon");return s(),l(c(V),{class:n(c(e)),trigger:"click",onCommand:d},{dropdown:h((()=>[w(c(D),null,{default:h((()=>[(s(!0),j(C,null,L(i.value,(a=>(s(),l(c(x),{key:a.lang,command:a.lang},{default:h((()=>[b(I(a.name),1)])),_:2},1032,["command"])))),128))])),_:1})])),default:h((()=>[w(r,{size:18,icon:"ion:language-sharp",class:n(["cursor-pointer !p-0",o.$attrs.class]),color:a.color},null,8,["class","color"])])),_:1},8,["class"])}}});export{T,z as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}