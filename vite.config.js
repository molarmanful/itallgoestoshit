import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetWebFonts } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
        },
        [/^ofade-([\d]*)$/, ([, c]) => `transition-opacity duration-${c}`],
      ],
    })
  ],
  base: '/itallgoestoshit/',
  assetsInclude: 'src/scenes/assets/**'
})
