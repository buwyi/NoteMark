import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string;
      windowControl: (action: 'close' | 'minimize' | 'maximize') => void;
    };
  }
}
