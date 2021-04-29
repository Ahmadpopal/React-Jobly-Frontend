import { Switch, Route, Redirect} from 'react-router-dom'
import React, { useContext } from "react";

import UserContext from "./Context";

import HomePage from './HomePage'
import Login from './LogInComponent'
import SignUp from './SignUpFormComponent'

import Companies from './Companies'
import Jobs from './Jobs'
import ProfileUpdate from './ProfileUpdate'
import Profile from './Profile'
import CompanyDetail from './CompanyDetail'


const Routes = ({login, register }) => {
    const { currentUser } = useContext(UserContext);
    return (
        
        <Switch>
            {currentUser 
                ? <Route exact path='/companies'>
                    <Companies />
                    </Route> 
                : null}
                {currentUser 
                ? <Route exact path='/companies/:handle'>
                <   CompanyDetail />
                    </Route>
                : null}
                {currentUser 
                ?  <Route exact path='/jobs'>
                        <Jobs />
                    </Route>
                : null}
                {currentUser 
                ?  <Route exact path='/profileUpdate'>
                        <ProfileUpdate />
                    </Route>
                : null}
                {currentUser 
                ?  <Route exact path='/profile'>
                    <Profile />
                    </Route>
                : null}
                {!currentUser 
                ?  <Route exact path='/login'>
                    <Login login={login}/>
                    </Route>
                    : null }
                {!currentUser 
                ?  <Route exact path='/register'>
                    <SignUp register={register}/>
                </Route>
                    : null }
            <Route exact path='/'>
                <HomePage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes