<script>
	import { onMount } from 'svelte';

    import CharmCross from '~icons/charm/cross';

    export let title, open;
    let background;

    onMount(() => {
		window.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				open = false;
			}
		});
    });
</script>

{#if open}
<button
    on:click={(e) => (open = e.target != background)}
    bind:this={background}
    class="h-screen w-screen fixed bg-sol-dark3/10 backdrop-blur-sm z-50 top-0 left-0 flex flex-col items-center justify-center hover:cursor-default text-left p-4 font-mono">
    <div class="rounded-2xl bg-sol-light2 dark:bg-sol-dark2 flex flex-col pl-10 pr-4 pt-4 pb-8 text-sol-dark3 dark:text-sol-light3">
        <div class="flex flex-row items-start mb-4">
            <p class="text-lg font-bold mr-12 grow mt-4">
                {title}
            </p>
            <button
                on:click={() => (open = false)}
                class="hover:cursor-pointer">
                <CharmCross />
            </button>
        </div>
        <slot />
    </div>
</button>
{/if}
