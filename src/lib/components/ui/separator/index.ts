import type { Separator as SeparatorPrimitive, WithElementRef } from 'bits-ui';

export type SeparatorProps = WithElementRef<
	Omit<SeparatorPrimitive.RootProps, 'ref'>,
	HTMLDivElement
>;

export { default as Separator } from '$components/ui/separator/Separator.svelte';
