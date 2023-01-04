/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Put your env variables here...
  readonly VITE_APP_INJECTED_BASE_URI: string;
  readonly VITE_APP_INJECTED_NUMBER: number;
  readonly VITE_APP_INJECTED_BASE_IMAGE_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
