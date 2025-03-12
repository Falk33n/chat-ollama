<script
	lang="ts"
	module
>
	type NewChatTriggerProps = { class?: string };
</script>

<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { Button } from '$components/ui/button';
	import { cn } from '$utils';
	import { SquarePenIcon } from 'lucide-svelte';

	let { class: className }: NewChatTriggerProps = $props();
</script>

<AppTooltip content="New chat">
	{#snippet trigger({ props: { onclick: _onclick, ...props } })}
		<Button
			variant="outline"
			size="icon"
			class={className ? cn(className) : undefined}
			aria-label="New chat"
			{...props}
		>
			<SquarePenIcon aria-hidden />
		</Button>
	{/snippet}
</AppTooltip>
