import React, { useRef, useState } from 'react';
import './scss/signup.scss';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

const SignUp = () => {
  // states
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  //Functions
  const handleFormData = (event, type) => {
    switch (type) {
      case 'email':
        setFormData({ ...formData, email: event.target.value });
        break;
      case 'password':
        setFormData({ ...formData, password: event.target.value });
        break;
      default:
        return null;
    }
  };

  const saveInput = (e) => {
    e.preventDefault();
    let auth = firebase.auth();

    auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then((credentials) => {
        console.log(credentials);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <React.Fragment>
      <div className='entryContent'>
        <div className='leftSignUpDiv'>
          <p>have an account?</p>
          <Link to='/signin' style={{ textDecoration: 'none' }}>
            <div id='continue'>Sign In</div>
          </Link>
        </div>

        <div className='rightSignUpDiv'>
          <p id='hello'>hello there! 👋</p>
          <p id='signUpInstruction'>
            To use our services, please create an account
          </p>

          <form onSubmit={saveInput}>
            {/* <div id='signupName'>
            <div id='nameIcon'></div>
            <div className='inputSection'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Marvellous'
              />
            </div>
          </div> */}
            <div id='signupEmail'>
              <div id='emailIcon'></div>
              <div className='inputSection'>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='example@gmail.com'
                  onChange={(event) => {
                    handleFormData(event, 'email');
                  }}
                  required
                />
              </div>
            </div>
            <div id='signupPassword'>
              <div id='passwordIcon'></div>
              <div className='inputSection'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='**********'
                  onChange={(event) => {
                    handleFormData(event, 'password');
                  }}
                  required
                />
              </div>
            </div>
            {/* <div id='confirmPassword'>
              <div id='passwordIcon'></div>
              <div className='inputSection'>
                <label htmlFor='passwordRepeat'>Confirm Password</label>
                <input
                  type='password'
                  name='password'
                  id='passwordRepeat'
                  placeholder='**********'
                  ref={passwordRef}
                  required
                />
              </div>
            </div> */}
            <div className='submitWrapper'>
              <button type='submit' id='signup'>
                Sign Up
              </button>
            </div>
          </form>
          <div className='continueWith'>
            <p>or you can continue with</p>
            <div className='options'>
              <div id='apple'></div>
              <div id='github'></div>
              <div id='google'></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
