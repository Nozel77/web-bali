import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Activities = () => {
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
            <img className="w-full h-full object-cover relative border-4 border-white shadow-lg rounded-sm" src={card.imageSrc} alt={card.title} />
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
      {openCard !== null && (
        <>
          <button
            className="absolute top-0 right-0 p-2 hover:bg-red-600 hover:text-white text-white bg-red-500 mr-5 mt-3 h-10 w-12 rounded-lg"
            onClick={closeCard}
          >
            X
          </button>
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{ zIndex: -1 }}
          ></div> {/* Ini adalah elemen dengan latar belakang merah */}
          <h3 className="text-2xl font-bold text-left ml-2 text-gray-900 mb-3">
            {cards[openCard].title}
          </h3>
          <motion.img
            className="w-full max-h-[60vh] object-cover border-4 border-white shadow-lg rounded-lg"
            src={cards[openCard].imageSrc}
            whileTap={{ scale: 0.9 }}
          />
          <Link to={`/${cards[openCard].title.toLowerCase()}`} className="block mt-4 text-center rounded-lg text-white bg-blue-500 p-2 w-2/12 mx-auto">
            View More
          </Link>
        </>
      )}
    </motion.div>
  </motion.div>
      )}
    </>
  );
};

export default Activities;
