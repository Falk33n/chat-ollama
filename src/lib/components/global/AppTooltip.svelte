<script
	lang="ts"
	module
>
	import {
		Tooltip,
		TooltipArrow,
		TooltipContent,
		TooltipTrigger,
		type TooltipContentProps,
		type TooltipProps,
	} from '$components/ui/tooltip';
	import type { WithoutChildren } from 'bits-ui';
	import { type Snippet } from 'svelte';

	type AppTooltipPropsWithoutHTML = {
		trigger?: Snippet<[{ props: Record<string, unknown> }]>;
		content?: Snippet<[{ props?: Record<string, unknown> }]> | string;
		contentProps?: TooltipContentProps;
	};

	type AppTooltipPropsWithHTML = WithoutChildren<TooltipProps>;

	export type AppTooltipProps = AppTooltipPropsWithoutHTML &
		AppTooltipPropsWithHTML;
</script>

<script lang="ts">
	let {
		open = $bindable(false),
		trigger,
		content,
		contentProps,
		...restProps
	}: AppTooltipProps = $props();
</script>

<Tooltip
	bind:open
	{...restProps}
>
	<TooltipTrigger>
		{#snippet child({ props })}
			{#if trigger}
				{@render trigger({ props })}
			{/if}
		{/snippet}
	</TooltipTrigger>

	<TooltipContent
		sideOffset={6}
		{...contentProps}
	>
		<TooltipArrow
			class="text-primary bg-transparent"
			aria-hidden
		/>

		{#if content}
			{#if typeof content === 'string'}
				{content}
			{:else}
				{@render content({ props: contentProps })}
			{/if}
		{/if}
	</TooltipContent>
</Tooltip>
