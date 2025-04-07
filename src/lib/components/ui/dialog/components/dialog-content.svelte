<script lang="ts">
	import { cn } from '$lib/utils';
	import XIcon from '@lucide/svelte/icons/x';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import type { DialogContentProps } from '../types';
	import DialogOverlay from './dialog-overlay.svelte';

	let {
		ref = $bindable(null),
		class: className,
		portalProps,
		children,
		...restProps
	}: DialogContentProps = $props();
</script>

<DialogPrimitive.Portal {...portalProps}>
	<DialogOverlay />

	<DialogPrimitive.Content
		bind:ref
		class={cn(
			'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg',
			className,
		)}
		{...restProps}
	>
		{@render children?.()}

		<DialogPrimitive.Close
			class="data-[state=open]:bg-accent focus:ring-ring ring-offset-background data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
			aria-label="Close"
		>
			<XIcon
				class="size-4"
				aria-hidden
			/>
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</DialogPrimitive.Portal>
