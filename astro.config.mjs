// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages (project site): https://<user>.github.io/Portfolio/
// If you later use a user site repo (<user>.github.io), set base to '/'.
export default defineConfig({
	site: 'https://bhavyabansal.github.io',
	base: '/Portfolio',
	trailingSlash: 'always',
});
