import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import githubDarkTheme from 'shiki-themes/data/github-dark.json'
import githubLightTheme from 'shiki-themes/data/github-light.json'
import mdx from '@astrojs/mdx';

const darkTheme = {
  ...githubDarkTheme,
  colors: {
    ...githubDarkTheme.colors,
    'editor.background': '#1E1E1E'
  }
}

const lightTheme = {
  ...githubLightTheme,
  colors: {
    ...githubLightTheme.colors,
    'editor.background': '#F5F5F5'
  }
}


// https://astro.build/config
export default defineConfig({
  site: 'https://millan-castro.xyz/',
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        dark: darkTheme,
        light: lightTheme,
      },
    }
  },
});