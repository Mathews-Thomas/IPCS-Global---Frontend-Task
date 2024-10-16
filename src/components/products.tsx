import React from 'react';
import Product1 from "../../public/product-1.png"; 
import Product2 from "../../public/product-2.png";
import Product3 from "../../public/product-3.png";
import Product4 from "../../public/product-4.png";
import Product5 from "../../public/product-5.png";
import Product6 from "../../public/product-6.png";
import Product7 from "../../public/product-7.png";
import Product8 from "../../public/product-8.png";


const products = [
  {
    image: Product1,
    title: 'Adicolor Classics Joggers',
    category: 'Dress',
    price: '$63.85',
    sale: false,
  },
  {
    image: Product2,
    title: 'Nike Sportswear Futura Luxe',
    category: 'Bag',
    price: '$130.00',
    sale: false,
  },
  {
    image: Product3,
    title: 'Geometric Print Scarf',
    category: 'Scarf',
    price: '$53.00',
    sale: false,
  },
  {
    image: Product4,
    title: 'Yellow Reserved Hoodie',
    category: 'Dress',
    price: '$155.00',
    originalPrice: '$364.00',
    sale: true,
  },
  {
    image: Product5,
    title: 'Basic Dress Green',
    category: 'Dress',
    price: '$236.00',
    label: 'HOT',
    sale: false,
  },
  {
    image: Product6,
    title: 'Nike Air Zoom Pegasus',
    category: 'Shoe',
    price: '$198.00',
    originalPrice: '$220.00',
    sale: true,
  },
  {
    image: Product7,
    title: 'Nike Repel Miler',
    category: 'Dress',
    price: '$120.50',
    sale: false,
  },
  {
    image: Product8,
    title: 'Nike Sportswear Futura Luxe',
    category: 'Glasses',
    price: '$160.00',
    sale: false,
  },
];


const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-md"
        />
        {product.sale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
        )}
        {product.label && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.label}
          </span>
        )}
      </div>
      <h3 className="mt-4 font-bold text-lg">{product.title}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <div className="mt-2">
        {product.sale ? (
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold">{product.price}</span>
            <span className="line-through text-gray-500">
              {product.originalPrice}
            </span>
          </div>
        ) : (
          <span className="font-bold">{product.price}</span>
        )}
      </div>
    </div>
  );
};


const ProductGrid: React.FC = () => {
  return (
    <section className="py-10 md:px-0 px-7">
      <div className="container mx-auto">
       
        <h2 className="text-center text-3xl font-bold mb-10">
          Or Subscribe To The Newsletter
        </h2>

        
        <div className="flex justify-start mb-6 space-x-8 text-lg">
          <button className="font-bold border-b-2 border-black">
            All Products
          </button>
          <button className="text-gray-500">T-Shirt</button>
          <button className="text-gray-500">Hoodies</button>
          <button className="text-gray-500">Jacket</button>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-gray-200 px-4 py-2 rounded-md">
            <span className="text-black">Filter</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
