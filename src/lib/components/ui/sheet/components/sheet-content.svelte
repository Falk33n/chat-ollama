<script lang="ts">
	import { cn } from '$lib/utils';
	import XIcon from '@lucide/svelte/icons/x';
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import type { SheetContentProps } from '../types';
	import { sheetContentVariants } from '../variants';
	import SheetOverlay from './sheet-overlay.svelte';

	let {
		ref = $bindable(null),
		side = 'right',
		class: className,
		children,
		portalProps,
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
			class={cn(
				'absolute top-4 right-4 rounded-sm opacity-70 transition-opacity duration-200',
				'focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
				'hover:opacity-100',
				'disabled:pointer-events-none',
				'data-[state=open]:bg-secondary',
			)}
			aria-label="Close"
		>
			<XIcon
				class="size-4"
				aria-hidden
			/>
		</SheetPrimitive.Close>
	</SheetPrimitive.Content>
</SheetPrimitive.Portal>
