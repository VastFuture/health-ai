import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import { generateSidebar, generateNavItems, generateSidebarMappingForSubdirectories } from './sidebar.js'

export default defineConfig({
  ignoreDeadLinks: true,
  base: '/health-ai/',
  title: 'Health AI',
  description: '大健康知识库：养生保健、疾病预防、健康管理',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    ['link', { rel: "icon", type: "image/png", href: "/favicon.png" }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '收录文章', link: '/md/articles/' },
      { text: '养生保健', link: '/md/health/' },
      { text: '疾病预防', link: '/md/disease/' },
      { text: '健康管理', link: '/md/lifestyle/' },
    ],
    sidebar: {
      '/md/': generateSidebar('docs/md', '/md/'),
      ...generateSidebarMappingForSubdirectories('docs/md', '/md/')
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/VastFuture/health-ai' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present VastFuture'
    },
  },
});