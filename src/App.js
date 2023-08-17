import Button from './components/Button/Button.js';
import { useState } from 'react';
import { useEffect } from "react"
import Timer from './components/Timer/Timer.js';
import Container from './components/Container/Container.js';
import styles from './App.module.scss';
function App() {
  const [time, setTime] = useState({
    ms:0,
    s:0,
    m:0,
    h:0,
  });
  const [interv, setInterv] = useState();
  const start = () => { 
    run();
    setInterv(setInterval(run, 10));
  };
  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;  


  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime ({
      ms:updatedMs,
      s:updatedS,
      m:updatedM,
      h:updatedH,
    });
  }
  const stop = () => {
    clearInterval(interv);
    };
    const reset = () => {
      clearInterval(interv);
        setTime({ 
          ms:0,
          s:0,
          m:0,
          h:0,})
      };


  return (
    <Container>
      <h1 className={styles.title}>Stopwatch</h1>
      <div>
      <Timer time={time}/>
      </div>
      <div>
       <Button reset={reset} stop={stop} start={start}/>
  
       </div>
       </Container>
  );
}

export default App;
