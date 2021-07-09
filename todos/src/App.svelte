<script>
	// Internel components
	import Header from "./shared/Header.svelte";
	import Todos from "./shared/Todos.svelte";
	import Form from "./components/Form.svelte";
	// import Icon from "svelte-awesome";
	// import { adjust } from "svelte-awesome/icons";
</script>

<main>
	<Header></Header>
	<Form></Form>
	<Todos></Todos>
	<!-- <Icon data={adjust} spin label="Adjust icon"></Icon> -->
</main>