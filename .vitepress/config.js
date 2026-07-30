import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "faebol",
  description: "stories for static site generation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Faebol', link: '/' },
      { text: 'Author', link: '/author' }
    ],

    sidebar: [
      {
        text: 'Lauren was here',
        items: [
          { text: 'About', link: '/author' },
          { text: 'Features', link: '/features' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yocuri/VPO' }
    ]
  }
})
