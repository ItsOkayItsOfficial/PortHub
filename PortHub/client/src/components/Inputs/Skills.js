import React from 'react';

const Skills = ({index, changed, id}) => {
    let skillTitle = window.sessionStorage.getItem(id+"skill") || "";
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
                  <input id="ex1" data-slider-id='ex1Slider' type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="14"/>
              </span>
          </div>
      </div>
  </div>)
}


export default Skills;