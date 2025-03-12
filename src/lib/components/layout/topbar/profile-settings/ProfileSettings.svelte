<script
	lang="ts"
	module
>
	import {
		Settings2Icon,
		SettingsIcon,
		UserRoundCogIcon,
		type Icon,
	} from 'lucide-svelte';

	type Setting = { icon: typeof Icon; content: string; ariaLabel: string };

	const settings: Setting[] = [
		{
			icon: UserRoundCogIcon,
			content: 'Manage Models',
			ariaLabel: 'Open model manager',
		},
		{
			icon: Settings2Icon,
			content: 'Customize ChatOllama',
			ariaLabel: 'Open ChatOllama customization',
		},
		{
			icon: SettingsIcon,
			content: 'Profile Settings',
			ariaLabel: 'Open profile settings',
		},
	];
</script>

<script lang="ts">
	import {
		LogOutTrigger,
		ModeToggleDropdown,
		ProfileSettingsTrigger,
	} from '$components/layout/topbar/profile-settings';
	import { Button } from '$components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuArrow,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuGroupHeading,
		DropdownMenuItem,
		DropdownMenuSeparator,
	} from '$components/ui/dropdown-menu';
</script>

<DropdownMenu>
	<ProfileSettingsTrigger />

	<DropdownMenuContent>
		<DropdownMenuArrow />

		<DropdownMenuGroup>
			<DropdownMenuGroupHeading class="sr-only">
				Profile Settings
			</DropdownMenuGroupHeading>

			{#each settings as { icon: Icon, content, ariaLabel } (content)}
				<DropdownMenuItem>
					{#snippet child({ props: { class: _class, ...props } })}
						<Button
							variant="ghost"
							class="flex w-full justify-start"
							aria-label={ariaLabel}
							{...props}
						>
							<Icon
								class="size-4"
								aria-hidden
							/>

							{content}
						</Button>
					{/snippet}
				</DropdownMenuItem>
			{/each}

			<DropdownMenuSeparator />

			<ModeToggleDropdown />

			<DropdownMenuSeparator />

			<LogOutTrigger />
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
