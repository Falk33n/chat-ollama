<script lang="ts">
	import { MainContent, Providers } from '$lib/components/layout/app';
	import { Sidebar } from '$lib/components/layout/sidebar';
	import '../styles/app.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<Providers>
	<Sidebar />

	<MainContent>
		{@render children()}
	</MainContent>
</Providers>
