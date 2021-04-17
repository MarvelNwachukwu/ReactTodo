import React from 'react';
import './scss/task.scss';
import firebase from '../firebase';
const Task = () => {
  //   firebase
  //     .firestore()
  //     .collection('task')
  //     .doc()
  //     .set({ taskName: 'call brandon' })
  //     .then((Response) => {
  //       console.log(Response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log(firebase.firestore);
  return (
    <div className='taskPg'>
      <div className='taskDetails'>
        <h3 className='taskName'>Buy apples from the grocery store</h3>
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
