'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const crashReporter = electron.crashReporter

// Report crashes to our server.
crashReporter.start()

let mainWindow

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') app.quit()
})

app.on('ready', () => {

  mainWindow = new BrowserWindow({width: 1000, height: 800})

  mainWindow.loadURL(`file://${__dirname}/app/index.html`)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
