<script>
	import { arrayRange } from '$lib/utils';

	export let data,
		emptyText = '',
		hideSubtitleForSm = false;

	let currentPage = 0;
	const ITEMS_PER_PAGE = 50;

	$: allPages = arrayRange(Math.ceil(data.length / ITEMS_PER_PAGE));
	$: pagesToShow = allPages
		.slice(0, Math.min(allPages.length, 2))
		.concat(currentPage > 3 ? ['...'] : [])
		.concat(
			allPages.slice(Math.max(2, currentPage - 1), Math.min(allPages.length - 2, currentPage + 2))
		)
		.concat(currentPage < allPages.length - 4 ? ['...'] : [])
		.concat(allPages.slice(Math.max(2, allPages.length - 2), allPages.length));

	$: start_index = currentPage * ITEMS_PER_PAGE;
	$: end_index = start_index + ITEMS_PER_PAGE;
</script>

<div class="w-full text-sol-dark3 dark:text-sol-light3">
	<slot />
	{#each data.slice(start_index, end_index) as item, i}
		{#if i > 0}
			<div class="border-t border-sol-light2 dark:border-sol-dark2" />
		{:else}
			<div class="h-2" />
		{/if}
		<a
			class="rounded-lg flex flex-row items-center hover:cursor-pointer hover:bg-sol-light2 dark:hover:bg-sol-dark2 py-2 px-4 w-full h-10"
			href={item.link}
		>
			<p class={`font-semibold mr-6 text-sm ${hideSubtitleForSm ? 'grow sm:flex-none' : ''}`}>
				{item.title}
			</p>
			<p class={`font-light grow text-xs ${hideSubtitleForSm ? 'hidden sm:block' : ''}`}>
				{item.subtitle ? item.subtitle : ''}
			</p>
			<div class="hidden sm:block">
				<svelte:component this={item.element} {...item.elementProps} />
			</div>
			<p class="font-bold text-xs">{item.category}</p>
		</a>
	{/each}
	{#if data.length === 0}
		<div class="text-center py-4 mt-8">
			<p>{emptyText}</p>
		</div>
	{/if}
	{#if data.length > ITEMS_PER_PAGE}
		<div class="flex flex-row w-full justify-center mt-8 text-sm">
			<div class="flex flex-row space-x-4 grow justify-center">
				{#each pagesToShow as page}
					<button
						class={`${page == '...' ? 'hover:cursor-default' : 'hover:underline decoration-dotted'} ${page == currentPage ? 'font-bold underline' : ''}`}
						on:click={() => (currentPage = page == '...' ? currentPage : page)}
					>
						{page == '...' ? page : page + 1}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
