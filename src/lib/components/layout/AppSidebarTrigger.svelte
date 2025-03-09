<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { SidebarTrigger, useSidebar } from '$components/ui/sidebar';

	const sidebar = useSidebar();
</script>

<AppTooltip content={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}>
	{#snippet trigger({ props: { 'aria-label': _ariaLabel, ...props } })}
		<SidebarTrigger
			aria-label={sidebar.open ? 'Close Sidebar' : 'Open Sidebar'}
			{...props}
		/>
	{/snippet}
</AppTooltip>
