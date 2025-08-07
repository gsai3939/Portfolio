import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default {
  base: 'https://github.com/gsai3939/Portfolio', // 
}
export default defineConfig({
  plugins: [react()],
});
