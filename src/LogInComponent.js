import React, {useState} from 'react';
import {useHistory, Link } from 'react-router-dom'
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Alert from './helper/Alert'


import './LoginFormComponent.css'

// Login:

// - Render a form for user to pass Username and Password in order to authenticate 
    // - If Invalid Inputs are passed Invoke Alert Component with the error message from login API 
// *
// *
// - handleLoginChange: handles Form Input Changes 
// *
// *
// - handleLoginSubmit: handles user Login to the login function
const Login = ({login}) => {
    let history = useHistory();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    // push login Errors from the Jobly API when the log in is submitted 
    const [formErrors, setFormErrors] = useState([]);

// handleLoginChange: handle form Input changes 
    function handleLoginChange(e){
        const {name, value}  = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

// handleLogin: handle form submition to the login function 
    async function handleLogin (e){
        e.preventDefault();
        let result = await login({username: formData.username, password: formData.password});
        if(result.success){
            history.push('/companies')
        }else{
            setFormErrors(result.errors);
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col className="Login-div-title">
                        <h3 className="Login-h3">Log In</h3>
                        </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className="Login-form" onSubmit={handleLogin} >
                            <FormGroup>
                                <Label className="Login-label" htmlFor="username">Username</Label>
                                <Input className="Login-Input" id="username" name="username" type="text"  value={formData.username} placeholder="Username Here" onChange={handleLoginChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="Login-label" htmlFor="password">password</Label>
                                <Input className="Login-Input" id="password" name="password" type="password" value={formData.password}  placeholder="Password Here" onChange={handleLoginChange}  />
                            </FormGroup>
                            {formErrors.length
                            ? <Alert type="danger" messages={formErrors} />
                            : null}
                            <Button className="Login-button" color="success" onSubmit={handleLogin} >Log In</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="Login-signUp-div">
                        <p className="Login-signUp-p">New User ? </p>
                            <Link className="Login-signUp-link" to="/signup">
                                Create an account.
                            </Link>   
                    </Col>
                </Row>
            </Container>   
        </div>
    )
}


export default Login