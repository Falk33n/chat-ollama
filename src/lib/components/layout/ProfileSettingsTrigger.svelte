<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { Avatar, AvatarFallback, AvatarImage } from '$components/ui/avatar';
	import { Button } from '$components/ui/button';
</script>

<AppTooltip content="Open profile settings">
	{#snippet trigger({ props: { onclick: _onclick, ...props } })}
		<Button
			variant="outline"
			size="icon"
			class="border-input/15 hover:border-border focus-visible:border-border size-10 rounded-full"
			aria-label="Open profile settings"
			{...props}
		>
			<Avatar class="size-full">
				<AvatarImage
					src="/images/profile-picture.webp"
					alt="User profile picture"
					class="size-[80%]"
					draggable={false}
				/>

				<AvatarFallback class="text-xs">Profile</AvatarFallback>
			</Avatar>
		</Button>
	{/snippet}
</AppTooltip>
