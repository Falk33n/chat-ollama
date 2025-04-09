<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SheetFooterProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SheetFooterProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('flex flex-col-reverse', 'sm:flex-row sm:justify-end sm:space-x-2', className)}
	{...restProps}
>
	{@render children?.()}
</div>
