import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName,setEnteredPlayerName] = useState(null);
  const playerName = useRef();
  //const [Submitted,setSubmitted] = useState(false);
  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value)
  }
  //just trial
  const handleChange = () =>{
    setEnteredPlayerName(null)
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName??"unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} onChange={handleChange}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
