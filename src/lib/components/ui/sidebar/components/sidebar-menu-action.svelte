<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SidebarMenuActionProps } from '../types';

	let {
		ref = $bindable(null),
		showOnHover = false,
		class: className,
		children,
		child,
		...restProps
	}: SidebarMenuActionProps = $props();

	const menuActionProps = $derived({
		'class': cn(
			'text-sidebar-foreground ring-sidebar-ring absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform duration-200 outline-none',
			'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
			'focus-visible:ring-2',
			'peer-hover/menu-button:text-sidebar-accent-foreground',
			'peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=md]/menu-button:top-1.5 peer-data-[size=sm]/menu-button:top-1',
			'group-data-[collapsible=icon]:hidden',
			'after:absolute after:-inset-2 after:md:hidden',
			'[&>svg]:size-4 [&>svg]:shrink-0',
			showOnHover &&
				'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
			className,
		),
		'data-sidebar': 'menu-action',
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: menuActionProps })}
{:else}
	<button
		bind:this={ref}
		{...menuActionProps}
	>
		{@render children?.()}
	</button>
{/if}
