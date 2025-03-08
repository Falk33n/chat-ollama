import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const viteConfig = defineConfig({
	plugins: [sveltekit(), tailwindcss()],
});

export default viteConfig;
