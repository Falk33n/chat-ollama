<script
	lang="ts"
	module
>
	import type { Snippet } from 'svelte';

	type AppSidebarTriggerProps = { children?: Snippet; class?: string };
</script>

<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { SidebarTrigger, useSidebar } from '$components/ui/sidebar';
	import { cn } from '$utils';

	let { children, class: className }: AppSidebarTriggerProps = $props();

	const sidebar = useSidebar();
</script>

<AppTooltip content={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}>
	{#snippet trigger({ props: { onclick: _onclick, ...props } })}
		<SidebarTrigger
			class={className ? cn(className) : undefined}
			aria-label={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}
			{...props}
		>
			{@render children?.()}
		</SidebarTrigger>
	{/snippet}
</AppTooltip>
