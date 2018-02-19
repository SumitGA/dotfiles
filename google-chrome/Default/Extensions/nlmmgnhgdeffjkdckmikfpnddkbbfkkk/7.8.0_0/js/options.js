/*!
 * @package Autofill
 * @author T. H. Doan
 * @copyright (c) 2010-2017
 * @link http://www.tohodo.com/
 */
function activateTab(n){var i="fields",t="exceptions";n&&n.target&&(n=this.id.slice(4));location.hash=n;D.body.id=n;(n===i||n===t)&&(n===t&&setTimeout(function(){oTA.focus()},50),oBS.onclick=function(){bFSS||saveOptions(i);bESS||saveOptions(t)},oBR.onclick=function(){bFRS||loadOptions(i);bERS||loadOptions(t)});oBH.onclick=function(){openHelp(n)};setAccessKeys(n)}function cleanText(n){return n=n.replace(/[\r\n]{2,}/g,"\n"),n.replace(/^\s+|\s+$/gm,"")}function disableButtons(n,t,i){n!=="fields"&&n||(oBS.disabled=t,oBR.disabled=i,bFSS=t,bFRS=i);n!=="exceptions"&&n||(bFSS||bFRS?((t&&bFSS||!t&&bFRS)&&(oBS.disabled=t),(i&&bFRS||!i)&&(oBR.disabled=i)):(oBS.disabled=t,oBR.disabled=i),bESS=t,bERS=i);oBA.disabled=err("fields")&&t||!1}function doResize(){W=D.body.offsetWidth;H=D.documentElement.clientHeight;resizeTable();oB.style.maxHeight=H-60+"px"}function loadOptions(n){var i=typeof n!="string",r,u,t;if(i){for(W=D.body.offsetWidth,H=D.documentElement.clientHeight,oNF=D.getElementById("nav-fields"),oNE=D.getElementById("nav-exceptions"),oNO=D.getElementById("nav-other"),oNS=D.getElementById("nav-support"),oNW=D.getElementById("nav-whatsnew"),oHN=D.getElementById("help-name"),oHV=D.getElementById("help-value"),oHS=D.getElementById("help-site"),oBA=D.getElementById("button-add"),oBS=D.getElementById("button-save"),oBR=D.getElementById("button-reset"),oBH=D.getElementById("button-help"),oBI=D.getElementById("button-import"),oBE=D.getElementById("button-export"),oT=D.getElementById("content-fields"),oTB=D.getElementById("content-fields-body"),oC=D.getElementById("content-cats"),oCS=D.getElementById("content-site"),oCO=D.getElementById("content-ow"),oTA=D.getElementById("content-exceptions"),oOO={backup:D.getElementById("content-backup"),manual:D.getElementById("content-manual"),delay:D.getElementById("content-delay"),labelmatch:D.getElementById("content-labelmatch"),overwrite:D.getElementById("content-overwrite"),vars:D.getElementById("content-vars"),sound:D.getElementById("content-sound"),voice:D.getElementById("content-voice"),debug:D.getElementById("content-debug"),mask:D.getElementById("content-mask"),scale:D.getElementById("content-scale"),menu:D.getElementById("content-menu")},oBU=D.getElementById("content-backup-chars"),oD=D.getElementById("content-delay-sec"),oDO=D.getElementById("content-delay-out"),oV=D.getElementById("content-voice-sel"),oIE=D.getElementById("content-ie"),oIR=D.getElementById("radio-replace"),oIA=D.getElementById("radio-append"),oS=D.getElementById("status"),oST=oS.getElementsByTagName("span")[0],oL=D.getElementById("light"),oB=D.getElementById("box"),oTT=D.getElementById("tt"),oErr.isOn=function(){return oST.textContent&&oST.style.background==="rgb(255,204,0)"},n=location.hash.slice(1),D.getElementById("tab-"+n)&&activateTab(n),sVer>(localStorage.ver||"1.0.0")&&(showWhatsNew(),localStorage.ver=sVer),r=["labelmatch","mask","menu","overwrite","scale","vars"],t=0;t<r.length;++t)oO[r[t]]===undefined&&(oO[r[t]]=1,localStorage.other=JSON.stringify(oO));resizeTable();D.body.style.visibility="visible"}if(oErr.isOn()&&showStatus(),(n==="fields"||i)&&(oErr.fields=[],aC=localStorage.cats?JSON.parse(localStorage.cats):[],nC=+localStorage.catcount||1,nCI=+localStorage.catnow||1,oR=localStorage.rules?JSON.parse(localStorage.rules):{},nR=+localStorage.rulecount||1,nRL=Object.size(oR),buildRules(nCI<3?oC[nCI].value:aC[nCI-5].k),popCats()),(n==="cats"||i)&&(u=nCI<3,oCS.disabled=u,oCO.disabled=u,u?(oCS.value="",oCO.checked=oO.overwrite):(oCS.value=aC[nCI-5].s||"",oCO.checked=aC[nCI-5].o)),(n==="exceptions"||i)&&(localStorage.exceptions?aE=JSON.parse(localStorage.exceptions):localStorage.exceptions=JSON.stringify(aE=[]),oTA.value=aE.join("\n")),disableButtons(n,!0,!0),i){oBA.title=chrome.i18n.getMessage("buttonsAddTT")+" ("+sK+"+A)";oC.title=chrome.i18n.getMessage("selectProfileTT")+" ("+sK+"+P)";oC.options[3].text+=" ("+sK+"+G)";oNW.textContent="v"+sVer;oNW.title=chrome.i18n.getMessage("whatsNewTT")+" ("+sK+"+?)";D.getElementById("yearnow").textContent=(new Date).getFullYear();for(t in oOO)oOO[t].checked=oO[t],oOO[t].addEventListener("click",saveOptions);oBU.disabled=!oOO.backup.checked;oBU.value=localStorage.backup||100;oD.disabled=!oOO.delay.checked;oD.value=localStorage.delay||1;oDO.textContent=oD.value;oV.selectedIndex=localStorage.voice||1;oV.disabled=!oOO.voice.checked;window.addEventListener("resize",doResize);oB.addEventListener("keydown",watchBox);oNF.addEventListener("click",activateTab);oNE.addEventListener("click",activateTab);oNO.addEventListener("click",activateTab);oNS.addEventListener("click",activateTab);oNW.addEventListener("click",showWhatsNew);oHN.addEventListener("mouseover",function(){tooltip.show(chrome.i18n.getMessage("optionsFieldsNameColTooltip"))});oHN.addEventListener("mouseout",function(){tooltip.hide()});oHV.addEventListener("mouseover",function(){tooltip.show(chrome.i18n.getMessage("optionsFieldsValueColTooltip"))});oHV.addEventListener("mouseout",function(){tooltip.hide()});oHS.addEventListener("mouseover",function(){tooltip.show(chrome.i18n.getMessage("optionsFieldsSiteColTooltip"))});oHS.addEventListener("mouseout",function(){tooltip.hide()});oBA.addEventListener("click",function(){addRow(nR++,0,"","","",oC[nCI].value)});oBS.addEventListener("click",function(){saveOptions("fields")});oBR.addEventListener("click",function(){loadOptions("fields")});oBH.addEventListener("click",function(){openHelp("fields")});oBI.addEventListener("click",importCSV);oBE.addEventListener("click",exportCSV);oC.addEventListener("change",changeCat);oCS.addEventListener("change",function(){saveOptions("cats")});oCO.addEventListener("change",function(){saveOptions("cats")});oTA.addEventListener("keyup",validLinks);oBU.addEventListener("input",function(){saveOptions("backup")});oD.addEventListener("input",function(){saveOptions("delay")});oV.addEventListener("change",function(){saveOptions("voice")});oL.addEventListener("click",showBox);oB.addEventListener("click",function(n){n.stopPropagation()})}}function openHelp(n){open("http://www.tohodo.com/autofill/help-chrome.html#"+n,"AutofillHelp")}function saveOptions(n){var t;if(n.target)if(this.id&&this.id.indexOf("content-")===0)n=this.id.slice(8);else return;switch(n){case"fields":var r=oT.getElementsByTagName("select"),e=0,u,f,i,o=oC[nCI]?oC[nCI].value:oC.value;for(t=0;t<r.length;++t)validRow(+r[t].id.slice(2))||++e;if(e>0)return;disableButtons(n,!0,!0);for(t in oR)(o==="all"||o===oR[t].c)&&delete oR[t];for(t=0;t<r.length;++t)i=r[t].id.slice(2),u=D.getElementById("n_"+i),f=D.getElementById("s_"+i),u.value=u.value.replace(/^\s+|\s+$/g,"").replace(/\s*[\r\n]+\s*/g,"\n"),f.value=cleanText(f.value),oR["r"+i]={t:D.getElementById("t_"+i).selectedIndex,n:u.value,v:D.getElementById("v_"+i).value,s:f.value,c:D.getElementById("r_"+i).getAttribute("data-cat")};nRL=Object.size(oR);popCats();try{localStorage.rules=JSON.stringify(oR);localStorage.rulecount=nR}catch(err){showStatus(oErr.msgLimit,1,n);return}JSON.stringify(aC)!==localStorage.cats&&saveOptions("cats");break;case"cats":aC.length?nCI>4&&(aC[nCI-5].s=oCS.value.replace(/^\s+|\s+$/g,""),aC[nCI-5].o=+oCO.checked):nCI=Math.min(nCI,2);try{localStorage.cats=JSON.stringify(aC);localStorage.catcount=nC;localStorage.catnow=nCI}catch(err){showStatus(oErr.msgLimit,1,"fields");return}BG.aC=aC;oO.menu&&BG.buildMenu(aC,nCI);break;case"exceptions":if(err("fields"))return;disableButtons(n,!0,!0);oTA.value=cleanText(oTA.value);aE=oTA.value?oTA.value.split("\n"):[];try{localStorage[n]=JSON.stringify(aE)}catch(err){showStatus(oErr.msgLimit,1,n);return}break;default:oO[n]=+(oOO[n]?oOO[n].checked:D.getElementById("content-"+n).checked);n==="backup"&&(oBU.disabled=!oOO[n].checked,oO[n]=+oOO[n].checked,oBU.value=Math.max(Math.min(1e4,oBU.value),1),localStorage[n]=oBU.value);oO.manual&&!oO.menu&&oOO.menu.click();n==="delay"&&(event&&event.type==="input"&&(oDO.textContent=oD.value),oD.disabled=!oOO[n].checked,oO[n]=+oOO[n].checked,localStorage[n]=oD.value);n==="vars"&&loadOptions("fields");n==="voice"&&(oV.disabled=!oOO[n].checked,localStorage[n]=oV.selectedIndex);n==="mask"&&((D.getElementById("n_"+nLR).value||D.getElementById("v_"+nLR).value)&&saveOptions("fields"),buildRules(oC.value));n==="scale"&&(oO[n]?resizeTable():oTB.style.height="");n==="menu"&&(oO[n]?BG.buildMenu(aC,nCI):chrome.contextMenus.removeAll());localStorage.other=JSON.stringify(oO);BG.oO=oO}err("fields")||showStatus(chrome.i18n.getMessage("statusOptionsSaved"),0);chrome.tabs.query({},function(n){for(var t=0;t<n.length;++t)chrome.tabs.sendMessage(n[t].id,{type:"updateOptions",data:localStorage})})}function setAccessKeys(n){var r=n==="fields",u=n==="exceptions",i=n==="other",t="accesskey";oC.setAttribute(t,r?"p":"");oCS.setAttribute(t,r?"i":"");oCO.setAttribute(t,r?"w":"");oBA.setAttribute(t,r?"a":"");oBS.setAttribute(t,r||u?"s":"");oBR.setAttribute(t,r||u?"r":"");oOO.backup.setAttribute(t,i?"a":"");oOO.manual.setAttribute(t,i?"m":"");oOO.delay.setAttribute(t,i?"y":"");oOO.labelmatch.setAttribute(t,i?"b":"");oOO.overwrite.setAttribute(t,i?"w":"");oOO.vars.setAttribute(t,i?"v":"");oOO.sound.setAttribute(t,i?"s":"");oOO.voice.setAttribute(t,i?"z":"");oOO.debug.setAttribute(t,i?"g":"");oOO.mask.setAttribute(t,i?"k":"");oOO.scale.setAttribute(t,i?"r":"");oOO.menu.setAttribute(t,i?"n":"");oBI.setAttribute(t,i?"i":"");oBE.setAttribute(t,i?"x":"");arguments.callee.caller.name==="showBox"&&(oNF.setAttribute(t,n?"l":""),oNE.setAttribute(t,n?"c":""),oNO.setAttribute(t,n?"o":""),oNS.setAttribute(t,n?"u":""),oBH.setAttribute(t,n?"h":""))}function showBox(n,t,i){if(!n||typeof n!="string"){if(clearTimeout(oB.t),oErr.isOn()&&oST.textContent!==oErr.msg)return;oB.style.display="none";oB.textContent="";oL.style.backgroundColor="rgba(0,0,0,0)";oS.firstChild.style.boxShadow=oSBs;setTimeout(function(){oL.style.display="none"},400);setAccessKeys(D.body.id);return}oB.innerHTML=(t?"<header><h2>"+t+"</h2></header>":"")+n+"<footer>"+(i?i+"&nbsp;&nbsp;":"")+'<button id="button-close" tabindex="99">'+chrome.i18n.getMessage("buttonsClose")+"</button></footer>";oL.style.display="-webkit-box";setTimeout(function(){oL.style.backgroundColor="rgba(0,0,0,0.8)"},50);oB.style.maxHeight=H-60+"px";oS.firstChild.style.boxShadow=oSBs;setAccessKeys();oBC=D.getElementById("button-close");oB.t=setTimeout(function(){oB.style.display="block";oB.scrollTop>0&&(oB.scrollTop=0);oCL&&oCL.offsetParent!==null?oCL.focus():oBC.focus()},250);oBC.addEventListener("click",function(){D.getElementById("content-catlist")&&aC2&&saveCats();showBox()})}function showStatus(n,t,i){if(!n){clearTimeout(oS.t);oS.style.webkitTransform="translateY(-150%)";oS.t=setTimeout(function(){oS.style.display="none";oST.textContent=""},400);return}clearTimeout(oS.t);oST.style.background=t===1?sErrBg:"#c6efce";oST.textContent=n;oS.style.display="block";setTimeout(function(){oS.style.webkitTransform="inherit"},t===2?0:50);switch(t){case 0:oS.t=setTimeout(function(){oS.style.webkitTransform="translateY(-150%)";setTimeout(function(){err("fields")?(oST.style.background="#fc0",oST.textContent=oErr.msg,oS.style.webkitTransform="inherit"):(oS.style.display="none",oST.textContent="")},400)},4e3);break;case 1:i&&disableButtons(i,!0,!1)}}function showWhatsNew(){showBox(sChangelog)}function sortByName(n,t){var i=n.n.toLowerCase(),r=t.n.toLowerCase();return i<r?-1:i>r?1:0}function watchBox(n){switch(n.key){case"Tab":(!n.shiftKey&&n.target.tabIndex===99||n.shiftKey&&n.target.tabIndex===1)&&n.preventDefault()}}function addRow(n,t,i,r,u,f){var s,l;if(!nLR||i||r||oR["r"+n]||validRow(nLR)){var e=oT.insertRow(-1),w=e.insertCell(0),v=e.insertCell(1),y=e.insertCell(2),b=e.insertCell(3),p=e.insertCell(4),h=e.firstChild,a=n+'" rows="1">',c="accesskey",o;if(e.id="r_"+n,nCI===1)if(f!=="all"&&f){for(s=0;s<aC.length;++s)if(f===aC[s].k){o=aC[s].n;break}}else o=chrome.i18n.getMessage("optionsProfilesMenuUnfiled");for(e.setAttribute("data-cat",f&&f!=="all"?f:""),w.innerHTML='<select id="t_'+n+'"><option>Text</option><option>Password</option><option>Select</option><option>Checkbox/Radio</option><option>JavaScript</option></select>',oO.vars&&v.setAttribute("data-id","n"+n),v.innerHTML="<textarea"+(t===4?" disabled":"")+' id="n_'+a+i+"</textarea>",oO.vars&&y.setAttribute("data-id","v"+n),y.innerHTML=t!==1||!oO.mask?'<textarea id="v_'+a+r+"</textarea>":'<input id="v_'+n+'" type="password" value="'+r+'">',b.innerHTML='<textarea id="s_'+a+u+"</textarea>",p.innerHTML='<button id="d_'+n+'" title="'+chrome.i18n.getMessage("removeRuleTT")+" ("+sK+'+X)">&#8211;</button><button id="m_'+n+'" title="'+(o?chrome.i18n.getMessage("profileTT")+": "+o+"\n":"")+chrome.i18n.getMessage("moveRuleTT")+" ("+sK+'+M)">'+(o?"<span>"+o+"</span>&nbsp;&nbsp;":"")+"&rsaquo;</button>&nbsp;&nbsp;&nbsp;",p.title=chrome.i18n.getMessage("reorderRuleTT"),D.getElementById("t_"+n).selectedIndex=t,D.getElementById("t_"+n).addEventListener("change",function(){validRow(n,null,event)}),D.getElementById("t_"+n).addEventListener("keydown",function(){moveRow(event,this)}),D.getElementById("n_"+n).addEventListener("keydown",function(){moveRow(event,this)}),D.getElementById("n_"+n).addEventListener("keyup",function(){expandBox(this,1);validRow(n,this)}),D.getElementById("v_"+n).addEventListener("keydown",function(){moveRow(event,this)}),D.getElementById("v_"+n).addEventListener("keyup",function(){expandBox(this,1);validRow(n,this)}),D.getElementById("s_"+n).addEventListener("keydown",function(){moveRow(event,this)}),D.getElementById("s_"+n).addEventListener("keyup",function(){expandBox(this,1);validRow(n,this)}),D.getElementById("d_"+n).addEventListener("click",delRow),D.getElementById("m_"+n).addEventListener("click",function(){validRow(n,null,event)&&showMoveRule(D.getElementById("r_"+n))});h;)l=h.firstChild,l.nodeName!=="BUTTON"&&(l.onblur=function(){D.getElementById("d_"+n).setAttribute(c,"");D.getElementById("m_"+n).setAttribute(c,"");expandBox(this,0)},l.onfocus=function(){D.getElementById("d_"+n).setAttribute(c,"x");D.getElementById("m_"+n).setAttribute(c,"m");expandBox(this,1)}),h=h.nextSibling;i||r||oR["r"+n]||(D.getElementById("n_"+n).focus(),tableDnD&&tableDnD.init(oT),disableButtons("fields",!1,!1));nLR=n}}function buildRules(n){if(nCI===1?oT.classList.add("view-all"):oT.classList.remove("view-all"),localStorage.rules||!arguments.callee.caller.name){if(oT.rows.length>1)while(oT.rows.length>1)oT.deleteRow(-1);for(var t in oR)(n==="all"||n===oR[t].c)&&addRow(+t.slice(1),oR[t].t,oR[t].n,oR[t].v,oR[t].s,oR[t].c)}else localStorage.cats=JSON.stringify(aC);tableDnD=new TableDnD;tableDnD.init(oT)}function changeCat(n){if(n&&typeof n=="number")oC.selectedIndex=nCI=n,oO.menu&&aC.length+4===oC.length-1&&BG.updateCatMenu(+localStorage.catnow,nCI),localStorage.catnow=nCI,loadOptions("fields");else{var t=oC[oC.selectedIndex].text;if(t.indexOf("——")===0){oC.selectedIndex=nCI;return}if(t.indexOf(chrome.i18n.getMessage("optionsProfilesMenuManage"))===0){showCats();return}if(bFRS===!1){showBox("<p>"+chrome.i18n.getMessage("statusUnsavedChanges")+"</p>",chrome.i18n.getMessage("optionsFieldsConfirmation"),'<button id="button-discard" tabindex="1" data-catnow="'+oC.selectedIndex+'">'+chrome.i18n.getMessage("buttonsDiscardSwitch")+"</button>");oC.selectedIndex=nCI;D.getElementById("button-discard").addEventListener("click",function(){changeCat(+this.getAttribute("data-catnow"));showBox()});return}buildRules(oC[nCI=oC.selectedIndex].value);oO.menu&&BG.updateCatMenu(+localStorage.catnow,nCI);localStorage.catnow=nCI}loadOptions("cats")}function delRow(){var n=this.parentNode.parentNode;oErr.fields.splice(n.rowIndex,1);n.remove();err("fields")?disableButtons("fields",!0,!1):(disableButtons("fields",!1,!1),showStatus());nLR=+oT.rows[oT.rows.length-1].id.slice(2)}function expandBox(n,t){arguments.callee.caller.arguments.callee.caller||(n.nodeName==="TEXTAREA"&&(t?n.clientHeight<n.scrollHeight?setTimeout(function(){n.rows=Math.min(Math.round(n.scrollHeight/16),10);n.rows===10&&(n.style.overflow="auto");n.scrollIntoView(!1)},100):(event&&event.key==="Backspace"&&n.rows>1&&(n.rows=1,n.rows=Math.min(Math.round(n.scrollHeight/16),10)),n.scrollIntoView(!1)):n.rows>1&&!bM&&setTimeout(function(){n.style.overflow="hidden";n.rows=1},100)),event&&event.key==="Alt"&&(n.readOnly=!0,setTimeout(function(){n.readOnly=!1},100)))}function moveRow(n,t){var i;switch(n.key){case"ArrowUp":if(n.altKey)i=D.getElementById("r_"+t.id.slice(2)),i.rowIndex>1&&(bM=!0,i.parentNode.insertBefore(i,i.previousSibling),bM=!1,disableButtons("fields",!1,!1),t.focus());else if(t.parentNode.parentNode.previousSibling.id&&(t.type!=="textarea"||t.selectionEnd-t.selectionStart===t.value.length||t.selectionStart===0)){var u=t.id.slice(0,1),f=t.parentNode.parentNode.previousSibling.id.slice(2),r=D.getElementById(u+"_"+f);setTimeout(function(){expandBox(t,0)},100);r.focus();r.select();n.preventDefault()}break;case"ArrowDown":if(n.altKey)i=D.getElementById("r_"+t.id.slice(2)),i.nextSibling&&(bM=!0,i.parentNode.insertBefore(i,i.nextSibling.nextSibling),bM=!1,disableButtons("fields",!1,!1),t.focus());else if(t.parentNode.parentNode.nextSibling&&(t.type!=="textarea"||t.selectionEnd-t.selectionStart===t.value.length||t.selectionStart===t.value.length)){var u=t.id.slice(0,1),f=t.parentNode.parentNode.nextSibling.id.slice(2),r=D.getElementById(u+"_"+f);setTimeout(function(){expandBox(t,0)},100);r.focus();r.select();n.preventDefault()}}}function moveRule(n,t,i){var r=D.getElementById("r_"+n);oR["r"+n]={t:D.getElementById("t_"+n).selectedIndex,n:D.getElementById("n_"+n).value.replace(/^\s+|\s+$/g,"").replace(/\s*[\r\n]+\s*/g,"\n"),v:D.getElementById("v_"+n).value,s:cleanText(D.getElementById("s_"+n).value),c:t};nCI>1?r.parentNode.removeChild(r):(r.setAttribute("data-cat",t),r.title=chrome.i18n.getMessage("profileTT")+": "+i);nRL=Object.size(oR);popCats();try{localStorage.rules=JSON.stringify(oR);localStorage.rulecount=nR}catch(u){showStatus(oErr.msgLimit,1,"fields");return}oErr.isOn()||disableButtons("fields",!0,!0);showBox();showStatus(chrome.i18n.getMessage("statusRuleMoved").replace(/___/,i),0)}function popCats(){var r=0,f=oC[1].text,e=oC[2].text,n,t,i,u;for(oC.length=5,n=0;n<aC.length;++n){t=D.createElement("option");t.value=aC[n].k;t.text=aC[n].n;i=0;for(u in oR)aC[n].k===oR[u].c&&++i;r+=i;i>0&&(t.text+=" ("+i+")");oC.add(t)}nRL>0&&(oC[1].text=f.replace(/^([^(]+)\b.*$/,"$1 ("+nRL+")"),oC[2].text=e.replace(/^([^(]+)\b.*$/,nRL>r?"$1 ("+(nRL-r)+")":"$1"));nCI>aC.length+4&&(localStorage.catnow=nCI=2);oC.selectedIndex=nCI}function resizeTable(){if(oO.scale){var n=D.body.id==="fields";n&&H>272&&(D.body.style.overflowY="hidden");oTB.style.height=Math.max(H-228,70)+"px";n&&H>272&&(clearTimeout(oTB.t),oTB.t=setTimeout(function(){D.body.style.overflowY="auto"},100))}}function showMoveRule(n){for(var i="<p>"+chrome.i18n.getMessage("optionsFieldsSelectProfile")+'</p><p><select id="select-cat" accesskey="p" tabindex="1" data-row="'+n.id.slice(2)+'" autofocus><option value="">'+chrome.i18n.getMessage("optionsProfilesMenuUnfiled")+"</option>",t=0;t<aC.length;++t)i+='<option value="'+aC[t].k+'"'+(aC[t].k===n.getAttribute("data-cat")?' selected="selected"':"")+">"+aC[t].n+"</option>";i+="</select></p>";showBox(i,chrome.i18n.getMessage("optionsFieldsMove"));D.getElementById("select-cat").addEventListener("change",function(){moveRule(this.getAttribute("data-row"),this.value,this.options[this.selectedIndex].text)})}function validRow(n,t,i){if(oT.rows.length>1&&(err("fields")||!t||oR["r"+n]&&t.value!==oR["r"+n][t.id.slice(0,1)])){var l=oR["r"+n],f=D.getElementById("r_"+n),e=f.rowIndex,o=D.getElementById("t_"+n),r=D.getElementById("n_"+n),u=D.getElementById("v_"+n),s=u.value,h=i&&i.type==="click",c=i&&i.type==="change";if(c&&(oO.mask&&(o.selectedIndex===1?f.childNodes[2].innerHTML='<input id="v_'+n+'" type="password" value="'+s+'">':u.nodeName==="INPUT"&&(f.childNodes[2].innerHTML='<textarea id="v_'+n+'" rows="1">'+s+"</textarea>"),u=D.getElementById("v_"+n),u.addEventListener("keydown",function(){moveRow(event,this)}),u.addEventListener("keyup",function(){expandBox(this,1);validRow(n,this)})),o.selectedIndex===4?(r.value="",r.disabled=!0):r.disabled=!1,r.disabled?u.focus():r.focus(),!l))return;if((!c||t)&&(r.value||u.value?(r.style.background||u.style.background)&&(r.style.background=u.style.background="",oErr.fields[e]="",err("fields")||showStatus()):(o.selectedIndex===1||r.disabled?(u.style.background=sErrBg,u.focus()):(r.style.background=sErrBg,r.focus()),oErr.fields[e]=1)),r.style.background||u.style.background||err("fields")){if(showStatus(oErr.msg,1,"fields"),oErr.fields[e])D.getElementById("m_"+n).disabled=!0;else if(h)return!0;return!1}h||disableButtons("fields",!1,!1);D.getElementById("m_"+n).disabled=!1;oErr.isOn()&&showStatus()}return!0}function popCatList(n){var r=D.createDocumentFragment(),i,t;for(oCL.options.length=0,t=0;t<aC2.length;++t)i=r.appendChild(D.createElement("option")),i.text=aC2[t].n,i.value=aC2[t].k;oCL.appendChild(r);oBCS.disabled=aC2.length<2;n&&(oCL.changed=!0)}function saveCats(){var t,i,n;if(oCL.changed){aC=aC2;nC=nC2;for(n in oR)if(aC.length)for(t=0,i=aC.length;t<i;++t){if(oR[n].c===aC[t].k)break;t===i-1&&(oR[n].s||(oR[n].s=oSites[oR[n].c]||""),oR[n].c="")}else oR[n].s||(oR[n].s=oSites[oR[n].c]||""),oR[n].c="";if(aC.length&&oCL.oldCat)for(nCI=2,n=0;n<aC.length;++n)if(aC[n].k===oCL.oldCat){nCI=n+5;break}localStorage.rules=JSON.stringify(oR);saveOptions("cats");popCats();oCL.newCat?changeCat(oC.querySelector("option[value="+oCL.newCat+"]").index):changeCat(nCI>4?nCI:Math.min(nCI,2));showStatus(chrome.i18n.getMessage("statusProfilesSaved"),0)}else oST.textContent&&(err("fields")?oST.textContent=oErr.msg:showStatus())}function showCats(){if(oC.selectedIndex=nCI,bFRS===!1){showBox("<p>"+chrome.i18n.getMessage("statusUnsavedChanges")+"</p>",chrome.i18n.getMessage("optionsFieldsConfirmation"),'<button id="button-discard" tabindex="1" data-catnow="'+oC.selectedIndex+'">'+chrome.i18n.getMessage("buttonsDiscardManage")+"</button>");D.getElementById("button-discard").addEventListener("click",function(){loadOptions("fields");showCats()});return}var t='<p></p><select id="content-catlist" size="12" tabindex="1"></select><button id="button-new" accesskey="n" tabindex="2">'+chrome.i18n.getMessage("optionsProfilesManageNew")+'</button><br><button id="button-rename" accesskey="r" tabindex="3" disabled>'+chrome.i18n.getMessage("optionsProfilesManageRename")+'</button><br><button id="button-movefirst" accesskey="i" tabindex="4" disabled>'+chrome.i18n.getMessage("optionsProfilesManageMoveFirst")+'</button><br><button id="button-moveup" accesskey="u" tabindex="5" disabled>'+chrome.i18n.getMessage("optionsProfilesManageMoveUp")+'</button><br><button id="button-movedown" accesskey="w" tabindex="6" disabled>'+chrome.i18n.getMessage("optionsProfilesManageMoveDown")+'</button><br><button id="button-movelast" accesskey="l" tabindex="7" disabled>'+chrome.i18n.getMessage("optionsProfilesManageMoveLast")+'</button><br><button id="button-delete" accesskey="t" tabindex="8" disabled>'+chrome.i18n.getMessage("optionsProfilesManageDel")+'</button><br><button id="button-sort" accesskey="s" tabindex="9" disabled>'+chrome.i18n.getMessage("optionsProfilesManageSort")+"</button><br><br>",n=aC.length;for(aC2=[],nC2=nC,oSites={};n--;)aC2[n]=aC[n];showBox(t,chrome.i18n.getMessage("optionsProfilesManageProfiles"),'<button id="button-discard" tabindex="10">'+chrome.i18n.getMessage("buttonsDiscard")+"</button>");oCL=D.getElementById("content-catlist");oBCN=D.getElementById("button-new");oBCR=D.getElementById("button-rename");oBCMF=D.getElementById("button-movefirst");oBCMU=D.getElementById("button-moveup");oBCMD=D.getElementById("button-movedown");oBCML=D.getElementById("button-movelast");oBCD=D.getElementById("button-delete");oBCS=D.getElementById("button-sort");popCatList();oCL.addEventListener("change",handleCatList);oBCN.addEventListener("click",doNewCat);oBCR.addEventListener("click",doRenameCat);oBCMF.addEventListener("click",doMoveCatFirst);oBCMU.addEventListener("click",doMoveCatUp);oBCMD.addEventListener("click",doMoveCatDown);oBCML.addEventListener("click",doMoveCatLast);oBCD.addEventListener("click",doDelCat);oBCS.addEventListener("click",doSortCats);D.getElementById("button-discard").addEventListener("click",showBox);nCI>4&&(oCL.selectedIndex=nCI-5,oCL.dispatchEvent(eChange),oCL.oldCat=oC[nCI].value,setTimeout(function(){oCL.options[oCL.selectedIndex].scrollIntoView(!1)},250))}function validCat(n,t){if(!n)return!1;if(n.length>30)return alert(chrome.i18n.getMessage("statusProfileCharLimit")),t(n),!1;for(var i=0;i<aC2.length;++i)if(n.toLowerCase()===aC2[i].n.toLowerCase())return alert(chrome.i18n.getMessage("statusProfileDuplicate")),t(n),!1;return n.indexOf("——")===0?(alert(chrome.i18n.getMessage("statusProfileReserved")),t(n),!1):!0}function doNewCat(n){var i,r,t;(n instanceof Event&&(n=""),i=(prompt("Profile name:",n||"")||"").trim(),validCat(i,doNewCat))&&(r=oCL.selectedIndex,t={k:"c"+nC2++,n:i,s:"",o:1},r<0?aC2.push(t):aC2.splice(r+1,0,t),popCatList(!0),oCL.newCat=oCL.value=t.k,oCL.dispatchEvent(eChange))}function doRenameCat(n){n instanceof Event&&(n="");var t=oCL.selectedIndex,i=(prompt("New profile name:",n||aC2[t].n)||"").trim();i!==aC2[t].n&&validCat(i,doRenameCat)&&(aC2[t].n=i,popCatList(!0),oCL.selectedIndex=t,oCL.dispatchEvent(eChange))}function doMoveCatFirst(){var n=oCL.selectedIndex,t=aC2[n];aC2.splice(n,1);aC2.unshift(t);popCatList(!0);oCL.selectedIndex=0;oBCMF.disabled=oBCMU.disabled=!0;oBCMD.disabled=oBCML.disabled=!1}function doMoveCatUp(){var n=oCL.selectedIndex,t=aC2[n];aC2.splice(n,1);aC2.splice(n-1,0,t);popCatList(!0);oCL.selectedIndex=n-1;oCL.selectedIndex===0&&(oBCMF.disabled=oBCMU.disabled=!0);oBCMD.disabled=oBCML.disabled=!1}function doMoveCatDown(){var n=oCL.selectedIndex,t=aC2[n];aC2.splice(n,1);aC2.splice(n+1,0,t);popCatList(!0);oCL.selectedIndex=n+1;oCL.selectedIndex===oCL.length-1&&(oBCMD.disabled=oBCML.disabled=!0);oBCMF.disabled=oBCMU.disabled=!1}function doMoveCatLast(){var n=oCL.selectedIndex,t=aC2[n];aC2.splice(n,1);aC2.push(t);popCatList(!0);oCL.selectedIndex=aC2.length-1;oBCMF.disabled=oBCMU.disabled=!1;oBCMD.disabled=oBCML.disabled=!0}function doDelCat(){var n=oCL.selectedIndex;oSites[aC2[n].k]=aC2[n].s;aC2.splice(n,1);popCatList(!0);oCL.selectedIndex=Math.min(n,aC2.length-1);oCL.selectedIndex<0?oBCR.disabled=oBCD.disabled=!0:oCL.selectedIndex===oCL.length-1&&(oBCMD.disabled=oBCML.disabled=!0);aC2.length===1&&(oBCMF.disabled=oBCMU.disabled=!0)}function doSortCats(){aC2.sort(sortByName);popCatList(!0)}function handleCatList(){var n=oCL.selectedIndex,t=oCL.options[n];oBCR.disabled=oBCD.disabled=!t;t?(oBCMF.disabled=oBCMU.disabled=n===0,oBCMD.disabled=oBCML.disabled=n===oCL.options.length-1):oBCMF.disabled=oBCMU.disabled=oBCMD.disabled=oBCML.disabled=!0}function validLinks(){this.value!==aE.join("\n")?disableButtons("exceptions",!1,!1):disableButtons("exceptions",!0,!0)}function importCSV(){var t=oIE.value,l=oT.getElementsByTagName("select"),r,n,u,i=oIA.checked,f,e={},c=(t.match(/^\d/gm)||[]).length,o=0,s,h;if(t=t.replace(/^\s+|[ \r\n]+$/g,""),t=t.replace(/@@/g,"\\@\\@"),t=t.replace(/~~/g,"\\~\\~"),t=t.replace(/%%/g,"\\%\\%"),t=t.replace(/\r?\n/g,"@@"),/^### PROFILES ###,,,,/i.test(t)?(t=t.replace(/,(?=[^"]*"(?:[^"]*"[^"]*")*[^"]*$)/g,"~~"),t=t.replace(/@@([^"]+?,)/g,"\n$1"),u=","):/^### PROFILES ###\t\t\t\t/i.test(t)&&(t=t.replace(/\t(?=[^"]*"(?:[^"]*"[^"]*")*[^"]*$)/g,"%%"),t=t.replace(/(\t|@@)("[^"(@@)]*")(\t|@@)/g,'$1"$2"$3'),t=t.replace(/@@([^"]+?\t)/g,"\n$1"),u="\t"),r=t.split("\n"),s=r.length,s===0||r[0].split(u).length<5){showStatus(chrome.i18n.getMessage("statusImportFailed"),1);return}i||(oR={},nR=1,aC=[],nC=1);nCI=1;oErr.fields=[];h=setInterval(function(){var t;for(n=r[o].split(u),t=0;t<n.length;++t)n[t]=n[t].replace(/^"|"$/g,""),n[t]=n[t].replace(/""/g,'"'),n[t]=n[t].replace(/%%/g,"\t"),n[t]=n[t].replace(/~~/g,","),n[t]=n[t].replace(/@@/g,"\n"),n[t]=n[t].replace(/\\%\\%/g,"%%"),n[t]=n[t].replace(/\\~\\~/g,"~~"),n[t]=n[t].replace(/\\@\\@/g,"@@");if(isNaN(parseInt(n[0].slice(1))))if(isNaN(parseInt(n[0])))if(n[0].toLowerCase().indexOf("exceptions")===0)showStatus(chrome.i18n.getMessage("statusImportingExceptions"),2),oTA.value=JSON.parse(n[1]).join("\n"),disableButtons("exceptions",!1,!1);else{for(t in oOO)n[0].toLowerCase().indexOf(t)===0&&(showStatus(chrome.i18n.getMessage("statusImportingOption",[t]),2),oO[t]=oOO[t].checked=+n[1]);n[0].toLowerCase().indexOf("backup")===0&&(oBU.disabled=!!n[1],oBU.value=n[2]);n[0].toLowerCase().indexOf("delay")===0&&(oD.disabled=!!n[1],oD.value=n[2],oDO.textContent=oD.value);n[0].toLowerCase().indexOf("voice")===0&&(oV.selectedIndex=+n[2]);oV.disabled=!oOO.voice.checked;localStorage.other=JSON.stringify(oO);oBU.disabled=!oOO.backup.checked;localStorage.backup=oBU.value;oD.disabled=!oOO.delay.checked;localStorage.delay=oD.value;localStorage.voice=oV.selectedIndex}else showStatus(chrome.i18n.getMessage("statusImportingRule",[nR,c]),2),oR["r"+nR++]={t:+n[0],n:n[1],v:n[2],s:n[3],c:i?e[n[4]]:n[4]};else{if(f=!1,i)for(t=0;t<aC.length;++t)if(aC[t].n.toLowerCase()===n[1].toLowerCase()){e[n[0]]=aC[t].k;f=!0;break}f||(showStatus(chrome.i18n.getMessage("statusImportingProfile",[n[1]]),2),aC.push({k:i?"c"+nC++:n[0],n:n[1],s:n[2],o:+n[3]}),e[n[0]]=aC[aC.length-1].k);i||(nC=Math.max(nC,n[0].slice(1))+1)}++o;o===s&&(clearInterval(h),nRL=Object.size(oR),buildRules("all"),popCats(),loadOptions("cats"),disableButtons("fields",!1,!1),tableDnD.init(oT),showStatus(chrome.i18n.getMessage("statusSettingsImported"),0))},10)}function exportCSV(){for(var t="### PROFILES ###,,,,\nProfile ID,Name,Site,Overwrite,\n",n=0;n<aC.length;++n)t+=aC[n].k+","+aC[n].n+","+aC[n].s+","+(aC[n].o||0)+",\n";t+="### AUTOFILL RULES ###,,,,\nType,Name,Value,Site,Profile\n";for(n in oR)t+=oR[n].t+',"'+oR[n].n.replace(/"/g,'""')+'","'+oR[n].v.replace(/"/g,'""')+'","'+oR[n].s.replace(/"/g,'""')+'",'+oR[n].c+"\n";t+='### OPTIONS ###,,,,\nexceptions,"'+JSON.stringify(aE).replace(/"/g,'""')+'",,,';for(n in oOO){t+="\n"+n+","+(+oO[n]||0);switch(n){case"backup":t+=","+(localStorage.backup||100)+",,";break;case"delay":t+=","+(localStorage.delay||1)+",,";break;case"voice":t+=","+(localStorage.voice||1)+",,";break;default:t+=",,,"}}oIE.value=t;oIE.select();showStatus(chrome.i18n.getMessage("statusSettingsExported"),0)}function handleHashChange(){var n=location.hash.slice(1)||"fields";n!==D.body.id&&activateTab(n)}function handleKeyDown(n){n.key==="Escape"&&oBC&&oL.style.display==="-webkit-box"?oBC.click():D.body.id==="fields"&&n.altKey&&n.key==="g"?showCats():D.body.id==="other"&&n.altKey&&n.key==="p"&&oL.style.display!=="-webkit-box"&&(oIA.checked?oIA.focus():oIR.focus())}function init(){[].forEach.call(D.querySelectorAll("[data-i18n]"),function(n){var t=chrome.i18n.getMessage(n.getAttribute("data-i18n")),i=chrome.i18n.getMessage(n.getAttribute("data-i18n")+"TT");t&&(n.innerHTML=t);i&&(n.title=i)});loadOptions()}function refresh(){oBS.disabled&&oBR.disabled&&(localStorage.cats||localStorage.rules)&&(JSON.stringify(aC)!==localStorage.cats||JSON.stringify(oR)!==localStorage.rules)&&(loadOptions("fields"),loadOptions("cats"))}Object.size=function(n){var t=0;for(var i in n)n.hasOwnProperty(i)&&++t;return t};var D=document,W,H,oR,nR,nRL,oNF,oNE,oNO,oNS,oNW,oHN,oHV,oHS,oT,oTB,nLR,bM=!1,aC,aC2,nC,nC2,nCI,oC,oCL,oCS,oCO,oSites,oBA,oBS,oBR,oBH,oBI,oBE,oBC,oBCN,oBCR,oBCMF,oBCMU,oBCMD,oBCML,oBCD,oBCS,bFSS,bFRS,bESS,bERS,aE,oTA,oO=localStorage.other?JSON.parse(localStorage.other):{},oOO,oBU,oD,oDO,oV,oIE,oIR,oIA,oS,oST,oSBs="0 1px 6px #333",oL,oB,oTT,tableDnD,sK=navigator.platform.indexOf("Mac")<0?"Alt":"Option",oErr={msg:chrome.i18n.getMessage("statusIncomplete"),msgLimit:chrome.i18n.getMessage("statusSaveFailed")},err=function(n){return oErr[n].indexOf(1)>-1},sErrBg="#ffc7ce",eChange=new Event("change"),BG;chrome.runtime.getBackgroundPage(function(n){BG=n});window.addEventListener("focus",refresh);window.addEventListener("hashchange",handleHashChange);window.addEventListener("keydown",handleKeyDown);window.addEventListener("load",init); 