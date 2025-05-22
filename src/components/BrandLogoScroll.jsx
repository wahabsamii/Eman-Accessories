import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import logo1 from '../assessts/logo1.webp'
import logo2 from '../assessts/logo2.webp'
import logo3 from '../assessts/logo3.webp'
import logo4 from '../assessts/logo4.webp'
import logo5 from '../assessts/logo4.webp'

const BrandLogoScroll = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="relative w-full bg-white py-6 pt-10 pb-10 border-t-2 border-t-gray-300 mt-20">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img src={logo} alt={`Brand ${index + 1}`} className="h-12" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button ref={prevRef} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10">
        <FaChevronLeft className="text-gray-600" />
      </button>
      <button ref={nextRef} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10">
        <FaChevronRight className="text-gray-600" />
      </button>
    </div>
  );
};

export default BrandLogoScroll;



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import logo1 from '../assessts/logo1.webp'
// import logo2 from '../assessts/logo2.webp'
// import logo3 from '../assessts/logo3.webp'
// import logo4 from '../assessts/logo4.webp'
// const BrandLogoScroll = () => {
//   const logos = [
//     logo1,
//     logo2,
//     logo3,
//     logo4,
//   ];

//   return (
//     <div className="relative w-full bg-white py-6">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         slidesPerView={4}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         breakpoints={{
//           320: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//         }}
//       >
//         {logos.map((logo, index) => (
//           <SwiperSlide key={index} className="flex justify-center">
//             <img src={logo} alt={`Brand ${index + 1}`} className="h-12" />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
//         <FaChevronLeft className="text-gray-600" />
//       </button>
//       <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
//         <FaChevronRight className="text-gray-600" />
//       </button>
//     </div>
//   );
// };

// export default BrandLogoScroll;
