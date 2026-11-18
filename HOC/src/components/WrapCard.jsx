// import React from 'react'
// import ProductCart from './ProductCart'

// const WrapCard = ({children}) => {

//     console.log(children)
   

//   return (
//     <div>WrapCard</div>
//   )
// }

// export default WrapCard

import React from 'react';

const WrapCard = ({children}) => {
   console.log({children})

  return (
    <div className="border-2 border-red-500 p-4">
        <div bg-red-400>On Sale</div>
      {children}
    </div>
  );
};

export default WrapCard;