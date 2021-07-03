<script>
  // Shared components
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";

  // Form and Lists
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";

  let items = ["Current polls", "Add New Poll"];
  let activeItem = "Current polls";

  const tabChange = (event) => {
    activeItem = event.detail;
  };

  const handleAdd = (event) => {
    const poll = event.detail;
    polls = [poll, ...polls];
    activeItem = "Current polls";
  };

  const handleVote = (event) => {
    const { option, id } = event.detail;
    let copiedPolls = [...polls];
    let upvotedPoll = copiedPolls.find((item) => item.id === id);
    option === "a" ? upvotedPoll.votesA++ : upvotedPoll.votesB++;
    polls = copiedPolls
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "Current polls"}
    <PollList on:vote={handleVote} />
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
