import{d as a,N as e,a6 as l,r,o,c as t,e as d,w as s,a as i,f as m,t as n,Z as u,I as p,H as c,Q as f,l as h,_ as T}from"./index-RTeQX4Z1.js";import{a as _,E as j}from"./el-col-Clk25fNT.js";import{E as x,a as g}from"./el-form-item-Bth-RQFo.js";import{E as b}from"./el-text-CpyCtW8d.js";import{E as U}from"./el-divider-C9tmp1am.js";import{E as V}from"./el-card-DvuZ99w3.js";import w from"./notification-BtPbGLI5.js";import{g as y,s as N}from"./index-BOrHp3BX.js";import"./castArray-Cj9r5Aws.js";import"./el-radio-group-C3cxfPRm.js";import"./el-switch-CXN3V_sb.js";import"./Dialog.vue_vue_type_style_index_0_lang-k1HJRGzw.js";import"./refs-BEkOJGIm.js";import"./el-popper-BiF-N6C2.js";import"./Table.vue_vue_type_script_lang-ZyLIndS7.js";import"./el-checkbox-bH4fVny5.js";import"./useInput-Bmcy5cuV.js";import"./debounce-DUkqpuCQ.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-tag-DQ-f6KyF.js";import"./el-select-2HzOgPi7.js";import"./el-image-viewer-CRlDfJN9.js";import"./tsxHelper-b5SIzQmu.js";import"./el-dropdown-item-D_iEt1B1.js";import"./index-hI19neGk.js";import"./raf-BzIIckEj.js";import"./useTable-C6AO1hlT.js";import"./index-EWI9jeY3.js";const v=T(a({__name:"system",setup(a){const{t:T}=h(),v=e({timezone:"",MaxTaskNum:"",DirscanThread:"",PortscanThread:"",CrawlerThread:"",UrlThread:"",UrlMaxNum:""});l((async()=>{try{const a=await y();200==a.code&&(v.timezone=a.data.timezone,v.MaxTaskNum=a.data.MaxTaskNum,v.DirscanThread=a.data.DirscanThread,v.PortscanThread=a.data.PortscanThread,v.CrawlerThread=a.data.CrawlerThread,v.UrlThread=a.data.UrlThread,v.UrlMaxNum=a.data.UrlMaxNum)}catch(a){}}));const M=async()=>{window.confirm("Do you want to save the data?")&&await k()},k=async()=>{D.value=!0;(await N(v.timezone,v.MaxTaskNum,v.DirscanThread,v.PortscanThread,v.CrawlerThread,v.UrlThread,v.UrlMaxNum)).code,D.value=!1},D=r(!1);return(a,e)=>(o(),t(f,null,[d(i(V),{shadow:"never",class:"mb-20px"},{header:s((()=>[d(i(_),null,{default:s((()=>[d(i(j),{span:3,style:{height:"100%"}},{default:s((()=>[m("span",null,n(i(T)("configuration.system")),1)])),_:1})])),_:1})])),default:s((()=>[d(i(x),{model:v,"label-width":"auto",style:{"max-width":"460px"}},{default:s((()=>[d(i(g),{label:i(T)("configuration.timezone")},{default:s((()=>[d(i(u),{modelValue:v.timezone,"onUpdate:modelValue":e[0]||(e[0]=a=>v.timezone=a)},null,8,["modelValue"])])),_:1},8,["label"]),d(i(g),{label:i(T)("configuration.maxTaskNum")},{default:s((()=>[d(i(u),{modelValue:v.MaxTaskNum,"onUpdate:modelValue":e[1]||(e[1]=a=>v.MaxTaskNum=a)},null,8,["modelValue"])])),_:1},8,["label"]),d(i(g),{label:i(T)("configuration.dirScanThread")},{default:s((()=>[d(i(u),{modelValue:v.DirscanThread,"onUpdate:modelValue":e[2]||(e[2]=a=>v.DirscanThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),d(i(g),{label:i(T)("configuration.portScanThread")},{default:s((()=>[d(i(u),{modelValue:v.PortscanThread,"onUpdate:modelValue":e[3]||(e[3]=a=>v.PortscanThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),d(i(g),{label:i(T)("configuration.crawlerThread")},{default:s((()=>[d(i(u),{modelValue:v.CrawlerThread,"onUpdate:modelValue":e[4]||(e[4]=a=>v.CrawlerThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),d(i(g),{label:i(T)("configuration.urlThread")},{default:s((()=>[d(i(u),{modelValue:v.UrlThread,"onUpdate:modelValue":e[5]||(e[5]=a=>v.UrlThread=a)},null,8,["modelValue"])])),_:1},8,["label"]),d(i(g),{label:i(T)("configuration.maxUrlNum")},{default:s((()=>[d(i(u),{modelValue:v.UrlMaxNum,"onUpdate:modelValue":e[6]||(e[6]=a=>v.UrlMaxNum=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["model"]),d(i(_),null,{default:s((()=>[d(i(j),{span:12,offset:2},{default:s((()=>[d(i(p),{type:"primary",onClick:M,loading:D.value},{default:s((()=>[c("Save")])),_:1},8,["loading"]),d(i(U),{direction:"vertical"}),d(i(b),{size:"small",type:"danger"},{default:s((()=>[c(n(i(T)("configuration.threadMsg")),1)])),_:1})])),_:1})])),_:1})])),_:1}),d(w)],64))}}),[["__scopeId","data-v-db822305"]]);export{v as default};
