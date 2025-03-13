import { Dialog as DialogPrimitive } from 'bits-ui';

export type {
	DialogCloseProps,
	DialogPortalProps,
	DialogRootProps,
	DialogTriggerProps,
} from 'bits-ui';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogPortal = DialogPrimitive.Portal;

export {
	default as DialogTitle,
	type DialogTitleProps,
} from '$components/ui/dialog/DialogTitle.svelte';

export {
	default as DialogFooter,
	type DialogFooterProps,
} from '$components/ui/dialog/DialogFooter.svelte';

export {
	default as DialogHeader,
	type DialogHeaderProps,
} from '$components/ui/dialog/DialogHeader.svelte';

export {
	default as DialogOverlay,
	type DialogOverlayProps,
} from '$components/ui/dialog/DialogOverlay.svelte';

export {
	default as DialogContent,
	type DialogContentProps,
} from '$components/ui/dialog/DialogContent.svelte';

export {
	default as DialogDescription,
	type DialogDescriptionProps,
} from '$components/ui/dialog/DialogDescription.svelte';
