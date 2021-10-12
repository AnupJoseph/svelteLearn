<script>
  // D3 stuff
  import { csv, scaleLinear, scaleTime, format, extent, timeFormat } from "d3";

  // Components
  import AxisBottom from "./shared/AxisBottom.svelte";
  import AxisLeft from "./shared/AxisLeft.svelte";
  import Marks from "./shared/Marks.svelte";

  // Load dataset
  let dataset = [];
  const row = function (data) {
    data.temperature = +data.temperature;
    data.timestamp = new Date(data.timestamp);
    return data;
  };
  csv(
    "https://gist.githubusercontent.com/curran/60b40877ef898f19aeb8/raw/9476be5bd15fb15a6d5c733dd79788fb679c9be9/week_temperature_sf.csv",
    row
  ).then((data) => (dataset = data));

  // Actual graph work
  const width = 1200,
    height = 600,
    margin = { top: 20, right: 20, left: 150, bottom: 65 };
  const innerHeight = height - margin.top - margin.bottom,
    innerWidth = width - margin.left - margin.right;

  const tickFormat = (value) => timeFormat("%a")(value);

  $: xScale = scaleTime()
    .domain(extent(dataset, (d) => d.timestamp))
    .range([0, innerWidth])
    .nice();

  $: yScale = scaleLinear()
    .domain(extent(dataset, (d) => d.temperature))
    .range([innerHeight, 0])
    .nice();

  const xAxislabel = "Time",
    yAxisLabel = "Temperature";
</script>

<main>
  <svg {width} {height}>
    <g transform={`translate(${margin.left},${margin.top})`}>
      <AxisBottom {xScale} {innerHeight} {tickFormat} />
      <text transform={`translate(${-100},${innerHeight / 2}) rotate(-90)`}
        >{yAxisLabel}</text
      >
      <AxisLeft {yScale} {innerWidth} />
      <text x={innerWidth / 2} y={innerHeight + 50}>{xAxislabel}</text>
      <Marks {dataset} {xScale} {yScale} />
    </g>
  </svg>
</main>

<style>
  text {
    text-anchor: middle;
    font-size: 2em;
    fill: rgb(71, 68, 65);
  }
  svg {
    display: block;
    position: absolute;
  }
</style>
