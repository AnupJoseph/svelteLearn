<script>
  // D3 stuff
  import { csv, scaleBand, scaleLinear, max } from "d3";

  // Components
  import AxisBottom from "./shared/AxisBottom.svelte";
  import AxisLeft from "./shared/AxisLeft.svelte";
  import Marks from "./shared/Marks.svelte";

  // Load dataset
  let dataset = [];
  const row = function (data) {
    data["Population"] = +data["2020"];
    return data;
  };
  csv("data/population_data.csv", row).then((data) => {
    dataset = data.slice(0, 10);
  });

  // Actual graph work
  const width = 840,
    height = 600,
    margin = { top: 20, right: 20, left: 240, bottom: 20 };
  const innerHeight = height - margin.top - margin.bottom,
    innerWidth = width - margin.left - margin.right;
  $: yScale = scaleBand()
    .domain(dataset.map((d) => d["Location"]))
    .range([0, innerHeight]);

  $: xScale = scaleLinear()
    .domain([0, max(dataset, (d) => d.Population)])
    .range([0, innerWidth]);
</script>

<main>
  <svg {width} {height}>
    <g transform={`translate(${margin.left},${margin.top})`}>
      <AxisBottom {xScale} {innerHeight} />
      <AxisLeft {yScale} />
      <Marks {dataset} {xScale} {yScale} />
    </g>
  </svg>
</main>
