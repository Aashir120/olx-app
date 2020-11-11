import React,{useState} from 'react';
import { useHistory , Link} from 'react-router-dom';
import { Container} from 'react-bootstrap';
import {useAuth} from '../Contexts/AuthContext';

function Header(){
    
    const [error,setError] = useState("")
    const {currentUser,logout} = useAuth()
    const history = useHistory()
    async function handlelogout(){
        setError('')
        try{
            await logout()
            history.push("/")

        } catch{
            setError("Failed to log out")
        }
    }

    const nav = [
        {ID: 1,label:"Mobile Phones"},
        {ID: 2,label:"Cars"},
        {ID: 3,label:"Motorcycles"},
        {ID: 4,label:"Houses"},
        {ID: 5,label:"TV-Video-Audio"},
        {ID: 6,label:"Tablets"},
        {ID: 7,label:"Lands & Plots"},
    ]

    return(
        <React.Fragment>
            <Container>
        <div className="header fixed flex aic">
            <div className="logo">
            <Link to="/"><img src={require("../ui/logo.webp").default}/></Link>
        </div>
        <div className="location rel flex aic">
            <div className="fa fa-search ico s22"/>
            <input className="label s16 font" placeholder="Your location" value="Pakistan"/>
            <button className=" arro fa fa-angle-down s24"/>
        </div>
        <div className="search flex aic">
            <input type="text" placeholder="Find Cars, Mobile Phones and More ..." className="query font s15"/>
            <button className="fa fa-search go s30 cfff"/>
        </div>
        <div className="actions flex aic">
            { currentUser && currentUser.email
             ? 
<div class="dropdown">
    <div className="username-lgb">
  <span className="username-lg">{currentUser.email.substr(0,1).toUpperCase()}</span></div> <i  className=" arro fa arrow-down fa-arrow-down s16"/> 
  <div class="dropdown-content">
  <Link className="drop-logout" onClick={handlelogout}>Log Out</Link>
  </div>
         </div> :
        <Link to="/login" className="color fontb s18 noul noulh">Login</Link> 
            }

        <Link className="sell-add" to="/postAdd">
        <button className="sell flex color aic">
            <div className="fa fa-plus ico s24"/>
            <h2 className="s18 fontb" style={{marginTop: "8px"},{marginBottom:"0px"}}>Sell</h2>
            
        </button>
        </Link>
        </div>
        </div>
        </Container>
        <Container>
        <div className="hnav fixed flex aic">
            <button className="view-cates flex aic color">
            <h2 className="s18 font" style={{marginTop:"10px"}}>All Categories</h2>
            <button className=" arro fa fa-angle-down s24"/>
            </button>
            {
                nav.map(item =>{
                    return(
                    <Link to={"/browser/" + item.ID} className="noul noulh color bl font s15">{item.label}</Link>
                    )
                })
            }
        </div>
        </Container>
        <div className="hclr"/>
        </React.Fragment>
    )
}

export default Header;