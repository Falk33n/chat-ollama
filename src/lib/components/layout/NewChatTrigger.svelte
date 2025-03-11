<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { Button } from '$components/ui/button';
	import { SquarePenIcon } from 'lucide-svelte';
</script>

<AppTooltip content="New chat">
	{#snippet trigger({ props: { onclick: _onclick, ...props } })}
		<Button
			variant="outline"
			size="icon"
			class="bg-sidebar hover:bg-background"
			aria-label="New chat"
			{...props}
		>
			<SquarePenIcon aria-hidden />
		</Button>
	{/snippet}
</AppTooltip>
