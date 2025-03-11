<script
	lang="ts"
	module
>
	import {
		DropdownMenu as DropdownMenuPrimitive,
		type WithElementRef,
		type WithoutChildrenOrChild,
	} from 'bits-ui';
	import type { Snippet } from 'svelte';

	type DropdownMenuCheckboxItemPropsWithCorrectRef = WithElementRef<
		Omit<DropdownMenuPrimitive.CheckboxItemProps, 'ref'>,
		HTMLInputElement
	>;

	type DropdownMenuCheckboxItemPropsWithCorrectChildren =
		WithoutChildrenOrChild<DropdownMenuCheckboxItemPropsWithCorrectRef> & {
			children?: Snippet;
		};

	export type DropdownMenuCheckboxItemProps =
		DropdownMenuCheckboxItemPropsWithCorrectChildren;
</script>

<script lang="ts">
	import { cn } from '$utils';
	import { CheckIcon, MinusIcon } from 'lucide-svelte';

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		class: className,
		children: childrenProp,
		...restProps
	}: DropdownMenuCheckboxItemProps = $props();
</script>

<DropdownMenuPrimitive.CheckboxItem
	bind:ref
	bind:checked
	bind:indeterminate
	class={cn(
		'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className,
	)}
	{...restProps}
>
	{#snippet children({ checked, indeterminate })}
		<span class="left-2 absolute flex justify-center items-center size-3.5">
			{#if indeterminate}
				<MinusIcon
					class="size-4"
					aria-hidden
				/>
			{:else}
				<CheckIcon
					class={cn('size-4', !checked && 'text-transparent')}
					aria-hidden
				/>
			{/if}
		</span>

		{@render childrenProp?.()}
	{/snippet}
</DropdownMenuPrimitive.CheckboxItem>
