<script lang="ts">
	import { cn } from '$lib/utils';
	import type { InputProps } from './types';

	let {
		ref = $bindable(null),
		value = $bindable(),
		files = $bindable(),
		class: className,
		type,
		...restProps
	}: InputProps = $props();

	const inputProps = $derived({
		class: cn(
			'border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors duration-200',
			'file:border-0 file:bg-transparent file:text-sm file:font-medium',
			'placeholder:text-muted-foreground',
			'focus-visible:ring-ring focus-visible:ring-1 focus-visible:outline-none',
			'disabled:pointer-events-none disabled:opacity-70',
			'md:text-sm',
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
		{...inputProps}
	/>
{:else}
	<input
		bind:this={ref}
		bind:value
		{type}
		{...inputProps}
	/>
{/if}
