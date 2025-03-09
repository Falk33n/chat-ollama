<script lang="ts">
	import type { InputProps } from '$components/ui/input';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		value = $bindable(),
		files = $bindable(),
		class: className,
		type,
		...restProps
	}: InputProps = $props();

	const mergedProps = $derived({
		class: cn(
			'border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
			className,
		),
		...restProps,
	});
</script>

{#if type === 'file'}
	<input
		bind:this={ref}
		bind:files
		bind:value
		type="file"
		{...mergedProps}
	/>
{:else}
	<input
		bind:this={ref}
		bind:value
		{type}
		{...mergedProps}
	/>
{/if}
