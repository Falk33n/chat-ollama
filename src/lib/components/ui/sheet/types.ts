import { Dialog as SheetPrimitive, type WithElementRef, type WithoutChild } from 'bits-ui';
import type { HTMLAttributes } from 'svelte/elements';
import type { SheetContentSide } from './variants';

//
// OVERLAY
//

export type SheetOverlayProps = WithElementRef<
	Omit<SheetPrimitive.OverlayProps, 'ref'>,
	HTMLDivElement
>;

//
// HEADER
//

export type SheetHeaderProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

//
// TITLE
//

export type SheetTitleProps = WithElementRef<
	Omit<SheetPrimitive.TitleProps, 'ref'>,
	HTMLDivElement
>;

//
// DESCRIPTION
//

export type SheetDescriptionProps = WithElementRef<
	Omit<SheetPrimitive.DescriptionProps, 'ref'>,
	HTMLDivElement
>;

//
// CONTENT
//

type SheetContentPropsWithoutHTML = WithElementRef<
	{
		/**
		 * The props to be used for the portal component.
		 * See reference for more information.
		 * https://github.com/huntabyte/bits-ui/blob/6384cfecdf82adf6b2665a0f0da421493064bdc8/packages/bits-ui/src/lib/bits/utilities/portal/types.ts#L3
		 */
		portalProps?: SheetPrimitive.PortalProps;

		/**
		 * Applies position styles to the content.
		 * @defaultValue `"right"`
		 */
		side?: SheetContentSide;
	},
	HTMLDivElement
>;

type SheetContentPropsWithHTML = WithoutChild<Omit<SheetPrimitive.ContentProps, 'ref'>>;

export type SheetContentProps = SheetContentPropsWithoutHTML & SheetContentPropsWithHTML;

//
// FOOTER
//

export type SheetFooterProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
