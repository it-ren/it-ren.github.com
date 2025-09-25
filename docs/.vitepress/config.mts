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
    ]
  }
})
