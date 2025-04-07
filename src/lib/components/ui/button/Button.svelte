<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ButtonProps } from './types';
	import { buttonVariants } from './variants';

	let {
		ref = $bindable(null),
		variant = 'primary',
		size = 'md',
		href = undefined,
		type = 'button',
		class: className,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	bind:this={ref}
	class={cn(buttonVariants({ variant, size }), className)}
	{href}
	{type}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
