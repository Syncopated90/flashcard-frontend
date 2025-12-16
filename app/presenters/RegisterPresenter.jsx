import {useState} from 'react';
import {ServerRegister} from "../integration/ServerCaller";
import RegisterView from "../views/register";

export default function RegisterUser(){
  const [response, setResponse] = useState(false)
  const [badRegister, setBadRegister] = useState(false)
  async function handleRegister(e){
    let serverResponse = await ServerRegister(e)
    
    if(serverResponse === 409){
      console.log("bad register")
      setBadRegister(true)
    }
    else if(serverResponse){
      console.log(serverResponse)
      console.log("received response")
    }
    else{
      console.log("no server response")
    }
    setResponse(serverResponse)
  }

  return <div>
    {!response && <RegisterView onRegister={handleRegister}/>}
    {response && !badRegister && <span/>}
    {response && badRegister && <div >User already exists</div>}
  </div>
}