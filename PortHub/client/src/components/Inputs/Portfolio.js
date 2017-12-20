import React from 'react';

const Portfolio = ({ id, index, changed }) => {
  return (
      <div className='w-75 m-2 border border-primary rounded'>
        <h3> Portfolio {index+1} </h3>
          <div className="row border-1 rounded">
              <div className="col-md-4">
                  <div className="form-group">
                      <label >Title</label>
                      <input type="text" 
                             name="title" 
                             className="form-control" 
                             placeholder="portfolio title" 
                             required="required" 
                             data-error="Valid title is required."
                             onChange={(event) => changed(event, id, 'portfolio', 'title')} />
                      <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                      <label>Image</label>
                      <input type="text" 
                             name="portfolioImage" 
                             className="form-control" 
                             placeholder="portfolio image"
                             onChange={(event) => changed(event, id, 'portfolio', 'img')} />
                      <div className="help-block with-errors"></div>
                  </div>                  
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <label>Description</label>
                        <label htmlFor="description"></label>
                        <textarea className="form-control" 
                            id="description" 
                            rows="3"
                            placeholder="portfolio description"                            
                            onChange={(event) => changed(event, id, 'portfolio', 'description')}>
                        </textarea>                    
                  </div>
              </div>
          </div>
        </div>
  )

}

export default Portfolio;