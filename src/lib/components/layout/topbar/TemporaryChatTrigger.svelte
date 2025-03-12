<script lang="ts">
	import { Tooltip } from '$components/global';
	import { Button } from '$components/ui/button';
	import { useSidebar } from '$components/ui/sidebar';
	import { CheckIcon, MessageCircleDashedIcon } from 'lucide-svelte';

	let isPressed = $state(false);

	const sidebar = useSidebar();
</script>

<Tooltip content="Activate temporary chat mode">
	{#snippet trigger({ props: { onclick: _onclick, ...props } })}
		<Button
			variant="outline"
			size={sidebar.isMobile ? 'icon' : 'default'}
			aria-pressed={isPressed}
			aria-label="Activate temporary chat mode"
			onclick={() => (isPressed = !isPressed)}
			{...props}
		>
			<span
				class="relative"
				aria-hidden={true}
			>
				{#if isPressed}
					<CheckIcon
						class="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 scale-50"
						aria-hidden
					/>
				{/if}

				<MessageCircleDashedIcon aria-hidden />
			</span>

			{#if !sidebar.isMobile}
				Temporary
			{/if}
		</Button>
	{/snippet}
</Tooltip>
