<script lang="ts">
	import { Tooltip } from '$lib/components/global';
	import { SidebarTrigger } from '$lib/components/layout/sidebar';
	import { NewChatTrigger } from '$lib/components/layout/topbar';
	import { Button } from '$lib/components/ui/button';
	import {
		SidebarHeader as SidebarPrimitiveHeader,
		useSidebar,
	} from '$lib/components/ui/sidebar';
	import { AlignLeftIcon, PanelLeftCloseIcon, SearchIcon } from 'lucide-svelte';

	const sidebar = useSidebar();
</script>

<SidebarPrimitiveHeader class="mb-4 flex-row items-center justify-between gap-2">
	<SidebarTrigger class="bg-sidebar hover:bg-background">
		{#if !sidebar.isMobile}
			<PanelLeftCloseIcon aria-hidden />
		{:else}
			<AlignLeftIcon aria-hidden />
		{/if}
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
</SidebarPrimitiveHeader>
