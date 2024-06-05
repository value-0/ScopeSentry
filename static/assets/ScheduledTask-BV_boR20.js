import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DrNfIFWG.js";import{d as t,r as a,N as l,e as o,a1 as s,X as i,Q as n,Y as r,o as d,i as u,w as p,a as c,H as m,t as f,Z as g,I as v,f as _,$ as y,a0 as h,l as b,a2 as j}from"./index-CD5z-L2p.js";import{E as x,a as k}from"./el-col-Cat2GRqi.js";import{E as S}from"./el-text-CilhT5JB.js";import{a as w,E as V}from"./el-tab-pane-RgcbHr8c.js";import{E as I,a as N}from"./el-form-item-DMczFwFk.js";import{E}from"./el-input-number-CPg7IL_L.js";import"./el-tag-l9P6F3bC.js";import{E as P}from"./el-popper-DZWDgZ8T.js";import{E as T}from"./el-select-v2-6RS1ZV2R.js";import{E as C}from"./el-checkbox-CSYOfx66.js";import"./el-tooltip-l0sNRNKZ.js";import{E as U}from"./el-switch-CfMEB_VU.js";import{_ as A}from"./Table.vue_vue_type_script_lang-kikzg7Gy.js";import{u as D}from"./useTable-CD6z3NBi.js";import{u as z}from"./useIcon-D8J_96up.js";import{a as L,s as M,b as W,u as H}from"./index-C6kHfOB3.js";import{_ as R}from"./Dialog.vue_vue_type_style_index_0_lang-GTofo2ER.js";import{_ as F}from"./AddTask.vue_vue_type_script_setup_true_lang-yvyd-Vfo.js";import{_ as O}from"./AddProject.vue_vue_type_script_setup_true_lang-CYO76tMJ.js";import{_ as B}from"./PageMonit.vue_vue_type_script_setup_true_lang-DY1OwNHX.js";import{a as Q}from"./index-DS0APOyv.js";import{_ as q}from"./ProgressInfo.vue_vue_type_script_setup_true_lang-pgHAxIiP.js";import"./el-card-BSi8b6QZ.js";import"./useInput-C5WeYUR4.js";import"./debounce-BQFtq4AG.js";import"./castArray-mNLLonyd.js";import"./raf-CfzBOZZn.js";import"./el-pagination-D8F1T4Jn.js";import"./el-image-viewer-Cro4p8GN.js";import"./tsxHelper-CG14TR21.js";import"./el-dropdown-item-DuGKGSIn.js";import"./refs-Cpmhc2B7.js";import"./index-ajI7YjOc.js";import"./index-BZommXV1.js";/* empty css                          */import"./el-divider-BqiFvRo_.js";import"./el-radio-group-eBjY_ehg.js";import"./index-BBhwX1eC.js";import"./index-ByzqBSpM.js";const G={class:"mb-10px"},J={style:{position:"relative",top:"12px"}};function K(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!h(e)}const X=t({__name:"ScheduledTask",setup(t){const h=z({icon:"iconoir:search"}),{t:X}=b(),Y=a(""),Z=()=>{fe()},$=l([{field:"selection",type:"selection",width:"55"},{field:"name",label:X("task.taskName"),minWidth:30},{field:"cycle",label:X("task.taskCycle")+"(h)",minWidth:20},{field:"type",label:X("task.typeTask"),minWidth:20},{field:"lastTime",label:X("task.lastTime"),minWidth:40,formatter:(e,t,a)=>""==a?"-":a},{field:"nextTime",label:X("task.nextTime"),minWidth:40,formatter:(e,t,a)=>""==a||0==e.state?"-":a},{field:"state",label:X("common.state"),minWidth:20,formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",i="";return 1==a?(l="#2eb98a",i=X("common.on")):(l="red",i=X("common.statusStop")),o(k,{gutter:20},{default:()=>[o(x,{span:1},{default:()=>[o(s,{icon:"clarity:circle-solid",color:l},null)]}),o(x,{span:5},{default:()=>[o(S,{type:"info"},K(i)?i:{default:()=>[i]})]})]})}},{field:"action",label:X("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,s,r,d,u="";return u="Scan"==e.type?"scan":"project",o(n,null,["page_monitoring"===e.id?o(i,{type:"success",onClick:()=>Me(e)},K(l=X("common.edit"))?l:{default:()=>[l]}):o(n,null,[o(i,{type:"success",onClick:()=>Se(e)},K(s=X("common.edit"))?s:{default:()=>[s]}),o(i,{type:"danger",onClick:()=>Ve(e)},K(r=X("common.delete"))?r:{default:()=>[r]}),o(i,{type:"primary",onClick:()=>oe(e.id,u,e.runner_id)},K(d=X("task.taskProgress"))?d:{default:()=>[d]})])])}}]),ee=a(!1);let te="",ae="",le="";const oe=async(e,t,a)=>{te=e,ae=t,le=a,ee.value=!0},se=()=>{ee.value=!1},{tableRegister:ie,tableState:ne,tableMethods:re}=D({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=ne,a=await W(Y.value,e.value,t.value);return{list:a.data.list,total:a.data.total}},immediate:!1}),{loading:de,dataList:ue,total:pe,currentPage:ce,pageSize:me}=ne;me.value=20;const{getList:fe,getElTableExpose:ge}=re;function ve(){return{background:"var(--el-fill-color-light)"}}const _e=a(!1);let ye=X("task.addTask");const he=()=>{_e.value=!1};let be=l({name:"",target:"",node:[],subdomainScan:!0,duplicates:"",subdomainConfig:[],urlScan:!0,sensitiveInfoScan:!0,pageMonitoring:"JS",crawlerScan:!0,vulScan:!1,vulList:[],portScan:!1,ports:"",dirScan:!0,waybackurl:!0,scheduledTasks:!0,hour:24,allNode:!1}),je="",xe="",ke=a(!0);const Se=async e=>{if("Scan"==e.type){xe=e.id;const t=await L(e.id);if(200===t.code){const e=t.data;be.name=e.name,be.target=e.target,be.node=e.node,be.subdomainScan=e.subdomainScan,be.subdomainConfig=e.subdomainConfig,be.urlScan=e.urlScan,be.sensitiveInfoScan=e.sensitiveInfoScan,be.pageMonitoring=e.pageMonitoring,be.crawlerScan=e.crawlerScan,be.vulScan=e.vulScan,be.vulList=e.vulList,be.portScan=e.portScan,be.ports=e.ports,be.dirScan=e.dirScan,be.waybackurl=e.waybackurl,be.scheduledTasks=e.scheduledTasks,be.hour=e.hour,be.allNode=e.allNode,be.duplicates=e.duplicates,_e.value=!0}}else je=e.id,Ue.value=!0;ye=X("common.edit")},we=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await Pe()},Ve=async e=>{window.confirm("Are you sure you want to delete the selected data?")&&await Ne(e)},Ie=a(!1),Ne=async e=>{Ie.value=!0;try{await M([e.id]);Ie.value=!1,fe()}catch(t){Ie.value=!1,fe()}},Ee=a([]),Pe=async()=>{const e=await ge(),t=(null==e?void 0:e.getSelectionRows())||[];Ee.value=t.map((e=>e.id)),Ie.value=!0;try{await M(Ee.value);Ie.value=!1,fe()}catch(a){Ie.value=!1,fe()}};r((()=>{Ce(),window.addEventListener("resize",Ce)}));const Te=a(0),Ce=()=>{const e=window.innerHeight||document.documentElement.clientHeight;Te.value=.75*e},Ue=a(!1),Ae=()=>{Ue.value=!1},De=a(!1),ze=a(!1),Le=l({hour:24,allNode:!0,node:[],state:!0}),Me=async e=>{Le.hour=e.cycle,Le.allNode=e.allNode,Le.node=e.node,Le.state=e.state,De.value=!0},We=l([]),He=a(!1),Re=a(!1),Fe=e=>{He.value=!1,e?(Le.allNode=!0,Le.node=[],We.forEach((e=>Le.node.push(e.value)))):(Le.allNode=!1,Le.node=[])};return(async()=>{const e=await Q();e.data.list.length>0?(Re.value=!1,e.data.list.forEach((e=>{We.push({value:e,label:e})}))):(Re.value=!0,j.warning(X("node.onlineNodeMsg")))})(),(t,a)=>(d(),u(c(e),null,{default:p((()=>[o(c(k),null,{default:p((()=>[o(c(x),{span:1},{default:p((()=>[o(c(S),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:p((()=>[m(f(c(X)("task.taskName"))+":",1)])),_:1})])),_:1}),o(c(x),{span:5},{default:p((()=>[o(c(g),{modelValue:Y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>Y.value=e),placeholder:c(X)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(c(x),{span:5,style:{position:"relative",left:"16px"}},{default:p((()=>[o(c(v),{type:"primary",icon:c(h),style:{height:"100%"},onClick:Z},{default:p((()=>[m("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(c(k),null,{default:p((()=>[o(c(x),{style:{position:"relative",top:"16px"}},{default:p((()=>[_("div",G,[o(c(i),{type:"danger",loading:Ie.value,onClick:we},{default:p((()=>[m(f(c(X)("task.delTask")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),_("div",J,[o(c(A),{"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},pageSize:c(me),"onUpdate:pageSize":a[1]||(a[1]=e=>y(me)?me.value=e:null),currentPage:c(ce),"onUpdate:currentPage":a[2]||(a[2]=e=>y(ce)?ce.value=e:null),columns:$,data:c(ue),stripe:"",border:!0,loading:c(de),"max-height":Te.value,resizable:!0,pagination:{total:c(pe),pageSizes:[20,30,50,100,200,500,1e3]},onRegister:c(ie),headerCellStyle:ve,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","max-height","pagination","onRegister"])]),o(c(R),{modelValue:_e.value,"onUpdate:modelValue":a[3]||(a[3]=e=>_e.value=e),title:c(ye),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(F,{closeDialog:he,getList:c(fe),vTaskForm:c(be),create:c(ke),taskid:c(xe),schedule:!0},null,8,["getList","vTaskForm","create","taskid"])])),_:1},8,["modelValue","title"]),o(c(R),{modelValue:Ue.value,"onUpdate:modelValue":a[4]||(a[4]=e=>Ue.value=e),title:c(X)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(O,{closeDialog:Ae,projectid:c(je),getProjectData:c(fe),schedule:!1},null,8,["projectid","getProjectData"])])),_:1},8,["modelValue","title"]),o(c(R),{modelValue:De.value,"onUpdate:modelValue":a[10]||(a[10]=e=>De.value=e),title:c(X)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(c(w),{type:"card"},{default:p((()=>[o(c(V),{label:c(X)("router.configuration")},{default:p((()=>[o(c(I),{model:Le,"label-width":"100px","status-icon":"",ref:"ruleFormRef"},{default:p((()=>[o(c(P),{content:c(X)("task.selectNodeMsg"),placement:"top"},{default:p((()=>[o(c(N),{label:c(X)("task.nodeSelect"),prop:"node"},{default:p((()=>[o(c(T),{modelValue:Le.node,"onUpdate:modelValue":a[6]||(a[6]=e=>Le.node=e),filterable:"",options:We,placeholder:"Please select node",style:{width:"80%"},multiple:"","tag-type":"success","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":7},{header:p((()=>[o(c(C),{modelValue:Le.allNode,"onUpdate:modelValue":a[5]||(a[5]=e=>Le.allNode=e),disabled:Re.value,indeterminate:He.value,onChange:Fe},{default:p((()=>[m(" All ")])),_:1},8,["modelValue","disabled","indeterminate"])])),_:1},8,["modelValue","options"])])),_:1},8,["label"])])),_:1},8,["content"]),o(c(N),{label:c(X)("project.cycle"),prop:"type"},{default:p((()=>[o(c(E),{modelValue:Le.hour,"onUpdate:modelValue":a[7]||(a[7]=e=>Le.hour=e),min:1,"controls-position":"right",size:"small"},null,8,["modelValue"]),o(c(S),{style:{position:"relative",left:"16px"}},{default:p((()=>[m("Hour")])),_:1})])),_:1},8,["label"]),o(c(N),{label:c(X)("common.state")},{default:p((()=>[o(c(U),{modelValue:Le.state,"onUpdate:modelValue":a[8]||(a[8]=e=>Le.state=e),"inline-prompt":"","active-text":c(X)("common.switchAction"),"inactive-text":c(X)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),o(c(k),null,{default:p((()=>[o(c(x),{span:2,offset:8},{default:p((()=>[o(c(N),null,{default:p((()=>[o(c(v),{type:"primary",onClick:a[9]||(a[9]=e=>(async()=>{ze.value=!0,await H(Le.hour,Le.node,Le.allNode,Le.state),ze.value=!1,fe()})()),loading:ze.value},{default:p((()=>[m(f(c(X)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["label"]),o(c(V),{label:c(X)("task.data")},{default:p((()=>[o(B)])),_:1},8,["label"])])),_:1})])),_:1},8,["modelValue","title"]),o(c(R),{modelValue:ee.value,"onUpdate:modelValue":a[11]||(a[11]=e=>ee.value=e),title:c(X)("task.taskProgress"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},width:"70%","max-height":"700"},{default:p((()=>[o(q,{closeDialog:se,getProgressInfoID:c(te),getProgressInfotype:c(ae),getProgressInforunnerid:c(le)},null,8,["getProgressInfoID","getProgressInfotype","getProgressInforunnerid"])])),_:1},8,["modelValue","title"])])),_:1}))}});export{X as default};
