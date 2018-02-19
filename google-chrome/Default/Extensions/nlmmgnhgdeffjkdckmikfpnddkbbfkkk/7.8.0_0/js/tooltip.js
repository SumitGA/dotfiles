/*!
 * Based on Fading JavaScript Tooltips 2kb by Michael Leigeber
 * WWW: http://www.leigeber.com/2008/06/javascript-tooltip/
 * with modifications by T. H. Doan
 */
var tooltip=function(){var o=2,u=2,t,f,i=10,e=20,n=0,r=95;return{show:function(n){oTT.innerHTML=n;oTT.style.display="block";t=oTT.offsetWidth;f=oTT.offsetHeight+o;oTT.style.visibility="visible";clearInterval(oTT.t);oTT.t=setInterval(function(){tooltip.fade(1)},e)},pos:function(n){var i=n.pageX,r=n.pageY;oTT.style.top=r-f+"px";oTT.style.right=(i+u+t<W?W-i-u-t+16:0)+"px"},fade:function(t){var u=n,f;u!==r&&t===1||u!==0&&t===-1?(f=i,r-u<i&&t===1?f=r-u:n<i&&t===-1&&(f=u),n=u+f*t,oTT.style.opacity=n*.01):(clearInterval(oTT.t),t===-1&&(oTT.style.display="none",oTT.style.visibility="hidden",oTT.innerHTML="",oTT.style.top="",oTT.style.right=""))},hide:function(){clearInterval(oTT.t);oTT.t=setInterval(function(){tooltip.fade(-1)},e)}}}(); 
