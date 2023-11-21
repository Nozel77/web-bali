import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { answerr } from '../utils/Data';

const Accordion = ({ id, title }) => {
  const answer = [
    {
      id: 1,
      title: answerr,
    },
    {
      id: 2,
      title: 'Ini adalah jawaban untuk pertanyaan Kenapa Bali bisa ada?',
    },
    {
      id: 3,
      title: 'Ini adalah jawaban untuk pertanyaan Kenapa Bali banyak bulenya?',
    },
    {
      id: 4,
      title: 'Ini adalah jawaban untuk pertanyaan Bagaimana keadaan di Bali saat ini?',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown
          className={`${
            isOpen ? 'rotate-180' : 'rotate-0'
          } cursor-pointer transition-all duration-300`}
          onClick={handleClick}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            style={{ overflow: 'hidden' }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-gray sm:ml-2">
              {answer.find(item => item.id === id).title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
