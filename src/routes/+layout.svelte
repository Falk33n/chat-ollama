<script lang="ts">
	import { AppMainContent, AppProvider, AppSidebar } from '$components/layout';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<AppProvider>
	<AppSidebar />

	<AppMainContent>
		{@render children()}
	</AppMainContent>
</AppProvider>
