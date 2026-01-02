import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/EduFy/",   // यहाँ repo का नाम डालना है
  plugins: [react()],
})


