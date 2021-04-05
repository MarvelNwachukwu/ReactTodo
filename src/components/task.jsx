import React from 'react';
import './scss/task.scss';
const Task = () => {
  return (
    <div className='taskPg'>
      <div className='taskDetails'>
        <h3 className='taskName'>Call LeBron</h3>
        <p className='dueDate'>Set for: Monday, 2:30 pm</p>
        <p className='dueIn'>Due in: 3hrs, 30mins 15secs</p>
      </div>
      <div className='taskButtons'>
        <div id='cancel_btn'></div>
        <div id='done_btn'></div>
        <div id='delete_btn'></div>
      </div>
    </div>
  );
};

export default Task;
