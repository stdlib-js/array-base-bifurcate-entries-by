"use strict";var o=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var n=o(function(g,v){
var c=require('@stdlib/array-base-resolve-getter/dist');function f(e,t,l){var a,u,i,s,r;if(u=e.length,u===0)return[];for(a=c(e),i=[[],[]],r=0;r<u;r++)s=a(e,r),t.call(l,s,r,e)?i[0].push([r,s]):i[1].push([r,s]);return i}v.exports=f
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
