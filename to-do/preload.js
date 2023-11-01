const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  createNode: (data) => ipcRenderer.invoke("create-file", data),
});
