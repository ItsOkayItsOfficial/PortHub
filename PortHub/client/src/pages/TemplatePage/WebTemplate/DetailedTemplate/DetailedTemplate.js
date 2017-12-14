import React from 'react';
import Aux from '../../../../HOCs/Aux';
import { Link } from 'react-router-dom';

const DetailedTemplate = ({ img, title }) => {
  return (
    <div className='container'>
        <h4> {title} </h4>
        <img src={img} alt={title}/>
          <Link to='inputPage'> 
            <button className="btn btn-primary" 
                    style={{margin:"auto"}}>Select this template</button>
          </Link>
    </div>
  )
}

export default DetailedTemplate;