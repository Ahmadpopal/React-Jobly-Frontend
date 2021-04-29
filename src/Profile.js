import React, { useContext} from 'react';
import UserContext from './Context'
import { Container, Row, Col } from 'reactstrap';


import './Profile.css'



const Profile = () => {

    const { currentUser } = useContext(UserContext);
    
    return (
        

     <>
        <Container>
        <Row>
                <Col md={{ size: 6, offset: 3 }} className="Profile-user-info" xs="6">
                <h3 className="Profile-title">Profile</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ size: 6, offset: 3 }} className="Profile-user-info" xs="6">
                    <h4>UserName: {currentUser.username}</h4>
                </Col>
            </Row>
            <Row>
                <Col md={{ size: 6, offset: 3 }} className="Profile-user-info" xs="6">
                    <h4>First Name: {currentUser.firstName}</h4>
                </Col>
            </Row>
            <Row>
                <Col md={{ size: 6, offset: 3 }} className="Profile-user-info" xs="6">
                    <h4>Last Name: {currentUser.lastName}</h4>
                </Col>
            </Row>
            <Row>
                <Col md={{ size: 6, offset: 3 }} className="Profile-user-info" xs="6">
                    <h4>Email: {currentUser.email}</h4>
                </Col>
            </Row>
        </Container>

    </>
    )
}





export default Profile