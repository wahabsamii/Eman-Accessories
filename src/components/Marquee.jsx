import React from 'react';

const messages = [
  'Style Redefined.',
  'Shop The Trend!',
  'Chic Styles Await!',
  'Elevate Your Wardrobe!'
];

const Marquee = () => {
  return (
    <div className="overflow-hidden border-y py-10 border-gray-200 bg-white whitespace-nowrap">
      <div className="inline-block animate-marquee px-8">
        {messages.map((text, i) => (
          <span key={i} className="inline-block mx-8 text-xl font-semibold">
            {text}
            <span className="mx-8 text-gray-400">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;


