#! /Users/rubyquail/Library/pnpm zx

/* eslint-disable */

import 'zx/globals';
import { parse as toml } from 'toml';

const fl = await fs.readFile('./src/toml_data/cv.toml', 'utf8');
const data = toml(fl);
console.log(JSON.stringify(data));

/* eslint-enable */
