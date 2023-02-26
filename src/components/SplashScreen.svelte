<script setup>
  import TitleScreen from './TitleScreen.svelte'

  export let fade = true
  export let loaded = false
  $: attrs = {
    bg: 'black/80',
    opacity: fade * 100,
    cursor: loaded ? 'pointer' : 'default',
    'pointer-events': fade ? 'auto' : 'none',
  }
</script>

<TitleScreen {attrs} on:click>
  <h1 text="center head">itallgoestoshit</h1>
  <p text-center animate-pulse>
    [{loaded ? 'click to start' : 'loading...'}]
  </p>
</TitleScreen>

<div hidden bg="black/80" />
