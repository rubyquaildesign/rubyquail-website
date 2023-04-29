<script context="module" lang="ts">
	import type * as D from 'jsdom';
	import { createNoise3D } from '../scripts/simplex-noise';
	import svgFile from './pier.svg?raw';

	let svg: Document;
	let startingString: string;
	let pierElement: Element;
	let quailElement: Element;
	let noteElement: Element;
	const setFunc = async () => {
		if (typeof global !== 'undefined') {
			const D = await import('jsdom');
			svg = new D.JSDOM(svgFile).window.document;
		} else {
			svg = new DOMParser().parseFromString(svgFile, 'image/svg+xml');
		}
		startingString = svg.getElementById('pr-sea').getAttribute('d');
		pierElement = svg.getElementById('pr-pier')!;
		quailElement = svg.getElementById('pr-bird')!;
		noteElement = svg.getElementById('note')!;
	};
	const ns = createNoise3D();
	const TAU = Math.PI * 2;
	const CYCLE_FRAMES = 8 * 60;
	const RESOLUTION =
		typeof window !== 'undefined'
			? Math.floor(window.innerWidth / 8)
			: Math.floor(1080 / 8);
	const RADIUS = 0.5;
	const WID_MULT = 0.1;
	setFunc();
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	let seaString = startingString;
	let frameCount = 0;
	onMount(() => {
		let requestCode: number;
		const updateFunction = () => {
			const pts: string[] = [];
			const periodAngle = ((frameCount % CYCLE_FRAMES) / CYCLE_FRAMES) * TAU;
			for (let x = 0; x <= RESOLUTION; x++) {
				const xOff = (x / RESOLUTION) * 64;
				const y =
					85 +
					3 *
						Math.sin(
							ns(
								Math.cos(periodAngle - xOff / 8) * RADIUS,
								Math.sin(periodAngle - xOff / 8) * RADIUS,
								xOff * WID_MULT,
							),
						);
				pts.push(`${((x / RESOLUTION) * 100).toFixed(3)} ${y.toFixed(3)}`);
			}
			seaString = `M${pts.join('L')}L100 100L0 100Z`;
			frameCount = frameCount + 1;
			requestCode = window.requestAnimationFrame(updateFunction);
		};
		requestCode = window.requestAnimationFrame(updateFunction);
		return () => {
			window.cancelAnimationFrame(requestCode);
		};
	});
</script>

{#if svg}
	<svg viewBox="0 30 100 70">
		<path style="fill: var(--card-background)" d={seaString} />
		<g style="fill: var(--card-background)">
			{@html pierElement.innerHTML}
		</g>
		<a href="/blog">
			{@html noteElement.outerHTML}
		</a>
		<g>
			<path
				d={quailElement.querySelector('#body').getAttribute('d')}
				style="fill:#ce4655"
			/>
			<path
				d={quailElement.querySelector('#belly').getAttribute('d')}
				style="fill:#e27179"
			/>
			<path
				d={quailElement.querySelector('#back').getAttribute('d')}
				style="fill:#b01e37"
			/>
			<path
				d={quailElement.querySelector('#feet').getAttribute('d')}
				style="fill:#b01e37"
			/>
		</g>
	</svg>
{/if}

<style>
	svg {
		width: 100%;
		padding: 0;
		margin: 0;
		z-index: -1;
		margin-bottom: -0.5em;
	}
</style>
