<script lang="ts">
	import {
		AppSidebar,
		AppSidebarTrigger,
		ModeToggle,
		ProfileSettingsTrigger,
	} from '$components/layout';
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
			<div class="fixed top-2 right-2 flex items-center gap-2">
				<ModeToggle />

				<ProfileSettingsTrigger />
			</div>

			<AppSidebarTrigger />

			{@render children()}
		</main>
	</SidebarProvider>
</TooltipProvider>
