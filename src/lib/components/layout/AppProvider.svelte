<script
	lang="ts"
	module
>
	import type { Snippet } from 'svelte';

	type AppProviderProps = { children?: Snippet };
</script>

<script lang="ts">
	import { SidebarProvider } from '$components/ui/sidebar';
	import { TooltipProvider } from '$components/ui/tooltip';
	import '$styles';
	import { ModeWatcher as ModeProvider } from 'mode-watcher';

	let { children }: AppProviderProps = $props();
</script>

<TooltipProvider delayDuration={0}>
	<SidebarProvider>
		<ModeProvider />

		{@render children?.()}
	</SidebarProvider>
</TooltipProvider>
