import React from 'react';

const brands = ['We', 'don’t', 'just', 'create', 'content', 'we' ,'create', 'connections', 'We', 'don’t', 'just', 'create', 'content', 'we','create' , 'connections'];

const brands2 = ['The', 'right', 'words', 'the', 'right', 'strategy' ,'the', 'right', 'results','The', 'right', 'words', 'the', 'right', 'strategy' ,'the', 'right', 'results' ];



const ScrollingStrip = ({rotateAngle , direction , type}) => {
  return (
    <div className="scrolling-strip-wrapper overflow-hidden whitespace-nowrap py-4" style={{rotate : `${rotateAngle}deg`}}>
      <div className="scrolling-strip inline-block">
        {type ? (
            brands2.concat(brands2).map((brand, index) => (
              <span key={index} className="mx-8 text-black text-xl font-bold uppercase">
                {brand}
              </span>
            ))
        ):(
          brands.concat(brands).map((brand, index) => (
            <span key={index} className="mx-8 text-black text-xl font-bold uppercase">
              {brand}
            </span>
          ))
        )}
      </div>
    </div>
  );
};

export default ScrollingStrip;
