import React from "react";
import brand1 from "../../public/brand-1.png";
import brand2 from "../../public/brand-2.png";
import brand3 from "../../public/brand-3.png";
import brand4 from "../../public/brand-4.png";
import brand5 from "../../public/brand-5.png";

const Marquee: React.FC = () => {
  const Images = [
    { pic: brand1 },
    { pic: brand2 },
    { pic: brand3 },
    { pic: brand4 },
    { pic: brand5 },
  ];

  return (
    <section className="relative overflow-hidden py-4">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {Images.map((item, index) => (
          <div key={index} className="inline-block">
            <img src={item.pic} alt={`Brand ${index + 1}`} className="h-16" />
          </div>
        ))}
    
        {Images.map((item, index) => (
          <div key={index + Images.length} className="inline-block">
            <img src={item.pic} alt={`Brand ${index + 1}`} className="h-16" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
