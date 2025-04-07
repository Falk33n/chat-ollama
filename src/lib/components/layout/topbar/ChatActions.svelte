<script lang="ts">
	import { SidebarTrigger } from '$lib/components/layout/sidebar';
	import { ModelPicker, NewChatTrigger } from '$lib/components/layout/topbar';
	import { useSidebar } from '$lib/components/ui/sidebar';
	import { AlignLeftIcon, PanelRightCloseIcon } from 'lucide-svelte';

	const sidebar = useSidebar();
</script>

<div class="flex items-center gap-2">
	{#if !sidebar.open && !sidebar.isMobile}
		<SidebarTrigger>
			<PanelRightCloseIcon aria-hidden />
		</SidebarTrigger>

		{#if !sidebar.isMobile}
			<NewChatTrigger />
		{/if}
	{:else if sidebar.isMobile}
		<SidebarTrigger>
			<AlignLeftIcon aria-hidden />
		</SidebarTrigger>
	{/if}

	{#if !sidebar.isMobile}
		<ModelPicker />
	{/if}
</div>

{#if sidebar.isMobile}
	<ModelPicker />
{/if}
