import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BM7LKSVD.js";import{d as t,l as i,r as a,o as l,i as r,w as o,e as s,a as p}from"./index-C75x1W_q.js";import{_ as m}from"./Table.vue_vue_type_script_lang-a6bm3afC.js";import{a as d}from"./index-mJnCHFVB.js";import"./el-card-B54lVHaN.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-B4X-nZEc.js";import"./el-table-column-DCN4Lp6f.js";import"./index-BjT9vIQp.js";import"./isEqual-BHgupMbx.js";import"./debounce-B1dqoIRt.js";import"./el-checkbox-DNn0VEEC.js";import"./isArrayLikeObject-f_cYQsBX.js";import"./raf-C1Ndsx6C.js";import"./el-tag-sJbhYsGb.js";import"./el-select-DpD7cK3l.js";import"./useInput-CL83Kqek.js";import"./el-image-viewer-18KIcjBl.js";import"./tsxHelper-eKzA9uIm.js";import"./el-dropdown-item-lD4tMeV-.js";import"./castArray-CbnyB5vx.js";import"./refs-B1ngtnm_.js";import"./index-BOnf2JCp.js";import"./index-CU1g1Qmh.js";const u=t({__name:"TableVideoPreview",setup(t){const{t:u}=i(),n=[{field:"title",label:u("tableDemo.title")},{field:"video_uri",label:u("tableDemo.videoPreview")},{field:"author",label:u("tableDemo.author")},{field:"display_time",label:u("tableDemo.displayTime")},{field:"pageviews",label:u("tableDemo.pageviews")}],j=a(!0);let _=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{j.value=!1}));t&&(_.value=t.data.list)})(),(t,i)=>(l(),r(p(e),{title:p(u)("router.PicturePreview")},{default:o((()=>[s(p(m),{columns:n,data:p(_),loading:j.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{u as default};
