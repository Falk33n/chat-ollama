<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SidebarGroupProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SidebarGroupProps = $props();
</script>

<div
	bind:this={ref}
	data-sidebar="group"
	class={cn('relative flex w-full min-w-0 flex-col p-2', className)}
	{...restProps}
>
	{@render children?.()}
</div>
