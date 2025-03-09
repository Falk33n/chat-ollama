<script lang="ts">
	import type { SeparatorProps } from '$components/ui/separator';
	import { cn } from '$utils';
	import { Separator as SeparatorPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		orientation = 'horizontal',
		...restProps
	}: SeparatorProps = $props();
</script>

<SeparatorPrimitive.Root
	bind:ref
	class={cn(
		'bg-border shrink-0',
		orientation === 'horizontal' ? 'h-[1px] w-full' : 'min-h-full w-[1px]',
		className,
	)}
	{orientation}
	{...restProps}
/>
