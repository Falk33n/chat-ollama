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
	import { ModelPickerTrigger } from '$lib/components/layout/topbar';
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuArrow,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuGroupHeading,
		DropdownMenuItem,
		DropdownMenuSeparator,
	} from '$lib/components/ui/dropdown-menu';

	let isOpen = $state(false);
</script>

<DropdownMenu bind:open={isOpen}>
	<ModelPickerTrigger bind:isOpen />

	<DropdownMenuContent>
		<DropdownMenuArrow aria-hidden />

		<DropdownMenuGroup>
			<DropdownMenuGroupHeading>Choose Model</DropdownMenuGroupHeading>

			<DropdownMenuSeparator />

			{#each models as { name } (name)}
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
							class="flex w-full justify-start"
							{...restProps}
						>
							{name}
						</Button>
					{/snippet}
				</DropdownMenuItem>
			{/each}
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
