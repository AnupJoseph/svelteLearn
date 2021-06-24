<script>
  import { createEventDispatcher } from "svelte";

  let dispatcher = createEventDispatcher();
  let name;
  let beltColour;
  let age = 5;
  let skills = [];
  const handleSubmit = () => {
    const person = { name, beltColour, age, skills, id: Math.random() };
    dispatcher("addPerson",person);
  };
</script>

<h3>Add a new person</h3>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" name="name" placeholder="Name" bind:value={name} />
  <input
    type="text"
    name="beltColour"
    placeholder="beltColour"
    bind:value={beltColour}
  />
  <input type="number" placeholder="age" bind:value={age} />
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label
    >Skills:
    <!-- <input type="checkbox" bind:checked={fighting} />Fighting
  <input type="checkbox" bind:checked={sneaking} />Sneaking
  <input type="checkbox" bind:checked={running} />Running -->
    <input type="checkbox" bind:group={skills} value="fighting" />Fighting
    <input type="checkbox" bind:group={skills} value="sneaking" />Sneaking
    <input type="checkbox" bind:group={skills} value="running" />Running
  </label>

  <label
    >BeltColour:-
    <select bind:value={beltColour}>
      <option value="Black">Black</option>
      <option value="Orange">Orange</option>
      <option value="Yellow">Yellow</option>
      <option value="Red">Red</option>
      <option value="Blue">Blue</option>
    </select>
  </label>

  <div>
    <button type="submit">Add Person</button>
  </div>
</form>
