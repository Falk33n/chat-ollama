import { Avatar as AvatarPrimitive, type WithElementRef } from 'bits-ui';

//
// ROOT
//

export type AvatarRootProps = WithElementRef<
	Omit<AvatarPrimitive.RootProps, 'ref'>,
	HTMLDivElement
>;

//
// IMAGE
//

type AvatarImagePropsWithoutHTML = WithElementRef<
	{
		src: string;
		alt: string;
	},
	HTMLImageElement
>;

type AvatarImagePropsWithHTML = Omit<AvatarPrimitive.ImageProps, 'ref' | 'src' | 'alt'>;

export type AvatarImageProps = AvatarImagePropsWithoutHTML & AvatarImagePropsWithHTML;

//
// FALLBACK
//

export type AvatarFallbackProps = WithElementRef<
	Omit<AvatarPrimitive.FallbackProps, 'ref'>,
	HTMLSpanElement
>;
