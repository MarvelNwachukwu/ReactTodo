import React from 'react';
import Body from './pages/body';
import SignUp from './pages/SignUp';
import NotFound from './pages/404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './firebase';

function App() {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  let auth = firebase.auth();
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserLoggedIn(true);
    }
  });
  return !userLoggedIn ? (
    <Router>
      <Switch>
        <Route path='/' component={SignUp} />
        <Route path='/signup' component={SignUp} />
        <Route component={SignUp} />
      </Switch>
    </Router>
  ) : (
    <Router>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
