import React from "react";
import Image from "next/image";
import cardsInfo from "@/app/pageIfo";
const Cards = () => {
  return (
    <div className="w-full h-full flex overflow-x-scroll items-center gap-4">
      {cardsInfo.map((item) => {
        return <Card key={item.id} item={item}></Card>;
      })}
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className=" p-4 w-77 h-[476px] relative bg-white rounded-[20px] outline outline-[3px] outline-offset-[-1.50px] outline-stone-200 ">
      <div className="flex flex-col">
        <div>
          <div className="flex flex-col items-center relative">
            <Image
              src={item.image}
              alt={item.name}
              width={276}
              className="rounded-[20px] border-[3px] border-stone-200"
            />
            <div className=" absolute text-center justify-start text-neutral-500 text-3xl font-semibold font-['Inter'] tracking-[3.08px]">
              {item.name}
            </div>
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Cards;
