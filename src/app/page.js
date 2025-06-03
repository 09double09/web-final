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
        <div className="w-[607px] h-44 ">
          <Image src={title} alt="Title" />
        </div>
      </div>
      <div className="h-72/100 w-full ">
        <Cards></Cards>
      </div>
    </div>
  );
}
