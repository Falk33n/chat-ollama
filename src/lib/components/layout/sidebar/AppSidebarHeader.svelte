<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { NewChatTrigger } from '$components/layout';
	import { AppSidebarTrigger } from '$components/layout/sidebar';
	import { Button } from '$components/ui/button';
	import { SidebarHeader } from '$components/ui/sidebar';
	import { PanelLeftCloseIcon, SearchIcon } from 'lucide-svelte';
</script>

<SidebarHeader class="mb-4 flex-row items-center justify-between gap-2">
	<AppSidebarTrigger class="bg-sidebar hover:bg-background">
		<PanelLeftCloseIcon aria-hidden />
	</AppSidebarTrigger>

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

		<NewChatTrigger class="bg-sidebar hover:bg-background" />
	</div>
</SidebarHeader>
