import React from 'react';

const Template = ({ img,title }) => {
  return (  
      <div className="card m-4 " style={{width: "25vw"}}>
        <img className="card-img-top" src={img} alt={title}/>
        <div className="card-footer d-flex flex-column">
          <p className="card-title text-center">{title}</p>
          <button className="btn btn-primary" style={{margin:"auto"}}>Select</button>
        </div>
      </div>
  )
}



export default Template;