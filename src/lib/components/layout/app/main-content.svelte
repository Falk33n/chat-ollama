<script lang="ts">
	import type { WithChildren } from 'bits-ui';
	import { Topbar } from '../topbar';

	let { children }: WithChildren = $props();
</script>

<main
	id="main-content"
	class="w-full"
>
	<Topbar />

	{@render children?.()}
</main>
