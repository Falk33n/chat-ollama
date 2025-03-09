<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { Button } from '$components/ui/button';
	import { SidebarHeader } from '$components/ui/sidebar';
	import { SearchIcon, SquarePenIcon } from 'lucide-svelte';
</script>

<SidebarHeader class="mb-5 flex-row items-center justify-between gap-2">
	<AppTooltip content="New chat">
		{#snippet trigger({ props })}
			<Button
				variant="outline"
				size="icon"
				class="size-8"
				aria-label="New chat"
				{...props}
			>
				<SquarePenIcon aria-hidden />
			</Button>
		{/snippet}
	</AppTooltip>

	<AppTooltip content="Search in chats">
		{#snippet trigger({ props })}
			<Button
				variant="outline"
				size="icon"
				class="size-8"
				aria-label="Search in chats"
				{...props}
			>
				<SearchIcon aria-hidden />
			</Button>
		{/snippet}
	</AppTooltip>
</SidebarHeader>
