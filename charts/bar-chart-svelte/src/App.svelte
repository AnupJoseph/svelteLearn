<script>
  // D3 stuff
  import { csv, scaleBand, scaleLinear, max } from "d3";
  import { fly } from "svelte/transition";

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
  const width = 600,
    height = 600,
    margin = { top: 20, right: 20, left: 20, bottom: 20 };
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
      {#each xScale.ticks() as tick, i}
        <g transform={`translate(${xScale(tick)},${0})`}>
          <line
            y2={innerHeight}
            stroke="black"
            in:fly={{ duration: 500 * i }}
          />
          <text y={innerHeight + 3} dy="0.8em" style="text-anchor: middle;"
            >{tick}</text
          >
        </g>
      {/each}
      {#each dataset as data, i}
        <rect
          x={0}
          y={yScale(data.Location)}
          width={xScale(data.Population)}
          height={yScale.bandwidth()}
          in:fly={{ duration: 500 * i }}
        />
      {/each}
    </g>
  </svg>
</main>
