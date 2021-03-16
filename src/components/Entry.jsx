import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/entry.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Entry = (props) => {
  const [oldState, newState] = useState('Test');
  return (
    <div className='entryContent'>
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
};

export default Entry;
