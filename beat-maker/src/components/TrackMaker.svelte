<script>
  // State
  export let type;
  export let sounds;

  // Component Imports
  import Button from "../shared/Button.svelte";
</script>

<div>
  <h1>{type}</h1>
  <Button />
  <select name={`${type}-select`} id={`${type}-select`}>
    {#each sounds as sound}
      <option value={`assets/sounds/${sound}`} >{sound}</option>
    {/each}
  </select>
</div>
