import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/pages/home';
import Navigation from './components/nav';
import Sections from './components/pages/sections';
// import Questions from './components/questions';
import Questions from './components/Questions';
import  TabSelect from './components/tabs';
import useToken from './components/useToken';



function App() {
  const {token,setToken} = useToken();
  

  


  if(!token){

    return( 
      <Router>
      <Navigation token={token} />
    <Home setToken={setToken}/>
  </Router>
    )
  }
  return (

<Router>

<Navigation token={token}/>
  <Routes>
  <Route path ='/' element={<Questions token={token}/>}/>
  <Route path='/sections' element={<Sections/>}/>
  <Route path='/Pending'  element={< TabSelect token={token}/>}/>

  
  </Routes>

</Router>
  );
}

export default App;
