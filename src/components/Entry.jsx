import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './scss/entry.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Entry = (props) => {
  const [oldState, newState] = useState('Test');
  return (
    <Router>
      <div className='entryContent'>
        <SignIn />
        {/* <SignUp /> */}

        <Switch>
          <Route path='./SignUp'>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Entry;
