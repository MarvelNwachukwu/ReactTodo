import React, { useState } from 'react';
import '../components/scss/signup.scss';
import firebase from '../firebase';

const SignUp = () => {
  // states
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });

  // //Functions
  // const handleFormData = (event, type) => {
  //   switch (type) {
  //     case 'email':
  //       setFormData({ ...formData, email: event.target.value });
  //       break;
  //     case 'password':
  //       setFormData({ ...formData, password: event.target.value });
  //       break;
  //     default:
  //       return null;
  //   }
  // };

  const loginWithGoogle = (e) => {
    let auth = firebase.auth();
    let provider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        let credential = result.credential;
        let token = credential.accessToken;
        let user = result.user;
        // console.log(t);
      })
      .catch((err) => {
        let errorCode = err.code;
        let errorMessage = err.message;
        let email = err.email;
        let credential = err.credential;
        console.table(errorCode, errorMessage, email, credential);
      });
    // console.log(this);
  };

  const loginWithGithub = () => {
    let auth = firebase.auth();
    let provider = new firebase.auth.GithubAuthProvider();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        // return result;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.table(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <>
      <div id='signUpNavMenu' onLoad={console.clear()}>
        <div id='logo'></div>
      </div>
      <h2>
        A task management app for the <br />
        time conscious
      </h2>
      <p>To use our services, please create an account</p>
      <div id='signUpButtons'>
        <div id='apple'></div>
        <div id='gitHub' onClick={loginWithGithub}></div>
        <div id='google' onClick={loginWithGoogle}></div>
      </div>
    </>
  );
};
// let userName = this.this.user;
// console.log(this === window);
export default SignUp;
