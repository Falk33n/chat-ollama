<script lang="ts">
	import { cn } from '$lib/utils';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import type { DropdownMenuSubTriggerProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		inset,
		children,
		...restProps
	}: DropdownMenuSubTriggerProps = $props();
</script>

<DropdownMenuPrimitive.SubTrigger
	bind:ref
	class={cn(
		'flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none',
		'data-[highlighted]:bg-accent',
		'data-[state=open]:bg-accent',
		'[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		inset && 'pl-8',
		className,
	)}
	{...restProps}
>
	{@render children?.()}

	<ChevronRightIcon
		class="ml-auto"
		aria-hidden
	/>
</DropdownMenuPrimitive.SubTrigger>
