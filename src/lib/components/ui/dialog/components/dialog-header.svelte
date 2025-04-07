<script lang="ts">
	import { cn } from '$lib/utils';
	import type { DialogHeaderProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: DialogHeaderProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
	{...restProps}
>
	{@render children?.()}
</div>
