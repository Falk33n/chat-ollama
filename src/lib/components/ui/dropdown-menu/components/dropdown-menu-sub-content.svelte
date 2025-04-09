<script lang="ts">
	import { cn } from '$lib/utils';
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import type { DropdownMenuSubContentProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: DropdownMenuSubContentProps = $props();
</script>

<DropdownMenuPrimitive.SubContent
	bind:ref
	class={cn(
		'bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-lg focus-visible:outline-none',
		className,
	)}
	{...restProps}
/>
