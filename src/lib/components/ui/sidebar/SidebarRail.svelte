<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export type SidebarRailProps = WithElementRef<
		HTMLButtonAttributes,
		HTMLButtonElement
	>;
</script>

<script lang="ts">
	import { useSidebar } from '$components/ui/sidebar';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		'class': className,
		'aria-label': ariaLabel = 'Toggle Sidebar',
		title = ariaLabel,
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
		'hover:after:bg-sidebar-border [[data-side=left] group-data-[collapsible=offcanvas]:hover:bg-sidebar absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[collapsible=offcanvas]:translate-x-0 group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[collapsible=offcanvas]:after:left-full sm:flex [[data-side=left]_&]:cursor-w-resize [[data-side=left][data-collapsible=offcanvas]_&]:-right-2 [[data-side=right]_&]:cursor-e-resize [[data-side=right][data-collapsible=offcanvas]_&]:-left-2 [[data-side=right][data-state=collapsed]_&]:cursor-w-resize [data-state=collapsed]_&]:cursor-e-resize',
		className,
	)}
	{title}
	{...restProps}
>
	{@render children?.()}
</button>
