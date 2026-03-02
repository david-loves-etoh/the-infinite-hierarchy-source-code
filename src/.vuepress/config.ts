import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "The Infinite Hierarchy",
  description: "The Infinite Hierarchy设定集",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
