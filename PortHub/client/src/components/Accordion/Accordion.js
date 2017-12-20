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
          <a data-toggle="collapse" data-parent="#accordion" href={href} aria-expanded="true" aria-controls={ariacontrols}>
            <div className="card-header" role="tab" id={arialabelledby} data-toggle="collapse">
              <h5 className="mb-0">
                
                  {type}

              </h5>
            </div>
          </a>

          <div id={id} className="collapse" role="tabpanel" aria-labelledby={arialabelledby}>
            <div className="card-block m-5">
              {children}
            </div>
          </div>
        </div>
    )
}



export default Accordion;