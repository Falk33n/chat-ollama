import type { Tooltip as TooltipPrimitive, WithElementRef, WithoutChildren } from 'bits-ui';
import type { Snippet } from 'svelte';

export type TooltipBaseContentProps = WithElementRef<
	Omit<TooltipPrimitive.ContentProps, 'ref'>,
	HTMLDivElement
>;

type TooltipPropsWithoutHTML = WithElementRef<
	{
		trigger?: Snippet<[{ props: Record<string, unknown> }]>;
		content?: Snippet<[{ props: Record<string, unknown> }]> | string;
		contentProps?: TooltipBaseContentProps;
	},
	HTMLDivElement
>;

type TooltipPropsWithHTML = WithoutChildren<TooltipPrimitive.RootProps>;

export type TooltipProps = TooltipPropsWithoutHTML & TooltipPropsWithHTML;
