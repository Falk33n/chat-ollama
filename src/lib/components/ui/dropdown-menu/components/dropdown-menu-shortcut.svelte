<script lang="ts">
	import { cn } from '$lib/utils';
	import type { DropdownMenuShortcutProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: DropdownMenuShortcutProps = $props();
</script>

<span
	bind:this={ref}
	class={cn('ml-auto text-xs tracking-widest opacity-60', className)}
	{...restProps}
>
	{@render children?.()}
</span>
