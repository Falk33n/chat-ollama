<script
	lang="ts"
	module
>
	import type { Icon } from '@lucide/svelte/icons';
	import ArchiveIcon from '@lucide/svelte/icons/archive';
	import PenIcon from '@lucide/svelte/icons/pen';
	import TrashIcon from '@lucide/svelte/icons/trash';

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
	import { Button } from '$lib/components/ui/button';
	import { DropdownMenu } from '$lib/components/ui/dropdown-menu';
	import { cn } from '$lib/utils';
	import { getSidebarMenuItemContext } from '../context.svelte';
	import ChatSettingsTrigger from './chat-settings-trigger.svelte';
	import type { ChatSettingsProps } from './types';

	const { isOptionsVisible } = getSidebarMenuItemContext();

	let { isMenuOpen = $bindable(false), isTooltipVisible = $bindable(false) }: ChatSettingsProps =
		$props();
</script>

<DropdownMenu.Root
	bind:open={isMenuOpen}
	onOpenChange={() => (isOptionsVisible.value = isMenuOpen)}
>
	<ChatSettingsTrigger
		bind:isMenuOpen
		bind:isTooltipVisible
	/>

	<DropdownMenu.Content
		sideOffset={-6}
		align="start"
	>
		<DropdownMenu.Arrow aria-hidden />

		<DropdownMenu.Group>
			<DropdownMenu.GroupHeading class="sr-only">Chat Settings</DropdownMenu.GroupHeading>

			{#each chatSettings as { icon: Icon, content } (Icon)}
				<DropdownMenu.Item>
					{#snippet child({ props: { class: _class, ...restProps } })}
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
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
