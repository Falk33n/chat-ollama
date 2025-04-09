<script lang="ts">
	import { cn } from '$lib/utils';
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import type { SheetDescriptionProps } from '../types';

	let { ref = $bindable(null), class: className, ...restProps }: SheetDescriptionProps = $props();
</script>

<SheetPrimitive.Description
	bind:ref
	class={cn('text-muted-foreground text-sm', className)}
	{...restProps}
/>
