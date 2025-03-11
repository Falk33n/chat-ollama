<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { NewChatTrigger } from '$components/layout';
	import { Button } from '$components/ui/button';
	import { SidebarHeader, useSidebar } from '$components/ui/sidebar';
	import { PanelLeftCloseIcon, SearchIcon } from 'lucide-svelte';

	const sidebar = useSidebar();
</script>

<SidebarHeader class="mb-4 flex-row items-center justify-between gap-2">
	<AppTooltip content="Close Sidebar">
		{#snippet trigger({ props: { onclick: _onclick, ...props } })}
			<Button
				variant="outline"
				size="icon"
				aria-label="Close Sidebar"
				class="bg-sidebar hover:bg-background"
				data-sidebar="trigger"
				onclick={() => {
					sidebar.toggle();
				}}
				{...props}
			>
				<PanelLeftCloseIcon aria-hidden />
			</Button>
		{/snippet}
	</AppTooltip>

	<div class="flex items-center justify-center gap-2">
		<AppTooltip content="Search in chats">
			{#snippet trigger({ props: { onclick: _onclick, ...props } })}
				<Button
					variant="outline"
					size="icon"
					class="bg-sidebar hover:bg-background"
					aria-label="Search in chats"
					{...props}
				>
					<SearchIcon aria-hidden />
				</Button>
			{/snippet}
		</AppTooltip>

		<NewChatTrigger />
	</div>
</SidebarHeader>
