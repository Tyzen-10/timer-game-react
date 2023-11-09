import { useState } from "react"

export default function TimerChallenge({title,targetTime}){
    const [timerStarted,setTimerStarted] = useState(false)
    const [timerExpired,setTimerExpired] = useState(false)
    const handleStart = ()=>{
        setTimeout(()=>{setTimerExpired(true)},1000*{targetTime})
        setTimerStarted(true)
    }
    const handleStop = () =>{
        setTimerStarted(false)
    }
    return(
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} second{targetTime>1?'s':''}</p>
            <p>
                <button onClick={timerStarted?handleStop:handleStart}>{timerStarted?'Stop':'Start'}</button>
            </p>
            <p className={timerStarted?"active":"undefined"}>{timerStarted?'Timer running':'Timer inactive'}</p>
        </section>
    )
}