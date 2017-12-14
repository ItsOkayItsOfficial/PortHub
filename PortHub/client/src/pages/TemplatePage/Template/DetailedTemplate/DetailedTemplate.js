import React from 'react';
import { Link } from 'react-router-dom';

const DetailedTemplate = ({ img, src, title, type}) => {
    return (
      <div className='container flex-column text-center'>
          <h4> {title} </h4>
          {type==="resume" ? <img src={img} alt={title}/> : <iframe src={src} alt={title} title={title} zoom='.4' style={{width:'100%', height:'90vh'}}/>}
            <Link to='inputPage'> 
              <button className="btn btn-primary align-self-center" 
                      style={{margin:"auto"}}>Select this template</button>
            </Link>
      </div>
    )

}

export default DetailedTemplate;