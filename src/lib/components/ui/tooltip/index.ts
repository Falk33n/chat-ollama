import { Tooltip as TooltipPrimitive, type WithElementRef } from 'bits-ui';

export type {
	TooltipArrowProps,
	TooltipPortalProps,
	TooltipRootProps as TooltipProps,
	TooltipProviderProps,
	TooltipTriggerProps,
} from 'bits-ui';

export const Tooltip = TooltipPrimitive.Root;
export const TooltipPortal = TooltipPrimitive.Portal;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipProvider = TooltipPrimitive.Provider;
export const TooltipArrow = TooltipPrimitive.Arrow;

export type TooltipContentProps = WithElementRef<
	Omit<TooltipPrimitive.ContentProps, 'ref'>,
	HTMLDivElement
>;

export { default as TooltipContent } from '$components/ui/tooltip/TooltipContent.svelte';
