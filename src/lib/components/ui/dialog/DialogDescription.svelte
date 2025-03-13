<script
	lang="ts"
	module
>
	import { Dialog as DialogPrimitive, type WithElementRef } from 'bits-ui';

	export type DialogDescriptionProps = WithElementRef<
		Omit<DialogPrimitive.DescriptionProps, 'ref'>,
		HTMLDivElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

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
