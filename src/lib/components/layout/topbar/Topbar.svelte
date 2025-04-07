<script lang="ts">
	import { ChatActions, TemporaryChatDialog } from '$lib/components/layout/topbar';
	import { ProfileSettings } from '$lib/components/layout/topbar/profile-settings';
	import { useSidebar } from '$lib/components/ui/sidebar';

	const sidebar = useSidebar();
</script>

<div
	class="bg-background sticky top-0 flex items-center justify-between gap-2 border-b p-2 shadow-xs"
>
	<ChatActions />

	<div class="flex items-center gap-2">
		<TemporaryChatDialog />

		{#if !sidebar.isMobile}
			<ProfileSettings />
		{/if}
	</div>
</div>
