import React from 'react';

const Skills = ({index, changed, id}) => {
  return (<div className='container'>
    <div className="row">
          <div className="col-md-6">
              <div className="form-group">
                  <label>Skill</label>
                  <input type="text" 
                         name="name" 
                         className="form-control" 
                         placeholder="Please enter your employer" 
                         required="required" 
                         data-error="Firstname is required."
                         onChange={(event) => changed(event, id, 'skills', 'skill')} />
                  <div className="help-block with-errors"></div>
              </div>
          </div>
      </div>
  </div>)
}


export default Skills;