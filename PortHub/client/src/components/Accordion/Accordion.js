import React from "react";

const Accordion = (props) =>{
    let href=`#${props.type}`;
    let id=`${props.type}`;
    let arialabelledby=`heading${props.i}`;

    let ariacontrols = `collapse${props.i}`;
    let type = `${props.type}`;
    let children=props.children;
    
    return (
        <div className="card">
        <div className="card-header" role="tab" id={arialabelledby}>
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#accordion" href={href} aria-expanded="true" aria-controls={ariacontrols}>
              {type}
            </a>
          </h5>
        </div>
    
        <div id={id} className="collapse show" role="tabpanel" aria-labelledby={arialabelledby}>
          <div className="card-block">
            {children}
          </div>
        </div>
      </div>
    )
}



export default Accordion;