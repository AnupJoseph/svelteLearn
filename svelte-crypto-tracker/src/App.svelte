<script>
  import CoinCard from "./CoinCard.svelte";

  let name = "crypto Tracker";
  let coins = [];

  const fetchCoins = async () => {
    const response = await fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=10"
    );
    const data = await response.json();
    coins = data.coins;
    console.log(coins);
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <button on:click={fetchCoins}>Go Fetch Coins</button>
  {#each coins as coin}
    <!-- <p>{coin.name}</p>
	 -->
	<CoinCard {coin} />
  {/each}
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
