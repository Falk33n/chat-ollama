import { cn } from '$lib/utils';
import { tv, type VariantProps } from 'tailwind-variants';

/**
 * Applies styles to the sheet content.
 * @property `"side"` Applies position styles.
 * @defaultValue `"right"`
 */
export const sheetContentVariants = tv({
	base: cn(
		'bg-background fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out',
		'data-[state=open]:animate-in data-[state=open]:duration-500',
		'data-[state=closed]:animate-out data-[state=closed]:duration-300',
	),
	variants: {
		side: {
			top: cn(
				'inset-x-0 top-0 border-b',
				'data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top',
			),
			bottom: cn(
				'inset-x-0 bottom-0 border-t',
				'data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom',
			),
			left: cn(
				'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
				'data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left',
			),
			right: cn(
				'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
				'data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right',
			),
		},
	},
	defaultVariants: {
		side: 'right',
	},
});

export type SheetContentSide = VariantProps<typeof sheetContentVariants>['side'];
