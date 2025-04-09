<script
	lang="ts"
	module
>
	const width = `${Math.floor(Math.random() * 40) + 50}%`;
</script>

<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { cn } from '$lib/utils';
	import type { SidebarMenuSkeletonProps } from '../types';

	let {
		ref = $bindable(null),
		'aria-hidden': ariaHidden = true,
		showIcon = false,
		'class': className,
		children,
		...restProps
	}: SidebarMenuSkeletonProps = $props();
</script>

<div
	bind:this={ref}
	data-sidebar="menu-skeleton"
	class={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
	aria-hidden={ariaHidden}
	{...restProps}
>
	{#if showIcon}
		<Skeleton
			class="size-4 rounded-md"
			data-sidebar="menu-skeleton-icon"
			aria-hidden={ariaHidden}
		/>
	{/if}

	<Skeleton
		class="h-4 max-w-[var(--skeleton-width)] flex-1"
		data-sidebar="menu-skeleton-text"
		style="--skeleton-width: {width};"
		aria-hidden={ariaHidden}
	/>

	{@render children?.()}
</div>
