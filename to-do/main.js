const { app, BrowserWindow } = require("electron");
const path = require("path");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 768,
    height: 560,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("src/index.html");
}

app.whenReady().then(createMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
