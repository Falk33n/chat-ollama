<script lang="ts">
	import { ChatActions } from '$components/layout/topbar';
	import { ProfileSettings } from '$components/layout/topbar/profile-settings';
</script>

<div
	class="bg-background sticky top-0 flex items-center justify-between gap-2 border-b p-2 shadow-xs"
>
	<ChatActions />

	<div class="flex items-center gap-2">
		<ProfileSettings />
	</div>
</div>
