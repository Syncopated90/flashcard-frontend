import { useLocation } from 'react-router'
import EditFlashcards from "../views/editFlashcards.jsx"
import {getFlashcardsByID, removeFlashcardByID, flipFlashcardByID} from '../integration/ServerCaller.jsx'
import {useEffect, useState} from 'react';

export default function EditFlashcard(){
  const [flashcards, setFlashcards] = useState([false, false])
  useEffect (() => {
    const user = JSON.parse(localStorage.getItem('user'))
    async function getFlashcards(id){
      try{
        const serverResponse = await getFlashcardsByID(id)
        if(serverResponse){
          setFlashcards(serverResponse)
          return serverResponse
        }
      }catch(e){
        console.error(e)
      }
    }
    getFlashcards(user.id)
  }, [])
  //console.log("logging location.state")
  //console.log(location.state)
  async function removeFlashcard(e, cardID){
    e.preventDefault()
    console.log(await removeFlashcardByID(cardID))
    setFlashcards(flashcards.filter((flashcard)=>flashcard.id != cardID))
  }
  async function flipFlashcard(e, cardID){
    e.preventDefault()
    const index = flashcards.findIndex((flashcard) => flashcard.id == cardID)
    const oldFlashcard = flashcards[index]
    const flipside = oldFlashcard.flashcard1
    oldFlashcard.flashcard1 = oldFlashcard.flashcard2
    oldFlashcard.flashcard2 = flipside
    setFlashcards(flashcards.toSpliced(index, 1, oldFlashcard))
    await flipFlashcardByID(cardID)
    
  }
  async function updateFlashcards(e){
    //console.log("storing flashcards: ")
    //console.log(e)
    //console.log('for user ' + location.state.username)
    e["accountKey"] = location.state.userID
    //console.log(e)
    //console.log(e["account_id"] + " is " + typeof(e["account_id"]))
    let serverResponse
    console.log("server response on adding flashcard: " + serverResponse)
  }

  return <div>{<EditFlashcards 
    removeFlashcard={removeFlashcard} 
    flipFlashcard={flipFlashcard } 
    updateFlashcards = {updateFlashcards} 
    flashcards = {flashcards}/>}
  </div>
}