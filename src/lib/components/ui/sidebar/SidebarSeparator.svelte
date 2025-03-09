<script
	lang="ts"
	module
>
	import { Separator, type SeparatorProps } from '$components/ui/separator';

	export type SidebarSeparatorProps = SeparatorProps;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: SidebarSeparatorProps = $props();
</script>

<Separator
	bind:ref
	data-sidebar="separator"
	class={cn('bg-sidebar-border mx-2 w-auto', className)}
	{...restProps}
/>
