<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SidebarGroupActionProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		child,
		...restProps
	}: SidebarGroupActionProps = $props();

	const groupActionProps = $derived({
		'class': cn(
			'text-sidebar-foreground ring-sidebar-ring absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform duration-200 outline-none',
			'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
			'focus-visible:ring-2',
			'group-data-[collapsible=icon]:hidden',
			'after:absolute after:-inset-2 after:md:hidden',
			'[&>svg]:size-4 [&>svg]:shrink-0',
			className,
		),
		'data-sidebar': 'group-action',
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: groupActionProps })}
{:else}
	<button
		bind:this={ref}
		{...groupActionProps}
	>
		{@render children?.()}
	</button>
{/if}
