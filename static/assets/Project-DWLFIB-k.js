import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DrNfIFWG.js";import{d as t,N as a,r as l,U as s,o,c as i,e as r,w as p,a as u,H as n,t as m,Z as d,I as c,f as j,Q as _,a4 as v,l as f,i as g}from"./index-CD5z-L2p.js";import{a as x,E as y}from"./el-tab-pane-RgcbHr8c.js";import{a as b,E as h}from"./el-col-Cat2GRqi.js";import{_ as A}from"./ProjectList.vue_vue_type_style_index_0_lang-DLEfW8Wi.js";import{_ as P,g as k}from"./AddProject.vue_vue_type_script_setup_true_lang-CYO76tMJ.js";import{_ as D}from"./Dialog.vue_vue_type_style_index_0_lang-GTofo2ER.js";import{u as w}from"./useIcon-D8J_96up.js";import"./el-card-BSi8b6QZ.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DZWDgZ8T.js";import"./useInput-C5WeYUR4.js";import"./debounce-BQFtq4AG.js";import"./Table.vue_vue_type_script_lang-kikzg7Gy.js";import"./el-checkbox-CSYOfx66.js";import"./el-tag-l9P6F3bC.js";import"./el-pagination-D8F1T4Jn.js";import"./el-image-viewer-Cro4p8GN.js";import"./tsxHelper-CG14TR21.js";import"./el-dropdown-item-DuGKGSIn.js";import"./castArray-mNLLonyd.js";import"./refs-Cpmhc2B7.js";import"./index-ajI7YjOc.js";import"./raf-CfzBOZZn.js";/* empty css                          */import"./el-divider-BqiFvRo_.js";import"./el-form-item-DMczFwFk.js";import"./el-switch-CfMEB_VU.js";import"./el-radio-group-eBjY_ehg.js";import"./el-select-v2-6RS1ZV2R.js";import"./el-input-number-CPg7IL_L.js";import"./el-text-CilhT5JB.js";import"./index-BZommXV1.js";import"./index-BBhwX1eC.js";import"./index-ByzqBSpM.js";import"./index-DS0APOyv.js";const L={class:"mb-10px"},V=t({__name:"Project",setup(t){const{t:V}=f();let T=a({}),E=l([]),I=a({});const O=async(e,t)=>{0===e?(e=Q.value,t=q.value):(Q.value=e,q.value=t);try{const a=await k($.value,e,t);Object.assign(T,a.data.result),E.value=Object.keys(a.data.tag),Object.assign(I,a.data.tag);const l=E.value.indexOf("All");-1!==l&&E.value.splice(l,1)}catch(a){}},U=l(!1),C=async()=>{U.value=!0},H=()=>{U.value=!1},$=l(""),N=w({icon:"iconoir:search"}),Q=l(1),q=l(50),z=l(!1),B=()=>{z.value=!0,O(Q.value,q.value),z.value=!1};return B(),(t,a)=>{const l=s("ElText");return o(),i(_,null,[r(u(e),null,{default:p((()=>[r(u(b),null,{default:p((()=>[r(u(h),{span:.5},{default:p((()=>[r(l,{class:"mx-1",style:{position:"relative",top:"8px"}},{default:p((()=>[n(m(u(V)("form.input"))+":",1)])),_:1})])),_:1}),r(u(h),{span:5},{default:p((()=>[r(u(d),{modelValue:$.value,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value=e),placeholder:u(V)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),r(u(h),{span:5,style:{position:"relative",left:"16px"}},{default:p((()=>[r(u(c),{loading:z.value,type:"primary",icon:u(N),size:"large",style:{height:"100%"},onClick:B},null,8,["loading","icon"])])),_:1})])),_:1}),r(u(b),null,{default:p((()=>[r(u(h),{style:{position:"relative",top:"16px"}},{default:p((()=>[j("div",L,[r(u(c),{type:"primary",onClick:C},{default:p((()=>[n(m(u(V)("project.addProject")),1)])),_:1})])])),_:1})])),_:1}),r(u(x),{class:"demo-tabs",style:{position:"relative",top:"10px"}},{default:p((()=>[r(u(y),{label:`All (${u(I).All})`},{default:p((()=>[r(A,{tableDataList:u(T).All,getProjectTag:O,total:u(I).All},null,8,["tableDataList","total"])])),_:1},8,["label"]),(o(!0),i(_,null,v(u(E),(e=>(o(),g(u(y),{label:`${e} (${u(I)[e]})`,key:e},{default:p((()=>[r(A,{tableDataList:u(T)[e],getProjectTag:O,total:u(I)[e]},null,8,["tableDataList","total"])])),_:2},1032,["label"])))),128))])),_:1})])),_:1}),r(u(D),{modelValue:U.value,"onUpdate:modelValue":a[1]||(a[1]=e=>U.value=e),title:u(V)("project.addProject"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[r(P,{closeDialog:H,projectid:"",getProjectData:O,schedule:!1})])),_:1},8,["modelValue","title"])],64)}}});export{V as default};
