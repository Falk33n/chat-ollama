<script lang="ts">
	import { cn } from '$lib/utils';
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import type { AvatarRootProps } from '../types';

	let {
		ref = $bindable(null),
		loadingStatus = $bindable('loading'),
		class: className,
		...restProps
	}: AvatarRootProps = $props();
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
