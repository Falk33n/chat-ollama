<script lang="ts">
	import type { TooltipBaseContentProps } from '$lib/components/ui/tooltip/types';
	import { cn } from '$lib/utils';
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		sideOffset = 4,
		class: className,
		...restProps
	}: TooltipBaseContentProps = $props();
</script>

<TooltipPrimitive.Content
	bind:ref
	{sideOffset}
	class={cn(
		'bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs',
		'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
		'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2',
		className,
	)}
	{...restProps}
/>
