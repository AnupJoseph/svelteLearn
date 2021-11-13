<script>
  // D3 stuff
  import { json } from "d3";

  // Components
  import Marks from "./shared/Marks.svelte";

  // Load dataset
  let dataset = {};
  json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then(
    (topology) => {
      const { countries } = topology.objects;
      dataset["countries"] = topojson.feature(topology, countries);
      dataset["countries"] = dataset["countries"].features;

      dataset["interiors"] = topojson.mesh(
        topology,
        countries,
        (a, b) => a !== b
      );
    }
  );

  // Actual graph work
  const width = 1200,
    height = 600;
  {
    console.log(dataset);
  }
</script>

<main>
  <svg {width} {height}>
    <Marks {...dataset} />
  </svg>
</main>

<style>
  svg {
    display: block;
    position: absolute;
  }
</style>
