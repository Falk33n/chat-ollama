import type { WithChildren, WithElementRef } from 'bits-ui';
import type { SidebarMenuItemContextProps } from './context.svelte';

//
// SHARED
//

export type SidebarChatHistoryItem = {
	title: string;
	chatId: string;
	updatedAt: string;
};

//
// TRIGGER
//

export type SidebarTriggerProps = WithChildren<{ class?: string }>;

//
// MENU ITEM
//

export type SidebarMenuItemProps = WithElementRef<
	Omit<SidebarMenuItemContextProps, 'isOptionsVisible'>,
	HTMLAnchorElement
>;
