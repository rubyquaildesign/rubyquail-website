#! /Users/rubyquail/Library/pnpm zx

/* eslint-disable */

import 'zx/globals';
import * as w from 'wcag-contrast';
import * as d3 from 'd3';
import DOM from 'jsdom';
const colours = {
	lightBg: '#e0e0e0',
	darkText: '#C6CCD7',
	lightRed: '#F384A2',
	mediumRed: '#D34F73',
	darkRed: '#AB2F51',
	darkBG: '#21252B',
	darkVoid: '#0D1117',
	pureWhite: '#ffffff',
	pureBlack: '#000000',
};
const colArray = [...Object.entries(colours)];
const len = colArray.length;
globalThis.document = {};
const dom = new DOM.JSDOM(
	`<!DOCTYPE html><body><svg width="${len * 100}" height="${
		len * 100
	}"></svg></body>`,
);
const body = d3.select(dom.window.document.body);
const svg = d3.select(dom.window.document.querySelector('svg'));
for (let [x, [nameA, colourA]] of colArray.entries()) {
	for (let [y, [nameB, colourB]] of colArray.entries()) {
		if (colourA === colourB) continue;
		const xx = x * 100;
		const yy = y * 100;
		svg
			.append('rect')
			.attr('x', xx)
			.attr('y', yy)
			.attr('width', 100)
			.attr('height', 100)
      .attr('fill', colourB);
		const score = w.hex(colourA, colourB);
    const letterScore = w.score(score);
    svg.append('text').attr('x',xx+5).attr('y',yy+20).attr('fill',colourA).text(`${nameA}:${letterScore}`)
		console.log(
			`${nameA}(${colourA}) atop ${nameB}(${colourB}) has a ${letterScore} score of ${score}`,
		);
	}
}
const preamble = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`;
fs.writeFileSync('./output.svg', preamble + body.html());
/* eslint-enable */
