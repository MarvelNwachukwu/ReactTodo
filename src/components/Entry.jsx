import React from 'react';
import './scss/entry.scss';
import SignIn from './SignIn';

const Entry = (props) => {
  return (
    <div>
      {/* <h1 id='name'>Timely</h1> */}
      <div className='entryContent'>
        <div className='leftDiv'>
          <p>First Time Here? </p>
          <div id='joinNow'>join now</div>
          <div className='Img'></div>
        </div>

        <div className='rightDiv formContainer'>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Entry;
