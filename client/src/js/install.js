const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = "block";
});

butInstall.addEventListener("click", async () => {
  const promptResult = await deferredPrompt.choice;
  console.log(`User ${promptResult.outcome} the install prompt`);

  if (promptResult.outcome === "accepted") {
    console.log("User accepted to install the app");
  } else {
    console.log("User dismissed to install the app");
  }
  deferredPrompt = null;
  butInstall.style.display = "none";
});

window.addEventListener("appinstalled", (event) => {
  console.log("App installed");
});
