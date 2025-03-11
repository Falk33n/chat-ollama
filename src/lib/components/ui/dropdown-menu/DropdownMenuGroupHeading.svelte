<script
	lang="ts"
	module
>
	import {
		DropdownMenu as DropdownMenuPrimitive,
		type WithElementRef,
	} from 'bits-ui';

	type DropdownMenuGroupHeadingPropsWithCorrectRef = WithElementRef<
		Omit<DropdownMenuPrimitive.GroupHeadingProps, 'ref'>,
		HTMLDivElement
	>;

	export type DropdownMenuGroupHeadingProps =
		DropdownMenuGroupHeadingPropsWithCorrectRef & {
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
	}: DropdownMenuGroupHeadingProps = $props();
</script>

<DropdownMenuPrimitive.GroupHeading
	bind:ref
	class={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
	{...restProps}
/>
