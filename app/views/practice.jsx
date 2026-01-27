import "../styling.css"
import {useState} from 'react';

export default function PracticeView({flashcards}){
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState("")

  //let answer = ""
  function flashcardHandler(e){
    //answer = e.target.value
    setAnswer(e.target.value)
  }
  function submitFlashcard(e){
    e.preventDefault()
    if(answer.trim().normalize() == flashcards[counter].flashcard2.trim().normalize()){
      console.log("correct!")
      //answer = ""
      setAnswer("")
      nextFlashcard()
      return
    }
    else{
      console.log("not correct!")
      console.log(flashcards[counter].flashcard2 + "is correct, not " + answer +"when does this end")
      console.log(answer.length)
      console.log(flashcards[counter].flashcard2.length)
    }
  }
  
  function nextFlashcard(){
    increaseCounter()
    console.log("increased counter")
  }
  function increaseCounter(){
    if(counter < flashcards.length - 1){
      setCounter(counter + 1)
      return 
    }
    setCounter(0)
    return
  }
  return <div className={"practice"}>
      <div><span className={"practiceFlashcard"}>{flashcards[counter].flashcard1}</span></div>
      <form onSubmit={submitFlashcard}>
      <div className={"inputGroup"}>
          <input type="text"
                  placeholder = ""
                  onChange={flashcardHandler}
                  className={"inputBox"}
                  value={answer}/>
      </div>
      {error && <div className={"error-message"}>{error}</div>}
      <button type="submit" onClick={submitFlashcard}>Check your answer</button>
      </form>
    </div>
}