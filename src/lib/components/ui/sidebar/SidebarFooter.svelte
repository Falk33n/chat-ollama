<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SidebarFooterProps = WithElementRef<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

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
