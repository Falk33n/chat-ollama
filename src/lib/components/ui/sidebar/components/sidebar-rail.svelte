<script lang="ts">
	import { cn } from '$lib/utils';
	import { useSidebar } from '../context.svelte';
	import type { SidebarRailProps } from '../types';

	let {
		ref = $bindable(null),
		'aria-label': ariaLabel = 'Toggle Sidebar',
		title = ariaLabel,
		'class': className,
		children,
		...restProps
	}: SidebarRailProps = $props();

	const sidebar = useSidebar();
</script>

<button
	bind:this={ref}
	data-sidebar="rail"
	aria-label={ariaLabel}
	tabIndex={-1}
	onclick={() => sidebar.toggle()}
	class={cn(
		'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all duration-200 ease-linear',
		'hover:after:bg-sidebar-border',
		'after:absolute after:inset-y-0 after:left-1/2 after:w-[2px]',
		'[[data-side=left] [[data-side=left]_&]:cursor-w-resize [[data-side=left][data-collapsible=offcanvas]_&]:-right-2 [[data-side=right]_&]:cursor-e-resize [[data-side=right][data-collapsible=offcanvas]_&]:-left-2 [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
		'[data-state=collapsed]_&]:cursor-e-resize',
		'group-data-[side=left]:-right-4 group-data-[side=right]:left-0',
		'group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full',
		'sm:flex',
		className,
	)}
	{title}
	{...restProps}
>
	{@render children?.()}
</button>
