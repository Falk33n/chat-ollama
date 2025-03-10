<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type SidebarGroupLabelPropsWithoutHTML = WithElementRef<
		{
			child?: Snippet<[{ props: Record<string, unknown> }]>;
		},
		HTMLDivElement
	>;

	export type SidebarGroupLabelProps = SidebarGroupLabelPropsWithoutHTML &
		HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		children,
		child,
		class: className,
		...restProps
	}: SidebarGroupLabelProps = $props();

	const mergedProps = $derived({
		'class': cn(
			'text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
			className,
		),
		'data-sidebar': 'group-label',
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<div
		bind:this={ref}
		{...mergedProps}
	>
		{@render children?.()}
	</div>
{/if}
