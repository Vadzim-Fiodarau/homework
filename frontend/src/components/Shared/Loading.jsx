import React from 'react';

import '../../css/loadingDots.css';

const LoadingDots = (props) =>{
  return (
    <div className={ `loading-dots ${props.className || ''}` }>
      <div className='loading-dots__dot loading-dots__dot--1' />
      <div className='loading-dots__dot loading-dots__dot--2' />
      <div className='loading-dots__dot loading-dots__dot--3' />
    </div>
  );
}

export default LoadingDots;
