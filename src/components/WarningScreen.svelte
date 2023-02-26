<script>
  import TitleScreen from './TitleScreen.svelte'

  export let fade
  export let loaded
</script>

<TitleScreen {fade} {loaded} on:click>
  <h1 text="center head">warning</h1>
  <br />
  <p>contains flashing lights and distorted sounds.</p>
  <p>best experienced with headphones on desktop.</p>
  <br />
  <p text-center animate-pulse>[{loaded ? 'click to continue' : 'loading...'}]</p>
</TitleScreen>
