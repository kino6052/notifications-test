function scheduleNext() {
  setTimeout(() => {
    self.registration.showNotification("Hello World", {
      body: "Fired from service worker",
    });
    scheduleNext();
  }, 60 * 1000);
}

self.addEventListener("activate", () => {
  scheduleNext();
});
