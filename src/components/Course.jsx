import React from 'react'
import { categories } from '../utils/Data';
import Categories from './Categories';
import {motion} from 'framer-motion'

const Course = () => {
    const container = {
        hidden: {
          opacity: 0,
          scale: 0,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      };
  return (
    <div>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 "
    >
      {categories.map((category) => {
        return <Categories key={category.id} {...category} />;
      })}
    </motion.div>
  </div>
  )
}

export default Course