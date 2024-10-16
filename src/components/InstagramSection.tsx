import React from 'react';
import image1 from "../../public/image-product-1.png"
import image2 from "../../public/image-product-2.png"
import image3 from "../../public/image-product-3.png"
import image4 from "../../public/image-product-4.png"
import image5 from "../../public/image-product-5.png"
import image6 from "../../public/image-product-6.png"

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
];

const InstagramSection: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
      
        <h2 className="text-2xl font-bold mb-6">Follow Products And Discounts On Instagram</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Instagram Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-6">Or Subscribe To The Newsletter</h3>

        <form className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Email Address..."
            className="border-b-2 border-gray-400 outline-none px-4 py-2 w-72 sm:w-96"
          />
          <button type="submit" className="ml-4 px-6 py-2 bg-black text-white font-bold rounded-md">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default InstagramSection;
