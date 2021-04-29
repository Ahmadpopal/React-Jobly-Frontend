import React, {useContext}  from 'react';
import {Link } from 'react-router-dom'

import {Container, Row, Col, Button } from 'reactstrap';

import UserContext from './Context'

import './HomePage.css'

const HomePage = () => {
    const { currentUser } = useContext(UserContext);

// HomePage:
//     - If user is Logged In Renders a Welcome back Container
//     - If user is Not not Logged In display a Page where Users can Log In or Sign Up for the Website 
 
    return (
        <div>
            {currentUser
            ? 
            <Container>
                <Row>
                    <Col className="HomePage-main-div">
                        <Row>
                            <Col className="HomePage-div-title">
                                <h3>Welcome back to Home Page {currentUser.username}</h3>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
                
            </Container>
            :
            <Container>
                <Row>
                    <Col className="HomePage-main-div">
                        <Row>
                            <Col className="HomePage-div-title">
                                <h3>Welcome to Jobly Home Page.</h3>
                                <h3>Open jobs.</h3>
                                <h3>People hiring.</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <Button className="HomePage-login-button" color="success">
                                    <Link className="HomePage-login-link"  to='/login'>
                                        Log In
                                    </Link>
                                </Button >
                                <Button className="HomePage-signup-button" color="primary">
                                    <Link className="HomePage-signup-button"  to='/register'>
                                        Sign Up
                                    </Link>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>            
        
        }
            {/* <Container>
                <Row>
                    <Col className="HomePage-main-div">
                        <Row>
                            <Col className="HomePage-div-title">
                                <h3>Welcome to Jobly Home Page.</h3>
                                <h3>Open jobs.</h3>
                                <h3>People hiring.</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <Button className="HomePage-login-button" color="success">
                                    <Link className="HomePage-login-link"  to='/login'>
                                        Log In
                                    </Link>
                                </Button >
                                <Button className="HomePage-signup-button" color="primary">
                                    <Link className="HomePage-signup-button"  to='/register'>
                                        Sign Up
                                    </Link>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>             */}
        </div>
    )
}


export default HomePage;