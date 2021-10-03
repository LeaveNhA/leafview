type Brand = {
  readonly brand: string;
  readonly version: string;
};

type NavigatorUAData = {
  readonly brands: Brand[];
  readonly mobile: boolean;
  readonly platform: string;
};

declare global {
  interface Window {
    myAPI: Sandbox;
  }
  interface Navigator {
    userAgentData: NavigatorUAData;
  }
}

export interface Sandbox {
  mimecheck: (filepath: string) => Promise<boolean>;

  history: (filepath: string) => void;

  contextMenu: () => void;

  dirname: (filepath: string) => Promise<string>;

  readdir: (dirpath: string) => Promise<void | string[]>;

  moveToTrash: (filepath: string) => Promise<void>;

  openDialog: () => Promise<string | void | undefined>;

  updateTitle: (filepath: string) => Promise<void>;

  menuNext: (listener: () => Promise<void>) => Electron.IpcRenderer;
  removeMenuNext: () => Electron.IpcRenderer;

  menuPrev: (listener: () => Promise<void>) => Electron.IpcRenderer;
  removeMenuPrev: () => Electron.IpcRenderer;

  menuRemove: (listener: () => Promise<void>) => Electron.IpcRenderer;
  removeMenuRemove: () => Electron.IpcRenderer;

  menuOpen: (
    listener: (_e: Event, filepath: string) => Promise<void>
  ) => Electron.IpcRenderer;
  removeMenuOpen: () => Electron.IpcRenderer;
}
