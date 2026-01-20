import LoginView from "../views/login";
import UserView from "../views/user"
import {ServerLogin} from "../integration/ServerCaller"
import {useState, useEffect} from 'react';

export default function Login(props){
  const [response, setResponse] = useState(false)
  const [badLogin, setBadLogin] = useState(false)
  /*useEffect(() => {
    // Check sessionStorage on page load
    const user = sessionStorage.getItem('user');
    if (user) {
        console.log("loading user from session")
        console.log(user)
        setResponse(user);
        props.setUser(user);
        }
    }, []);
*/
  async function handleLogin(e){
    let serverResponse
    serverResponse = await ServerLogin(e)
    
    if(serverResponse === 401){
      console.log("bad login")
      setBadLogin(true)
    }
    else if(serverResponse){
      console.log(serverResponse)
      console.log("received response")
    }
    else{
      console.log("no server response")
    }
    setResponse(serverResponse)
    props.setUser(serverResponse)
    sessionStorage.setItem('user', serverResponse);
    return serverResponse
  }
  return <div>
    {!response && <LoginView onLogin={handleLogin}/>}
    {response && badLogin && <div >bad login!</div>}
  </div>
}