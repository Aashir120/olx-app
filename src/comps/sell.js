import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import {Row,Col, Container, Card} from 'react-bootstrap'


  function Sell(){
      return(
          <React.Fragment>
          <div className="container-fluid">
            <div className="nav">
                <ol className="nav-ol">
                <li>
                    <Link to="/" className="noul noulh colorg">
                    Home  /
                    </Link>
                </li>
                <li>
                    <Link className="noul noulh colorg">
                    Vehicles  /
                    </Link>
                </li>
                <li>
                <Link className="noul noulh colorg">
                    Cars on Installments  /
                    </Link>
                </li>
                <li>
                <Link className="noul noulh colorg">
                    Cars on Installments in Sindh  /
                    </Link>
                </li>
                <li>
                <Link className="noul noulh colorg">
                Cars on Installments in Karachi  /
                </Link>
                </li>
                <li>
                <Link className="noul noulh colorg">
                Cars on Installments in DHA City Karachi /
                </Link>
                </li>
                <li>
                <Link className="noul noulh colorg">
                Corolla GLI in DHA City Karachi
                </Link>
                </li>
                
                </ol>
            </div>
          </div>
          <div className="slide-width">
          <Container>
              <Row>
                  <Col sm={8}>
        <div className="slide-container">
        <Slide className="slide">
          <div className="each-slide">
            <div>
            <img style={{marginTop:"20px"}} width="600px" height="500px" src={require("../ui/car1.webp").default}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img width="600px" height="500px" src={require("../ui/car2.webp").default}/>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img style={{marginTop:"20px"}} width="600px" height="500px" src={require("../ui/car3.webp").default}/>
            </div>
          </div>
        </Slide>
        </div>
        <div>
            <Card>
                <Card.Body>
                <img  width="60px" height="60px" src={require("../ui/car1.webp").default}/>
                <img style={{marginLeft:"40px"}} width="60px" height="60px" src={require("../ui/car2.webp").default}/>
                <img style={{marginLeft:"40px"}} width="60px" height="60px" src={require("../ui/car3.webp").default}/>
                </Card.Body>
            </Card>
        </div>
        <div className="slider-bottom">
            <Card>
                <Card.Body>
                    <h4 style={{marginBottom:"20px"}} className="color s22 fontb">Details</h4>
                <Container>
                    <Row className="slider-bottom-row s14">
                        <Col className="colorg">Make</Col>
                        <Col>Toyota</Col>
                        <Col className="colorg">Model</Col>
                        <Col>Corolla GLI</Col>
                    </Row>
                    <Row className="slider-bottom-row s14">
                        <Col className="colorg">Year</Col>
                        <Col>2014</Col>
                        <Col className="colorg">Condition</Col>
                        <Col>Used</Col>
                    </Row>
                    <Row className="slider-bottom-row s14">
                        <Col className="colorg">Transmission</Col>
                        <Col>Manual</Col>
                        <Col className="colorg">Registered</Col>
                        <Col>Yes</Col>
                    </Row>
                    <Row className="slider-bottom-row s14">
                        <Col className="colorg">Down Payment (Rs)</Col>
                        <Col>Rs 240,000</Col>
                        <Col className="colorg">Installment (Rs)</Col>
                        <Col>15800</Col>
                    </Row>
                    <Row className="slider-bottom-row s14">
                        <Col className="colorg">Installment Plan</Col>
                        <Col>Flexible</Col>
                        <Col className="colorg">Financer Type</Col>
                        <Col>Non Banking</Col>
                    </Row>
                    <Row className=" s14">
                        <Col className="colorg">Transaction Type</Col>
                        <Col>Financing</Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
                </Card.Body>
                <hr className="border"/>
                <Card.Body>
                <h4 style={{marginBottom:"30px"}} className="color s22 fontb">Description</h4>
                <h4 style={{marginBottom:"30px"}} className="color s14">Honda City IVTEC 2009 available on easy installment plan</h4>
                <h4 style={{marginBottom:"30px"}} className="color s14">1 to 7 year plan</h4>
                <h4 style={{marginBottom:"30px"}} className="color s14">Low mark up</h4>
                <h4 style={{marginBottom:"30px"}} className="color s14">Pure islamic financing</h4>
                <h4 style={{marginBottom:"30px"}} className="color s14">Easy process</h4>
                <h4 style={{marginBottom:"30px"}} className="color s14">No hidden charges</h4>
                <h4 style={{marginBottom:"30px"}} className="color s14">Call for more info</h4>
                <h4 style={{marginBottom:"10px"}} className="color s14">0300 - 458939</h4>
                </Card.Body>
            </Card>
        </div>
        </Col>
        <Col sm={4}>
            <div className="card-add">
        <Card>
            <Card.Body>
                <h2 className="color s18 fontb">Rs 282,000 - 7 Years<span className="span-card">
                    <i className=" arro fa fa-share s24"/>
                    <i className=" arro fa fa-heart s24"/>
                    </span></h2>
                <h4 className="colorg s14">Toyota Corolla GLI 2014" Hasil Karen<br/> Asan Iqsat Pr</h4>
                <h5 className="colorg flocation s12">DHA City Karachi, Karachi, Sindh<span className="span-card">5 days ago</span></h5>
            </Card.Body>
        </Card>
        <br/>
        <Card>
            <Card.Body>
                <h2 className="color s18 fontb">Seller description</h2>
                <div className="seller">
                <i className="fa fa-adn name-logo"/>
                <h4 className="color s14" style={{marginTop:"20px"}}>
                <span className="name-seller s16">Syed Aashir Majeed </span><br/>
                <span className="name-sellerb s12 colorg">Member since Jul 2019</span>
                <span className="span-card"><i className=" arro fa fa-arrow-right s24"/></span>
                </h4>
                </div>
                <button className="seller-button">Chat with Seller</button>
            </Card.Body>
        </Card>
        <br/>
        <Card>
            <Card.Body>
                <h2 className="color s18 fontb">Posted In</h2>
                <h4 className="colorg s12">DHA City Karachi, Karachi, Sindh</h4><br/>
                <img className="bottom-image" width="350px" height="200px" src={require("../ui/staticmap.png").default}/>                
            </Card.Body>
        </Card>
        <h4 className="color fontb s14   bottom-post">AD ID 1023157650 <span className="span-cardf">REPORT THIS AD</span></h4>
        </div>
        </Col>
        </Row>
        </Container>
      </div>
      </React.Fragment>
      )
  }

export default Sell;