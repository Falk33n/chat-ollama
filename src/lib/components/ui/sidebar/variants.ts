import { cn } from '$lib/utils';
import { tv, type VariantProps } from 'tailwind-variants';

/**
 * Applies styles to the menu button.
 *
 * @property `"variant"` Applies color styles.
 * @defaultValue `"accent"`
 *
 * @property `"size"` Applies size styles.
 * @defaultValue `"md"`
 */
export const sidebarMenuButtonVariants = tv({
	base: cn(
		'peer/menu-button ring-sidebar-ring flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm transition-[width,height,padding] duration-200 outline-none',
		'focus-visible:ring-2',
		'active:bg-sidebar-accent active:text-sidebar-accent-foreground',
		'disabled:pointer-events-none disabled:opacity-70 aria-disabled:pointer-events-none aria-disabled:opacity-70',
		'group-has-[[data-sidebar=menu-action]]/menu-item:pr-8',
		'group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2',
		'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[active=true]:font-medium',
		'data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground',
		'[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
	),
	variants: {
		variant: {
			accent: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
			outline: cn(
				'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))]',
				'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
			),
		},
		size: {
			sm: 'h-7 text-xs',
			md: 'h-8 text-sm',
			lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0',
		},
	},
	defaultVariants: {
		variant: 'accent',
		size: 'md',
	},
});

export type SidebarMenuButtonVariant = VariantProps<typeof sidebarMenuButtonVariants>['variant'];
export type SidebarMenuButtonSize = VariantProps<typeof sidebarMenuButtonVariants>['size'];
