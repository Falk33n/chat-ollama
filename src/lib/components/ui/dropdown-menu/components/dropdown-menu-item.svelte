<script lang="ts">
	import { cn } from '$lib/utils';
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import type { DropdownMenuItemProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		inset,
		...restProps
	}: DropdownMenuItemProps = $props();
</script>

<DropdownMenuPrimitive.Item
	bind:ref
	class={cn(
		'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors duration-200 outline-none select-none',
		'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
		'data-[disabled]:pointer-events-none data-[disabled]:opacity-70',
		'[&>svg]:size-4 [&>svg]:shrink-0',
		inset && 'pl-8',
		className,
	)}
	{...restProps}
/>
