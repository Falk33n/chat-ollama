<script lang="ts">
	import { Tooltip } from '$lib/components/global';
	import { Avatar } from '$lib/components/ui/avatar';
	import { buttonVariants } from '$lib/components/ui/button';
	import { DropdownMenuTrigger } from '$lib/components/ui/dropdown-menu';
	import { cn } from '$lib/utils';
</script>

<DropdownMenuTrigger
	aria-label="Open settings"
	class={cn(
		buttonVariants({ variant: 'outline', size: 'icon' }),
		'border-foreground size-8 rounded-full',
	)}
>
	<Tooltip content="Open settings">
		{#snippet trigger({ props: { onclick: _onclick, ...restProps } })}
			<Avatar.Root
				class="size-full"
				{...restProps}
			>
				<Avatar.Image
					src="/images/profile-picture.webp"
					alt="User profile picture"
					draggable={false}
				/>

				<Avatar.Fallback class="text-[10px] font-bold">Profile</Avatar.Fallback>
			</Avatar.Root>
		{/snippet}
	</Tooltip>
</DropdownMenuTrigger>
