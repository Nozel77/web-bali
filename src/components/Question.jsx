import React from 'react';
import Accordion from './Accordion';

const Question = () => {
  const accordions = [
    {
      id: 1,
      title: 'What is Skillex?',
    },
    {
      id: 2,
      title: 'What can I learn from Skillex?',
    },
    {
      id: 3,
      title: 'Can I teach on Skillex?',
    },
    {
      id: 4,
      title: 'What is included in my Skillex membership?',
    },
  ];
  return (
    <div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem]  text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] ml-3 md:ml-10 lg:mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Question;
