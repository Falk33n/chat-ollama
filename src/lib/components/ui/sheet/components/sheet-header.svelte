<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SheetHeaderProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SheetHeaderProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
	{...restProps}
>
	{@render children?.()}
</div>
