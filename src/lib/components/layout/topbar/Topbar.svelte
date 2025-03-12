<script lang="ts">
	import { ChatActions, TemporaryChatTrigger } from '$components/layout/topbar';
	import { ProfileSettings } from '$components/layout/topbar/profile-settings';
	import { useSidebar } from '$components/ui/sidebar';

	const sidebar = useSidebar();
</script>

<div
	class="bg-background sticky top-0 flex items-center justify-between gap-2 border-b p-2 shadow-xs"
>
	<ChatActions />

	<div class="flex items-center gap-2">
		<TemporaryChatTrigger />

		{#if !sidebar.isMobile}
			<ProfileSettings />
		{/if}
	</div>
</div>
