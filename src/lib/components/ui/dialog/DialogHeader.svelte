<script
	lang="ts"
	module
>
	import { type WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type DialogHeaderProps = WithElementRef<
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
	}: DialogHeaderProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
	{...restProps}
>
	{@render children?.()}
</div>
