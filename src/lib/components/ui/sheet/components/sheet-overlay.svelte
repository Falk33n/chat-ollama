<script lang="ts">
	import { cn } from '$lib/utils';
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import type { SheetOverlayProps } from '../types';

	let { ref = $bindable(null), class: className, ...restProps }: SheetOverlayProps = $props();
</script>

<SheetPrimitive.Overlay
	bind:ref
	class={cn(
		'fixed inset-0 z-50 bg-black/80',
		'data-[state=open]:animate-in data-[state=open]:fade-in-0',
		'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
		className,
	)}
	{...restProps}
/>
