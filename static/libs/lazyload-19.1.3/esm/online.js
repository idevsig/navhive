import{runningOnBrowser as n}from"./environment.js";import{resetStatus as o}from"./data.js";import{removeClass as e}from"./class.js";import{filterErrorElements as r,queryElements as i}from"./dom.js";const t=(n,t)=>{r(i(n)).forEach((r=>{e(r,n.class_error),o(r)})),t.update()},m=(o,e)=>{n&&(e._onlineHandler=()=>{t(o,e)},window.addEventListener("online",e._onlineHandler))},s=o=>{n&&window.removeEventListener("online",o._onlineHandler)};export{s as resetOnlineCheck,t as retryLazyLoad,m as setOnlineCheck};
