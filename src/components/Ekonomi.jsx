import React from "react";
import Bali1 from "../assets/sejarah.jpg";
import Bali2 from "../assets/budaya.jpg";

const Ekonomi2 = () => {
  return (
    <div className="bg-white">
      <div>
        <img
          className="h-96 w-full object-cover "
          src="src/assets/background.jpg"
        />
        <div className="absolute top-48 text-white text-left px-8">
          <h1 className="text-2xl font-bold">Bali Banyak Bulenya</h1>
          <p className="text-md md:w-7/12  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            doloribus totam dicta ab ratioe ne. Explicabo eveniet dolor, omnis
            in recusandae temporibus suscipit cum nihil officia deserunt
            possimus saepe praesentium accusamus!
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-center font-bold text-xl mt-14 mx-auto md:text-5xl">
            PEREKONOMIAN PROVINSI BALI
          </h1>
          <h2 className="text-center text-sm font-normal md:text-2xl">
            LAPORAN PEREKONOMIAN PROVINSI BALI FEBRUARI 2022
          </h2>
        </div>
        <div className="flex l flex-col-reverse lg:flex-row lg:mt-14">
          <div className="px-7 lg:w-11/12">
            <h2 className="w-11/12 text-sm font-bold mt-6 lg:text-2xl">
              PERTUMBUHAN EKONOMI TRIWULAN IV 2021 DAN KESELURUHAN TAHUN 2021
            </h2>
            <p className="mt-1 lg:text-md">
              Momentum perbaikan ekonomi Bali berlanjut pada triwulan IV 2021.
              Ekonomi Bali tumbuh sebesar 0,51% (yoy), lebih tinggi dibandingkan
              kinerja triwulan sebelumnya yang terkontraksi -2,91% (yoy).
              Perbaikan tersebut sejalan dengan proses pemulihan aktivitas
              ekonomi domestik yang tercermin pada peningkatan mobilitas
              masyarakat pasca pelonggaran kebijakan Pemberlakuan Pembatasan
              Kegiatan Masyarakat (PPKM) dan penyelenggaraan beberapa event
              internasional di akhir tahun. Dari sisi pengeluaran, membaiknya
              pertumbuhan ekonomi terutama bersumber dari kinerja konsumsi rumah
              tangga (RT) dan ekspor luar negeri. Sementara itu, dari sisi
              lapangan usaha (LU), perbaikan ekonomi Bali didorong oleh
              perbaikan beberapa kinerja LU utama (Akmamin, Pertanian,
              Perdagangan, Industri Pengolahan, dan Transportasi).
            </p>
            <p className="mt-1 lg:text-md">
              Secara keseluruhan 2021, kinerja perekonomian Bali membaik
              meskipun masih tertahan di tengah berlanjutnya pandemi COVID-19.
              Perbaikan tidak terlepas dari pelaksanaan program vaksinasi yang
              berjalan on-track, serta perbaikan aktivitas pariwisata yang
              didorong oleh wisatawan nusantara. Di sisi lain, tertahannya
              kinerja perekonomian Bali tidak terlepas dari masih terbatasnya
              kunjungan wisatawan mancanegara sebagai dampak dari kebijakan
              travel restriction.
            </p>
          </div>
          <div className="mt-2 lg:flex flex-row gap-8 lg:m-0 lg:ml-16 lg:mt-9">
            <img
              className="mx-auto my-3 w-10/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 "
              src={Bali1}
              alt="img"
            />
            <img
              className="mx-auto w-10/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 lg:my-3"
              src={Bali2}
              alt="img"
            />
          </div>
        </div>
        <div className="flex l flex-col-reverse lg:flex-row-reverse lg:mt-16">
          <div className="px-7 lg:w-11/12">
            <h2 className="w-11/12 text-sm font-bold mt-6 lg:text-2xl">
              PERTUMBUHAN EKONOMI TRIWULAN IV 2021 DAN KESELURUHAN TAHUN 2021
            </h2>
            <p className="mt-1 lg:text-md">
              Realisasi belanja dan transfer pemerintah (APBD dan APBN) di Bali
              selama tahun 2021 tercatat sebesar Rp35,42 triliun, tumbuh 1,52%
              dibandingkan dengan tahun sebelumnya, terutama berasal dari
              realisasi belanja modal APBN. Sementara realisasi belanja dan
              transfer pada kategori APBD masih terbatas, terutama tidak
              terlepas dari kebijakan PPKM pada beberapa periode selama tahun
              2021 yang menyebabkan penundaan sejumlah kegiatan Pemerintah
              Daerah. Di sisi lain, realisasi pendapatan daerah se-Bali secara
              agregat masih mengalami kontraksi, yang diakibatkan oleh masih
              terbatasnya serapan sebagian besar komponen pajak dan retribusi,
              khususnya komponen yang berhubungan dengan LU terkait pariwisata.
            </p>
          </div>
          <div className="mt-2 lg:flex flex-row gap-8 lg:m-0 lg:ml-16 lg:mt-5">
            <img
              className="mx-auto my-3 w-10/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 "
              src={Bali1}
              alt="img"
            />
            <img
              className="mx-auto w-10/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 lg:my-3"
              src={Bali2}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ekonomi2;
