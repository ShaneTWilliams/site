import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	],
	server: {
		host: '0.0.0.0',
		port: 3000
	},
	optimizeDeps: {
		exclude: ['chartjs-svelte']
	},
});
