import React,{useRef, useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Card,Form,Button,Alert, Container,Navbar } from 'react-bootstrap';
import Category from './category';

export default function PostAdd() {

    const [list,setList] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        if(loading){
            let _list = [];
            for(let i =0;i<10;i++){
                _list.push(<Category placeholder={true}/>);
            }
            setList(_list);
        }

    },list);    

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
                <Card.Body>
                    <h4 className="category-header">CHOOSE A CATEGORY</h4>
                    <div className="category-list">
                        <ul style={{marginBottom:"-18px"}}>
                            {list}
                             
                        </ul>

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
