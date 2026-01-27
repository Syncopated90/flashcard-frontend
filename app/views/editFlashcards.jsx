import '../styling.css'

export default function EditFlashcards({removeFlashcard, flipFlashcard, userID, flashcards}){
  function drawFlashcard(flashcard){
    function flipFlashcardCB(e){
      flipFlashcard(e, flashcard.id)
    }
    function removeFlashcardCB(e){
      removeFlashcard(e, flashcard.id)
    }
    return <div className = {"buttonContainer"}>
      <span className="flashcard">{flashcard.flashcard1}</span>
      <span className="flashcard">{flashcard.flashcard2}</span>
      <button onClick = {flipFlashcardCB} className = {"flipButton"}  type = "button">flip sides</button>
      <button onClick = {removeFlashcardCB} className = {"deleteButton"}  type = "button">x</button>
    </div>
  }
  return <div>
    <div className={"user"}>
        {flashcards.map(drawFlashcard)}
      </div>
  </div>
}