<script
	lang="ts"
	module
>
	type AppSidebarContentProps = { ref?: HTMLDivElement | null };

	type Chat = { group: string; items: SidebarChatHistoryItem[] };

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
	const pageSize = 20;
	let page = 0;
</script>

<script lang="ts">
	import { AppSidebarMenuItem } from '$components/layout/sidebar';
	import {
		SidebarContent,
		SidebarGroup,
		SidebarGroupContent,
		SidebarGroupLabel,
		SidebarMenu,
	} from '$components/ui/sidebar';
	import { LoaderIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let { ref = $bindable(null) }: AppSidebarContentProps = $props();

	let chats = $state<Chat[]>([]);
	let hasMoreChats = $state(true);
	let isChatsBeingFetched = $state(false);

	async function loadChats() {
		if (!hasMoreChats || isChatsBeingFetched) {
			return;
		}

		isChatsBeingFetched = true;
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const start = page * pageSize;
		const end = start + pageSize;
		const newChats = fullChatHistory.slice(start, end);

		if (newChats.length === 0) {
			hasMoreChats = false;
			return;
		}

		const groupedChats = groupChatHistory(newChats);

		groupedChats.forEach(({ group, items }) => {
			const existingGroupIndex = chats.findIndex((g) => g.group === group);

			if (existingGroupIndex !== -1) {
				chats = chats.map((g, i) =>
					i === existingGroupIndex
						? { ...g, items: [...g.items, ...items] }
						: g,
				);
			} else {
				chats = [...chats, { group, items }];
			}
		});

		page++;

		if (end >= fullChatHistory.length) {
			hasMoreChats = false;
		}

		isChatsBeingFetched = false;
	}

	async function handleScroll() {
		if (!ref || !hasMoreChats) return;

		const { scrollTop, scrollHeight, clientHeight } = ref;
		const isNearBottom = scrollHeight - scrollTop - clientHeight < 65;

		if (isNearBottom) {
			await loadChats();
		}
	}

	onMount(async () => {
		await loadChats();
	});
</script>

<SidebarContent
	bind:ref
	class="gap-0"
	aria-busy={isChatsBeingFetched}
	onscroll={async () => await handleScroll()}
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

{#if isChatsBeingFetched}
	<div
		class="relative z-[10] flex w-full items-center justify-center pt-5 pb-4"
		aria-hidden={true}
	>
		<LoaderIcon
			class="text-sidebar-foreground/80 size-4 animate-spin"
			aria-hidden
		/>
	</div>
{/if}
