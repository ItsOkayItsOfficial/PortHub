import React from 'react';

const Portfolio = ({ id, index, changed , portfolio}) => {
    let Portfolio = {};
    portfolio[index] ? Portfolio=portfolio[index] : Portfolio={};

    let portfolioTitle = Portfolio.title || window.sessionStorage.getItem(id+"title") || "";
    let portfolioImage = Portfolio.img || window.sessionStorage.getItem(id+"img") || "";
    let portfolioUrl = Portfolio.url || window.sessionStorage.getItem(id+"url") || "";
    let portfolioDescription = Portfolio.description || window.sessionStorage.getItem(id+"description") || "";

  return (
     <div className="border border-primary rounded d-block p-3 mt-5 mb-5 ml-2 mr-2">
        <h3> Portfolio {index+1} </h3>
        <div className='row'>
        {/* Col Left */}
        <div className="col-md-5">
                <div className="form-group">
                <label >Title</label>
                    <input type="text"
                            name="title"
                            value={portfolioTitle}
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
                            value={portfolioImage}
                            className="form-control"
                            placeholder="portfolio image"
                            onChange={(event) => changed(event, id, 'portfolio', 'img')} />
                    <div className="help-block with-errors"></div>
                </div>

                <div className="form-group">
                <label>Project URL</label>
                    <input type="text"
                            name="portfolioURL"
                            value={portfolioUrl}
                            className="form-control"
                            placeholder="portfolio URL"
                            onChange={(event) => changed(event, id, 'portfolio', 'url')} />
                    <div className="help-block with-errors"></div>
                </div>

        </div>
        {/* /Col Left */}

        {/* Col Right */}
        <div className='col-md-7'>
                  <div className="form-group">
                  <label>Description</label>
                        <label htmlFor="description"></label>
                        <textarea className="form-control"
                            id="description"
                            value = {portfolioDescription}
                            rows="8"
                            placeholder="portfolio description"
                            onChange={(event) => changed(event, id, 'portfolio', 'description')}>
                        </textarea>
                  </div>
        </div>
        {/* /Col Right */}

    </div>
    </div>
  )

}

export default Portfolio;