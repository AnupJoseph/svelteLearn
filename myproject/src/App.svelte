<script>
  import Modal from "./Modal.svelte";
  let people = [
    { name: "yoshi", beltColour: "black", age: 25, id: 1 },
    { name: "mario", beltColour: "orange", age: 45, id: 2 },
    { name: "luigi", beltColour: "brown", age: 35, id: 3 },
  ];

  const handleClick = (id) => {
    people = people.filter((person) => person.id !== id);
    num += 10;
  };

  let num = 5;
</script>

<main>
  <Modal />
  {#if num > 20}
    <p>Greater than 20</p>
  {/if}
  {#each people as person (person.id)}
    <h1>{person.name}</h1>
    <p style="color:{person.beltColour}">{person.beltColour}</p>
    <button
      on:click={() => {
        handleClick(person.id);
      }}>Delete</button
    >
  {:else}
    <p>...</p>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
