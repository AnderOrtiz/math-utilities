(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function a(t,n,c){if(t===0)return"No es una ecuación cuadrática";const o=n*n-4*t*c;if(o<0)return"No hay soluciones reales";if(o===0)return`Una solución: x = ${-n/(2*t)}`;{const e=(-n+Math.sqrt(o))/(2*t),r=(-n-Math.sqrt(o))/(2*t);return`Dos soluciones: x1 = ${e.toFixed(2)}, x2 = ${r.toFixed(2)}`}}function d(){const t=document.createElement("div");t.innerHTML=`
    <h2>Fórmula General</h2>
    <input id="a" type="number" placeholder="a"/>
    <input id="b" type="number" placeholder="b"/>
    <input id="c" type="number" placeholder="c"/>
    <button id="solve">Resolver</button>
    <p id="result"></p>`;const n=t.querySelector("#solve"),c=t.querySelector("#result");return n.addEventListener("click",()=>{const o=parseFloat(t.querySelector("#a").value),e=parseFloat(t.querySelector("#b").value),r=parseFloat(t.querySelector("#c").value);c.textContent=a(o,e,r)}),t}function p(t,n,c){const o=[];for(let e=n;e<=c;e++){let r=0;const i=t.length-1;for(let s=0;s<t.length;s++)r+=t[s]*Math.pow(e,i-s);r===0&&o.push(e),console.log(`${e} => ${r}`)}return o}function f(){const t=document.createElement("div");t.innerHTML=`
        <h2>División sintética</h2>
        <input id="coeffs" type="text" placeholder="Coeficientes (ej: 1,-2,0,1)"/>
        <input id="xmin" type="number" placeholder="x mínimo" value="-10"/>
        <input id="xmax" type="number" placeholder="x máximo" value="10"/>
        <button id="find">Buscar raíces</button>
        <p id="result"></p>
    `;const n=t.querySelector("#find"),c=t.querySelector("#result");return n.addEventListener("click",()=>{const e=t.querySelector("#coeffs").value.split(",").map(u=>parseFloat(u.trim())),r=parseInt(t.querySelector("#xmin").value),i=parseInt(t.querySelector("#xmax").value),s=p(e,r,i);c.textContent=s.length>0?`Raíces encontradas: [${s.join(", ")}]`:"No se encontraron raíces en el rango."}),t}document.querySelector("#app").innerHTML=`
  <h1>Math Utilities</h1>
`;const l=document.querySelector("#app");l.appendChild(d());l.appendChild(f());
