<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { SidebarTrigger, useSidebar } from '$components/ui/sidebar';

	const sidebar = useSidebar();
</script>

{#if !sidebar.open}
	<div class="fixed top-2 left-2">
		<AppTooltip content="Open Sidebar">
			{#snippet trigger({ props: { onclick: _onclick, ...props } })}
				<SidebarTrigger
					aria-label="Open Sidebar"
					{...props}
				/>
			{/snippet}
		</AppTooltip>
	</div>
{/if}
