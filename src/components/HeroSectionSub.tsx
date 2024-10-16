import React from 'react';
import background from "../../public/background.png"
const HeroSectionSub: React.FC = () => {
  return (
    <section className="relative w-full h-[500px]">

      <img
        src={background} 
        alt="Collection"
        className="w-full h-full object-cover"
      />

   
      <div className="absolute bottom-8 right-8">
        <button className="bg-white text-black px-4 py-2 text-sm font-bold hover:bg-gray-200 transition rounded-md">
          See Collection
        </button>
      </div>
    </section>
  );
};

export default HeroSectionSub;
