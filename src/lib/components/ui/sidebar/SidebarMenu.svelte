<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SidebarMenuProps = WithElementRef<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SidebarMenuProps = $props();
</script>

<ul
	bind:this={ref}
	data-sidebar="menu"
	class={cn('flex w-full min-w-0 flex-col gap-1', className)}
	{...restProps}
>
	{@render children?.()}
</ul>
