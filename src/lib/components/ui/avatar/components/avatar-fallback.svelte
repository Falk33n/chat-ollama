<script lang="ts">
	import { cn } from '$lib/utils';
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import type { AvatarFallbackProps } from '../types';

	let { ref = $bindable(null), class: className, ...restProps }: AvatarFallbackProps = $props();
</script>

<AvatarPrimitive.Fallback
	bind:ref
	class={cn('bg-muted flex size-full items-center justify-center', className)}
	{...restProps}
/>
