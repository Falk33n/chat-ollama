<script lang="ts">
	import { AppSidebar, Topbar } from '$components/layout';
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
		<Topbar />

		{@render children()}
	</main>
</SidebarProvider>
