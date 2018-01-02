import React from "react";
import './Accordion.css';

const Accordion = (props) =>{
    let href=`#${props.type}`;
    let id=`${props.type}`;
    let arialabelledby=`heading${props.i}`;

    let ariacontrols = `collapse${props.i}`;
    let type = `${props.type}`;
    let children=props.children;
    
    return (
        <div className="card">
          <a data-toggle="collapse" data-parent="#accordion" href={href} aria-expanded="true" aria-controls={ariacontrols}>
            <div className="card-header accordionHead" role="tab" id={arialabelledby} data-toggle="collapse">
              <h5 className="mb-0 accordionText">
                
                  {type}

              </h5>
            </div>
          </a>

          <div id={id} className="collapse" role="tabpanel" aria-labelledby={arialabelledby}>
            <div className="d-flex flex-wrap justify-content-center">
              {children}
            </div>
          </div>
        </div>
    )
}



export default Accordion;