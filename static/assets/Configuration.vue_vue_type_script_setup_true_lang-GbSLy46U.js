import{d as a,dE as e,r as l,Y as u,o,i as t,w as d,e as r,a as n,Z as s,I as m,H as i,t as v,l as c}from"./index-CD5z-L2p.js";import{a as p,E as f}from"./el-form-item-DMczFwFk.js";import{E as T,a as h}from"./el-col-Cat2GRqi.js";import{E as V}from"./el-switch-CfMEB_VU.js";import{E as b}from"./el-divider-BqiFvRo_.js";import{E as x}from"./el-text-CilhT5JB.js";import{u as _}from"./index-DS0APOyv.js";const g=a({__name:"Configuration",props:{closeDialog:{type:Function},getList:{type:Function},nodeConfForm:{}},setup(a){const{t:g}=c(),N=a,{nodeConfForm:w}=e(N),k=l({...w.value}),U=l(!1),y=l(!1),j=l(!1);u((()=>{"1"===k.value.state?(j.value=!0,y.value=!1):"2"===k.value.state?(j.value=!1,y.value=!1):"3"===k.value.state&&(j.value=!1,y.value=!0)}));const M=l();return(a,e)=>(o(),t(n(f),{model:k.value,"label-width":"auto","status-icon":"",ref_key:"ruleFormRef",ref:M},{default:d((()=>[r(n(p),{label:n(g)("node.nodeName"),prop:"name"},{default:d((()=>[r(n(s),{modelValue:k.value.name,"onUpdate:modelValue":e[0]||(e[0]=a=>k.value.name=a),disabled:""},null,8,["modelValue"])])),_:1},8,["label"]),r(n(p),{label:n(g)("configuration.maxTaskNum"),prop:"MaxTaskNum"},{default:d((()=>[r(n(s),{modelValue:k.value.maxTaskNum,"onUpdate:modelValue":e[1]||(e[1]=a=>k.value.maxTaskNum=a)},null,8,["modelValue"])])),_:1},8,["label"]),r(n(p),{label:n(g)("configuration.portScanThread"),prop:"portscanThread"},{default:d((()=>[r(n(s),{modelValue:k.value.portscanThread,"onUpdate:modelValue":e[2]||(e[2]=a=>k.value.portscanThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),r(n(p),{label:n(g)("configuration.dirScanThread"),prop:"dirscanThread"},{default:d((()=>[r(n(s),{modelValue:k.value.dirscanThread,"onUpdate:modelValue":e[3]||(e[3]=a=>k.value.dirscanThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),r(n(p),{label:n(g)("configuration.crawlerThread"),prop:"crawlerThread"},{default:d((()=>[r(n(s),{modelValue:k.value.crawlerThread,"onUpdate:modelValue":e[4]||(e[4]=a=>k.value.crawlerThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),r(n(p),{label:n(g)("configuration.urlThread"),prop:"MaxTaskNum"},{default:d((()=>[r(n(s),{modelValue:k.value.urlThread,"onUpdate:modelValue":e[5]||(e[5]=a=>k.value.urlThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),r(n(p),{label:n(g)("configuration.maxUrlNum"),prop:"MaxTaskNum"},{default:d((()=>[r(n(s),{modelValue:k.value.urlMaxNum,"onUpdate:modelValue":e[6]||(e[6]=a=>k.value.urlMaxNum=a)},null,8,["modelValue"])])),_:1},8,["label"]),r(n(p),{label:n(g)("common.state")},{default:d((()=>[r(n(V),{modelValue:j.value,"onUpdate:modelValue":e[7]||(e[7]=a=>j.value=a),"inline-prompt":"","active-text":n(g)("common.switchAction"),"inactive-text":n(g)("common.switchInactive"),disabled:y.value},null,8,["modelValue","active-text","inactive-text","disabled"])])),_:1},8,["label"]),r(n(h),null,{default:d((()=>[r(n(T),{span:16,offset:8},{default:d((()=>[r(n(p),null,{default:d((()=>[r(n(m),{type:"primary",onClick:e[8]||(e[8]=a=>(async a=>{U.value=!0,a&&await a.validate((async(a,e)=>{if(a){let a;a=await _(k.value.name,k.value.maxTaskNum,k.value.dirscanThread,k.value.portscanThread,k.value.crawlerThread,j.value,k.value.urlThread,k.value.urlMaxNum),200===a.code&&(N.getList(),N.closeDialog()),U.value=!1}else U.value=!1}))})(M.value)),loading:U.value},{default:d((()=>[i(v(n(g)("task.save")),1)])),_:1},8,["loading"]),r(n(b),{direction:"vertical"}),r(n(x),{size:"small",type:"danger"},{default:d((()=>[i(v(n(g)("configuration.threadMsg")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]))}});export{g as _};
