import{r as a}from"./index-BZommXV1.js";const s=(s,t,e)=>a.post({url:"/api/task/data",data:{search:s,pageIndex:t,pageSize:e}}),t=(s,t,e,d,i,p,o,r,n,l,u,c,g,k,S,h,m,b,f)=>a.post({url:"/api/task/add",data:{name:s,target:t,node:e,allNode:d,subdomainScan:i,subdomainConfig:p,urlScan:o,duplicates:r,sensitiveInfoScan:n,pageMonitoring:l,crawlerScan:u,vulScan:c,vulList:g,portScan:k,ports:S,dirScan:h,waybackurl:m,scheduledTasks:b,hour:f}}),e=(s,t,e,d,i,p,o,r,n,l,u,c,g,k,S,h,m,b,f,v)=>a.post({url:"/api/task/update",data:{id:s,name:t,target:e,node:d,allNode:i,subdomainScan:p,subdomainConfig:o,urlScan:r,duplicates:n,sensitiveInfoScan:l,pageMonitoring:u,crawlerScan:c,vulScan:g,vulList:k,portScan:S,ports:h,dirScan:m,waybackurl:b,scheduledTasks:f,hour:v}}),d=s=>a.post({url:"/api/task/content",data:{id:s}}),i=s=>a.post({url:"/api/task/delete",data:{ids:s}}),p=s=>a.post({url:"/api/task/retest",data:{id:s}}),o=(s,t,e)=>a.post({url:"/api/task/progress/info",data:{id:s,type:t,runner:e}}),r=(s,t,e)=>a.post({url:"/api/scheduled/task/data",data:{search:s,pageIndex:t,pageSize:e}}),n=s=>a.post({url:"/api/scheduled/task/delete",data:{ids:s}}),l=(s,t,e)=>a.post({url:"/api/scheduled/task/pagemonit/data",data:{search:s,pageIndex:t,pageSize:e}}),u=s=>a.post({url:"/api/scheduled/task/pagemonit/delete",data:{ids:s}}),c=(s,t,e,d)=>a.post({url:"/api/scheduled/task/pagemonit/update",data:{hour:s,node:t,allNode:e,state:d}}),g=s=>a.post({url:"/api/scheduled/task/pagemonit/add",data:{url:s}});export{d as a,r as b,t as c,i as d,e,o as f,s as g,u as h,l as i,g as j,p as r,n as s,c as u};
