import React,{useRef, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Card,Form,Button,Alert, Container,Navbar } from 'react-bootstrap';
import {useAuth} from '../Contexts/AuthContext';


export default function Authform() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading]  = useState(false)
    const history = useHistory()

    async  function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not Match!")
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            history.push("/")
        }catch{
            setError("Failed to create an account")
        }
        setLoading(false)
        
    }
    return (
        <React.Fragment>
               
                <Navbar className="navbar1" bg="light" variant="dark">
                    <Navbar.Brand href="#home">
                    <Link to="/" className=" arro fa arrow-left fa-arrow-left s30"></Link>
                    <img
                        alt=""
                        src={require("../ui/logo.webp").default}
                        width="60"
                        height="60"
                        className="d-inline-block align-top img-logo"
                    />
                    
                    </Navbar.Brand>
                </Navbar>
            <Container>
            <Card className="signup-form">
                <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                Already have an account?
                <Link to="/login" className="color fontb s18 noul noulh"> Log In</Link>   
                </div>
                </Card.Body>
            </Card>
            
                </Container>
                <div style={{marginTop:"110px"}} className="footerb flex">
            <h2 className="cfff font s14">Other Countries India - South Africa - Indonesia</h2> 
            <h2 className="r cfff font s14">Free Classifieds in Pakistan. © 2006-2020 OLX</h2> 
        </div>
                </React.Fragment>
    )
}
