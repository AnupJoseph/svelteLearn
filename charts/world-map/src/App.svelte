<script>
  // D3 stuff
  import { json } from "d3";

  // Components
  import Marks from "./shared/Marks.svelte";

  // Load dataset
  let dataset = [];
  json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then(
    (data) => {
      const { countries } = data.objects;
      console.log(topojson.feature(data,countries))
      dataset = topojson.feature(data, countries);
    }
  );

  // Actual graph work
  const width = 1200,
    height = 600;
</script>

<main>
  {console.log(dataset)}
  <svg {width} {height}>
    <Marks {dataset} />
  </svg>
</main>

<style>
  svg {
    display: block;
    position: absolute;
  }
</style>
