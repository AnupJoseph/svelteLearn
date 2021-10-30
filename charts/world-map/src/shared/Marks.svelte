<script>
  import { draw } from "svelte/transition";
  import { curveNatural, line, geoPath, geoEqualEarth } from "d3";
  export let dataset;

  const projection = geoEqualEarth();
  const path = geoPath(projection);
</script>

{console.log(dataset)}
{#each dataset.features as data}
  <path d={path(data)} />
{/each}

<style>
  circle {
    fill: #137880;
  }
  path {
    fill: transparent;
    stroke: rgb(8, 250, 137);
    stroke-width: 2.5;
    stroke-linejoin: round;
    stroke-dasharray: 4400;
    stroke-dashoffset: 0;
    animation: dash 8.5s ease-in-out;
  }
  @keyframes dash {
    from {
      stroke-dashoffset: 4400;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
