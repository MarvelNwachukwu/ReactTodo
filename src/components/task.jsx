import React from 'react';
import './scss/task.scss';
import firebase from '../firebase';
const Task = ({ taskData }) => {
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
        <h3 className='taskName'>{taskData.task} </h3>
      </div>
      <div className='taskButtons'>
        <div id='delete_btn'></div>
        <div id='done_btn'></div>
      </div>
    </div>
  );
};

export default Task;
