import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    manifest: {
      display: 'standalone',
      name: 'Czółko by MD',
      short_name: 'Czółko',
      description: 'Czółko by MD',
      theme_color: '#1693f9',
      orientation: 'landscape',
      lang: 'pl',
      scope: '/'
    }
  })]
})
