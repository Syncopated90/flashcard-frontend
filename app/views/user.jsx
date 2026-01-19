import {useState} from 'react';
import {Link} from "react-router";

export default function UserView(props){
  let flashcard1 = ""
  let flashcard2 = ""

  console.log(props)

  function usernameHandlerACB(e){username=e.target.value}
  function passwordHandlerACB(e){password=e.target.value}
  return <div>
      <div className = {"user"}>hello {props.user.Username}</div>
      <div className = {"user"}>here are your current flashcard sets: </div>
      <div className={"user"}>
        <span className={"flashcard"}>hej hi</span>
      </div>
      <div className={"user"}>
        <Link to="AddFlashcard" >Add a new flashcard</Link>
      </div>
    </div>
}