import {useState} from 'react';
import {Link} from "react-router";

export default function UserView({username, userID}){
  let flashcard1 = ""
  let flashcard2 = ""
  console.log(username)
  console.log(userID)

  function flashcard1HandlerACB(e){flashcard1=e.target.value}
  function flashcard2HandlerACB(e){flashcard2=e.target.value}

  return <div>
      <div className = {"user"}>hello {username}</div>
      <div className = {"user"}>here are your current flashcard sets: </div>
      <div className={"user"}>
        <span className={"flashcard"}>hej hi</span>
      </div>
      <div className={"user"}>
        <Link to="AddFlashcard" >Add a new flashcard</Link>
      </div>
    </div>
}