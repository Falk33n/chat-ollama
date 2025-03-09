<script lang="ts">
	import { buttonVariants, type ButtonProps } from '$components/ui/button';
	import { cn } from '$utils';

	let {
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		href = undefined,
		type = 'button',
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
