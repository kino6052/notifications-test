let notificationInterval = null;

function scheduleNext() {
  if (notificationInterval) {
    clearTimeout(notificationInterval);
  }

  notificationInterval = setTimeout(() => {
    self.registration.showNotification("Hello World", {
      body: "Fired from service worker",
    });
    scheduleNext();
  }, 5 * 1000);
}

// Listen for messages from the page to start notifications
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "START_NOTIFICATIONS") {
    scheduleNext();
  } else if (event.data && event.data.type === "STOP_NOTIFICATIONS") {
    if (notificationInterval) {
      clearTimeout(notificationInterval);
      notificationInterval = null;
    }
  }
});
