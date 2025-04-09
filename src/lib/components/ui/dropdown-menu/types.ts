import {
	DropdownMenu as DropdownMenuPrimitive,
	type WithElementRef,
	type WithoutChild,
	type WithoutChildrenOrChild,
} from 'bits-ui';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

//
// LABEL
//

type DropdownMenuLabelPropsWithoutHTML = WithElementRef<
	{
		/** If the label should have padding that insets it. */
		inset?: boolean;
	},
	HTMLDivElement
>;

type DropdownMenuLabelPropsWithHTML = HTMLAttributes<HTMLDivElement>;

export type DropdownMenuLabelProps = DropdownMenuLabelPropsWithoutHTML &
	DropdownMenuLabelPropsWithHTML;

//
// ITEM
//

type DropdownMenuItemPropsWithoutHTML = WithElementRef<
	{
		/** If the item should have padding that insets it. */
		inset?: boolean;
	},
	HTMLDivElement
>;

type DropdownMenuItemPropsWithHTML = Omit<DropdownMenuPrimitive.ItemProps, 'ref'>;

export type DropdownMenuItemProps = DropdownMenuItemPropsWithoutHTML &
	DropdownMenuItemPropsWithHTML;

//
// GROUP HEADING
//

type DropdownMenuGroupHeadingPropsWithoutHTML = WithElementRef<
	{
		/** If the group heading should have padding that insets it. */
		inset?: boolean;
	},
	HTMLDivElement
>;

type DropdownMenuGroupHeadingPropsWithHTML = Omit<DropdownMenuPrimitive.GroupHeadingProps, 'ref'>;

export type DropdownMenuGroupHeadingProps = DropdownMenuGroupHeadingPropsWithoutHTML &
	DropdownMenuGroupHeadingPropsWithHTML;

//
// CONTENT
//

type DropdownMenuContentPropsWithoutHTML = WithElementRef<
	{
		/**
		 * The props to be used for the portal component.
		 * See reference for more information.
		 * https://github.com/huntabyte/bits-ui/blob/6384cfecdf82adf6b2665a0f0da421493064bdc8/packages/bits-ui/src/lib/bits/utilities/portal/types.ts#L3
		 */
		portalProps?: DropdownMenuPrimitive.PortalProps;
	},
	HTMLDivElement
>;

type DropdownMenuContentPropsWithHTML = Omit<DropdownMenuPrimitive.ContentProps, 'ref'>;

export type DropdownMenuContentProps = DropdownMenuContentPropsWithoutHTML &
	DropdownMenuContentPropsWithHTML;

//
// SUB TRIGGER
//

type DropdownMenuSubTriggerPropsWithoutHTML = WithElementRef<
	{
		/** If the sub trigger should have padding that insets it. */
		inset?: boolean;
	},
	HTMLButtonElement
>;

type DropdownMenuSubTriggerPropsWithHTML = WithoutChild<
	Omit<DropdownMenuPrimitive.SubTriggerProps, 'ref'>
>;

export type DropdownMenuSubTriggerProps = DropdownMenuSubTriggerPropsWithoutHTML &
	DropdownMenuSubTriggerPropsWithHTML;

//
// SUB CONTENT
//

export type DropdownMenuSubContentProps = WithElementRef<
	Omit<DropdownMenuPrimitive.SubContentProps, 'ref'>,
	HTMLDivElement
>;

//
// RADIO ITEM
//

export type DropdownMenuRadioItemProps = WithoutChild<
	WithElementRef<Omit<DropdownMenuPrimitive.RadioItemProps, 'ref'>, HTMLInputElement>
>;

//
// CHECKBOX ITEM
//

type DropdownMenuCheckboxItemPropsWithoutHTML = WithElementRef<
	{
		children?: Snippet;
	},
	HTMLInputElement
>;

type DropdownMenuCheckboxItemPropsWithHTML = WithoutChildrenOrChild<
	Omit<DropdownMenuPrimitive.CheckboxItemProps, 'ref'>
>;

export type DropdownMenuCheckboxItemProps = DropdownMenuCheckboxItemPropsWithoutHTML &
	DropdownMenuCheckboxItemPropsWithHTML;

//
// SHORTCUT
//

export type DropdownMenuShortcutProps = WithElementRef<
	HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
>;

//
// SEPARATOR
//

export type DropdownMenuSeparatorProps = WithElementRef<
	Omit<DropdownMenuPrimitive.SeparatorProps, 'ref'>,
	HTMLDivElement
>;
