<script>
  let firstName = "Jiminy";
  let lastName = "Crockett";
  let beltColor = "lightseagreen";
  $: fullName = `${firstName} ${lastName}`;
  const handleClick = () => {
    beltColor = "alicewhite";
  };

  const handleInput = (event) => {
    name = event.target.value;
  };
</script>

<main>
  <p style="color: {beltColor}">{beltColor} belt</p>
  <input type="text" bind:value={firstName} />

  <input type="text" bind:value={lastName} />
  <input type="text" bind:value={beltColor} />

  <p>Full Name - {fullName}</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
