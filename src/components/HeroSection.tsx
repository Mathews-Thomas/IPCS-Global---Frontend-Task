import React from 'react';
import Heroimage from "../../public/Heroimage.png"
import zara from "../../public/zara.png"
import gucci from "../../public/gucci-logo-1 1.png"
import prada from "../../public/prada-logo-1 1.png"

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10 px-7 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600 text-lg">
            Browse through our diverse range of meticulously crafted garments, 
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-all">
            Shop Now
          </button>
          <div className="flex justify-center md:justify-start space-x-10 mt-8">
            
            <div>
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-gray-600">International Brands</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">2,000+</h3>
              <p className="text-gray-600">High-Quality Products</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">30,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          
          <img
            src={Heroimage} 
            alt="Fashion models"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
      <div className='bg-black w-full '>
        <div className='flex py-7 gap-7 justify-center flex-wrap'>
            <img src={zara}/>
            <img src={gucci}/>
            <img src={prada}/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
