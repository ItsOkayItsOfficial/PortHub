import React from 'react';


const Skills = ({index, changed, id, skills}) => {
    let Skills = {};
    skills[index] ? Skills = skills[index] : Skills={};

    let skillTitle = Skills.skill || window.sessionStorage.getItem(id+"skill") || "";

    // let skillLevel = window.sessionStorage.getItem(id+"description") || "";  
  return (<div className='container'>
    <div className="row">
          <div className="col-md-5 offset-2">
              <span className="form-group d-inline-flex flex-row align-items-baseline">
                  <h5 className="mr-1">skill</h5>
                  <input type="text" 
                         name="title" 
                         value = {skillTitle}
                         className="form-control" 
                         placeholder="Please enter your skill" 
                         required="required" 
                         data-error="skill title is required."
                         onChange={(event) => changed(event, id, 'skills', 'skill')} />
                  </span>
          </div>
      </div>
  </div>)
}


export default Skills;