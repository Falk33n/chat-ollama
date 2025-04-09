<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { cn } from '$lib/utils';
	import type { SidebarInputProps } from '../types';

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: SidebarInputProps = $props();
</script>

<Input
	bind:ref
	bind:value
	data-sidebar="input"
	class={cn(
		'bg-background h-8 w-full shadow-none',
		'focus-visible:ring-sidebar-ring focus-visible:ring-2',
		className,
	)}
	{...restProps}
/>
