<script>
  import TodoStore from "../stores/TodoStore";
  import IconButton from "../shared/IconButton.svelte";
</script>

<div class="container">
  <ul> 
    {#each $TodoStore as todo (todo.id)}
      <div class="todo">
        <li>{todo.detail}</li>
        <IconButton type={"check-mark"} icon={"check"}></IconButton>
        <IconButton type={"trash-mark"} icon={"trash"}></IconButton>
      </div>
    {/each}
  </ul>
</div>

<style>
  ul {
    min-width: 30%;
    list-style: none;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .todo {
    margin: 0.5rem;
    background: white;
    color: black;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .todo li {
    flex: 1;
    padding: 0rem 0.5rem;
  }

</style>
