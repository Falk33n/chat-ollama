<script lang="ts">
	import { cn } from '$lib/utils';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import type { DialogDescriptionProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: DialogDescriptionProps = $props();
</script>

<DialogPrimitive.Description
	bind:ref
	class={cn('text-muted-foreground text-sm', className)}
	{...restProps}
/>
