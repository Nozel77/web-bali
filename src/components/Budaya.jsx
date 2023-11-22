import React from "react";
import Bali1 from "../assets/sejarah.jpg";
import Bali2 from "../assets/tari.jpg";
import Bali3 from "../assets/kera.jpg";
import Bali4 from "../assets/woman.jpg";
import Bali5 from "../assets/random_2.jpg";
import Bali6 from "../assets/budaya.jpg";

import Bali7 from "../assets/kecak.jpg";
import Bali8 from "../assets/ngaben.jpg";

const Budaya = () => {
  return (
    <div className="bg-white">
      <img
        className="h-96 w-screen object-cover "
        src="https://cdn.pixabay.com/photo/2022/05/14/12/10/temple-7195534_1280.jpg"
      />
      <div className="w-4/5 m-auto">
        <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
          <h1 className="text-4xl font-bold">Culture In Bali</h1>
          <p className="text-sm">
            Tak hanya pariwisatanya, Bali juga dikenal memiliki kebudayaan yang
            masih kuat hingga sekarang. Masih banyak masyarakat yang
            mempertahankan tradisi dan memegang teguh adat istiadat.
          </p>
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-4 w-full h-[300px] md:h-[450px] pb-10 border-b">
          <div className="row-span-1 col-span-2">
            <img
              className="w-full h-full object-cover rounded-md"
              src={Bali1}
              alt=""
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-md"
              src={Bali2}
              alt=""
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-md"
              src={Bali3}
              alt=""
            />
          </div>
          <div className="row-span-2 col-span-1">
            <img
              className="w-full h-full object-cover rounded-md"
              src={Bali4}
              alt=""
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-md"
              src={Bali5}
              alt=""
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-md"
              src={Bali6}
              alt=""
            />
          </div>
        </div>

        <div className="mt-24 pb-24">
          <div className="flex flex-col lg:flex-row lg:gap-24">
            <img
              className="rounded-lg w-[600px] mx-auto object-cover"
              src={Bali8}
              alt=""
            />
            <div className="lg:text-justify lg:w-5/12">
              <div className="mt-7">
                <div className="mt-7 text-center mb-3 lg:text-right">
                  <h1 className="text-2xl lg:text-3xl font-bold ">
                    Upacara Keagamaan Ngaben
                  </h1>
                </div>
                <div className="text-md tracking-wide ">
                  <p>
                    Bali dikenal dengan upacara keagamaan yang kuat dan
                    konsisten. Salah satu upacara yang terkenal adalah upacara
                    Ngaben atau pemakaman Hindu Bali. Ngaben dianggap sebagai
                    salah satu upacara penting untuk membebaskan jiwa yang
                    meninggal dari siklus reinkarnasi. Ini adalah saat di mana
                    jenazah dikremasi dan abunya dihanyutkan ke laut atau sungai
                    sebagai bagian dari proses pembebasan roh.
                  </p>
                  <p>
                    Meskipun ini adalah upacara yang sangat pribadi dan
                    emosional, tetapi beberapa keluarga di Bali bersedia
                    memperbolehkan wisatawan mengamati dengan tata tertentu yang
                    menghormati privasi mereka.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse lg:gap-24 mt-16">
            <img
              className="rounded-lg w-[600px] mx-auto object-cover"
              src={Bali7}
              alt=""
            />
            <div className="lg:text-justify lg:w-5/12">
              <div className="mt-7">
                <div className="mt-7 text-center mb-3 lg:text-left">
                  <h1 className="text-2xl lg:text-3xl font-bold ">
                    Tari Kecak
                  </h1>
                </div>
                <div className="text-md tracking-wide ">
                  <p>
                    Tari Kecak adalah salah satu tarian tradisional yang berasal
                    dari Bali, Indonesia. Tarian ini terkenal karena penggunaan
                    vokal "cak" yang diucapkan bersama oleh sekelompok penari
                    laki-laki yang duduk melingkar. Tari Kecak umumnya ditarikan
                    oleh sekelompok besar penari pria yang mengenakan pakaian
                    tradisional Bali.
                  </p>
                  <p>
                    Tarian Kecak tidak melibatkan penggunaan alat musik seperti
                    gamelan. Sebaliknya, irama dan ritme tarian dihasilkan oleh
                    suara-suara yang dihasilkan oleh kelompok penari yang duduk
                    bersila di lingkaran. Mereka menyerukan "cak" secara
                    bersamaan dengan gerakan tangan dan tubuh yang
                    terkoordinasi. Tarian ini sering kali menggambarkan cerita
                    epik, mitos, atau legenda dari tradisi Hindu, seperti
                    Ramayana.
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

export default Budaya;
