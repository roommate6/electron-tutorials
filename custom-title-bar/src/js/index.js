const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", () => {
  ipc.send("top-button:close");
});

const maximizeButton = document.getElementById("maximize-button");

function changeMaximizeButton(isMaximized) {
  if (isMaximized) {
    maximizeButton.title = "Restore";
    maximizeButton.classList.remove("maximize-button");
    maximizeButton.classList.add("restore-button");
    return;
  }
  maximizeButton.title = "Maximize";
  maximizeButton.classList.remove("restore-button");
  maximizeButton.classList.add("maximize-button");
}

maximizeButton.addEventListener("click", () => {
  ipc.send("top-button:maximize");
});

ipc.on("main-window:maximize", () => {
  changeMaximizeButton(true);
});
ipc.on("main-window:restore", () => {
  changeMaximizeButton(false);
});

const minimizeButton = document.getElementById("minimize-button");

minimizeButton.addEventListener("click", () => {
  ipc.send("top-button:minimize");
});
