<script lang="ts">
	import { Sidebar as SidebarPrimitive, useSidebar } from '$lib/components/ui/sidebar';
	import { Tooltip } from '$lib/components/ui/tooltip';
	import { cn } from '$lib/utils';
	import type { SidebarTriggerProps } from './types';

	let { children, class: className }: SidebarTriggerProps = $props();

	const sidebar = useSidebar();
</script>

<Tooltip content={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}>
	{#snippet trigger({ props: { onclick: _onclick, ...restProps } })}
		<SidebarPrimitive.Trigger
			class={className ? cn(className) : undefined}
			aria-label={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}
			{...restProps}
		>
			{@render children?.()}
		</SidebarPrimitive.Trigger>
	{/snippet}
</Tooltip>
