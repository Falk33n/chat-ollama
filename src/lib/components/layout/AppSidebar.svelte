<script
	lang="ts"
	module
>
	const formatDate = (date: Date) => date.toISOString();

	function getGroupName(date: Date) {
		const now = new Date();
		const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		const yesterday = new Date(today);
		yesterday.setDate(yesterday.getDate() - 1);

		if (date >= today) return 'Today';
		if (date >= yesterday) return 'Yesterday';

		const startOfWeek = new Date(today);
		startOfWeek.setDate(today.getDate() - today.getDay());
		if (date >= startOfWeek) return 'This Week';

		const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
		if (date >= startOfMonth) return 'This Month';

		if (date.getFullYear() === now.getFullYear()) {
			return date.toLocaleString('en-US', { month: 'long' });
		}

		return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
	}

	export type SidebarChatHistoryItem = {
		title: string;
		chatId: string;
		updatedAt: string;
	};

	function groupChatHistory(items: SidebarChatHistoryItem[]) {
		const grouped: Record<string, SidebarChatHistoryItem[]> = {};

		items.forEach((item) => {
			const date = new Date(item.updatedAt);
			const groupName = getGroupName(date);

			if (!grouped[groupName]) {
				grouped[groupName] = [];
			}
			grouped[groupName].push(item);
		});

		return Object.entries(grouped).map(([group, items]) => ({ group, items }));
	}

	const chatHistory: SidebarChatHistoryItem[] = [
		{
			title: 'Project discussion',
			chatId: 'chat_001',
			updatedAt: formatDate(new Date()),
		},
		{
			title: 'Bug report',
			chatId: 'chat_002',
			updatedAt: formatDate(new Date()),
		},
		{
			title: 'AI Model Improvements',
			chatId: 'chat_003',
			updatedAt: formatDate(new Date(Date.now() - 86400000)),
		},
		{
			title: 'Performance Optimizations',
			chatId: 'chat_004',
			updatedAt: formatDate(new Date(Date.now() - 3 * 86400000)),
		},
		{
			title: 'API Integration',
			chatId: 'chat_005',
			updatedAt: formatDate(new Date(Date.now() - 5 * 86400000)),
		},
		{
			title: 'UI Design Feedback',
			chatId: 'chat_006',
			updatedAt: formatDate(new Date(Date.now() - 10 * 86400000)),
		},
		{
			title: 'Database Schema Changes',
			chatId: 'chat_007',
			updatedAt: formatDate(new Date(Date.now() - 20 * 86400000)),
		},
		{
			title: 'Feature Requests',
			chatId: 'chat_008',
			updatedAt: formatDate(new Date('2024-02-15T12:30:00Z')),
		},
		{
			title: 'Server Migration',
			chatId: 'chat_009',
			updatedAt: formatDate(new Date('2024-01-10T09:45:00Z')),
		},
		{
			title: 'Holiday Sales Strategy',
			chatId: 'chat_010',
			updatedAt: formatDate(new Date('2023-12-20T16:00:00Z')),
		},
		{
			title: 'Legacy System Review',
			chatId: 'chat_011',
			updatedAt: formatDate(new Date('2023-11-05T14:15:00Z')),
		},
		{
			title: 'UI Designd Feedback',
			chatId: 'chat_013',
			updatedAt: formatDate(new Date(Date.now() - 10 * 86400000)),
		},
		{
			title: 'Database Schema Changes',
			chatId: 'chat_014',
			updatedAt: formatDate(new Date(Date.now() - 20 * 86400000)),
		},
		{
			title: 'Feature dRequests',
			chatId: 'chat_014',
			updatedAt: formatDate(new Date('2024-02-15T12:30:00Z')),
		},
		{
			title: 'Server Migration',
			chatId: 'chat_015',
			updatedAt: formatDate(new Date('2024-01-10T09:45:00Z')),
		},
		{
			title: 'Holiday Sdales Strategy',
			chatId: 'chat_016',
			updatedAt: formatDate(new Date('2023-12-20T16:00:00Z')),
		},
		{
			title: 'Legacy Sysgtem Review',
			chatId: 'chat_017',
			updatedAt: formatDate(new Date('2023-11-05T14:15:00Z')),
		},
		{
			title: 'Feature dRequests',
			chatId: 'chat_022',
			updatedAt: formatDate(new Date('2024-02-15T12:30:00Z')),
		},
		{
			title: 'Server Migration',
			chatId: 'chat_023',
			updatedAt: formatDate(new Date('2024-01-10T09:45:00Z')),
		},
		{
			title: 'Holiday Sdales Strategy',
			chatId: 'chat_024',
			updatedAt: formatDate(new Date('2023-12-20T16:00:00Z')),
		},
		{
			title: 'Legacy Sysgtem Review',
			chatId: 'chat_025',
			updatedAt: formatDate(new Date('2023-11-05T14:15:00Z')),
		},
	];

	const chatHistoryMenuItems = groupChatHistory(chatHistory);
</script>

<script lang="ts">
	import { AppSidebarHeader, AppSidebarMenuItem } from '$components/layout';
	import {
		Sidebar,
		SidebarContent,
		SidebarGroup,
		SidebarGroupContent,
		SidebarGroupLabel,
		SidebarMenu,
	} from '$components/ui/sidebar';
</script>

<Sidebar>
	<AppSidebarHeader />

	<SidebarContent class="gap-0">
		{#each chatHistoryMenuItems as { group, items } (group)}
			<SidebarGroup class="pt-[unset] pb-5">
				<SidebarGroupLabel
					class="top-0 z-[10] sticky bg-sidebar mb-0.5 h-7 font-semibold"
				>
					{group}
				</SidebarGroupLabel>

				<SidebarGroupContent>
					<SidebarMenu class="gap-[unset]">
						{#each items as { title, chatId } (chatId)}
							<AppSidebarMenuItem
								{title}
								{chatId}
							/>
						{/each}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		{/each}
	</SidebarContent>
</Sidebar>
