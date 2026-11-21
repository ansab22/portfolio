import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 127.0.0.1 avoids the Windows "localhost → IPv6" connection-refused issue;
  // open: true launches the browser automatically on `npm run dev`.
  server: { host: '127.0.0.1', port: 5173, open: true },
})
