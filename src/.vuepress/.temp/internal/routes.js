export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/the-infinite-hierarchy/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页","icon":"house"} }],
  ["/oc-list/oc-chart.html", { loader: () => import(/* webpackChunkName: "oc-list_oc-chart.html" */"F:/the-infinite-hierarchy/src/.vuepress/.temp/pages/oc-list/oc-chart.html.js"), meta: {"title":"原创角色列表","icon":"file","order":1} }],
  ["/oc-list/", { loader: () => import(/* webpackChunkName: "oc-list_index.html" */"F:/the-infinite-hierarchy/src/.vuepress/.temp/pages/oc-list/index.html.js"), meta: {"title":"宇宙学设定","icon":"file"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/the-infinite-hierarchy/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
