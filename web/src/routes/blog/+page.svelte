<script>
	import Page from '$lib/components/Page.svelte';
	import List from '$lib/components/List.svelte';
	import Title from '$lib/components/Title.svelte';

	const BLOG_POST_DATA = [
		{
			title: 'Canadian Electoral History: Part 2',
			link: '/blog/elections',
			category: 'January 2, 2025'
		},
		{
			title: 'Canadian Electoral History: Part 1',
			link: '/blog/elections',
			category: 'January 1, 2025'
		}
	];
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<Page>
	<Title text={'Blog Posts'} />
	<p class="text-sm mt-2">
		Longer-form interactive data anlysis pieces on Canadian and NL politics will live here (at least
		that's the plan)
	</p>
	<List data={BLOG_POST_DATA} />
</Page>
