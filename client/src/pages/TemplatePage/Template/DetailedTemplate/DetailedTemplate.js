import React from 'react';
import Aux from '../../../../components/Auxiliary/Auxiliary';
import { Link } from 'react-router-dom';
import './DetailedTemplate.css';
import { OsloPreview, LawrencePreview, LondonPreview, MontrealPreview }from '../../../../components/WebsitePreviews/';

const DetailedTemplate = ({ closeModal, img, src, title, type, guestContinueShow, isAuthenticated }) => {
let iframeSrc = ''; 
              switch (title){
                case 'Montreal':
                  iframeSrc = MontrealPreview();
                  break;
                case 'Oslo':
                  iframeSrc =  OsloPreview();
                  break;
                case 'London':
                  iframeSrc =  LondonPreview();
                  break;
                case 'Lawrence':
                  iframeSrc = LawrencePreview();
                  break;
                default:
                  iframeSrc = '';
              }
    return (
    <Aux>
      <div className="modalHeader d-flex justify-content-center">
        <div className="modalTitle">
          <p className='align-self-center'>{title}</p>
        </div>
        <div className='ml-auto'>
            {isAuthenticated ? 
            <Link to='/inputPage' className="btn btn-success mr-4 btn-sm" title={title}> 
              Select
            </Link>        
            : <a onClick={guestContinueShow} className="btn btn-success mr-4 btn-sm" title={title}> 
                Select
              </a>}      
            <a onClick={closeModal} className="btn btn-danger">
                <i className="fa fa-times"></i>          
            </a>
        </div>
      </div>
        <div className='container flex-column' style={{textAlign:'center'}}>
            {type==="resume" ? <img src={img} alt={title}/> : 
            <iframe srcDoc={iframeSrc}  alt={title} title={title} zoom='.4' 
                      style={{width:'100%', height:'90vh'}}/>} 

        </div>
    </Aux>
    )

}

export default DetailedTemplate;