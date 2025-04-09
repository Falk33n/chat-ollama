import { Dialog as SheetPrimitive } from 'bits-ui';

export type {
	DialogCloseProps as CloseProps,
	DialogPortalProps as PortalProps,
	DialogRootProps as RootProps,
	DialogTriggerProps as TriggerProps,
} from 'bits-ui';

export type {
	SheetContentProps as ContentProps,
	SheetDescriptionProps as DescriptionProps,
	SheetFooterProps as FooterProps,
	SheetHeaderProps as HeaderProps,
	SheetOverlayProps as OverlayProps,
	SheetTitleProps as TitleProps,
} from './types';

export { default as Content } from './components/sheet-content.svelte';
export { default as Description } from './components/sheet-description.svelte';
export { default as Footer } from './components/sheet-footer.svelte';
export { default as Header } from './components/sheet-header.svelte';
export { default as Overlay } from './components/sheet-overlay.svelte';
export { default as Title } from './components/sheet-title.svelte';

export const Root = SheetPrimitive.Root;
export const Close = SheetPrimitive.Close;
export const Trigger = SheetPrimitive.Trigger;
export const Portal = SheetPrimitive.Portal;
