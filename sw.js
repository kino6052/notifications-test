function scheduleNext() {
  setTimeout(() => {
    self.registration.showNotification("Hello World", {
      body: "Fired from service worker",
    });
    scheduleNext();
  }, 15 * 1000);
}

self.addEventListener("activate", () => {
  scheduleNext();
});
