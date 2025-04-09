<script lang="ts">
	import { TooltipBase } from '$lib/components/ui/tooltip';
	import { cn } from '$lib/utils';
	import { mergeProps } from 'bits-ui';
	import { useSidebar } from '../context.svelte';
	import type { SidebarMenuButtonProps } from '../types';
	import { sidebarMenuButtonVariants } from '../variants';

	let {
		ref = $bindable(null),
		variant = 'accent',
		size = 'md',
		isActive = false,
		class: className,
		children,
		child,
		tooltipContent,
		tooltipContentProps,
		...restProps
	}: SidebarMenuButtonProps = $props();

	const menuButtonProps = $derived({
		'class': cn(sidebarMenuButtonVariants({ variant, size }), className),
		'data-sidebar': 'menu-button',
		'data-size': size,
		'data-active': isActive,
		...restProps,
	});

	const sidebar = useSidebar();
</script>

{#snippet Button({ props }: { props?: Record<string, unknown> })}
	{@const mergedProps = mergeProps(menuButtonProps, props)}

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
{/snippet}

{#if !tooltipContent}
	{@render Button({})}
{:else}
	<TooltipBase.Root>
		<TooltipBase.Trigger>
			{#snippet child({ props })}
				{@render Button({ props })}
			{/snippet}
		</TooltipBase.Trigger>

		<TooltipBase.Content
			hidden={sidebar.state !== 'collapsed' || sidebar.isMobile}
			side="right"
			align="center"
			children={tooltipContent}
			{...tooltipContentProps}
		/>
	</TooltipBase.Root>
{/if}
