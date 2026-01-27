import {useState, useEffect} from 'react';

import PracticeView from "../views/practice.jsx"

export default function Practice(){
  const [flashcards, setFlashcards] = useState([false])
  useEffect(() => {
    setFlashcards(JSON.parse(localStorage.getItem('flashcards')))
    console.log("getting flashcards from localstorage")
  }, [])
  if(!flashcards){return <div>Error</div>}

  return <PracticeView flashcards={flashcards} />
}