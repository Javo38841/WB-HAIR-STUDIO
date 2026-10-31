import { defineConfig } from 'astro/config';

// Con dominio propio el sitio va en la raíz: no lleva `base`.
export default defineConfig({
  site: 'https://wbhairstudio.gitflow.cl',
  devToolbar: { enabled: false },
});
