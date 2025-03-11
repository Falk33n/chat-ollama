<script
	lang="ts"
	module
>
	import { type WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type DropdownMenuLabelPropsWithCorrectRef = WithElementRef<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;

	export type DropdownMenuLabelProps = DropdownMenuLabelPropsWithCorrectRef & {
		inset?: boolean;
	};
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		inset,
		children,
		...restProps
	}: DropdownMenuLabelProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
	{...restProps}
>
	{@render children?.()}
</div>
