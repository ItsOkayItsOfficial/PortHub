import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Alert from 'react-s-alert'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './SuccessPage.css';

const SuccessPage = ({ redirect, currentUser, currentTemplate }) => {
  const html = localStorage.getItem('html');
  let accessToken = localStorage.getItem('accessToken')
                    ? localStorage.getItem('accessToken') : '';
  if ((!accessToken && !currentUser) || Object.keys(currentTemplate).length === 0) {
    return <Redirect to={'/noMatch'} />
  }
  return (
  <div className='container successWrapper'>    
    <div id='info' className="row p-4 m-0">
          <div className="row w-100 d-flex justify-content-center moreInfo-title">Success! What's Next?</div>
          <div className="row w-100 d-flex justify-content-around">
                <div className="col-lg-6 d-flex flex-column justify-content-start align-items-center moreInfo-item">
                      <p className="m-0 mb-2"><i className="fa fa-file-text fa-3x"></i></p>
                      <p className="m-0 mb-2">View HTML</p>
                      <p className="mt-4 text-align-right">Are you a web devloper looking to tweak the HTML? Copy it here for you to customize.  All the CSS is loaded for you, no external stylesheet is necessary! Follow the href in the link tag labeled "Custom CSS" to find the raw CSS to download.</p>
                      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#HTMLModal">
                        View
                      </button>                      
                </div>
                
                <div className="col-lg-6 d-flex flex-column justify-content-start align-items-center moreInfo-item">
                      <p className="m-0 mb-2"><i className="fa fa-globe fa-3x"></i></p>
                      <p className="m-0 mb-2">Publish to GitHub</p>
                      <p className="mt-4 text-align-right">Host your site on a GitHub Page for a free, fully functional portfolio web site. Because <strong>you</strong> host it on your Github account, feel free to customize it anyway you want!</p>
                      <Link to={'/siteLoader'} style={{margin: 'auto'}}><button className='btn btn-success'> Publish to GitHub </button></Link>            <ol>What Porthub will do:
                        <li>Create a GitHub repository named yourAccountName.github.io. (if you don't already have one)</li>
                        <li>insert your new portfolio into the repository.</li>
                        <li>return to you a <strong>LIVE URL</strong> for you to share with everyone.</li>
                        <li>And that's it, your portfolio will be up and running for future employers to marvel over.</li>
                      </ol>            
                </div>
          </div>
    </div>
    
    {/* HTML Modal */}
        <div className="modal fade" id="HTMLModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Your Website's HTML</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                  <textarea id='htmlText' className='htmlField' defaultValue={html}></textarea>
              </div>
              <div className="modal-footer">
                <CopyToClipboard text={html}
                    onCopy={() => Alert.success('Copied to clipboard', {
                                    position:'top-left',
                                    effect: 'jelly',
                                    timeout: 3000,
                                    offset: 55
                            })}>
                    <button className='btn btn-success'><i className="fa fa-clipboard 2x" aria-hidden="true">Copy to Clipboard</i></button>
                  </CopyToClipboard>              
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

  </div>
  )
}

export default SuccessPage;