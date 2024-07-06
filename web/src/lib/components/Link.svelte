<script>
	export let link;
</script>

<a href={link} target="_blank" class="underline hover:cursor-pointer decoration-dotted hover:font-bold">
	<slot />
</a>
