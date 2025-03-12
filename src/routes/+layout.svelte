<script lang="ts">
	import { AppMainContent, AppProvider } from '$components/layout';
	import { AppSidebar } from '$components/layout/sidebar';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<AppProvider>
	<AppSidebar />

	<AppMainContent>
		{@render children()}
	</AppMainContent>
</AppProvider>
