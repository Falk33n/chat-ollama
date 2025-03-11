<script
	lang="ts"
	module
>
	import {
		DropdownMenu as DropdownMenuPrimitive,
		type WithElementRef,
	} from 'bits-ui';

	export type DropdownMenuSeparatorProps = WithElementRef<
		Omit<DropdownMenuPrimitive.SeparatorProps, 'ref'>,
		HTMLDivElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: DropdownMenuSeparatorProps = $props();
</script>

<DropdownMenuPrimitive.Separator
	bind:ref
	class={cn('bg-muted -mx-1 my-1 h-px', className)}
	{...restProps}
/>
