<script
	lang="ts"
	module
>
	import {
		DropdownMenu as DropdownMenuPrimitive,
		type WithElementRef,
	} from 'bits-ui';

	type DropdownMenuItemPropsWithCorrectRef = WithElementRef<
		Omit<DropdownMenuPrimitive.ItemProps, 'ref'>,
		HTMLDivElement
	>;

	export type DropdownMenuItemProps = DropdownMenuItemPropsWithCorrectRef & {
		inset?: boolean;
	};
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		inset,
		...restProps
	}: DropdownMenuItemProps = $props();
</script>

<DropdownMenuPrimitive.Item
	bind:ref
	class={cn(
		'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
		inset && 'pl-8',
		className,
	)}
	{...restProps}
/>
