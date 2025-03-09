<script
	lang="ts"
	module
>
	import { Input, type InputProps } from '$components/ui/input';

	export type SidebarInputProps = InputProps;
</script>

<script lang="ts">
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: InputProps = $props();
</script>

<Input
	bind:ref
	bind:value
	data-sidebar="input"
	class={cn(
		'bg-background focus-visible:ring-sidebar-ring h-8 w-full shadow-none focus-visible:ring-2',
		className,
	)}
	{...restProps}
/>
