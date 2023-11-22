import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import RecipeCard from './RecipeCard';

const RecipeItems = () => {
  const cards = [
    {
      title: 'Ayam Betutu',
      imageSrc: 'https://awsimages.detik.net.id/community/media/visual/2021/10/26/ayam-betutu_169.jpeg?w=1200',
      description:
        'Ayam Betutu adalah hidangan tradisional Bali yang terkenal. Ayam ini dibumbui dengan rempah-rempah khas Bali dan kemudian dipanggang atau direbus hingga empuk. Rasa rempah-rempah yang kaya membuat Ayam Betutu menjadi hidangan yang lezat dan khas Bali.',
    },
    {
      title: 'Sate Lilit',
      imageSrc: 'https://nnc-media.netralnews.com/IMG-Netral-News-User-31-F2APLYDG1T.jpg',
      description:
        'Sate Lilit adalah hidangan Bali yang unik. Daging, ikan, atau ayam cincang dicampur dengan kelapa parut, santan, dan rempah-rempah. Campuran ini lalu dibungkus di atas lidi atau batang serai, dan dipanggang hingga matang. Sate Lilit memiliki rasa yang khas dan tekstur yang lezat.',
    },
    {
      title: 'Nasi Jinggo',
      imageSrc: 'https://i.pinimg.com/originals/ce/7c/06/ce7c0665a46d63637c6798cf27faa30d.jpg',
      description:
        'Nasi Jinggo adalah hidangan khas dari Jawa Tengah. Ini adalah porsi nasi yang kecil namun lengkap, yang biasanya disajikan dengan lauk-pauk seperti ayam goreng, telur, sambal, dan tempe. Nasi Jinggo sangat populer di kawasan Jawa.',
    },
    {
      title: 'Nasi Tepeng',
      imageSrc: 'https://www.dapurkobe.co.id/wp-content/uploads/nasi-tepeng.jpg',
      description:
        'Nasi Tepeng adalah hidangan khas Bali. Ini adalah nasi yang dimasak dengan cara khusus menggunakan wajan besi datar atau "tepengan." Nasi ini biasanya disajikan dengan lauk seperti ayam betutu atau bebek betutu dan memiliki cita rasa yang khas.',
    },
    {
      title: 'Sate Plecing',
      imageSrc: 'https://i0.wp.com/img-global.cpcdn.com/recipes/29427ed22039f0e9/1600x840cq70/photo.webp',
      description:
        'Sate Plecing adalah hidangan sate khas Lombok. Sate ini disajikan dengan saus sambal plecing yang pedas dan segar. Daging sate biasanya terbuat dari daging ayam atau ikan. Sate Plecing adalah pilihan yang lezat bagi pecinta pedas.',
    },
  ];

  // Properti variants untuk animasi
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const overlayRef = useRef(null);

  const closeCard = () => {
    setOpenCard(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      closeCard();
    }
    4;
  };

  const [openCard, setOpenCard] = useState(null);

  return (
    <>
      <div className="max-w-[1920px] m-auto w-full md:flex">
        {cards.map((card, index) => (
          <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.1, cursor: 'pointer' }} onClick={() => setOpenCard(index)} className="relative p-4">
            {openCard === null && <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold text-center">{card.title}</h3>}
            <img className="w-full h-full object-cover relative border-[3px] border-white shadow-lg rounded-sm" src={card.imageSrc} alt={card.title} />
          </motion.div>
        ))}
      </div>

      {openCard !== null && (
        <motion.div ref={overlayRef} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleOverlayClick}>
          <motion.div className="relative p-4 bg-white rounded-md max-w-[80%] mx-auto" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
            {openCard !== null && <h3 className="text-2xl font-bold text-center text-gray-900"></h3>}

            <div class="flex items-center justify-center bg-slate-100">
              <div class="group h-[450px] w-full ">
                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={cards[openCard].imageSrc} alt="" />

                  <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div class="flex min-h-full flex-col items-center justify-center">
                      <h1 class="text-3xl font-bold">{cards[openCard].title}</h1>
                      <p class="text-base">{cards[openCard].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default RecipeItems;
