"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import cardsInfo from "@/app/pageIfo";
import startIcon from "@/app/imgs/startIcon.svg";
import rightArrow from "@/app/imgs/rightArrow.svg";
import emptyStar from "@/app/imgs/emptyStar.svg";
import fullStar from "@/app/imgs/star.svg";
import Link from "next/link";

const Cards = () => {
  return (
    <div className="w-full h-full flex overflow-x-scroll items-center gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      {cardsInfo.map((item) => {
        return <Card key={item.id} item={item}></Card>;
      })}
    </div>
  );
};

const Card = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const startNum = item.stars;
  const contentRef = useRef(null);
  const [starList, setStarList] = useState([false, false, false, false, false]);
  const [isTopCenter, setIsTopCenter] = useState(true);
  useEffect(() => {
    setStarList((prev) => {
      const newStarList = [...prev];
      for (let i = 0; i < startNum; i++) {
        newStarList[i] = true;
      }
      return newStarList;
    });
  }, [startNum]);

  useEffect(() => {
    if (!isHover) {
      const timeout = setTimeout(() => {
        // setIsTopCenter(true);
        return clearTimeout(timeout);
      }, 200);
    }
  }, [isHover]);
  return (
    <div
      className={`${
        isHover ? "w-[560px]" : "w-80"
      } relative bg-white rounded-[20px] outline outline-[3px] outline-offset-[-1.50px] outline-stone-200 transition-all duration-200 `}
      style={{
        padding: "16px",
      }}
    >
      <div
        className={`flex flex-col ${
          isTopCenter ? "items-center" : ""
        } transition-all duration-200`}
        ref={contentRef}
      >
        <div className="flex  transition-all duration-200">
          {/* 圖片 */}
          <div className="flex flex-col items-center relative transition-all duration-200">
            <Image
              src={item.image}
              alt={item.name}
              className="rounded-[20px] border-[3px] max-w-72 border-stone-200"
            />
            <div className="absolute text-center bottom-4 justify-start text-neutral-500 text-3xl font-semibold font-['Inter'] tracking-[3.08px]">
              {item.name}
            </div>
          </div>

          <div
            className={`flex flex-col gap-4 transition-all duration-200 ${
              isHover ? "opacity-100 w-52" : "opacity-0 w-0"
            }`}
            style={{
              marginLeft: isHover ? "16px" : "0px",
              visibility: isHover ? "visible" : "hidden",
              transition: "width 0.2s ease-in-out, opacity 0.2s ease-in-out",
            }}
          >
            <div className=" w-52 h-16 relative flex flex-col bg-white rounded-[20px] outline outline-[3px] outline-offset-[-3px] outline-stone-200 overflow-hidden">
              <div className="left-[38px] top-[20px] absolute inline-flex justify-start items-center gap-[5.08px]">
                <div className="flex gap-1.25 items-center justify-center">
                  {starList.map((star, index) => {
                    return (
                      <Image
                        src={star ? fullStar : emptyStar}
                        key={index}
                        alt="star"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" w-52 h-full relative bg-white rounded-[20px] outline outline-[3px] outline-offset-[-3px] outline-stone-200 overflow-hidden">
              <div className="w-44 left-[18px] top-[29px] absolute justify-start text-neutral-500 text-base font-semibold font-['Inter'] tracking-widest">
                遊戲簡介哈哈哈啊哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-3 w-full transition-all duration-200"
          style={{ padding: "16px 0px" }}
        >
          <StartButton
            isHover={isHover}
            setIsHover={setIsHover}
            setIsTopCenter={setIsTopCenter}
            url={item.url}
          ></StartButton>

          {!isHover && (
            <div
              className={`w-16.5 h-13 bg-[#F7CB82] rounded-full flex items-center justify-center relative`}
              onMouseEnter={() => {
                setIsHover(true);
                setIsTopCenter(false);
              }}
              // onMouseLeave={() => {setIsHover(false)}}
            >
              <Image src={rightArrow} className="absolute" alt="rightArrow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StartButton = ({ isHover, setIsHover, url, setIsTopCenter }) => {
  return (
    <div className="w-full ">
      <div
        className={`${
          isHover ? "w-full" : "w-56"
        } h-14 py-2  bg-[#D68E66] rounded-[20px] outline outline-[3px] outline-offset-[-3px] outline-[#C48967] inline-flex justify-center items-center gap-2.5 overflow-hidden transition-all duration-200 cursor-pointer
      select-none`}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <Image src={startIcon} alt="startIcon" />
        <Link
          href={url || "/"}
          className="justify-start text-white text-3xl font-semibold font-['Inter']"
        >
          start
        </Link>
        <Image src={startIcon} alt="startIcon" />
      </div>
    </div>
  );
};
export default Cards;
