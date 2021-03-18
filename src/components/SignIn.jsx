import React from 'react';
import './scss/signin.scss';
import { Link } from 'react-router-dom';

const SignIn = (props) => {
  return (
    <React.Fragment>
      <div className='leftDivSignIn'>
        <p>First Time Here? </p>
        <Link to='signup'>
          <div id='joinNow'>join now</div>
        </Link>
        <div className='Img'></div>
      </div>
      <div className='rightDivSignIn formContainer'>
        <h2 id='welcome'>Welcome back 🙂</h2>
        <p id='signinInstruction'>
          To continue with your account, please login
        </p>

        <form action='' id='signinForm'>
          <div className='emailSection'>
            <div className='emailIcon'></div>
            <div className='inputsection'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='example@gmail.com'
              />
            </div>
          </div>
          <div className='passwordSection'>
            <div className='passwordIcon'></div>
            <div className='inputsection'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='**********'
              />
            </div>
          </div>
          <div className='submitWrapper'>
            <button type='submit' id='login'>
              Login
            </button>
            <div className='forgotPassword'>Forgot Password?</div>
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
export default SignIn;
