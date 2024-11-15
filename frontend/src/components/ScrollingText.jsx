import React from 'react';

export const ScrollingText = () => {

    const text1 = "20% Discount on each product";
    const text2 = "Offer only till 30th November 2024";
    const text3 = "Hurry Up Now!"

  return (
    <div className="scrolling-container">
      <div className="scrolling-text-wrapper">
        <div className="scrolling-text">
          {text1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {text2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {text3}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};
