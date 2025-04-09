<script lang="ts">
	import { cn } from '$lib/utils';
	import CheckIcon from '@lucide/svelte/icons/check';
	import MinusIcon from '@lucide/svelte/icons/minus';
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import type { DropdownMenuCheckboxItemProps } from '../types';

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		children: childrenProp,
		class: className,
		...restProps
	}: DropdownMenuCheckboxItemProps = $props();

	const Icon = $derived(indeterminate ? MinusIcon : CheckIcon);
</script>

<DropdownMenuPrimitive.CheckboxItem
	bind:ref
	bind:checked
	bind:indeterminate
	class={cn(
		'relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none',
		'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
		'data-[disabled]:pointer-events-none data-[disabled]:opacity-70',
		className,
	)}
	{...restProps}
>
	{#snippet children({ checked, indeterminate })}
		<span
			class="absolute left-2 flex size-3.5 items-center justify-center"
			aria-hidden={true}
		>
			<Icon
				class={cn('size-4', !checked && !indeterminate && 'text-transparent')}
				aria-hidden
			/>
		</span>

		{@render childrenProp?.()}
	{/snippet}
</DropdownMenuPrimitive.CheckboxItem>
