import React from 'react';
import './CreateSiteSuccess.css';


const CreateSiteMessage = ({ login, file }) => {
  return (
    <div className='d-flex container CreateSiteSuccessContainer'>
    <div className='d-flex flex-column p-2 justify-content-center align-items-center successContent'>
        <h1 className='p-2 successHeader'> Congratulations! </h1>
        <h5> Your new personal portfolio site is now hosted at <a href={`www.${login}.github.io/${file.split('.').shift()}`} target='_blank' rel="noopener noreferrer">{`www.${login}.github.io/${file.split('.').shift()}`}</a>. However, it may take a few minutes to appear.</h5>
      <div className='successSteps'>
        <br></br><h6>Here are a few steps you may want to take to in the meantime:</h6>
        <ul>
          <li style={{margin: '24px 0'}}>Edit the name of your portfolio file <a href={`https://github.com/${login}/${login}.github.io/edit/master/${file}`} target='_blank'>here</a>. Our names are chosen at random. <strong>NOTE:</strong> This will change the name of the site your portfolio is hosted at, it will now be {`www.${login}.github.io/<newfilename>`}</li>
          <li>Clone your GitHub pages repository to your local computer. This will allow you to play around and customize even more, and then add your changes directly to your hosted portfolio site using git. For more info on cloning a repository go  <a href='https://help.github.com/articles/cloning-a-repository/' target='_blank' rel="noopener noreferrer">here</a>.</li>
        </ul>
      </div>
        <h3> What would you like to do now? </h3>
        <div className='flex-row'>
          <a href='/createsite' className="btn btn-warning successButton">Create a Portfolio Website</a>
          <a href='/createresume' className="btn btn-info successButton">Create a Resume</a>
        </div>
    </div>
    </div>

  )
}

export default CreateSiteMessage;