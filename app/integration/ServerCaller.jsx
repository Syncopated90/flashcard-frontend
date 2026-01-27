const backendURL = 'http://localhost:8080/';

async function ServerRegister(userData){
  return await callAPI("createAccount", userData)
}
async function ServerLogin(userData){
  console.log(userData)
  return await callAPI("login", userData)
}
async function GetUserByID(ID){
  console.log("calling getbyid for: " + ID)
  return await callAPI("getUserByID", ID)
}
async function AddFlashcardByID(userData){
  console.log(userData)
  return await callAPI("addFlashcard", userData)
}
async function getFlashcardsByID(userID){
  //console.log("calling api for id: " + userID)
  return await callAPI("getFlashcards", userID)
}
async function removeFlashcardByID(cardID){
  return await callAPI("removeFlashcardByID", cardID)
}
async function flipFlashcardByID(cardID){
  return await callAPI("flipFlashcardByID", cardID)
}
async function callAPI(url, data) {
  try {
    const response = await fetch(backendURL + url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
      , { mode: 'cors' },);
      //
    if (response.status !== 200)
      return response.status;
    console.log("response from server: " + response)
    //console.log(response)
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export {ServerLogin, ServerRegister, GetUserByID, AddFlashcardByID, getFlashcardsByID, removeFlashcardByID,
  flipFlashcardByID
}