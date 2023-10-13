import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RecipeItems = () => {

    const cards = [
        {
            title: 'Ayam Betutu',
            imageSrc: 'src/assets/culinary/ayambetutu.jpg',
        },
        {
            title: 'Sate Lilit',
            imageSrc: 'src/assets/culinary/satelilit.jpg',
        },
        {
            title: 'Nasi Jinggo',
            imageSrc: 'src/assets/culinary/nasijinggo.jpg',
        },
        {
            title: 'Nasi Tepeng',
            imageSrc: 'src/assets/culinary/nasitepeng.jpg',
        },
        {
            title: 'Sate Plecing',
            imageSrc: 'src/assets/culinary/sateplecing.jpg',
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
        }4
    };

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <>
        <div className="max-w-[1920px] m-auto w-full md:flex">
        {cards.map((card, index) => (
            <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1, cursor: 'pointer' }}
            onClick={() => setOpenCard(index)} 
            className="relative p-4"
            >
            {openCard === null && <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold text-center">{card.title}</h3>}
            <img className="w-full h-full object-cover relative border-[3px] border-white shadow-lg rounded-sm" src={card.imageSrc} alt={card.title} />
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
                {openCard !== null && <h3 className="text-2xl font-bold text-center text-gray-900"></h3>}
            <motion.img
                className="w-full max-h-[60vh] object-cover rounded-lg"
                src={cards[openCard].imageSrc}
                whileTap={{ scale: 0.9 }}
            />
            {/* <Link to={`/${cards[openCard].title.toLowerCase()}`} className="block mt-4 text-center text-blue-500 underline">
                View More
            </Link> */}
            </motion.div>
        </motion.div>
        )}
    </>
    )
}

export default RecipeItems