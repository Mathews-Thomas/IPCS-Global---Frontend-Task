import React, { useState } from 'react';

const reviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    review: "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: 'Alex K.',
    rating: 5,
    review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: 'James L.',
    rating: 5,
    review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: 'Moeen G.',
    rating: 5,
    review: "Shopco’s clothing collection and quality really stand out! Their customer service has been fantastic, and I couldn't be happier with my purchases.",
  },
];

const ReviewCard: React.FC<{ review: any }> = ({ review }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md">
      
      <div className="flex items-center mb-2">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} className="text-yellow-500">⭐</span>
        ))}
      </div>

      
      <h3 className="text-lg font-bold">{review.name}</h3>

      <p className="mt-2 text-gray-600">{review.review}</p>
    </div>
  );
};

const ReviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-10">
      <div className="container mx-auto">
    
        <h2 className="text-3xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>

        
        <div className="flex items-center justify-between space-x-4">
          
          <button
            onClick={handlePrev}
            className="text-2xl font-bold p-2 rounded-full hover:bg-gray-200"
          >
            &#8592;
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`snap-start transition-transform duration-500 ease-in-out transform ${
                  index === currentIndex ? 'scale-100' : 'scale-90 opacity-50'
                }`}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-2xl font-bold p-2 rounded-full hover:bg-gray-200"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
