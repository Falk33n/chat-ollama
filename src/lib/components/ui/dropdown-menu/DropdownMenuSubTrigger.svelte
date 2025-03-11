<script
	lang="ts"
	module
>
	import {
		DropdownMenu as DropdownMenuPrimitive,
		type WithElementRef,
		type WithoutChild,
	} from 'bits-ui';

	type DropdownMenuSubTriggerPropsWithCorrectRef = WithElementRef<
		WithoutChild<Omit<DropdownMenuPrimitive.SubTriggerProps, 'ref'>>,
		HTMLButtonElement
	>;

	export type DropdownMenuSubTriggerProps =
		DropdownMenuSubTriggerPropsWithCorrectRef & {
			inset?: boolean;
		};
</script>

<script lang="ts">
	import { cn } from '$utils';
	import { ChevronRightIcon } from 'lucide-svelte';

	let {
		ref = $bindable(null),
		class: className,
		inset,
		children,
		...restProps
	}: DropdownMenuSubTriggerProps = $props();
</script>

<DropdownMenuPrimitive.SubTrigger
	bind:ref
	class={cn(
		'data-[highlighted]:bg-accent data-[state=open]:bg-accent flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		inset && 'pl-8',
		className,
	)}
	{...restProps}
>
	{@render children?.()}

	<ChevronRightIcon
		class="ml-auto"
		aria-hidden
	/>
</DropdownMenuPrimitive.SubTrigger>
