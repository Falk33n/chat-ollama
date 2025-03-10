<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { SidebarTrigger, useSidebar } from '$components/ui/sidebar';

	const sidebar = useSidebar();
</script>

<div class="fixed top-2 left-2">
	<AppTooltip content={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}>
		{#snippet trigger({ props })}
			<SidebarTrigger
				aria-label={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}
				{...props}
			/>
		{/snippet}
	</AppTooltip>
</div>
