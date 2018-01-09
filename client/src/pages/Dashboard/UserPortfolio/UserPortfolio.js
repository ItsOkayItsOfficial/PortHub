import React from 'react';
import Portfolio from '../../../components/Inputs/Portfolio';

const UserPortfolio = ({changed, portfolio, updateUserInputs}) => {

  return (
  <div style={{textAlign:'center'}}>
    <div>
        <Portfolio
        changed={changed}
        index={0}
        id={'portfolio0'}
        portfolio={portfolio} />
        <Portfolio
        changed={changed}
        index={1}
        id={'portfolio1'}
        portfolio={portfolio} />
      </div>
    <div>
        <Portfolio
        changed={changed}
        index={2}
        id={'portfolio2'}
        portfolio={portfolio} />
        <Portfolio
        changed={changed}
        index={3}
        id={'portfolio3'}
        portfolio={portfolio} />
    </div>
      <div>
        <button className="btn btn-success sitebtn" onClick={updateUserInputs}>Update</button>
      </div>
  </div>
  )
}

export default UserPortfolio;