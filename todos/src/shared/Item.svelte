<script>
  // Internals
  import TodoStore from "../stores/TodoStore";
  import IconButton from "../shared/IconButton.svelte";

  //   props
  export let detail;
  export let id;

  const finishDelete = (id) => {
    TodoStore.update((currentTodos) => {
      return currentTodos.filter((todo) => todo.id != id);
    });
  };

  const handleComplete = (id) => {
    TodoStore.update((currentTodos) => {
      let targetTodo = currentTodos.filter((todo) => todo.id === id)[0];
      let otherTodos = currentTodos.filter((todo) => todo.id != id);
      targetTodo.completed = !targetTodo.completed;
      otherTodos = [...otherTodos, targetTodo];
      return otherTodos;
    });
  };
</script>

<li>{detail}</li>
<IconButton
  type={"check-mark"}
  icon={"check"}
  on:click={() => handleComplete(id)}
/>
<IconButton
  type={"trash-mark"}
  icon={"trash"}
  on:click={() => finishDelete(id)}
/>

<style>
  li {
    flex: 1;
    padding: 0rem 0.5rem;
  }
</style>
