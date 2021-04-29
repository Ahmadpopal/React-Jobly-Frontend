
import {useContext } from 'react';
import { Link } from 'react-router-dom'


import { Navbar, Nav, NavItem } from 'reactstrap';

import UserContext from './Context'


const NavbarComponent = ({logout}) => {
    const { currentUser } = useContext(UserContext);

    function UserLoggedIn(){
        return (
            <>
                <Link className="nav-link" to='/companies'>
                    <NavItem>
                        Companies
                    </NavItem>
                </Link>
                <Link className="nav-link" to='/jobs'>
                    <NavItem>
                        Jobs
                    </NavItem>
                </Link>
                <Link className="nav-link" to='/profile'>
                    <NavItem>
                        Profile
                    </NavItem>
                </Link>
                <Link className="nav-link" to='/profileUpdate'>
                    <NavItem>
                        Edit Profile
                    </NavItem>
                </Link>
                <Link className="nav-link" to='/login' onClick={logout}>
                    <NavItem>
                        Log Out {currentUser.username}
                    </NavItem>
                </Link>
            </>
            )
}



    function UserLoggedOut(){
        return (
        <>
            <Link className="nav-link" to='/login'>
                <NavItem>
                    Log In
                </NavItem>
            </Link>
            <Link className="nav-link" to='/register'>
                <NavItem>
                    Sign Up
                </NavItem>
            </Link>
        </>
        )
}



    return (
        <div>
            <Navbar color="dark" extend="md">
                <Nav >
                    <Link className="nav-link" to='/'>
                        <NavItem>
                            Jobly
                        </NavItem>
                    </Link>
                    {currentUser ? UserLoggedIn() : UserLoggedOut()}
                </Nav>
            </Navbar>
            
        </div>
    )
}

export default NavbarComponent