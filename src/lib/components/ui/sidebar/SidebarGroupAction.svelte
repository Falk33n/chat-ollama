<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type SidebarGroupActionPropsWithoutHTML = WithElementRef<
		{
			child?: Snippet<[{ props: Record<string, unknown> }]>;
		},
		HTMLButtonElement
	>;

	export type SidebarGroupActionProps = SidebarGroupActionPropsWithoutHTML &
		HTMLButtonAttributes;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		children,
		child,
		...restProps
	}: SidebarGroupActionProps = $props();

	const mergedProps = $derived({
		'class': cn(
			'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 after:absolute after:-inset-2 after:md:hidden group-data-[collapsible=icon]:hidden',
			className,
		),
		'data-sidebar': 'group-action',
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<button
		bind:this={ref}
		{...mergedProps}
	>
		{@render children?.()}
	</button>
{/if}
