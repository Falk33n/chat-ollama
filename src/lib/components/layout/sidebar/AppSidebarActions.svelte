<script lang="ts">
	import { ModelPicker, NewChatTrigger } from '$components/layout';
	import { AppSidebarTrigger } from '$components/layout/sidebar';
	import { useSidebar } from '$components/ui/sidebar';
	import { PanelRightCloseIcon } from 'lucide-svelte';

	const sidebar = useSidebar();
</script>

{#if !sidebar.openMobile}
	<div class="flex items-center gap-2">
		{#if !sidebar.open}
			<AppSidebarTrigger>
				<PanelRightCloseIcon aria-hidden />
			</AppSidebarTrigger>

			<NewChatTrigger />
		{/if}

		<ModelPicker />
	</div>
{/if}
