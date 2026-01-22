import { useLocation } from 'react-router'
import AddFlashcard from "../views/addFlashcard.jsx"
import { AddFlashcardByID } from '../integration/ServerCaller.jsx'

export default function Flashcard(){
  const location = useLocation()
  //console.log("logging location.state")
  //console.log(location.state)

  async function submitFlashcards(e){
    //console.log("storing flashcards: ")
    //console.log(e)
    //console.log('for user ' + location.state.username)
    e["accountKey"] = location.state.userID
    //console.log(e)
    //console.log(e["account_id"] + " is " + typeof(e["account_id"]))
    let serverResponse = await AddFlashcardByID(e)
    console.log("server response on adding flashcard: " + serverResponse)
  }

  return <div>{<AddFlashcard storeFlashcards = {submitFlashcards}/>}</div>
}