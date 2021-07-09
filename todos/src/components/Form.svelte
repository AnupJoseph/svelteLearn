<script>
  import Icon from "svelte-awesome";
  import { plusSquare } from "svelte-awesome/icons";
</script>

<form>
  <input type="text" />
  <button type="submit">
    <Icon data={plusSquare} scale="2" style="display: flex;" />
  </button>
</form>

<style>
  form {
    min-height: 5vh;
  }
  input,
  button {
    padding: 0.5rem;
    font-size: 2rem;
    border: none;
    background: white;
  }
  button {
    color: #d88771;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:hover {
    background: #d88771;
    color: white;
  }
</style>
