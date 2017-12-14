import React from 'react';

const Skills = (props) => {
  return (<div className='container'>
    <div className="row">
          <div className="col-md-6">
              <div className="form-group">
                  <label>Skill</label>
                  <input type="text" name="name" className="form-control" placeholder="Please enter your employer" required="required" data-error="Firstname is required." />
                  <div className="help-block with-errors"></div>
              </div>
          </div>
      </div>
  </div>)
}


export default Skills;