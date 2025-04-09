<script
	lang="ts"
	module
>
	import { ChevronLeftIcon, CpuIcon, Icon, MoonIcon, SunIcon } from 'lucide-svelte';

	type Mode = {
		icon: typeof Icon;
		mode: 'light' | 'dark' | 'system';
		content: string;
		ariaLabel: string;
	};

	const modes: Mode[] = [
		{
			icon: SunIcon,
			mode: 'light',
			content: 'Light Theme',
			ariaLabel: 'Change to light color theme',
		},
		{
			icon: MoonIcon,
			mode: 'dark',
			content: 'Dark Theme',
			ariaLabel: 'Change to dark color theme',
		},
		{
			icon: CpuIcon,
			mode: 'system',
			content: 'System Theme',
			ariaLabel: 'Reset to your system preferred color theme',
		},
	];
</script>

<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { DropdownMenu } from '$lib/components/ui/dropdown-menu';
	import { cn } from '$lib/utils';
	import { setMode } from 'mode-watcher';
</script>

<DropdownMenu.Sub>
	<DropdownMenu.SubTrigger
		class={cn(buttonVariants({ variant: 'ghost' }), 'w-full justify-start [&>svg]:hidden')}
		aria-label="Open color theme settings"
	>
		<span class="flex items-center gap-2">
			<ChevronLeftIcon
				class="size-4 transition-transform duration-200"
				aria-hidden
			/>

			Change color theme
		</span>
	</DropdownMenu.SubTrigger>

	<DropdownMenu.SubContent side="left">
		{#each modes as { icon: Icon, content, ariaLabel, mode } (content)}
			<DropdownMenu.Item onclick={() => setMode(mode)}>
				{#snippet child({ props: { class: _class, ...restProps } })}
					<Button
						variant="ghost"
						class="flex w-full justify-start"
						aria-label={ariaLabel}
						{...restProps}
					>
						<Icon
							class="size-4"
							aria-hidden
						/>

						{content}
					</Button>
				{/snippet}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.SubContent>
</DropdownMenu.Sub>
