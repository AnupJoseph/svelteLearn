<script>
  // D3 stuff
  import { csv, scaleLinear, max, format, extent } from "d3";

  // Components
  import AxisBottom from "./shared/AxisBottom.svelte";
  import AxisLeft from "./shared/AxisLeft.svelte";
  import Marks from "./shared/Marks.svelte";

  // Load dataset
  let dataset = [];
  const row = function (data) {
    data.sepal_length = +data.sepal_length;
    data.sepal_width = +data.sepal_width;
    data.petal_length = +data.petal_length;
    data.petal_width = +data.petal_width;
    return data;
  };
  csv(
    "https://gist.githubusercontent.com/curran/9e04ccfebeb84bcdc76c/raw/3d0667367fce04e8ca204117c290c42cece7fde0/iris.csv",
    row
  ).then((data) => (dataset = data.slice(0, 50)));

  // Actual graph work
  const width = 840,
    height = 840,
    margin = { top: 20, right: 20, left: 150, bottom: 65 };
  const innerHeight = height - margin.top - margin.bottom,
    innerWidth = width - margin.left - margin.right;

  const tickFormat = (value) => format(".2s")(value).replace("G", "B");

  $: xScale = scaleLinear()
    .domain(extent(dataset, (d) => d.sepal_length))
    .range([0, innerWidth])
    .nice();

  $: yScale = scaleLinear()
    .domain(extent(dataset, (d) => d.sepal_width))
    .range([0, innerHeight]);

  const xAxislabel = "Sepal Length",
    yAxisLabel = "Sepal Width";
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
</style>
