<script
	lang="ts"
	module
>
	type TemporaryChatTriggerProps = { isPressed?: boolean };
</script>

<script lang="ts">
	import { Tooltip } from '$components/global';
	import { buttonVariants } from '$components/ui/button';
	import { DialogTrigger } from '$components/ui/dialog';
	import { useSidebar } from '$components/ui/sidebar';
	import { cn } from '$utils';
	import { CheckIcon, MessageCircleDashedIcon } from 'lucide-svelte';

	let { isPressed = $bindable(false) }: TemporaryChatTriggerProps = $props();

	const sidebar = useSidebar();
</script>

<Tooltip content="Activate temporary chat mode">
	{#snippet trigger({ props: { onclick: _onclick, class: _class, ...props } })}
		<DialogTrigger
			class={cn(
				buttonVariants({
					variant: 'outline',
					size: sidebar.isMobile ? 'icon' : 'default',
				}),
			)}
			aria-label="Activate temporary chat mode"
			aria-pressed={isPressed}
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
		</DialogTrigger>
	{/snippet}
</Tooltip>
