import react from "@heroicons/react";
import Bali1 from "../assets/sejarah.jpg"
import Bali2 from "../assets/budaya.jpg"

const Ekonomi = () => {
    return (
        <div className='w-full h-[70vh]'>
        <img
          src='src/assets/background.jpg'
          className='w-full h-full object-cover'
        />
        <div className='max-w-[1140px] m-auto'>
          <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <h1 className='font-bold text-4xl'>Bali Banyak Bulenya</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              doloribus totam dicta ab ratioe ne. Explicabo eveniet dolor, omnis in
              recusandae temporibus suscipit cum nihil officia deserunt possimus
              saepe praesentium accusamus!
            </p>
          </div>
        </div>
        <div className="mx-24 my-16">
            <h1 className="mt-10 font-bold text-center text-5xl">PEREKONOMIAN PROVINSI BALI</h1>
            <p className="mt-2 text-center text-2xl">LAPORAN PEREKONOMIAN PROVINSI BALI FEBRUARI 2022</p>
            
            <div className="flex items-center justify-between mt-[4.5rem]">
                <div className="w-[45%] text-start text-[1.1rem]">
                    <h2 className="pb-4">PERTUMBUHAN EKONOMI TRIWULAN IV 2021 DAN KESELURUHAN TAHUN 2021</h2>
                    <p>Momentum perbaikan ekonomi Bali berlanjut pada triwulan IV 2021. Ekonomi Bali tumbuh sebesar 0,51% (yoy), lebih tinggi dibandingkan kinerja triwulan sebelumnya yang terkontraksi -2,91% (yoy). Perbaikan tersebut sejalan dengan proses pemulihan aktivitas ekonomi domestik yang tercermin pada peningkatan mobilitas masyarakat pasca pelonggaran kebijakan Pemberlakuan Pembatasan Kegiatan Masyarakat (PPKM) dan penyelenggaraan beberapa event internasional di akhir tahun. Dari sisi pengeluaran, membaiknya pertumbuhan ekonomi terutama bersumber dari kinerja konsumsi rumah tangga (RT) dan ekspor luar negeri. Sementara itu, dari sisi lapangan usaha (LU), perbaikan ekonomi Bali didorong oleh perbaikan beberapa kinerja LU utama (Akmamin, Pertanian, Perdagangan, Industri Pengolahan, dan Transportasi).</p>
                </div>
                <div className="relative w-6/12 flex justify-between z-[-99]">
                    <img className="w-[49%] h-[350px] object-cover shadow-[-1px_1px_62px_-18px] rounded-md " src={Bali1} alt="img" />
                    <img className="w-[49%] h-[350px] object-cover shadow-[-1px_1px_62px_-18px] rounded-md " src={Bali2} alt="img" />
                </div>
            </div>
        </div>
        <div className="mx-24 my-16">
            <div className="flex items-center justify-between">
                <div className="relative w-6/12 flex justify-between z-[-99]">
                    <img className="w-[49%] h-[350px] object-cover shadow-[-1px_1px_62px_-18px] rounded-md" src={Bali1} alt="img" />
                    <img className="w-[49%] h-[350px] object-cover shadow-[-1px_1px_62px_-18px] rounded-md" src={Bali2} alt="img" />
                </div>
                <div className="w-[45%] text-start text-[1.1rem]">
                    <h2 className="pb-4">PERKEMBANGAN KEUANGAN PEMERINTAH</h2>
                    <p>Realisasi belanja dan transfer pemerintah (APBD dan APBN) di Bali selama tahun 2021 tercatat sebesar Rp35,42 triliun, tumbuh 1,52% dibandingkan dengan tahun sebelumnya, terutama berasal dari realisasi belanja modal APBN. Sementara realisasi belanja dan transfer pada kategori APBD masih terbatas, terutama tidak terlepas dari kebijakan PPKM pada beberapa periode selama tahun 2021 yang menyebabkan penundaan sejumlah kegiatan Pemerintah Daerah. Di sisi lain, realisasi pendapatan daerah se-Bali secara agregat masih mengalami kontraksi, yang diakibatkan oleh masih terbatasnya serapan sebagian besar komponen pajak dan retribusi, khususnya komponen yang berhubungan dengan LU terkait pariwisata.</p>
                </div>
            </div>
        </div>
      </div>
      
    );
  };
  
  export default Ekonomi;