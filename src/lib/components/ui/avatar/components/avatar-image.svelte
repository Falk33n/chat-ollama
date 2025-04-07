<script lang="ts">
	import { cn } from '$lib/utils';
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import type { AvatarImageProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		referrerpolicy = 'no-referrer',
		crossorigin = 'anonymous',
		src,
		alt,
		...restProps
	}: AvatarImageProps = $props();
</script>

<AvatarPrimitive.Image
	bind:ref
	class={cn('aspect-square size-full rounded-full', className)}
	{referrerpolicy}
	{crossorigin}
	{src}
	{alt}
	{...restProps}
/>
