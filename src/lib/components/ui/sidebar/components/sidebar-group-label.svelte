<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SidebarGroupLabelProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		child,
		...restProps
	}: SidebarGroupLabelProps = $props();

	const groupLabelProps = $derived({
		'class': cn(
			'text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear outline-none',
			'focus-visible:ring-2',
			'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
			'[&>svg]:size-4 [&>svg]:shrink-0',
			className,
		),
		'data-sidebar': 'group-label',
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: groupLabelProps })}
{:else}
	<div
		bind:this={ref}
		{...groupLabelProps}
	>
		{@render children?.()}
	</div>
{/if}
