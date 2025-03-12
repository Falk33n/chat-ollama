<script
	lang="ts"
	module
>
	type ModelPickerTriggerProps = { isOpen?: boolean };
</script>

<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { buttonVariants } from '$components/ui/button';
	import { DropdownMenuTrigger } from '$components/ui/dropdown-menu';
	import { cn } from '$utils';
	import { ChevronDown } from 'lucide-svelte';

	let { isOpen = $bindable(false) }: ModelPickerTriggerProps = $props();
</script>

<DropdownMenuTrigger aria-label="Open Model Picker">
	<AppTooltip content="Open Model Picker">
		{#snippet trigger({ props })}
			<span
				class={cn(buttonVariants({ variant: 'outline' }), 'gap-1 px-3')}
				{...props}
			>
				ChatOllama

				<ChevronDown
					class={cn(
						'size-4 transition-transform duration-200',
						isOpen ? '-rotate-180' : '',
					)}
					aria-hidden
				/>
			</span>
		{/snippet}
	</AppTooltip>
</DropdownMenuTrigger>
