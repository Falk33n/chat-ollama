<script lang="ts">
	import type { SkeletonProps } from '$components/ui/skeleton';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		'class': className,
		'aria-hidden': ariaHidden = true,
		...restProps
	}: SkeletonProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('bg-primary/10 animate-pulse rounded-md', className)}
	aria-hidden={ariaHidden}
	{...restProps}
></div>
