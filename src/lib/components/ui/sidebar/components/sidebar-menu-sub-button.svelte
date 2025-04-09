<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SidebarMenuSubButtonProps } from '../types';

	let {
		ref = $bindable(null),
		size = 'md',
		class: className,
		isActive,
		children,
		child,
		...restProps
	}: SidebarMenuSubButtonProps = $props();

	const menuSubButtonProps = $derived({
		'class': cn(
			'text-sidebar-foreground ring-sidebar-ring flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none',
			'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
			'focus-visible:ring-2',
			'active:bg-sidebar-accent active:text-sidebar-accent-foreground',
			'group-data-[collapsible=icon]:hidden',
			'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
			'disabled:pointer-events-none disabled:opacity-70 aria-disabled:pointer-events-none aria-disabled:opacity-70',
			'[&>svg]:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
			size === 'sm' ? 'text-xs' : 'text-sm',
			className,
		),
		'data-sidebar': 'menu-sub-button',
		'data-size': size,
		'data-active': isActive,
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: menuSubButtonProps })}
{:else}
	<a
		bind:this={ref}
		{...menuSubButtonProps}
	>
		{@render children?.()}
	</a>
{/if}
