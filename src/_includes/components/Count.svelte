<script>
  export let barry = 'red';
  import l from './model';
</script>

<strong
  on:click={(e) => {
    barry = barry + $l;
  }}>{barry}</strong
>
