<script>
  import { geoPath, geoNaturalEarth1 } from "d3";
  export let countries = "";
  export let interiors = "";

  const projection = geoNaturalEarth1();
  const path = geoPath(projection);
</script>

<path class="sphere" d={path({ type: "Sphere" })} />
{#each countries as data}
  <path d={path(data)} />
{/each}
<path class="interiors" d={path(interiors)} />

<style>
  path {
    fill: #137b80;
  }
  .sphere {
    fill: #cecece;
  }
  .interiors {
    fill: transparent;
    stroke: #339498;
  }
</style>
