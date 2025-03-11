<script
	lang="ts"
	module
>
	import {
		DropdownMenu as DropdownMenuPrimitive,
		type WithElementRef,
	} from 'bits-ui';

	export type DropdownMenuSubContentProps = WithElementRef<
		Omit<DropdownMenuPrimitive.SubContentProps, 'ref'>,
		HTMLDivElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: DropdownMenuSubContentProps = $props();
</script>

<DropdownMenuPrimitive.SubContent
	bind:ref
	class={cn(
		'bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-lg focus:outline-none',
		className,
	)}
	{...restProps}
/>
