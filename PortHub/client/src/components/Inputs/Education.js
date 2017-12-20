import React  from 'react';


const Education = ({id, index, changed}) => { 
    let educationName = window.sessionStorage.getItem(id+"schoolName") || "";
    let educationLocation = window.sessionStorage.getItem(id+"schoolLocation") || "";
    let educationMajor = window.sessionStorage.getItem(id+"major") || "";
    let educationStartDate = window.sessionStorage.getItem(id+"startDate") || "";    
    let educationEndDate = window.sessionStorage.getItem(id+"endDate") || ""; 

    return (
        <div className='m-5 p-5 border border-primary rounded'>
            <h3> Education {index+1} </h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>School attended</label>
                        <input type="text" 
                        name="name" 
                        value = {educationName}
                        className="form-control" 
                        placeholder="Please enter the school you attended" 
                        required="required" 
                        data-error="School name is required."
                        onChange={(event) => changed(event, id, 'education', 'schoolName')} />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>School Location (City, ST)</label>
                        <input type="text" 
                                name="location" 
                                value={educationLocation}
                                className="form-control" 
                                placeholder="schools city and state." 
                                required="required" 
                                data-error="Location is required."
                                onChange={(event) => changed(event, id, 'education', 'schoolLocation')} />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Type of Degree</label>
                        <select className="form-control" 
                                onChange={(event) => changed(event, id, 'education', 'degreeType')}>
                        <option>Other</option>
                        <option>Bachelor of Science</option>
                        <option>Master of Science</option>
                        <option>Bachelor of Arts</option>
                        <option>Master of Arts</option>
                        <option>Continuing Education</option>

                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Field of Study</label>
                        <input type="text" 
                                name="name" 
                                value={educationMajor}
                                className="form-control" 
                                placeholder="field of study" 
                                required="required" 
                                data-error="field of study is required."
                                onChange={(event) => changed(event, id, 'education', 'major')} />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Start Date</label>
                        <input type="month" 
                            name="name" 
                            value = {educationStartDate}
                            className="form-control" 
                            placeholder="Please enter the your start date (month, YYYY)" 
                            required="required" 
                            onChange={(event) => changed(event, id, 'education', 'startDate')} />
                            <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>End Date</label>
                        <input type="month" 
                            name="name"
                            value = {educationEndDate} 
                            className="form-control" 
                            placeholder="Please enter the your end date (month, YYYY)" 
                            required="required" 
<<<<<<< HEAD
                            onChange={(event) => this.props.changed(event, id, 'education', 'endDate')} />
=======
                            onChange={(event) => changed(event, id, 'education', 'endDate')} />
>>>>>>> 530a0481a4a7554afaf63b37e28298844c7faa66
                            <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;