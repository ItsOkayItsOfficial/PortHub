import React from 'react';
import Aux from '../../../../HOCs/Aux';
import { Link } from 'react-router-dom';

const DetailedTemplate = ({ img, src, title, type}) => {

    return (
      <div className='container'>
          <h4> {title} </h4>
          {type==="resume" ? <img src={img} alt={title}/> : <iframe src={src} alt={title} zoom='.5'/>}
            <Link to='inputPage'> 
              <button className="btn btn-primary" 
                      style={{margin:"auto"}}>Select this template</button>
            </Link>
      </div>
    )

}

export default DetailedTemplate;