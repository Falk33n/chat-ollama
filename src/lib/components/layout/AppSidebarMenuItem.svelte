<script
	lang="ts"
	module
>
	import type { SidebarChatHistoryItem } from '$components/layout';

	type AppSidebarMenuItemProps = WithElementRef<
		Omit<SidebarChatHistoryItem, 'updatedAt'>,
		HTMLAnchorElement
	>;
</script>

<script lang="ts">
	import { SidebarMenuButton, SidebarMenuItem } from '$components/ui/sidebar';
	import type { WithElementRef } from 'bits-ui';
	import { EllipsisIcon } from 'lucide-svelte';

	let {
		ref = $bindable(null),
		title,
		chatId,
	}: AppSidebarMenuItemProps = $props();

	let isOptionsVisible = $state(false);

	function handlePointerLeave() {
		if (!ref?.matches(':focus-visible')) {
			isOptionsVisible = false;
		}
	}
</script>

<SidebarMenuItem>
	<SidebarMenuButton
		onpointerenter={() => (isOptionsVisible = true)}
		onpointerleave={handlePointerLeave}
		onfocus={() => (isOptionsVisible = true)}
		onblur={() => (isOptionsVisible = false)}
		class="relative justify-between hover:z-[6] focus-visible:z-[8] [&>span:first-child]:truncate"
	>
		{#snippet child({ props })}
			<a
				bind:this={ref}
				href={`/chat/${chatId}`}
				{...props}
			>
				<span>{title}</span>

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
