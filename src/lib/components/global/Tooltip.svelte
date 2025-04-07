<script
	lang="ts"
	module
>
	import {
		TooltipArrow as TooltipPrimitiveArrow,
		TooltipContent as TooltipPrimitiveContent,
		TooltipPortal as TooltipPrimitivePortal,
		Tooltip as TooltipPrimitiveRoot,
		TooltipTrigger as TooltipPrimitiveTrigger,
		type TooltipContentProps as TooltipPrimitiveContentProps,
		type TooltipProps as TooltipPrimitiveRootProps,
	} from '$lib/components/ui/tooltip';
	import type { WithoutChildren } from 'bits-ui';
	import { type Snippet } from 'svelte';

	type TooltipPropsWithoutHTML = {
		trigger?: Snippet<[{ props: Record<string, unknown> }]>;
		content?: Snippet<[{ props?: Record<string, unknown> }]> | string;
		contentProps?: TooltipPrimitiveContentProps;
	};

	type TooltipPropsWithHTML = WithoutChildren<TooltipPrimitiveRootProps>;

	type TooltipProps = TooltipPropsWithoutHTML & TooltipPropsWithHTML;
</script>

<script lang="ts">
	let {
		open = $bindable(false),
		trigger,
		content,
		contentProps,
		...restProps
	}: TooltipProps = $props();
</script>

<TooltipPrimitiveRoot
	bind:open
	{...restProps}
>
	<TooltipPrimitiveTrigger>
		{#snippet child({ props })}
			{#if trigger}
				{@render trigger({ props })}
			{/if}
		{/snippet}
	</TooltipPrimitiveTrigger>

	<TooltipPrimitivePortal>
		<TooltipPrimitiveContent
			sideOffset={6}
			{...contentProps}
		>
			<TooltipPrimitiveArrow
				class="text-primary"
				aria-hidden
			/>

			{#if content}
				{#if typeof content === 'string'}
					{content}
				{:else}
					{@render content({ props: contentProps })}
				{/if}
			{/if}
		</TooltipPrimitiveContent>
	</TooltipPrimitivePortal>
</TooltipPrimitiveRoot>
