const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
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

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("App installed");
});
