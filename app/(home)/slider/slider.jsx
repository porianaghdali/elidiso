"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  },[
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]);

  return (
    <div ref={sliderRef} className="keen-slider max-w-[550px]">
      <div className="keen-slider__slide bg-[#1d2030ad] rounded-lg py-6">
        <div className="bg-white text-base font-semibold w-fit px-4 py-1.5 rounded-br rounded-tr text-[#222951]">
          ELSO300
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/SL300.png"
            width={200}
            height={200}
            alt="ELSO300"
            className=""
          />
          <button className="px-6 py-2 text-[#222951] rounded text-sm bg-white">
            see more
          </button>
        </div>
      </div>
      <div className="keen-slider__slide bg-[#1d2030ad] rounded-lg py-6">
        <div className="bg-white text-base font-semibold w-fit px-4 py-1.5 rounded-br rounded-tr text-[#222951]">
          ELSO.xx
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/snl.png"
            width={155}
            height={200}
            alt="ELSO300"
            className=""
          />
          <button className="px-6 py-2 text-[#222951] rounded text-sm bg-white">
            see more
          </button>
        </div>
      </div>
    </div>
  );
}
