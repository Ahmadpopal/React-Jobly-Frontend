import React, {useState, useContext} from 'react';
import {useHistory } from 'react-router-dom'
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import Alert from './helper/Alert'
import JoblyApi from './Jobly';
import UserContext from './Context'


// SignUp Component:

// - Render a form for user to pass user info in order to update user Profile 
    // - If Invalid Inputs are passed Invoke Alert Component with the error message from the saveProfile API  
// *
// *
// - handleChange: handles Form Inputs Change
// *
// *
// - handleSubmit: handles user profile update 



const ProfileUpdate = () => {
    const history = useHistory();

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const INITIAL_STATE =   {
        username:'',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

const [formData, setFormData ] = useState(INITIAL_STATE)
        
  // push sign up Errors from the Jobly API when the register function is called 
const [formErrors, setFormErrors] = useState([]);



async function handleSubmit(e){
    e.preventDefault()

    let profileData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
        updatedUser = await JoblyApi.saveProfile(username, profileData);
        history.push('/profile')
    } catch (errors) {
        // debugger;
        setFormErrors(errors);
        return;
    }

    setFormData(f => ({ ...f, password: "" }));
    setFormErrors([]);
    // setSaveConfirmed(true);

     // trigger reloading of user information throughout the site
    setCurrentUser(updatedUser);
}




// handleSignUpChange: handle form Input changes 
function handleChange(e){
    const {name, value } = e.target;

    setFormData(formData => ({
        ...formData,
        [name]: value
    }))
}

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Profile Edit</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="username">Confirm Username to Authenticate</Label>
                            <Input name="username" value={formData.username} type="text" onChange={handleChange} placeholder="Confirm Username here"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input name="firstName" value={formData.firstName} type="text" onChange={handleChange} placeholder="First Name Here" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input name="lastName" value={formData.lastName} type="text" onChange={handleChange} placeholder="Last Name Here"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" value={formData.email} type="email" onChange={handleChange} placeholder="Email Here"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Confirm Password to make Changes</Label>
                            <Input name="password" value={formData.password} type="password" onChange={handleChange} placeholder="Confirm Password Here"/>
                        </FormGroup>
                        {formErrors.length
                        ? <Alert type='danger' messages={formErrors}/>
                        : null}
                        <Button color="success">Save Changes</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}





export default ProfileUpdate