<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SidebarFooterProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SidebarFooterProps = $props();
</script>

<div
	bind:this={ref}
	data-sidebar="footer"
	class={cn('flex flex-col gap-2 p-2', className)}
	{...restProps}
>
	{@render children?.()}
</div>
