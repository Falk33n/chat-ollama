<script lang="ts">
	import {
		AppSidebar,
		AppSidebarActions,
		ModeToggle,
		ProfileSettingsTrigger,
	} from '$components/layout';
	import { SidebarProvider } from '$components/ui/sidebar';
	import '$styles';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<ModeWatcher />

<SidebarProvider>
	<AppSidebar />

	<main
		id="main-content"
		class="w-full"
	>
		<div
			class="bg-background sticky top-0 flex items-center justify-between gap-2 p-2"
		>
			<AppSidebarActions />

			<div class="flex items-center gap-2">
				<ModeToggle />

				<ProfileSettingsTrigger />
			</div>
		</div>

		{@render children()}
	</main>
</SidebarProvider>
