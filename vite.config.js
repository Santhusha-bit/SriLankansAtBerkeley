import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages: base must match repo name for project sites
export default defineConfig({
  plugins: [react()],
  base: '/',        //For github pages '/SriLankansAtBerkeley/'
})
