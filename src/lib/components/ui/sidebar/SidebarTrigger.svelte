<script
	lang="ts"
	module
>
	import { Button, type ButtonProps } from '$components/ui/button';

	export type SidebarTriggerProps = ButtonProps & {
		onclick?: (e: MouseEvent) => void;
	};
</script>

<script lang="ts">
	import { useSidebar } from '$components/ui/sidebar';
	import { cn } from '$utils';
	import { PanelLeftOpenIcon } from 'lucide-svelte';

	let {
		ref = $bindable(null),
		'class': className,
		onclick,
		'aria-label': ariaLabel = 'Toggle Sidebar',
		...restProps
	}: SidebarTriggerProps = $props();

	const sidebar = useSidebar();
</script>

<Button
	type="button"
	onclick={(e) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	data-sidebar="trigger"
	variant="outline"
	size="icon"
	class={className ? cn(className) : undefined}
	aria-label={ariaLabel}
	{...restProps}
>
	<PanelLeftOpenIcon aria-hidden />
</Button>
