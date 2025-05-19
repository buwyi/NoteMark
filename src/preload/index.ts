import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (!process.contextIsolated) {
  throw new Error('contextIsolated must be enabled in BroswerWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //TODO:
  })
} catch (err) {
  console.error(err)
}
