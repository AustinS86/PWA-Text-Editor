(()=>{const e=document.getElementById("buttonInstall");let t;window.addEventListener("beforeinstallprompt",(l=>{l.preventDefault(),t=l,e.style.display="block"})),e.addEventListener("click",(async()=>{const l=await t.choice;console.log(`User ${l.outcome} the install prompt`),"accepted"===l.outcome?console.log("User accepted to install the app"):console.log("User dismissed to install the app"),t=null,e.style.display="none"})),window.addEventListener("appinstalled",(e=>{console.log("App installed")}))})();