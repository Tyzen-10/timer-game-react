export default function TimerChallenge({title,targetTime}){
    const handleStart = ()=>{
        setTimeout(()=>{},1000*{targetTime})
    }
    return(
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} second{targetTime>1?'s':''}</p>
            <p>
                <button>Start Challenge</button>
            </p>
            <p className="">State of Timer</p>
        </section>
    )
}