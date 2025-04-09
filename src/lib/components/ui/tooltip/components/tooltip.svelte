<script lang="ts">
	import { TooltipBase } from '../index';
	import type { TooltipProps } from '../types';

	let {
		ref = $bindable(null),
		open = $bindable(false),
		trigger,
		content,
		contentProps = {},
		...restProps
	}: TooltipProps = $props();
</script>

<TooltipBase.Root
	bind:open
	{...restProps}
>
	<TooltipBase.Trigger>
		{#snippet child({ props })}
			{@render trigger?.({ props })}
		{/snippet}
	</TooltipBase.Trigger>

	<TooltipBase.Portal>
		<TooltipBase.Content
			bind:ref
			sideOffset={6}
			{...contentProps}
		>
			<TooltipBase.Arrow
				class="text-primary"
				aria-hidden
			/>

			{#if typeof content === 'string'}
				{content}
			{:else}
				{@render content?.({ props: contentProps })}
			{/if}
		</TooltipBase.Content>
	</TooltipBase.Portal>
</TooltipBase.Root>
