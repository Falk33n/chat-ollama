import { Dialog as DialogPrimitive } from 'bits-ui';

export type {
	DialogCloseProps as CloseProps,
	DialogPortalProps as PortalProps,
	DialogRootProps as RootProps,
	DialogTriggerProps as TriggerProps,
} from 'bits-ui';

export type {
	DialogContentProps as ContentProps,
	DialogDescriptionProps as DescriptionProps,
	DialogFooterProps as FooterProps,
	DialogHeaderProps as HeaderProps,
	DialogOverlayProps as OverlayProps,
	DialogTitleProps as TitleProps,
} from './types';

export { default as Content } from './components/dialog-content.svelte';
export { default as Description } from './components/dialog-description.svelte';
export { default as Footer } from './components/dialog-footer.svelte';
export { default as Header } from './components/dialog-header.svelte';
export { default as Overlay } from './components/dialog-overlay.svelte';
export { default as Title } from './components/dialog-title.svelte';

export const Root = DialogPrimitive.Root;
export const Trigger = DialogPrimitive.Trigger;
export const Close = DialogPrimitive.Close;
export const Portal = DialogPrimitive.Portal;
