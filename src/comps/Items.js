import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Sell from './sell';

function Items(props){

    if("placeholder" in props){
        return(
            <Link to="/sell" className="item-link" >
            <div className="add-item" >
                <div className="poster placeholder">
                    <img width="230px" height="150px" src="https://apollo-singapore.akamaized.net:443/v1/files/44v3beionu7m3-PK/image;s=272x0"/>
                </div>
                <div className="title placeholder">
                    <h2 className="s18 fontb">Rs 300,000 - 7 Years</h2>
                </div>
                <div className="tagline placeholder">
                    <h4 className="s12">Suzuki Wagon R. VXL 2017 ON INSTALLMENT</h4>
                </div>
                <div className="ftr flex ">
                <div className="location placeholder">
                    <h5 className="s12">Mirpur, Azad Kashmir, Pakistan</h5>
                </div>
                <div className="stamp placeholder"/>
                </div>
            </div>
            </Link>
        )
    }
    return(
        <div className="ad-item">

        </div>
    )
    
}

export default Items;