import React from 'react';
import '../components/scss/body.scss';
import Task from '../components/task';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

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
    <div id='motherDiv' onLoad={(greetUser, console.clear)}>
      <section className='leftSect'>
        <Task />
        <Task />
        <Task />
      </section>
      <section className='rightSect'>
        <p id='greetingText'>Good Afternoon, Aurora</p>
        <div className='addNewTask'>
          <form>
            <input type='text' placeholder='ADD SOMETHING NEW' />
            <div className='timerOptions'>
              <div className='calender'></div>
              {/* <DatePicker /> */}
              <div className='clock'></div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Body;
