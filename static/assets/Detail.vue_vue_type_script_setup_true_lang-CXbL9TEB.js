import{d as e,dE as l,r as a,N as o,o as t,i as s,w as u,e as n,a as i,Z as r,I as m,H as d,t as p,l as v}from"./index-CD5z-L2p.js";import{a as c,E as f}from"./el-form-item-DMczFwFk.js";import{E as g,a as b}from"./el-col-Cat2GRqi.js";import{E as _}from"./el-divider-BqiFvRo_.js";import"./el-tag-l9P6F3bC.js";import"./el-popper-DZWDgZ8T.js";import{E as h}from"./el-select-v2-6RS1ZV2R.js";import{j,o as w,T as V}from"./index-DxHWDnps.js";import{u as y,c as x}from"./index-BBhwX1eC.js";const E=e({__name:"Detail",props:{closeDialog:{type:Function},getList:{type:Function},pocForm:{}},setup(e){const{t:E}=v(),F=[j(),w],k=e,{pocForm:D}=l(k),M=a({...D.value}),U=o({name:[{required:!0,message:E("poc.nameMsg"),trigger:"blur"}],level:[{required:!0,message:E("poc.contentMsg"),trigger:"blur"}]}),q=[{value:6,label:"critical"},{value:5,label:"high"},{value:4,label:"info"},{value:3,label:"low"},{value:2,label:"medium"},{value:1,label:"unkown"}],L=a(!1),N=a();return(e,l)=>(t(),s(i(f),{model:M.value,"label-width":"120px",rules:U,"status-icon":"",ref_key:"ruleFormRef",ref:N},{default:u((()=>[n(i(c),{label:i(E)("poc.pocName"),prop:"name"},{default:u((()=>[n(i(r),{modelValue:M.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>M.value.name=e),placeholder:i(E)("poc.nameMsg")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),n(i(c),{label:i(E)("poc.content"),prop:"content"},{default:u((()=>[n(i(V),{modelValue:M.value.content,"onUpdate:modelValue":l[1]||(l[1]=e=>M.value.content=e),style:{height:"600px",width:"100%"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:F},null,8,["modelValue"])])),_:1},8,["label"]),n(i(c),{label:i(E)("poc.level")},{default:u((()=>[n(i(h),{modelValue:M.value.level,"onUpdate:modelValue":l[2]||(l[2]=e=>M.value.level=e),placeholder:"Please select level",options:q},null,8,["modelValue"])])),_:1},8,["label"]),n(i(_)),n(i(b),null,{default:u((()=>[n(i(g),{span:2,offset:8},{default:u((()=>[n(i(c),null,{default:u((()=>[n(i(m),{type:"primary",onClick:l[3]||(l[3]=e=>(async e=>{L.value=!0,e&&await e.validate((async(e,l)=>{if(e){let e;e=""!=M.value.id?await y(M.value.id,M.value.name,M.value.content,M.value.level):await x(M.value.name,M.value.content,M.value.level),200===e.code&&(k.getList(),k.closeDialog()),L.value=!1}else L.value=!1}))})(N.value)),loading:L.value},{default:u((()=>[d(p(i(E)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"]))}});export{E as _};
