// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Trending = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Sample movie data - replace with your actual data
  const movies = [
    { id: 1, title: "Public Enemies", image: "/MovieSample.webp" },
    { id: 2, title: "Public Enemies", image: "/MovieSample.webp" },
    { id: 3, title: "Public Enemies", image: "/MovieSample.webp" },
    { id: 4, title: "Public Enemies", image: "/MovieSample.webp" },
    { id: 5, title: "Public Enemies", image: "/MovieSample.webp" },
    { id: 6, title: "Public Enemies", image: "/MovieSample.webp" },
    { id: 7, title: "Movie Title 7", image: "/MovieSample.webp" },
    { id: 8, title: "Movie Title 8", image: "/MovieSample.webp" },
    { id: 9, title: "Movie Title 9", image: "/MovieSample.webp" },
    { id: 10, title: "Movie Title 10", image: "/MovieSample.webp" },
  ];

  const scrollLeft = () => {
    const container = document.getElementById('movie-carousel');
    const newPosition = Math.max(0, scrollPosition - 300);
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  const scrollRight = () => {
    const container = document.getElementById('movie-carousel');
    const maxScroll = container.scrollWidth - container.clientWidth;
    const newPosition = Math.min(maxScroll, scrollPosition + 300);
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  return (
    <div className="bg-[#222222] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">Movies Trending Now</h2>
        
        <div className="relative group">
          {/* Left fade gradient - now matches card height */}
          <div className="absolute left-0 top-0 w-16 h-72 bg-gradient-to-r from-[#222222] to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade gradient - now matches card height */}
          <div className="absolute right-0 top-0 w-16 h-72 bg-gradient-to-l from-[#222222] to-transparent z-10 pointer-events-none"></div>
          
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
          
          {/* Movie carousel */}
          <div
            id="movie-carousel"
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            onScroll={handleScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="relative flex-shrink-0 w-48 h-72 bg-gray-800 rounded-lg overflow-hidden cursor-pointer group/card hover:scale-105 transition-all duration-300 ease-out"
              >
                {/* Number badge */}
                <div className="absolute top-2 left-3 z-10">
                  <div className="text-black font-black text-7xl leading-none" style={{ 
                    textShadow: '2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white, 0px 2px 0px white, 0px -2px 0px white, 2px 0px 0px white, -2px 0px 0px white',
                    WebkitTextStroke: '2px white'
                  }}>
                    {index + 1}
                  </div>
                </div>
                
                {/* Movie poster placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 items-center justify-center text-center p-4">
                    <div>
                      <div className="text-4xl mb-2">🎬</div>
                      <div className="text-sm font-medium text-white">{movie.title}</div>
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/card:bg-opacity-20 transition-all duration-300"></div>
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

export default Trending;