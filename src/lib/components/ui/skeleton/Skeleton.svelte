<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SkeletonProps } from './types';

	let {
		ref = $bindable(null),
		'aria-hidden': ariaHidden = true,
		'class': className,
		...restProps
	}: SkeletonProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('bg-primary/10 animate-pulse rounded-md', className)}
	aria-hidden={ariaHidden}
	{...restProps}
></div>
