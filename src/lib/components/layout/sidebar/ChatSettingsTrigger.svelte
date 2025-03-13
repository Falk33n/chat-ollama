<script lang="ts">
	import { Tooltip } from '$components/global';
	import {
		getSidebarMenuItemContext,
		type ChatSettingsProps,
	} from '$components/layout/sidebar';
	import { buttonVariants } from '$components/ui/button';
	import { DropdownMenuTrigger } from '$components/ui/dropdown-menu';
	import { useSidebar } from '$components/ui/sidebar';
	import { cn } from '$utils';
	import { EllipsisIcon } from 'lucide-svelte';

	let {
		isOptionsMenuOpen = $bindable(false),
		isOptionsTooltipVisible = $bindable(false),
	}: ChatSettingsProps = $props();

	const context = getSidebarMenuItemContext();
	const sidebar = useSidebar();
</script>

<DropdownMenuTrigger
	aria-label="Open chat settings"
	disabled={!isOptionsMenuOpen && !context?.isOptionsVisible.value}
>
	<Tooltip
		bind:open={isOptionsTooltipVisible}
		content="Open chat settings"
		contentProps={{ sideOffset: -6 }}
	>
		{#snippet trigger({ props: { onclick: _onclick, ...props } })}
			<span
				class={cn(
					buttonVariants({ variant: 'ghost', size: 'icon' }),
					'text-sidebar-accent-foreground/70 hover:text-sidebar-accent-foreground focus-visible:text-sidebar-accent-foreground -mr-0.5 size-6 cursor-pointer rounded-full bg-[unset] shadow-[unset] hover:bg-[unset] focus-visible:bg-[unset]',
					(isOptionsMenuOpen || isOptionsTooltipVisible) &&
						'text-sidebar-accent-foreground',
				)}
				{...props}
			>
				{#if sidebar.isMobile || context?.isOptionsVisible.value || isOptionsMenuOpen || isOptionsTooltipVisible}
					<EllipsisIcon
						class="size-4"
						aria-hidden
					/>
				{/if}
			</span>
		{/snippet}
	</Tooltip>
</DropdownMenuTrigger>
