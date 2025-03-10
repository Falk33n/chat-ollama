<script
	lang="ts"
	module
>
	import { Avatar as AvatarPrimitive, type WithElementRef } from 'bits-ui';

	export type AvatarFallbackProps = WithElementRef<
		Omit<AvatarPrimitive.FallbackProps, 'ref'>,
		HTMLSpanElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: AvatarFallbackProps = $props();
</script>

<AvatarPrimitive.Fallback
	bind:ref
	class={cn('bg-muted flex size-full items-center justify-center', className)}
	{...restProps}
/>
