// eslint-disable-next-line import/no-extraneous-dependencies
const electron = require('electron');
const windowManager = require('electron-window-manager');

const { app, BrowserWindow } = electron;

const path = require('path');
// const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => {
    mainWindow = null;
    return mainWindow;
  });
}

function createWindowManagerWindow() {
  windowManager.init();
  // Open a window
  windowManager.open(
    'home',
    'Saturn Electron App Sample',
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`,
    undefined,
    {
      width: 1200,
      height: 980,
      maximizable: true,
      minimizable: true,
      resizable: true,
      webPreferences: {
        nodeIntegration: true,
      },
    },
    isDev
  );
}

app.on('ready', createWindowManagerWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
