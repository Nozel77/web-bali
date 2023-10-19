import React from 'react';

const KhasBali = () => {
  return (
    <>
    <hr className='h-1 bg-black'/>
      <div className="mt-10">
        <h2 className="text-center">Makanan Khas Bali</h2>
        <div className="flex flex-col my-10 ">
          <div className="flex-col">
            <p className="w-11/12 break-words mx-auto text-justify tracking-wide mb-3">
            Betutu merupakan makanan khas Bali. Terbuat dari ayam atau bebek yang dimasak secara utuh menggunakan bumbu rempah khas Bali. Cukup banyak menu Betutu yang bisa ditemukan di Bali, khususnya Denpasar.
            </p>
            <p className='w-11/12 mx-auto text-justify tracking-wide break-words'>Salah satunya, bisa dikunjungi Warung Ayam Betutu Laku di Jalan Letda Regug dekat dengan lapangan Puputan Badung. Untuk satu porsinya, ayam betutu bersanding dengan sambal matah (sambal mentah yang terbuat dari bawang merah, cabe dan minyak), sayur toge dan kacang panjang, telur rebus, kacang tanah renyah, serta mentimun sebagai penyegar. Bagi yang suka kerenyahan, bisa juga ditambah dengan sebungkus kerupuk udang.</p>
          </div>
          <div className='flex-col my-16'>
            <img src="src/assets/culinary/ayambetutu.jpg" alt=""  />
          </div>
        </div>
      </div>
    </>
  );
};

export default KhasBali;
