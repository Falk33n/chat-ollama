<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { useSidebar } from '../context.svelte';
	import type { SidebarTriggerProps } from '../types';

	let {
		ref = $bindable(null),
		'aria-label': ariaLabel = 'Toggle Sidebar',
		'class': className,
		onclick,
		children,
		...restProps
	}: SidebarTriggerProps = $props();

	const sidebar = useSidebar();
</script>

<Button
	bind:ref
	class={className ? cn(className) : undefined}
	type="button"
	data-sidebar="trigger"
	variant="outline"
	size="icon"
	aria-label={ariaLabel}
	onclick={(e) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	{...restProps}
>
	{@render children?.()}
</Button>
