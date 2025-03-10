<script
	lang="ts"
	module
>
	import { Avatar as AvatarPrimitive, type WithElementRef } from 'bits-ui';

	export type AvatarProps = WithElementRef<
		Omit<AvatarPrimitive.RootProps, 'ref'>,
		HTMLDivElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		loadingStatus = $bindable('loading'),
		class: className,
		...restProps
	}: AvatarProps = $props();
</script>

<AvatarPrimitive.Root
	bind:loadingStatus
	bind:ref
	class={cn(
		'relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full',
		className,
	)}
	{...restProps}
/>
