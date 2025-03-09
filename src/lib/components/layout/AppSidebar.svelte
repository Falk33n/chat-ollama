<script
	lang="ts"
	module
>
	import {
		CalendarIcon,
		HouseIcon,
		InboxIcon,
		SearchIcon,
		SettingsIcon,
	} from 'lucide-svelte';

	const sidebarMenuItems = [
		{
			title: 'Home',
			href: '#',
			icon: HouseIcon,
		},
		{
			title: 'Inbox',
			href: '#',
			icon: InboxIcon,
		},
		{
			title: 'Calendar',
			href: '#',
			icon: CalendarIcon,
		},
		{
			title: 'Search',
			href: '#',
			icon: SearchIcon,
		},
		{
			title: 'Settings',
			href: '#',
			icon: SettingsIcon,
		},
	];
</script>

<script lang="ts">
	import {
		Sidebar,
		SidebarContent,
		SidebarFooter,
		SidebarGroup,
		SidebarGroupContent,
		SidebarGroupLabel,
		SidebarHeader,
		SidebarMenu,
		SidebarMenuButton,
		SidebarMenuItem,
	} from '$components/ui/sidebar';
</script>

<Sidebar>
	<SidebarHeader>Header</SidebarHeader>

	<SidebarContent>
		<SidebarGroup>
			<SidebarGroupLabel>GroupLabel1</SidebarGroupLabel>

			<SidebarGroupContent>
				<SidebarMenu>
					{#each sidebarMenuItems as { icon: Icon, ...item } (item.title)}
						<SidebarMenuItem>
							<SidebarMenuButton>
								{#snippet child({ props })}
									<a
										href={item.href}
										{...props}
									>
										<Icon aria-hidden />

										<span>{item.title}</span>
									</a>
								{/snippet}
							</SidebarMenuButton>
						</SidebarMenuItem>
					{/each}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>

		<SidebarGroup>
			<SidebarGroupLabel>GroupLabel2</SidebarGroupLabel>

			<SidebarGroupContent>
				<SidebarMenu>
					{#each sidebarMenuItems as { icon: Icon, ...item } (item.title)}
						<SidebarMenuItem>
							<SidebarMenuButton>
								{#snippet child({ props })}
									<a
										href={item.href}
										{...props}
									>
										<Icon aria-hidden />

										<span>{item.title}</span>
									</a>
								{/snippet}
							</SidebarMenuButton>
						</SidebarMenuItem>
					{/each}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	</SidebarContent>

	<SidebarFooter>Footer</SidebarFooter>
</Sidebar>
