<script
	lang="ts"
	module
>
	import type { Snippet } from 'svelte';

	type ProviderProps = { children?: Snippet };
</script>

<script lang="ts">
	import { Topbar } from '$lib/components/layout/topbar';
	import '$styles';

	let { children }: ProviderProps = $props();
</script>

<main
	id="main-content"
	class="w-full"
>
	<Topbar />

	{@render children?.()}
</main>
