import type { WithElementRef } from 'bits-ui';
import type {
	HTMLInputAttributes,
	HTMLInputTypeAttribute,
	HTMLTextareaAttributes,
} from 'svelte/elements';

type InputTypeWithoutFile = Exclude<HTMLInputTypeAttribute, 'file'>;

/** The default type of the value prop is typed as `any`. Therefore we need to make it be typed. */
type InputValue = HTMLTextareaAttributes['value'] | FileList;

type InputPropsWithoutHTML = WithElementRef<
	{ value?: InputValue } & (
		| { type: 'file'; files?: FileList }
		| { type?: InputTypeWithoutFile; files?: never }
	),
	HTMLInputElement
>;

type InputPropsWithHTML = Omit<HTMLInputAttributes, 'type' | 'value'>;

export type InputProps = InputPropsWithoutHTML & InputPropsWithHTML;
