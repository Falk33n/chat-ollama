import type { WithElementRef } from 'bits-ui';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { ButtonSize, ButtonVariant } from './variants';

type ButtonPropsWithoutHTML = WithElementRef<
	{
		/**
		 * The color styles for the button.
		 * @defaultValue `"primary"`
		 */
		variant?: ButtonVariant;

		/**
		 * The size styles for the button.
		 * @defaultValue `"md"`
		 */
		size?: ButtonSize;
	},
	HTMLButtonElement | HTMLAnchorElement
>;

type ButtonPropsWithHTML = HTMLAnchorAttributes & HTMLButtonAttributes;

export type ButtonProps = ButtonPropsWithoutHTML & ButtonPropsWithHTML;
