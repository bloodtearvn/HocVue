import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
            '@models': fileURLToPath(new URL('./src/models', import.meta.url)),
            '@repositories': fileURLToPath(new URL('./src/repositories', import.meta.url)),
            '@store': fileURLToPath(new URL('./src/stores', import.meta.url)),
        }
    }
});