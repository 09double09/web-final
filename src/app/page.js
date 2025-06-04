import Image from "next/image";
import backGround from "@/app/imgs/background.png";
import title from "@/app/imgs/title.png";
import Cards from "./components/Cards";
export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <Image
        src={backGround}
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute top-0 left-0 -z-10"
        priority
      />
      <div className="h-28/100 w-full flex items-end justify-center">
        <div className="w-[480px] 2xl:w-[607px] 2xl:h-44">
          <Image src={title} alt="Title" />
        </div>
      </div>
      <div className="w-full h-72/100 flex overflow-x-scroll overflow-y-hidden items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <Cards></Cards>
      </div>
    </div>
  );
}
