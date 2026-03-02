import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "设定集",
      icon: "laptop-code",
      prefix: "oc-list/",
      link: "oc-list/",
      children: "structure",
    },
  ],
});
