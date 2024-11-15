import React, { useState } from 'react';
import starImg from './assets/star.png';

export default function Container() {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="grid place-items-center min-h-screen px-4">
      <div
        className="w-full sm:w-[412px] h-[416px] rounded-xl"
        style={{
          background: 'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)',
        }}
      >
        <div className="w-16 h-16 mt-[30px] sm:ml-[27px] ml-0 bg-[#262E38] rounded-full flex items-center justify-center">
          <img src={starImg} alt="Centered Image" className="w-6 h-6" />
        </div>

        <h1
          className="font-bold text-white text-[28px] sm:leading-[35.45px] mt-[30px] sm:ml-[40px] ml-4 text-center sm:text-left"
          style={{ fontFamily: 'Overpass, sans-serif' }}
        >
          How did we do?
        </h1>
        <p
          className="font-bold text-[#969FAD] text-[15px] sm:ml-[40px] ml-4 text-center sm:text-left"
          style={{ fontFamily: 'Overpass, sans-serif' }}
        >
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
         
        </p>
        <div className="flex justify-center sm:ml-1 mt-5 space-x-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleClick(rating)}
              className={`hover:bg-orange-500 hover:text-black transition-all duration-400 focus:outline-none text-[#969FAD] text-[16px] font-bold w-14 h-14 bg-[#262E38] rounded-full flex items-center justify-center ${
                selectedRating === rating ? 'bg-white text-black' : ''
              }`}
            >
              {rating}
            </button>
          ))}
        </div>

        <button className="bg-orange-500 text-black font-semibold py-2 px-4 rounded-full text-center mt-4 sm:ml-7 ml-4 h-[45px] w-full sm:w-[341px] hover:bg-white hover:text-black duration-300">
          S U B M I T
        </button>
      </div>
    </div>
  );
}
