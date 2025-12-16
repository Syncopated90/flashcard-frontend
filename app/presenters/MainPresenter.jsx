import {useState} from 'react';

import Login from "./LoginPresenter";
import Register from "./RegisterPresenter";
import User from "../presenters/UserPresenter";

export default function MainPresenter(){
  const [user, setUser] = useState(false)

  return <div>
    {!user && <Login setUser = {setUser}/>}
    {!user && <Register/>}
    {user && <User user={user}/>}
  </div>
}