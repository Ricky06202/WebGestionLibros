// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), svelte(), icon()],
  devToolbar: { enabled: false },
});

