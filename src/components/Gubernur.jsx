import React from 'react';
import Accordion from './Accordion';

const Gubernur = () => {
  return (
    <>
      <div className="bg-gray-700 mt-36">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-col mx-auto pt-5">
            <h1 className="font-bold text-white text-2xl">Gubernur Bali</h1>
            <img src="src/assets/gubernur.jpeg" alt="" className="mt-4 mx-auto mb-8 lg:flex lg:flex-row pt-10 " />
          </div>
          <h1 class="mb-20 text-2xl font-semibold text-white mx-auto text-left">Dr. Ir. I Wayan Koster, M.M.</h1>
          <div className="flex flex-col mx-auto md:ml-12">
            <h1 className="text-2xl font-medium text-white ml-12 mb-3">Kelahiran</h1>
            <p className="text-white ml-12 break-all w-9/12 mb-9 lg:w-auto">20 Oktober 1962 (usia 60 tahun), Singaraja, Buleleng</p>
          </div>
          <div className="flex flex-col mx-auto md:ml-12">
            <h1 className="text-2xl font-medium text-white ml-12 mb-3">Jabatan Sebelumnya</h1>
            <p className="text-white ml-12 break-all w-9/12 mb-9 lg:w-auto">Gubernur Bali (2018–2023), Anggota Dewan Perwakilan Rakyat Republik Indonesia (2004–2018)</p>
          </div>
          <div className="flex flex-col mx-auto md:ml-12">
            <h1 className="text-2xl font-medium text-white ml-12 mb-3">Tentang</h1>
            <p className="text-white ml-12 break-all w-9/12 mb-9 ">
              Dr. Ir. I Wayan Koster, M.M. adalah politikus Indonesia yang menjabat sebagai Gubernur Bali sejak 5 September 2018. Ia pernah menjabat sebagai anggota Dewan Perwakilan Rakyat Republik Indonesia Fraksi Partai Demokrasi
              Indonesia Perjuangan sejak 1 Oktober 2004 hingga 26 Februari 2018.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gubernur;
