import { cn } from '$lib/utils';
import { type VariantProps, tv } from 'tailwind-variants';

/**
 * Applies styles to the button.
 *
 * @property `"variant"` Applies color styles.
 * @defaultValue `"primary"`
 *
 * @property `"size"` Applies size styles.
 * @defaultValue `"md"`
 */
export const buttonVariants = tv({
	base: cn(
		'inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200',
		'disabled:pointer-events-none disabled:opacity-70',
		'focus-visible:ring-ring focus-visible:ring-1 focus-visible:outline-none',
		'[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	),
	variants: {
		variant: {
			primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow',
			destructive:
				'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
			outline: cn(
				'border-input bg-background border shadow-sm',
				'hover:bg-accent hover:text-accent-foreground',
			),
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline',
		},
		size: {
			sm: 'h-8 rounded-md px-3 text-xs',
			md: 'h-9 px-4 py-2',
			lg: 'h-10 rounded-md px-8',
			icon: 'size-9',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
export type ButtonSize = VariantProps<typeof buttonVariants>['size'];
