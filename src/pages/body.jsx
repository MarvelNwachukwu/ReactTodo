import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../components/scss/body.scss';
import Task from '../components/task';
import firebase from '../firebase';

const Body = ({ props }) => {
  // Hooks
  let input = useRef();
  let greetingText = useRef();
  let [newTask, setNewTask] = useState('');
  let [allTask, setTask] = useState();
  let [TaskSaved, updateTaskSaved] = useState(Math.random());

  // firebase
  let user = firebase.auth().currentUser;
  let firstName = user.displayName.split(' ')[0];

  const greetUser = () => {
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

  // firestore doc link

  let firebaseSave = firebase.firestore().collection(user.uid).doc();

  const saveToFirebase = () => {
    firebaseSave
      .set({ task: newTask })
      .then((Response) => {
        console.log(Response);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      updateTaskSaved(Math.random());
    }, 1000);
  };

  const fetchFromFirebase = () => {
    let docRef = firebase.firestore();

    docRef
      .collection(user.uid)
      .get()
      .then((querySnapshot) => {
        let taskArr = [];
        querySnapshot.forEach((doc) => {
          taskArr.push(doc.data());
        });
        console.log(taskArr);
        setTask(taskArr);
      });

    console.warn('I ran');
  };

  const inputChanged = () => {
    setNewTask(input.current.value);
  };
  useEffect(() => {
    greetUser();
    fetchFromFirebase();
  }, [TaskSaved]);

  return (
    <div id='motherDiv'>
      <section className='leftSect'>
        {allTask &&
          allTask.map((item, index) => {
            return <Task taskData={item} />;
          })}
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
          </form>
        </div>
      </section>
    </div>
  );
};

export default Body;
