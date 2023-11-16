import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime*1000)
  // timer is active if not 0 and not equal to target time. i.e.stop and start time.
  const timerIsActive = timeRemaining>0 && timeRemaining<targetTime*1000
  //console.log(timerIsActive)
  //timer expires.
  if (timeRemaining<=0){
    clearInterval(timer.current)
    setTimeRemaining(targetTime*1000)
    dialog.current.open()
  }
  const handleStart = () => {
    timer.current = setInterval(() => {
        //two params, one the time interval and the second one for the function that should be executed every interval.
      setTimeRemaining(prevTimeRemaining=>prevTimeRemaining-10)
    }, 10);
  };
  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
    //added piece of code by me- since timerisActive not false when stopped manually.
    //will be solved in later video because we write seperate function for reset.
    //remove below two lines after handleReset.
    setTimeRemaining(targetTime*1000)
    console.log(timerIsActive)
    
  };
  return (
    <>
      <ResultModal result="Lost" targetTime={targetTime} ref={dialog} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : "undefined"}>
          {timerIsActive ? "Timer running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
