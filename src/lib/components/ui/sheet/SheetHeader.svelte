<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SheetHeaderProps = WithElementRef<
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
	}: SheetHeaderProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
	{...restProps}
>
	{@render children?.()}
</div>
