import{s,a7 as a,d as e,A as t,o,c as r,n as d,a as l,J as y,H as f,t as i,j as n,f as c,F as h,L as v,M as p}from"./index-CD5z-L2p.js";const u=s({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:a([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=e({name:"ElCard"});const S=p(v(e({...b,props:u,setup(s){const a=t("card");return(s,e)=>(o(),r("div",{class:d([l(a).b(),l(a).is(`${s.shadow}-shadow`)])},[s.$slots.header||s.header?(o(),r("div",{key:0,class:d(l(a).e("header"))},[y(s.$slots,"header",{},(()=>[f(i(s.header),1)]))],2)):n("v-if",!0),c("div",{class:d([l(a).e("body"),s.bodyClass]),style:h(s.bodyStyle)},[y(s.$slots,"default")],6),s.$slots.footer||s.footer?(o(),r("div",{key:1,class:d(l(a).e("footer"))},[y(s.$slots,"footer",{},(()=>[f(i(s.footer),1)]))],2)):n("v-if",!0)],2))}}),[["__file","card.vue"]]));export{S as E};
