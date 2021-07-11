<script>
  // Internals
  import TodoStore from "../stores/TodoStore";
  import IconButton from "../shared/IconButton.svelte";

  // Animation-svelte
  import { fade, scale } from "svelte/transition";
  import { flip } from "svelte/animate";

  const handleDelete = (id) => {
    TodoStore.update((currentTodos) => {
      return currentTodos.filter((todo) => todo.id != id);
    });
  };

  const handleComplete = (id) => {
    TodoStore.update((currentTodos) => {
      let targetTodo = currentTodos.filter((todo) => todo.id === id)[0];
      let otherTodos = currentTodos.filter((todo) => todo.id != id);
      targetTodo.completed = !targetTodo.completed;
      otherTodos = [targetTodo, ...otherTodos];
      return otherTodos;
    });
  };
</script>

<div class="container">
  <ul>
    {#each $TodoStore as todo (todo.id)}
      <div
        class="todo"
        class:complete={todo.completed}
        in:fade
        animate:flip={{ duration: 500 }}
      >
        <li>{todo.detail}</li>
        <IconButton
          type={"check-mark"}
          icon={"check"}
          on:click={() => handleComplete(todo.id)}
        />
        <IconButton
          type={"trash-mark"}
          icon={"trash"}
          on:click={() => handleDelete(todo.id)}
        />
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
    transition: all 0.5s ease;
  }
  .todo li {
    flex: 1;
    padding: 0rem 0.5rem;
  }
  .complete {
    text-decoration: line-through;
    opacity: 0.5;
  }
  /* .finished {
    transform: translateY(8rem) rotateZ(20deg);
    opacity: 0;
  } */
</style>
