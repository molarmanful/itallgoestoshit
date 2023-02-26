<script>
  import TitleScreen from './TitleScreen.svelte'

  export let fade = true
  $: attrs = {
    opacity: fade * 100,
    cursor: 'pointer',
    'pointer-events': fade ? 'auto' : 'none',
  }
</script>

<TitleScreen {attrs} on:click>
  <h1 text="center head">warning</h1>
  <br />
  <p>contains flashing lights and distorted sounds.</p>
  <p>best experienced with headphones on desktop.</p>
  <br />
  <p text-center animate-pulse>[click to continue]</p>
</TitleScreen>
