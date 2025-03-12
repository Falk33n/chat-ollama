<script lang="ts">
	import { Tooltip } from '$components/global';
	import { Button } from '$components/ui/button';
	import { MessageCircleDashedIcon } from 'lucide-svelte';
</script>

<Tooltip content="Activate temporary chat mode">
	{#snippet trigger({ props: { onclick: _onclick, ...props } })}
		<Button
			variant="outline"
			aria-label="Activate temporary chat mode"
			{...props}
		>
			<MessageCircleDashedIcon aria-hidden />

			Temporary
		</Button>
	{/snippet}
</Tooltip>
