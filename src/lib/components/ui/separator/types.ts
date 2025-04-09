import type { Separator as SeparatorPrimitive, WithElementRef } from 'bits-ui';

export type SeparatorProps = WithElementRef<
	Omit<SeparatorPrimitive.RootProps, 'ref'>,
	HTMLDivElement
>;
