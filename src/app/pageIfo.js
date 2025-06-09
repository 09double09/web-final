import arrow from "@/app/imgs/games/arrow.png";
import bacteria from "@/app/imgs/games/bacteria.png";
import cake from "@/app/imgs/games/cake.png";
import CD from "@/app/imgs/games/CD.png";
import chair from "@/app/imgs/games/chair.png";
import pen from "@/app/imgs/games/pen.png";
import claw from "@/app/imgs/games/claw.png";
import tomato from "@/app/imgs/games/tomato.png";
import joker from "@/app/imgs/games/joker.png";
import bomb from "@/app/imgs/games/bomb.png";

const games = [
  {
    id: 1,
    name: "標靶射擊遊戲",
    //遊戲介紹
    description:
      "這是一款童年風格的射擊遊戲，玩家需在 60 秒內點擊畫面中出現的不同標靶來得分。普通靶可獲得 1 分、黃金靶加 5 分，而炸彈靶會扣 3 分。標靶會左右滑動，並隨機生成，考驗玩家的反應力與準確度！",
    image: arrow,
    //卡牌星星數
    stars: 3,
    //遊戲連結
    url: "https://web-final-project-woad.vercel.app/",
  },
  {
    id: 2,
    name: "椅子大風吹",
    description:
      "音樂會隨機停止，你必須在限定秒數內點擊椅子，挑戰三種難度，每關越來越急！撐過60秒，你就是本場椅子之王 👑！\n考驗反射神經、測試手速極限，看看誰才是最會搶椅子的狠角色！",
    image: chair,
    stars: 3,

    url: "https://musical-chairs-yzc.vercel.app",
  },
  {
    id: 3,
    name: "記憶對對碰",
    description:
      "歡迎來到「記憶對對碰」的復古小吃卡牌世界！在這裡，你將翻開各種復古小吃的卡牌並配對，考驗自己的觀察力與記憶力。從簡單到困難，每一個難度都是一次腦力的小冒險和童年回憶。快來挑戰自我，成為最強的記憶高手！",
    image: joker,
    stars: 1,
    url: "https://final-project-c2h5ohs-projects.vercel.app/",
  },
  {
    id: 4,
    name: "午夜唱片行",
    description:
      "店裡的七個區域，都各自陳列著你的童年選曲。\n隨著一步步探索、選擇，\n發現這些音軌也逐漸拼湊出兒時的旋律。你所拾起的音頻，也慢慢拼湊童年的共振樂曲。",
    image: CD,
    stars: 2,
    url: "https://luowebfinal.vercel.app/croissant",
  },
  {
    id: 5,
    name: "蔬菜守門員",
    description:
      "你是一名蔬菜守門員，負責將傳送帶上的蔬菜與水果分門別類。拍打按鈕加速輸送帶，並用鏟子把非蔬菜通通打爛，讓真正的蔬菜順利通過！",
    image: tomato,
    url: "https://vegetable-goalkeeper.vercel.app/",
    stars: 2,
  },
  {
    id: 6,
    name: "拯救兔兔大作戰",
    description:
      "可愛的兔兔們被困在冰冷的娃娃機裡，等著你來拯救他們！你將在限時內操作夾娃娃機，靠技術與運氣把兔兔一一解救出來。\n進入遊戲挑戰你的反應力與準確度，成為兔兔們的英雄吧！",
    image: claw,
    url: "https://childhood-game.vercel.app/",
    stars: 2,
  },
  {
    id: 7,
    name: "紙上大作戰",
    description: "躍進紙上世界，準備好用你手上的鉛筆，對付不斷滋生的敵人吧！",
    image: pen,
    url: "https://paper-war-qian-qians-projects.vercel.app/",
    stars: 2,
  },
  {
    id: 8,
    name: "夢色蛋糕師",
    description:
      "夢色蛋糕師是一款療癒系手作小遊戲。\n挑選蛋糕底、擠上香濃奶油、點綴新鮮櫻桃，\n簡單三步驟，打造屬於你的夢幻甜點。\n輕鬆操作，隨心創作，快來體驗甜甜的手作時光吧！",
    image: cake,
    stars: 2,
    url: "https://v0-new-project-4rnm6olqhq5.vercel.app",
  },
  {
    id: 9,
    name: "童年大亂鬥",
    description:
      "隨機出現的圖片與文字題，帶你穿越到美好的童年回憶📺\n每題限時 5 秒作答，反應太慢就 Game Over！\n\n你能在 10 題內正確答對幾題，成為童年記憶王者嗎？\n快來挑戰童年知識力，看誰才是真正的回憶大魔王👾！",
    image: bacteria,
    url: "https://childhood-battle.vercel.app/",
    stars: 5,
  },
  {
    id: 10,
    name: "砲塔守衛戰",
    description:
      "操控砲台，擊落在天上投放炸彈的鳥，順便閃躲炸彈及自己失誤的子彈！",
    image: bomb,
    url: "https://heresthebomb.zeabur.app",
    stars: 5,
  },
];

export default games;
