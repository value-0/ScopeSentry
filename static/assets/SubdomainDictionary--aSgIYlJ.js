import{d as a,r as s,a6 as e,o as t,i as o,w as n,e as i,a as l,f as d,t as u,I as r,H as c,l as m,_ as f}from"./index-CD5z-L2p.js";import{E as p,a as v}from"./el-col-Cat2GRqi.js";import{E as y}from"./el-card-BSi8b6QZ.js";import{j as _,o as h,T as w}from"./index-DxHWDnps.js";import{g as x,s as j}from"./index-ByzqBSpM.js";import"./index-BZommXV1.js";const b=f(a({__name:"SubdomainDictionary",setup(a){const{t:f}=m(),b=s(""),g=[_(),h];e((async()=>{try{const a=await x();200===a.code&&(b.value=a.data.dict)}catch(a){}}));const D=async()=>{window.confirm("Do you want to save the data?")&&await E()},E=async()=>{V.value=!0;200==(await j(b.value)).code&&(V.value=!1)},V=s(!1);return(a,s)=>(t(),o(l(y),{shadow:"never",class:"mb-20px"},{header:n((()=>[i(l(v),null,{default:n((()=>[i(l(p),{span:3,style:{height:"100%"}},{default:n((()=>[d("span",null,u(l(f)("router.subdomainDictionary")),1)])),_:1}),i(l(p),{span:2,offset:19},{default:n((()=>[i(l(r),{type:"primary",onClick:D,onLoading:V.value},{default:n((()=>[c(u(l(f)("common.save")),1)])),_:1},8,["onLoading"])])),_:1})])),_:1})])),default:n((()=>[i(l(w),{modelValue:b.value,"onUpdate:modelValue":s[0]||(s[0]=a=>b.value=a),style:{height:"800px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:g},null,8,["modelValue"])])),_:1}))}}),[["__scopeId","data-v-f8c99656"]]);export{b as default};
