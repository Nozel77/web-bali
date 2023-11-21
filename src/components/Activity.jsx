import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Activities = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Durasi animasi AOS dalam milidetik
    });
  }, []);

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
    hover: { scale: 1.1, cursor: 'pointer', transition: { duration: 0.3 } },
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
      <div className="mt-[100px]">
        <h2 className="text-center text-gray-700">Content</h2>
        <div className="max-w-[1140px] m-auto w-full md:flex ">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, cursor: 'pointer' }}
              onClick={() => setOpenCard(index)}
              className={`relative p-4`}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Setiap elemen akan memiliki delay 100ms lebih lama dari yang sebelumnya
            >
              {openCard === null && <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">{card.title}</h3>}
              <img className="w-full h-full object-cover relative border-4 border-white shadow-lg rounded-sm" src={card.imageSrc} alt={card.title} />
            </motion.div>
          ))}
        </div>

        {openCard !== null && (
          <motion.div ref={overlayRef} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleOverlayClick}>
            <motion.div className="relative z-50 p-4 bg-white rounded-md max-w-[80%] mx-auto mt-10" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
              {openCard !== null && (
                <>
                  <button className="absolute top-0 right-0 p-2 text-white bg-red-500 h-auto w-10 rounded-lg mr-5 mt-3" onClick={closeCard}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h3 className="text-2xl font-bold text-left ml-2 text-gray-900 mb-3">{cards[openCard].title}</h3>
                  <motion.img className="w-full max-h-[60vh] object-cover border-4 border-white shadow-lg rounded-lg" src={cards[openCard].imageSrc} whileTap={{ scale: 0.9 }} />
                  <Link to={`/${cards[openCard].title.toLowerCase()}`} className="block mt-4 text-center text-white bg-blue-500 w-36 p-2 mx-auto rounded-lg">
                    View More
                  </Link>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Activities;
