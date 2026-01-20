import UserView from "../views/user.jsx";

export default function Account(props){
  //console.log("logging props")
  //console.log(props.user.Username)
  return <UserView username = {props.user.Username} userID = {props.user.id}/>
}