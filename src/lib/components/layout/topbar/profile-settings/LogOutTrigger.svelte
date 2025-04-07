<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { DropdownMenuItem } from '$lib/components/ui/dropdown-menu';
	import { LogOutIcon } from 'lucide-svelte';
</script>

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
			class="w-full justify-start"
			{...restProps}
		>
			<LogOutIcon
				class="size-4"
				aria-hidden
			/>

			Log out
		</Button>
	{/snippet}
</DropdownMenuItem>
