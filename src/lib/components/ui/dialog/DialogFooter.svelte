<script
	lang="ts"
	module
>
	import { type WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type DialogFooterProps = WithElementRef<
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
	}: DialogFooterProps = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</div>
