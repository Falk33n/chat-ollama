<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { Button } from '$components/ui/button';
	import { SidebarHeader, useSidebar } from '$components/ui/sidebar';
	import { PanelLeftCloseIcon, SearchIcon, SquarePenIcon } from 'lucide-svelte';

	const sidebar = useSidebar();
</script>

<SidebarHeader class="mb-5 flex-row items-center justify-between gap-2">
	<AppTooltip content="Close Sidebar">
		{#snippet trigger({ props: { onclick, ...props } })}
			<Button
				variant="outline"
				size="icon"
				aria-label="Close Sidebar"
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
			{#snippet trigger({ props })}
				<Button
					variant="outline"
					size="icon"
					aria-label="Search in chats"
					{...props}
				>
					<SearchIcon aria-hidden />
				</Button>
			{/snippet}
		</AppTooltip>

		<AppTooltip content="New chat">
			{#snippet trigger({ props })}
				<Button
					variant="outline"
					size="icon"
					aria-label="New chat"
					{...props}
				>
					<SquarePenIcon aria-hidden />
				</Button>
			{/snippet}
		</AppTooltip>
	</div>
</SidebarHeader>
