import type { WithElementRef } from 'bits-ui';
import type {
	HTMLInputAttributes,
	HTMLInputTypeAttribute,
	HTMLTextareaAttributes,
} from 'svelte/elements';

type InputTypeWithoutFile = Exclude<HTMLInputTypeAttribute, 'file'>;

type InputPropsWithoutHTML = WithElementRef<
	| { type: 'file'; files?: FileList }
	| { type?: InputTypeWithoutFile; files?: undefined },
	HTMLInputElement
>;

type InputValue = HTMLTextareaAttributes['value'] | FileList;

type InputPropsWithHTML = Omit<HTMLInputAttributes, 'type' | 'value'> & {
	value?: InputValue;
};

export type InputProps = InputPropsWithoutHTML & InputPropsWithHTML;

export { default as Input } from '$components/ui/input/Input.svelte';
