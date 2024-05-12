/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="@astrojs/image/client" />
/// <reference types="astro/client" />
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface ImportMetaEnv {
	readonly DB_PASSWORD: string;
	readonly PUBLIC_POKEAPI: string;
	// more env variables...
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
