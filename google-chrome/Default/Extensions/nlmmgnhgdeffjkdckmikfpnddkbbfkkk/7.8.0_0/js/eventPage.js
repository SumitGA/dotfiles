/*!
 * @package Autofill
 * @author T. H. Doan
 * @copyright (c) 2010-2017
 * @link http://www.tohodo.com/
 */
function init(){migrateData();localStorage.cats||(localStorage.cats="[]");localStorage.rules||(localStorage.rules="{}");localStorage.backup||(localStorage.backup="100");localStorage.delay||(localStorage.delay="1");(oO.menu||oO.menu===undefined)&&buildMenu(aC,+localStorage.catnow||1)}function migrateData(){var n,t;if(localStorage.rules&&/"t":4,"n":"[^"]/.test(localStorage.rules)){n=JSON.parse(localStorage.rules);for(t in n)n[t].t===4&&(n[t].t=0);localStorage.rules=JSON.stringify(n)}}function buildMenu(n,t){var r=["page","editable"],u=navigator.platform.indexOf("Mac")<0?"Alt":"Option",i;for(chrome.contextMenus.removeAll(),chrome.contextMenus.create({id:sMenuExeId,contexts:r,title:chrome.i18n.getMessage("generalExecute")}),chrome.contextMenus.create({id:sMenuExeId+"_1",parentId:sMenuExeId,contexts:r,type:"radio",title:chrome.i18n.getMessage("optionsProfilesMenuAll"),checked:t===1}),chrome.contextMenus.create({id:sMenuExeId+"_2",parentId:sMenuExeId,contexts:r,type:"radio",title:chrome.i18n.getMessage("optionsProfilesMenuUnfiled"),checked:t===2}),i=0;i<n.length;++i)chrome.contextMenus.create({id:sMenuExeId+"_"+(i+5),parentId:sMenuExeId,contexts:r,type:"radio",title:n[i].n+(i<10?" ("+u+"+"+(i===9?0:i+1)+")":""),checked:t===i+5});chrome.contextMenus.create({id:"cm_add_all",contexts:["page"],title:chrome.i18n.getMessage("generalAddRules")});chrome.contextMenus.create({id:"cm_add_one",contexts:["editable"],title:chrome.i18n.getMessage("generalAddRule")});chrome.contextMenus.create({id:"cm_separator",contexts:r,type:"separator"});chrome.contextMenus.create({id:"cm_options",contexts:r,title:chrome.i18n.getMessage("generalOptions")})}function handleMenu(n,t){n.menuItemId.indexOf("add")>-1?showWizard(n,t):n.menuItemId.indexOf("options")>-1?openOptions():n.parentMenuItemId===sMenuExeId&&execCat(n,t)}function execCat(n,t){resetCounters();localStorage.catnow=n.menuItemId.slice((sMenuExeId+"_").length);chrome.tabs.sendMessage(t.id,{type:"autofill",data:localStorage})}function openOptions(){chrome.runtime.openOptionsPage?chrome.runtime.openOptionsPage():chrome.tabs.create({url:chrome.runtime.getURL("options.html")})}function resetCounters(){nFields=nFilled=nTimer=0}function updateCatMenu(n,t){chrome.contextMenus.update(sMenuExeId+"_"+n,{checked:!1});chrome.contextMenus.update(sMenuExeId+"_"+t,{checked:!0});localStorage.catnow=t}function sendRules(n){setTimeout(function(){portWiz.postMessage({type:"createRules",data:aRules,field:n.field})},100)}function showWizard(n,t){t===undefined&&(t=n);chrome.browserAction.getTitle({tabId:t.id},function(i){i!==sExtName&&chrome.tabs.sendMessage(t.id,{type:"showWizard",data:{cats:localStorage.cats,catnow:localStorage.catnow,other:localStorage.other,voice:localStorage.voice,editable:n.editable,url:n.frameUrl||n.pageUrl}},function(n){n&&(chrome.tabs.insertCSS(t.id,{file:"css/wizard.css"}),chrome.tabs.executeScript(t.id,{file:"js/wizard.js"}))})})}function handleConnection(n){switch(n.name){case"wizard":portWiz=n;n.onMessage.addListener(handleMessage)}}function handleMessage(n,t,i){var u=n.data,e,a,s,c,y,l,p,h,r;switch(n.type){case"cat":i({data:{cats:localStorage.cats,catnow:localStorage.catnow}});break;case"count":nFields+=u.fields;nFilled+=u.filled;i({});break;case"deincrement":e=JSON.parse(localStorage.rules);e[u.rule].v=u.value;localStorage.rules=JSON.stringify(e);break;case"icon":chrome.browserAction.getTitle({tabId:t.tab.id},function(n){nFields&&n===sExtName&&(chrome.browserAction.setIcon({tabId:t.tab.id,path:{"16":"images/icon16.png","24":"images/icon24.png","32":"images/icon32.png"}}),chrome.browserAction.setTitle({tabId:t.tab.id,title:chrome.i18n.getMessage("buttonsGenerateRules").replace(/<\/?u>/g,"").replace("Rules","rules")}))});chrome.browserAction.setBadgeText({text:""+(nFilled||""),tabId:t.tab.id});nFilled&&(nTimer===0&&oO.sound&&(a=new Audio(chrome.runtime.getURL("sounds/sound.ogg")),a.play(),delete a),++nTimer);break;case"init":i({data:localStorage});break;case"resetCount":resetCounters();break;case"resetFieldEP":chrome.tabs.sendMessage(t.tab.id,{type:"resetFieldCS"});break;case"resetRightClickEP":return chrome.tabs.sendMessage(t.tab.id,{type:"resetRightClickCS"}),setTimeout(function(){i({})},100),!0;case"saveRules":var f=localStorage.cats?JSON.parse(localStorage.cats):[],w=+localStorage.catcount||1,o=+localStorage.catnow||1;if(u.n){s="c"+w++;c=o;f.push({k:s,n:u.n,s:u.s||"",o:oO.overwrite});try{localStorage.cats=JSON.stringify(f);localStorage.catcount=w}catch(k){alert(sExtName+": "+chrome.i18n.getMessage("statusStorageLimit"));return}if(!u.s)for(r=0;r<f.length;++r)if(f[r].n===u.n){c=r+5;break}buildMenu(f,o<c?o:++o);localStorage.catnow=o;i({data:{cat:s,cats:f,catnow:c}});aC=f}else{var s=u.rules[0].c,e=localStorage.rules?JSON.parse(localStorage.rules):{},b=+localStorage.rulecount||1,v=!1;if(u.rules[0].s)for(r=0,y=f.length;r<y;++r){if(f[r].k===s){o=r+5;break}r+1===y&&(s="",o=2)}n:for(r=0;r<u.rules.length;++r)if(l="^"+u.rules[r].n.trim().replace(/([$^.?+*\\|(){}\[\]])/g,"\\$1")+"$",l!=="^$"){p=u.rules[r].s?u.rules[r].s.replace(/^www\./,""):"";f[o-5]&&f[o-5].s&&p!==f[o-5].s&&(v=!0);for(h in e)if(e[h].c===s&&e[h].t===u.rules[r].t&&e[h].n===l){e[h].v=u.rules[r].v;continue n}e["r"+b++]={t:u.rules[r].t,n:l,v:u.rules[r].v,s:p,c:s}}if(v){for(r in e)e[r].c!==s||e[r].s||(e[r].s=f[o-5].s);f[o-5].s=""}try{localStorage.rules=JSON.stringify(e);localStorage.rulecount=b;(v||u.s&&o>2)&&(localStorage.cats=JSON.stringify(f))}catch(k){alert(sExtName+": "+chrome.i18n.getMessage("statusNotSavedStorageLimit"));return}updateCatMenu(+localStorage.catnow,o)}break;case"updateWizard":portWiz.postMessage({type:"updateWizard",field:u});break;case"getRules":aRules=[];chrome.tabs.sendMessage(t.tab.id,{type:"create",cat:u},sendRules);break;case"setRules":aRules=aRules.concat(u)}}var sMenuExeId="cm_execute",sExtName=chrome.runtime.getManifest().name,nFilled=0,nFields=0,nTimer=0,aRules,aC=localStorage.cats?JSON.parse(localStorage.cats):[],oO=localStorage.other?JSON.parse(localStorage.other):{},portWiz;chrome.browserAction.onClicked.addListener(showWizard);chrome.contextMenus.onClicked.addListener(handleMenu);chrome.runtime.onInstalled.addListener(init);chrome.runtime.onConnect.addListener(handleConnection);chrome.runtime.onMessage.addListener(handleMessage); 