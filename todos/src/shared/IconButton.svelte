<script>
  import Icon from "svelte-awesome";
  import { check, trash } from "svelte-awesome/icons";
  export let type;
  export let icon;

  const iconsArray = {
    check: check,
    trash: trash,
  };
</script>

<button class={type}>
  <Icon data={iconsArray[icon]} />
</button>

<style>
  button {
    background: #ff6f47;
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1rem;
  }
  .check-mark {
    background: rgb(73, 204, 73);
  }
</style>
