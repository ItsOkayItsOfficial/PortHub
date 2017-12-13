import React from 'react';

const BaseInput = () => {
    return(
      <div className='container'>
        <h1> Please enter your information </h1>      
        <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Firstname *</label>
                      <input type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Lastname *</label>
                      <input type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <label >Email *</label>
                      <input type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" name="phone" className="form-control" placeholder="Please enter your phone" />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Current Job Title</label>
                      <input type="text" name="email" className="form-control" placeholder="Please enter your current job title" required="required" data-error="Valid email is required." />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Personal Website URL</label>
                      <input type="text" name="phone" className="form-control" placeholder="Please enter personal site URL" />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Address</label>
                      <input type="text" name="email" className="form-control" placeholder="Please enter your address" required="required" data-error="Valid email is required." />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>GitHub URL</label>
                      <input type="text" name="phone" className="form-control" placeholder="Please enter github URL" />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
      </div>)
}

export default BaseInput;