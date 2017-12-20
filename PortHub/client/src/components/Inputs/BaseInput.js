import React from 'react';

const BaseInput = ({ changed }) => {
    let contactFirstName = window.sessionStorage.getItem('contactfirstName') || "";
    let contactLastName = window.sessionStorage.getItem('contactlastName') || "";
    let contactAddress = window.sessionStorage.getItem('contactaddress') || "";
    let contactPhone = window.sessionStorage.getItem('contactphone') || "";
    let contactEmail = window.sessionStorage.getItem('contactemail') || "";
    let contactBio = window.sessionStorage.getItem('contactbio') || "";
    let contactCurrentTitle = window.sessionStorage.getItem('contactcurrentTitle') || "";
    let contactSite = window.sessionStorage.getItem('contactsite') || "";
    let contactGitHub = window.sessionStorage.getItem('contactgithub') || "";    

    return(
        <div className="container border border-primary rounded p-5 mt-5 mb-5">
            <h1 className="text-center"> Please enter your information </h1> 
            <div className="row">
                <div className="col-md-6">
                    <label>Name *</label>
                    <div className="row">
                        <div className="form-inline w-100">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon">F</div>                        
                                <input type="text" 
                                        name="name"
                                        value={contactFirstName} 
                                        className="form-control w-50" 
                                        placeholder="First Name *" 
                                        required="required" 
                                        data-error="Firstname is required."
                                        onChange={(event) => changed(event, "_", 'contact', 'firstName')} />
                            </div>
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon">L</div>  
                                <input type="text" 
                                        name="lastName"
                                        value={contactLastName}
                                        className="form-control w-50" 
                                        placeholder="Last Name *" 
                                        required="required" 
                                        data-error="Last name is required."
                                        onChange={(event) => changed(event, "_", 'contact', 'lastName')} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group w-100">
                            <label>Address</label>
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon">
                                    <i className="fa fa-address-card-o fa-2x" aria-hidden="true"></i>                                
                                </div>  
                                    <textarea type="text" 
                                            name="address"
                                            value={contactAddress} 
                                            className="form-control" 
                                            placeholder="address" 
                                            required="required" 
                                            data-error="Valid address is required."
                                            onChange={(event) => changed(event, "_", 'contact', 'address')} />
                            </div>
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="row">
                            <div className="form-group w-50">
                                <label>Phone</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-phone" aria-hidden="true"></i>                               
                                    </div> 
                                    <input type="tel" 
                                            name="phone"
                                            value={contactPhone} 
                                            className="form-control" 
                                            placeholder="phone"
                                            onChange={(event) => changed(event, "_", 'contact', 'phone')} />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="form-group w-50">
                                <label >Email </label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon">@</div>
                                    <input type="email" 
                                            name="email"
                                            value={contactEmail} 
                                            className="form-control" 
                                            placeholder="email" 
                                            onChange={(event) => changed(event, "_", 'contact', 'email')} />
                                </div>
                                <div className="help-block with-errors"></div>
                            </div>
                    </div>  
                </div>
                <div className="col-md-6">
                        <div className="form-group">
                            <label>Bio</label>
                            <textarea type="text" 
                                    name="bio"
                                    value={contactBio} 
                                    rows="5"
                                    className="form-control" 
                                    placeholder="Please enter your bio"
                                    onChange={(event) => changed(event, "_", 'contact', 'bio')} />
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                                <label>Current Job Title</label>
                                <input type="text" 
                                        name="jobTitle"
                                        value={contactCurrentTitle} 
                                        className="form-control" 
                                        placeholder="current job title" 
                                        onChange={(event) => changed(event, "_", 'contact', 'currentTitle')} />
                                <div className="help-block with-errors"></div>
                            </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Personal Website URL</label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                            </div>
                            <input type="text" 
                                    name="phone" 
                                    className="form-control"
                                    value={contactSite} 
                                    placeholder="Please enter personal site URL"
                                    onChange={(event) => changed(event, "_", 'contact', 'site')} />
                        </div>
                        <div className="help-block with-errors"></div>
                    </div>   
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>GitHub URL</label>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </div>                            
                                <input type="text" 
                                        name="github"
                                        value={contactGitHub}
                                        className="form-control" 
                                        placeholder="Please enter github URL"
                                        onChange={(event) => changed(event, "_", 'contact', 'github')} />
                        </div>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default BaseInput;