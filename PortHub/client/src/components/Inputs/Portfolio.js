import React from 'react';

const Portfolio = ({ id, index, changed }) => {
  return (
      <div className='container'>
        <h3> Portfolio {index+1} </h3>
          <div className="row">
              <div className="col-md-3">
                  <div className="form-group">
                      <label >Title</label>
                      <input type="email" 
                             name="email" 
                             className="form-control" 
                             placeholder="portfolio title" 
                             required="required" 
                             data-error="Valid email is required."
                             onChange={(event) => changed(event, id, 'portfolio', 'title')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="form-group">
                      <label>Description</label>
                      <input type="tel" 
                             name="phone" 
                             className="form-control" 
                             placeholder="portfolio description"
                             onChange={(event) => changed(event, id, 'portfolio', 'description')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Image</label>
                      <input type="bio" 
                             name="bio" 
                             className="form-control" 
                             placeholder="portfolio image"
                             onChange={(event) => changed(event, id, 'portfolio', 'img')} />
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
          </div>
        </div>
  )

}

export default Portfolio;