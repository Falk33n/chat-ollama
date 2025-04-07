<script lang="ts">
	import { TemporaryChatTrigger } from '$lib/components/layout/topbar';
	import { Dialog } from '$lib/components/ui/dialog';

	let isDialogOpen = $state(false);
</script>

<Dialog.Root>
	<TemporaryChatTrigger bind:isPressed={isDialogOpen} />

	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>

			<Dialog.Description>
				This action cannot be undone. This will permanently delete your account and remove
				your data from our servers.
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
