import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "WangWei's Blog.",
  description: "随便写写，慢慢看看～",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangwii' }
    ],

    footer: {
      message: '本站所有内容均采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">知识共享 署名-相同方式共享 4.0 协议</a>.',
      copyright: 'Copyright © 2025-present <a href="https://github.com/wangwii" target="_blank">WangWei</a>',
    },
  }
})
