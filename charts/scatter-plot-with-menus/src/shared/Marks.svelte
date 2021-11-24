<script>
  import { fly } from "svelte/transition";
  export let dataset;
  export let xScale;
  export let yScale;
  export let xSelected;
  export let ySelected;

  console.log(dataset);
</script>

{#each dataset as data, i}
  <circle cx={xScale(data[xSelected])} cy={yScale(data[ySelected])} r="10" />
{/each}

<style>
  circle {
    fill: #137880;
  }
</style>
