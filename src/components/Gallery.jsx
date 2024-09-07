import React from 'react';
import Slider from 'react-slick';

const Gallery = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1665,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
            {
                breakpoint: 1536,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div>
          <div className="flex flex-col gap-4 ">
            <Slider {...settings}>
            <div>
              <img className="w-full h-full object-cover p-2" src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/bisnisbandung/2022/02/2-4.jpg" alt="/" />
            </div>
            <div>
              <img className="w-full h-full object-cover p-2" src="https://cdn.antaranews.com/cache/1200x800/2022/01/04/Barong-Bali-Unjuk-Gigi-ke-Pengunjung-Expo-2020-Dubai-di-Paviliun-ASEAN.jpg" alt="/" />
            </div>
            <div>
              <img className="w-full h-full object-cover p-2" src="https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/kenali-warisan-budaya-asli-bali-dengan-berkunjung-ke-desa-ini/ukiran.jpg" alt="/" />
            </div>
            <div>
              <img className="w-full h-full object-cover p-2" src="https://southeastasiabackpacker.com/wp-content/uploads/2022/10/Bali-dance.jpg" alt="/" />
            </div>
            <div>
              <img className="w-full h-full object-cover p-2" src="https://markastravel.com/wp-content/uploads/2023/03/wisata-budaya-Bali.jpg" alt="/" />
            </div>
            </Slider>
          </div>
        
      </div>
    </div>
  );
};

export default Gallery;
