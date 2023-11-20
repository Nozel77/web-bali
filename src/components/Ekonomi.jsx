import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Bali1 from "../assets/sejarah.jpg";
import Bali2 from "../assets/budaya.jpg";

const Ekonomi2 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="bg-white">
      <div>
        <img
          className="h-96 w-full object-cover "
          src="src/assets/economy.jpg"
        />
        {/* <div className="absolute top-48 text-white text-left px-8">
          <h1 className="text-2xl font-bold">Bali Banyak Bulenya</h1>
          <p className="text-md md:w-7/12  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            doloribus totam dicta ab ratioe ne. Explicabo eveniet dolor, omnis
            in recusandae temporibus suscipit cum nihil officia deserunt
            possimus saepe praesentium accusamus!
          </p>
        </div> */}
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

        <div className="mt-3 flex flex-col-reverse lg:flex-row lg:mt-14">
          <div className="px-7 lg:w-11/12">
            <h2
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="text-gray-700 w-11/12 text-sm font-bold mt-6 lg:text-2xl"
            >
              PERTUMBUHAN EKONOMI TRIWULAN IV 2021 DAN KESELURUHAN TAHUN 2021
            </h2>
            <p data-aos="zoom-in-left" className="mt-1 lg:text-md">
              Momentum perbaikan ekonomi Bali berlanjut pada triwulan IV 2021.
              Ekonomi Bali tumbuh sebesar 0,51% , lebih tinggi dibandingkan
              kinerja triwulan sebelumnya yang terkontraksi -2,91% . Kegiatan
              Masyarakat dan penyelenggaraan beberapa event internasional di
              akhir tahun. Dari sisi pengeluaran, membaiknya pertumbuhan ekonomi
              terutama bersumber dari kinerja konsumsi rumah tangga dan ekspor
              luar negeri. Sementara itu, dari sisi lapangan usaha , perbaikan
              ekonomi Bali didorong oleh perbaikan beberapa kinerja LU utama
            </p>
            <p
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="mt-1 lg:text-md"
            >
              Secara keseluruhan 2021, kinerja perekonomian Bali membaik
              meskipun masih tertahan di tengah berlanjutnya pandemi COVID-19.
              Perbaikan tidak terlepas dari pelaksanaan program vaksinasi yang
              berjalan on-track, serta perbaikan aktivitas pariwisata yang
              didorong oleh wisatawan nusantara.
            </p>
          </div>
          <div className="mt-2 lg:flex flex-row gap-8 lg:m-0 lg:ml-16 lg:mt-9">
            <img
              className="mx-auto my-3 w-9/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 "
              src={Bali1}
              alt="img"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
            <img
              className="mx-auto w-9/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 lg:my-3"
              src={Bali2}
              alt="img"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
          </div>
        </div>

        <div className="mt-5 py-7 bg-gray-800 flex l flex-col-reverse lg:flex-row-reverse lg:mt-16 lg:py-9">
          <div className="px-7 lg:w-11/12">
            <h2
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="text-white w-11/12 text-sm font-bold mt-6 lg:text-2xl"
            >
              PERKEMBANGAN KEUANGAN PEMERINTAH
            </h2>
            <p
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="text-white mt-1 lg:text-md"
            >
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
              className="mx-auto my-3 w-9/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 "
              src={Bali1}
              alt="img"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
            <img
              className="mx-auto w-9/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 lg:my-3"
              src={Bali2}
              alt="img"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            />
          </div>
        </div>

        <div className="mt-5 flex l flex-col-reverse lg:flex-row lg:mt-14">
          <div className="px-7 lg:w-11/12">
            <h2
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="text-gray-700 w-11/12 text-sm font-bold mt-6 lg:text-2xl"
            >
              PERKEMBANGAN INFLASI
            </h2>
            <p
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="mt-1 lg:text-md"
            >
              Realisasi inflasi Provinsi Bali pada triwulan IV 2021 tercatat
              sebesar 2,07% (yoy), lebih tinggi dibandingkan realisasi inflasi
              triwulan III 2021 yang tercatat 1,40% (yoy). Kondisi ini
              disebabkan oleh meningkatnya tekanan harga di sebagian besar
              kelompok barang. Lebih lanjut, realisasi inflasi tersebut juga
              lebih tinggi dibandingkan dengan realisasi inflasi Nasional pada
              periode yang sama (1,87%; yoy). Selanjutnya, peningkatan tekanan
              harga pada triwulan I 2022 diprakirakan menurun dibandingkan
              kondisi pada triwulan IV 2021. Hal ini didorong oleh normalisasi
              permintaan pasca Natal dan Tahun Baru, kebijakan pembatalan
              pelarangan penjualan minyak goreng curah dan peningkatan pasokan
              akibat panen raya pada beberapa komoditas hortikultura. Tim
              Pengendalian Inflasi Daerah (TPID) tingkat provinsi maupun
              kabupaten/kota di Bali akan terus mengawal pergerakan harga
              sehingga inflasi tetap terkendali.
            </p>
          </div>
          <div className="mt-2 lg:flex flex-row gap-8 lg:m-0 lg:ml-16 lg:mt-9">
            <img
              className="mx-auto my-3 w-9/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 "
              src={Bali1}
              alt="img"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
            <img
              className="mx-auto w-9/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 lg:my-3"
              src={Bali2}
              alt="img"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
          </div>
        </div>

        <div className="mt-5 py-7 bg-gray-800 flex l flex-col-reverse lg:flex-row-reverse lg:mt-16 lg:py-9">
          <div className="px-7 lg:w-11/12">
            <h2
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="text-white w-11/12 text-sm font-bold mt-6 lg:text-2xl"
            >
              PERKEMBANGAN STABILITAS SISTEM KEUANGAN
            </h2>
            <p
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="text-white mt-1 lg:text-md"
            >
              Secara umum, kondisi stabilitas keuangan di Provinsi Bali pada
              triwulan IV 2021 tetap terjaga di tengah momentum pertumbuhan
              ekonomi yang mulai membaik. Jumlah penghimpunan Dana Pihak Ketiga
              (DPK) maupun penyaluran Kredit tercatat mengalami akselerasi
              sejalan dengan pertumbuhan ekonomi Provinsi Bali. Lebih lanjut,
              kualitas kredit yang disalurkan perbankan terjaga pada level di
              bawah ambang batas 5%. Program pemerintah dalam rangka
              penanggulangan dan pemulihan ekonomi dari pandemi COVID-19 mampu
              memitigasi risiko keuangan yang dapat mengganggu kestabilan sistem
              keuangan dan makroekonomi. Di sisi lain, kinerja kredit UMKM juga
              menunjukkan peningkatan dan turut berkontribusi dalam pertumbuhan
              ekonomi pada triwulan laporan.
            </p>
          </div>
          <div className="mt-2 lg:flex flex-row gap-8 lg:m-0 lg:ml-16 lg:mt-5">
            <img
              className="mx-auto my-3 w-9/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 "
              src={Bali1}
              alt="img"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
            <img
              className="mx-auto w-9/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 lg:my-3"
              src={Bali2}
              alt="img"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            />
          </div>
        </div>

        <div className="mt-5 flex l flex-col-reverse lg:flex-row lg:mt-14">
          <div className="px-7 lg:w-11/12">
            <h2
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="text-gray-700 w-11/12 text-sm font-bold mt-6 lg:text-2xl"
            >
              PERKEMBANGAN SISTEM PEMBAYARAN
            </h2>
            <p
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="mt-1 lg:text-md"
            >
              Sepanjang triwulan IV 2021 perkembangan indikator sistem
              pembayaran di Provinsi Bali mengalami akselerasi sejalan dengan
              membaiknya pertumbuhan ekonomi. Kinerja transaksi pada seluruh
              kanal terkonfirmasi mengalami peningkatan didorong periode Hari
              Besar Keagamaan Nasional (HBKN) Natal dan Tahun Baru 2022 serta
              pelaksanaan sejumlah event nasional maupun internasional yang
              dilaksanakan di Provinsi Bali. Selain itu, jumlah transaksi
              digital meningkat tercermin dari peningkatan transaksi Uang
              Elektronik (UE) dan transaksi online kartu ATM/Debit,
              mengonfirmasi adanya pergeseran kebiasaan konsumen ke arah
              digital. Di sisi lain, aliran uang kartal perbankan di Provinsi
              Bali pada triwulan IV 2021 mengalami net outflow sebesar Rp2,30
              triliun, meningkat dibandingkan triwulan sebelumnya yang
              mengindikasikan tren peningkatan kebutuhan uang kartal pada
              triwulan IV 2021.
            </p>
            <p
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="mt-1 lg:text-md"
            >
              Kantor Perwakilan Bank Indonesia (KPwBI) Provinsi Bali senantiasa
              berupaya untuk menjaga kelancaran sistem pembayaran, diantaranya
              melalui layanan kas yang berfokus pada pemenuhan likuiditas,
              penerapan kebijakan clean money policy, dan upaya perluasan Sistem
              Pembayaran (SP) nontunai berbasis QRIS yang bersifat
              nirsentuh/contactless sebagai penyesuaian di masa pandemi
              COVID-19. Upaya elektronifikasi juga kerap dilakukan melalui
              kerjasama dengan Pemerintah Daerah dan stakeholders khususnya
              terkait elektronifikasi transaksi pemda (ETP), elektronifikasi
              transportasi, dan elektronifikasi bantuan sosial.
            </p>
          </div>
          <div className="mt-2 lg:flex flex-row gap-8 lg:m-0 lg:ml-16 lg:mt-9">
            <img
              className="mx-auto my-3 w-9/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 "
              src={Bali1}
              alt="img"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
            <img
              className="mx-auto w-9/12 object-cover shadow-[-1px_1px_62px_-28px] rounded-md lg:w-5/12 lg:h-96 lg:mx-0 lg:my-3"
              src={Bali2}
              alt="img"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ekonomi2;
