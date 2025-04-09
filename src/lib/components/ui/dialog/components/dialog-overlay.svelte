<script lang="ts">
	import { cn } from '$lib/utils';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import type { DialogOverlayProps } from '../types';

	let { ref = $bindable(null), class: className, ...restProps }: DialogOverlayProps = $props();
</script>

<DialogPrimitive.Overlay
	bind:ref
	class={cn(
		'fixed inset-0 z-50 bg-black/80',
		'data-[state=open]:fade-in-0 data-[state=open]:animate-in',
		'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
		className,
	)}
	{...restProps}
/>
