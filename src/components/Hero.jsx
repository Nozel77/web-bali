import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://wallpapercrafter.com/desktop1/555509-Indonesia-Bali-Island-Tropical-Nature-Scenery.jpg"
        className="w-full h-full object-cover mt-[68px]"
      />
      <div className="max-w-[1140px] m-auto flex justify-end">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1
            className="font-bold text-4xl shadow-2xl text-right"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            Bali Magis Budaya
          </h1>
          <p data-aos="fade-left" data-aos-delay="1000" className="shadow-2xl text-right">
            Halo! Selamat datang di dunia Bali yang keren! Di sini, kita bakal
            eksplor kebudayaan yang seru, seni keren, dan vibe lokal yang nggak
            bisa dijelaskan! Cuss, kita mulai petualangannya!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
