import type { WithChildren, WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { ButtonProps } from '../button';
import type { InputProps } from '../input';
import type { SeparatorProps } from '../separator';
import type { SkeletonProps } from '../skeleton';
import type { TooltipBaseContentProps } from '../tooltip/types';
import type { SidebarMenuButtonSize, SidebarMenuButtonVariant } from './variants';

//
// ROOT
//

type SidebarRootPropsWithoutHTML = WithElementRef<
	{
		/**
		 * What side the sidebar will appear.
		 * @defaultValue `"left"`
		 */
		side?: 'left' | 'right';

		/**
		 * Applies different styles depending on the variant.
		 * @defaultValue `"sidebar"`
		 */
		variant?: 'sidebar' | 'floating' | 'inset';

		/**
		 * Determines when the sidebar will collapse.
		 * @defaultValue `"offcanvas"`
		 */
		collapsible?: 'offcanvas' | 'icon' | 'none';
	},
	HTMLDivElement
>;

type SidebarRootPropsWithHTML = HTMLAttributes<HTMLDivElement>;

export type SidebarRootProps = SidebarRootPropsWithoutHTML & SidebarRootPropsWithHTML;

//
// PROVIDER
//

type SidebarProviderPropsWithoutHTML = WithElementRef<
	{
		/**
		 * Wheter the sidebar is open or not.
		 * @defaultValue `true`
		 */
		open?: boolean;

		/** Callback function that executes each time the value of `open` changes. */
		onOpenChange?: (open: boolean) => void;
	},
	HTMLDivElement
>;

type SidebarProviderPropsWithHTML = HTMLAttributes<HTMLDivElement>;

export type SidebarProviderProps = SidebarProviderPropsWithoutHTML & SidebarProviderPropsWithHTML;

//
// TRIGGER
//

export type SidebarTriggerProps = ButtonProps & {
	onclick?: (e: MouseEvent) => void;
};

//
// RAIL
//

export type SidebarRailProps = WithElementRef<HTMLButtonAttributes, HTMLButtonElement>;

//
// SEPARATOR
//

export type SidebarSeparatorProps = SeparatorProps;

//
//  HEADER
//

export type SidebarHeaderProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

//
// CONTENT
//

export type SidebarContentProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

//
// INPUT
//

export type SidebarInputProps = InputProps;

//
// MENU
//

export type SidebarMenuProps = WithElementRef<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

//
// MENU ITEM
//

export type SidebarMenuItemProps = WithElementRef<HTMLAttributes<HTMLLIElement>, HTMLLIElement>;

//
// MENU BUTTON
//

type SidebarMenuButtonPropsWithoutHTML = WithElementRef<
	{
		/**
		 * Applies color styles to the button.
		 * @defaultValue `"accent"`
		 */
		variant?: SidebarMenuButtonVariant;

		/**
		 * Applies size styles to the button.
		 * @defaultValue `"md"`
		 */
		size?: SidebarMenuButtonSize;

		isActive?: boolean;
		tooltipContent?: Snippet;
		tooltipContentProps?: WithoutChildrenOrChild<TooltipBaseContentProps>;
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	},
	HTMLButtonElement
>;

type SidebarMenuButtonPropsWithHTML = HTMLButtonAttributes;

export type SidebarMenuButtonProps = SidebarMenuButtonPropsWithoutHTML &
	SidebarMenuButtonPropsWithHTML;

//
// MENU ACTION
//

type SidebarMenuActionPropsWithoutHTML = WithElementRef<
	{
		child?: Snippet<[{ props: Record<string, unknown> }]>;

		/**
		 * If the button should be visible on hover.
		 * @defaultValue `false`
		 */
		showOnHover?: boolean;
	},
	HTMLButtonElement
>;

type SidebarMenuActionPropsWithHTML = HTMLButtonAttributes;

export type SidebarMenuActionProps = SidebarMenuActionPropsWithoutHTML &
	SidebarMenuActionPropsWithHTML;

//
// MENU BADGE
//

export type SidebarMenuBadgeProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

//
// MENU SKELETON
//

type SidebarMenuSkeletonPropsWithoutHTML = {
	/**
	 * If the skeleton should have the size of an icon.
	 * @defaultValue `false`
	 */
	showIcon?: boolean;
};

type SidebarMenuSkeletonPropsWithHTML = WithChildren<SkeletonProps>;

export type SidebarMenuSkeletonProps = SidebarMenuSkeletonPropsWithoutHTML &
	SidebarMenuSkeletonPropsWithHTML;

//
// MENU SUB BUTTON
//

type SidebarMenuSubButtonPropsWithoutHTML = WithElementRef<
	{
		/**
		 * Applies size styles to the sub button.
		 * @defaultValue `"md"`
		 */
		size?: 'sm' | 'md';
		child?: Snippet<[{ props: Record<string, unknown> }]>;
		isActive?: boolean;
	},
	HTMLAnchorElement
>;

type SidebarMenuSubButtonPropsWithHTML = HTMLAnchorAttributes;

export type SidebarMenuSubButtonProps = SidebarMenuSubButtonPropsWithoutHTML &
	SidebarMenuSubButtonPropsWithHTML;

//
// MENU SUB ITEM
//

export type SidebarMenuSubItemProps = WithElementRef<HTMLAttributes<HTMLLIElement>, HTMLLIElement>;

//
// MENU SUB
//

export type SidebarMenuSubProps = WithElementRef<
	HTMLAttributes<HTMLUListElement>,
	HTMLUListElement
>;

//
// GROUP
//

export type SidebarGroupProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

//
// GROUP LABEL
//

type SidebarGroupLabelPropsWithoutHTML = WithElementRef<
	{
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	},
	HTMLDivElement
>;

type SidebarGroupLabelPropsWithHTML = HTMLAttributes<HTMLDivElement>;

export type SidebarGroupLabelProps = SidebarGroupLabelPropsWithoutHTML &
	SidebarGroupLabelPropsWithHTML;

//
// GROUP ACTION
//

type SidebarGroupActionPropsWithoutHTML = WithElementRef<
	{
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	},
	HTMLButtonElement
>;

type SidebarGroupActionPropsWithHTML = HTMLButtonAttributes;

export type SidebarGroupActionProps = SidebarGroupActionPropsWithoutHTML &
	SidebarGroupActionPropsWithHTML;

//
// GROUP CONTENT
//

export type SidebarGroupContentProps = WithElementRef<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

//
// INSET
//

export type SidebarInsetProps = WithElementRef<HTMLAttributes<HTMLElement>, HTMLElement>;

//
// FOOTER
//

export type SidebarFooterProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
