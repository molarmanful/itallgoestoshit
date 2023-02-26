<script>
  export let cl = ''
  export let attrs = {}
</script>

<section
  fl-center
  fixed
  hw-screen
  top-0
  left-0
  bg-black
  text-white
  ofade-500
  on:click
  class={cl}
  {...attrs}
>
  <div max-w="50%">
    <slot />
  </div>
</section>
