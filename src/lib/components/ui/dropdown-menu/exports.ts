import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

export type {
	DropdownMenuArrowProps as ArrowProps,
	DropdownMenuGroupProps as GroupProps,
	DropdownMenuRadioGroupProps as RadioGroupProps,
	DropdownMenuRootProps as RootProps,
	DropdownMenuSubProps as SubProps,
	DropdownMenuTriggerProps as TriggerProps,
} from 'bits-ui';

export type {
	DropdownMenuCheckboxItemProps as CheckboxItemProps,
	DropdownMenuContentProps as ContentProps,
	DropdownMenuGroupHeadingProps as GroupHeadingProps,
	DropdownMenuItemProps as ItemProps,
	DropdownMenuLabelProps as LabelProps,
	DropdownMenuRadioItemProps as RadioItemProps,
	DropdownMenuSeparatorProps as SeparatorProps,
	DropdownMenuShortcutProps as ShortcutProps,
	DropdownMenuSubContentProps as SubContentProps,
	DropdownMenuSubTriggerProps as SubTriggerProps,
} from './types';

export { default as CheckboxItem } from './components/dropdown-menu-checkbox-item.svelte';
export { default as Content } from './components/dropdown-menu-content.svelte';
export { default as GroupHeading } from './components/dropdown-menu-group-heading.svelte';
export { default as Item } from './components/dropdown-menu-item.svelte';
export { default as Label } from './components/dropdown-menu-label.svelte';
export { default as RadioItem } from './components/dropdown-menu-radio-item.svelte';
export { default as Separator } from './components/dropdown-menu-separator.svelte';
export { default as Shortcut } from './components/dropdown-menu-shortcut.svelte';
export { default as SubContent } from './components/dropdown-menu-sub-content.svelte';
export { default as SubTrigger } from './components/dropdown-menu-sub-trigger.svelte';

export const Sub = DropdownMenuPrimitive.Sub;
export const Root = DropdownMenuPrimitive.Root;
export const Trigger = DropdownMenuPrimitive.Trigger;
export const Group = DropdownMenuPrimitive.Group;
export const RadioGroup = DropdownMenuPrimitive.RadioGroup;
export const Arrow = DropdownMenuPrimitive.Arrow;
