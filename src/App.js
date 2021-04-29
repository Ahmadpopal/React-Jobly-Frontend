import React, {useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import  jwt  from 'jsonwebtoken';

import useLocalStorage from './hooks/useLocalStorage'
import UserContext from './Context';
import Routes from './Routes'
import JoblyApi from './Jobly';
import NavbarComponent from './NavbarComponent';



// APP COMPONENT RENDER NAVBAR AND HOLD ROUTES TO THE COMPONENTS

// APP ------> Routes 
// &
// APP -------> Navbar 

function App() {
// INFOLOADED: STATE CHECKS HAS DATA BEEN PULLED FROM JOBLY API 
//     - AND RETURN LOADING MESSAGE FOR DATA UNTIL DATA IS PULLED FROM THE API 
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  // currentUser: is user Object from API.
  //   - this is used to check if user is logged In or Not 
  const [currentUser, setCurrentUser] = useState(null);
  // token: is for logged In users, this is their auth JasonWebToken, 
  //   - JWT is decoded in useLocalStorage Hook. 
  const [token, setToken] = useLocalStorage("jobly-token");


   // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);



  // logout : Handles user log out in the application 
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }


// register: sign-up or register users to the website 
//   - Async function 
//   - user data is passed to the Api to register 
//     - if successfull will provide a token 
//     other wise catch the error 
  async function register(data){
    try{
      let token = await JoblyApi.signup(data);
      setToken(token);
      return { success: true };
    }catch(errors){
      console.error('signup failed', errors);
      return {success: false, errors };
    }
  }



// login: handle user log accross the website 
//   - async function
//   - provides a token after user log in data is passed correctly 
//   - if errors catch the errors  

  async function logIn(data){
    try{
      let token = await JoblyApi.login(data);
      setToken(token);
      return {success: true};
    } catch(errors){
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

   /** Checks if a job has been applied for. */
   function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /** Apply to a job: make API call and update set of application IDs. */
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }
 
  // infoLoaded: if data is loading returns Loading in process 
  if (!infoLoaded) return <h3>Loading...</h3>;


  // BrowserRouter Component: wraps Routes component
  //   - in order to manage routes to the components 
  // UserContext :  manages Props to pass to all Component with passing them nested 
  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{currentUser, setCurrentUser, hasAppliedToJob, applyToJob}}>
        <NavbarComponent  logout={logout}/>
        <Routes login={logIn} register={register} />      
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
