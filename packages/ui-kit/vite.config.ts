import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/index.ts",
      fileName: "index",
      formats: ["es"]
    }
  },
  plugins: [
    dts({
      rollupTypes: true,
      // include: ['./lib']
    })
  ],
});
