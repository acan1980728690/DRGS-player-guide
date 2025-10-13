import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "玩家攻略",
    prefix: "/guide/",
    children: [
      {
        text: "武器攻略",
        prefix: "weapon/",
        children: ["rank.md",],
      },
    ],
  },
]);
