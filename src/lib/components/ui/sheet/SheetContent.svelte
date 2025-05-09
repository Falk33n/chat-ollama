<script
	lang="ts"
	module
>
	import {
		Dialog as SheetPrimitive,
		type WithElementRef,
		type WithoutChild,
	} from 'bits-ui';
	import { tv, type VariantProps } from 'tailwind-variants';

	export const sheetContentVariants = tv({
		base: 'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
		variants: {
			side: {
				top: 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b',
				bottom:
					'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t',
				left: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
				right:
					'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	});

	export type SheetContentSide = VariantProps<
		typeof sheetContentVariants
	>['side'];

	type SheetContentPropsWithoutHTML = WithElementRef<
		{
			portalProps?: SheetPrimitive.PortalProps;
			side?: SheetContentSide;
		},
		HTMLDivElement
	>;

	type SheetContentPropsWithHTML = WithoutChild<
		Omit<SheetPrimitive.ContentProps, 'ref'>
	>;

	export type SheetContentProps = SheetContentPropsWithoutHTML &
		SheetContentPropsWithHTML;
</script>

<script lang="ts">
	import { SheetOverlay } from '$components/ui/sheet';
	import { cn } from '$utils';
	import { XIcon } from 'lucide-svelte';

	let {
		ref = $bindable(null),
		'class': className,
		portalProps,
		side = 'right',
		'aria-label': ariaLabel = 'Close',
		children,
		...restProps
	}: SheetContentProps = $props();
</script>

<SheetPrimitive.Portal {...portalProps}>
	<SheetOverlay class="dark:bg-black/50" />

	<SheetPrimitive.Content
		bind:ref
		class={cn(sheetContentVariants({ side }), className)}
		{...restProps}
	>
		{@render children?.()}

		<SheetPrimitive.Close
			class="data-[state=open]:bg-secondary focus:ring-ring ring-offset-background absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
			aria-label={ariaLabel}
		>
			<XIcon
				class="size-4"
				aria-hidden
			/>
		</SheetPrimitive.Close>
	</SheetPrimitive.Content>
</SheetPrimitive.Portal>
