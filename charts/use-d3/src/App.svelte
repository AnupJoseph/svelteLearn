<script>
  import { csv, arc, pie } from "d3";
  import { onMount } from "svelte";

  // Load data
  let dataset = [];
  csv("/data/Colors MDN.csv", function (data) {
    return data;
  }).then((data) => {
    dataset = data;
  });
  onMount(async () => {
    dataset = await csv("data/Colors MDN.csv");
  });

  // D3 logic
  const width = 600,
    height = 600,
    centerX = width / 2,
    centerY = height / 2;
  const pathArc = arc().innerRadius(0).outerRadius(width);
</script>

<main>
  <svg {width} {height}>
    <g transform={`translate(${centerX},${centerY})`}>
      <!-- {#each dataset as data, index}
        <path
          fill={data.color}
          d={pathArc({
            startAngle: (index / dataset.length) * 2 * Math.PI,
            endAngle: ((index+1) / dataset.length) * 2 * Math.PI,
          })}
        />
      {/each} -->
      {#each pie().value(1)(dataset) as d}
        <path fill={d.data.color} d={pathArc(d)} />
      {/each}
    </g>
  </svg>
</main>
