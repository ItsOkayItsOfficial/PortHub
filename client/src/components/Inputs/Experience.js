import React from 'react';

const Experience = ({index, id, changed, experience}) => {

    // fill in values from props passed or session storage or just blank
    let Experience = {};
    experience[index] ? Experience = experience[index]: Experience={};

    let experienceTitle = Experience.title || window.sessionStorage.getItem(id+"title") || "";
    let experienceEmployer = Experience.employer || window.sessionStorage.getItem(id+"employer") || "";
    let experienceDuties = Experience.duties || window.sessionStorage.getItem(id+"duties") || "";
    let experienceStartDate = Experience.startDate || window.sessionStorage.getItem(id+"startDate") || "";
    let experienceEndDate = Experience.endDate || window.sessionStorage.getItem(id+"endDate") || "";

    return (
  <div className='border border-primary rounded d-block p-3 m-3'>
  <h3> Employer {index+1} </h3>
    <div className="row">

            {/* Col Left */}
            <div className="col-md-5">
                <div className="form-group">
                  <label>Employer</label>
                  <input type="text"
                         name="employer"
                         value = {experienceEmployer}
                         className="form-control"
                         placeholder="employer"
                         required="required"
                         data-error="Employer is required."
                         onChange={(event) => changed(event, id, 'experience', 'employer')} />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <label>Job Title</label>
                  <input type="text"
                         name="title"
                         value = {experienceTitle}
                         className="form-control"
                         placeholder="title"
                         required="required"
                         data-error="Job title is required."
                         onChange={(event) => changed(event, id, 'experience', 'title')} />
                  <div className="help-block with-errors"></div>
                </div>

            <div className="row">
              <div className="col-md-6">
              <label>Start Date</label>
                  <div className="form-group">
                      <input type="month"
                      name="startDate"
                      value={experienceStartDate}
                      className="form-control"
                      placeholder="Please enter the your start date (month, YYYY)"
                      onChange={(event) => changed(event, id, 'experience', 'startDate')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>

             <div className="col-md-6">
              <label>End Date</label>
                  <div className="form-group">
                      <input type="month"
                             name="endDate"
                             value = {experienceEndDate}
                             className="form-control"
                             placeholder="Please enter the your end date (month, YYYY)"
                             onChange={(event) => changed(event, id, 'experience', 'endDate')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>

              </div>
            </div>
            {/* /Col Left */}

            {/* Col Right */}
          <div className="col-md-7">
          <label>Job Duties</label>
              <div className="form-group">
                  <textarea className='form-contorl w-100'
                         name="duties"
                         value = {experienceDuties}
                         placeholder="job duties"
                         required="required"
                         rows='11'
                         data-error="Job duties are required."
                         onChange={(event) => changed(event, id, 'experience', 'duties')}>
                    </textarea>
                  <div className="help-block with-errors"></div>
              </div>
          </div>
          {/* /Col Right */}

      </div>
  </div>
  )
}

export default Experience;