<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  let items = ["Current polls", "Add New Poll"];
  let activeItem = "Current polls";

  const tabChange = (event) => {
    activeItem = event.detail;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "Current polls"}
    <p>Poll list component goes here</p>
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm></CreatePollForm>
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
