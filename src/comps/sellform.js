import React,{useRef, useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Card,Form,Button, Container,Navbar,ToggleButton,ButtonGroup} from 'react-bootstrap';

export default function SellForm() {   
    const [radioValue, setRadioValue] = useState('New');
    const [make, setMake] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [state, setState] = useState('');
    const history = useHistory()
  
    const radios = [
      { name: 'New', value: '1' },
      { name: 'Used', value: '2' },
    ];
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert('Post Added Successfully')
        history.push("/")
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
                <br/>
            <Container  className="category-container">
                <div className="post-header">
                    <h4 className="title-postAdd">Post Your Ad</h4>
                </div>
            <Card  className="category-card">
                <Card.Header>
                <h4 className="category-header-in">SELECTED CATEGORY</h4>
                </Card.Header>
                <Card.Body>
                <h4 className="category-header-in">INCLUDE SOME DETAILS</h4>
                <div className="form-ad">
                    <Form onSubmit={handleSubmit}>
                    <Form.Group  className="cat-make" controlId="exampleForm.ControlSelect1">
                        <Form.Label className="control-label">Make *</Form.Label>
                        <Form.Control className="cat-make-control" as="select" required value={make} onChange={(e) => setMake(e.currentTarget.value)}>
                        <option></option>
                        <option>Acer</option>
                        <option>Google</option>
                        <option>Lenevo</option>
                        <option>Nokia</option>
                        <option>Samsung</option>
                        <option>Qmobile</option>
                        <option>Iphone</option>
                        <option>LG</option>
                        <option>Lava</option>
                        <option>Infix</option>
                        </Form.Control>
                    </Form.Group>
                        <Form.Group>
                            <Form.Label>Condition *</Form.Label>
                            <div className="condition-type">
                            <ButtonGroup toggle>
                                {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    type="radio"
                                    variant="success"
                                    className="radio-sucess"
                                    name="radio"
                                    required
                                    value={radio.name}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                                ))}
                            </ButtonGroup>
                            </div>
                        </Form.Group>
                        <Form.Group style={{marginTop:"40px"}}  className="cat-make">
                        <Form.Label>Ad Title *</Form.Label>
                        <Form.Control type="text" className="cat-make-control" required  value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
                    </Form.Group>
                    <Form.Group style={{marginTop:"40px"}}  className="cat-make">
                        <Form.Label>Description *</Form.Label>
                        <Form.Control as="textarea" row={3} className="cat-make-control" required  value={desc} onChange={(e) => setDesc(e.currentTarget.value)}/>
                    </Form.Group>
                      <hr/>
                      <Form.Group style={{marginTop:"40px"}}  className="cat-make">
                        <Form.Label>Price *</Form.Label>
                        <Form.Control type="text" className="cat-make-control" required  value={price} onChange={(e) => setPrice(e.currentTarget.value)}/>
                    </Form.Group>
                        <hr/>
                        <h4 style={{marginTop:"40px"},{marginLeft:"-1px"}} className="category-header-in">CONFIRM YOUR LOCATION</h4>
                        <Form.Group style={{marginTop:"30px"}}  className="cat-make">
                        <Form.Label>State *</Form.Label>
                        <Form.Control type="text" className="cat-make-control" required  value={state} onChange={(e) => setState(e.currentTarget.value)}/>
                    </Form.Group>
                    <hr/>
                           <button className="submit-ad" type="submit">Post Now</button>            
                    </Form>
                    </div>
                </Card.Body>
            </Card>
        
                </Container>
                <div style={{marginTop:"40px"}} className="footerb flex">
            <h2 className="cfff font s14">Other Countries India - South Africa - Indonesia</h2> 
            <h2 className="r cfff font s14">Free Classifieds in Pakistan. © 2006-2020 OLX</h2> 
        </div>
                </React.Fragment>
    )
}
