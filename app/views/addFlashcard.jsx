import {useState} from 'react';
import {useNavigate} from "react-router";
import "../styling.css"

export default function AddFlashcard({storeFlashcards}){
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  let flashcard1 = ""
  let flashcard2 = ""
  //console.log(hello)
  //console.log(storeFlashcards)
  function flashcard1handlerACB(e){
    flashcard1 = e.target.value
  }
  function flashcard2handlerACB(e){
    flashcard2 = e.target.value
  }
  async function handleSubmit(e){
    e.preventDefault()
    if(!flashcard1 || !flashcard2){
      setError("Fill out both sides of the card before submitting")
      return
    }
    await storeFlashcards({flashcard1, flashcard2})
    navigate(-1)
  }


  return <div className="login">
    <form onSubmit={handleSubmit}>
                <div className={"inputGroup"}>
                    <input type="text"
                           placeholder=""
                           onChange={flashcard1handlerACB}
                           className={"inputBox"}/>
                </div>
                <div className={"inputGroup"}>
                    <input onChange={flashcard2handlerACB}
                           type={"text"}
                           placeholder=""
                           className={"inputBox"}/>
                </div>
                {error && <div className={"error-message"}>{error}</div>}
                <button type="submit" onClick={handleSubmit}>Add flashcard to collection</button>
            </form>
  </div>
}