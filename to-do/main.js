const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 768,
    height: 560,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipcMain.handle("create-file", (req, data) => {
    if (!data || !data.title || !data.content) {
      return { success: false };
    }

    const filePath = path.join(__dirname, "notes", `${data.title}.txt`);
    fs.writeFileSync(filePath, data.content);

    return { success: true, filePath };
  });

  mainWindow.loadFile("src/index.html");
}

app.whenReady().then(createMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
