import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "WangWei's Blog.",
  description: "随便写写，慢慢看看～",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AI LLMs', link: '/ai-learn' }
    ],

    sidebar: [
      {
        text: 'AI LLMs',
        items: [
          { text: 'AI Agent 构建方法概述', link: '/ai-learn/ai-agent构建方法及技术' },
          { text: '从提示词到上下文工程', link: '/ai-learn/从提示词到上下文工程' },
          { text: '提示链模式概述', link: '/ai-learn/prompt-chaining-pattern-overview' },
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
