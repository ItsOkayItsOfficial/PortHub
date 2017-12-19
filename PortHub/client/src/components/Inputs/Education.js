import React, { Component }  from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Education extends Component{
    constructor (props) {
        super(props);
        this.state ={
            startDate: moment(),
            endDate: moment(),
            education:{}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }
    handleChange(date) {
        this.setState({
          startDate: date
        });
    }
    handleEndChange(date) {
        this.setState({
          endDate: date
        });

    }
    render (){
        
    return (
        <div className='container'>
            <h3> Education {this.props.index+1} </h3>
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
                        <DatePicker
                                selected={this.state.startDate}
                                value={moment(this.state.startDate).format("MM/YYYY")} 
                                onSelect={this.handleChange}
                                onChange={(event) => this.props.changed(event, this.props.id, 'education', 'startDate')}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>End Date</label>
                        <DatePicker
                                selected={this.state.endDate}
                                value={moment(this.state.endDate).format("MM/YYYY")} 
                                onSelect={this.handleEndChange}
                                onChange={(event) => this.props.changed(event, this.props.id, 'education', 'endDate')}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Education;