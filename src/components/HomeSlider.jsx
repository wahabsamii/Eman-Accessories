import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Img1 from '../assessts/slide1.webp'
import Img2 from '../assessts/slide2.webp'
function HomeSlider() {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative h-screen w-full bg-cover bg-center justify-start flex items-center"
            style={{ backgroundImage: `url(${Img1})`}}
          >
            <div className="text-white max-w-lg ml-16 flex flex-col items-start justify-start" data-aos="fade-up">
              <h2 className="text-4xl text-left font-semibold mb-4">Lifestyle <br/>Inspiration</h2>
              <p className="text-sm mb-6 text-left">
                Inspire your customers by illustrating a sophisticated lifestyle made
                possible through their purchases on your website.
              </p>
              <button className="px-4 py-2 text-sm rounded-full border border-white hover:bg-white hover:text-black transition">
                DISCOVER COLLECTION
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-screen w-full bg-cover bg-center flex items-center"
             style={{ backgroundImage: `url(${Img2})`}}
          >
            <div className="text-white max-w-lg ml-16 flex flex-col items-start justify-start" data-aos="fade-left">
              <h2 className="text-4xl text-left font-semibold mb-4">Timeless Essence</h2>
              <p className="text-sm text-left mb-6">
                Explore classic pieces with modern touches, designed for a sophisticated
                wardrobe that never goes out of style.
              </p>
              <button className="px-4 py-2 text-sm rounded-full border border-white hover:bg-white hover:text-black transition">
                DISCOVER COLLECTION
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeSlider;
