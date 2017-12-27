import React from 'react';
import './DetailedTemplate.css';

const DetailedTemplate = ({ img, src, title, type}) => {

    return (
      <div className='container flex-column' style={{textAlign:'center'}}>
          {type==="resume" ? <img src={img} alt={title}/> : 
          <iframe src={src} alt={title} title={title} zoom='.4' 
                    style={{width:'100%', height:'90vh'}}/>} 
      </div>
    )

}

export default DetailedTemplate;