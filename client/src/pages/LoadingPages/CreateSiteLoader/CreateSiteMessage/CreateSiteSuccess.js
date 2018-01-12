import React from 'react';
//import './CreateSiteSuccess.css';

const CreateSiteMessage = ({ login, file }) => {
  return (
    <div className='CreateSiteSuccessContainer' style={{height:"100vh"}}>
          <div className="row">
              <div className="row w-100 d-flex justify-content-center">
                  <span className="title">Congratulations!</span>
              </div>
              <div className="row w-100 d-flex flex-row justify-content-around">
                    <div className="col-lg-6 d-flex flex-column justify-content-around align-items-stretch">
                        <div>
                          <p><i className="fa fa-globe fa-3x"></i></p>
                        </div>
                        <div>
                          <p className="text-align-center">View Your Site!</p>
                          <p className="text-align-center">Your new personal portfolio site is now hosted at</p>
                          <p><a href={`https://${login}.github.io/${file.split('.').shift()}`} target='_blank' rel="noopener noreferrer">{`${login}.github.io/${file.split('.').shift()}`}</a>. </p>
                          <p className="text-align-center">However, it may take a few minutes to appear.</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 d-flex flex-column justify-content-start align-items-center p-0">
                          <p>
                              Here are a few steps you may want to take to in the meantime:
                          </p>
                          <p>
                              Edit the name of your portfolio file <a href={`https://github.com/${login}/${login}.github.io/edit/master/${file}`} target='_blank'>here</a>. Our names are chosen at random. <strong>NOTE:</strong> This will change the name of the site your portfolio is hosted at, it will now be {`www.${login}.github.io/<newfilename>`}                    
                          </p>
                          <p>
                              Clone your GitHub pages repository to your local computer. This will allow you to play around and customize even more, and then add your changes directly to your hosted portfolio site using git. For more info on cloning a repository go  <a href='https://help.github.com/articles/cloning-a-repository/' target='_blank' rel="noopener noreferrer">here</a>.
                          </p>
                    </div>
              </div>
              <div className="row w-100 d-flex flex-row justify-content-around">
                    {/* Buttons */}
                    <div id='buttons' className="row mx-auto d-flex flex-row justify-content-around">
                          <div className="col-lg-4 col-sm-8 d-flex text-center">
                            <a href='/createsite' className="btn btn-warning mx-4 w-100 d-md-block btn-landingPage">Create a Portfolio Website</a>
                          </div>
                          <div className="col-lg-4 col-sm-8 d-flex text-center">
                              <a href='/createresume' className="btn btn-info mx-4 w-100 d-md-block btn-landingPage">Create a Resume</a>
                          </div>
                    </div>              
              </div>
          </div>
    </div>
  )
}

export default CreateSiteMessage;