<script lang="ts">
	import { onMount } from 'svelte';

	let dialogueElement: HTMLDialogElement;
	const dayMilis = 24 * 60 * 60 * 1000;
	const close = () => {
		// Set AcknowledgeTime
		localStorage.setItem('last-acknowledgement', Date.now().toString());
		isOpen = false;
		window.clearTimeout(t);
	};
	let isOpen = false;
	let t: number;
	onMount(() => {
		const now = Date.now();
		const then = parseInt(localStorage.getItem('last-acknowledgement') ?? '0');
		if (now - then > dayMilis) dialogueElement.showModal();
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
		on:click={() => dialogueElement.close()}>Close</button
	>
</dialog>

<style>
	dialog {
		max-width: 800px;
		background-color: var(--gray50);

		color: var(--text-color);
		@media (prefers-color-scheme: light) {
			background-color: var(--card-background);
		}

		font-family: 'Work sans', sans-serif;
		border: 0;
		transition: all 100ms;
	}

	dialog::backdrop {
		background: #14171d;
		@media (prefers-color-scheme: light) {
			background: #fafafa;
		}
		transition: opacity 100ms;
	}

	a {
		color: var(--key-color);
	}

	strong {
		font-family: 'Quicksand', sans-serif;
	}

	button {
		color: #000;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
</style>
