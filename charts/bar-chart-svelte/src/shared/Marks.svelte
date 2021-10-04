<script>
  import { fly } from "svelte/transition";
  export let dataset;
  export let xScale;
  export let yScale;
</script>

{#each dataset as data, i}
  <rect
    x={0}
    y={yScale(data.Location)}
    width={xScale(data.Population)}
    height={yScale.bandwidth()}
    in:fly={{ duration: 500 * i }}
  />
{/each}
