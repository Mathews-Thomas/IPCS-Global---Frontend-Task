import React from 'react';
import dress1 from "../../public/Frame 61.png"
import dress2 from "../../public/Frame 62.png"
import dress3 from "../../public/Frame 63.png"
import dress4 from "../../public/Frame 64.png"

const BrowseByDressStyle: React.FC = () => {
  const styles = [
    { image: dress1, label: 'Casual' },
    { image: dress2, label: 'Formal' },
    { image: dress3, label: 'Party' },
    { image: dress4, label: 'Gym' },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
       
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          BROWSE BY DRESS STYLE
        </h2>

        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
          {styles.map((style, index) => (
            <div key={index} className=" bg-gray-100 rounded-lg overflow-hidden shadow-lg">
             <div className='w-full h-[20rem] object-cover flex flex-wrap'>
                <img src={style.image} className='w-full'/>
             </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByDressStyle;
