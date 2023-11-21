import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gubernur = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      <div className="mt-[200px] " data-aos="fade-up">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-col mx-auto pt-5" data-aos="fade-up">
            <h1 className="font-bold text-black text-2xl mb-5">Gubernur Bali</h1>
          </div>
          <div className='lg:flex lg-flex-row lg:my-9 lg:ml-40 lg:gap- ' data-aos="fade-up">
            <div data-aos="fade-up">
              <img src="src/assets/gubernur.jpeg" alt="" className="mx-auto mb-8 lg:flex lg:flex-row lg:w-64" />
              <h1 class="mb-10 text-2xl font-semibold text-black text-center lg:w-max " data-aos="fade-up">Dr. Ir. I Wayan Koster, M.M.</h1>
            </div>
            <div>
              <div className="flex flex-col mx-auto md:ml-12" data-aos="fade-up">
                <h1 className="text-2xl font-medium text-black ml-12 mb-3" data-aos="fade-up">Kelahiran</h1>
                <p className="text-black ml-12 break-words w-9/12 mb-9 lg:w-auto" data-aos="fade-up">20 Oktober 1962 (usia 60 tahun), Singaraja, Buleleng</p>
              </div>
              <div className="flex flex-col mx-auto md:ml-12" data-aos="fade-up">
                <h1 className="text-2xl font-medium text-black ml-12 mb-3" data-aos="fade-up">Jabatan Sebelumnya</h1>
                <p className="text-black ml-12 break-words w-9/12 mb-9 lg:w-auto" data-aos="fade-up">Gubernur Bali (2018–2023), Anggota Dewan Perwakilan Rakyat Republik Indonesia (2004–2018)</p>
              </div>
              <div className="flex flex-col mx-auto md:ml-12" data-aos="fade-up">
                <h1 className="text-2xl font-medium text-black ml-12 mb-3" data-aos="fade-up">Tentang</h1>
                <p className="text-black ml-12 break-words w-9/12 mb-9 " data-aos="fade-up">
                  Dr. Ir. I Wayan Koster, M.M. adalah politikus Indonesia yang menjabat sebagai Gubernur Bali sejak 5 September 2018. Ia pernah menjabat sebagai anggota Dewan Perwakilan Rakyat Republik Indonesia Fraksi Partai Demokrasi
                  Indonesia Perjuangan sejak 1 Oktober 2004 hingga 26 Februari 2018.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gubernur;
