<script
	lang="ts"
	module
>
	import {
		DropdownMenu as DropdownMenuPrimitive,
		type WithElementRef,
		type WithoutChild,
	} from 'bits-ui';

	type DropdownMenuRadioItemPropsWithCorrectRef = WithElementRef<
		Omit<DropdownMenuPrimitive.RadioItemProps, 'ref'>,
		HTMLInputElement
	>;

	export type DropdownMenuRadioItemProps =
		WithoutChild<DropdownMenuRadioItemPropsWithCorrectRef>;
</script>

<script lang="ts">
	import { cn } from '$utils';
	import { CircleIcon } from 'lucide-svelte';

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
		'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className,
	)}
	{...restProps}
>
	{#snippet children({ checked })}
		<span class="left-2 absolute flex justify-center items-center size-3.5">
			{#if checked}
				<CircleIcon
					class="fill-current size-2"
					aria-hidden
				/>
			{/if}
		</span>

		{@render childrenProp?.({ checked })}
	{/snippet}
</DropdownMenuPrimitive.RadioItem>
