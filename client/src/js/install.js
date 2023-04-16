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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      console.log("Service worker registered successfully");
    })
    .catch((error) => {
      console.error("Failed to register service worker:", error);
    });
} else {
  console.error("Service workers are not supported in this browser.");
}

window.addEventListener("appinstalled", (event) => {
  console.log("App installed");
});
