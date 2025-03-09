<script
	lang="ts"
	module
>
	import { Skeleton, type SkeletonProps } from '$components/ui/skeleton';
	import type { WithChildren } from 'bits-ui';

	const width = `${Math.floor(Math.random() * 40) + 50}%`;

	export type SidebarMenuSkeletonProps = WithChildren<SkeletonProps> & {
		showIcon?: boolean;
	};
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		'class': className,
		showIcon = false,
		'aria-hidden': ariaHidden = true,
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
