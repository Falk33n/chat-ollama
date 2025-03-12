<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type SidebarProviderPropsWithoutHTML = WithElementRef<
		{
			open?: boolean;
			onOpenChange?: (open: boolean) => void;
		},
		HTMLDivElement
	>;

	export type SidebarProviderProps = SidebarProviderPropsWithoutHTML &
		HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	import {
		SIDEBAR_COOKIE_MAX_AGE,
		SIDEBAR_COOKIE_NAME,
		SIDEBAR_WIDTH,
		SIDEBAR_WIDTH_ICON,
		setSidebar,
	} from '$components/ui/sidebar';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		open = $bindable(true),
		onOpenChange = () => {},
		class: className,
		style,
		children,
		...restProps
	}: SidebarProviderProps = $props();

	const sidebar = setSidebar({
		open: () => open,
		setOpen: (value: boolean) => {
			open = value;
			onOpenChange(value);
			document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
		},
	});
</script>

<svelte:window onkeydown={sidebar.handleShortcutKeydown} />

<div
	style="--sidebar-width: {SIDEBAR_WIDTH}; --sidebar-width-icon: {SIDEBAR_WIDTH_ICON}; {style}"
	class={cn(
		'group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full',
		className,
	)}
	bind:this={ref}
	{...restProps}
>
	{@render children?.()}
</div>
