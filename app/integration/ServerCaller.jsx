const backendURL = 'http://localhost:8080/';

async function ServerRegister(userData){
  return await callAPI("createAccount", userData)
}
async function ServerLogin(userData){
  console.log(userData)
  return await callAPI("login", userData)
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
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export {ServerLogin, ServerRegister}