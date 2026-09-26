"use strict";var o=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var l=o(function(g,n){
var c=require('@stdlib/array-base-resolve-getter/dist');function f(t,r,u){var v,a,i,s,e;if(a=t.length,a===0)return[];for(v=c(t),i=[[],[]],e=0;e<a;e++)s=v(t,e),r.call(u,s,e,t)?i[0].push([e,s]):i[1].push([e,s]);return i}n.exports=f
});var p=l();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
