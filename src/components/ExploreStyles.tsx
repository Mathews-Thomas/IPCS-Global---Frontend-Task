import React from 'react';
import largeImage from "../../public/image-1.png";
import image1 from "../../public/image-2.png";
import image2 from "../../public/image-3.png";
import image3 from "../../public/image-4.png";
import image4 from "../../public/image-5.png";

const ExploreStyles: React.FC = () => {
  const rightImages = [
    { image: image1, label: 'Manto', productCount: 86 },
    { image: image2, label: 'Coat', productCount: 75 },
    { image: image3, label: 'Dress', productCount: 52 },
    { image: image4, label: 'T-shirt', productCount: 93 },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
          <div className="relative md:row-span-2">
            <img
              src={largeImage}
              alt="Main Style"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 rotate-90 origin-left">
              <p className="text-xl font-bold uppercase tracking-wider">
                Explore New and Popular Styles
              </p>
            </div>
          </div>

        
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {rightImages.map((item, index) => (
              <div key={index} className="relative group">
                <img
                  src={item.image}
                  alt={`Style ${index + 1}`}
                  className="w-full h-[440px] object-cover rounded-md"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>{item.label}</span>
                  <span>{item.productCount} Product</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreStyles;
