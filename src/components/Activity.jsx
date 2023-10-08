import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Activities = () => {
  // Menyusun data untuk card dan animasinya
  const cards = [
    {
      title: 'history',
      imageSrc: 'src/assets/budaya.jpg',
    },
    {
      title: 'culture',
      imageSrc: 'src/assets/sejarah.jpg',
    },
    {
      title: 'culinary',
      imageSrc: 'src/assets/kuliner.jpeg',
    },
    {
      title: 'tour',
      imageSrc: 'src/assets/sejarah.jpg',
    },
    {
      title: 'economy',
      imageSrc: 'src/assets/budaya.jpg',
    },
  ];

  // Properti variants untuk animasi
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const [openCard, setOpenCard] = useState(null);

  const overlayRef = useRef(null);

  const closeCard = () => {
    setOpenCard(null);
  };

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
            whileHover={{ scale: 1.1, cursor: 'pointer' }}
            onClick={() => setOpenCard(index)} 
            className="relative p-4"
          >
            {openCard === null && <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">{card.title}</h3>}
            <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={card.imageSrc} alt={card.title} />
          </motion.div>
        ))}
      </div>

      {openCard !== null && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick} 
        >
          <motion.div className="relative p-4 bg-white rounded-md max-w-[80%] mx-auto" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
            {openCard !== null && <h3 className="text-2xl font-bold text-center text-gray-900">{cards[openCard].title}</h3>}
            <motion.img
              className="w-full max-h-[60vh] object-cover border-4 border-white shadow-lg"
              src={cards[openCard].imageSrc}
              whileTap={{ scale: 0.9 }}
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
