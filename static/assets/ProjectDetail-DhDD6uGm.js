import{_ as e}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-BvgtTC0l.js";import{d as a,u as t,R as s,N as o,r as l,U as r,V as p,o as i,c as n,e as c,W as m,i as u,w as d,H as j,t as _,a as f,Q as g,l as b}from"./index-CD5z-L2p.js";import{D as v}from"./Descriptions-CcjoRglo.js";import{g as x}from"./index-eTp9NqRp.js";import{P as y}from"./PanelGroup-6WQ4AYtW.js";import"./el-card-BSi8b6QZ.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DZWDgZ8T.js";import"./el-col-Cat2GRqi.js";import"./index-DPLKM-Z5.js";import"./index-BZommXV1.js";import"./CountTo.vue_vue_type_script_setup_true_lang-nt27erSd.js";const D=a({__name:"ProjectDetail",setup(a){const{push:D,go:C}=t(),{t:T}=b(),{query:h}=s(),P=o([{field:"name",label:T("project.projectName"),span:8},{field:"cycle",label:T("project.cycle"),span:8},{field:"creatTime",label:T("project.CreatTime"),span:8},{field:"TAG",label:"TAG",span:8},{field:"scope",label:T("project.projectScope"),span:16}]),k=l(!0);let B=o({});return(async()=>{const e=await x(h.id);e&&(B=Object.assign(B,(null==e?void 0:e.data)||{}),k.value=!1)})(),(a,t)=>{const s=r("BaseButton"),o=p("loading");return i(),n(g,null,[c(y),m((i(),u(f(e),{title:f(T)("exampleDemo.detail"),onBack:t[1]||(t[1]=e=>f(D)("/project-management/index"))},{header:d((()=>[c(s,{onClick:t[0]||(t[0]=e=>f(C)(-1))},{default:d((()=>[j(_(f(T)("common.back")),1)])),_:1})])),default:d((()=>[c(f(v),{title:f(T)("project.projectDetail"),schema:P,data:f(B)},null,8,["title","schema","data"])])),_:1},8,["title"])),[[o,k.value]])],64)}}});export{D as default};
