import {useState} from 'react';

import Login from "./LoginPresenter";
import Register from "./RegisterPresenter";
import User from "./UserPresenter";
import Account from "./AccountPresenter";

export default function MainPresenter(){
  const [user, setUser] = useState(false)
  //console.log(user.Username)
  //console.log(user.id)
  //let loadedUsername = user.Username
  //console.log("loaded :" + loadedUsername)
//username = {loadedUsername} userID = {user.id}
    //{user && <User hello = {"hello world"}/>}
  return <div>
    {!user && <Login setUser = {setUser}/>}
    {!user && <Register />}
    {user && <Account user = {user} hello={"hello world"}/>}
  </div>
}