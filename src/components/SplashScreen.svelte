<script setup>
  import TitleScreen from './TitleScreen.svelte'

  export let fade
  export let loaded
  $: attrs = {
    bg: 'black/80',
  }
</script>

<TitleScreen {attrs} {fade} {loaded} on:click>
  <h1 text="center head">itallgoestoshit</h1>
  <p text-center animate-pulse>
    [{loaded ? 'click to start' : 'loading...'}]
  </p>
</TitleScreen>

<div hidden bg="black/80" />
