import React from 'react';
import './scss/signup.scss';

const SignUp = () => {
  return (
    <React.Fragment>
      <div className='leftSignUpDiv'>
        <p>already got an account?</p>
        <div id='continue'>Sign In</div>
      </div>

      <div className='rightSignUpDiv'>
        <p id='hello'>hello there! 👋</p>
        <p id='signUpInstruction'>
          To use our services, please create an account
        </p>

        <form action=''>
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
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='example@gmail.com'
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
                placeholder='********'
              />
            </div>
          </div>
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
    </React.Fragment>
  );
};

export default SignUp;
