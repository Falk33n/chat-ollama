<script lang="ts">
	import { cn } from '$lib/utils';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import type { DialogTitleProps } from '../types';

	let { ref = $bindable(null), class: className, ...restProps }: DialogTitleProps = $props();
</script>

<DialogPrimitive.Title
	bind:ref
	class={cn('text-lg leading-none font-semibold tracking-tight', className)}
	{...restProps}
/>
