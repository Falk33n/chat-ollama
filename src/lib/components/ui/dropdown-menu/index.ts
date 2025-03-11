import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

export type {
	DropdownMenuArrowProps,
	DropdownMenuGroupProps,
	DropdownMenuRootProps as DropdownMenuProps,
	DropdownMenuRadioGroupProps,
	DropdownMenuSubProps,
	DropdownMenuTriggerProps,
} from 'bits-ui';

export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuArrow = DropdownMenuPrimitive.Arrow;

export {
	default as DropdownMenuCheckboxItem,
	type DropdownMenuCheckboxItemProps,
} from '$components/ui/dropdown-menu/DropdownMenuCheckboxItem.svelte';

export {
	default as DropdownMenuContent,
	type DropdownMenuContentProps,
} from '$components/ui/dropdown-menu/DropdownMenuContent.svelte';

export {
	default as DropdownMenuGroupHeading,
	type DropdownMenuGroupHeadingProps,
} from '$components/ui/dropdown-menu/DropdownMenuGroupHeading.svelte';

export {
	default as DropdownMenuItem,
	type DropdownMenuItemProps,
} from '$components/ui/dropdown-menu/DropdownMenuItem.svelte';

export {
	default as DropdownMenuLabel,
	type DropdownMenuLabelProps,
} from '$components/ui/dropdown-menu/DropdownMenuLabel.svelte';

export {
	default as DropdownMenuRadioItem,
	type DropdownMenuRadioItemProps,
} from '$components/ui/dropdown-menu/DropdownMenuRadioItem.svelte';

export {
	default as DropdownMenuSeparator,
	type DropdownMenuSeparatorProps,
} from '$components/ui/dropdown-menu/DropdownMenuSeparator.svelte';

export {
	default as DropdownMenuShortcut,
	type DropdownMenuShortcutProps,
} from '$components/ui/dropdown-menu/DropdownMenuShortcut.svelte';

export {
	default as DropdownMenuSubContent,
	type DropdownMenuSubContentProps,
} from '$components/ui/dropdown-menu/DropdownMenuSubContent.svelte';

export {
	default as DropdownMenuSubTrigger,
	type DropdownMenuSubTriggerProps,
} from '$components/ui/dropdown-menu/DropdownMenuSubTrigger.svelte';
