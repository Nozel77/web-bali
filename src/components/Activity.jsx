import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Activities = () => {
  // Menyusun data untuk card dan animasinya
  const cards = [
    {
      title: 'history',
      imageSrc: 'src/assets/sejarah.jpg',
    },
    {
      title: 'culture',
      imageSrc: 'src/assets/budaya.jpg',
    },
    {
      title: 'culinary',
      imageSrc: 'src/assets/kuliner.jpeg',
    },
    {
      title: 'tour',
      imageSrc: 'src/assets/wisata.jpg',
    },
    {
      title: 'economy',
      imageSrc: 'src/assets/economy.jpg',
    },
  ];

  // Properti variants untuk animasi
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // State untuk melacak apakah card dalam mode "dibuka"
  const [openCard, setOpenCard] = useState(null);

  // Referensi ke elemen overlay untuk menutup card saat area luar ditekan
  const overlayRef = useRef(null);

  // Fungsi untuk menutup card
  const closeCard = () => {
    setOpenCard(null);
  };

  // Fungsi untuk menutup card saat area luar ditekan
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      closeCard();
    }
  };

  return (
    <>
      <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1, cursor: 'pointer' }} // Menambahkan cursor: 'pointer' saat dihover
            onClick={() => setOpenCard(index)} // Mengatur card dalam mode "dibuka" saat diklik
            className="relative p-4"
          >
            {/* Tampilkan judul hanya pada card yang belum ditekan */}
            {openCard === null && <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">{card.title}</h3>}
            <img className="w-full h-full object-cover relative border-4 border-white shadow-lg rounded-sm" src={card.imageSrc} alt={card.title} />
          </motion.div>
        ))}
      </div>

      {/* Menampilkan card detail saat card dalam mode "dibuka" */}
      {openCard !== null && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick} // Menutup card saat area luar ditekan
        >
          <motion.div className="relative p-4 bg-white rounded-md max-w-[80%] mx-auto" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
            {/* Tampilkan judul sesuai dengan card yang terbuka */}
            {openCard !== null && <h3 className="text-2xl font-bold text-center text-gray-900">{cards[openCard].title}</h3>}
            <motion.img
              className="w-full max-h-[60vh] object-cover border-4 border-white shadow-lg rounded-lg"
              src={cards[openCard].imageSrc}
              whileTap={{ scale: 0.9 }} // Mengurangi ukuran gambar saat card ditekan
            />
            <Link to={`/${cards[openCard].title.toLowerCase()}`} className="block mt-4 text-center text-blue-500 underline">
              View More
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Activities;
