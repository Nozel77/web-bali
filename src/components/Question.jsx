import React from 'react';
import Accordion from './Accordion';

const Question = () => {
  const accordions = [
    {
      id: 1,
      title: 'Asal Usul Bali?',
    },
    {
      id: 2,
      title: 'Kenapa Bali bisa ada?',
    },
    {
      id: 3,
      title: 'Kenapa Bali banyak bulenya?',
    },
    {
      id: 4,
      title: 'Bagaimana keadaan di Bali saat ini?',
    },
  ];
  return (
    <div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem]  text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] ml-3 md:ml-10 lg:mx-auto mb-20">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Question;
