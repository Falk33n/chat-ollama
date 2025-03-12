<script
	lang="ts"
	module
>
	import type { Snippet } from 'svelte';

	type SidebarTriggerProps = { children?: Snippet; class?: string };
</script>

<script lang="ts">
	import { Tooltip } from '$components/global';
	import {
		SidebarTrigger as SidebarPrimitiveTrigger,
		useSidebar,
	} from '$components/ui/sidebar';
	import { cn } from '$utils';

	let { children, class: className }: SidebarTriggerProps = $props();

	const sidebar = useSidebar();
</script>

<Tooltip content={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}>
	{#snippet trigger({ props: { onclick: _onclick, ...props } })}
		<SidebarPrimitiveTrigger
			class={className ? cn(className) : undefined}
			aria-label={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}
			{...props}
		>
			{@render children?.()}
		</SidebarPrimitiveTrigger>
	{/snippet}
</Tooltip>
