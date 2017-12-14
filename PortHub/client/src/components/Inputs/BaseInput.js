import React from 'react';

const BaseInput = ({ changed }) => {
    return(
      <div className='container'>
        <h1> Please enter your information </h1>      
        <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Firstname *</label>
                      <input type="text" 
                             name="name" 
                             className="form-control" 
                             placeholder="Please enter your firstname *" 
                             required="required" 
                             data-error="Firstname is required."
                             onChange={(event) => changed(event, "_", 'contact', 'firstName')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Lastname *</label>
                      <input type="text" 
                             name="surname" 
                             className="form-control" 
                             placeholder="Please enter your lastname *" 
                             required="required" 
                             data-error="Lastname is required."
                             onChange={(event) => changed(event, "_", 'contact', 'lastName')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-3">
                  <div className="form-group">
                      <label >Email *</label>
                      <input type="email" 
                             name="email" 
                             className="form-control" 
                             placeholder="Please enter your email *" 
                             required="required" 
                             data-error="Valid email is required."
                             onChange={(event) => changed(event, "_", 'contact', 'email')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" 
                             name="phone" 
                             className="form-control" 
                             placeholder="Please enter your phone"
                             onChange={(event) => changed(event, "_", 'contact', 'phone')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Bio</label>
                      <input type="bio" 
                             name="bio" 
                             className="form-control" 
                             placeholder="Please enter your bio"
                             onChange={(event) => changed(event, "_", 'contact', 'bio')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Current Job Title</label>
                      <input type="text" 
                             name="email" 
                             className="form-control" 
                             placeholder="Please enter your current job title" 
                             required="required" 
                             data-error="Valid email is required."
                             onChange={(event) => changed(event, "_", 'contact', 'currentTitle')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Personal Website URL</label>
                      <input type="text" 
                             name="phone" 
                             className="form-control" 
                             placeholder="Please enter personal site URL"
                             onChange={(event) => changed(event, "_", 'contact', 'site')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Address</label>
                      <input type="text" 
                             name="email" 
                             className="form-control" 
                             placeholder="Please enter your address" 
                             required="required" 
                             data-error="Valid address is required."
                             onChange={(event) => changed(event, "_", 'contact', 'address')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>GitHub URL</label>
                      <input type="text" 
                             name="github" 
                             className="form-control" 
                             placeholder="Please enter github URL"
                             onChange={(event) => changed(event, "_", 'contact', 'github')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
      </div>)
}

export default BaseInput;