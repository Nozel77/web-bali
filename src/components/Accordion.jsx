import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ id, title }) => {
  const answer = [
    {
      id: 1,
      title:
        "Bali adalah sebuah pulau dan provinsi di Indonesia yang terkenal dengan keindahan alam, budaya, dan pariwisatanya. Asal usul Bali melibatkan sejarah panjang, dengan pengaruh dari berbagai periode dan budaya.",
    },
    {
      id: 2,
      title:
        "Secara sejarah, keberadaan Bali dan perkembangannya terkait erat dengan proses sejarah yang melibatkan perjalanan manusia, pengaruh budaya, dan interaksi sosial.",
    },
    {
      id: 3,
      title:
        "Bali adalah tujuan wisata populer di dunia. Keindahan alamnya, seni, budaya, dan tradisi unik, bersama dengan infrastruktur pariwisata yang baik, menjadikan Bali menarik bagi wisatawan dari berbagai belahan dunia, termasuk wisatawan kulit putih.",
    },
    {
      id: 4,
      title:
        "Secara umum, keadaan di Bali saat ini cukup baik. Ekonomi Bali mulai pulih setelah pandemi COVID-19, dengan jumlah wisatawan yang berkunjung ke Bali meningkat secara signifikan. Pada bulan Oktober 2023, jumlah wisatawan mancanegara yang berkunjung ke Bali mencapai 1,2 juta orang, meningkat 100% dibandingkan bulan yang sama tahun sebelumnya.",
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
            isOpen ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
          onClick={handleClick}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            style={{ overflow: "hidden" }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-gray sm:ml-2">
              {answer.find((item) => item.id === id).title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
