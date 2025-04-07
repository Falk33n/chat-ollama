<script
	lang="ts"
	module
>
	type TemporaryChatTriggerProps = { isPressed?: boolean };
</script>

<script lang="ts">
	import { Tooltip } from '$lib/components/global';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Dialog } from '$lib/components/ui/dialog';
	import { useSidebar } from '$lib/components/ui/sidebar';
	import { cn } from '$lib/utils';
	import { CheckIcon, MessageCircleDashedIcon } from 'lucide-svelte';

	let { isPressed = $bindable(false) }: TemporaryChatTriggerProps = $props();

	const sidebar = useSidebar();
</script>

<Tooltip content="Activate temporary chat mode">
	{#snippet trigger({ props: { onclick: _onclick, class: _class, ...restProps } })}
		<Dialog.Trigger
			class={cn(
				buttonVariants({
					variant: 'outline',
					size: sidebar.isMobile ? 'icon' : 'md',
				}),
			)}
			aria-label="Activate temporary chat mode"
			aria-pressed={isPressed}
			onclick={() => (isPressed = !isPressed)}
			{...restProps}
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
		</Dialog.Trigger>
	{/snippet}
</Tooltip>
