/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/triple-slash-reference */
// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="@astrojs/image" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly DB_PASSWORD: string;
	readonly PUBLIC_POKEAPI: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
