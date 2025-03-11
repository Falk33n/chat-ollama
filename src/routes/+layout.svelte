<script lang="ts">
	import {
		AppSidebar,
		AppSidebarTrigger,
		ModeToggle,
		NewChatTrigger,
		ProfileSettingsTrigger,
	} from '$components/layout';
	import { SidebarProvider, useSidebar } from '$components/ui/sidebar';
	import { TooltipProvider } from '$components/ui/tooltip';
	import '$styles';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const sidebar = useSidebar();
</script>

<ModeWatcher />

<TooltipProvider>
	<SidebarProvider>
		<AppSidebar />

		<main id="main-content">
			{#if !sidebar.open || sidebar.isMobile}
				<AppSidebarTrigger />

				<NewChatTrigger />
			{/if}
			{@render children()}

			<div class="fixed top-2 right-2 flex items-center gap-2">
				<ModeToggle />

				<ProfileSettingsTrigger />
			</div>
		</main>
	</SidebarProvider>
</TooltipProvider>
