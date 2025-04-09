<script lang="ts">
	import { browser } from '$app/environment';
	import { Sidebar } from '$lib/components/ui/sidebar';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { TooltipBase } from '$lib/components/ui/tooltip';
	import LoaderCircleIcon from '@lucide/svelte/icons/loader-circle';
	import type { WithChildren } from 'bits-ui';
	import { ModeWatcher as ModeProvider } from 'mode-watcher';

	let { children }: WithChildren = $props();
</script>

<TooltipBase.Provider delayDuration={0}>
	<Sidebar.Provider>
		<ModeProvider />

		{#if !browser}
			<Skeleton class="fixed top-0 z-[9998] h-screen w-screen" />
			<LoaderCircleIcon
				class="fixed top-1/2 left-1/2 z-[9999] size-10 -translate-x-1/2 -translate-y-1/2 animate-spin"
				aria-hidden
			/>
		{/if}

		{@render children?.()}
	</Sidebar.Provider>
</TooltipBase.Provider>
