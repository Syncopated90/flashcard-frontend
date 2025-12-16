import "../styling.css"
import {useState} from 'react';

export default function LoginView(props){
  const [error, setError] = useState(false);
  const [responseState, setResponse] = useState(false);

  let username = "";
  let password= "";

  function usernameHandlerACB(e){username=e.target.value; }
  function passwordHandlerACB(e){password=e.target.value}
  const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }
        loginACB()
    };
  async function loginACB() {
      const loginResponse = await props.onLogin({
          username: username,
          password: password,
      })
      /*if(loginResponse){
        setResponse(true)
      }
      else{
        console.log("no server response: " + loginResponse)
      }
      return loginResponse*/
    }

  
  return <div className="login">
    <form onSubmit={handleSubmit}>
                <div className={"inputGroup"}>
                    <input type="username"
                           placeholder="Username"
                           onChange={usernameHandlerACB}
                           className={"inputBox"}/>
                </div>
                <div className={"inputGroup"}>
                    <input onChange={passwordHandlerACB}
                           type={"password"}
                           placeholder="Password"
                           className={"inputBox"}/>
                </div>
                {error && <div className={"error-message"}>{error}</div>}
                <button type="submit" onClick={handleSubmit}>Log in</button>
            </form>
  </div>
}