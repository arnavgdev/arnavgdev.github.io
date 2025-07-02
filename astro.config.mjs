// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "static",

  // ← important
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        mdi: ["*"], // This loads all mdi icons
      },
    }),
  ],
});