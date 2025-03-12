<script lang="ts">
	import {
		AppSidebarActions,
		ModeToggle,
		ProfileSettingsTrigger,
	} from '$components/layout';
</script>

<div
	class="bg-background sticky top-0 flex items-center justify-between gap-2 p-2"
>
	<AppSidebarActions />

	<div class="flex items-center gap-2">
		<ModeToggle />

		<ProfileSettingsTrigger />
	</div>
</div>
