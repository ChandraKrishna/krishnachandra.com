import type { Config } from 'tailwindcss';
export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { ink: '#07111f', royal: '#2563eb', cyanx: '#22d3ee' } } },
  plugins: []
} satisfies Config;
