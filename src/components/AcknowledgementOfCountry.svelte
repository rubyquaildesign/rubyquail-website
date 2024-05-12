<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let dialogueElement: HTMLDialogElement;
	const dayMilis = 24 * 60 * 60 * 1000;
	const close = () => {
		localStorage.setItem('last-acknowledgement', Date.now().toString());
		isOpen = false;
		window.clearTimeout(t);
	};
	let isOpen = false;
	let t: number;

	const fadeClose = () => {
		const keyFrame = new KeyframeEffect(dialogueElement, [{ opacity: '0' }], {
			duration: 300,
			easing: 'ease',
			direction: 'normal',
		});
		const keyFrameBG = new KeyframeEffect(dialogueElement, [{ opacity: '0' }], {
			duration: 300,
			easing: 'ease',
			direction: 'normal',
			pseudoElement: '::backdrop',
		});

		const animation = new Animation(keyFrame, document.timeline);
		const animationBG = new Animation(keyFrameBG, document.timeline);
		animation.play();
		animationBG.play();
		animation.onfinish = () => dialogueElement.close();
	};
	onMount(() => {
		const now = Date.now();
		const then = parseInt(localStorage.getItem('last-acknowledgement') ?? '0');
		if (now - then > dayMilis) dialogueElement.showModal();
		// dialogueElement.showModal();
		t = window.setTimeout(() => dialogueElement.close(), 3000);
		return () => {
			close();
			dialogueElement.close();
			window.clearTimeout(t);
		};
	});
</script>

<dialog bind:this={dialogueElement} on:close={close}>
	<p>
		Ruby would like to acknowledge the Traditional owners of the lands she works
		on, the Wirrundjuri People of the Kulin Nations and would like to pay
		respects to their Elders both past, present and emerging.
	</p>
	<p>
		Sovereignty was never ceded, It was and always will be, Aboriginal land.
	</p>
	<p><strong>Organisations you can pay the rent to:</strong></p>
	<ul>
		<li>
			<a href="https://www.gofundme.com/f/bfvnvt-freethepeople" target="_blank"
				>Sisters Inside</a
			>
		</li>
		<li>
			<a href="https://www.vals.org.au/donate/" target="_blank"
				>Victorian Aboriginal Legal Service</a
			>
		</li>
		<li>
			<a href="https://blackrainbow.org.au/donate/" target="_blank"
				>Black Rainbow</a
			>
		</li>
	</ul>
	<button
		style="width: max-content;"
		id="close-aoc"
		on:click={() => fadeClose()}>Close</button
	>
</dialog>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	dialog {
		max-width: var(--measure);
		pointer-events: none;
		background-color: var(--background);
		text-align: left;
		color: var(--text);
		opacity: 1;
		font-family: var(--font-serif);
		animation: fade-in 500ms forwards ease;
		pointer-events: inherit;
		border: 0;
	}
	:global(dialog::backdrop) {
		--D-background: #13161a;
		--L-background: #f6efed;
		--background: var(--D-background);

		@media (prefers-color-scheme: light) {
			--background: var(--L-background);
		}
		background-color: var(--background);
	}

	a {
		color: var(--key-color);
	}

	strong {
		font-family: 'Quicksand', sans-serif;
	}

	button#close-aoc {
		background-color: var(--secondary);
		font-family: var(--font-heading);
		color: var(--text);
		border: 0;
		display: block;
		margin-left: auto;
		margin-right: auto;
		padding-inline: var(--space-2xs);
		border-radius: var(--space-3xs);
		cursor: pointer;
	}
</style>
