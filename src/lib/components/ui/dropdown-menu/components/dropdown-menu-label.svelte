<script lang="ts">
	import { cn } from '$lib/utils';
	import type { DropdownMenuLabelProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		inset,
		children,
		...restProps
	}: DropdownMenuLabelProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
	{...restProps}
>
	{@render children?.()}
</div>
