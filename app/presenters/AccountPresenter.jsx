import UserView from "../views/user.jsx";
import {useEffect, useState} from 'react';
import {getFlashcardsByID} from "../integration/ServerCaller.jsx"
export default function Account(props){
  const [flashcards, setFlashcards] = useState(["test", "test"]) 
  //let flashcards = [["test", "test"]]
  //let flashcards = []
  useEffect(() => {
    async function getFlashcards(id){
      try{
        const response = await getFlashcardsByID(id)
        if(response){
          setFlashcards(response)
          return response
        }
      }catch(e){
        console.error(e)
      }
    }
    let serverResponse = getFlashcards(props.user.id)
    //console.log("logging received flashcards")
    /*console.log(serverResponse.then(function(data) {
      const items = data;
      console.log(items)
      setFlashcards(items)
    }))*/
    }, []);
  //console.log("logging props")
  //console.log(props)
  //let flashcards = await GetFlashcardsByID(location.state.userID)
  //flashcards.push(["test", "test"])
  return <UserView username = {props.user.Username} userID = {props.user.id} flashcards = {flashcards}/>
}