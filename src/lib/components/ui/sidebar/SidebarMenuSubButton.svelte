<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type SidebarMenuSubButtonPropsWithoutHTML = WithElementRef<
		{
			child?: Snippet<[{ props: Record<string, unknown> }]>;
			size?: 'sm' | 'md';
			isActive?: boolean;
		},
		HTMLAnchorElement
	>;

	export type SidebarMenuSubButtonProps = SidebarMenuSubButtonPropsWithoutHTML &
		HTMLAnchorAttributes;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		children,
		child,
		class: className,
		size = 'md',
		isActive,
		...restProps
	}: SidebarMenuSubButtonProps = $props();

	const mergedProps = $derived({
		'class': cn(
			'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground group-data-[collapsible=icon]:hidden',
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
	{@render child({ props: mergedProps })}
{:else}
	<a
		bind:this={ref}
		{...mergedProps}
	>
		{@render children?.()}
	</a>
{/if}
