!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver((t=>{for(const e of t)if("childList"===e.type)for(const t of e.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&n(t)})).observe(document,{childList:!0,subtree:!0})}function n(t){if(t.ep)return;t.ep=!0;const n=function(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?n.credentials="include":"anonymous"===t.crossOrigin?n.credentials="omit":n.credentials="same-origin",n}(t);fetch(t.href,n)}}();const O={input:{themeswitcher:"themeSwitch",portalglyphsInput:"portalglyphsInput",delButton:"delButton",submitBtn:"submitBtnGen",resetBtn:"resetBtnGen"},output:{glyphDisplay:"glyphDisplay",output:"output"}},u={};function _(t){for(const n of Object.entries(t)){const t=n[0],e=n[1];for(const[n,o]of Object.entries(e)){const e=I(o);e&&(u[t]??(u[t]={}),u[t][n]=e)}}}function I(t){const n=Array.from(document.getElementsByName(t));return n.length?n:document.getElementById(t)}_(O);const y="0123456789ABCDEF",w=document.querySelector(".portal-buttons"),b=[],E=[];for(let t=0;t<16;t++){const n={element:"glyphButton"+t.toString(),handler:"click",func:function(){C(this)}},e=y[t],o=`<button class="button glyphs" type="button" id="glyphButton${t}" value="${e}">${e}</button>`;b.push(o),E.push(n)}w.innerHTML=b.join("");for(const t of E)F(t);function h(){const t=u.input.portalglyphsInput;u.output.glyphDisplay.innerText=t.value}function C(t){const n=u.input.portalglyphsInput;n.value.length<12&&(n.value+=t.value),h()}function B(t){const n=document.getElementById(t),e=n.value.slice(0,-1);n.value=e,h()}function v(){var t;if(!((null==(t=u.input)?void 0:t.portalglyphsInput)instanceof HTMLInputElement))return;const n=u.input.portalglyphsInput.value.trim(),e=j(n);N(n?`You are ${e?"":"not"} in Eisvana!`:"",e)}function L(){var t;(null==(t=u.input)?void 0:t.portalglyphsInput)instanceof HTMLInputElement&&(u.input.portalglyphsInput.value="",h(),v())}const T=window.matchMedia("(prefers-color-scheme: dark)").matches;function S(t=null){const n="dark"===document.documentElement.dataset.theme?"light":"dark",e=t??n;document.documentElement.dataset.theme=e}S(T?"dark":"light");const A=[{element:"themeSwitch",handler:"click",func:function(){S()}},{element:"delButton",handler:"click",func:function(){B("portalglyphsInput")}},{element:"submitBtn",handler:"click",func:function(){v()}},{element:"resetBtn",handler:"click",func:function(){L()}}];for(const t of A)F(t);function F(t){const{handler:n,func:e}=t,o=t.element,r=u[o]?u[o]:I(o);r||console.error(o+" is null"),Array.isArray(r)?r.forEach((t=>t.addEventListener(n,e))):r.addEventListener(n,e)}function k(t){if(19!=t.length)return"";const n=2047,e=parseInt(t.substring(0,4),16),o=parseInt(t.substring(5,9),16),r=parseInt(t.substring(10,14),16),u=parseInt(t.substring(15,19),16);let s=0,c=0,i=0;s=e<n?e+2049:e-n,i=r<n?r+2049:r-n,c=o<127?o+129:o-127;const l=new Array(5);l[0]="0",l[1]=u.toString(16).toUpperCase().padStart(3,"0"),l[2]=c.toString(16).toUpperCase().padStart(2,"0"),l[3]=i.toString(16).toUpperCase().padStart(3,"0"),l[4]=s.toString(16).toUpperCase().padStart(3,"0");const a=l.join("");return 12===a.length?a:""}const f={A21117FF:"Flinus",A11117FF:"Imnito",A11127FF:"Hiuccli",A21127FF:"Insesu",A21107FF:"Cuynteto",A21107FE:"Uskabar",A21117FE:"Ziwananau"};function j(t){const n=Object.keys(f),e=Object.values(f).map((t=>t.toLowerCase())),o=k(t),r=e.includes(t.toLowerCase()),u=n.includes(t.substring(4).toUpperCase()),s=n.includes(o.substring(4));return r||u||s}function N(t,n){const e=u.output.output,o=s(n),r=s(!n);function s(t){return t?"has-background-success-dark":"has-background-danger-dark"}e.classList.add(o),e.classList.remove(r),e.innerText=t}Object.freeze(f);