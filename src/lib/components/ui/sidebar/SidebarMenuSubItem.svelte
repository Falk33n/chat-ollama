<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SidebarMenuSubItemProps = WithElementRef<
		HTMLAttributes<HTMLLIElement>,
		HTMLLIElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

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
