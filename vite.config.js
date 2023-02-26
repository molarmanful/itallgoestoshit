import { svelte } from '@sveltejs/vite-plugin-svelte'
import unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetWebFonts, extractorSvelte } from 'unocss'

export default {
  plugins: [
    unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            mono: 'Martian Mono:200,800',
          },
        }),
      ],
      shortcuts: [
        {
          'fl-center': 'flex justify-center items-center',
          'hw-screen': 'h-screen w-screen',
          'text-body': 'font-mono',
          'text-head': 'font-bold',
          'fade-true': 'opacity-100 pointer-events-auto',
          'fade-false': 'opacity-0 pointer-events-none',
        },
        [/^ofade-([\d]*)$/, ([, c]) => `transition-opacity duration-${c}`],
      ],
      extractors: [extractorSvelte],
    }),
    svelte(),
  ],
  base: '/itallgoestoshit/',
  assetsInclude: 'src/scenes/assets/**'
}
