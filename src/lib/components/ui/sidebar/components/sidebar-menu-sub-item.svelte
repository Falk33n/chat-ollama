<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SidebarMenuSubItemProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SidebarMenuSubItemProps = $props();
</script>

<li
	bind:this={ref}
	class={className ? cn(className) : undefined}
	data-sidebar="menu-sub-item"
	{...restProps}
>
	{@render children?.()}
</li>
