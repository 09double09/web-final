import arrow from "@/app/imgs/games/arrow.png";
import bacteria from "@/app/imgs/games/bacteria.png";
import cake from "@/app/imgs/games/cake.png";
import CD from "@/app/imgs/games/CD.png";
import chair from "@/app/imgs/games/chair.png";
import pen from "@/app/imgs/games/pen.png";
import claw from "@/app/imgs/games/claw.png";
import tomato from "@/app/imgs/games/tomato.png";
import joker from "@/app/imgs/games/joker.png";

const games = [
  {
    id: 1,
    name: "標靶射擊遊戲",
    description: "射擊遊戲",
    image: arrow,
    stars: 3,
    url: "https://web-final-project-woad.vercel.app/",
  },
  {
    id: 2,
    name: "椅子大風吹",
    description: "椅子大風吹",
    image: chair,
    stars: 3,

    url: "https://musical-chairs-red.vercel.app/",
  },
  {
    id: 3,
    name: "記憶對對碰",
    description: "記憶對對碰",
    image: joker,
    stars: 1,
    url: "https://final-project-c2h5ohs-projects.vercel.app/",
  },
  {
    id: 4,
    name: "午夜唱片行",
    description: "午夜唱片行",
    image: CD,
    stars: 2,
    url: "https://luowebfinal.vercel.app/croissant",
  },
  {
    id: 5,
    name: "蔬菜守門員",
    description: "蔬菜守門員",
    image: tomato,
    url: "https://vegetable-goalkeeper.vercel.app/",
    stars: 2,
  },
  {
    id: 6,
    name: "夾娃娃",
    description: "夾娃娃",
    image: claw,
    url: "https://childhood-game.vercel.app/",
    stars: 2,
  },
  {
    id: 7,
    name: "紙上大作戰",
    description: "紙上大作戰",
    image: pen,
    url: "https://paper-war-qian-qians-projects.vercel.app/",
    stars: 2,
  },
  {
    id: 8,
    name: "夢色蛋糕師",
    description: "夢色蛋糕師",
    image: cake,
    stars: 2,
  },
  {
    id: 9,
    name: "童年大亂鬥",
    description: "童年大亂鬥",
    image: bacteria,
    url: "https://childhood-battle.vercel.app/",
    stars: 5,
  },
];

export default games;
