<script
	lang="ts"
	module
>
	import { ArchiveIcon, PenIcon, TrashIcon, type Icon } from 'lucide-svelte';

	export type ChatSettingsProps = {
		isOptionsMenuOpen?: boolean;
		isOptionsTooltipVisible?: boolean;
	};

	type ChatSetting = { icon: typeof Icon; content: string };

	const chatSettings: ChatSetting[] = [
		{
			icon: PenIcon,
			content: 'Rename',
		},
		{
			icon: ArchiveIcon,
			content: 'Archive',
		},
		{
			icon: TrashIcon,
			content: 'Delete',
		},
	];
</script>

<script lang="ts">
	import { ChatSettingsTrigger, getSidebarMenuItemContext } from '$lib/components/layout/sidebar';
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuArrow,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuGroupHeading,
		DropdownMenuItem,
	} from '$lib/components/ui/dropdown-menu';
	import { cn } from '$lib/utils';

	let {
		isOptionsMenuOpen = $bindable(false),
		isOptionsTooltipVisible = $bindable(false),
	}: ChatSettingsProps = $props();

	const context = getSidebarMenuItemContext();

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
	<ChatSettingsTrigger
		bind:isOptionsMenuOpen
		bind:isOptionsTooltipVisible
	/>

	<DropdownMenuContent
		sideOffset={-6}
		align="start"
	>
		<DropdownMenuArrow aria-hidden />

		<DropdownMenuGroup>
			<DropdownMenuGroupHeading class="sr-only">Chat Settings</DropdownMenuGroupHeading>

			{#each chatSettings as { icon: Icon, content } (content)}
				<DropdownMenuItem>
					{#snippet child({
						props: {
							// @ts-expect-error `implicity any`: props is just typed as a record.
							class: _class,
							...restProps
						},
					})}
						<Button
							variant="ghost"
							class={cn(
								'flex h-10 w-full justify-start',
								Icon === TrashIcon &&
									'text-destructive hover:text-destructive hover:bg-destructive/5',
							)}
							{...restProps}
						>
							<Icon
								aria-hidden
								class="size-4"
							/>

							{content}
						</Button>
					{/snippet}
				</DropdownMenuItem>
			{/each}
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
