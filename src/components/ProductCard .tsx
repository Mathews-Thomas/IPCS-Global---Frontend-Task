import React from 'react';
import item1 from  "../../public/Frame 32.png"
import item2 from "../../public/Frame 33.png"
import item3 from "../../public/Frame 34.png"
import item4 from "../../public/Frame 38.png"
import item5 from "../../public/Frame 32 (1).png"
import item6 from "../../public/Frame 33 (1).png"
import item7 from "../../public/Frame 34 (1).png"
import item8 from "../../public/Frame 38 (1).png"

const ProductCard = ({ image, title, price, oldPrice, rating }: any) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md ">
      <img src={image} alt={title} className="w-full mb-4 rounded-lg" />
      <h3 className="text-gray-800 font-semibold text-lg">{title}</h3>
      <div className="flex items-center mt-2">
        {/* Stars and rating */}
        <div className="flex items-center text-yellow-500 flex-wrap">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <span className="text-gray-500 text-sm ml-2">({rating})</span>
      </div>
      <div className="flex items-center mt-3 space-x-2">
        <span className="text-lg font-bold text-black">${price}</span>
        {oldPrice && (
          <span className="text-sm line-through text-gray-500">${oldPrice}</span>
        )}
      </div>
    </div>
  );
};

const ProductSection: React.FC = () => {
  const newArrivals = [
    {
      image: item1,
      title: 'T-shirt with Tape Details',
      price: '120',
      oldPrice: '',
      rating: '4.5',
    },
    {
      image: item2,
      title: 'Skinny Fit Jeans',
      price: '240',
      oldPrice: '260',
      rating: '4.8',
    },
    {
      image: item3,
      title: 'Checkered Shirt',
      price: '180',
      oldPrice: '',
      rating: '4.6',
    },
    {
      image: item4,
      title: 'Sleeve Striped T-shirt',
      price: '130',
      oldPrice: '160',
      rating: '4.7',
    },
  ];

  const topSelling = [
    {
      image: item5,
      title: 'Vertical Striped Shirt',
      price: '212',
      oldPrice: '232',
      rating: '4.3',
    },
    {
      image: item6,
      title: 'Courage Graphic T-shirt',
      price: '145',
      oldPrice: '',
      rating: '4.5',
    },
    {
      image: item7,
      title: 'Loose Fit Bermuda Shorts',
      price: '80',
      oldPrice: '',
      rating: '4.4',
    },
    {
      image: item8,
      title: 'Faded Skinny Jeans',
      price: '210',
      oldPrice: '',
      rating: '4.6',
    },
  ];

  return (
    <section className="py-10 bg-gray-50 md:px-0 px-7">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {newArrivals.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
            />
          ))}
        </div>
        <div className="text-center mb-10">
          <button className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800">
            View All
          </button>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">TOP SELLING</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {topSelling.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
            />
          ))}
        </div>
        <div className="text-center">
          <button className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
