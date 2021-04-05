import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import '../components/scss/notFound.scss';

const NotFound = () => {
  // const
  let history = useHistory();
  const [loopNumber, setLoopNumber] = useState(6);

  const countDown = () => {
    // let flag = true;
    setInterval(() => {
      const timeStamp = new Date().getSeconds();
      setLoopNumber(timeStamp / 10);
    }, 100);
  };
  const redirect = () => {
    history.push('/');
  };

  return (
    <div id='notFound' onLoad={countDown()}>
      <div className='layer0'>
        <div id='navMenu'>
          <div id='logo'></div>
        </div>
        <p>Oops, look like you’re stuck in a time-loop</p>

        <div className='returnHome' onClick={redirect}>
          Break The Loop
        </div>
      </div>

      <h3 className='loopTimer'>{loopNumber}</h3>
    </div>
  );
};

export default NotFound;
