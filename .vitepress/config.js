import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "faebol",
  description: "stories for static site generation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'yocuri.live', link: 'https://yocuri.live' },
      { text: 'empathicide.net', link: 'https://empathicide.yocuri.live' }
    ],

    sidebar: [
      {
        text: 'Autobiography',
        items: [
          { text: 'About', link: '/about/' },
          { text: 'Author', link: '/about/author' }
        ]},
        {
        text: 'Faebol',
        items: [
          { text: 'Features', link: '/features' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yocuri/VPO' }
    ]
  }
})
