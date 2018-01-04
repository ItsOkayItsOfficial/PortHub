import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

const Skills = ({index, changed, id, skills}) => {
  const Handle = Slider.Handle;
    let Skills = {};
    skills[index] ? Skills = skills[index] : Skills={};

    let skillTitle = Skills.skill || window.sessionStorage.getItem(id+"skill") || "";
const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};
    // let skillLevel = window.sessionStorage.getItem(id+"description") || "";  
  return (<div className='container'>
    <div className="row">
          <div className="col-md-6">
              <span className="form-group d-inline-flex flex-row align-items-baseline">
                  <h5 className="mr-1">Skill</h5>
                  <input type="text" 
                         name="title" 
                         value = {skillTitle}
                         className="form-control" 
                         placeholder="Please enter your skill" 
                         required="required" 
                         data-error="skill title is required."
                         onChange={(event) => changed(event, id, 'skills', 'skill')} />
                  </span>
          </div>
      </div>
      <div className='row' style={{margin: '0 0 5px 0'}}>
        <h5 className="mr-1">Rating</h5>
        <Slider
          min={0}
          max={100}
          step={10}
          handle={handle}
          onChange={(value) => changed(value, id, 'skills', 'rating')} 
        />
      </div>
  </div>)
}


export default Skills;