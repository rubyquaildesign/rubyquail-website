/* eslint-disable no-await-in-loop */
import fs from 'fs';

import toml from 'toml';

const f = new URL('icons.toml', import.meta.url);
const data = toml.parse(fs.readFileSync(f, 'utf8'));
console.log(data);
for (const key of Object.keys(data.icons)) {
	const icns = data.icons[key];
	const response = await fetch(
		`https://api.iconify.design/${key}.json?icons=${icns.join(',')}`,
	);
	const l = await response.text();
	console.log(l);
	const location = new URL(`icons/${key}.json`, import.meta.url);
	fs.writeFileSync(location, l);
}
