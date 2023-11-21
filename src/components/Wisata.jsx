import React from "react";
import Bali1 from "../assets/sejarah.jpg";
import Bali2 from "../assets/tari.jpg";
import Bali3 from "../assets/kera.jpg";
import Bali4 from "../assets/woman.jpg";
import Bali5 from "../assets/random_2.jpg";
import Bali6 from "../assets/budaya.jpg";

import Bali7 from "../assets/kecak.jpg";
import Bali8 from "../assets/ngaben.jpg";

const Wisata = () => {
  return (
    <div className="bg-white">
      <img
        className="h-96 w-screen object-cover "
        src="https://www.triplyfe.id/uploads/10-destinasi-wisata-bali-yang-wajib-dikunjungi4.webp"
      />
      <div className="w-4/5 m-auto">
        <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
          <h1 className="text-4xl font-bold">Tour In Bali</h1>
          <p className="text-sm">
            Bali sangat indah dengan wisata alamnya maupun wisata budayanya.
          </p>
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-4 w-full h-[300px] md:h-[450px] pb-10 border-b">
          <div className="row-span-1 col-span-2">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://bafageh.com/uploads/images/blog/816432_bali-indonesia-2.jpg"
              alt=""
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://promotourasia.id/wp-content/uploads/2023/01/chaitanya-maheshwari-HBcnfuzCAPk-unsplash-1024x768.jpg"
              alt=""
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://gdb.voanews.com/D5C00B73-D617-4776-B33A-15F898C7774B_w1200_r1.jpg"
              alt=""
            />
          </div>
          <div className="row-span-2 col-span-1">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://cdn.idntimes.com/content-images/post/20191007/70466328-193686788307387-3256296494570671457-n-49297b0741040cdd68e97a3a300394da.jpg"
              alt=""
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-md"
              src='https://lp-cms-production.imgix.net/2020-12/shutterstockRF_1270999795.jpg'
              alt=""
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-md"
              src='https://img.jakpost.net/c/2017/05/04/2017_05_04_26341_1493864360._large.jpg'
              alt=""
            />
          </div>
        </div>

        <div className="mt-24 pb-24">
          <div className="flex flex-col lg:flex-row lg:gap-24">
            <img
              className="rounded-lg w-[600px] mx-auto object-cover"
              src="https://thumb.viva.co.id/media/frontend/thumbs3/2023/04/10/643395e1b3b9b-pantai-kuta-bali_1265_711.jpg"
              alt=""
            />
            <div className="lg:text-justify lg:w-5/12">
              <div className="mt-7">
                <div className="mt-7 text-center mb-3 lg:text-left">
                  <h1 className="text-2xl lg:text-3xl font-bold ">
                    Pantai Kuta
                  </h1>
                </div>
                <div className="text-md tracking-wide ">
                  <p>
                  Pantai Kuta adalah salah satu pantai yang paling terkenal di Bali, Indonesia. Pantai ini terletak di Kecamatan Kuta, Kabupaten Badung, dan berjarak sekitar 1,5 kilometer dari Bandara Internasional Ngurah Rai.Pantai Kuta memiliki pasir putih yang lembut dan air laut yang jernih. Ombaknya yang besar menjadikan pantai ini sebagai salah satu destinasi wisata surfing terbaik di dunia. Selain itu, pantai ini juga merupakan tempat yang populer untuk berjemur, berenang, dan menikmati matahari terbenam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse lg:gap-24 mt-16">
            <img
              className="rounded-lg w-[600px] mx-auto object-cover"
              src="https://media.cntraveler.com/photos/5c1910eca546ef283d217248/16:9/w_2560,c_limit/GettyImages-692451760.jpg"
              alt=""
            />
            <div className="lg:text-justify lg:w-5/12">
              <div className="mt-7">
                <div className="mt-7 text-center mb-3 lg:text-left">
                  <h1 className="text-2xl lg:text-3xl font-bold ">
                    Gunung Batur
                  </h1>
                </div>
                <div className="text-md tracking-wide ">
                  <p className="mb-2">
                  Gunung Batur adalah gunung berapi aktif yang terletak di Kabupaten Bangli, Bali, Indonesia. Gunung ini memiliki ketinggian 1.717 meter di atas permukaan laut dan merupakan gunung berapi aktif terkecil di Bali.Gunung Batur memiliki kaldera yang luas, dengan diameter sekitar 10 kilometer. Di dalam kaldera tersebut terdapat Danau Batur, yang merupakan danau kaldera terbesar di Bali. Danau ini memiliki kedalaman sekitar 230 meter dan memiliki air yang berwarna biru jernih.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wisata;
