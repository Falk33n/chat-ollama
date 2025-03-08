<script lang="ts">
	import '$styles';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<ModeWatcher />

<main id="main-content">
	{@render children()}
</main>
