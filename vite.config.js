// import module from 'next-images'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// module.exports = {
//   images: {
//     localPatterns: [
//       {
//         pathname: './images/**',
//         search: '',
//       },
//     ],
//   },
// };