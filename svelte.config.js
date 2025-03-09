import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const svelteConfig = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$styles: './src/app.css',
			$utils: './src/lib/utils.ts',
			$types: './src/lib/types.ts',
			$schemas: './src/lib/schemas.ts',
			$hooks: './src/lib/hooks.svelte.ts',
			$components: './src/lib/components',
			$server: './src/lib/server',
		},
	},
};

export default svelteConfig;
