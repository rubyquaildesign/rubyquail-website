<script>
  import { onDestroy } from 'svelte'
  import Barry from './Count.svelte'
  import l from './model'
  export let name = 'fred'
  const interval = setInterval(() => ($l += 1), 1000)
  onDestroy(() => clearInterval(interval))
</script>

<!-- markup (zero or more items) goes here -->
<pre>Test Component {name}, {$l} <svelte:component this={Barry} /></pre>
