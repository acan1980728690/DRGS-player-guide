import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "DRGS玩家攻略站",
  description: "游戏《深岩银河：幸存者》的中文攻略站，攻略内容来源于wiki,discord以及玩家编写等",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
