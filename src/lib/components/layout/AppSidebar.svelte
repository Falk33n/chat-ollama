<script
	lang="ts"
	module
>
	type AppSidebarProps = { loaderRef?: HTMLDivElement | null };

	export type SidebarChatHistoryItem = {
		title: string;
		chatId: string;
		updatedAt: string;
	};

	function generateMockChats(count: number): SidebarChatHistoryItem[] {
		const chats: SidebarChatHistoryItem[] = [];
		const now = Date.now();

		for (let i = 0; i < count; i++) {
			const daysAgo = Math.floor(Math.random() * 365);
			const date = new Date(now - daysAgo * 86400000).toISOString();

			chats.push({
				title: `Chat ${i + 1}`,
				chatId: `chat_${i + 1}`,
				updatedAt: date,
			});
		}

		return chats.sort(
			(a, b) =>
				new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
		);
	}

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

	const fullChatHistory = generateMockChats(1000);
</script>

<script lang="ts">
	import { AppSidebarHeader, AppSidebarMenuItem } from '$components/layout';
	import {
		Sidebar,
		SidebarContent,
		SidebarFooter,
		SidebarGroup,
		SidebarGroupContent,
		SidebarGroupLabel,
		SidebarMenu,
	} from '$components/ui/sidebar';
	import { LoaderIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let { loaderRef = $bindable(null) }: AppSidebarProps = $props();

	let chats = $state<{ group: string; items: SidebarChatHistoryItem[] }[]>([]);
	let hasMoreChats = $state(false);

	let page = 0;
	const pageSize = 20;

	export function loadChats() {
		const start = page * pageSize;
		const end = start + pageSize;
		const newChats = fullChatHistory.slice(start, end);

		if (newChats.length === 0) {
			hasMoreChats = false;
			return;
		}

		const updateChats = () => {
			const groupedChats = groupChatHistory(newChats);
			const updatedChats = [...chats];

			groupedChats.forEach(({ group, items }) => {
				const existingGroup = updatedChats.find((g) => g.group === group);
				if (existingGroup) {
					existingGroup.items.push(...items);
				} else {
					updatedChats.push({ group, items });
				}
			});

			return updatedChats;
		};

		chats = updateChats();
		page++;
		hasMoreChats = page * pageSize < fullChatHistory.length;
	}

	onMount(() => {
		loadChats();

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					hasMoreChats = true;
					loadChats();
				}
			},
			{ rootMargin: '50px' },
		);

		if (loaderRef) observer.observe(loaderRef);

		return () => observer.disconnect();
	});
</script>

<Sidebar>
	<AppSidebarHeader />

	<SidebarContent
		class="gap-0"
		aria-busy={hasMoreChats}
	>
		{#each chats as { group, items } (group)}
			<SidebarGroup class="pt-[unset] pb-5">
				<SidebarGroupLabel
					class="bg-sidebar sticky top-0 z-[10] mb-0.5 h-7 font-semibold"
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
	{#if hasMoreChats}
		<SidebarFooter
			bind:ref={loaderRef}
			aria-hidden
		>
			<LoaderIcon
				class="size-5 animate-spin"
				aria-hidden
			/>
		</SidebarFooter>
	{/if}
</Sidebar>
