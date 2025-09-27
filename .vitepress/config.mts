import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "tigyan blog",
  description: "гойда",
  cleanUrls: true,
  ignoreDeadLinks: true,
  srcDir: 'pages',
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      { text: 'index.md', link: '/' },
      { text: 'about.md', link: 'pages/about' },

      { text: 'projects', items: [
        { text: 'project1.md', link: 'pages/projects/project1' },
        { text: 'project2.md', link: 'pages/projects/project2' }
      ] },

      { text: 'posts', items: [
        { text: 'post1.md', link: 'pages/posts/post1' },
        { text: 'post2.md', link: 'pages/posts/post2' }
      ] },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tigyan' },
      { icon: 'telegram', link: 'https://t.me/tigyan_tim' }
    ]
  }
})