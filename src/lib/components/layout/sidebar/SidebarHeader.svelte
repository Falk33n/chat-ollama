<script lang="ts">
	import { Tooltip } from '$components/global';
	import { SidebarTrigger } from '$components/layout/sidebar';
	import { NewChatTrigger } from '$components/layout/topbar';
	import { Button } from '$components/ui/button';
	import { SidebarHeader as SidebarPrimitiveHeader } from '$components/ui/sidebar';
	import { PanelLeftCloseIcon, SearchIcon } from 'lucide-svelte';
</script>

<SidebarPrimitiveHeader
	class="mb-4 flex-row items-center justify-between gap-2"
>
	<SidebarTrigger class="bg-sidebar hover:bg-background">
		<PanelLeftCloseIcon aria-hidden />
	</SidebarTrigger>

	<div class="flex items-center justify-center gap-2">
		<Tooltip content="Search in chats">
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
		</Tooltip>

		<NewChatTrigger class="bg-sidebar hover:bg-background" />
	</div>
</SidebarPrimitiveHeader>
