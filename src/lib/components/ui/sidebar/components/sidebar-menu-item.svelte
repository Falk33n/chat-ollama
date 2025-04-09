<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SidebarMenuItemProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SidebarMenuItemProps = $props();
</script>

<li
	bind:this={ref}
	data-sidebar="menu-item"
	class={cn('group/menu-item relative', className)}
	{...restProps}
>
	{@render children?.()}
</li>
