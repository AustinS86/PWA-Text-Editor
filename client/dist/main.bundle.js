(()=>{"use strict";var n={402:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"/* app shell CSS */\r\n:root {\r\n  --primary: #31a9e1;\r\n  --gray: #ececec;\r\n  --whitesmoke: #f5f5f5;\r\n  --dark: #222;\r\n  --monoaki: #272822;\r\n  --navbar-height: 50px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--monoaki);\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 22px;\r\n}\r\n\r\n#navbar {\r\n  height: var(--navbar-height);\r\n  background-color: var(--primary);\r\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: white;\r\n  font-size: 22px;\r\n  font-weight: 550;\r\n  letter-spacing: 0.9px;\r\n}\r\n\r\n.navbar-brand img {\r\n  padding-top: 10px;\r\n}\r\n\r\n.loading-spinner {\r\n  animation-duration: 0.75s;\r\n  animation-iteration-count: infinite;\r\n  animation-name: rotate-forever;\r\n  animation-timing-function: linear;\r\n  height: 30px;\r\n  width: 30px;\r\n  border: 3px solid var(--primary);\r\n  border-right-color: transparent;\r\n  border-radius: 50%;\r\n}\r\n\r\n.loading-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: calc(100vh - var(--navbar-height));\r\n}\r\n\r\n@keyframes rotate-forever {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.app-update {\r\n  display: none;\r\n  position: absolute;\r\n  right: 10px;\r\n}\r\n\r\n.app-update.show {\r\n  display: block;\r\n}\r\n\r\n.nav-btn {\r\n  margin: 25px;\r\n}\r\n\r\n.btn {\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 0.5rem 1.2rem;\r\n  margin: 0;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n  border-radius: 0.3rem;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n  color: #1a1a1a;\r\n  background-color: #aeaeae;\r\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #cecece;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.btn-squared {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn.btn-sm {\r\n  font-size: 0.85rem;\r\n  padding: 0.3rem 0.9rem;\r\n}\r\n\r\n.btn.btn-lg {\r\n  font-size: 1.25rem;\r\n  padding: 0.8rem 1.4rem;\r\n}\r\n\r\n.btn.btn-block {\r\n  width: 100%;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.btn.btn-primary {\r\n  background-color: #2d3e50;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-primary:hover {\r\n  background-color: #57779a;\r\n}\r\n\r\n.btn.btn-danger {\r\n  background-color: #e64c66;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-danger:hover {\r\n  background-color: #ee8294;\r\n}\r\n\r\n.btn.btn-info {\r\n  background-color: #1bbc9b;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-info:hover {\r\n  background-color: #31e1bd;\r\n}\r\n\r\n.btn.btn-light {\r\n  background-color: #d9e9e8;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-light:hover {\r\n  background-color: #84b8b4;\r\n}\r\n\r\n.btn.btn-dark {\r\n  background-color: #1a1a1a;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-dark:hover {\r\n  background-color: #5f5f5f;\r\n}\r\n\r\n.btn.btn-white {\r\n  background-color: #ffffff;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-white:hover {\r\n  background-color: #cccccc;\r\n}\r\n\r\n.btn.btn-black {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-black:hover {\r\n  background-color: #666666;\r\n}\r\n\r\n.btn.btn-link {\r\n  background-color: #1b89bc;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-link:hover {\r\n  background-color: #31a9e1;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .nav-btn {\r\n    display: none;\r\n  }\r\n\r\n  .navbar-brand {\r\n    display: none;\r\n  }\r\n\r\n  #navbar {\r\n    justify-content: center;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 18px;\r\n  }\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=t.base?c[0]+t.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var f=e(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)r[f].references++,r[f].updater(p);else{var v=o(p,t);t.byIndex=s,r.splice(s,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),u=0;u<a.length;u++){var d=e(a[u]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{try{self["workbox:window:6.5.3"]&&_()}catch(n){}function n(n,r){return new Promise((function(e){var t=new MessageChannel;t.port1.onmessage=function(n){e(n.data)},n.postMessage(r,[t.port2])}))}function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}function t(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=n[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.3"]&&_()}catch(n){}var o=function(){var n=this;this.promise=new Promise((function(r,e){n.resolve=r,n.reject=e}))};function a(n,r){var e=location.href;return new URL(n,e).href===new URL(r,e).href}var i=function(n,r){this.type=n,Object.assign(this,r)};function s(n,r,e){return e?r?r(n):n:(n&&n.then||(n=Promise.resolve(n)),r?n.then(r):n)}function c(){}var u={type:"SKIP_WAITING"};function d(n,r){if(!r)return n&&n.then?n.then(c):Promise.resolve()}var l=function(r){var e,t;function c(n,e){var t,c;return void 0===e&&(e={}),(t=r.call(this)||this).nn={},t.tn=0,t.rn=new o,t.en=new o,t.on=new o,t.un=0,t.an=new Set,t.cn=function(){var n=t.fn,r=n.installing;t.tn>0||!a(r.scriptURL,t.sn.toString())||performance.now()>t.un+6e4?(t.vn=r,n.removeEventListener("updatefound",t.cn)):(t.hn=r,t.an.add(r),t.rn.resolve(r)),++t.tn,r.addEventListener("statechange",t.ln)},t.ln=function(n){var r=t.fn,e=n.target,o=e.state,a=e===t.vn,s={sw:e,isExternal:a,originalEvent:n};!a&&t.mn&&(s.isUpdate=!0),t.dispatchEvent(new i(o,s)),"installed"===o?t.wn=self.setTimeout((function(){"installed"===o&&r.waiting===e&&t.dispatchEvent(new i("waiting",s))}),200):"activating"===o&&(clearTimeout(t.wn),a||t.en.resolve(e))},t.dn=function(n){var r=t.hn,e=r!==navigator.serviceWorker.controller;t.dispatchEvent(new i("controlling",{isExternal:e,originalEvent:n,sw:r,isUpdate:t.mn})),e||t.on.resolve(r)},t.gn=(c=function(n){var r=n.data,e=n.ports,o=n.source;return s(t.getSW(),(function(){t.an.has(o)&&t.dispatchEvent(new i("message",{data:r,originalEvent:n,ports:e,sw:o}))}))},function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{return Promise.resolve(c.apply(this,n))}catch(n){return Promise.reject(n)}}),t.sn=n,t.nn=e,navigator.serviceWorker.addEventListener("message",t.gn),t}t=r,(e=c).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var l,f=c.prototype;return f.register=function(n){var r=(void 0===n?{}:n).immediate,e=void 0!==r&&r;try{var t=this;return function(n,r){var e=n();return e&&e.then?e.then(r):r()}((function(){if(!e&&"complete"!==document.readyState)return d(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return t.mn=Boolean(navigator.serviceWorker.controller),t.yn=t.pn(),s(t.bn(),(function(n){t.fn=n,t.yn&&(t.hn=t.yn,t.en.resolve(t.yn),t.on.resolve(t.yn),t.yn.addEventListener("statechange",t.ln,{once:!0}));var r=t.fn.waiting;return r&&a(r.scriptURL,t.sn.toString())&&(t.hn=r,Promise.resolve().then((function(){t.dispatchEvent(new i("waiting",{sw:r,wasWaitingBeforeRegister:!0}))})).then((function(){}))),t.hn&&(t.rn.resolve(t.hn),t.an.add(t.hn)),t.fn.addEventListener("updatefound",t.cn),navigator.serviceWorker.addEventListener("controllerchange",t.dn),t.fn}))}))}catch(n){return Promise.reject(n)}},f.update=function(){try{return this.fn?d(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},f.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},f.messageSW=function(r){try{return s(this.getSW(),(function(e){return n(e,r)}))}catch(n){return Promise.reject(n)}},f.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,u)},f.pn=function(){var n=navigator.serviceWorker.controller;return n&&a(n.scriptURL,this.sn.toString())?n:void 0},f.bn=function(){try{var n=this;return function(n,r){try{var e=n()}catch(n){return r(n)}return e&&e.then?e.then(void 0,r):e}((function(){return s(navigator.serviceWorker.register(n.sn,n.nn),(function(r){return n.un=performance.now(),r}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(c.prototype,l),c}(function(){function n(){this.Pn=new Map}var r=n.prototype;return r.addEventListener=function(n,r){this.Sn(n).add(r)},r.removeEventListener=function(n,r){this.Sn(n).delete(r)},r.dispatchEvent=function(n){n.target=this;for(var r,e=t(this.Sn(n.type));!(r=e()).done;)(0,r.value)(n)},r.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());const f=(n,r)=>r.some((r=>n instanceof r));let p,v;const h=new WeakMap,g=new WeakMap,b=new WeakMap,m=new WeakMap,y=new WeakMap;let w={get(n,r,e){if(n instanceof IDBTransaction){if("done"===r)return g.get(n);if("objectStoreNames"===r)return n.objectStoreNames||b.get(n);if("store"===r)return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return x(n[r])},set:(n,r,e)=>(n[r]=e,!0),has:(n,r)=>n instanceof IDBTransaction&&("done"===r||"store"===r)||r in n};function k(n){return"function"==typeof n?(r=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(v||(v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...n){return r.apply(S(this),n),x(h.get(this))}:function(...n){return x(r.apply(S(this),n))}:function(n,...e){const t=r.call(S(this),n,...e);return b.set(t,n.sort?n.sort():[n]),x(t)}:(n instanceof IDBTransaction&&function(n){if(g.has(n))return;const r=new Promise(((r,e)=>{const t=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{r(),t()},a=()=>{e(n.error||new DOMException("AbortError","AbortError")),t()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)}));g.set(n,r)}(n),f(n,p||(p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(n,w):n);var r}function x(n){if(n instanceof IDBRequest)return function(n){const r=new Promise(((r,e)=>{const t=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{r(x(n.result)),t()},a=()=>{e(n.error),t()};n.addEventListener("success",o),n.addEventListener("error",a)}));return r.then((r=>{r instanceof IDBCursor&&h.set(r,n)})).catch((()=>{})),y.set(r,n),r}(n);if(m.has(n))return m.get(n);const r=k(n);return r!==n&&(m.set(n,r),y.set(r,n)),r}const S=n=>y.get(n);function j(n,r,{blocked:e,upgrade:t,blocking:o,terminated:a}={}){const i=indexedDB.open(n,r),s=x(i);return t&&i.addEventListener("upgradeneeded",(n=>{t(x(i.result),n.oldVersion,n.newVersion,x(i.transaction))})),e&&i.addEventListener("blocked",(()=>e())),s.then((n=>{a&&n.addEventListener("close",(()=>a())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}const E=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],L=new Map;function P(n,r){if(!(n instanceof IDBDatabase)||r in n||"string"!=typeof r)return;if(L.get(r))return L.get(r);const e=r.replace(/FromIndex$/,""),t=r!==e,o=I.includes(e);if(!(e in(t?IDBIndex:IDBObjectStore).prototype)||!o&&!E.includes(e))return;const a=async function(n,...r){const a=this.transaction(n,o?"readwrite":"readonly");let i=a.store;return t&&(i=i.index(r.shift())),(await Promise.all([i[e](...r),o&&a.done]))[0]};return L.set(r,a),a}var D;D=w,w={...D,get:(n,r,e)=>P(n,r)||D.get(n,r,e),has:(n,r)=>!!P(n,r)||D.has(n,r)},(async()=>{j("jate",1,{upgrade(n){n.objectStoreNames.contains("jate")?console.log("jate database already exists"):(n.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}})})();const M="\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n";var B=e(379),C=e.n(B),T=e(795),W=e.n(T),A=e(569),O=e.n(A),N=e(565),U=e.n(N),R=e(216),z=e.n(R),H=e(589),q=e.n(H),F=e(402),Z={};Z.styleTagTransform=q(),Z.setAttributes=U(),Z.insert=O().bind(null,"head"),Z.domAPI=W(),Z.insertStyleElement=z(),C()(F.Z,Z),F.Z&&F.Z.locals&&F.Z.locals;const K=document.querySelector("#main");K.innerHTML="",void 0===new class{constructor(){const n=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),(async()=>{const n=(await j("jate",1)).transaction("jate","readonly").objectStore("jate").getAll();return await n})().then((r=>{console.info("Loaded data from IndexedDB, injecting into editor"),console.log("Data from IndexedDB:",r),console.log("Local data:",n),console.log("Header:",M),this.editor.setValue(r||n||M)})),this.editor.on("change",(()=>{localStorage.setItem("content",this.editor.getValue())})),this.editor.on("blur",(()=>{console.log("The editor has lost focus"),(async n=>{const r=(await j("jate",1)).transaction("jate","readwrite").objectStore("jate").put({id:1,content:n}),e=await r;console.log("Content saved to the database!",e)})(localStorage.getItem("content"))}))}}&&(()=>{const n=document.createElement("div");n.classList.add("spinner"),n.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',K.appendChild(n)})(),"serviceWorker"in navigator?new l("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();