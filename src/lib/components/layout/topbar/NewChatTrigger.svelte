<script
	lang="ts"
	module
>
	type NewChatTriggerProps = { class?: string };
</script>

<script lang="ts">
	import { Tooltip } from '$lib/components/global';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { SquarePenIcon } from 'lucide-svelte';

	let { class: className }: NewChatTriggerProps = $props();
</script>

<Tooltip content="New chat">
	{#snippet trigger({ props: { onclick: _onclick, ...restProps } })}
		<Button
			variant="outline"
			size="icon"
			class={className ? cn(className) : undefined}
			aria-label="New chat"
			{...restProps}
		>
			<SquarePenIcon aria-hidden />
		</Button>
	{/snippet}
</Tooltip>
