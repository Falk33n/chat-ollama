<script lang="ts">
	import { MainContent, Providers } from '$components/layout/app';
	import { Sidebar } from '$components/layout/sidebar';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<Providers>
	<Sidebar />

	<MainContent>
		{@render children()}
	</MainContent>
</Providers>
