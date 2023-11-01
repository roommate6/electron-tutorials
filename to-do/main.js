const { app, BrowserWindow } = require("electron");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 768,
    height: 560,
  });

  mainWindow.loadFile("src/index.html");
}

app.whenReady().then(createMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
