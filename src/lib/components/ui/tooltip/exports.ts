import { Tooltip as TooltipPrimitive } from 'bits-ui';

export type {
	TooltipArrowProps as ArrowProps,
	TooltipPortalProps as PortalProps,
	TooltipProviderProps as ProviderProps,
	TooltipRootProps as RootProps,
	TooltipTriggerProps as TriggerProps,
} from 'bits-ui';

export type { TooltipBaseContentProps as ContentProps } from './types';

export { default as Content } from './components/base/tooltip-base-content.svelte';

export const Root = TooltipPrimitive.Root;
export const Portal = TooltipPrimitive.Portal;
export const Trigger = TooltipPrimitive.Trigger;
export const Provider = TooltipPrimitive.Provider;
export const Arrow = TooltipPrimitive.Arrow;
