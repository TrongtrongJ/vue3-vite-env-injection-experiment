// through 'import_meta_env_placeholder' injection

const base_uri = import.meta.env.VITE_APP_INJECTED_BASE_URI;

const injected_env_number = import.meta.env.VITE_APP_INJECTED_NUMBER;

const base_image_uri = import.meta.env.VITE_APP_INJECTED_BASE_IMAGE_URI;

export const envsMap = {
  base_uri,
  injected_env_number,
  base_image_uri,
} as const;
