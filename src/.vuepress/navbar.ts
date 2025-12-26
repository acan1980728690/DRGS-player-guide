import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "玩家攻略",
    prefix: "/guide/",
    children: [
      "resource.md",
      "weapon/README.md",
      "creature/README.md",
      "biome/README.md",
    ],
  },
]);
