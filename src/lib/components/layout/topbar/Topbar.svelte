<script lang="ts">
	import {
		ChatActions,
		ModeToggle,
		ProfileSettingsTrigger,
	} from '$components/layout/topbar';
</script>

<div
	class="bg-background sticky top-0 flex items-center justify-between gap-2 p-2"
>
	<ChatActions />

	<div class="flex items-center gap-2">
		<ModeToggle />

		<ProfileSettingsTrigger />
	</div>
</div>
