<script>
	import { goto, beforeNavigate, afterNavigate } from "$app/navigation";

    let name = 'John';

    beforeNavigate((navigation) => {console.log(navigation)})
</script>


<h1>About</h1>

<button on:click={() => goto('/')}>Go to Home</button>