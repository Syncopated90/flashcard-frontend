import {Link} from "react-router";
import "../styling.css"

export default function UserView({username, userID, flashcards}){
  //should do the flashcards with a table
  //console.log("in user view")
  //console.log(flashcards[0])
  function drawFlashcard(flashcard){
    return <div>
      <span className="flashcard">{flashcard.flashcard1}</span>
      <span className="flashcard">{flashcard.flashcard2}</span>
    </div>
  }
  return <div>
      <div className = {"user"}>hello {username}</div>
      <div className = {"user"}>Current flashcards: </div>
      <div className={"user"}>
        {flashcards.map(drawFlashcard)}
      </div>
      <div className={"user"}>
        <Link to="Practice">Practice</Link>
      </div>
      <div className={"user"}>
        <Link to="AddFlashcard" state={{username, userID}}>Add a new flashcard</Link>
      </div>
      <div className={"user"}>
        <Link to="EditFlashcards" state={{username, userID, flashcards}}>Edit flashcards</Link>
      </div>
    </div>
}