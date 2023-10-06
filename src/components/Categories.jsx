import React from "react";
import { motion } from "framer-motion";

const Categories = ({ icon, category }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex items-center flex-col w-60 bg-white shadow-md p-4 rounded-md cursor-pointer " // Menggunakan margin (m-4)
    >
      <div className="text-4xl text-Teal">{icon}</div>
      <div>{category}</div>
      <a href="" className="text-sm text-gray">
        View More
      </a>
    </motion.div>
  );
};

export default Categories;
