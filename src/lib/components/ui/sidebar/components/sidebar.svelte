<script lang="ts">
	import { Sheet } from '$lib/components/ui/sheet';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { SIDEBAR_WIDTH_MOBILE } from '../constants';
	import { useSidebar } from '../context.svelte';
	import type { SidebarRootProps } from '../types';

	let {
		ref = $bindable(null),
		collapsible = 'offcanvas',
		variant = 'sidebar',
		side = 'left',
		class: className,
		children,
		...restProps
	}: SidebarRootProps = $props();

	const sidebar = useSidebar();

	function handleWindowResize() {
		if (sidebar.isMobile && sidebar.open) {
			sidebar.setOpen(false);
		}
	}

	onMount(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	});
</script>

{#if collapsible === 'none'}
	<div
		bind:this={ref}
		class={cn(
			'bg-sidebar text-sidebar-foreground flex h-full w-[var(--sidebar-width)] flex-col',
			className,
		)}
		{...restProps}
	>
		{@render children?.()}
	</div>
{:else if sidebar.isMobile}
	<Sheet.Root
		bind:open={() => sidebar.openMobile, (v) => sidebar.setOpenMobile(v)}
		{...restProps}
	>
		<Sheet.Content
			class="bg-sidebar text-sidebar-foreground w-[var(--sidebar-width)] p-0 [&>button]:hidden"
			style="--sidebar-width: {SIDEBAR_WIDTH_MOBILE};"
			data-sidebar="sidebar"
			data-mobile="true"
			{side}
		>
			<div class="flex h-full w-full flex-col">
				{@render children?.()}
			</div>
		</Sheet.Content>
	</Sheet.Root>
{:else}
	<div
		bind:this={ref}
		class="group peer text-sidebar-foreground hidden md:block"
		data-collapsible={sidebar.state === 'collapsed' ? collapsible : ''}
		data-state={sidebar.state}
		data-variant={variant}
		data-side={side}
	>
		<div
			class={cn(
				'relative h-svh w-[var(--sidebar-width)] bg-transparent transition-[width] duration-200 ease-linear',
				'group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180',
				variant === 'floating' || variant === 'inset'
					? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
					: 'group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)]',
			)}
		></div>

		<div
			class={cn(
				'fixed inset-y-0 z-10 hidden h-svh w-[var(--sidebar-width)] transition-[left,right,width] duration-200 ease-linear',
				'md:flex',
				side === 'left'
					? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
					: 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
				variant === 'floating' || variant === 'inset'
					? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
					: 'group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)] group-data-[side=left]:border-r group-data-[side=right]:border-l',
				className,
			)}
			{...restProps}
		>
			<div
				data-sidebar="sidebar"
				class={cn(
					'bg-sidebar flex h-full w-full flex-col',
					'group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow',
				)}
			>
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}
