<script
	lang="ts"
	module
>
	import type { Snippet } from 'svelte';

	type ProvidersProps = { children?: Snippet };
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { SidebarProvider } from '$lib/components/ui/sidebar';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { TooltipProvider } from '$lib/components/ui/tooltip';
	import { LoaderCircleIcon } from 'lucide-svelte';
	import { ModeWatcher as ModeProvider } from 'mode-watcher';

	let { children }: ProvidersProps = $props();
</script>

<TooltipProvider delayDuration={0}>
	<SidebarProvider>
		<ModeProvider />

		{#if !browser}
			<Skeleton class="fixed top-0 z-[9998] h-screen w-screen" />
			<LoaderCircleIcon
				class="fixed top-1/2 left-1/2 z-[9999] size-10 -translate-x-1/2 -translate-y-1/2 animate-spin"
				aria-hidden
			/>
		{/if}

		{@render children?.()}
	</SidebarProvider>
</TooltipProvider>
