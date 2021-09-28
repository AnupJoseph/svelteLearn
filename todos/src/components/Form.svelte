<script>
  // Internal imports
  import TodoStore from "../stores/TodoStore";
  import Filter from "./Filter.svelte";

  import Icon from "svelte-awesome";
  import { plusSquare } from "svelte-awesome/icons";
  let todo = {
    detail: "",
    completed: false,
  };
  const addTodo = () => {
    let id = Math.floor(Math.random() * 100);
    let newTodo = { id, ...todo };
    TodoStore.update((currentTodos) => {
      return [newTodo, ...currentTodos];
    });
    todo.detail = "";
  };
</script>

<form on:submit|preventDefault={addTodo}>
  <input type="text" bind:value={todo.detail} />
  <button type="submit" on:click>
    <Icon data={plusSquare} scale="2" style="display: flex;" />
  </button>
  <Filter />
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
