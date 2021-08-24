<script>
  // Internals
  import TodoStore from "../stores/TodoStore";
  import Item from "../shared/Item.svelte";

  // Animation-svelte
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";

  function dropout(node, { duration = 2000, delay = 1000 }) {
    return {
      duration,
      css: (t) => `transform: translateY(${(1 - t) * 8 * 8}rem) rotateZ(${
        (1 - t) * 20 * 8
      }deg);
			opacity:${0.5 + t}`,
    };
  }
</script>

<div class="container">
  <ul>
    {#each $TodoStore as todo (todo.id)}
      <div
        class="todo"
        class:complete={todo.completed}
        class:render={todo.render}
        in:fade
        out:dropout={{ duration: 1500, delay: 1000 }}
        animate:flip={{ duration: 500 }}
      >
        <Item id={todo.id} detail={todo.detail} />
      </div>
    {/each}
  </ul>
</div>

<style>
  div {
    transition: all 2s ease;
  }
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
  .complete {
    text-decoration: line-through;
    opacity: 0.5;
  }
  .render{
    visibility: collapse;
  }
</style>
