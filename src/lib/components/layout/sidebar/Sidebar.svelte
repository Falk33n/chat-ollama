<script lang="ts">
	import { Sidebar as SidebarPrimitive } from '$lib/components/ui/sidebar';
	import SidebarContent from './sidebar-content.svelte';
	import SidebarHeader from './sidebar-header.svelte';
</script>

<SidebarPrimitive.Root>
	<SidebarHeader />
	<SidebarContent />
</SidebarPrimitive.Root>
