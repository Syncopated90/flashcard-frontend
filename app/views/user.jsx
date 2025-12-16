export default function UserView(props){
  console.log(props)
  return <div>
      <div className = {"user"}>hello {props.user.Username}</div>
      <div className = {"user"}>here are your current flashcards: </div>
    </div>
}