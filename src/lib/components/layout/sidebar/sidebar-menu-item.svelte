<script lang="ts">
	import { Sidebar as SidebarPrimitive } from '$lib/components/ui/sidebar';
	import { cn } from '$lib/utils';
	import { ChatSettings } from './chat';
	import { setSidebarMenuItemContext } from './context.svelte';
	import type { SidebarMenuItemProps } from './types';

	let { ref = $bindable(null), title, chatId }: SidebarMenuItemProps = $props();

	let isMenuOpen = $state(false);
	let isTooltipVisible = $state(false);

	const { isOptionsVisible } = setSidebarMenuItemContext({
		title,
		chatId,
	});

	function handlePointerLeave() {
		if (!ref?.matches(':focus-visible') && !ref?.matches(':focus-within')) {
			isOptionsVisible.value = false;
		}
	}
</script>

<SidebarPrimitive.MenuItem>
	<SidebarPrimitive.MenuButton
		onfocus={() => (isOptionsVisible.value = true)}
		onblur={() => (isOptionsVisible.value = false)}
		onpointerenter={() => (isOptionsVisible.value = true)}
		onpointerleave={handlePointerLeave}
		class={cn(
			'relative justify-between hover:z-[6] focus-visible:z-[8] [&>span:first-child]:truncate',
			(isMenuOpen || isTooltipVisible) && 'bg-sidebar-accent',
		)}
	>
		{#snippet child({
			// @ts-expect-error `implicity any`: props is just typed as a record.
			restProps,
		})}
			<a
				bind:this={ref}
				href={`/chat/${chatId}`}
				{...restProps}
			>
				<span>{title}</span>

				<ChatSettings
					bind:isMenuOpen
					bind:isTooltipVisible
				/>
			</a>
		{/snippet}
	</SidebarPrimitive.MenuButton>
</SidebarPrimitive.MenuItem>
