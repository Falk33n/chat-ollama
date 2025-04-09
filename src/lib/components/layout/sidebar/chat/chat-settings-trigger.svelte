<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { DropdownMenu } from '$lib/components/ui/dropdown-menu';
	import { useSidebar } from '$lib/components/ui/sidebar';
	import { Tooltip } from '$lib/components/ui/tooltip';
	import { cn } from '$lib/utils';
	import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
	import { getSidebarMenuItemContext } from '../context.svelte';
	import type { ChatSettingsProps } from './types';

	const { isOptionsVisible } = getSidebarMenuItemContext();

	let { isMenuOpen = $bindable(false), isTooltipVisible = $bindable(false) }: ChatSettingsProps =
		$props();

	const sidebar = useSidebar();

	const showIcon = $derived(
		sidebar.isMobile || isOptionsVisible.value || isMenuOpen || isTooltipVisible,
	);
</script>

<DropdownMenu.Trigger
	aria-label="Open chat settings"
	disabled={!isMenuOpen && !isOptionsVisible.value}
>
	<Tooltip
		bind:open={isTooltipVisible}
		content="Open chat settings"
		contentProps={{ sideOffset: -6 }}
	>
		{#snippet trigger({ props: { onclick: _onclick, ...restProps } })}
			<span
				class={cn(
					buttonVariants({ variant: 'ghost', size: 'icon' }),
					'bg-[unset] shadow-[unset] hover:bg-[unset] focus-visible:bg-[unset]',
					'text-sidebar-accent-foreground/70 -mr-0.5 size-6 cursor-pointer rounded-full',
					'hover:text-sidebar-accent-foreground focus-visible:text-sidebar-accent-foreground',
					(isMenuOpen || isTooltipVisible) && 'text-sidebar-accent-foreground',
				)}
				{...restProps}
			>
				{#if showIcon}
					<EllipsisIcon
						class="size-4"
						aria-hidden
					/>
				{/if}
			</span>
		{/snippet}
	</Tooltip>
</DropdownMenu.Trigger>
