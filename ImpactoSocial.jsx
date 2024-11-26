"use client"
import React, {useRef, createContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslations } from "next-intl";


import "swiper/css";
import "swiper/css/navigation";
import "@/app/globals.css"
import Image from "next/image";

const ImpactoSocial = () => {
  const t = useTranslations("Impacto-social")

    const items = [
        {id:1, src:"/assets/impacto/c-hogar.webp", text:t("inic-1")},
        {id:2, src:"/assets/impacto/cero-d.webp", text:t("inic-2")},
        {id:3, src:"/assets/impacto/compostables.webp", text:t("inic-3")},
        {id:4, src:"/assets/impacto/desempeño.webp", text:t("inic-4")},
        {id:5, src:"/assets/impacto/p-mujeres.webp", text:t("inic-5")},
        {id:6, src:"/assets/impacto/reos.webp", text:t("inic-6")},
        {id:7, src:"/assets/impacto/despensas.webp", text:t("inic-7")},

    ]
  return (
    <div className='bg-graybg flex flex-col md:flex-row h-auto md:h-[100vh] pt-[20vh] md:pt-[23vh]'>
        <div className='w-[100%] md:w-[40%] py-10 flex flex-col justify-center items-start px-[10vw]'>
        <h2 className='text-left font-morganite text-[20vw] leading-[18vw] md:text-[10vw] md:leading-[8vw]'>{t("h2-1")} <br /><span className='text-orangeprimary'>{t("h2-2")}</span></h2>
        <p className='text-left text-[4vw] md:text-[1.2vw] font-helony font-light w-[100%] md:w-[80%]'>{t("span")}</p>

        </div>
        <div className='w-[100%] md:w-[60%] relative'>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={110}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}   
          loop={true}
          style={{
            "--swiper-pagination-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-color": "#c3c3c3",
            "--swiper-pagination-bullet-inactive-opacity": ".5",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",

          }}
          modules={[Navigation]}
          className="mySwiper px-2 sm:px-12 lg:px-24"
        >
          {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className={
              "text-orangeprimary !h-[100%] !w-[100%] md:!w-[80%] lg:!w-[60%] !flex !flex-col gap-0 md:gap-5 justify-center !items-center  md:!items-end px-14 md:px-0"}
          >
              <Image
              src={item.src} 
              width="600"
              height="400"
              alt={item.text}
              loading="eager"
              ></Image>
              <span className='text-whitesecondary font-morganite text-[14vw] mt-5 md:mt-0 leading-[12vw] md:text-[4vw] md:leading-[3vw] uppercase'>{item.text}</span>
              
          </SwiperSlide>
        ))}
          </Swiper>
          <button className="hidden !text-orangeprimary arrow-right"></button>
          <button className="absolute arrow-left translate-x-[88vw] translate-y-[-60vw] md:translate-x-[49vw] md:translate-y-[-47vw] lg:translate-x-[37vw] lg:translate-y-[-40vw] xl:translate-x-[33vw] xl:translate-y-[-34vw] z-[100]"><MdKeyboardArrowRight className="text-[10vw] lg:text-[6vw] text-orangeprimary"/></button>

        </div>

        

    </div>
  )
}

export default ImpactoSocial
