<script>
  import { fly } from "svelte/transition";
  export let dataset;
  export let xScale;
  export let yScale;
</script>

{#each dataset as data, i}
  <circle
    cx={xScale(data.sepal_length)}
    cy={yScale(data.sepal_width)}
    r="10"
    in:fly={{ duration: 100, delay: 200 * i }}
  />
{/each}

<style>
  circle {
    fill: #137880;
  }
</style>
