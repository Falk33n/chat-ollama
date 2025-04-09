<script lang="ts">
	import { cn } from '$lib/utils';
	import CircleIcon from '@lucide/svelte/icons/circle';
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import type { DropdownMenuRadioItemProps } from '../types';

	let {
		ref = $bindable(null),
		class: className,
		children: childrenProp,
		...restProps
	}: DropdownMenuRadioItemProps = $props();
</script>

<DropdownMenuPrimitive.RadioItem
	bind:ref
	class={cn(
		'relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none',
		'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
		'data-[disabled]:pointer-events-none data-[disabled]:opacity-70',
		className,
	)}
	{...restProps}
>
	{#snippet children({ checked })}
		<span class="absolute left-2 flex size-3.5 items-center justify-center">
			{#if checked}
				<CircleIcon
					class="size-2 fill-current"
					aria-hidden
				/>
			{/if}
		</span>

		{@render childrenProp?.({ checked })}
	{/snippet}
</DropdownMenuPrimitive.RadioItem>
