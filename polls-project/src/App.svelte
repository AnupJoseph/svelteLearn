<script>
  // Shared components
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";

  // Form and Lists
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";

  // Tweens

  let items = ["Current polls", "Add New Poll"];
  let activeItem = "Current polls";

  const tabChange = (event) => {
    activeItem = event.detail;
  };

  const handleAdd = (event) => {
    activeItem = "Current polls";
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "Current polls"}
    <PollList />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
