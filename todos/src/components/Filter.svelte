<script>
  // Internals
  import TodoStore from "../stores/TodoStore";

  let selected;

  const handleChange = () => {
    console.log(selected);
    if (selected === "completed") {
      TodoStore.update((currentTodos) => {
        console.log(`Completed : ${currentTodos}`);
        return currentTodos.filter((todo) => {
          if (todo.completed == true) {
            todo.render = false;
          } else {
            todo.render = true;
          }
        });
      });
    } else if (selected === "incompleted") {
      console.log(`InCompleted : ${currentTodos}`);
      TodoStore.update((currentTodos) => {
        return currentTodos.filter((todo) => {
          if (todo.completed == false) {
            todo.render = false;
          } else {
            todo.render = true;
          }
        });
      });
    } else {
      console.log(`InCompleted : ${currentTodos}`);
      TodoStore.update((currentTodos) => {
        return currentTodos.filter((todo) => (todo.render = false));
      });
    }
  };
</script>

<div>
  <!-- svelte-ignore a11y-no-onchange -->
  <select bind:value={selected} name="todos" on:change={handleChange}>
    <option value="all">all</option>
    <option value="completed">completed</option>
    <option value="incompleted">incompleted</option>
  </select>
</div>

<style>
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
  }
  div {
    text-transform: capitalize;
    margin-left: 1rem;
    /* padding-bottom: 1; */
    position: relative;
    overflow: hidden;
  }
  select {
    color: #ff6f47;
    width: 10rem;
    cursor: pointer;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
  }
  div::after {
    content: "\25BC";
    position: absolute;
    background: #ff6f47;
    top: 0;
    right: 0;
    padding: 1rem;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  div:hover::after {
    background: white;
    color: #ff6f47;
  }
</style>
