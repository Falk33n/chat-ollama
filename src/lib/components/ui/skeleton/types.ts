import type { WithElementRef, WithoutChildren } from 'bits-ui';
import type { HTMLAttributes } from 'svelte/elements';

export type SkeletonProps = WithoutChildren<
	WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;
