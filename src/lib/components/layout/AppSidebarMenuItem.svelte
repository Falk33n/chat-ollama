<script
	lang="ts"
	module
>
	import type { SidebarChatHistoryItem } from '$components/layout';

	type AppSidebarMenuItemProps = Omit<SidebarChatHistoryItem, 'updatedAt'>;
</script>

<script lang="ts">
	import { SidebarMenuButton, SidebarMenuItem } from '$components/ui/sidebar';
	import { EllipsisIcon } from 'lucide-svelte';

	let { title, chatId }: AppSidebarMenuItemProps = $props();

	let isOptionsVisible = $state(false);
</script>

<SidebarMenuItem>
	<SidebarMenuButton
		onpointerenter={() => (isOptionsVisible = true)}
		onpointerleave={() => (isOptionsVisible = false)}
		onfocus={() => (isOptionsVisible = true)}
		onblur={() => (isOptionsVisible = false)}
		class="[&>span:first-child]:truncate"
	>
		{#snippet child({ props })}
			<a
				href={`/chat/${chatId}`}
				{...props}
			>
				<span>
					{`${title}fdasssssssssssssssssssssssssssss`}
				</span>

				{#if isOptionsVisible}
					<EllipsisIcon
						class="text-sidebar-accent-foreground/80 hover:text-sidebar-accent-foreground focus-visible:text-sidebar-accent-foreground size-4"
						aria-hidden
					/>
				{/if}
			</a>
		{/snippet}
	</SidebarMenuButton>
</SidebarMenuItem>
