const Singleton = require("./state_trackers/gui");

window.addEventListener("DOMContentLoaded", () => {
  const background = document.getElementById("main-container");
  background.style.backgroundColor = Singleton.getSingletonInstance().getData();
});
