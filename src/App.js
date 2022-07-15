import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react'
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
  

console.log(token)
  if(!token){
    return <Home setToken={setToken}/>
  }
  return (

<Router>
<Navigation/>
  <Routes>

  <Route path='/sections' element={<Sections/>}/>
  <Route path ='/Questions' element={<Questions/>}/>
  <Route path='/Pending'  element={< TabSelect/>}/>
  
  </Routes>

</Router>
  );
}

export default App;
