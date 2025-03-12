<script lang="ts">
	import { SidebarTrigger } from '$components/layout/sidebar';
	import { ModelPicker, NewChatTrigger } from '$components/layout/topbar';
	import { useSidebar } from '$components/ui/sidebar';
	import { PanelRightCloseIcon } from 'lucide-svelte';

	const sidebar = useSidebar();
</script>

{#if !sidebar.openMobile}
	<div class="flex items-center gap-2">
		{#if !sidebar.open}
			<SidebarTrigger>
				<PanelRightCloseIcon aria-hidden />
			</SidebarTrigger>

			<NewChatTrigger />
		{/if}

		<ModelPicker />
	</div>
{/if}
