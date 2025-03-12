<script
	lang="ts"
	module
>
	import {
		ChatSettings,
		type SidebarChatHistoryItem,
	} from '$components/layout';
	import type { WithElementRef } from 'bits-ui';
	import { getContext, hasContext, setContext } from 'svelte';

	type AppSidebarMenuItemContextProps = Omit<
		SidebarChatHistoryItem,
		'updatedAt'
	> & {
		isOptionsVisible: { value: boolean };
	};

	type AppSidebarMenuItemProps = WithElementRef<
		Omit<AppSidebarMenuItemContextProps, 'isOptionsVisible'>,
		HTMLAnchorElement
	>;

	const APP_SIDEBAR_MENU_ITEM_CONTEXT_NAME = 'app-sidebar-menu-item-context';

	function setAppSidebarMenuItemContext(props: AppSidebarMenuItemContextProps) {
		setContext<AppSidebarMenuItemContextProps>(
			APP_SIDEBAR_MENU_ITEM_CONTEXT_NAME,
			props,
		);
	}

	export function getAppSidebarMenuItemContext() {
		if (!hasContext(APP_SIDEBAR_MENU_ITEM_CONTEXT_NAME)) return;
		return getContext<AppSidebarMenuItemContextProps>(
			APP_SIDEBAR_MENU_ITEM_CONTEXT_NAME,
		);
	}
</script>

<script lang="ts">
	import { SidebarMenuButton, SidebarMenuItem } from '$components/ui/sidebar';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		title,
		chatId,
	}: AppSidebarMenuItemProps = $props();

	let isOptionsVisible = $state({ value: false });
	let isOptionsMenuOpen = $state(false);
	let isOptionsTooltipVisible = $state(false);

	setAppSidebarMenuItemContext({
		title,
		chatId,
		isOptionsVisible,
	});

	function handlePointerLeave() {
		if (!ref?.matches(':focus-visible') && !ref?.matches(':focus-within')) {
			isOptionsVisible.value = false;
		}
	}
</script>

<SidebarMenuItem>
	<SidebarMenuButton
		onpointerenter={() => (isOptionsVisible.value = true)}
		onpointerleave={handlePointerLeave}
		onfocus={() => (isOptionsVisible.value = true)}
		onblur={() => (isOptionsVisible.value = false)}
		class={cn(
			'relative justify-between hover:z-[6] focus-visible:z-[8] [&>span:first-child]:truncate',
			(isOptionsMenuOpen || isOptionsTooltipVisible) && 'bg-sidebar-accent',
		)}
	>
		{#snippet child({ props })}
			<a
				bind:this={ref}
				href={`/chat/${chatId}`}
				{...props}
			>
				<span>{title}</span>

				<ChatSettings
					bind:isOptionsMenuOpen
					bind:isOptionsTooltipVisible
				/>
			</a>
		{/snippet}
	</SidebarMenuButton>
</SidebarMenuItem>
