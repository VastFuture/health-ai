import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Health AI',
  description: '大健康 AI 知识库',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    ['link', { rel: "icon", type: "image/png", href: "/favicon.png" }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '概览', link: '/md/overview' },
    ],
    sidebar: [
      {
        text: '概览',
        items: [
          { text: '关于', link: '/md/overview' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/VastFuture/health-ai' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present VastFuture'
    },
  },
});