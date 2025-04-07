<script
	lang="ts"
	module
>
	import type { Snippet } from 'svelte';

	type SidebarTriggerProps = { children?: Snippet; class?: string };
</script>

<script lang="ts">
	import { Tooltip } from '$lib/components/global';
	import {
		SidebarTrigger as SidebarPrimitiveTrigger,
		useSidebar,
	} from '$lib/components/ui/sidebar';
	import { cn } from '$lib/utils';

	let { children, class: className }: SidebarTriggerProps = $props();

	const sidebar = useSidebar();
</script>

<Tooltip content={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}>
	{#snippet trigger({ props: { onclick: _onclick, ...restProps } })}
		<SidebarPrimitiveTrigger
			class={className ? cn(className) : undefined}
			aria-label={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}
			{...restProps}
		>
			{@render children?.()}
		</SidebarPrimitiveTrigger>
	{/snippet}
</Tooltip>
