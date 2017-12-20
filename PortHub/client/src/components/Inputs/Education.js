import React  from 'react';

const Education = ({id, index, changed}) => { 
    return (
        <div className='m-5 p-5 border border-primary rounded'>
            <h3> Education {index+1} </h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>School attended</label>
                        <input type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Please enter the school you attended" 
                        required="required" 
                        data-error="School name is required."
                        onChange={(event) => this.props.changed(event, this.props.id, 'education', 'schoolName')} />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>School Location (City, ST)</label>
                        <input type="text" 
                                name="location" 
                                className="form-control" 
                                placeholder="schools city and state." 
                                required="required" 
                                data-error="Location is required."
                                onChange={(event) => this.props.changed(event, this.props.id, 'education', 'schoolLocation')} />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Type of Degree</label>
                        <select className="form-control" 
                                onChange={(event) => this.props.changed(event, this.props.id, 'education', 'degreeType')}>
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
                                className="form-control" 
                                placeholder="field of study" 
                                required="required" 
                                data-error="field of study is required."
                                onChange={(event) => this.props.changed(event, this.props.id, 'education', 'major')} />
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
                            className="form-control" 
                            placeholder="Please enter the your end date (month, YYYY)" 
                            required="required" 
                            onChange={(event) => changed(event, id, 'education', 'startDate')} />
                            <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;