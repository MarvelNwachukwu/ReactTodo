import React, { useRef } from 'react';
import { useState } from 'react';
import '../components/scss/body.scss';
import Task from '../components/task';
import firebase from '../firebase';

const Body = (props) => {
  let input = useRef();
  let greetingText = useRef();
  let [newTask, setNewTask] = useState('');
  let uniqueID = new Date().getTime();

  console.log(uniqueID);
  // firebase
  let user = firebase.auth().currentUser;
  let firstName = user.displayName.split(' ')[0];

  const greetUser = (event) => {
    const newDate = new Date();
    const hour = newDate.getHours();

    hour < 12
      ? (greetingText.current.innerHTML = `Good Morning ${firstName}`)
      : hour >= 12 && hour <= 16
      ? (greetingText.current.innerHTML = `Good Afternoon ${firstName}`)
      : hour > 16
      ? (greetingText.current.innerHTML = `Good Evening ${firstName}`)
      : (greetingText.current.innerHTML = `Hello There ${firstName}`);
  };

  setTimeout(() => {
    if (user) {
      greetUser();
    }
  }, 100);
  // firestore doc link

  let firebaseSave = firebase.firestore().collection('Tasks').doc(user.uid);

  const saveToFirebase = () => {
    // firebaseSave.get().then((doc) => {
    //   if (doc.exists) {
    //     let userDataObj = doc.data();
    //     let prevNumberOfTasks = Object.keys(userDataObj).length;
    //   } else {
    //     let prevNumberOfTasks = 0;
    //   }
    // });

    firebaseSave
      .set({ userTasks: newTask }, { merge: true })
      .then((Response) => {
        console.log(Response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChanged = () => {
    setNewTask(input.current.value);
  };

  return (
    <div id='motherDiv'>
      <section className='leftSect'>
        <Task />
        <Task />
        <Task />
      </section>
      <section className='rightSect'>
        <p id='greetingText' ref={greetingText}>
          Greeting's, User;
        </p>
        <div className='addNewTask'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveToFirebase();
              input.current.value = '';
            }}
          >
            <input
              type='text'
              placeholder='ADD SOMETHING NEW'
              ref={input}
              onChange={inputChanged}
            />
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
