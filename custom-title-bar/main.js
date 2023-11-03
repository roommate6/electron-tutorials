const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const ipc = ipcMain;
const { applyColorOverlay } = require("./scripts/applyColorOverlay");
const { deleteFilesInDirectory } = require("./scripts/deleteFilesInDirectory");
const { copyFiles } = require("./scripts/copyFiles");
const { getSingletonInstance } = require("./state_trackers/guiState");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    minWidth: 940,
    minHeight: 560,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipc.on("top-button:close", () => {
    mainWindow.close();
  });

  ipc.on("top-button:maximize", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
      return;
    }
    mainWindow.maximize();
  });
  mainWindow.on("maximize", () => {
    mainWindow.webContents.send("main-window:maximize");
  });
  mainWindow.on("unmaximize", () => {
    mainWindow.webContents.send("main-window:restore");
  });

  ipc.on("top-button:minimize", () => {
    mainWindow.minimize();
  });

  mainWindow.loadFile(path.join(__dirname, "src/index.html"));
}

app.whenReady().then(async () => {
  const iconsPath = path.join(__dirname, "src", "icons");
  const iconsTemporaryPath = path.join(__dirname, "src", "icons_temporary");
  deleteFilesInDirectory(iconsTemporaryPath);
  await applyColorOverlay(
    iconsPath,
    iconsTemporaryPath,
    getSingletonInstance().palette.text.hexaValue
  );
  deleteFilesInDirectory(iconsPath);
  copyFiles(iconsTemporaryPath, iconsPath);

  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
