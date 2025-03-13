<script
	lang="ts"
	module
>
	import { Dialog as DialogPrimitive, type WithElementRef } from 'bits-ui';

	export type DialogTitleProps = WithElementRef<
		Omit<DialogPrimitive.TitleProps, 'ref'>,
		HTMLDivElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: DialogTitleProps = $props();
</script>

<DialogPrimitive.Title
	bind:ref
	class={cn('text-lg leading-none font-semibold tracking-tight', className)}
	{...restProps}
/>
