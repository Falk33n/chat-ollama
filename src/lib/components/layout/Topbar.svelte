<script lang="ts">
	import { ModeToggle, ProfileSettingsTrigger } from '$components/layout';
	import { AppSidebarActions } from '$components/layout/sidebar';
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
