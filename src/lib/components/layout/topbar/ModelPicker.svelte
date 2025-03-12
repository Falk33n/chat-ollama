<script
	lang="ts"
	module
>
	type Model = { name: string };

	const models: Model[] = [
		{
			name: 'Qwen-2.5',
		},
		{
			name: 'Llama-3.5',
		},
		{
			name: 'ChatGPT-4.0',
		},
	];
</script>

<script>
	import { ModelPickerTrigger } from '$components/layout/topbar';
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
	import { useSidebar } from '$components/ui/sidebar';

	let isOpen = $state(false);

	const sidebar = useSidebar();
</script>

{#if !sidebar.openMobile}
	<DropdownMenu bind:open={isOpen}>
		<ModelPickerTrigger bind:isOpen />

		<DropdownMenuContent class="w-24">
			<DropdownMenuArrow />

			<DropdownMenuGroup>
				<DropdownMenuGroupHeading>Choose Model</DropdownMenuGroupHeading>

				<DropdownMenuSeparator />

				{#each models as { name } (name)}
					<DropdownMenuItem>
						{#snippet child({ props: { class: _class, ...props } })}
							<Button
								variant="ghost"
								class="w-full justify-start"
								{...props}
							>
								{name}
							</Button>
						{/snippet}
					</DropdownMenuItem>
				{/each}
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
{/if}
