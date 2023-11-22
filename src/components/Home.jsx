import React from 'react';
import Header from './Header';
import Recipes from './Recipes';

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <Header
        title={
          <p className="text-white drop-shadow-lg">
            Beragam Kuliner Khas
            <br /> Bali!
          </p>
        }
        type="home"
      />

      <section id="recipes" className="md:max-w-[1440px] mx-auto px-4 md:px-20">
        <Recipes />
      </section>
    </main>
  );
};

export default Home;
