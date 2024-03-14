<script>
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	let name = 'John';
</script>

<h1>About {name}</h1>
{JSON.stringify($page.params)}
