<script>
	import Icon from "svelte-awesome";
	import { adjust } from "svelte-awesome/icons";
</script>

<main>
	<h1>Todos App</h1>
	<!-- <i class="fas fa-adjust"></i> -->
	<Icon data={adjust} spin label="Adjust icon"></Icon>
</main>

<style>
	h1{
		font-family:"Poppins";
		font-weight: bold;
	}
	
</style>