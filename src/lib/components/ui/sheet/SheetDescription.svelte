<script
	lang="ts"
	module
>
	import { Dialog as SheetPrimitive, type WithElementRef } from 'bits-ui';

	export type SheetDescriptionProps = WithElementRef<
		Omit<SheetPrimitive.DescriptionProps, 'ref'>,
		HTMLDivElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: SheetDescriptionProps = $props();
</script>

<SheetPrimitive.Description
	bind:ref
	class={cn('text-muted-foreground text-sm', className)}
	{...restProps}
/>
