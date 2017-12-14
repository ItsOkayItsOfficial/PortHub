import React from 'react';

const Experience = ({index, id, changed}) => {
  return (
  <div className='container'>
  <h3> Employer {index+1} </h3>
    <div className="row">
          <div className="col-md-4">
              <div className="form-group">
                  <label>Employer</label>
                  <input type="text" 
                         name="name" 
                         className="form-control" 
                         placeholder="Please enter your employer" 
                         required="required" 
                         data-error="Employer is required."
                         onChange={(event) => changed(event, id, 'experience', 'employer')} />
                  <div className="help-block with-errors"></div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="form-group">
                  <label>Job Title</label>
                  <input type="text" 
                         name="name" 
                         className="form-control" 
                         placeholder="Please enter your title" 
                         required="required" 
                         data-error="Job title is required."
                         onChange={(event) => changed(event, id, 'experience', 'title')} />
                  <div className="help-block with-errors"></div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="form-group">
                  <label>Job Duties</label>
                  <input type="text" 
                         name="surname" 
                         className="form-control" 
                         placeholder="Please enter your job duties" 
                         required="required" 
                         data-error="Job duties are required."
                         onChange={(event) => changed(event, id, 'experience', 'duties')} />
                  <div className="help-block with-errors"></div>
              </div>
          </div>
      </div>
        <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Start Date</label>
                      <input type="text" 
                      name="name" 
                      className="form-control" 
                      placeholder="Please enter the your start date (month, YYYY)" 
                      required="required" 
                      data-error="Start Date is required."
                      onChange={(event) => changed(event, id, 'experience', 'startDate')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>End Date</label>
                      <input type="text" 
                             name="end Date" 
                             className="form-control" 
                             placeholder="Please enter the your end date (month, YYYY)" 
                             required="required" 
                             data-error="End Date is required."
                             onChange={(event) => changed(event, id, 'experience', 'endDate')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
  </div>)
}

export default Experience;