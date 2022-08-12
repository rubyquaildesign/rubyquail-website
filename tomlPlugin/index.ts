/* eslint-disable object-shorthand */
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as chokidar from 'chokidar';
import * as toml from 'toml';
import type { Plugin } from 'vite';

const defaults = { inputFolder: 'src/toml', outputFolder: 'src/_data' };

export function tomlConvert(options: {
	inputFolder?: string;
	outputFolder?: string;
}) {
	const mainOptions = { ...defaults, ...options };
	let watcher: chokidar.FSWatcher;
	let cmd: 'build' | 'serve';
	const plugin: Plugin = {
		name: 'ruby-toml-plugin',
		config: (cfg, cenv) => {
			cmd = cenv.command;
		},

		buildStart: _options => {
			if (cmd === 'serve') {
				const inFolder = mainOptions.inputFolder;
				const outFolder = path.resolve(mainOptions.outputFolder);
				watcher = chokidar.watch(path.resolve(inFolder, '*.toml'));
				watcher.on('change', pth => {
					const content = fs.readFileSync(pth, 'utf8');
					const tml: unknown = toml.parse(content);
					const name = path.basename(pth, '.toml');
					path.join(',');
					const output = path.resolve(outFolder, `${name}.json`);
					fs.writeFileSync(output, JSON.stringify(tml, null, '\t'));
				});
			}
		},
	};
	return plugin;
}

export default tomlConvert;
