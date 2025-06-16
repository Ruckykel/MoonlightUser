// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Producer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Sample producer data - replace with your actual data
  const producers = [
    { id: 1, name: "Steven Spielberg", image: "/ProducerSample.jpeg" },
    { id: 2, name: "Christopher Nolan", image: "/ProducerSample.jpeg" },
    { id: 3, name: "Martin Scorsese", image: "/ProducerSample.jpeg" },
    { id: 4, name: "Quentin Tarantino", image: "/ProducerSample.jpeg" },
    { id: 5, name: "James Cameron", image: "/ProducerSample.jpeg" },
    { id: 6, name: "Ridley Scott", image: "/ProducerSample.jpeg" },
    { id: 7, name: "Denis Villeneuve", image: "/ProducerSample.jpeg" },
    { id: 8, name: "Jordan Peele", image: "/ProducerSample.jpeg" },
    { id: 9, name: "Greta Gerwig", image: "/ProducerSample.jpeg" },
    { id: 10, name: "Ryan Coogler", image: "/ProducerSample.jpeg" },
  ];

  const scrollLeft = () => {
    const container = document.getElementById('producer-carousel');
    const newPosition = Math.max(0, scrollPosition - 300);
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  const scrollRight = () => {
    const container = document.getElementById('producer-carousel');
    const maxScroll = container.scrollWidth - container.clientWidth;
    const newPosition = Math.min(maxScroll, scrollPosition + 300);
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  return (
    <div className="bg-[#222222] px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">Top Producers</h2>
        
        <div className="relative group">
          {/* Left fade gradient - now matches card height */}
          <div className="absolute left-0 top-0 w-16 h-56 bg-gradient-to-r from-[#222222] to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade gradient - now matches card height */}
          <div className="absolute right-0 top-0 w-16 h-56 bg-gradient-to-l from-[#222222] to-transparent z-10 pointer-events-none"></div>
          
          {/* Left scroll button - hidden on mobile/tablet */}
          <button
            onClick={scrollLeft}
            className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          
          {/* Right scroll button - hidden on mobile/tablet */}
          <button
            onClick={scrollRight}
            className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
          
          {/* Producer carousel */}
          <div
            id="producer-carousel"
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            onScroll={handleScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {producers.map((producer, index) => (
              <div
                key={producer.id}
                className="flex-shrink-0 cursor-pointer group/card"
              >
                {/* Producer card */}
                <div className="relative w-48 h-56 bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-out">
                  {/* Producer image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <img
                      src={producer.image}
                      alt={producer.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 items-center justify-center text-center p-4">
                      <div>
                        <div className="text-4xl mb-2">🎬</div>
                        <div className="text-sm font-medium text-white">{producer.name}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/card:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                {/* Producer name bar */}
                <div className="mt-3 bg-gray-700 rounded-md px-3 py-2">
                  <p className="text-white text-sm font-medium text-center truncate">
                    {producer.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Producer;