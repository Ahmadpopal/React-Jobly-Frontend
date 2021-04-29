import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Alert from './helper/Alert'

import './SignUpComponent.css'

// SignUp Component:

// - Render a form for user to pass user info in order to register for the website 
    // - If Invalid Inputs are passed Invoke Alert Component with the error message from the signup API  
// *
// *
// - handleSignUpChange: handles Form Inputs Change
// *
// *
// - handleSignUpSubmit: handles user sign Up to the register function

const SignUp = ({register}) =>{

    const history = useHistory();

    const [formData, setFormData ] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    })
  // push sign up Errors from the Jobly API when the register function is called 
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "SignupForm",
        "signup=", typeof signup,
        "formData=", formData,
        "formErrors=", formErrors,
    );

// handleSignUpChange: handle form Input changes 
    function handleSignUpChange(e){
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

// handleSignUpSubmit : handle form submition to the register function 
    async function handleSignUpSubmit(e){
        e.preventDefault();
        let result = await register(formData)
        console.log(result)
        if(result.success){
            history.push('/companies')
        }else{
            setFormErrors(result.errors);
        }
    }


    return (
        <div className="SignUp">
            <Container>
                <Row>
                    <Col className="SignUp-div-title">
                    <h3 className="SingUp-h3">Sign Up</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className="SignUp-form" onSubmit={handleSignUpSubmit}>
                            <FormGroup>
                            <Label className="SignUp-label" htmlFor="username">Username</Label>
                            <Input className="SignUp-input" name="username" value={formData.username} type="text" onChange={handleSignUpChange} placeholder="Username here"/>
                            </FormGroup>
                            <FormGroup>
                            <Label className="SignUp-label" htmlFor="password">Password</Label>
                            <Input className="SignUp-input" name="password" value={formData.password} type="password" onChange={handleSignUpChange} placeholder="Username here"/>
                            </FormGroup>
                            <FormGroup>
                            <Label className="SignUp-label" htmlFor="firstName">First Name</Label>
                            <Input className="SignUp-input" name="firstName" value={formData.firstName} type="text" onChange={handleSignUpChange} placeholder="Username here"/>
                            </FormGroup>
                            <FormGroup>
                            <Label className="SignUp-label" htmlFor="lastName">Last Name</Label>
                            <Input className="SignUp-input" name="lastName" value={formData.lastName} type="text" onChange={handleSignUpChange} placeholder="Username here"/>
                            </FormGroup>
                            <FormGroup>
                            <Label className="SignUp-label" htmlFor="email">Email</Label>
                            <Input className="SignUp-input" name="email" value={formData.email} type="email" onChange={handleSignUpChange} placeholder="Username here"/>
                            </FormGroup>
                            {formErrors.length
                            ? <Alert type="danger" messages={formErrors}/> 
                            :  null }
                            <Button className="SignUp-button" color="primary" onSubmit={handleSignUpSubmit}>Register</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignUp