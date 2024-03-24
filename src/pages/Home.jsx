import { Link } from "react-router-dom";
import backgroundImage from "../../public/HomePagePics/backgroundImage.svg";
import logo from "../../public/loginpics/logolkc.svg";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import BtechImg from "../../public/HomePagePics/btech.svg";
import BscImg from "../../public/HomePagePics/bsc.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <img
          src={backgroundImage}
          alt="background"
          className="object-cover md:h-auto h-60"
        />
        <div className="absolute left-[50%] top-10 md:w-[45%]   -translate-x-[50%] flex items-center justify-center flex-col gap-y-2 md:gap-y-6">
          <img className="md:w-16 w-8" src={logo} alt="logo" />
          <p className="md:text-5xl text-md w-full text-center text-white font-bold">
            Lyallpur Khalsa College Technical Campus
          </p>
          <p className="text-white">Cantt.Road,Jalandhar</p>
        </div>
        <div className="absolute md:h-[3rem] h-[2rem] md:w-[12rem] w-[10rem] bg-gradient-to-r from-[#0a1f3c]  to-[#275c69] -translate-x-[50%] left-[50%] -bottom-5  flex items-center justify-center rounded-xl text-white md:text-lg text-sm">
          <p>Choose Your Stream</p>
        </div>
      </div>

      <Swiper
        className=" w-[95%] cursor-grab mx-auto my-[3rem] pl-[3rem]"
        // install Swiper modules
        Mousewheel={{
          enabled: true,
          forceToAxis: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        allowSlidePrev={true}
        slidesPerView={4}
        loop={true}
        spaceBetween={10}
        modules={[Mousewheel, Keyboard, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-size": "20px",
        }}
        freeMode={false}
        rewind={false}
        centeredSlides={false}
        navigation={false}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          300: { slidesPerView: 1.1, spaceBetween: 10 },
          640: { slidesPerView: 2.2, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
        }}
      >
        <SwiperSlide>
          <div className="h-[12rem] w-[16rem] bg-red-200 rounded-2xl overflow-hidden ">
            <div className="relative h-[100%] w-[100%]">
              <img src={BtechImg} alt="btech-pic" />
              <div className="absolute h-[1.5rem] bottom-0 left-[50%] -translate-x-[50%] flex items-center justify-center  bg-[#275c69] w-full py-2  z-10"></div>
              <p className="absolute bottom-1 left-[50%] -translate-x-[50%] text-white z-10 font-bold">
                B.Tech
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[12rem] w-[16rem] bg-red-200 rounded-2xl overflow-hidden ">
            <div className="relative h-[100%] w-[100%]">
              <img src={BtechImg} alt="btech-pic" />
              <div className="absolute h-[1.5rem] bottom-0 left-[50%] -translate-x-[50%] flex items-center justify-center  bg-[#275c69] w-full py-2  z-10"></div>
              <p className="absolute bottom-1 left-[50%] -translate-x-[50%] text-white z-10 font-bold">
                Data Science
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[12rem] w-[16rem] bg-red-200 rounded-2xl overflow-hidden">
            <div className="relative h-[100%] w-[100%]">
              <img src={BscImg} alt="btech pic" />
              <div className="absolute h-[1.5rem] bottom-0 left-[50%] -translate-x-[50%] flex items-center justify-center bg-[#275c69] w-full py-2  z-10"></div>
              <p className="absolute bottom-1 left-[50%] -translate-x-[50%] text-white z-10 font-bold">
                B.Sc
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[12rem] w-[16rem] bg-red-200 rounded-2xl overflow-hidden">
            <div className="relative h-[100%] w-[100%]">
              <img src={BtechImg} alt="btech pic" />
              <div className="absolute h-[1.5rem] bottom-0 left-[50%] -translate-x-[50%] flex items-center justify-center bg-[#275c69] w-full py-2  z-10"></div>
              <p className="absolute bottom-1 left-[50%] -translate-x-[50%] text-white z-10 font-bold">
                B.Voc
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[12rem] w-[16rem] bg-red-200 rounded-2xl overflow-hidden">
            <div className="relative h-[100%] w-[100%]">
              <img src={BscImg} alt="btech pic" />
              <div className="absolute h-[1.5rem] bottom-0 left-[50%] -translate-x-[50%] flex items-center justify-center bg-[#275c69] w-full py-2  z-10"></div>
              <p className="absolute bottom-1 left-[50%] -translate-x-[50%] text-white z-10 font-bold">
                Diploma
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomePage;
