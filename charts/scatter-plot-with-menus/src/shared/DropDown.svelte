<script>
  export let options;
  export let value;
</script>

<select name="select" id="select" bind:value>
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>
