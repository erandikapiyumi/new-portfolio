import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/new-portfolio/', // 👈 මේ ලයින් එක අනිවාර්යයෙන්ම තියෙන්න ඕනේ!
})