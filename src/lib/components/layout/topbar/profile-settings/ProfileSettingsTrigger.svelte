<script lang="ts">
	import { Tooltip } from '$components/global';
	import { Avatar, AvatarFallback, AvatarImage } from '$components/ui/avatar';
	import { buttonVariants } from '$components/ui/button';
	import { DropdownMenuTrigger } from '$components/ui/dropdown-menu';
	import { cn } from '$utils';
</script>

<DropdownMenuTrigger
	aria-label="Open settings"
	class={cn(
		buttonVariants({ variant: 'outline', size: 'icon' }),
		'rounded-full',
	)}
>
	<Tooltip content="Open settings">
		{#snippet trigger({ props: { onclick: _onclick, ...props } })}
			<Avatar
				class="size-full"
				{...props}
			>
				<AvatarImage
					src="/images/profile-picture.webp"
					alt="User profile picture"
					draggable={false}
				/>

				<AvatarFallback class="text-[10px] font-bold">Profile</AvatarFallback>
			</Avatar>
		{/snippet}
	</Tooltip>
</DropdownMenuTrigger>
