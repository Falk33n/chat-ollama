<script lang="ts">
	import { AppTooltip } from '$components/global';
	import { Button } from '$components/ui/button';
	import { MoonIcon, SunIcon } from 'lucide-svelte';
	import { mode, toggleMode } from 'mode-watcher';

	const label = $derived(
		$mode === 'dark' ? 'Change to light theme' : 'Change to dark theme',
	);
</script>

<AppTooltip content={label}>
	{#snippet trigger({ props: { onclick: _onclick, ...props } })}
		<Button
			onclick={toggleMode}
			variant="outline"
			size="icon"
			aria-label={label}
			{...props}
		>
			<SunIcon
				class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
				aria-hidden
			/>

			<MoonIcon
				class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
				aria-hidden
			/>
		</Button>
	{/snippet}
</AppTooltip>
