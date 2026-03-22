export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/the-infinite-hierarchy-source-code/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页","icon":"house"} }],
  ["/oc-list/cosmology.html", { loader: () => import(/* webpackChunkName: "oc-list_cosmology.html" */"F:/the-infinite-hierarchy-source-code/src/.vuepress/.temp/pages/oc-list/cosmology.html.js"), meta: {"title":"宇宙学设定","icon":"file","order":1} }],
  ["/oc-list/ggg.html", { loader: () => import(/* webpackChunkName: "oc-list_ggg.html" */"F:/the-infinite-hierarchy-source-code/src/.vuepress/.temp/pages/oc-list/ggg.html.js"), meta: {"title":"自创记号列表","icon":"file","order":2} }],
  ["/oc-list/oc-chart.html", { loader: () => import(/* webpackChunkName: "oc-list_oc-chart.html" */"F:/the-infinite-hierarchy-source-code/src/.vuepress/.temp/pages/oc-list/oc-chart.html.js"), meta: {"title":"原创角色列表","icon":"file","order":4} }],
  ["/oc-list/ordinals.html", { loader: () => import(/* webpackChunkName: "oc-list_ordinals.html" */"F:/the-infinite-hierarchy-source-code/src/.vuepress/.temp/pages/oc-list/ordinals.html.js"), meta: {"title":"自创序数列表","icon":"file","order":3} }],
  ["/oc-list/", { loader: () => import(/* webpackChunkName: "oc-list_index.html" */"F:/the-infinite-hierarchy-source-code/src/.vuepress/.temp/pages/oc-list/index.html.js"), meta: {"title":"设定","icon":"file"} }],
  ["/oc-list/sandbox.html", { loader: () => import(/* webpackChunkName: "oc-list_sandbox.html" */"F:/the-infinite-hierarchy-source-code/src/.vuepress/.temp/pages/oc-list/sandbox.html.js"), meta: {"title":"🔒沙盒","icon":"file","order":5} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/the-infinite-hierarchy-source-code/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
