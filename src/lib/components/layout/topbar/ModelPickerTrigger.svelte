<script
	lang="ts"
	module
>
	type ModelPickerTriggerProps = { isOpen?: boolean };
</script>

<script lang="ts">
	import { Tooltip } from '$lib/components/global';
	import { buttonVariants } from '$lib/components/ui/button';
	import { DropdownMenu } from '$lib/components/ui/dropdown-menu';
	import { cn } from '$lib/utils';
	import { ChevronDown } from 'lucide-svelte';

	let { isOpen = $bindable(false) }: ModelPickerTriggerProps = $props();
</script>

<DropdownMenu.Trigger aria-label="Open Model Picker">
	<Tooltip content="Open Model Picker">
		{#snippet trigger({
			// @ts-expect-error `implicity any`: props is just typed as a record.
			restProps,
		})}
			<span
				class={cn(buttonVariants({ variant: 'outline' }), 'gap-1 px-3')}
				{...restProps}
			>
				ChatOllama

				<ChevronDown
					class={cn('size-4 transition-transform duration-200', isOpen && '-rotate-180')}
					aria-hidden
				/>
			</span>
		{/snippet}
	</Tooltip>
</DropdownMenu.Trigger>
