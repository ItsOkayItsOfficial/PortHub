import React from 'react';
import Aux from '../../../../HOCs/Aux';

const DetailedTemplate = ({ img, title }) => {
  return (
    <div className='container'>
      <div className='row'>
        <h4> {title} </h4>
      </div>
        <img src={img} alt={title}/>
    </div>
  )
}

export default DetailedTemplate;