import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DrNfIFWG.js";import{d as t,l as s,r as i,o as a,i as r,w as o,e as l,a as n,f as p,t as c,H as m}from"./index-CD5z-L2p.js";import{_ as d}from"./Table.vue_vue_type_script_lang-kikzg7Gy.js";import{g as u}from"./index-Dr9zGU-_.js";import{E as j}from"./el-link-17-dozzu.js";import{E as f}from"./el-divider-BqiFvRo_.js";import"./el-card-BSi8b6QZ.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DZWDgZ8T.js";import"./el-checkbox-CSYOfx66.js";import"./useInput-C5WeYUR4.js";import"./debounce-BQFtq4AG.js";import"./el-tag-l9P6F3bC.js";import"./el-pagination-D8F1T4Jn.js";import"./el-image-viewer-Cro4p8GN.js";import"./tsxHelper-CG14TR21.js";import"./el-dropdown-item-DuGKGSIn.js";import"./castArray-mNLLonyd.js";import"./refs-Cpmhc2B7.js";import"./index-ajI7YjOc.js";import"./raf-CfzBOZZn.js";import"./index-BZommXV1.js";const x={class:"flex cursor-pointer"},v={class:"pr-16px"},_=["src"],g={class:"mb-12px font-700 font-size-16px"},b={class:"line-clamp-3 font-size-12px"},k={class:"flex justify-center items-center"},w=["onClick"],y=["onClick"],h=t({__name:"CardTable",setup(t){const{t:h}=s(),C=i(!0);let z=i([]);(async e=>{const t=await u(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{C.value=!1}));t&&(z.value=t.data.list)})();return(t,s)=>(a(),r(n(e),{title:n(h)("tableDemo.cardTable")},{default:o((()=>[l(n(d),{columns:[],data:n(z),loading:C.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:o((e=>[p("div",x,[p("div",v,[p("img",{src:e.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,_)]),p("div",null,[p("div",g,c(e.name),1),p("div",b,c(e.desc),1)])])])),"content-footer":o((e=>[p("div",k,[p("div",{class:"flex-1 text-center",onClick:()=>{}},[l(n(j),{underline:!1},{default:o((()=>[m("操作一")])),_:1})],8,w),l(n(f),{direction:"vertical"}),p("div",{class:"flex-1 text-center",onClick:()=>{}},[l(n(j),{underline:!1},{default:o((()=>[m("操作二")])),_:1})],8,y)])])),_:1},8,["data","loading"])])),_:1},8,["title"]))}});export{h as default};
