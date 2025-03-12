<script
	lang="ts"
	module
>
	import type { Snippet } from 'svelte';

	type AppProviderProps = { children?: Snippet };
</script>

<script lang="ts">
	import { Topbar } from '$components/layout';
	import '$styles';

	let { children }: AppProviderProps = $props();
</script>

<main
	id="main-content"
	class="w-full"
>
	<Topbar />

	{@render children?.()}
</main>
