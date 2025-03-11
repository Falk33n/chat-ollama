<script
	lang="ts"
	module
>
	type ChatSettingsTriggerProps = {
		isOptionsMenuOpen?: boolean;
		isOptionsTooltipVisible?: boolean;
	};
</script>

<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { getAppSidebarMenuItemContext } from '$components/layout';
	import { buttonVariants } from '$components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuArrow,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuGroupHeading,
		DropdownMenuItem,
		DropdownMenuSeparator,
		DropdownMenuTrigger,
	} from '$components/ui/dropdown-menu';
	import { cn } from '$utils';
	import { EllipsisIcon } from 'lucide-svelte';

	let {
		isOptionsMenuOpen = $bindable(false),
		isOptionsTooltipVisible = $bindable(false),
	}: ChatSettingsTriggerProps = $props();

	const context = getAppSidebarMenuItemContext();

	function onDropdownMenuOpenChange() {
		if (context) {
			context.isOptionsVisible.value = isOptionsMenuOpen;
		}
	}
</script>

<DropdownMenu
	bind:open={isOptionsMenuOpen}
	onOpenChange={onDropdownMenuOpenChange}
>
	<DropdownMenuTrigger
		aria-label="Open chat settings"
		disabled={!isOptionsMenuOpen && !context?.isOptionsVisible.value}
	>
		<AppTooltip
			bind:open={isOptionsTooltipVisible}
			content="Open chat settings"
			contentProps={{ sideOffset: -6 }}
		>
			{#snippet trigger({ props: { onclick: _onclick, ...props } })}
				<span
					class={cn(
						buttonVariants({ variant: 'ghost', size: 'icon' }),
						'text-sidebar-accent-foreground/70 hover:text-sidebar-accent-foreground focus-visible:text-sidebar-accent-foreground -mr-2 cursor-pointer rounded-full bg-[unset] shadow-[unset] hover:bg-[unset] focus-visible:bg-[unset]',
						(isOptionsMenuOpen || isOptionsTooltipVisible) &&
							'text-sidebar-accent-foreground',
					)}
					aria-hidden={true}
					{...props}
				>
					{#if context?.isOptionsVisible.value || isOptionsMenuOpen || isOptionsTooltipVisible}
						<EllipsisIcon
							class="size-4"
							aria-hidden
						/>
					{/if}
				</span>
			{/snippet}
		</AppTooltip>
	</DropdownMenuTrigger>

	<DropdownMenuContent sideOffset={-6}>
		<DropdownMenuGroup>
			<DropdownMenuGroupHeading>GroupHeading</DropdownMenuGroupHeading>

			<DropdownMenuSeparator />

			<DropdownMenuItem>Item</DropdownMenuItem>

			<DropdownMenuItem>Item</DropdownMenuItem>

			<DropdownMenuItem>Item</DropdownMenuItem>

			<DropdownMenuItem>Item</DropdownMenuItem>
		</DropdownMenuGroup>

		<DropdownMenuArrow />
	</DropdownMenuContent>
</DropdownMenu>
