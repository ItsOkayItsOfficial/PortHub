import React from 'react';

const Education = ( {index, id, changed} ) => {
  return (
      <div className='container'>
        <h3> Education {index+1} </h3>
        <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <label>School attended</label>
                      <input type="text" 
                      name="name" 
                      className="form-control" 
                      placeholder="Please enter the school you attended" 
                      required="required" 
                      data-error="Firstname is required."
                      onChange={(event) => changed(event, id, 'schoolName')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>School Location (City, ST)</label>
                      <input type="text" 
                             name="surname" 
                             className="form-control" 
                             placeholder="Please enter your schools city and state." 
                             required="required" 
                             data-error="Lastname is required."
                             onChange={(event) => changed(event, id, 'schoolLocation')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
        <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Type of Degree</label>
                    <select className="form-control" 
                            onChange={(event) => changed(event, id, 'degreeType')}>
                      <option>Other</option>
                      <option>Bachelor of Science</option>
                      <option>Master of Science</option>
                      <option>Bachelor of Arts</option>
                      <option>Master of Arts</option>
                      <option>Continuing Education</option>

                    </select>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Field of Study</label>
                      <input type="text" 
                             name="name" 
                             className="form-control" 
                             placeholder="Please enter your field of study" 
                             required="required" 
                             data-error="Firstname is required."
                             onChange={(event) => changed(event, id, 'major')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Education;