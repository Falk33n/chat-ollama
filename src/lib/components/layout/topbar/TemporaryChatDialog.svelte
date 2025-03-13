<script lang="ts">
	import { TemporaryChatTrigger } from '$components/layout/topbar';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
	} from '$components/ui/dialog';

	let isDialogOpen = $state(false);
</script>

<Dialog>
	<TemporaryChatTrigger bind:isPressed={isDialogOpen} />

	<DialogContent>
		<DialogHeader>
			<DialogTitle>Are you sure absolutely sure?</DialogTitle>

			<DialogDescription>
				This action cannot be undone. This will permanently delete your account
				and remove your data from our servers.
			</DialogDescription>
		</DialogHeader>
	</DialogContent>
</Dialog>
