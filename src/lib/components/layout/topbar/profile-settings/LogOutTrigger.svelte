<script lang="ts">
	import { Button } from '$components/ui/button';
	import { DropdownMenuItem } from '$components/ui/dropdown-menu';
	import { LogOutIcon } from 'lucide-svelte';
</script>

<DropdownMenuItem>
	{#snippet child({ props: { class: _class, ...props } })}
		<Button
			variant="ghost"
			class="w-full justify-start"
			{...props}
		>
			<LogOutIcon
				class="size-4"
				aria-hidden
			/>

			Log out
		</Button>
	{/snippet}
</DropdownMenuItem>
