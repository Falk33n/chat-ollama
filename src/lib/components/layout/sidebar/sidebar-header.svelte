<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Sidebar as SidebarPrimitive, useSidebar } from '$lib/components/ui/sidebar';
	import { Tooltip } from '$lib/components/ui/tooltip';
	import AlignLeftIcon from '@lucide/svelte/icons/align-left';
	import PanelLeftCloseIcon from '@lucide/svelte/icons/panel-left-close';
	import SearchIcon from '@lucide/svelte/icons/search';
	import { NewChatTrigger } from '../topbar';
	import SidebarTrigger from './sidebar-trigger.svelte';

	const sidebar = useSidebar();

	const Icon = $derived(!sidebar.isMobile ? PanelLeftCloseIcon : AlignLeftIcon);
</script>

<SidebarPrimitive.Header class="mb-4 flex-row items-center justify-between gap-2">
	<SidebarTrigger class="bg-sidebar hover:bg-background">
		<Icon aria-hidden />
	</SidebarTrigger>

	<div class="flex items-center justify-center gap-2">
		<Tooltip content="Search in chats">
			{#snippet trigger({ props: { onclick: _onclick, ...restProps } })}
				<Button
					variant="outline"
					size="icon"
					class="bg-sidebar hover:bg-background"
					aria-label="Search in chats"
					{...restProps}
				>
					<SearchIcon aria-hidden />
				</Button>
			{/snippet}
		</Tooltip>

		<NewChatTrigger class="bg-sidebar hover:bg-background" />
	</div>
</SidebarPrimitive.Header>
