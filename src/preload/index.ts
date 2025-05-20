import { contextBridge } from 'electron';
// import { Titlebar } from 'custom-electron-titlebar';
import { electronAPI } from '@electron-toolkit/preload';

if (!process.contextIsolated) {
  throw new Error('contextIsolated must be enabled in BroswerWindow');
}

try {
  contextBridge.exposeInMainWorld('context', {
    //TODO:
  });
} catch (err) {
  console.error(err);
}

// window.addEventListener('DOMContentLoaded', () => {
//   new Titlebar({
//     // backgroundColor:#202020,
//     shadow: true,
//     minimizable: true,
//     maximizable: true,
//     closeable: true,
//   });
// });
