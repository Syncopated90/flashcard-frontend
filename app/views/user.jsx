import {Link} from "react-router";
import "../styling.css"

export default function UserView({username, userID, flashcards}){
  //should do the flashcards with a table
  //console.log("in user view")
  //console.log(flashcards[0])
  function drawFlashcard(flashcard){
    return <div><span className="flashcard">{flashcard.flashcard1}</span>
    <span className="flashcard">{flashcard.flashcard2}</span>
    <button className = {"deleteButton"}  type = "button">flip sides</button>
    <button className = {"deleteButton"}  type = "button">x</button>
    </div>
  }
  return <div>
      <div className = {"user"}>hello {username}</div>
      <div className = {"user"}>here are your current flashcard sets: </div>
      <div className={"user"}>
        {flashcards.map(drawFlashcard)}
      </div>
      <div className={"user"}>
        <Link to="AddFlashcard" state={{username, userID}}>add a new flashcard</Link>
      </div>
      <div className={"user"}>Edit flashcards</div>
    </div>
}