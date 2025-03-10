<script
	lang="ts"
	module
>
	import { Avatar as AvatarPrimitive, type WithElementRef } from 'bits-ui';

	export type AvatarImageProps = WithElementRef<
		Omit<AvatarPrimitive.ImageProps, 'ref'>,
		HTMLImageElement
	>;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		src,
		alt,
		...restProps
	}: AvatarImageProps = $props();
</script>

<AvatarPrimitive.Image
	bind:ref
	{src}
	{alt}
	class={cn('aspect-square size-full rounded-full', className)}
	{...restProps}
/>
