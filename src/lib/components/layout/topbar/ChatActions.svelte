<script lang="ts">
	import { SidebarTrigger } from '$components/layout/sidebar';
	import { ModelPicker, NewChatTrigger } from '$components/layout/topbar';
	import { useSidebar } from '$components/ui/sidebar';
	import { AlignLeftIcon, PanelRightCloseIcon } from 'lucide-svelte';

	const sidebar = useSidebar();
</script>

{#if !sidebar.openMobile}
	<div class="flex items-center gap-2">
		{#if !sidebar.open}
			<SidebarTrigger>
				{#if !sidebar.isMobile}
					<PanelRightCloseIcon aria-hidden />
				{:else}
					<AlignLeftIcon aria-hidden />
				{/if}
			</SidebarTrigger>

			{#if !sidebar.isMobile}
				<NewChatTrigger />
			{/if}
		{/if}

		{#if !sidebar.isMobile}
			<ModelPicker />
		{/if}
	</div>

	{#if sidebar.isMobile}
		<ModelPicker />
	{/if}
{/if}
