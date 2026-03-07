import comp from "F:/the-infinite-hierarchy-source-code/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"house\",\"title\":\"主页\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/6-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/6-dark.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroText\":\"The Infinite Hierarchy\",\"tagline\":\"分析超越认知的强大。\",\"actions\":[{\"text\":\"使用指南\",\"icon\":\"lightbulb\",\"link\":\"./demo/\",\"type\":\"primary\"},{\"text\":\"文档\",\"link\":\"./guide/\"}],\"copyright\":false,\"footer\":\"使用 <a href=\\\"https://theme-hope.vuejs.press/zh/\\\" target=\\\"_blank\\\">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2019-至今 Mr.Hope\",\"description\":\"设定讨论群：1084030319\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"主页\\\",\\\"description\\\":\\\"设定讨论群：1084030319\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"The Infinite Hierarchy\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"设定讨论群：1084030319\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.3,\"words\":89},\"filePathRelative\":\"README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
