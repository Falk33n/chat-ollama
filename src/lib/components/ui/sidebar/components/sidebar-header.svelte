<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SidebarHeaderProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SidebarHeaderProps = $props();
</script>

<div
	bind:this={ref}
	data-sidebar="header"
	class={cn('flex flex-col gap-2 p-2', className)}
	{...restProps}
>
	{@render children?.()}
</div>
