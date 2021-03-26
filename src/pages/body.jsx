import React from 'react';
import '../components/scss/body.scss';
import { user } from './SignUp';

const Body = (props) => {
  const greetUser = (event) => {
    const newDate = new Date();
    const hour = newDate.getHours();
    console.log(event);

    hour < 12
      ? console.log('Good Morning')
      : hour >= 12 && hour <= 16
      ? console.log('Good Afternoon')
      : hour > 16
      ? console.log('Good Evening')
      : console.log('Hello There');
  };
  return (
    <div id='motherDiv'>
      <section className='leftSect'></section>
      <section className='rightSect'>
        <p id='greetingText' onLoad={greetUser}>
          Good Afternoon, Aurora
        </p>
        <div className='addNewTask'>
          <form>
            <input type='text' placeholder='ADD SOMETHING NEW' />
            <div className='timerOptions'>
              <div className='calender'></div>
              <div className='clock'></div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Body;
