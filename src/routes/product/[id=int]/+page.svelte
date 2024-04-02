<script>
    import {page} from '$app/stores';
    import ProductHeader from './ProductHeader.svelte';
</script>


<ProductHeader/>

<p>Product ID: {$page.params.id}</p>