import { Dialog as SheetPrimitive } from 'bits-ui';

export type {
	DialogCloseProps as SheetCloseProps,
	DialogPortalProps as SheetPortalProps,
	DialogRootProps as SheetProps,
	DialogTriggerProps as SheetTriggerProps,
} from 'bits-ui';

export const Sheet = SheetPrimitive.Root;
export const SheetClose = SheetPrimitive.Close;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetPortal = SheetPrimitive.Portal;

export {
	default as SheetContent,
	sheetContentVariants,
	type SheetContentProps,
	type SheetContentSide,
} from '$components/ui/sheet/SheetContent.svelte';

export {
	default as SheetHeader,
	type SheetHeaderProps,
} from '$components/ui/sheet/SheetHeader.svelte';

export {
	default as SheetFooter,
	type SheetFooterProps,
} from '$components/ui/sheet/SheetFooter.svelte';

export {
	default as SheetDescription,
	type SheetDescriptionProps,
} from '$components/ui/sheet/SheetDescription.svelte';

export {
	default as SheetOverlay,
	type SheetOverlayProps,
} from '$components/ui/sheet/SheetOverlay.svelte';

export {
	default as SheetTitle,
	type SheetTitleProps,
} from '$components/ui/sheet/SheetTitle.svelte';
