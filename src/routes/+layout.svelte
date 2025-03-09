<script lang="ts">
	import { AppSidebar, AppSidebarTrigger } from '$components/layout';
	import { SidebarProvider } from '$components/ui/sidebar';
	import { TooltipProvider } from '$components/ui/tooltip';
	import '$styles';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<ModeWatcher />

<TooltipProvider>
	<SidebarProvider>
		<AppSidebar />

		<main id="main-content">
			<AppSidebarTrigger />

			{@render children()}
		</main>
	</SidebarProvider>
</TooltipProvider>
