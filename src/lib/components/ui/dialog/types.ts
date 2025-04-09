import {
	Dialog as DialogPrimitive,
	type WithElementRef,
	type WithoutChildrenOrChild,
} from 'bits-ui';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

//
// OVERLAY
//

export type DialogOverlayProps = WithElementRef<
	Omit<DialogPrimitive.OverlayProps, 'ref'>,
	HTMLDivElement
>;

//
// HEADER
//

export type DialogHeaderProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

//
// TITLE
//

export type DialogTitleProps = WithElementRef<
	Omit<DialogPrimitive.TitleProps, 'ref'>,
	HTMLDivElement
>;

//
// DESCRIPTION
//

export type DialogDescriptionProps = WithElementRef<
	Omit<DialogPrimitive.DescriptionProps, 'ref'>,
	HTMLDivElement
>;

//
// CONTENT
//

type DialogContentPropsWithoutHTML = WithElementRef<
	{
		/**
		 * The props to be used for the portal component.
		 * See reference for more information.
		 * https://github.com/huntabyte/bits-ui/blob/6384cfecdf82adf6b2665a0f0da421493064bdc8/packages/bits-ui/src/lib/bits/utilities/portal/types.ts#L3
		 */
		portalProps?: DialogPrimitive.PortalProps;
		children: Snippet;
	},
	HTMLDivElement
>;

type DialogContentPropsWithHTML = Omit<WithoutChildrenOrChild<DialogPrimitive.ContentProps>, 'ref'>;

export type DialogContentProps = DialogContentPropsWithoutHTML & DialogContentPropsWithHTML;

//
// FOOTER
//

export type DialogFooterProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
