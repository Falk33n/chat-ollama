<script
	lang="ts"
	module
>
	import { Dialog as SheetPrimitive, type WithElementRef } from 'bits-ui';

	export type SheetTitleProps = WithElementRef<
		Omit<SheetPrimitive.TitleProps, 'ref'>,
		HTMLDivElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: SheetTitleProps = $props();
</script>

<SheetPrimitive.Title
	bind:ref
	class={cn('text-foreground text-lg font-semibold', className)}
	{...restProps}
/>
