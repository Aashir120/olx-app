import React,{useEffect, useState} from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Items from './Items';

function HomePage(){

    const [list,setList] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        if(loading){
            let _list = [];
            for(let i =0;i<20;i++){
                _list.push(<Items placeholder={true}/>);
            }
            setList(_list);
        }

    },list);

    

    return(
        <React.Fragment>
            <div className="addPost flex">
                <div className="addImage">
                    <img width="100%" height="250px" src="//statics.olx.com.pk/external/base/img/hero_bg_pk.jpg"/>
                </div>
            </div>
            <div className="addPost2 flex">
            <div className="addImage2">
                    <img width="100%" src={require("../ui/add.png").default}/>
                </div>
                </div>
        <div className="home-page">
            <div className="ad-list flex">
            {list}
            </div>
            <button className="load-more fontb c333 anim s20    ">
                Load More
            </button>
        </div>
        <div className="app-ribbon flex aic">
            <Container fluid>
                <Row>
                    <Col>
            <div className="img">
                <img className="bl" src="//statics.olx.com.pk/external/base/img/phone-app.png"/>
            </div>
            </Col>
            <Col>
            <div className="meta">
                <h2 className="title fontb s30 color">TRY THE OLX APP</h2>
                <h2 className="slogan font s18 color">Buy, sell and find just about anything using the app on your mobile.
                </h2>
            </div>
            </Col>
            <Col>
            <div className="links">
            <h2 className="title fontb s20 color">Get your App Today</h2>
            <div className="flex as">
                <a href="#" className="noul bl">
                <img src="//statics.olx.com.pk/external/base/img/appstore_2x.png"/></a>
                <a href="#" className="noul bl">
                <img src="//statics.olx.com.pk/external/base/img/playstore_2x.png"/></a>
            </div>
            </div>
            </Col>
            </Row>
            </Container>
        </div>
        </React.Fragment>
    )
}

export default HomePage;