<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SidebarGroupContentProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SidebarGroupContentProps = $props();
</script>

<div
	bind:this={ref}
	data-sidebar="group-content"
	class={cn('w-full text-sm', className)}
	{...restProps}
>
	{@render children?.()}
</div>
