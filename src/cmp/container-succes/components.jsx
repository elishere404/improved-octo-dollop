import React from 'react';
import paymentImg from './imgs/payment.png';

export default function ThankYouContainer() {
  return (
    <div className="grid place-items-center min-h-screen px-4">
      <div
        className="w-full sm:w-[412px] h-[416px] rounded-xl"
        style={{
          background: 'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)',
        }}
      >
        <img src={paymentImg} alt="success!!" className="mt-[50px] sm:ml-[75px] ml-0 w-[230px]" />
        <div className="rounded-full bg-[#262E38] w-[200px] h-[26px] mx-auto mt-[35px] text-center text-orange-400">
          You selected 4 out of 5
        </div>
        <h1 className="text-center text-white mt-[15px] text-[28px] sm:leading-[35.45px]" style={{ fontFamily: 'Overpass, sans-serif' }}>
          Thank You!
        </h1>
        <p className="text-center text-[#969FAD] text-[15px] mx-auto mt-[15px] w-[303px] sm:w-[341px]" style={{ fontFamily: 'Overpass, sans-serif' }}>
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
