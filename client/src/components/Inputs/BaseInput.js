import React from 'react';

const BaseInput = ({ changed, contact, button, dashboard  }) => {
    return(
        <div className="container border border-primary rounded p-5 mt-5 mb-5">

            {/* Header */}
            <div className="d-flex flex-row justify-content-center">
                <h1 className="text-center"> Basic Information </h1>
                {dashboard ? <div className="ml-auto">{button}</div> : ''}
            </div>
            {/* /Header */}

            {/* Body  */}
            <div className="row">

                {/* Col Left */}
                <div className="col-md-6">
                <label>Name *</label>
                    <div className="row mb-2">
                        <div className='col-md-6'>
                                <div className="row input-group">
                                    <div className="input-group-addon">F</div>
                                    <input type="text"
                                            name="name"
                                            value={contact && contact.firstName ? contact.firstName : ''}
                                            className="form-control w-50"
                                            placeholder="First Name *"
                                            required="required"
                                            data-error="Firstname is required."
                                            onChange={(event) => changed(event, "_", 'contact', 'firstName')} />
                                </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="row input-group">
                                <div className="input-group-addon">L</div>
                                <input type="text"
                                        name="lastName"
                                        value={contact && contact.lastName ? contact.lastName : ''}
                                        className="form-control w-50"
                                        placeholder="Last Name *"
                                        required="required"
                                        data-error="Last name is required."
                                        onChange={(event) => changed(event, "_", 'contact', 'lastName')} />
                            </div>
                        </div>
                    </div>

                    <label>Address</label>
                    <div className="row mb-2">
                      <div className='col-md-12'>
                            <div className="row input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-address-card-o fa-2x" aria-hidden="true"></i>
                                </div>
                                    <textarea type="text"
                                            name="address"
                                            value={contact && contact.address ? contact.address : ''}
                                            className="form-control"
                                            placeholder="address"
                                            required="required"
                                            data-error="Valid address is required."
                                            onChange={(event) => changed(event, "_", 'contact', 'address')} />
                            </div>
                            <div className="help-block with-errors"></div>
                        </div>
                      </div>

                    {/* Contact */}
                    <div className="row mb-2">
                        <div className='col-md-6'>
                        <label>Phone</label>
                                <div className="row input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <input type="tel"
                                            name="phone"
                                            value={contact && contact.phone ? contact.phone : ''}
                                            className="form-control"
                                            placeholder="phone"
                                            onChange={(event) => changed(event, "_", 'contact', 'phone')} />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                            <label >Email </label>
                                <div className="row input-group">
                                    <div className="input-group-addon">@</div>
                                    <input type="email"
                                            name="email"
                                            value={contact && contact.email ? contact.email : ''}
                                            className="form-control"
                                            placeholder="email"
                                            onChange={(event) => changed(event, "_", 'contact', 'email')} />
                                </div>
                                <div className="help-block with-errors"></div>
                            </div>
                    </div>
                    {/* /Contact */}

                </div>
                {/* /Col Left */}

                {/* Col Right */}
                <div className="col-md-6">
                        <div className="row form-group">
                        <label>Bio</label>
                            <textarea type="text"
                                    name="bio"
                                    value={contact && contact.bio ? contact.bio : ''}
                                    rows="5"
                                    className="form-control"
                                    placeholder="Please enter your bio"
                                    onChange={(event) => changed(event, "_", 'contact', 'bio')} />
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="row form-group">
                                <label>Current Job Title</label>
                                <input type="text"
                                        name="jobTitle"
                                        value={contact && contact.currentTitle ? contact.currentTitle : ''}
                                        className="form-control"
                                        placeholder="current job title"
                                        onChange={(event) => changed(event, "_", 'contact', 'currentTitle')} />
                                <div className="help-block with-errors"></div>
                            </div>
                </div>
                {/* /Col Right */}
            </div>
            {/* /Body */}

            {/* Footer */}
            <div className="row">

                <div className="col-md-6">
                        <label>Personal Website URL</label>
                        <div className="row input-group mb-2">
                            <div className="input-group-addon">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                            </div>
                            <input type="text"
                                    name="phone"
                                    className="form-control"
                                    value={contact && contact.site ? contact.site : ''}
                                    placeholder="Please enter personal site URL"
                                    onChange={(event) => changed(event, "_", 'contact', 'site')} />
                        </div>
                        <div className="help-block with-errors"></div>

                                <label>Profile Picture</label>
                                <div className="row input-group mb-2">
                                    <div className="input-group-addon">
                                        <i className="fa fa-picture" aria-hidden="true"></i>
                                    </div>
                                    <input type="text"
                                            name="profilePicture"
                                            value={contact && contact.profilePicture ? contact.profilePicture : ''}
                                            className="form-control"
                                            placeholder="Profile Picture"
                                            onChange={(event) => changed(event, "_", 'contact', 'profilePicture')} />
                                    <div className="help-block with-errors"></div>
                                </div>

                </div>
                <div className="col-md-6">
                    <div className="row form-group">
                        <label>GitHub URL</label>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </div>
                                <input type="text"
                                        name="github"
                                        value={contact && contact.github ? contact.github : ''}
                                        className="form-control"
                                        placeholder="Please enter github URL"
                                        onChange={(event) => changed(event, "_", 'contact', 'github')} />
                        </div>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="row form-group">
                        <label>LinkedIn URL</label>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </div>
                                <input type="text"
                                        name="github"
                                        value = {contact && contact.linkedin ? contact.linkedin : ''}
                                        className="form-control"
                                        placeholder="Please enter LinkedIn URL"
                                        onChange={(event) => changed(event, "_", 'contact', 'linkedin')} />
                        </div>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>
            {/* /Footer */}

    </div>
    )
}

export default BaseInput;