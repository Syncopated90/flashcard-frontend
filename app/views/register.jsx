import {useState} from 'react';

export default function RegisterView(props){
  const [error, setError] = useState(false);
  
  let username = "";
  let password= "";
  
  function usernameHandlerACB(e){username=e.target.value}
  function passwordHandlerACB(e){password=e.target.value}
  const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }
        registerACB()
    };
  async function registerACB() {
      const registerResponse = await props.onRegister({
          username: username,
          password: password,
      })
    }

  return <div className="register">
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
                <button type="submit" onClick={handleSubmit}>Register new user</button>
            </form>
  </div>
}