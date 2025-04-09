import { getContext, hasContext, setContext } from 'svelte';
import type { SidebarChatHistoryItem } from './types';

const SIDEBAR_MENU_ITEM_CONTEXT_NAME = Symbol.for('sidebar-menu-item-context');

export type SidebarMenuItemContextProps = Omit<SidebarChatHistoryItem, 'updatedAt'> & {
	isOptionsVisible: { value: boolean };
};

type SidebarMenuItemContextInputProps = Omit<SidebarMenuItemContextProps, 'isOptionsVisible'>;

export function setSidebarMenuItemContext(props: SidebarMenuItemContextInputProps) {
	const isOptionsVisible = $state({ value: false });

	return setContext<SidebarMenuItemContextProps>(SIDEBAR_MENU_ITEM_CONTEXT_NAME, {
		isOptionsVisible,
		...props,
	});
}

export function getSidebarMenuItemContext() {
	if (!hasContext(SIDEBAR_MENU_ITEM_CONTEXT_NAME)) {
		throw new Error(
			'Context not found: This component is not an child of the SidebarMenuItem.',
		);
	}

	return getContext<SidebarMenuItemContextProps>(SIDEBAR_MENU_ITEM_CONTEXT_NAME);
}
