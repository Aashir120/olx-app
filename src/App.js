import React from 'react';
import './App.css';
import './Props.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './comps/Home'; 
import Footer from './comps/footer'; 
import Sell from './comps/sell';
import Header from './comps/Header';
import {AuthProvider} from './Contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';
import Authform from './comps/authform';
import Login from './comps/login';
import PostAdd from './comps/postad';
import PrivateRoute from './comps/PrivateRoute';
import SellForm from './comps/sellform';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Route path="/" render={(props) =>
    (props.location.pathname !== "/authform" && props.location.pathname !== "/login"
    && props.location.pathname !== "/postAdd" && props.location.pathname !== "/sellForm"
    ) && 
    <Header />}>
  </Route>
    <Switch>
    <Route path="/sell" component={Sell}/>
    <PrivateRoute exact path="/postAdd" component={PostAdd}/>
    <PrivateRoute exact path="/sellForm" component={SellForm}/>
    <Route path="/authform" component={Authform}/>
    <Route path="/login" component={Login}/>
      <Route exact path="/" component={HomePage}/>
      </Switch>
      <Route path="/" render={(props) => 
      (props.location.pathname !== "/authform" && props.location.pathname !== "/login"
      && props.location.pathname !== "/postAdd" && props.location.pathname !== "/sellForm"
      ) && 
    <Footer />}>
    </Route>
      </BrowserRouter>  
      </AuthProvider>
    
  );
}

export default App;
