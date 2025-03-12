<script
	lang="ts"
	module
>
	import {
		ChatSettings,
		type SidebarChatHistoryItem,
	} from '$components/layout/sidebar';
	import type { WithElementRef } from 'bits-ui';
	import { getContext, hasContext, setContext } from 'svelte';

	type SidebarMenuItemContextProps = Omit<
		SidebarChatHistoryItem,
		'updatedAt'
	> & {
		isOptionsVisible: { value: boolean };
	};

	type SidebarMenuItemProps = WithElementRef<
		Omit<SidebarMenuItemContextProps, 'isOptionsVisible'>,
		HTMLAnchorElement
	>;

	const SIDEBAR_MENU_ITEM_CONTEXT_NAME = 'sidebar-menu-item-context';

	function setSidebarMenuItemContext(props: SidebarMenuItemContextProps) {
		setContext<SidebarMenuItemContextProps>(
			SIDEBAR_MENU_ITEM_CONTEXT_NAME,
			props,
		);
	}

	export function getSidebarMenuItemContext() {
		if (!hasContext(SIDEBAR_MENU_ITEM_CONTEXT_NAME)) return;
		return getContext<SidebarMenuItemContextProps>(
			SIDEBAR_MENU_ITEM_CONTEXT_NAME,
		);
	}
</script>

<script lang="ts">
	import {
		SidebarMenuButton as SidebarPrimitiveMenuButton,
		SidebarMenuItem as SidebarPrimitiveMenuItem,
	} from '$components/ui/sidebar';
	import { cn } from '$utils';

	let { ref = $bindable(null), title, chatId }: SidebarMenuItemProps = $props();

	let isOptionsVisible = $state({ value: false });
	let isOptionsMenuOpen = $state(false);
	let isOptionsTooltipVisible = $state(false);

	setSidebarMenuItemContext({
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

<SidebarPrimitiveMenuItem>
	<SidebarPrimitiveMenuButton
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
	</SidebarPrimitiveMenuButton>
</SidebarPrimitiveMenuItem>
