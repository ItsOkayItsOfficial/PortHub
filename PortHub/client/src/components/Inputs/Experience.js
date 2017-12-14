import React from 'react';

const Experience = (props) => {
  return (<div className='container'>
    <div className="row">
          <div className="col-md-6">
              <div className="form-group">
                  <label>Employer</label>
                  <input type="text" name="name" className="form-control" placeholder="Please enter your employer" required="required" data-error="Firstname is required." />
                  <div className="help-block with-errors"></div>
              </div>
          </div>
          <div className="col-md-6">
              <div className="form-group">
                  <label>Job Duties</label>
                  <input type="text" name="surname" className="form-control" placeholder="Please enter your job duties" required="required" data-error="Lastname is required." />
                  <div className="help-block with-errors"></div>
              </div>
          </div>
      </div>
  </div>)
}

export default Experience;