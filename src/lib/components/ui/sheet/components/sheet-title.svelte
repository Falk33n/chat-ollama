<script lang="ts">
	import { cn } from '$lib/utils';
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import type { SheetTitleProps } from '../types';

	let { ref = $bindable(null), class: className, ...restProps }: SheetTitleProps = $props();
</script>

<SheetPrimitive.Title
	bind:ref
	class={cn('text-foreground text-lg font-semibold', className)}
	{...restProps}
/>
